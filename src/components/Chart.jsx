import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const W = 560
const H = 190
const PAD = 8

const toFa = (n) =>
  Math.round(n)
    .toLocaleString('en-US')
    .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])

// منحنی نرم (Catmull-Rom → Bezier)
function smoothPath(pts) {
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export default function Chart({ data, min, max, id }) {
  const wrap = useRef(null)
  const [hover, setHover] = useState(null)

  const pts = useMemo(
    () =>
      data.map((v, i) => ({
        x: (i / (data.length - 1)) * W,
        y: PAD + (1 - v) * (H - PAD * 2),
      })),
    [data]
  )
  const line = useMemo(() => smoothPath(pts), [pts])
  const area = `${line} L ${W} ${H} L 0 ${H} Z`

  const onMove = (e) => {
    const r = wrap.current.getBoundingClientRect()
    const x = Math.min(Math.max(e.clientX - r.left, 0), r.width)
    setHover(Math.round((x / r.width) * (data.length - 1)))
  }

  const hp = hover !== null ? pts[hover] : null
  const value = hover !== null ? min + data[hover] * (max - min) : 0

  return (
    <div
      className="chart"
      ref={wrap}
      dir="ltr"
      onMouseMove={onMove}
      onMouseLeave={() => setHover(null)}
    >
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" width="100%" height="100%">
        <defs>
          <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E6D98E" stopOpacity="0.55" />
            <stop offset="1" stopColor="#E6D98E" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <motion.path
          key={`a-${id}`}
          d={area}
          fill={`url(#fill-${id})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        />
        <motion.path
          key={`l-${id}`}
          d={line}
          fill="none"
          stroke="#D4BE5E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </svg>

      {hp && (
        <>
          <span className="chart__line" style={{ left: `${(hp.x / W) * 100}%` }} />
          <span
            className="chart__dot"
            style={{ left: `${(hp.x / W) * 100}%`, top: `${(hp.y / H) * 100}%` }}
          />
          <span
            className="chart__tip"
            style={{ left: `${(hp.x / W) * 100}%`, top: `${(hp.y / H) * 100}%` }}
          >
            {toFa(value)}
          </span>
        </>
      )}
    </div>
  )
}
