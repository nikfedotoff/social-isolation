import React, { useState, useRef, useEffect } from 'react'

const Modal = ({ text }) => {
	const modal = useRef()

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
		document.body.classList.remove('text-modal-opened')
	)

	return (
		<div className="text-modal opened" ref={modal}>
			<div className="test-modal-content">
				<div>
					<h4>
						<span></span>
						<span
							className="close-modal"
							onClick={() =>
								document.body.classList.remove(
									'text-modal-opened'
								)
							}
						>
							Close
						</span>
					</h4>
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</div>
	)
}

export default Modal
