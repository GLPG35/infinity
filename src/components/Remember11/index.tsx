import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence } from 'framer-motion'
import ScreenshotVisualizer from '../ScreenshotVisualizer'

type Props = {
	setDark: (state: boolean) => void
}

const Remember11 = ({ setDark }: Props) => {
	const [viewSS, setViewSS] = useState<number>()
	
	useEffect(() => {
		setDark(true)
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
			</div>
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
								<div className={styles.pic} onClick={() => setViewSS(i)}>
									<img src={url} alt="" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Remember11