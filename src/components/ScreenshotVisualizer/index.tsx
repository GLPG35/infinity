import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'

type Props = {
	viewSS?: number,
	setViewSS: (state?: number) => void,
	screenshots: string[]
}

const ScreenshotVisualizer = ({ viewSS, setViewSS, screenshots }: Props) => {
	const [startSS, setStartSS] = useState(0)
	const [bullet, setBullet] = useState<number>()
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: startSS })

	const handleBullets = useCallback((emblaApi: EmblaCarouselType) => {
		setBullet(emblaApi.selectedScrollSnap())
	}, [])

	useEffect(() => {
		setBullet(viewSS)

		if (viewSS === undefined) return
		setStartSS(viewSS)
	}, [viewSS])

	useEffect(() => {
		if (emblaApi) emblaApi.on('select', handleBullets)
	}, [emblaApi, handleBullets])

	const handleBullet = (index: number) => () => {
		if (emblaApi) emblaApi.scrollTo(index)
	}
	
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.viewScreenshotsWrapper}>
			<div ref={emblaRef} className={`${styles.viewScreenshots} embla`}>
				<div className={`${styles.screenshots} embla__container`} style={{ width: `${screenshots.length * 100}%` }}>
					{screenshots.map(url => (
						<div className={`${styles.screenshot} embla__slide`} key={url} onClick={() => setViewSS(undefined)}>
							<div className={styles.pic} onClick={e => e.stopPropagation()}>
								<img src={url} alt="" />
							</div>
						</div>
					))}
				</div>
				<div className={styles.bullets}>
					{screenshots.map((_, i) => (
						<div className={`${styles.bullet} ${i == bullet ? styles.active : ''}`} onClick={handleBullet(i)}></div>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default ScreenshotVisualizer