import Container from '@/services/container/container.jsx'
import Button from '@/services/button/button.jsx'

import HeroImage from '@/assets/images/heroImage.png'

import './hero.scss'

function Hero() {
	return (
		<section className='hero'>
			<Container>
				<aside className='hero__wrapper'>
					<div className='hero__wrapper-left'>
						<h1>Nisa boosts team product excellence</h1>
						<h4>
							Nisa is constantly improving to move forward through dashboard,
							statistics, data and verify and superior human resources.
						</h4>
						<Button children={'Get Started'} classes={'button button-pink'} />
					</div>
					<div className='hero__wrapper-right'>
						<img src={HeroImage} alt={HeroImage} />
						<div className='hero__wrapper-right inside'>
							<h2>+380</h2>
							<span className='first'></span>
							<span className='last'></span>
							<Button children={'       '} classes={'button button-pink'} />
						</div>
					</div>
				</aside>
			</Container>
		</section>
	)
}

export default Hero
