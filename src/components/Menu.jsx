import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Menu = (props) => {
	const menuNavClick = () => props.state && props.setState(false)
	const { t } = useTranslation()

	return (
		<div className="menu dark">
			<div className="footer-content">
				<div className="footer-second-nav">
					<ul>
						<li>
							<Link onClick={menuNavClick} to="/help">
								{t('adv')}
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={menuNavClick}>
								{t('contact')}
							</Link>
						</li>
						<li>
							<Link to="/interview" onClick={menuNavClick}>
								{t('interview')}
							</Link>
						</li>
						<li>
							<Link to="/survey" onClick={menuNavClick}>
								{t('survey')}
							</Link>
						</li>
					</ul>
					<p>{t('text')}</p>
				</div>
				<Navigation menuNavClick={menuNavClick} />
			</div>
		</div>
	)
}

export default Menu
