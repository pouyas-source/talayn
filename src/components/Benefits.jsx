import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { Img, BenefitsArt } from './Art'
import { benefits } from '../data/content'

export default function Benefits() {
  return (
    <section className="benefits">
      <Reveal as="h2" className="section-title">
        خرید طلای آب‌شده از طلاین چه مزیت‌هایی دارد؟
      </Reveal>
      <div className="benefits__grid">
        <Reveal className="benefits__media" y={0}>
          <Img className="benefits__img" src="/images/Benefits.jpeg" alt="Benefits" />
        </Reveal>
        <div className="benefits__cards">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              className="benefit"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.08, duration: 0.55 }}
              whileHover={{ y: -4, boxShadow: '0 14px 34px rgba(160,120,40,.14)' }}
            >
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
