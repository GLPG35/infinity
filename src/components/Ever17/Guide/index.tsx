import { useEffect } from 'react'
import styles from './styles.module.scss'
import { Link } from 'wouter'

type Props = {
	setDark: (state: 'home'|'page'|false) => void
}

const Ever17Guide = ({ setDark }: Props) => {
	useEffect(() => {
		setDark('page')
	}, [])
	
	return (
		<div className={styles.ever17Guide}>
			<Link to='/ever17'>Go back</Link>
			<div className={styles.guide}>
				<h2>Ever17 Guide</h2>
				<div className={styles.order}>
					<h3>Required route order</h3>
					<ol>
						<li>Tsugumi (Start as Takeshi)</li>
						<li>Sora (Start as Takeshi)</li>
						<li>Yu (Start as Kid)</li>
						<li>Sara (Start as Kid)</li>
						<li>Coco (Start as Kid)</li>
					</ol>
				</div>
				<div className={styles.flowChart}>
					<h3>Flowchart</h3>
					<div className={styles.pic}>
						<img src="/flowchart.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ever17Guide