import { motion } from 'framer-motion'
import { EnamadBadge } from './Art'
import { footer } from '../data/content'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <span aria-hidden="true" />
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <h4>لینک‌های پرکاربرد</h4>
          <ul>
            {footer.quick.map((l) => (
              <li key={l}><a href="#top">{l}</a></li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.08 }}>
          <h4>خدمات</h4>
          <ul>
            {footer.services.map((l) => (
              <li key={l}><a href="#top">{l}</a></li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="footer__contact" {...fade} transition={{ duration: 0.5, delay: 0.16 }}>
          <h4>تماس با ما</h4>
          <p>{footer.address}</p>
          <p className="footer__phone">{footer.phone}</p>
          <p>{footer.hours}</p>
        </motion.div>
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.24 }}>
          <h4>مجوز ها</h4>
          <img src="/images/Enamad.webp" alt="Enamad" />
        </motion.div>
      </div>
      <div className="footer__bottom" />
    </footer>
  )
}
