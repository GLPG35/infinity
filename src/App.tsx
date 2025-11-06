import styles from './styles.module.scss'
import { Link, Route, Switch, useLocation } from 'wouter'
import Home from './components/Home'
import { useState } from 'react'
import Never7 from './components/Never7'
import Ever17 from './components/Ever17'
import Ever17Guide from './components/Ever17/Guide'
import Remember11 from './components/Remember11'
import { motion } from 'framer-motion'

const App = () => {
	const [dark, setDark] = useState<'home'|'page'|false>(false)
	const [inView, setInView] = useState(false)
	const [location] = useLocation()
	
	return (
		<div className={styles.main}>
			<header className={`${!dark ? '' : dark == 'home' ? styles.dark : styles.darkPage} ${location === '/' && inView ? styles.opacity : ''}`}>
				<div className={styles.headerWrapper}>
					<motion.div className={styles.headerBackground}></motion.div>
					<nav>
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/never7'>Never7</Link></li>
							<li><Link to='/ever17'>Ever17</Link></li>
							<li><Link to='/remember11'>Remember11</Link></li>
						</ul>
					</nav>
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
