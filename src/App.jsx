import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import LiveSection from './components/LiveSection'
import Licenses from './components/Licenses'
import Benefits from './components/Benefits'
import Steps from './components/Steps'
import Products from './components/Products'
import Faq from './components/Faq'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <Hero />
        <StatsBar />
        <LiveSection />
        <Licenses />
        <Benefits />
        <Steps />
        <Products />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </MotionConfig>
  )
}
