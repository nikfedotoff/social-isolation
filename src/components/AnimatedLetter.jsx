import React from 'react'
import { motion } from 'framer-motion'

const AL = ({ title, disabled, delay }) => {
	const banner = {
		animate: {
			transition: {
				delayChildren: delay ?? 0,
				staggerChildren: 0.1,
			},
		},
	}

	const letterAni = {
		initial: { y: 400, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1,
			},
		},
	}

	return (
		<motion.span
			className="row-title"
			variants={disabled ? null : banner}
			initial="initial"
			animate="animate"
		>
			{title.split('').map((letter) => (
				<motion.span
					className="row-letter"
					variants={disabled ? null : letterAni}
				>
					{letter}
				</motion.span>
			))}
		</motion.span>
	)
}

export default AL
