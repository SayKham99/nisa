import Layout from '@/services/layout/layout.jsx'
import Hero from '@/components/hero/hero.jsx'
import Discover from '@/components/discover/discover.jsx'
import Features from '@/components/features/features.jsx'
import Statistic from '@/components/statistic/statistic.jsx'
import Balance from '@/components/balance/balance.jsx'
import Feedback from '@/components/feedback/feedback.jsx'
import Submit from '@/components/submit/submit.jsx'
import Blog from '@/components/blog/blog.jsx'
import Spotlight from '@/components/spotlight/spotlight.jsx'

function Home() {
	return (
		<Layout>
			<Hero />
			<Discover />
			<Features />
			<Statistic />
			<Balance />
			<Spotlight />
			<Feedback />
			<Submit />
			<Blog />
		</Layout>
	)
}

export default Home
