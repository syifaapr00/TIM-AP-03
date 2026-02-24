// Logo NAGARA DANA RAKCA — SVG reconstruction
export default function NagaraDanaRakcaLogo({ size = 56, mode = 'dark' }) {
  const gold = '#C9A84C'
  const blue = '#003087'
  const emblem = mode === 'dark' ? '#FFFFFF' : blue

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle border */}
      <circle cx="100" cy="100" r="96" fill="none" stroke={gold} strokeWidth="4"/>

      {/* Main shield shape */}
      <path 
        d="M100 20 L150 40 L150 100 Q150 150 100 170 Q50 150 50 100 L50 40 Z" 
        fill={blue} 
        stroke={gold} 
        strokeWidth="3"
      />

      {/* Rice stalks - left */}
      <ellipse cx="55" cy="75" rx="5" ry="12" fill={gold} transform="rotate(-30 55 75)"/>
      <ellipse cx="48" cy="90" rx="5" ry="12" fill={gold} transform="rotate(-40 48 90)"/>
      <ellipse cx="43" cy="105" rx="5" ry="12" fill={gold} transform="rotate(-50 43 105)"/>

      {/* Rice stalks - right */}
      <ellipse cx="145" cy="75" rx="5" ry="12" fill={gold} transform="rotate(30 145 75)"/>
      <ellipse cx="152" cy="90" rx="5" ry="12" fill={gold} transform="rotate(40 152 90)"/>
      <ellipse cx="157" cy="105" rx="5" ry="12" fill={gold} transform="rotate(50 157 105)"/>

      {/* Cotton - left */}
      <circle cx="40" cy="120" r="7" fill={gold}/>
      <circle cx="32" cy="130" r="5" fill={gold}/>
      <circle cx="48" cy="128" r="4" fill={gold}/>

      {/* Cotton - right */}
      <circle cx="160" cy="120" r="7" fill={gold}/>
      <circle cx="168" cy="130" r="5" fill={gold}/>
      <circle cx="152" cy="128" r="4" fill={gold}/>

      {/* Main central star */}
      <polygon 
        points="100,30 106,44 120,44 110,54 114,68 100,60 86,68 90,54 80,44 94,44" 
        fill={gold}
      />

      {/* Wings - left */}
      <path d="M75 65 Q50 55 35 65 Q52 67 65 75" fill={gold} opacity="0.85"/>
      <path d="M75 70 Q48 58 30 72 Q50 72 65 80" fill={gold} opacity="0.6"/>

      {/* Wings - right */}
      <path d="M125 65 Q150 55 165 65 Q148 67 135 75" fill={gold} opacity="0.85"/>
      <path d="M125 70 Q152 58 170 72 Q150 72 135 80" fill={gold} opacity="0.6"/>

      {/* Central body */}
      <ellipse cx="100" cy="70" rx="12" ry="8" fill={gold}/>
      <ellipse cx="100" cy="80" rx="7" ry="5" fill={gold}/>

      {/* Balance scale */}
      {/* Center post */}
      <rect x="98" y="88" width="4" height="32" fill="white" rx="2"/>
      {/* Balance beam */}
      <rect x="78" y="88" width="44" height="3" fill="white" rx="1.5"/>
      {/* Left pan */}
      <path d="M78 91 Q70 100 78 107 Q86 100 78 91Z" fill="none" stroke="white" strokeWidth="2"/>
      {/* Right pan */}
      <path d="M122 91 Q114 100 122 107 Q130 100 122 91Z" fill="none" stroke="white" strokeWidth="2"/>
      {/* Base */}
      <rect x="92" y="120" width="16" height="3" fill="white" rx="1.5"/>

      {/* Bottom decoration */}
      <rect x="70" y="135" width="60" height="4" fill={gold} rx="2"/>

      {/* Small stars at bottom */}
      <polygon 
        points="80,145 82,151 88,151 83,155 85,161 80,157 75,161 77,155 72,151 78,151" 
        fill={gold} 
        transform="scale(0.7) translate(25,150)"
      />
      <polygon 
        points="120,145 122,151 128,151 123,155 125,161 120,157 115,161 117,155 112,151 118,151" 
        fill={gold} 
        transform="scale(0.7) translate(25,150)"
      />

      {/* Decorative dots */}
      <circle cx="100" cy="145" r="2" fill={gold}/>
      <circle cx="108" cy="145" r="2" fill={gold}/>
      <circle cx="92" cy="145" r="2" fill={gold}/>
    </svg>
  )
}
