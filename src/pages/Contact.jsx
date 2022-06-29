import React from 'react'
import { useTranslation } from 'react-i18next'
import AL from '../components/AnimatedLetter'

const Contact = (props) => {
	const { t } = useTranslation()

	return (
		<div className="contact">
			<img
				src="https://cdn.sanity.io/images/bhil6ydp/production/298ee1a491dda845097e07d7afc4f43836173897-4000x2667.jpg?w=1920&fm=webp"
				alt=""
				className="bg"
			/>
			<h3 className="section-title">
				<AL title="Get &nbsp; in" />
				<br />
				&nbsp;&nbsp;&nbsp;
				<AL title="Touch" />
			</h3>
			<p>{t('feelfree')}</p>
		</div>
	)
}

export default Contact
