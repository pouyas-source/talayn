import { useState } from 'react'

/**
 * اگر عکس در public/images موجود باشد نمایش داده می‌شود،
 * در غیر این صورت تصویر برداری (SVG) جایگزین نشان داده می‌شود.
 */
export function Img({ src, alt = '', fallback, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={className}>{fallback}</div>
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />
}

const goldGrad = (
  <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#F7E19A" />
    <stop offset="0.45" stopColor="#D6A53C" />
    <stop offset="1" stopColor="#9B6B14" />
  </linearGradient>
)

export function HeroArt() {
  return (
    <svg viewBox="0 0 597 410" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        {goldGrad}
        <linearGradient id="stone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E7E0D3" />
          <stop offset="1" stopColor="#CFC6B6" />
        </linearGradient>
      </defs>
      <rect width="597" height="410" fill="url(#stone)" />
      <polygon points="150,410 190,150 420,120 460,410" fill="#EFE9DE" opacity=".85" />
      <polygon points="255,330 250,120 330,90 340,300" fill="url(#gold)" />
      <polygon points="150,300 240,110 255,330 160,340" fill="#C99430" />
      <rect x="150" y="330" width="260" height="18" fill="#000" opacity=".08" />
    </svg>
  )
}

export function BenefitsArt() {
  return (
    <svg viewBox="0 0 462 508" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        {goldGrad}
        <linearGradient id="leather" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4A3B2E" />
          <stop offset="1" stopColor="#1E1712" />
        </linearGradient>
      </defs>
      <rect width="462" height="508" fill="url(#leather)" />
      <rect x="40" y="320" width="230" height="120" rx="8" fill="#E8E1D4" transform="rotate(-8 40 320)" />
      <circle cx="110" cy="250" r="46" fill="#111" stroke="#777" strokeWidth="6" />
      <polygon points="230,110 330,90 360,330 260,360" fill="url(#gold)" />
      <path d="M200 250 Q260 160 330 220 L350 420 L230 440 Z" fill="#F3F1EC" opacity=".92" />
    </svg>
  )
}

export function CoinArt() {
  return (
    <svg viewBox="0 0 457 399" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <radialGradient id="coin" cx=".4" cy=".35" r=".8">
          <stop offset="0" stopColor="#F8E3A0" />
          <stop offset=".6" stopColor="#D6A53C" />
          <stop offset="1" stopColor="#8E5F10" />
        </radialGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EDE6D8" />
          <stop offset="1" stopColor="#D9CFBC" />
        </linearGradient>
      </defs>
      <rect width="457" height="399" fill="url(#wall)" />
      <ellipse cx="228" cy="355" rx="110" ry="30" fill="#E6DECE" />
      <rect x="118" y="290" width="220" height="80" fill="#F3EEE4" />
      <circle cx="228" cy="190" r="105" fill="url(#coin)" />
      <circle cx="228" cy="190" r="86" fill="none" stroke="#B88A2A" strokeWidth="3" />
      <path d="M228 120 L250 180 L300 170 L262 205 L275 260 L228 228 L181 260 L194 205 L156 170 L206 180 Z" fill="#B88A2A" opacity=".55" />
    </svg>
  )
}

export function GoldPackArt() {
  return (
    <svg viewBox="0 0 272 249" width="100%" height="100%">
      <defs>{goldGrad}</defs>
      <rect x="82" y="38" width="108" height="172" rx="6" fill="#D6272D" />
      <rect x="82" y="38" width="108" height="172" rx="6" fill="none" stroke="#fff" strokeOpacity=".4" />
      <rect x="98" y="62" width="76" height="110" rx="4" fill="#F5D890" opacity=".35" />
      <rect x="112" y="84" width="48" height="70" rx="3" fill="url(#gold)" />
      <rect x="98" y="186" width="76" height="8" rx="2" fill="#fff" opacity=".6" />
    </svg>
  )
}

export function SilverBarArt() {
  return (
    <svg viewBox="0 0 272 249" width="100%" height="100%">
      <defs>
        <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4F5F7" />
          <stop offset=".5" stopColor="#BFC3C9" />
          <stop offset="1" stopColor="#8B9098" />
        </linearGradient>
      </defs>
      <rect x="88" y="30" width="96" height="190" rx="10" fill="url(#silver)" />
      <rect x="98" y="42" width="76" height="166" rx="6" fill="none" stroke="#fff" strokeOpacity=".6" />
      <circle cx="136" cy="100" r="18" fill="none" stroke="#7C828B" strokeWidth="2" />
      <rect x="112" y="140" width="48" height="6" rx="2" fill="#7C828B" opacity=".6" />
    </svg>
  )
}

/* لوگوهای مجوزها (نمونه برداری؛ در صورت داشتن لوگوی اصلی جایگزین کنید) */
export function LicenseLogo({ type }) {
  switch (type) {
    case 'sazman':
      return (
        <img src="/images/nezamsanat.png" alt="Nezam Sanat" />
        
      )
    case 'mojavez':
      return (
       
       <img src="/images/kasbokar.png" alt=" kasbokar" />
      )
    case 'enamad':
      return (
        <img src="/images/Enamad.webp" alt="Enamad" />
      )
    case 'gear':
      return (
        <img src="/images/gear.webp" alt="Gear" />
      )
    default:
      return (
        <img src="/images/ecunion.png" alt="Sazman Logo" />
      )
  }
}

export function EnamadBadge() {
  return (
    <svg viewBox="0 0 100 100" width="84" height="84">
      <path d="M22 54 C18 20 66 4 78 34 C64 26 40 32 42 48 C58 52 76 48 86 36 C80 62 44 76 22 54 Z" fill="#1F3F93" />
      <text x="50" y="84" textAnchor="middle" fontSize="12" fontWeight="700" fill="#222" fontFamily="Arial">eNAMAD.ir</text>
      <text x="50" y="96" textAnchor="middle" fontSize="10" fill="#E8A62C" fontFamily="Arial">★★★★★</text>
    </svg>
  )
}
