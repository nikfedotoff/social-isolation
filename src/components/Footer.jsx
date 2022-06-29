import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer>
			<div className="footer-content">
				<Navigation />
				<div className="footer-second-nav">
					<ul>
						<li>
							<Link to="/help">{t('adv')}</Link>
						</li>
						<li>
							<Link to="/contact">{t('contact')}</Link>
						</li>
						<li>
							<Link to="/interview">{t('interview')}</Link>
						</li>
						<li>
							<Link to="/survey">{t('survey')}</Link>
						</li>
					</ul>
					<p>{t('text')}</p>
				</div>
			</div>
			<div className="footer-lower">
				<span>© Created by nikfedotoff</span>
				<a href="">Terms & Conditions</a>
			</div>
		</footer>
	)
}

export default Footer
