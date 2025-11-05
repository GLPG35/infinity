import { useCallback, useEffect } from 'react'
import { useLocation } from 'wouter'
import never7Horizontal from '../../../public/never7_banner_horizontal.webp'
import never7Vertical from '../../../public/never7_banner_vertical.webp'
import ever17Horizontal from '../../../public/ever17_banner_horizontal.webp'
import ever17Vertical from '../../../public/ever17_banner_vertical.webp'
import remember11Horizontal from '../../../public/remember11_banner_horizontal.webp'
import remember11Vertical from '../../../public/remember11_banner_vertical.webp'
import styles from './styles.module.scss'
import type { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type Props = {
	setDark: (state: boolean) => void
}

const Home = ({ setDark }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: false })])
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
			return setDark(true)
		}

		setDark(false)
	}, [])

	useEffect(() => {
		setDark(false)
	}, [])

	useEffect(() => {
		if (emblaApi) emblaApi.on('select', handleSlide)
	}, [emblaApi, handleSlide])

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
			<article>
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
			</article>
		</>
	)
}

export default Home