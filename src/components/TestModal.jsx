import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const TestModal = () => {
	const modal = useRef()
	const [stage, setStage] = useState(0)
	const [points, setPoints] = useState(0)

	const { t } = useTranslation()

	const q = [
		t('test1'),
		t('test2'),
		t('test3'),
		t('test4'),
		t('test5'),
		t('test6'),
		t('test7'),
		t('test8'),
		t('test9'),
		t('test10'),
	]

	const useOnClickOutside = (ref, handler) => {
		useEffect(() => {
			const listener = (event) => {
				// Ничего не делаю, если клик по элементу ref или его потомкам
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

	const clickYes = () => {
		setPoints(points + 1)
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
							q[stage]
						)}
					</p>
				</div>
				{stage && stage != q.length ? (
					<div className="test-btns">
						<button className="primary-btn" onClick={clickYes}>
							{t('yes')}
						</button>
						<button
							className="primary-btn"
							onClick={() => setStage(stage + 1)}
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
