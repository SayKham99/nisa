import { Route, Routes } from 'react-router-dom'

import Home from '@/pages/home/home.jsx'
import About from '@/pages/about/about.jsx'
import Faq from '@/pages/faq/faq.jsx'
import Contact from '@/pages/contact/contact.jsx'

import './App.scss'

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/about'} element={<About />} />
			<Route path={'/faq'} element={<Faq />} />
			<Route path={'/contact'} element={<Contact />} />
		</Routes>
	)
}

export default App
