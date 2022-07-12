import React from 'react'
import Mission from '../pages/Mission'
import Methods from '../pages/Methods'
import Results from '../pages/Results'
import Interview from '../pages/Interview'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Recs from '../pages/Recs'
import Contact from '../pages/Contact'
import { Route, Switch } from 'react-router-dom'

const Router = ({ setModal }) => {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/mission">
				<Mission />
			</Route>
			<Route path="/methods">
				<Methods />
			</Route>
			<Route path="/results">
				<Results setModal={setModal} />
			</Route>
			<Route path="/help">
				<Recs setModal={setModal} />
			</Route>
			<Route path="/survey">
				<FAQ />
			</Route>
			<Route path="/interview">
				<Interview />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="*">
				<Home />
			</Route>
		</Switch>
	)
}

export default Router
