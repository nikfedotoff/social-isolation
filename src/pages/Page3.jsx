import React from 'react'
import Footer from '../components/Footer'
import Preview from '../components/Preview'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Page3 = () => {
	const { t } = useTranslation()

	return (
		<div className="light">
			<Preview
				num="03"
				text={t('mt1')}
				title={t('ours')}
				title2={t('methods')}
			/>
			<div className="products">
				<div className="product">
					<div className="product-image">
						<img
							src="https://i.pinimg.com/564x/3a/d8/6e/3ad86e33977f6998c47bfe625cfa2994.jpg"
							alt=""
						/>
					</div>
					<div className="product-content">
						<h3>{t('survey')}</h3>
						<p>{t('mt1-2')}</p>
						<Link to="/survey" className="btn">
							{t('showres')}
						</Link>
					</div>
				</div>
				<div className="product">
					<div className="product-image">
						<img
							src="https://i.pinimg.com/564x/ff/0c/a2/ff0ca20ccb0c053a3af6741dcf656ccb.jpg"
							alt=""
						/>
					</div>
					<div className="product-content">
						<h3>{t('mt2')}</h3>
						<p>{t('mt2-2')}</p>
						<Link to="/results" className="btn">
							{t('showres')}
						</Link>
					</div>
				</div>
				<div className="product">
					<div className="product-image">
						<img
							src="https://i.pinimg.com/564x/a5/ca/9f/a5ca9f6a036bd65cc5dd08f7cff45e7d.jpg"
							alt=""
						/>
					</div>
					<div className="product-content">
						<h3>{t('interview')}</h3>
						<p>{t('mt3-2')}</p>
						<Link to="/interview" className="btn">
							{t('showres')}
						</Link>
					</div>
				</div>
			</div>
			<section>
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<h4>{t('mt5')}</h4>
							<p>{t('mt5-1')}</p>
							<p>{t('mt5-2')}</p>
							<p className="last">{t('mt5-3')}</p>
						</div>
						<div className="section-img">
							<img
								className="list-item-block__img"
								src="https://i.pinimg.com/564x/43/51/8d/43518d9d881c7108de2fceb74bbf3e6f.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="section-img">
						<img
							className="m-size"
							src="https://i.pinimg.com/564x/ce/06/6c/ce066c9e8ba961dd89df3ffd0207c579.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Page3
