export const config = {
	matcher: ['/:page*'],
	runtime: 'bun'
}

export default async function middleware(req: Request) {
	const url = new URL(req.url)
	const { pathname } = url
	const userAgent = req.headers.get('user-agent') as string

	const socialMediaCrawlerUserAgents = /Twitterbot|facebookexternalhit|Facebot|LinkedInBot|Pinterestbot|Slackbot|vkShare|W3C_Validator/i
	const isSocialMediaCrawler = socialMediaCrawlerUserAgents.test(userAgent)

	if (!isSocialMediaCrawler) return new Response(null, { status: 200, headers: { Location: '/' } })

	const pages = {
		'/never7': {
			title: 'Infinity Series - Never7',
			image: 'https://infinityseri.es/never7_banner_horizontal.webp'
		},
		'/ever17': {
			title: 'Infinity Series - Ever17',
			image: 'https://infinityseri.es/ever17_banner_horizontal.webp'
		},
		'/ever17/guide': {
			title: 'Infinity Series - Ever17 Guide',
			image: 'https://infinityseri.es/ever17_banner_horizontal.webp'
		},
		'/remember11': {
			title: 'Infinity Series - Remember11',
			image: 'https://infinityseri.es/remember11_banner_horizontal.webp'
		}
	};

	const isHome = pathname == '/'

	return new Response(`
		<html>
		<head>
			<meta charset="UTF-8" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
			<link rel="manifest" href="/site.webmanifest">
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>${!isHome ? pages[pathname].title : 'Infinity Series'}</title>
			<meta name="description" content="This story is not over yet. Because only you are in the infinity loop." />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="${!isHome ? pages[pathname].title : 'Infinity Series'}" />
			<meta property="og:description" content="This story is not over yet. Because only you are in the infinity loop." />
			<meta property="og:url" content="https://infinityseri.es/" />
			<meta property="og:image" content=${!isHome ? pages[pathname].image : pages[Math.floor(Math.random() * 3)].image} />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://infinityseri.es/" />
			<meta property="twitter:title" content="${!isHome ? pages[pathname].title : 'Infinity Series'}" />
			<meta property="twitter:description" content="This story is not over yet. Because only you are in the infinity loop." />
			<meta property="twitter:image" content=${!isHome ? pages[pathname].image : pages[Math.floor(Math.random() * 3)].image} />
		</head>
		<body><img src=${!isHome ? pages[pathname].image : pages[Math.floor(Math.random() * 3)].image} /></body>
		</html>
	`, { headers: { 'content-type': 'text/html' } },)
}