import React from 'react'
import Footer from '../components/Footer'
import Preview from '../components/Preview'
import { Parallax } from 'react-parallax'
import { useTranslation } from 'react-i18next'

const Mission = () => {
	const { t } = useTranslation()

	return (
		<div className="super-light">
			<Preview
				white
				num="02"
				text={t('mission-subtitle')}
				title={t('our')}
				title2={t('mission')}
			/>
			<div className="image-parallax">
				<Parallax
					bgImage="https://cdn.sanity.io/images/bhil6ydp/production/cdda5fd767c81c425f1c85e09a6fe1b3d5a9ab11-4000x2667.jpg?rect=0,83,4000,2500&w=1920&h=1200&fm=webp&fit=min"
					bgImageAlt="the cat"
					strength={400}
				></Parallax>
				<img
					src="https://cdn.sanity.io/images/bhil6ydp/production/cdda5fd767c81c425f1c85e09a6fe1b3d5a9ab11-4000x2667.jpg?rect=0,83,4000,2500&w=1920&h=1200&fm=webp&fit=min"
					alt=""
				/>
			</div>
			<section style={{ backgroundColor: '#ebeae4' }}>
				<h3 className="section-title_s">{t('m1')}</h3>
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<p>{t('m2')}</p>
							<p className="last">{t('m3')}</p>
							{/* <a className="btn">Want to hear more? Get in touch.</a> */}
						</div>
						<div className="section-img">
							<img
								className="list-item-block__img"
								src="https://i.pinimg.com/564x/d8/41/ee/d841ee63f81ab7d4f6a5841bbb48c89e.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="section-img">
						<img
							className="m-size"
							src="https://i.pinimg.com/564x/44/35/6d/44356d11b21650407a9a526ac944681f.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Mission
