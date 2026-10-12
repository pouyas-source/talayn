import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { LicenseLogo } from './Art'
import { licenses } from '../data/content'

export default function Licenses() {
  return (
    <section className="licenses">
      <Reveal as="h2" className="section-title">
        مجوز های قانونی و رسمی سایت
      </Reveal>
      <div className="licenses__row" dir="ltr">
        {licenses.map((l, i) => (
          <motion.div
            key={l}
            className="licenses__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            whileHover={{ y: -4 }}
          >
            <LicenseLogo type={l} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
