import { Link } from 'react-router-dom'

import { navigation } from '@/data/navigation.json'

import './navbar.scss'
import Nisa from '@/assets/icons/nisa.jsx'
import Container from '@/services/container/container.jsx'
import Button from '@/services/button/button.jsx'
import Icon from '@/services/icon/icon.jsx'
import { useState } from 'react'

function Navbar() {
	const { open, setOpen } = useState(true)

	function handleMenuClick() {
		setOpen(false)
	}

	return (
		<nav className='navbar'>
			<Container>
				<div className='navbar__wrapper'>
					<ul>
						<Link to={'/'}>
							<Nisa />
						</Link>
						{navigation.map(nav => (
							<li>
								<Link to={nav.path}>{nav.name}</Link>
							</li>
						))}
					</ul>
					<ul>
						<li>
							<Link to={'/'}>Login</Link>
						</li>
						<li>
							<Button children={'Buy Nisa'} classes={'button button-pink'} />
						</li>
					</ul>
					<div className='navbar__wrapper-menuBtn' onClick={handleMenuClick}>
						<Icon data={open} />
					</div>
				</div>
			</Container>
		</nav>
	)
}

export default Navbar
