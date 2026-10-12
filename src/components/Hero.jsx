import { motion } from 'framer-motion'
import { Img, HeroArt } from './Art'
import { tickerRows } from '../data/content'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item}>
            سرمایه‌گذاری روی طلا
            <br />
            ساده،امن،مطمئن و همیشه در دسترس
          </motion.h1>
          <motion.p variants={item}>
            خرید و فروش طلای آب‌شده با قیمت لحظه‌ای، کارمزد شفاف و تسویه سریع. یک تجربه حرفه‌ای برای مدیریت
            دارایی طلا از موبایل یا دسکتاپ.
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <motion.a href="#buy" className="btn btn--gold" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              خرید طلا
            </motion.a>
            <motion.a href="#fees" className="btn btn--outline" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              مشاهده کارمزد
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Img className="hero__img" src="/images/hero-gold.jpeg" alt="hero__img"   draggable={false} />
          <motion.div
            className="ticker"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {tickerRows.map((r, i) => (
              <motion.div
                className="ticker__row"
                key={r.code}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="ticker__name">
                  <strong>{r.name}</strong>
                  <span>{r.code}</span>
                </div>
                <div className="ticker__val">
                  <strong>{r.price}</strong>
                  <span>
                    {r.change} <i>▲</i>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
