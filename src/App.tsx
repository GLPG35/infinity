import styles from './styles.module.scss'
import { Link, Route, Switch } from 'wouter'
import Home from './components/Home'
import { useState } from 'react'
import Never7 from './components/Never7'
import Ever17 from './components/Ever17'
import Ever17Guide from './components/Ever17/Guide'
import Remember11 from './components/Remember11'

const App = () => {
	const [dark, setDark] = useState(false)

	return (
		<div className={styles.main}>
			<header className={`${dark ? styles.dark : ''}`}>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/never7'>Never7</Link></li>
						<li><Link to='/ever17'>Ever17</Link></li>
						<li><Link to='/remember11'>Remember11</Link></li>
					</ul>
				</nav>
			</header>
			<Switch>
				<Route path='/'>
					<Home setDark={setDark} />
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
