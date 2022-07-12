import React, { useEffect, useRef, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Menu from './components/Menu'
import { withRouter } from 'react-router-dom'
import TestModal from './components/TestModal'
import Modal from './components/Modal'
import { useTranslation } from 'react-i18next'
import Router from './components/Router'

const App = (props) => {
	const { i18n } = useTranslation()
	const [menu, setMenu] = useState(false)
	const [modal, setModal] = useState('')

	useEffect(() => {
		menu
			? document.body.classList.add('opened-menu')
			: document.body.classList.remove('opened-menu')
	}, [menu])

	const app = useRef()
	const scrollContainer = useRef()
	const secondaryCursor = React.useRef(null)
	const mainCursor = React.useRef(null)
	const positionRef = React.useRef({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	})

	useEffect(() => {
		document.addEventListener('mousemove', (event) => {
			if (secondaryCursor.current.style.opacity == 0) {
				secondaryCursor.current.style.opacity = 1
			}

			const { clientX, clientY } = event

			const mouseX = clientX
			const mouseY = clientY

			positionRef.current.mouseX =
				mouseX - secondaryCursor.current.clientWidth / 2
			positionRef.current.mouseY =
				mouseY - secondaryCursor.current.clientHeight / 2
			mainCursor.current.style.transform = `translate3d(${
				mouseX - mainCursor.current.clientWidth / 2
			}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`
		})

		return () => {}
	}, [])

	useEffect(() => {
		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse)
			const {
				mouseX,
				mouseY,
				destinationX,
				destinationY,
				distanceX,
				distanceY,
			} = positionRef.current
			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX
				positionRef.current.destinationY = mouseY
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * 0.1
				positionRef.current.distanceY = (mouseY - destinationY) * 0.1
				if (
					Math.abs(positionRef.current.distanceX) +
						Math.abs(positionRef.current.distanceY) <
					0.1
				) {
					positionRef.current.destinationX = mouseX
					positionRef.current.destinationY = mouseY
				} else {
					positionRef.current.destinationX += distanceX
					positionRef.current.destinationY += distanceY
				}
			}
			secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
		}
		followMouse()
	}, [])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [props.location.pathname])

	const switchLang = (lang) => {
		i18n.changeLanguage(lang)
	}

	return (
		<div ref={app} className="App">
			<div ref={scrollContainer} className="scroll">
				<Header
					setMenu={setMenu}
					menu={menu}
				/>
				<Sidebar />
				<Menu
					setState={setMenu}
					state={menu}
				/>
				<div className="langs">
					<button onClick={() => switchLang('ru')}>
						ru
					</button>
					&nbsp;&nbsp;
					<button onClick={() => switchLang('en')}>
						en
					</button>
				</div>
				<TestModal />
				<div className="cursor" ref={mainCursor}></div>
				<div className="cursor" ref={secondaryCursor}>
					<svg
						viewBox="0 0 100 100"
						width="100%"
						style={{ transform: 'scale(1)', fill: 'transparent' }}
					>
						<circle
							cx="50"
							cy="50"
							r="48"
							stroke-width="1"
							stroke="currentColor"
						></circle>
					</svg>
				</div>
				<Modal text={modal} />
				<div className="grain"></div>
				<Router setModal={setModal} />
			</div>
		</div>
	)
}

export default withRouter(App)
