import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './i18next'

ReactDOM.render(
	<Suspense fallback={<div></div>}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Suspense>,
	document.getElementById('root')
)