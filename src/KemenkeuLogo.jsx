// Logo Kementerian Keuangan RI — SVG reconstruction
export default function KemenkeuLogo({ size = 56, mode = 'dark' }) {
  const gold   = '#C9A84C'
  const blue   = '#003087'
  const emblem = mode === 'dark' ? '#FFFFFF' : blue

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle border */}
      <circle cx="100" cy="100" r="96" fill="none" stroke={gold} strokeWidth="4"/>

      {/* Shield / Perisai Kemenkeu shape */}
      <path d="M100 18 L148 38 L148 100 Q148 148 100 172 Q52 148 52 100 L52 38 Z"
        fill={blue} stroke={gold} strokeWidth="3"/>

      {/* Padi kiri */}
      <ellipse cx="60" cy="80" rx="6" ry="14" fill={gold} transform="rotate(-30 60 80)"/>
      <ellipse cx="52" cy="95" rx="6" ry="14" fill={gold} transform="rotate(-40 52 95)"/>
      <ellipse cx="48" cy="112" rx="6" ry="14" fill={gold} transform="rotate(-50 48 112)"/>
      {/* Padi kanan */}
      <ellipse cx="140" cy="80" rx="6" ry="14" fill={gold} transform="rotate(30 140 80)"/>
      <ellipse cx="148" cy="95" rx="6" ry="14" fill={gold} transform="rotate(40 148 95)"/>
      <ellipse cx="152" cy="112" rx="6" ry="14" fill={gold} transform="rotate(50 152 112)"/>

      {/* Kapas kiri */}
      <circle cx="46" cy="130" r="8" fill={gold}/>
      <circle cx="38" cy="142" r="6" fill={gold}/>
      {/* Kapas kanan */}
      <circle cx="154" cy="130" r="8" fill={gold}/>
      <circle cx="162" cy="142" r="6" fill={gold}/>

      {/* Bintang di tengah atas */}
      <polygon points="100,30 104,42 116,42 107,50 110,62 100,54 90,62 93,50 84,42 96,42"
        fill={gold}/>

      {/* Sayap kiri */}
      <path d="M84 70 Q60 58 44 65 Q62 68 74 80" fill={gold} opacity="0.85"/>
      <path d="M84 75 Q56 60 36 72 Q58 74 74 85" fill={gold} opacity="0.6"/>
      {/* Sayap kanan */}
      <path d="M116 70 Q140 58 156 65 Q138 68 126 80" fill={gold} opacity="0.85"/>
      <path d="M116 75 Q144 60 164 72 Q142 74 126 85" fill={gold} opacity="0.6"/>

      {/* Badan burung / tengah */}
      <ellipse cx="100" cy="76" rx="14" ry="10" fill={gold}/>
      <ellipse cx="100" cy="86" rx="8" ry="6"  fill={gold}/>

      {/* Timbangan (neraca) di tengah perisai */}
      {/* Tiang */}
      <rect x="98" y="95" width="4" height="34" fill="white" rx="2"/>
      {/* Lengan */}
      <rect x="76" y="95" width="48" height="3" fill="white" rx="1.5"/>
      {/* Piringan kiri */}
      <path d="M76 98 Q68 108 76 114 Q84 108 76 98Z" fill="none" stroke="white" strokeWidth="2"/>
      {/* Piringan kanan */}
      <path d="M124 98 Q116 108 124 114 Q132 108 124 98Z" fill="none" stroke="white" strokeWidth="2"/>
      {/* Base timbangan */}
      <rect x="90" y="129" width="20" height="3" fill="white" rx="1.5"/>

      {/* Garis dasar perisai */}
      <rect x="75" y="143" width="50" height="3" fill={gold} rx="1.5"/>

      {/* Bintang kecil bawah kiri kanan */}
      <polygon points="72,152 74,158 80,158 75,162 77,168 72,164 67,168 69,162 64,158 70,158" fill={gold} transform="scale(0.6) translate(52,98)"/>
      <polygon points="128,152 130,158 136,158 131,162 133,168 128,164 123,168 125,162 120,158 126,158" fill={gold} transform="scale(0.6) translate(-16,98)"/>
    </svg>
  )
}
