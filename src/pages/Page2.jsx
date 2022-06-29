import React from 'react'
import { useTranslation } from 'react-i18next'
import { Parallax } from 'react-parallax'
import Footer from '../components/Footer'
import Preview from '../components/Preview'

const Page2 = (props) => {
	const openTextModal = (text) => {
		document.body.classList.add('text-modal-opened')
		props.setModal(text)
	}
	const { t } = useTranslation()

	const text2 = t('res1')
	const text3 = t('res2')
	const text4 = t('res3')

	return (
		<div className="dark">
			<Preview
				dark
				num="04"
				text={t('res-sub')}
				title={t('ours')}
				title2={t('results')}
			/>
			<div className="blockquote bb">
				<blockquote>{t('res10')}</blockquote>
			</div>
			<section className="bb">
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<p>{t('res11')}</p>
							<p className="last">{t('res12')}</p>
						</div>
						<div className="section-img">
							<img
								className="list-item-block__img"
								src="https://i.pinimg.com/564x/44/35/6d/44356d11b21650407a9a526ac944681f.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="section-img">
						<img
							className="m-size"
							src="https://i.pinimg.com/564x/43/51/8d/43518d9d881c7108de2fceb74bbf3e6f.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
			<section>
				<h3 className="section-title_s">{t('res13')}</h3>
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<p>{t('res14')}</p>
							<p>{t('res15')}</p>
							<p>{t('res16')}</p>
							<p className="last">
								{t('res17')}{' '}
								<span
									className="more"
									onClick={() => openTextModal(text2)}
								>
									More...
								</span>
							</p>
							<a className="btn">{t('diagram')}</a>
						</div>
						<div className="section-img">
							<img
								className="list-item-block__img"
								src="https://семьяшкола.рф/800/600/https/i.ytimg.com/vi/LXhTVMXwKVc/maxresdefault.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="section-img">
						<img
							className="m-size"
							src="https://i.pinimg.com/564x/98/85/50/9885502a7177d3ba110fe4918d3472f9.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
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
			<section>
				<h3 className="section-title_s">{t('res18')}</h3>
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<h4>{t('res19')}</h4>
							<p className="last">
								{t('res20')}{' '}
								<span
									className="more"
									onClick={() => openTextModal(text3)}
								>
									{t('more')}
								</span>
							</p>
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
			<div className="image-parallax">
				<Parallax
					bgImage="https://euromednews.ru/wp-content/uploads/2021/05/man-3959784_1280.jpg"
					bgImageAlt="the cat"
					strength={400}
				></Parallax>
				<img
					src="https://euromednews.ru/wp-content/uploads/2021/05/man-3959784_1280.jpg"
					alt=""
				/>
			</div>
			<section>
				<h3 className="section-title_s">{t('res21')}</h3>
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<p>{t('res22')}</p>
							<p className="last">{t('res23')}</p>
							{/* <a className="btn">Want to hear more? Get in touch.</a> */}
						</div>
						<div className="section-img">
							<img
								className="list-item-block__img"
								src="https://scx2.b-cdn.net/gfx/news/2018/howsocialiso.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="section-img">
						<img
							className="m-size"
							src="https://s3-us-west-2.amazonaws.com/artifactuprising/magento/blog/articles/2016-06-27-black-white-photo/2016-06-27-black-white-photo-05.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
			<div className="image-parallax">
				<Parallax
					bgImage="https://cdn.sanity.io/images/bhil6ydp/production/b7e2db9bd093e1ce5fe21c28f6ac7d7252e0ef07-4000x2667.jpg?rect=0,83,4000,2500&w=1920&h=1200&fm=webp&fit=min"
					bgImageAlt="the cat"
					strength={400}
				></Parallax>
				<img
					src="https://cdn.sanity.io/images/bhil6ydp/production/b7e2db9bd093e1ce5fe21c28f6ac7d7252e0ef07-4000x2667.jpg?rect=0,83,4000,2500&w=1920&h=1200&fm=webp&fit=min"
					alt=""
				/>
			</div>
			<section>
				<h3 className="section-title_s">{t('res24')}</h3>
				<div className="f sb">
					<div className="m-size list-item-block">
						<div
							className="block__content"
							style={{ marginLeft: '0px' }}
						>
							<p>{t('res25')}</p>
							<p>{t('res26')}</p>
							<p className="last">
								{t('res27')}{' '}
								<span
									className="more"
									onClick={() => openTextModal(text4)}
								>
									{t('more')}
								</span>
							</p>
							{/* <a className="btn">Want to hear more? Get in touch.</a> */}
						</div>
						<div className="section-img">
							<img
								className="list-item-block__img"
								src="https://i.pinimg.com/564x/ce/06/6c/ce066c9e8ba961dd89df3ffd0207c579.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="section-img">
						<img
							className="m-size"
							src="https://i.pinimg.com/564x/1c/fe/41/1cfe4165ab573a16bf79171b2fbbc414.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
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
			<Footer />
		</div>
	)
}

export default Page2
