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
import { useSiteStore } from '../../store/useSiteStore'

type Props = {
	setDark: (state: 'home'|'page'|false) => void,
	setInView: (state: boolean) => void
}

const Home = ({ setDark, setInView }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: false })])
	const ref = useRef<HTMLElement>(null)
	const inView = useInView(ref, { margin: '0px 0px -50% 0px', initial: false })
	const [, navigate] = useLocation()
	const language = useSiteStore(state => state.language)
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
			{language == 'en' ?
			<article ref={ref}>
				<section>
					<h2>What is the <span>Infinity</span> Series?</h2>
					<p><span>Infinity</span> is a romance/sci-fi visual novel trilogy developed by KID (5pb./MAGES. predecessor), co-written by Uchikoshi Kotaro (Zero Escape & AI: The Somnium Files) and directed and co-written by Nakazawa Takumi (Root Double & I/O).</p>
					<p>The three entries take place in the same universe and share plot elements such as technology, historical events, phenomena and mechanics.</p>
				</section>
				<section>
					<h2>Why should I read it?</h2>
					<p><span>Infinity</span> contains the roots of today's more well-known series such as Science Adventure and the two mentioned above by Uchikoshi.</p>
					<p>One of the principles that govern the Science Adventure universe is directly inspired by <span>Infinity</span>, as the metafictional aspects present in its more than five works.</p>
					<p>Regarding Uchikoshi's later works, the reuse of plot twists that were applauded in the <span>Infinity</span> series is especially evident in both Zero Escape and AI: The Somnium Files.</p>
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
					<h2>Why shouldn't I play the Steam releases?</h2>
					<p>The only entries available right now on Steam are Never7 and Ever17 as "remastered" versions.</p>
					<p>Never7 suffers from bad upscaling, a 16:9 aspect ratio that cuts sprites in half and also cuts backgrounds, a really bad translation and an ugly UI. This release is really inferior compared to the Eternal Edition with the HD Patch.</p>
					<p>For Ever17 this is tricky, because in this case the Steam release is completely different compared to the Himmel Edition. This is because the Steam release is based on the Xbox 360 remake of the game. This one used 3D assets (these ones were changed in favor of the superior 2D sprites in the Steam release) and completely revamped backgrounds and music, and also new or edited CGs. They also changed the script in weird ways, as a result, changing the story and the experience as a whole.</p>
					<p>As I said in the <Link to="/ever17">Ever17 FAQ section</Link>, you can play it if you want, but make sure to experience it after the Himmel Edition.</p>
				</section>
				<section>
					<h2>What about 12Riven and code_18?</h2>
					<p>While these entries are technically still part of the <span>Infinity</span> Series, 12Riven was known as the beggining and sole entry of the Integral Series (a spin-off of the <span>Infinity</span> Series) and code_18 as a reboot of the <span>Infinity</span> Series.</p>
					<p>Both games share concepts and dynamics with the <span>Infinity</span> Series, but they don't really affect the series in any way.</p>
					<p>12Riven was being originally developed by KID, but the company went bankrupt and the rights were sold to CyberFront. The game was still co-written by Uchikoshi but it was directed by Satou Yasuyuki (KID) and Wakabayashi Ken (CyberFront).</p>
					<p>In the case of code_18, this was a project completely developed by CyberFront, but instead of making it like the prior entries, they ended up making a reboot of the <span>Infinity</span> Series, with the game this time being co-written by Higurashi Chabou and directed by Wakabayashi Ken.</p>
					<p>These games are only available in Japanese at the moment, with 12Riven being currently fan translated (60% completion according to VNDB), while code_18 for now shows no signs of being translated whatsoever.</p>
				</section>
			</article>
			: language == 'es' &&
			<article ref={ref}>
				<section>
					<h2>¿Qué es la Serie <span>Infinity</span>?</h2>
					<p><span>Infinity</span> es una trilogía de novelas visuales de romance/ciencia ficción desarrolladas por KID (predecesora de 5pb./MAGES.), coescritas por Uchikoshi Kotaro (Zero Escape y AI: The Somnium Files) y dirigidas y coescritas por Nakazawa Takumi (Root Double y I/O).</p>
					<p>Las tres entregas se desarrollan en el mismo universo y comparten elementos argumentales como tecnologías, sucesos históricos, fenómenos y las mecánicas detrás de estos.</p>
				</section>
				<section>
					<h2>¿Por qué debería leerla?</h2>
					<p>En <span>Infinity</span> se hallan las raíces de series más conocidas en la actualidad, como Science Adventure y las dos antes mencionadas de Uchikoshi.</p>
					<p>Uno de los principios que rigen el universo de SciADV está inspirado directamente en <span>Infinity</span>, al igual que los aspectos metaficcionales que la caracterizan.</p>
					<p>En cuanto a los trabajos posteriores de Uchikoshi, es especialmente evidente la reutilización de giros de trama que fueron aplaudidos en su tiempo a la serie <span>Infinity.</span></p>
				</section>
				<section>
					<h2>¿Dónde comienzo?</h2>
					<p>Cada entrega introduce elementos que se basan en aquellos de sus antecesoras y juega con la expectativa de lectores ya familiarizados con ellos, por lo que la experiencia será más satisfactoria si se sigue el orden de lanzamiento, que es el siguiente:</p>
					<ul>
						<li>Never7 (2000)</li>
						<li>Ever17 (2002)</li>
						<li>Remember11 (2004)</li>
					</ul>
				</section>
				<section>
					<span>Texto original escrito por @delta3pc</span>
				</section>
				<section>
					<h2>¿Por qué no debería jugar las versiones de Steam?</h2>
					<p>Las únicas versiones disponibles en Steam ahora mismo son Never7 y Ever17 como versiones "remasterizadas".</p>
					<p>Never7 sufre de un mal escalado de imagen, una relación de aspecto en 16:9 que corta los fondos y a su vez los sprites a la mitad, una traducción muy mala y una interfaz fea. Esta versión es sumamente inferior comparada a la Eternal Edition con el parche en HD.</p>
					<p>En el caso de Ever17 es más complicado, ya que en este caso la versión de Steam es completamente diferente a la Himmel Edition. Esto es porque la versión de Steam fue basada en el remake del juego para la Xbox 360. Esta usaba modelos en 3D para los personajes (los cuales fueron cambiados por los superiores sprites en 2D originales) al igual que fondos y música completamente nuevos, como también CGs nuevos o editados. También cambiaron el guión en formas cuestionables, dando como resultado una historia muy distinta, cambiando la experiencia por completo.</p>
					<p>Como dije en la <Link to="/ever17">sección de preguntas frecuentes de Ever17</Link>, puedes elegir jugar esta versión si así lo deseas, pero después de haber experimentado la Himmel Edition.</p>
				</section>
				<section>
					<h2>¿Y qué pasa con 12Riven y code_18?</h2>
					<p>Mientras que estas entregas son técnicamente parte de la Serie <span>Infinity</span>, 12Riven fue conocida como la primera y única entrega de la Serie Integral (un spin-off de la Serie <span>Infinity</span>) y code_18 como un reboot de la Serie <span>Infinity</span>.</p>
					<p>Ambos juegos comparten conceptos y dinámicas con la Serie <span>Infinity</span>, pero no afectan realmente a la serie de ninguna manera.</p>
					<p>12Riven fue originalmente desarrollado por KID, pero la compañía se declaró en bancarrota, vendiendo los derechos a CyberFront. El juego también fue coescrito por Uchikoshi pero fue dirigido por Satou Yasuyuki (KID) y Wakabayashi Ken (CyberFront).</p>
					<p>En el caso de code_18, este proyecto fue completamente desarrollado por CyberFront, pero en vez de hacerlo similar a las entregas anteriores, decidieron hacer un reboot de la Serie <span>Infinity</span>l, con el juego esta vez siendo coescrito por Higurashi Chabou y dirigido por Wakabayashi Ken.</p>
					<p>Estos juegos sólo están disponibles en Japonés por el momento, con 12Riven actualmente siendo traducido por fans (60% de progreso según VNDB), mientras que code_18 por ahora no muestra señales de que vaya a ser traducido.</p>
				</section>
			</article>
			}
		</>
	)
}

export default Home
