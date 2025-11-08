import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence } from 'framer-motion'
import ScreenshotVisualizer from '../ScreenshotVisualizer'
import { useSiteStore } from '../../store/useSiteStore'

type Props = {
	setDark: (state: 'home'|'page'|false) => void
}

const Remember11 = ({ setDark }: Props) => {
	const [viewSS, setViewSS] = useState<number>()
	const language = useSiteStore(state => state.language)
	
	useEffect(() => {
		setDark('page')
	}, [])
	
	const screenshots = Array(5).fill(null).map((_, i) => `/screenshots/remember11/screenshot_${i + 1}.png`)
	
	return (
		<div className={styles.remember11}>
			<AnimatePresence>
				{viewSS !== undefined &&
					<ScreenshotVisualizer {...{viewSS, setViewSS, screenshots}} />
				}
			</AnimatePresence>
			<div className={styles.info}>
				<div className={styles.cover}>
					<picture>
						<source srcSet='/remember11_banner_vertical.webp' media='(width >= 950px)' />
						<img src="/remember11_banner_horizontal.webp" alt="" />
					</picture>
				</div>
				{language == 'en' ?
				<div className={styles.text}>
					<div className={styles.title}>
						<h2>Remember11 -the age of infinity- Gestalt Edition</h2>
						<div className={styles.date}>March 18, 2004</div>
					</div>
					<div className={styles.downloads}>
						<h3>Downloads</h3>
						<div className={styles.section}>
							<span>Base game:</span>
							<ul>
								<li>Remember11 -the age of infinity- Gestalt Edition v1.2.1 <a href="magnet:?xt=urn:btih:d1f46b0156ef894f55746b7afcf95465f7d761cc&dn=Remember11%20-the%20age%20of%20infinity-%20%5BGestalt%20Edition%20v1.2.1%5D&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce">[Torrent]</a> <a href="https://community.pcgamingwiki.com/files/file/2606-remember11-the-age-of-infinity-gestalt-edition/" target='_blank'>[Direct]</a></li>
							</ul>
						</div>
						<div className={styles.section}>
							<span>Upscaler (recommended):</span>
							<ul>
								<li><a href="https://github.com/Blinue/Magpie/releases" target='_blank'>Magpie</a></li>
								<span>CuNNy model is recommended for better results, but if you don't want to use an AI upscaler you can always use something like Lanczos</span>
							</ul>
						</div>
					</div>
					<div className={styles.guide}>
						<h3>Guide not required</h3>
					</div>
				</div>
				: language == 'es' &&
				<div className={styles.text}>
					<div className={styles.title}>
						<h2>Remember11 -the age of infinity- Gestalt Edition</h2>
						<div className={styles.date}>18 de marzo, 2004</div>
					</div>
					<div className={styles.downloads}>
						<h3>Descargas</h3>
						<div className={styles.section}>
							<span>Juego base:</span>
							<ul>
								<li>Remember11 -the age of infinity- Gestalt Edition v1.2.1 <a href="magnet:?xt=urn:btih:d1f46b0156ef894f55746b7afcf95465f7d761cc&dn=Remember11%20-the%20age%20of%20infinity-%20%5BGestalt%20Edition%20v1.2.1%5D&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce">[Torrent]</a> <a href="https://community.pcgamingwiki.com/files/file/2606-remember11-the-age-of-infinity-gestalt-edition/" target='_blank'>[Directa]</a></li>
							</ul>
						</div>
						<div className={styles.section}>
							<span>Escalador de imagen (recomendado):</span>
							<ul>
								<li><a href="https://github.com/Blinue/Magpie/releases" target='_blank'>Magpie</a></li>
								<span>El modelo CuNNy es el recomendado para mejores resultados, pero si no quieres usar un escalador de imagen por IA, siempre puedes usar algo como Lanczos</span>
							</ul>
						</div>
					</div>
					<div className={styles.guide}>
						<h3>Guía no necesaria</h3>
					</div>
				</div>
				}
			</div>
			{language == 'en' ?
			<div className={styles.moreInfo}>
				<h2>More information</h2>
				<div className={styles.text}>
					<div className={styles.section}>
						<h3>Description</h3>
						<div className={styles.description}>
							<p>Fuyukawa Kokoro, a third-year sociology major, boards a plane bound for Hokkaido to meet a research subject in the Specified Psychiatric Hospital for Isolation and Aegis, or SPHIA. For unknown reasons, her plane crashes in the mountains in the middle of a snowstorm. Of the 31 passengers, only she, Kusuda Yuni, Yomogi Seiji, and Mayuzumi Lin survive unharmed. Unable to establish communication with the outside world due to the fierce snowstorm, the four decide to take shelter in an empty cabin and wait until the storm passes.</p>
							<p>Yuukidou Satoru, falls from the SPHIA clock tower. He later awakens with some memory loss and the realization that someone is out to kill him. Unable to leave the SPHIA facility due to a snowstorm, Satoru's only chance at living is to find that person among the three other residents (or perhaps the hidden culprit) of SPHIA.</p>
							<p>Shortly after, Kokoro and Satoru realize that they are somehow exchanging bodies and Yuni appears to be at both of their locations...</p>
							<span>[From <a href="https://en.wikipedia.org/wiki/Remember_11:_The_Age_of_Infinity" target='_blank'>Wikipedia</a>]</span>
						</div>
					</div>
					<div className={styles.section}>
						<h3>Screenshots</h3>
						<div className={styles.pictures}>
							{screenshots.map((url, i) => (
								<div className={styles.pic} key={url} onClick={() => setViewSS(i)}>
									<img src={url} alt="" />
								</div>
							))}
						</div>
					</div>
					<div className={styles.section}>
						<h3>FAQ</h3>
						<div className={styles.questions}>
							<div className={styles.question}>
								<h4>How do I run the game? There are too many .exe files</h4>
								<p>To run the game you need to execute the "R11-English-Gestalt.exe" file.</p>
							</div>
							<div className={styles.question}>
								<h4>How do I use Magpie?</h4>
								<p>First you need to start Magpie by double clicking the .exe file. Once Magpie is open you need to select a scaling factor (for this game 3x is recommended) and a scaling model. As mentioned above, CuNNy is highly recommended, but if you don't want to use an AI model you can use Lanczos.</p>
								<p>After everything is configured properly, you can start the game (in windowed mode) and press the shortcut "Alt+Shift+Q" to activate the upscaling. With that done, a menu should appear on the top with a bunch of options, just select the option to play in fullscreen.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			: language == 'es' &&
			<div className={styles.moreInfo}>
				<h2>Más información</h2>
				<div className={styles.text}>
					<div className={styles.section}>
						<h3>Descripción</h3>
						<div className={styles.description}>
							<p>Fuyukawa Kokoro, una estudiante de sociología de tercer año, sube a un avión con destino a Hokkaido para ir a ver a un sujeto de estudio en el Hospital Psiquiátrico Designado para la Provisión de Aislamiento y Amparo (SPHIA por sus siglas en inglés). Por razones desconocidas, el avión se estrella en las montañas, en mitad de una tormenta de nieve. De los 31 pasajeros, sólo ella, Kusuda Yuni, Yomogi Seiji y Mayuzumi Lin sobreviven. Sin manera de comunicarse con el mundo exterior debido a la fuerte tormenta, los cuatro deciden refugiarse en una cabaña y esperar hasta que las condiciones mejoren.</p>
							<p>Yukidoh Satoru cae de la torre del reloj de SPHIA. Más tarde despierta y cae en la cuenta de que ha perdido algunos recuerdos y de que alguien lo acecha para matarlo. Sin manera de huir de las instalaciones, la única opción que tiene para salvar su vida es hallar a esa persona de entre los otros tres residentes de SPHIA.</p>
							<p>Al poco tiempo, Kokoro y Satoru comprenden que, de alguna manera, están intercambiando cuerpos y que Yuni parece encontrarse en las ubicaciones de ambos...</p>
							<span>[De <a href="https://en.wikipedia.org/wiki/Remember_11:_The_Age_of_Infinity" target='_blank'>Wikipedia</a>] (Traducido al español por @delta3pc)</span>
						</div>
					</div>
					<div className={styles.section}>
						<h3>Capturas de pantalla</h3>
						<div className={styles.pictures}>
							{screenshots.map((url, i) => (
								<div className={styles.pic} key={url} onClick={() => setViewSS(i)}>
									<img src={url} alt="" />
								</div>
							))}
						</div>
					</div>
					<div className={styles.section}>
						<h3>Preguntas frecuentes</h3>
						<div className={styles.questions}>
							<div className={styles.question}>
								<h4>¿Cómo corro este juego? Hay muchos archivos .exe</h4>
								<p>Para correr el juego necesitas ejecutar el archivo "R11-English-Gestalt.exe".</p>
							</div>
							<div className={styles.question}>
							<h4>¿Cómo uso Magpie?</h4>
								<p>Primero necesitas iniciar Magpie haciendo doble click en el archivo .exe. Una vez que Magpie esté abierto, necesitas elegir un factor de escalado (para este juego se recomienda el 3x) y un modelo de escalado. Como se menciona arriba, CuNNy es altamente recomendado, pero si no quieres usar un modelo de IA puedes usar Lanczos.</p>
								<p>Después de que todo esté configurado apropiadamente, puedes iniciar el juego (en modo ventana) y presionar el atajo de teclado "Alt+Shift+Q" para activar el escalado. Una vez realizado, un menú debería aparecer en la parte superior de la pantalla con varias opciones, de las cuales sólo necesitas seleccionar la opción para jugar en pantalla completa.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			}
		</div>
	)
}

export default Remember11