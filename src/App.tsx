import styles from './styles.module.scss'
import { Link, Route, Switch, useLocation } from 'wouter'
import Home from './components/Home'
import { useState, type ChangeEvent } from 'react'
import Never7 from './components/Never7'
import Ever17 from './components/Ever17'
import Ever17Guide from './components/Ever17/Guide'
import Remember11 from './components/Remember11'
import { AnimatePresence, motion } from 'framer-motion'
import { useSiteStore } from './store/useSiteStore'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

const App = () => {
	const [dark, setDark] = useState<'home'|'page'|false>(false)
	const [inView, setInView] = useState(false)
	const [location] = useLocation()
	const [viewLanguage, setViewLanguage] = useState(false)
	const language = useSiteStore(state => state.language)
	const setLanguage = useSiteStore(state => state.setLanguage)
	const [menuOpen, setMenuOpen] = useState(false)
	
	const handleLanguage = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget
		setLanguage(value as 'es'|'en')

		setViewLanguage(false)
	}
	
	return (
		<div className={styles.main}>
			<header className={`${!dark ? '' : dark == 'home' ? styles.dark : styles.darkPage} ${location === '/' && inView ? styles.opacity : ''}`}>
				<div className={styles.headerWrapper}>
					<motion.div className={styles.headerBackground}></motion.div>
					<button className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
					</button>
					<nav className={menuOpen ? styles.active : ''}>
						<ul>
							<li><Link to='/' onClick={() => menuOpen && setMenuOpen(false)}>{language == 'en' ? 'Home' : language == 'es' && 'Inicio'}</Link></li>
							<li><Link to='/never7' onClick={() => menuOpen && setMenuOpen(false)}>Never7</Link></li>
							<li><Link to='/ever17' onClick={() => menuOpen && setMenuOpen(false)}>Ever17</Link></li>
							<li><Link to='/remember11' onClick={() => menuOpen && setMenuOpen(false)}>Remember11</Link></li>
						</ul>
					</nav>
					<div className={styles.languageWrapper}>
						<div className={styles.language} onClick={() => setViewLanguage(!viewLanguage)}>
							{language}
						</div>
						<AnimatePresence>
							{viewLanguage &&
								<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.list}>
									<fieldset>
										<input type="radio" name='language' id="en" value='en' defaultChecked={language == 'en'} onChange={handleLanguage} />
										<label htmlFor="en">English</label>
									</fieldset>
									<fieldset>
										<input type="radio" name='language' id="es" value='es' defaultChecked={language == 'es'} onChange={handleLanguage} />
										<label htmlFor="es">Español</label>
									</fieldset>
								</motion.div>
							}
						</AnimatePresence>
					</div>
				</div>
			</header>
			<Switch>
				<Route path='/'>
					<Home setInView={setInView} setDark={setDark} />
				</Route>
				<Route path='/never7'>
					<Never7 setDark={setDark} />
				</Route>
				<Route path='/ever17'>
					<Ever17 setDark={setDark} />
				</Route>
				<Route path='/ever17/guide'>
					<Ever17Guide setDark={setDark} />
				</Route>
				<Route path='/remember11'>
					<Remember11 setDark={setDark} />
				</Route>
			</Switch>
		</div>
	)
}

export default App
