import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import AL from '../components/AnimatedLetter'

const Sources = () => {
	const [opened, setOpened] = useState([])

	const openFaq = (num) => {
		if (opened.includes(num)) {
			let arr = [...opened]
			arr.splice(arr.indexOf(num), 1)
			setOpened(arr)
		} else {
			let arr = [...opened]
			arr.push(num)
			setOpened(arr)
		}
	}

	useEffect(() => {
		document.body.classList.add('faq-loaded')

		return () => {
			document.body.classList.remove('faq-loaded')
		}
	}, [])

	return (
		<div className="super-light faq">
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
					<AL title="Sources" />
				</h1>
			</div>
			<div className="first-screen__image">
				<img
					src="https://cdn.sanity.io/images/bhil6ydp/production/14ddb44a32dbb4265bc3bf07ad8811fd6fbdfc43-4000x2667.jpg?rect=0,83,4000,2500&w=1920&h=1200&fm=webp&fit=min"
					alt=""
				/>
			</div>
			<div className="faq-list">
				<ol>
					<li>
						<button onClick={() => openFaq('1')}>
							<h5>1. How old are you?</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('1') ? 'opened' : ''
							}`}
						>
							<p>
								Based on the results of the first question, it
								can be noted that the survey involved people of
								different ages, from children under 18 to adults
								over 65.
							</p>
							<p className="last">
								As it turned out, slightly more than half of the
								respondents are 18 years old or younger.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('2')}>
							<h5>2. What's your gender?</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('2') ? 'opened' : ''
							}`}
						>
							<p className="last">
								The percentage of males and females is equal.
								(51 - 49)
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('3')}>
							<h5>3. Your education?</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('3') ? 'opened' : ''
							}`}
						>
							<p className="last">
								Based on the results of this question, we can
								conclude that most of the respondents have
								secondary education, while 38% have higher
								education and only 2% have secondary specialized
								education.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('4')}>
							<h5>4. Your family consist of ...?</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('4') ? 'opened' : ''
							}`}
						>
							<p>
								This question allowed us to determine which
								families are most often found among our
								participants, which is very important when
								studying the effect of isolation on a person.
							</p>
							<p className="last">
								As it turned out, 38% of people have families of
								two adults and two children, when two adults and
								one child, two adults and three children, one
								adult and one child, 6%, 4% and 5% are relative.
								However, most of the respondents (47%) noted
								“Other”.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('5')}>
							<h5>
								5. How did social isolation during the first
								quarantine March-May 2020 affect your
								well-being?
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('5') ? 'opened' : ''
							}`}
						>
							<p>
								In this question, respondents were presented
								with a choice of multiple answers.
							</p>
							<p className="last">
								According to its results, it turned out that the
								majority of people (40 people) had deteriorated
								cognitive processes (attention, logical
								thinking), 35 people noted that during the
								quarantine period their sleep condition
								worsened, and 16 people did not undergo any
								changes and were satisfied
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('6')}>
							<h5>
								6. Please rate on a 10-point scale the degree to
								which social isolation affects you
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('6') ? 'opened' : ''
							}`}
						>
							<p>
								In this survey, respondents were presented with
								a 10-point scale by which they could assess the
								impact of isolation on them (1 - bad and 10 -
								very good)
							</p>
							<p>
								19 people rated the impact of quarantine at 5
								points (medium), and 17 people rated 8 points
								(good).
							</p>
							<p className="last">
								Not taking into account the marks of 5 points,
								you can see that 28 people rated the effect of
								quarantine at 1-4 points, when the answers of 48
								people varied, indicating a positive effect of
								quarantine.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('7')}>
							<h5>
								7. Does your profession involve contact with
								people?
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('7') ? 'opened' : ''
							}`}
						>
							<p className="last">
								Based on the results of this question, it can be
								noted that slightly more than half (52%) of the
								participants contact people at work, when 33%
								are not present and the remaining 15% are only
								partially.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('8')}>
							<h5>
								8. For the period of isolation in what mode do
								you work / study?
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('8') ? 'opened' : ''
							}`}
						>
							<p className="last">
								Based on the results of this question, it turned
								out that more than half of the respondents study
								/ work online and only ¼ part is offline. Those.
								social distancing was and is.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('9')}>
							<h5>
								9. How can you describe your physical /
								psychological state during the quarantine
								period?
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('9') ? 'opened' : ''
							}`}
						>
							<p>
								This question was aimed at forming a general
								picture of the physical and psychological state
								of our respondents during the quarantine period.
							</p>
							<p className="last">
								As a result, 59% of all felt satisfactory, while
								24% were excellent and 17% were poor.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('10')}>
							<h5>
								10. Estimate the level of daily stress that you
								endured before the introduction of quarantine.
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('10') ? 'opened' : ''
							}`}
						>
							<p className="last">
								Based on the results, before quarantine, half of
								the respondents experienced moderate stress, 36%
								had low stress levels, and only 13% experienced
								high stress levels before quarantine.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('11')}>
							<h5>
								11. Estimate the level of stress that you are
								experiencing during the period of isolation.
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('11') ? 'opened' : ''
							}`}
						>
							<p className="last">
								Comparing the answers to this question with the
								results of the previous one, we can conclude
								that at the time of quarantine, the high level
								of stress experienced doubled from 13% to 26%,
								while the indicator of low stress fell from 36%
								to 24%, and half of the respondents also
								experienced moderate stress levels.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('12')}>
							<h5>
								12. Do you have a high need for social contacts
								lately?
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('12') ? 'opened' : ''
							}`}
						>
							<p>
								The results of the 12th question demonstrate the
								level of the need for social contacts of our
								respondents, which is 74%.
							</p>
							<p className="last">
								However, 21% of people who have completed the
								survey do not need them, when only 5% find it
								difficult to give an exact answer to this
								question.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('13')}>
							<h5>
								13. Mark what signs you noticed during
								quarantine.
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('13') ? 'opened' : ''
							}`}
						>
							<p>
								According to the results of this question, more
								than half of the respondents experienced an
								increased level of irritability, when one third
								of them met with insomnia and apathy, another
								third did not notice any signs at all during
								quarantine.?
							</p>
							<p className="last">
								The smallest number of respondents developed
								suicidal tendencies.
							</p>
						</div>
					</li>
					<li>
						<button onClick={() => openFaq('14')}>
							<h5>
								14. Have you adapted to the new conditions of
								isolation?
							</h5>
							<svg
								width="17"
								height="9"
								fill="none"
								class="c02215"
							>
								<path
									d="M16 8L8.5 1 1 8"
									stroke="#38524F"
								></path>
							</svg>
						</button>
						<div
							className={`faq-text ${
								opened.includes('14') ? 'opened' : ''
							}`}
						>
							<p>
								The results of the last question showed that the
								majority of people (80%), despite the unusual
								conditions and the first quarantine, were able
								to adapt to it.
							</p>
							<p className="last">
								Only 17% of respondents since March 2020 are
								still experiencing difficulties in adaptation.
							</p>
						</div>
					</li>
				</ol>
			</div>
			<Footer />
		</div>
	)
}

export default Sources
