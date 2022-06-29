import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navigation = (props) => {
	const { t } = useTranslation()

	return (
		<div className="footer-nav">
			<ul>
				<li>
					<span className="footer-num">01</span>
					<Link to="/" onClick={props.menuNavClick}>
						{t('home')}
					</Link>
				</li>
				<li>
					<span className="footer-num">02</span>
					<Link to="/mission" onClick={props.menuNavClick}>
						{t('mission')}
					</Link>
				</li>
				<li>
					<span className="footer-num">03</span>
					<Link to="/methods" onClick={props.menuNavClick}>
						{t('methods')}
					</Link>
				</li>
				<li>
					<span className="footer-num">04</span>
					<Link to="/results" onClick={props.menuNavClick}>
						{t('results')}
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
