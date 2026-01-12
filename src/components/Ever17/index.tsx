import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'wouter'
import { AnimatePresence } from 'framer-motion'
import ScreenshotVisualizer from '../ScreenshotVisualizer'
import { useSiteStore } from '../../store/useSiteStore'

type Props = {
	setDark: (state: 'home'|'page'|false) => void
}

const Ever17 = ({ setDark }: Props) => {
	const [viewSS, setViewSS] = useState<number>()
	const language = useSiteStore(state => state.language)

	useEffect(() => {
		setDark('page')
	}, [])

	const screenshots = Array(6).fill(null).map((_, i) => `/screenshots/ever17/screenshot_${i + 1}.png`)
	
	return (
		<div className={styles.ever17}>
			<AnimatePresence>
				{viewSS !== undefined &&
					<ScreenshotVisualizer {...{viewSS, setViewSS, screenshots}} />
				}
			</AnimatePresence>
			<div className={styles.info}>
				<div className={styles.cover}>
					<picture>
						<source srcSet="/ever17_banner_vertical.webp" media='(width >= 950px)' />
						<img src="/ever17_banner_horizontal.webp" alt="" />
					</picture>
				</div>
				{language == 'en' ?
				<div className={styles.text}>
					<div className={styles.title}>
						<h2>Ever17 -the out of infinity- Himmel Edition</h2>
						<div className={styles.date}>August 29, 2002</div>
					</div>
					<div className={styles.downloads}>
						<h3>Downloads</h3>
						<div className={styles.section}>
							<span>Base game:</span>
							<ul>
								<li>Ever17 -the out of infinity- Himmel Edition v1.3 [PS2 BGM + Voice + SFX Patch] (Recommended) <a href="magnet:?xt=urn:btih:3EWP7TMT45NAOP77SAP4NBU3BYYDT4AW&dn=ever17-the-out-of-infinity-himmel-edition-v1.3-ps2-bgm-voice-sfx-patch&tr.1=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr.2=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr.3=http%3A%2F%2Fbt2.archive.org%3A6969%2Fannounce">[Torrent]</a> <a href="https://archive.org/details/ever17-the-out-of-infinity-himmel-edition-v1.3-ps2-bgm-voice-sfx-patch" target='_blank'>[Direct]</a></li>
								<li>Ever17 -the out of infinity- Himmel Edition v1.3 <a href="magnet:?xt=urn:btih:4d4dcda7b4ca5ff520ad3e2cf819f7ef639231b9&dn=Ever17%20-The%20Out%20of%20Infinity-%20%5BHimmel%20Edition%20v1.3%5D&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce">[Torrent]</a> <a href="https://archive.org/details/ever-17-the-out-of-infinity" target='_blank'>[Direct]</a></li>
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
						<h3>Guide (required)</h3>
						<div className={styles.section}>
							<ul>
								<li>Included inside patch</li>
								<span>The patch includes a file (patch_readme.html) in the game folder, which includes a guide in form of a flowchart.</span>
								<span>But if you want, you can <Link to='/ever17/guide'>access it here</Link></span>
							</ul>
						</div>
					</div>
					<div className={styles.sideContent}>
						<h3>Side content</h3>
						<div className={styles.section}>
							<ul>
								<span>This content must be watched after finishing the game, as it contains giant spoilers about the game's ending.</span>
								<li>
									<div className={styles.spoilerContent}>
										Drama CD - <details><summary>[Click to show big spoiler]</summary>2035</details> (ENG Subs) <a href="https://www.youtube.com/watch?v=5F_TlQjRdmU">[YouTube]</a>
									</div>
								</li>
								<li>
									Drama CD - After You've Gone (Video with ENG Subs coming soon)
								</li>
							</ul>
						</div>
					</div>
				</div>
				: language == 'es' &&
				<div className={styles.text}>
					<div className={styles.title}>
						<h2>Ever17 -the out of infinity- Himmel Edition</h2>
						<div className={styles.date}>29 de agosto, 2002</div>
					</div>
					<div className={styles.downloads}>
						<h3>Descargas</h3>
						<div className={styles.section}>
							<span>Juego base:</span>
							<ul>
								<li>Ever17 -the out of infinity- Himmel Edition v1.3 [PS2 BGM + Voice + SFX Patch] (Recomendado) <a href="magnet:?xt=urn:btih:3EWP7TMT45NAOP77SAP4NBU3BYYDT4AW&dn=ever17-the-out-of-infinity-himmel-edition-v1.3-ps2-bgm-voice-sfx-patch&tr.1=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr.2=http%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr.3=http%3A%2F%2Fbt2.archive.org%3A6969%2Fannounce">[Torrent]</a> <a href="https://archive.org/details/ever17-the-out-of-infinity-himmel-edition-v1.3-ps2-bgm-voice-sfx-patch" target='_blank'>[Directa]</a></li>
								<li>Ever17 -the out of infinity- Himmel Edition v1.3 <a href="magnet:?xt=urn:btih:4d4dcda7b4ca5ff520ad3e2cf819f7ef639231b9&dn=Ever17%20-The%20Out%20of%20Infinity-%20%5BHimmel%20Edition%20v1.3%5D&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce">[Torrent]</a> <a href="https://archive.org/details/ever-17-the-out-of-infinity" target='_blank'>[Directa]</a></li>
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
						<h3>Guía (requerida)</h3>
						<div className={styles.section}>
							<ul>
								<li>Incluída dentro del parche</li>
								<span>El parche incluye un archivo (patch_readme.html) en la carpeta del juego, el cual incluye una guía en forma de diagrama de flujo.</span>
								<span>Pero si quieres, puedes <Link to='/ever17/guide'>verla aquí</Link></span>
							</ul>
						</div>
					</div>
					<div className={styles.sideContent}>
						<h3>Contenido complementario</h3>
						<div className={styles.section}>
							<ul>
								<span>Este contenido debe visualizarse una vez terminado el juego, ya que contiene spoilers gigantes sobre el final del mismo.</span>
								<li>
									<div className={styles.spoilerContent}>
										CD Drama - <details><summary>[Click para mostrar gran spoiler]</summary>2035</details> (ENG Subs) <a href="https://www.youtube.com/watch?v=5F_TlQjRdmU">[YouTube]</a>
									</div>
								</li>
								<li>
									CD Drama - After You've Gone (Video con subtítulos en inglés pronto)
								</li>
							</ul>
						</div>
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
							<p>Ever17 is the tale of seven individuals who become trapped 51 meters below the surface in the underwater marine theme park 'LeMU'. After an incident, almost half of LeMU becomes flooded, and the path to the surface and the communication lines are cut off. In addition, LeMU is under constant assault by severe water pressure, limiting time to find a means of escape to 119 hours. Escape is not the only concern, however; many questions arise as to the legitimacy of the accident and whether or not those trapped there were brought there for a purpose.</p>
							<span>[From <a href="https://en.wikipedia.org/wiki/Ever_17:_The_Out_of_Infinity" target='_blank'>Wikipedia</a>]</span>
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
						<h3>Notes</h3>
						<p>The PS2 BGM + Voice + SFX Patch restores the original background music, voices and sound effects present on the PS2 version. This patch was made because the PC release had to be compressed a lot (PCs in the 2000s were inferior to consoles), so the final result ended up sounding pretty bad. As it's better to experience these games in the best way possible, this patch is highly recommended.</p>
					</div>
					<div className={styles.section}>
						<h3>FAQ</h3>
						<div className={styles.questions}>
							<div className={styles.question}>
								<h4>How do I run the game? There are too many .exe files</h4>
								<p>To run the game you need to execute the "ever17PC_us.exe" file and leave every option by default.</p>
							</div>
							<div className={styles.question}>
								<h4>How do I use Magpie?</h4>
								<p>First you need to start Magpie by double clicking the .exe file. Once Magpie is open you need to select a scaling factor (for this game 3x is recommended) and a scaling model. As mentioned above, CuNNy is highly recommended, but if you don't want to use an AI model you can use Lanczos.</p>
								<p>After everything is configured properly, you can start the game (in windowed mode) and press the shortcut "Alt+Shift+Q" to activate the upscaling. With that done, a menu should appear on the top with a bunch of options, just select the option to play in fullscreen.</p>
							</div>
							<div className={styles.question}>
								<h4>Why can't I play the remake that's available on Steam?</h4>
								<p>The remake is not intended if it's your first time playing this game. You are better off playing it after finishing Ever17 - Himmel Edition, as the remake deviates a lot from the original game, spoiling a lot of major plot points early on, while also changing the script significantly, affecting the overall understanding of the plot.</p>
								<p>Also, Uchikoshi and Nakazawa did not participate in the production of this remake at all, they were replaced by Shikura Chiyomaru (creator of the Science Adventure) for the production and Yamada Shichirou for the scenario reconstruction.</p>
								<p>If you still want to experience this game after playing the original, you can <a href="https://store.steampowered.com/app/2392500/Ever_17__The_Out_of_Infinity/" target='_blank'>purchase the game here.</a></p>
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
							<p>Ever17 es una historia de siete individuos que quedan atrapados 51 metros debajo de la superficie en el parque temático subacuático 'LeMU'. Después del incidente, casi la mitad de LeMU se inunda, y tanto los caminos hacia la superficie como las comunicaciones están cortadas. Por si fuera poco, LeMU se encuentra bajo la constante presión severa del agua, limitando el tiempo disponible para encontrar una salida a tan sólo 119 horas. Escapar no es la única preocupación; sin embargo, muchas preguntas salen a la superficie sobre la legitimidad del accidente y si aquellos que quedaron atrapados fueron llevados allí con algún propósito.</p>
							<span>[De <a href="https://en.wikipedia.org/wiki/Ever_17:_The_Out_of_Infinity" target='_blank'>Wikipedia</a>] (Traducido al español por @glpg35)</span>
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
						<h3>Notas</h3>
						<p>El parche de PS2 BGM + Voice + SFX restaura la música de fondo original, voces y efectos de sonido presentes en la versión de PS2. Este parche fue hecho porque la versión de PC tuvo que ser enormemente compresa (las PCs en los años 2000 eran inferiores a las consolas), por lo que el resultado final acabó escuchándose bastante mal. Como es mejor experimentar estos juegos de la mejor manera posible, este parche es altamente recomendado.</p>
					</div>
					<div className={styles.section}>
						<h3>Preguntas frecuentes</h3>
						<div className={styles.questions}>
							<div className={styles.question}>
								<h4>¿Cómo corro este juego? Hay muchos archivos .exe</h4>
								<p>Para correr el juego necesitas ejecutar el archivo "ever17PC_us.exe" y dejar todas las opciones predeterminadas.</p>
							</div>
							<div className={styles.question}>
								<h4>¿Cómo uso Magpie?</h4>
								<p>Primero necesitas iniciar Magpie haciendo doble click en el archivo .exe. Una vez que Magpie esté abierto, necesitas elegir un factor de escalado (para este juego se recomienda el 3x) y un modelo de escalado. Como se menciona arriba, CuNNy es altamente recomendado, pero si no quieres usar un modelo de IA puedes usar Lanczos.</p>
								<p>Después de que todo esté configurado apropiadamente, puedes iniciar el juego (en modo ventana) y presionar el atajo de teclado "Alt+Shift+Q" para activar el escalado. Una vez realizado, un menú debería aparecer en la parte superior de la pantalla con varias opciones, de las cuales sólo necesitas seleccionar la opción para jugar en pantalla completa.</p>
							</div>
							<div className={styles.question}>
								<h4>¿Por qué no puedo jugar el remake disponible en Steam?</h4>
								<p>El remake no está pensado para aquellas personas que juegan este juego por primera vez. Es preferible que lo juegues luego de terminar Ever17 - Himmel Edition, ya que el remake se desvía mucho del juego original, dando spoilers sobre puntos importantes de la trama en etapas muy tempranas del juego, y a su vez cambiando el guión significativamente, afectando la comprensión general de la trama.</p>
								<p>Además, Uchikoshi y Nakazawa no participaron en la producción de este remake en ninguna forma, siendo reemplazados por Shikura Chiyomaru (creador de la Science Adventure) para la producción y Yamada Shichirou para la reconstrucción de escenarios.</p>
								<p>Si aún así quieres experimentar el juego después de jugar el original, puedes <a href="https://store.steampowered.com/app/2392500/Ever_17__The_Out_of_Infinity/" target='_blank'>comprar el juego aquí.</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			}
		</div>
	)
}

export default Ever17