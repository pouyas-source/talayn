import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { Img, GoldPackArt, SilverBarArt } from './Art'
import { products } from '../data/content'

const arts = { gold: <GoldPackArt />, silver: <SilverBarArt /> }

export default function Products() {
  return (
    <section className="products" id="shop">
      <Reveal as="h2" className="section-title">
        خرید طلا و نقره
      </Reveal>
      <Reveal as="p" className="products__sub" delay={0.05}>
        انتخاب محصول، مشاهده قیمت تقریبی و ثبت سفارش سریع
      </Reveal>
      <div className="products__grid">
        {products.map((p, i) => (
          <motion.article
            key={p.id}
            className="product"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
          >
            <motion.div className="product__img" whileHover={{ scale: 1.02 }}>
              <Img className="product__photo" src={`/images/product-${p.id}.png`} alt={p.title} fallback={arts[p.id]} />
            </motion.div>
            <h3>{p.title}</h3>
            <span className="product__hint">قیمت تقریبی خرید</span>
            <strong className="product__price">{p.price} تومان</strong>
            <motion.button className="btn btn--gold btn--sm" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              ثبت سفارش
            </motion.button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
