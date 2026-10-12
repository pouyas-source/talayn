import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserRound, ContactRound, HandCoins, PackageCheck } from 'lucide-react'
import Reveal from './Reveal'
import { Img, CoinArt } from './Art'
import { steps } from '../data/content'

const icons = [UserRound, ContactRound, HandCoins, PackageCheck]

export default function Steps() {
  const [active, setActive] = useState(0)
  return (
    <section className="steps">
      <Reveal as="h2" className="section-title">
        شروع آسان
      </Reveal>
      <div className="steps__grid">
        <div className="steps__list">
          {steps.map((s, i) => {
            const Icon = icons[i]
            const on = active === i
            return (
              <motion.div
                key={s.title}
                className={`step ${on ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {on && <motion.span layoutId="stepbg" className="step__bg" transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
                <span className="step__icon">
                  <Icon size={30} strokeWidth={1.6} />
                </span>
                <div className="step__text">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
        <Reveal className="steps__media" y={0}>
          <Img className="steps__img" src="/images/Steps.jpeg" alt="Steps"  />
        </Reveal>
      </div>
    </section>
  )
}
