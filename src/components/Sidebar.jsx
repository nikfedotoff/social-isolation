import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
	const [scrolled, setScrolled] = useState(0)
	const { t } = useTranslation()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrolled(
				(window.pageYOffset /
					(document.body.scrollHeight - document.body.clientHeight)) *
					100
			)
		})
	}, [])

	return (
		<aside>
			<div className="aside-content">
				<div className="scroll-indicator">
					<span className="scroll-indicator__span">
						<span>{t('sections')}</span>
					</span>
					<div className="scroll-indicator__nums">
						<div class="c0218"></div>
						<div class="c0218">01</div>
						<div class="c0218">02</div>
						<div class="c0218">03</div>
						<div class="c0218">04</div>
						<div class="c0218">05</div>
					</div>
					<div className="scroll-indicator__line">
						<svg viewBox="0 0 480 20" class="c0220">
							<defs>
								<pattern
									id="progressLines"
									viewBox="0,0,4,40"
									width="5"
									height="40"
									patternUnits="userSpaceOnUse"
									patternTransform="rotate(30)"
								>
									<line
										x1="0"
										y1="0"
										x2="0"
										y2="40"
										stroke-width="1"
										stroke="currentColor"
									></line>
								</pattern>
							</defs>
							<g
								class="c0221"
								fill="url(#progressLines)"
								style={{
									transform: `translate3d(${
										100 - scrolled
									}%, 0px, 0px)`,
								}}
							>
								<rect
									width="480"
									x="0"
									y="1"
									height="18"
									stroke-width="2"
									stroke="currentColor"
								></rect>
							</g>
							<rect
								width="80"
								height="18"
								x="0"
								y="1"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
							></rect>
							<rect
								width="80"
								height="18"
								x="80"
								y="1"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
							></rect>
							<rect
								width="80"
								height="18"
								x="160"
								y="1"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
							></rect>
							<rect
								width="80"
								height="18"
								x="240"
								y="1"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
							></rect>
							<rect
								width="80"
								height="18"
								x="320"
								y="1"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
							></rect>
							<rect
								width="80"
								height="18"
								x="400"
								y="1"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
							></rect>
						</svg>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
