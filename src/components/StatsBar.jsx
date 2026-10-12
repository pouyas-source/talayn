import { motion } from 'framer-motion'
import { Users, Box, Repeat } from 'lucide-react'
import { stats } from '../data/content'

const icons = { users: Users, box: Box, repeat: Repeat }

export default function StatsBar() {
  return (
    <section className="stats">
      <div className="container stats__row">
        {stats.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <motion.div
              className="stats__item"
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="stats__value">
                {Icon && <Icon size={18} strokeWidth={1.5} className="stats__icon" />}
                <strong>
                  {s.unit ? <bdi dir="ltr">{s.value}</bdi> : s.value}
                  {s.unit}
                </strong>
              </div>
              <span className="stats__label">{s.label}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
