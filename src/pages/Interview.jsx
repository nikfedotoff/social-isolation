import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import AL from '../components/AnimatedLetter'
import { useTranslation } from 'react-i18next'

const Interview = () => {
	useEffect(() => {
		document.body.classList.add('faq-loaded')

		return () => {
			document.body.classList.remove('faq-loaded')
		}
	}, [])

	const { t } = useTranslation()

	return (
		<div className="light">
			<div className="page-title">
				<h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 169 169"
						width="169"
						height="169"
						preserveAspectRatio="xMidYMid meet"
					>
						<defs>
							<clipPath id="__lottie_element_130">
								<rect
									width="169"
									height="169"
									x="0"
									y="0"
								></rect>
							</clipPath>
							<mask id="__lottie_element_137" mask-type="alpha">
								<g
									transform="matrix(3.1639299392700195,0,0,3.1639299392700195,41.57792663574219,-134.35214233398438)"
									opacity="1"
									style={{ display: 'block' }}
								>
									<g
										opacity="1"
										transform="matrix(1,0,0,1,13.25,69.25)"
									>
										<path
											fill="rgb(255,0,0)"
											fill-opacity="1"
											d=" M0,-15.25 C8.416475296020508,-15.25 15.25,-8.416475296020508 15.25,0 C15.25,8.416475296020508 8.416475296020508,15.25 0,15.25 C-8.416475296020508,15.25 -15.25,8.416475296020508 -15.25,0 C-15.25,-8.416475296020508 -8.416475296020508,-15.25 0,-15.25z"
										></path>
										<path
											stroke-linecap="butt"
											stroke-linejoin="miter"
											fill-opacity="0"
											stroke-miterlimit="4"
											stroke="rgb(255,255,255)"
											stroke-opacity="1"
											stroke-width="2"
											d=" M0,-15.25 C8.416475296020508,-15.25 15.25,-8.416475296020508 15.25,0 C15.25,8.416475296020508 8.416475296020508,15.25 0,15.25 C-8.416475296020508,15.25 -15.25,8.416475296020508 -15.25,0 C-15.25,-8.416475296020508 -8.416475296020508,-15.25 0,-15.25z"
										></path>
									</g>
								</g>
							</mask>
						</defs>
						<g clip-path="url(#__lottie_element_130)">
							<g
								mask="url(#__lottie_element_137)"
								style={{ display: 'block' }}
							>
								<g transform="matrix(1,0,0,1,0,0)" opacity="1">
									<g
										opacity="1"
										transform="matrix(1,0,0,1,83.98400115966797,85.00800323486328)"
									>
										<path
											fill="rgb(217,225,204)"
											fill-opacity="1"
											d=" M30.638999938964844,8.013999938964844 C14.541000366210938,10.696999549865723 3.7009999752044678,13.993000030517578 0.4950000047683716,32.104000091552734 C0.4950000047683716,32.104000091552734 0.4950000047683716,-45.095001220703125 0.4950000047683716,-45.095001220703125 C0.4950000047683716,-45.095001220703125 -0.4970000088214874,-45.095001220703125 -0.4970000088214874,-45.095001220703125 C-0.4970000088214874,-45.095001220703125 -0.4970000088214874,32.10499954223633 -0.4970000088214874,32.10499954223633 C-3.7019999027252197,13.993000030517578 -14.539999961853027,10.696999549865723 -30.638999938964844,8.013999938964844 C-30.638999938964844,8.013999938964844 -30.80299949645996,8.993000030517578 -30.80299949645996,8.993000030517578 C-12.015000343322754,12.123000144958496 -0.5,15.543000221252441 -0.4970000088214874,45.095001220703125 C-0.4970000088214874,45.095001220703125 0.4950000047683716,45.095001220703125 0.4950000047683716,45.095001220703125 C0.49900001287460327,15.543000221252441 12.015000343322754,12.123000144958496 30.80299949645996,8.993000030517578 C30.80299949645996,8.993000030517578 30.638999938964844,8.013999938964844 30.638999938964844,8.013999938964844z"
										></path>
									</g>
								</g>
							</g>
							<g
								transform="matrix(4.860000133514404,0,0,4.860000133514404,251.67001342773438,275.9700012207031)"
								opacity="1"
								style={{ display: 'block' }}
							>
								<g
									opacity="1"
									transform="matrix(1,0,0,1,-34.5,-39.5)"
								>
									<path
										stroke-linecap="butt"
										stroke-linejoin="miter"
										fill-opacity="0"
										stroke-miterlimit="4"
										stroke="rgb(217,225,204)"
										stroke-opacity="1"
										stroke-width="0.2"
										d=" M0,-17 C9.38230037689209,-17 17,-9.38230037689209 17,0 C17,9.38230037689209 9.38230037689209,17 0,17 C0,17 0,17 0,17"
									></path>
								</g>
							</g>
							<g
								transform="matrix(4.860000133514404,0,0,4.860000133514404,251.67001342773438,275.9700012207031)"
								opacity="1"
								style={{ display: 'block' }}
							>
								<g
									opacity="1"
									transform="matrix(1,0,0,1,-34.5,-39.5)"
								>
									<path
										stroke-linecap="butt"
										stroke-linejoin="miter"
										fill-opacity="0"
										stroke-miterlimit="4"
										stroke="rgb(217,225,204)"
										stroke-opacity="1"
										stroke-width="0.2"
										d=" M0,17 C0,17 0,17 0,17 C-9.38230037689209,17 -17,9.38230037689209 -17,0 C-17,-9.38230037689209 -9.38230037689209,-17 0,-17"
									></path>
								</g>
							</g>
						</g>
					</svg>
					<AL title={t('interview')} />
				</h1>
			</div>
			<div className="first-screen__image">
				<img
					src="https://cdn.sanity.io/images/bhil6ydp/production/14ddb44a32dbb4265bc3bf07ad8811fd6fbdfc43-4000x2667.jpg?rect=0,83,4000,2500&w=1920&h=1200&fm=webp&fit=min"
					alt=""
				/>
			</div>
			<section className="long-text-section">
				<h3 className="section-title">
					{/* <span className="num">!!</span> */}
					{t('resultsof')}
					<br />
					&nbsp;&nbsp;&nbsp;{t('interview')}
				</h3>
				<div className="f sb">
					<div>
						<p>{t('i1')}</p>
					</div>
					<div>
						<p>{t('i2')}</p>
					</div>
				</div>
				<h4 style={{ marginTop: '130px' }}>{t('it')}</h4>
				<ol className="primary-list">
					<li>{t('i3')}</li>
					<li>{t('i4')}</li>
					<li>{t('i5')}</li>
					<li>{t('i6')}</li>
				</ol>
			</section>
			<Footer />
		</div>
	)
}

export default Interview
