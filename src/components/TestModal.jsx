import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const questions = [
	'test1',
	'test2',
	'test3',
	'test4',
	'test5',
	'test6',
	'test7',
	'test8',
	'test9',
	'test10',
]

const TestModal = () => {
	const modal = useRef()
	const [stage, setStage] = useState(0)
	const [points, setPoints] = useState(0)

	const { t } = useTranslation()

	const useOnClickOutside = (ref, handler) => {
		useEffect(() => {
			const listener = (event) => {
				if (!ref.current || ref.current.contains(event.target)) {
					return
				}

				handler(event)
			}

			document.addEventListener('mousedown', listener)
			document.addEventListener('touchstart', listener)

			return () => {
				document.removeEventListener('mousedown', listener)
				document.removeEventListener('touchstart', listener)
			}
		}, [ref, handler])
	}

	useOnClickOutside(modal, () =>
		document.body.classList.remove('modal-opened')
	)

	const chooseAnswer = (yes) => {
		yes && setPoints(points + 1)
		setStage(stage + 1)
	}

	const generateResult = () => {
		if (points <= 4) {
			return t('out1')
		} else if (points <= 7) {
			return t('out2')
		}

		return t('out3')
	}

	const startTest = () => {
		setStage(1)
		setPoints(0)
	}

	return (
		<div className="test-modal opened" ref={modal}>
			<div className="test-modal-content">
				<div>
					<h4>
						{t('stresstest')}
						<span
							className="close-modal"
							onClick={() =>
								document.body.classList.remove('modal-opened')
							}
						>
							{t('close')}
						</span>
					</h4>
					<p>
						{stage == 10 ? (
							<>
								<h5>{t('dres')}</h5>
								<p>{generateResult()}</p>
							</>
						) : (
							t(questions[stage])
						)}
					</p>
				</div>
				{stage && stage != questions.length ? (
					<div className="test-btns">
						<button className="primary-btn" onClick={() => chooseAnswer(true)}>
							{t('yes')}
						</button>
						<button
							className="primary-btn"
							onClick={() => chooseAnswer(false)}
						>
							{t('no')}
						</button>
					</div>
				) : (
					<button
						className="primary-btn test-btn"
						onClick={startTest}
					>
						{t('start')}
					</button>
				)}
			</div>
		</div>
	)
}

export default TestModal
