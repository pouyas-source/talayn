import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Chart from './Chart'
import Reveal from './Reveal'
import { chartData, chartRanges, chartTabs, pricePerGram } from '../data/content'

const faDigits = '۰۱۲۳۴۵۶۷۸۹'
const normalize = (s) =>
  s
    .replace(/[۰-۹]/g, (d) => faDigits.indexOf(d))
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))

function MetalIcon({ type }) {
  const fill = type === 'gold' ? ['#F7E19A', '#C99430'] : ['#F1F2F4', '#9AA0A8']
  return (
    <svg width="34" height="22" viewBox="0 0 34 22" aria-hidden="true">
      <defs>
        <linearGradient id={`m-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={fill[0]} />
          <stop offset="1" stopColor={fill[1]} />
        </linearGradient>
      </defs>
      <polygon points="3,18 10,6 30,6 24,18" fill={`url(#m-${type})`} />
      <polygon points="3,18 24,18 24,21 3,21" fill={fill[1]} opacity=".7" />
    </svg>
  )
}

export default function LiveSection() {
  const [metal, setMetal] = useState('gold')
  const [toman, setToman] = useState('')
  const [gram, setGram] = useState('')
  const [tab, setTab] = useState('mesghal')
  const [range, setRange] = useState('d7')

  const price = pricePerGram[metal]

  const onToman = (e) => {
    const digits = normalize(e.target.value).replace(/\D/g, '')
    setToman(digits ? Number(digits).toLocaleString('en-US') : '')
    setGram(digits ? (Number(digits) / price).toFixed(4) : '')
  }
  const onGram = (e) => {
    const v = normalize(e.target.value).replace(/[^\d.]/g, '')
    setGram(v)
    setToman(v && !isNaN(v) ? Math.round(Number(v) * price).toLocaleString('en-US') : '')
  }
  const switchMetal = (m) => {
    setMetal(m)
    setToman('')
    setGram('')
  }

  const tabInfo = chartTabs.find((t) => t.id === tab)
  const series = useMemo(() => {
    const d = chartData[range]
    return tabInfo.reverse ? [...d].reverse() : d
  }, [range, tabInfo])

  return (
    <section className="live" id="buy">
      <div className="live__grid">
        <Reveal className="live__card">
          <div className="live__badge-row">
            <span className="live__badge">
              قیمت لحظه ای <i className="live__dot" />
            </span>
          </div>

          <div className="live__tabs">
            {chartTabs.map((t) => (
              <button
                key={t.id}
                className={`live__tab ${tab === t.id ? 'is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
                {tab === t.id && <motion.span layoutId="tabline" className="live__tabline" />}
              </button>
            ))}
          </div>

          <Chart key={`${tab}-${range}`} id={`${tab}-${range}`} data={series} min={tabInfo.min} max={tabInfo.max} />

          <div className="live__ranges">
            {chartRanges.map((r) => (
              <button
                key={r.id}
                className={`live__range ${range === r.id ? 'is-active' : ''}`}
                onClick={() => setRange(r.id)}
              >
                {range === r.id && (
                  <motion.span layoutId="rangepill" className="live__rangepill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span>{r.label}</span>
              </button>
            ))}
          </div>

          <div className="live__boxes">
            <div className="live__box" />
            <div className="live__box" />
          </div>
        </Reveal>

        <Reveal className="live__form" delay={0.1}>
          <div className="metal-tabs">
            {[
              ['gold', 'طلا'],
              ['silver', 'نقره'],
            ].map(([id, label]) => (
              <button
                key={id}
                className={`metal-tab ${metal === id ? 'is-active' : ''}`}
                onClick={() => switchMetal(id)}
              >
                <span>{label}</span>
                <MetalIcon type={id} />
              </button>
            ))}
          </div>

          <h2>رصد لحظه ای طلا و نقره</h2>
          <p>مشاهده نمودار تاریخی قیمت طلا و آمار بازار برای تصمیم گیری بهتر خرید بصرفه.</p>

          <label className="field">
            <span>تومان</span>
            <input inputMode="numeric" placeholder="0" value={toman} onChange={onToman} />
          </label>
          <label className="field">
            <span>گرم</span>
            <input inputMode="decimal" placeholder="0.0000" value={gram} onChange={onGram} />
          </label>

          <motion.button className="live__buy" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            خرید آنلاین
          </motion.button>
        </Reveal>
      </div>
    </section>
  )
}
