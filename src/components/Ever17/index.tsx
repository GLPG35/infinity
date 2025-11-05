import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'wouter'
import { AnimatePresence } from 'framer-motion'
import ScreenshotVisualizer from '../ScreenshotVisualizer'

type Props = {
	setDark: (state: boolean) => void
}

const Ever17 = ({ setDark }: Props) => {
	const [viewSS, setViewSS] = useState<number>()

	useEffect(() => {
		setDark(true)
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
								<li>Ever17 -the out of infinity- Himmel Edition v1.3 [PS2 BGM + Voice + SFX Patch] (Recommended)</li>
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
								<span>But if you want, you can access it <Link to='/ever17/guide'>here</Link></span>
							</ul>
						</div>
					</div>
				</div>
			</div>
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
								<div className={styles.pic} onClick={() => setViewSS(i)}>
									<img src={url} alt="" />
								</div>
							))}
						</div>
					</div>
					<div className={styles.section}>
						<h3>Notes</h3>
						<p>The PS2 BGM + Voice + SFX Patch restores the original background music, voices and sound effects present on the PS2 version. This patch was made because the PC release had to be compressed a lot (PCs in the 2000s were inferior to consoles), so the final result ended up sounding pretty bad. As it's better to experience these games in the best way possible, this patch is highly recommended.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ever17