import { useEffect } from 'react'
import styles from './styles.module.scss'
import { Link } from 'wouter'
import { useSiteStore } from '../../../store/useSiteStore'

type Props = {
	setDark: (state: 'home'|'page'|false) => void
}

const Ever17Guide = ({ setDark }: Props) => {
	const language = useSiteStore(state => state.language)
	
	useEffect(() => {
		setDark('page')
	}, [])
	
	return (
		<div className={styles.ever17Guide}>
			{language == 'en' ?
			<>
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
			</>
			: language == 'es' &&
			<>
				<Link to='/ever17'>Volver atrás</Link>
				<div className={styles.guide}>
					<h2>Guía Ever17</h2>
					<div className={styles.order}>
						<h3>Orden requerido para las rutas</h3>
						<ol>
							<li>Tsugumi (Empieza como Takeshi)</li>
							<li>Sora (Empieza como Takeshi)</li>
							<li>Yu (Empieza como Kid)</li>
							<li>Sara (Empieza como Kid)</li>
							<li>Coco (Empieza como Kid)</li>
						</ol>
					</div>
					<div className={styles.flowChart}>
						<h3>Diagrama de flujo</h3>
						<div className={styles.pic}>
							<img src="/flowchart.png" alt="" />
						</div>
					</div>
				</div>
			</>
			}
		</div>
	)
}

export default Ever17Guide