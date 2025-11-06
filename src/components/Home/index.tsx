import { useCallback, useEffect, useRef } from 'react'
import { Link, useLocation } from 'wouter'
import never7Horizontal from '/never7_banner_horizontal.webp?url'
import never7Vertical from '/never7_banner_vertical.webp?url'
import ever17Horizontal from '/ever17_banner_horizontal.webp?url'
import ever17Vertical from '/ever17_banner_vertical.webp?url'
import remember11Horizontal from '/remember11_banner_horizontal.webp?url'
import remember11Vertical from '/remember11_banner_vertical.webp?url'
import styles from './styles.module.scss'
import type { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useInView } from 'framer-motion'

type Props = {
	setDark: (state: 'home'|'page'|false) => void,
	setInView: (state: boolean) => void
}

const Home = ({ setDark, setInView }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: false })])
	const ref = useRef<HTMLElement>(null)
	const inView = useInView(ref, { margin: '0px 0px -50% 0px', initial: false })
	const [, navigate] = useLocation()
	const images = [
		{
			horizontal: never7Horizontal,
			vertical: never7Vertical,
			link: 'never7'
		},
		{
			horizontal: ever17Horizontal,
			vertical: ever17Vertical,
			link: 'ever17'
		},
		{
			horizontal: remember11Horizontal,
			vertical: remember11Vertical,
			link: 'remember11'
		}
	]

	const handleSlide = useCallback((emblaApi: EmblaCarouselType) => {
		if (emblaApi.selectedScrollSnap() == 1) {
			return setDark('home')
		}

		setDark(false)
	}, [])

	useEffect(() => {
		setDark(false)
	}, [])

	useEffect(() => {
		if (emblaApi) emblaApi.on('select', handleSlide)
	}, [emblaApi, handleSlide])

	useEffect(() => {
		setInView(inView)
	}, [inView])

	return (
		<>
			<div className={`${styles.gamesWrapper} embla`} ref={emblaRef}>
				<div className={`${styles.games} embla__container`}>
					{images.map(({ horizontal, vertical, link }) => (
						<div key={link} className={`${styles.game} embla__slide`} onClick={() => navigate(`/${link}`)}>
							<div className={styles.banner}>
								<picture>
									<source srcSet={horizontal} media='(width >= 950px)' />
									<img src={vertical} style={{ objectPosition: link == 'never7' ? 'center top' : 'center bottom' }} alt="" />
								</picture>
							</div>
						</div>
					))}
				</div>
			</div>
			<article ref={ref}>
				<section>
					<h2>What is the <span>Infinity</span> Series?</h2>
					<p>Infinity is a sci-fi visual novel trilogy developed by KID (5pb./MAGES. predecessor), written by Uchikoshi Kotaro (creator of Zero Escape & AI: The Somnium Files) and directed by Nakazawa Takumi (creator of I/O & Myself;Yourself).</p>
					<p>The three entries take place in the same universe and share plot elements such as technology, historical events, phenomena and mechanics.</p>
				</section>
				<section>
					<h2>Why should I read it?</h2>
					<p>Infinity contains the roots of today's more well-known series such as Science Adventure and the two mentioned above by Uchikoshi.</p>
					<p>One of the principles that govern the Science Adventure universe is directly inspired by Infinity, as the metafictional aspects present in its more than five works.</p>
					<p>Regarding Uchikoshi's later works, the reuse of plot twists that were applauded in the Infinity series is especially evident in both Zero Escape and AI: The Somnium Files.</p>
				</section>
				<section>
					<h2>Where do I begin?</h2>
					<p>Each entry contains elements from its predecessors, playing with the expectations of the readers that are already used to them. That's why, to have the best experience as possible, one should follow the release order to play the games:</p>
					<ul>
						<li>Never7 (2000)</li>
						<li>Ever17 (2002)</li>
						<li>Remember11 (2004)</li>
					</ul>
				</section>
				<section>
					<span>Original text by @delta3pc</span>
				</section>
				<section>
					<h2>Why can't I play the Steam releases?</h2>
					<p>The only entries available right now on Steam are Never7 and Ever17 as "remastered" versions.</p>
					<p>Never7 suffers from bad upscaling, a 16:9 aspect ratio that cuts sprites in half and also cuts backgrounds, a really bad translation and an ugly UI. This release is really inferior compared to the Eternal Edition with the HD Patch.</p>
					<p>For Ever17 this is tricky, because in this case the Steam release is completely different compared to the Himmel Edition. This is because the Steam release is based on the Xbox 360 remake of the game. This one used 3D assets (these ones were changed in favor of the superior 3D models in the Steam release) and completely revamped backgrounds and music, and also new or edited CGs. They also changed the script in weird ways, as a result, changing the story and the experience as a whole.</p>
					<p>As I said in the <Link to="/ever17">Ever17 FAQ section</Link>, you can play it if you want, but make sure to experience it after the Himmel Edition.</p>
				</section>
			</article>
		</>
	)
}

export default Home