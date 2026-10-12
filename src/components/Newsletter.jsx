import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  return (
    <Reveal as="section" className="newsletter">
      <div className="newsletter__text">
        <h3>همراه خبرنامه شوید</h3>
        <p>به‌روزترین قیمت‌ها، تحلیل‌ها و پیشنهادهای ویژه را دریافت کنید.</p>
      </div>
      <input
        type="email"
        className="newsletter__input"
        placeholder="ایمیل شما"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <motion.button className="btn btn--gold btn--sm newsletter__btn" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
        عضویت
      </motion.button>
    </Reveal>
  )
}
