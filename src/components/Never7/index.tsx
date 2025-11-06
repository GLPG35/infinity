import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence } from 'framer-motion'
import ScreenshotVisualizer from '../ScreenshotVisualizer'

type Props = {
	setDark: (state: 'home'|'page'|false) => void
}

const Never7 = ({ setDark }: Props) => {
	const [viewSS, setViewSS] = useState<number>()
	const screenshots = Array(5).fill(null).map((_, i) => `/screenshots/never7/screenshot_${i + 1}.png`)
	
	useEffect(() => {
		setDark('page')
	}, [])
	
	return (
		<div className={styles.never7}>
			<AnimatePresence>
				{viewSS !== undefined &&
					<ScreenshotVisualizer {...{viewSS, setViewSS, screenshots}} />
				}
			</AnimatePresence>
			<div className={styles.info}>
				<div className={styles.cover}>
					<picture>
						<source srcSet='/never7_banner_vertical.webp' media='(width >= 950px)' />
						<img src="/never7_banner_horizontal.webp" alt="" />
					</picture>
				</div>
				<div className={styles.text}>
					<div className={styles.title}>
						<h2>Never7 -the end of infinity- Eternal Edition</h2>
						<div className={styles.date}>March 23, 2000</div>
					</div>
					<div className={styles.downloads}>
						<h3>Downloads</h3>
						<div className={styles.section}>
							<span>Base game:</span>
							<ul>
								<li>Never7 -the end of infinity- Eternal Edition v0.6.1 [HD Patch][OP ENG Subs] (Recommended) <a href="https://archive.org/details/never-7-the-end-of-infinity-eternal-edition-v-0.6.1-hd-patch-op-eng" target='_blank'>[Direct]</a></li>
								<li>Never7 -the end of infinity- Eternal Edition v0.6.1 [HD Patch][OP SPA Subs] <a href="https://archive.org/details/never-7-the-end-of-infinity-eternal-edition-v-0.6.1-hd-patch-op-spa" target='_blank'>[Direct]</a></li>
								<li>Never7 -the end of infinity- Eternal Edition v0.6.1 <a href="https://www.mediafire.com/file/nshjldhr3zzm760/n7e.love/file" target='_blank'>[Direct]</a></li>
							</ul>
						</div>
						<div className={styles.section}>
							<span>Engine required to run:</span>
							<ul>
								<li><a href="https://love2d.org/" target='_blank'>LÖVE Engine</a></li>
							</ul>
						</div>
					</div>
					<div className={styles.guide}>
						<h3>Guide (required)</h3>
						<div className={styles.section}>
							<ul>
								<li><a href="https://www.kirikiribasara.com/2025/03/05/never7-completion-guide/">Kiri Kiri Basara - Completion Guide</a></li>
								<span>Most of the dialogue will differ from the one in-game but it's fairly easy to figure it out</span>
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
							<p>You play as Makoto, a student who never attends the lectures at the school. As a punishment, you have to attend an extra seminar on an island with other classmates. However, when you arrive on the island, strange things start happening. A girl is found dead on April 6th, with a small bell in her hand. Immediately after that, you found yourself in the bed and see the date - April 1st! Was the vision of the girl just a dream, or do you possess a power to predict events? This is what you will have to find out, as a series of strange deaths make your seminar much more suspenseful than you have thought.</p>
							<span>[From <a href="http://www.mobygames.com/game/dreamcast/never7-the-end-of-infinity" target='_blank'>Moby Games</a>]</span>
						</div>
					</div>
					<div className={styles.section}>
						<h3>Screenshots</h3>
						<div className={styles.pictures}>
							{screenshots.map((url, i) => (
								<div className={styles.pic} onClick={() => setViewSS(i)} key={url}>
									<img src={url} alt="" />
								</div>
							))}
						</div>
					</div>
					<div className={styles.section}>
						<h3>Notes</h3>
						<p>The HD patch is incomplete, but it's highly recommended. All of the backgrounds and CGs were redrawn in HD, but most of the sprites are still in the original resolution (with a few exceptions).</p>
						<p>The game still has a couple of typos, those are meant to be fixed in the near future.</p>
						<p>The OP with subs in English was made by me (@glpg35) and the one in Spanish by @delta3pc. These subs are not official in any way, and there may be some mistakes (especially in the English version).</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Never7