import Container from '@/services/container/container.jsx'
import Button from '@/services/button/button.jsx'

import DiscoverImage from '@/assets/images/discoverImage.png'
import BottomRight from '@/assets/images/bottomRight.jsx'
import TopLeft from '@/assets/images/topLeft.jsx'

import './discover.scss'

function Discover() {
	return (
		<section className='discover'>
			<Container>
				<aside className='discover__wrapper'>
					<div className='discover__wrapper-left'>
						<img src={DiscoverImage} alt={DiscoverImage} />
						<div className='top-left'>
							<TopLeft />
						</div>
						<div className='bottom-right'>
							<BottomRight />
						</div>
					</div>
					<div className='discover__wrapper-right'>
						<h2>Discover the power of creative freedom with Nisa.</h2>
						<h4>
							Nisa is constantly improving to move forward through dashboard,
							statistics, data and verify and superior human resources.
						</h4>
						<Button children={'Get Started'} classes={'button button-pink'} />
					</div>
				</aside>
			</Container>
		</section>
	)
}

export default Discover
