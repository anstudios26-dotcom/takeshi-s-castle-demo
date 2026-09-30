import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. logo-badge.png (512x512, transparent background, red circle, white lettering)
async function generateLogoBadge() {
  // Generate circular text items positioned around the perimeter
  const words = ["•", "PLAY", "•", "EAT", "•", "REPEAT", "•", "PLAY", "•", "EAT", "•", "REPEAT", "•", "PLAY", "•", "EAT", "•", "REPEAT"];
  const total = words.length;
  const radius = 216;
  const cx = 256;
  const cy = 256;

  let textElements = '';
  words.forEach((word, i) => {
    const angleDeg = (i / total) * 360 - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = cx + radius * Math.cos(angleRad);
    const y = cy + radius * Math.sin(angleRad);
    const rot = angleDeg + 90;
    textElements += `<text x="${x}" y="${y}" font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif" font-weight="900" font-size="${word === '•' ? '22' : '17'}" fill="#FFFFFF" text-anchor="middle" dominant-baseline="central" transform="rotate(${rot} ${x} ${y})">${word}</text>\n`;
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <!-- Transparent Background -->
    <!-- Red Outer Disc -->
    <circle cx="256" cy="256" r="250" fill="#E62624" />
    
    <!-- Outer concentric ring line -->
    <circle cx="256" cy="256" r="240" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.9" />
    <!-- Inner dividing concentric circle -->
    <circle cx="256" cy="256" r="185" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.95" />
    
    <!-- Circular Perimeter Text -->
    ${textElements}

    <!-- Center Text: TAKASHI'S CASTLE in Japanese/Arcade block font -->
    <!-- Line 1: TAKASHI'S -->
    <g fill="#FFFFFF" transform="translate(256, 218)">
      <text x="0" y="0" font-family="'Zen Maru Gothic', 'Arial Black', sans-serif" font-weight="900" font-size="46" text-anchor="middle" letter-spacing="4">TAKASHI'S</text>
    </g>
    <!-- Line 2: CASTLE -->
    <g fill="#FFFFFF" transform="translate(256, 285)">
      <text x="0" y="0" font-family="'Zen Maru Gothic', 'Arial Black', sans-serif" font-weight="900" font-size="56" text-anchor="middle" letter-spacing="8">CASTLE</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outputDir, 'logo-badge.png'));
  console.log('✓ Generated logo-badge.png');
}

// 2. entrance.jpg (1080x810, Building exterior with arched tunnel doorway, wood slats, "TAKASHI'S CASTLE THE FUN VALLEY" glowing sign)
async function generateEntrance() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="810" viewBox="0 0 1080 810">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A586E" />
        <stop offset="60%" stop-color="#7B8B9E" />
        <stop offset="100%" stop-color="#A5B4C4" />
      </linearGradient>
      <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D7D2C8" />
        <stop offset="100%" stop-color="#B8B2A5" />
      </linearGradient>
      <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFF0A0" stop-opacity="0.9" />
        <stop offset="60%" stop-color="#F7BE3E" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#EC5B3E" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Sky & Background -->
    <rect width="1080" height="810" fill="url(#skyGrad)" />
    <!-- Distant trees on left/right -->
    <path d="M-20 480 Q40 400 90 480 Q130 380 180 490 L0 520 Z" fill="#2E4A35" opacity="0.7" />
    <path d="M920 480 Q980 410 1040 490 Q1070 420 1100 500 L1100 540 Z" fill="#36523D" opacity="0.6" />
    <rect x="940" y="470" width="120" height="60" fill="#EAEAEA" rx="6" opacity="0.8" /> <!-- White car suggestion -->

    <!-- Ground / Concrete Forecourt -->
    <rect y="480" width="1080" height="330" fill="url(#groundGrad)" />
    <!-- Subtle ground texture lines -->
    <line x1="0" y1="620" x2="1080" y2="620" stroke="#9A9488" stroke-width="1.5" stroke-dasharray="8 12" opacity="0.4" />
    <line x1="0" y1="720" x2="1080" y2="720" stroke="#8E887C" stroke-width="2" opacity="0.3" />

    <!-- Building Facade (Black structure with vertical honey-wood slats) -->
    <!-- Corrugated tin roof overhanging -->
    <polygon points="50,150 970,110 990,170 30,215" fill="#3D454E" />
    <line x1="40" y1="160" x2="980" y2="120" stroke="#636E7B" stroke-width="8" />

    <!-- Upper wall with vertical wood slats -->
    <rect x="80" y="170" width="880" height="330" fill="#1C1814" />
    <!-- White lower concrete base band -->
    <rect x="80" y="500" width="880" height="80" fill="#EAE5DC" stroke="#D0CAC0" stroke-width="2" />
    <!-- Pink/terracotta flower planter bed on left -->
    <rect x="70" y="560" width="340" height="40" fill="#D87878" />
    <ellipse cx="240" cy="555" rx="160" ry="12" fill="#28522E" />

    <!-- Vertical Wood Slats -->
    ${Array.from({ length: 48 }).map((_, i) => {
      const x = 92 + i * 18;
      return `<rect x="${x}" y="175" width="8" height="320" fill="#C99852" />`;
    }).join('\n')}

    <!-- Glowing Red Signboard: "TAKASHI'S CASTLE / THE FUN VALLEY" -->
    <g transform="translate(190, 210)">
      <rect x="0" y="0" width="220" height="85" fill="#1A1A1A" rx="4" stroke="#444" stroke-width="2" />
      <rect x="6" y="6" width="208" height="34" fill="#C5251C" rx="2" />
      <text x="110" y="28" font-family="'Arial Black', sans-serif" font-weight="900" font-size="14" fill="#FFF" text-anchor="middle" letter-spacing="1.5">TAKASHI'S CASTLE</text>
      <rect x="6" y="44" width="208" height="34" fill="#E52B1E" rx="2" />
      <text x="110" y="66" font-family="'Arial Black', sans-serif" font-weight="900" font-size="16" fill="#FFF" text-anchor="middle" letter-spacing="2">THE FUN VALLEY</text>
    </g>

    <!-- Main Architectural Feature: The Glowing Circular Entrance Tunnel -->
    <!-- Entrance Outer Metal Arch (Industrial black tube) -->
    <circle cx="640" cy="490" r="230" fill="none" stroke="#22262B" stroke-width="40" />
    <!-- Yellow LED Strip Lighting inside the arch -->
    <circle cx="640" cy="490" r="205" fill="none" stroke="#FFE9A6" stroke-width="12" filter="drop-shadow(0 0 16px #F7BE3E)" />
    <circle cx="640" cy="490" r="205" fill="none" stroke="#FFFDF0" stroke-width="4" />
    <!-- Tunnel interior depth -->
    <circle cx="640" cy="490" r="198" fill="#141820" />
    <!-- Tunnel interior yellow glow -->
    <circle cx="640" cy="490" r="195" fill="url(#portalGlow)" opacity="0.35" />

    <!-- Interior Glass Doorway seen through the tunnel -->
    <rect x="525" y="400" width="230" height="230" fill="#202A38" stroke="#FFFFFF" stroke-width="6" />
    <!-- Glass panes grid -->
    <line x1="640" y1="400" x2="640" y2="630" stroke="#FFFFFF" stroke-width="4" />
    <line x1="525" y1="475" x2="755" y2="475" stroke="#FFFFFF" stroke-width="3" />
    <line x1="525" y1="550" x2="755" y2="550" stroke="#FFFFFF" stroke-width="3" />
    <!-- Interior vibrant colored walls visible through glass -->
    <rect x="535" y="480" width="40" height="140" fill="#4C8DF6" opacity="0.8" />
    <rect x="580" y="480" width="40" height="140" fill="#F7BE3E" opacity="0.8" />
    <rect x="650" y="480" width="40" height="140" fill="#FFC9D6" opacity="0.8" />
    <rect x="700" y="480" width="40" height="140" fill="#EC5B3E" opacity="0.8" />

    <!-- Porch Step with Welcome Mats and Shoes -->
    <rect x="460" y="660" width="360" height="40" fill="#EDE7DD" stroke="#C8C2B6" stroke-width="2" />
    <!-- Two Coir Welcome Mats -->
    <rect x="480" y="666" width="150" height="30" fill="#9C6B38" rx="2" />
    <text x="555" y="686" font-family="sans-serif" font-weight="bold" font-size="10" fill="#66421E" text-anchor="middle">WELCOME</text>
    <rect x="650" y="666" width="150" height="30" fill="#9C6B38" rx="2" />
    <text x="725" y="686" font-family="sans-serif" font-weight="bold" font-size="10" fill="#66421E" text-anchor="middle">WELCOME</text>

    <!-- White Potted Plants on porch -->
    <rect x="495" y="615" width="30" height="40" fill="#FFFFFF" rx="2" />
    <circle cx="510" cy="595" r="22" fill="#2E5A35" />
    <rect x="745" y="615" width="30" height="40" fill="#FFFFFF" rx="2" />
    <circle cx="760" cy="595" r="22" fill="#2E5A35" />

    <!-- Shoes/sandals scattered neatly in front of step -->
    <ellipse cx="430" cy="730" rx="14" ry="7" fill="#222" />
    <ellipse cx="470" cy="735" rx="14" ry="7" fill="#583A20" />
    <ellipse cx="520" cy="740" rx="14" ry="7" fill="#1F2133" />
    <ellipse cx="570" cy="745" rx="14" ry="7" fill="#888" />
    <ellipse cx="620" cy="742" rx="14" ry="7" fill="#3D4B66" />
    <ellipse cx="780" cy="748" rx="14" ry="7" fill="#C5251C" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'entrance.jpg'));
  console.log('✓ Generated entrance.jpg');
}

// 3. play-hall.jpg (1080x720, Wide open hall, bright red carpet, yellow LED strips, neon "GAME ZONE" sign, caution stripes)
async function generatePlayHall() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="720" viewBox="0 0 1080 720">
    <defs>
      <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#48444A" />
        <stop offset="100%" stop-color="#2D2830" />
      </linearGradient>
      <linearGradient id="carpetGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C2281E" />
        <stop offset="50%" stop-color="#E53322" />
        <stop offset="100%" stop-color="#B82218" />
      </linearGradient>
      <pattern id="stripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="20" height="40" fill="#F7BE3E" />
        <rect x="20" width="20" height="40" fill="#1F2133" />
      </pattern>
    </defs>

    <!-- Corrugated Roof Structure with metal trusses -->
    <polygon points="0,0 1080,0 1080,380 0,380" fill="url(#roofGrad)" />
    <!-- Steel Trusses Grid -->
    ${Array.from({ length: 9 }).map((_, i) => {
      const x = i * 135;
      return `
        <line x1="${x}" y1="0" x2="${x}" y2="380" stroke="#1D1A20" stroke-width="5" />
        <line x1="${x}" y1="0" x2="${x + 135}" y2="380" stroke="#1D1A20" stroke-width="2.5" opacity="0.6" />
        <line x1="${x + 135}" y1="0" x2="${x}" y2="380" stroke="#1D1A20" stroke-width="2.5" opacity="0.6" />
      `;
    }).join('\n')}

    <!-- Back Wall (White corrugated sheeting) -->
    <polygon points="120,240 960,240 1080,440 0,440" fill="#DDD8D0" stroke="#B8B2A6" />
    
    <!-- Neon "GAME ZONE" sign on back wall -->
    <g transform="translate(660, 240)">
      <rect x="-80" y="-30" width="160" height="60" fill="#111" rx="8" />
      <text x="0" y="-2" font-family="'Arial Black', sans-serif" font-weight="900" font-size="20" fill="#4C8DF6" text-anchor="middle" filter="drop-shadow(0 0 10px #4C8DF6)">GAME</text>
      <text x="0" y="20" font-family="'Arial Black', sans-serif" font-weight="900" font-size="18" fill="#EC5B3E" text-anchor="middle" filter="drop-shadow(0 0 10px #EC5B3E)">ZONE</text>
    </g>

    <!-- Yellow LED Rope Light contour running along the back and side walls -->
    <polyline points="0,380 380,360 700,360 1080,380" fill="none" stroke="#FFE9A6" stroke-width="8" filter="drop-shadow(0 0 12px #F7BE3E)" />
    <polyline points="0,380 380,360 700,360 1080,380" fill="none" stroke="#FFFFFF" stroke-width="3" />

    <!-- Side Walls with vertical panels and blue LED glow -->
    <polygon points="0,150 160,280 160,540 0,600" fill="#B0A9A0" />
    <polygon points="1080,150 920,280 920,540 1080,600" fill="#B0A9A0" />
    <!-- Blue neon vertical accents on side wall -->
    <line x1="80" y1="280" x2="80" y2="480" stroke="#4C8DF6" stroke-width="6" filter="drop-shadow(0 0 12px #4C8DF6)" />

    <!-- Counter in mid-ground with Black & Yellow Caution Stripes -->
    <rect x="380" y="430" width="410" height="42" fill="url(#stripes)" stroke="#1F2133" stroke-width="2" />
    <!-- Countertop -->
    <polygon points="370,430 795,430 810,420 385,420" fill="#222" />

    <!-- Red Carpet Floor (Vivid play hall ground) -->
    <polygon points="0,480 1080,480 1080,720 0,720" fill="url(#carpetGrad)" />
    <!-- Floor run lines -->
    <line x1="280" y1="480" x2="160" y2="720" stroke="#FFF" stroke-width="2.5" opacity="0.5" />
    <line x1="620" y1="480" x2="630" y2="720" stroke="#FFF" stroke-width="3" opacity="0.6" />
    <line x1="880" y1="480" x2="980" y2="720" stroke="#FFF" stroke-width="2.5" opacity="0.5" />

    <!-- Distant figure standing by the counter -->
    <circle cx="585" cy="415" r="9" fill="#1F2133" />
    <rect x="578" y="424" width="14" height="24" fill="#2D3B4E" rx="2" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'play-hall.jpg'));
  console.log('✓ Generated play-hall.jpg');
}

// 4. vr-ride.jpg (810x1080, Portrait, person in futuristic VR ride motion chair, blue neon LED lights)
async function generateVrRide() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="810" height="1080" viewBox="0 0 810 1080">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#141829" />
        <stop offset="60%" stop-color="#1A213D" />
        <stop offset="100%" stop-color="#2D1929" />
      </linearGradient>
      <linearGradient id="chairGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#181B26" />
        <stop offset="50%" stop-color="#2A2F42" />
        <stop offset="100%" stop-color="#181B26" />
      </linearGradient>
    </defs>

    <!-- Deep Ambient Cyberpunk Gaming Space -->
    <rect width="810" height="1080" fill="url(#bgGrad)" />

    <!-- Corrugated wall with ambient horizontal LED bar -->
    <rect x="0" y="440" width="810" height="160" fill="#202638" opacity="0.6" />
    <line x1="0" y1="520" x2="810" y2="520" stroke="#F7BE3E" stroke-width="12" filter="drop-shadow(0 0 20px #F7BE3E)" opacity="0.8" />
    <line x1="0" y1="520" x2="810" y2="520" stroke="#FFF" stroke-width="4" opacity="0.9" />

    <!-- Red Floor Ground -->
    <polygon points="0,850 810,850 810,1080 0,1080" fill="#A8241C" />

    <!-- Futuristic VR Cockpit Chair / Pod -->
    <!-- Base Platform with Blue Underglow -->
    <polygon points="240,940 570,940 640,990 170,990" fill="#3A435C" />
    <polygon points="210,980 600,980 620,1005 190,1005" fill="#4C8DF6" filter="drop-shadow(0 0 24px #4C8DF6)" />

    <!-- Motion Hydraulic Base -->
    <rect x="365" y="870" width="80" height="80" fill="#1C202E" />

    <!-- Overhead Monitor Screen mounted to chair -->
    <g transform="translate(405, 230)">
      <!-- Frame -->
      <rect x="-130" y="-80" width="260" height="160" fill="#10121A" rx="8" stroke="#333" stroke-width="4" />
      <!-- Display showing deep space / roller coaster visual -->
      <rect x="-115" y="-65" width="230" height="130" fill="#0C152B" />
      <circle cx="-30" cy="-10" r="28" fill="#4C8DF6" opacity="0.6" filter="blur(6px)" />
      <polygon points="20,10 70,-40 90,30" fill="#EC5B3E" opacity="0.7" />
      <polyline points="-90,40 -20,-10 40,20 100,-20" stroke="#FFFFFF" stroke-width="3" fill="none" />
      <!-- Support arm down to cockpit -->
      <rect x="-10" y="80" width="20" height="90" fill="#3D4558" />
    </g>

    <!-- Main VR Cockpit Pod -->
    <g transform="translate(405, 600)">
      <!-- High-back Throne/Shell -->
      <path d="M-170 -260 L-130 -310 L130 -310 L170 -260 L140 220 L-140 220 Z" fill="url(#chairGrad)" stroke="#111" stroke-width="4" />
      
      <!-- Crown Stars on top of chair -->
      <text x="-60" y="-280" font-size="20" fill="#FFFFFF" text-anchor="middle">★</text>
      <text x="-20" y="-285" font-size="22" fill="#FFFFFF" text-anchor="middle">★</text>
      <text x="20" y="-285" font-size="22" fill="#FFFFFF" text-anchor="middle">★</text>
      <text x="60" y="-280" font-size="20" fill="#FFFFFF" text-anchor="middle">★</text>

      <!-- Glowing Blue Neon Wings along the sides of the pod -->
      <path d="M-150 -250 L-130 -50 L-110 180" fill="none" stroke="#4C8DF6" stroke-width="14" filter="drop-shadow(0 0 16px #4C8DF6)" stroke-linecap="round" />
      <path d="M150 -250 L130 -50 L110 180" fill="none" stroke="#4C8DF6" stroke-width="14" filter="drop-shadow(0 0 16px #4C8DF6)" stroke-linecap="round" />
      <path d="M-150 -250 L-130 -50 L-110 180" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
      <path d="M150 -250 L130 -50 L110 180" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />

      <!-- Circular Neon Side Roundels -->
      <circle cx="-135" cy="80" r="30" fill="none" stroke="#4C8DF6" stroke-width="6" filter="drop-shadow(0 0 12px #4C8DF6)" />
      <circle cx="135" cy="80" r="30" fill="none" stroke="#4C8DF6" stroke-width="6" filter="drop-shadow(0 0 12px #4C8DF6)" />

      <!-- Person Seated in Cockpit -->
      <!-- Legs in Jeans -->
      <rect x="-65" y="100" width="50" height="150" fill="#2E4868" rx="6" />
      <rect x="15" y="100" width="50" height="150" fill="#2E4868" rx="6" />
      <!-- Torso in floral/patterned shirt with safety harness -->
      <rect x="-60" y="-40" width="120" height="150" fill="#C4B4A8" rx="10" />
      <!-- Black Safety Harness straps crossing torso -->
      <rect x="-35" y="-40" width="18" height="150" fill="#111" />
      <rect x="17" y="-40" width="18" height="150" fill="#111" />
      <rect x="-45" y="40" width="90" height="16" fill="#111" />

      <!-- Hands gripping side armrest handles -->
      <circle cx="-110" cy="50" r="18" fill="#D4A78A" />
      <circle cx="110" cy="50" r="18" fill="#D4A78A" />

      <!-- Head with White VR Headset -->
      <circle cx="0" cy="-110" r="42" fill="#D4A78A" />
      <rect x="-44" y="-130" width="88" height="42" fill="#FFFFFF" rx="8" stroke="#111" stroke-width="2" />
      <line x1="-40" y1="-109" x2="40" y2="-109" stroke="#333" stroke-width="2" />
      <!-- Headset strap -->
      <rect x="-44" y="-120" width="8" height="20" fill="#111" />
      <rect x="36" y="-120" width="8" height="20" fill="#111" />

      <!-- Front illuminated brand plates: "360 VR" -->
      <text x="-40" y="210" font-family="'Arial Black', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" filter="drop-shadow(0 0 8px #4C8DF6)">360</text>
      <text x="50" y="210" font-family="'Arial Black', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" filter="drop-shadow(0 0 8px #4C8DF6)">VR</text>
    </g>

    <!-- Camera Timestamp watermark on bottom-left matching photo -->
    <g transform="translate(60, 990)" opacity="0.95">
      <rect x="0" y="0" width="34" height="46" rx="6" fill="none" stroke="#FFFFFF" stroke-width="3" />
      <circle cx="17" cy="18" r="9" fill="none" stroke="#FFFFFF" stroke-width="3" />
      <circle cx="17" cy="18" r="3" fill="#FFFFFF" />
      <circle cx="17" cy="35" r="5" fill="none" stroke="#FFFFFF" stroke-width="2" />
      <text x="65" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">July 10, 2026 at 7:58 PM</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'vr-ride.jpg'));
  console.log('✓ Generated vr-ride.jpg');
}

// 5. racing-sim.jpg (810x1080, Portrait, racing wheel controller + TV game showing race car)
async function generateRacingSim() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="810" height="1080" viewBox="0 0 810 1080">
    <defs>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4B423A" />
        <stop offset="100%" stop-color="#2E2822" />
      </linearGradient>
      <linearGradient id="trackGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5599DD" />
        <stop offset="45%" stop-color="#8BBCE8" />
        <stop offset="50%" stop-color="#2F3842" />
        <stop offset="100%" stop-color="#1B2026" />
      </linearGradient>
    </defs>

    <!-- Wall & Background -->
    <rect width="810" height="1080" fill="url(#wallGrad)" />

    <!-- Big TV Screen Mounted on Wall -->
    <g transform="translate(140, 80)">
      <!-- TV Bezel -->
      <rect x="0" y="0" width="580" height="360" fill="#0D0E12" rx="4" stroke="#252830" stroke-width="8" />
      <!-- Screen Display with Racing Game -->
      <rect x="10" y="10" width="560" height="340" fill="url(#trackGrad)" />
      
      <!-- Track Horizon & Race Circuit -->
      <polygon points="10,180 570,180 460,350 120,350" fill="#252B33" />
      <!-- Curbs (Red and White striped racing rumble strips) -->
      <polygon points="120,350 140,350 250,180 240,180" fill="#C2281E" />
      <polygon points="460,350 440,350 330,180 340,180" fill="#C2281E" />

      <!-- Player White GT Race Car Ahead on Track -->
      <g transform="translate(290, 240)">
        <polygon points="30,40 10,65 70,65 50,40" fill="#FFFFFF" />
        <!-- Rear Wing / Spoiler -->
        <rect x="5" y="35" width="70" height="6" fill="#111" />
        <!-- Tail lights -->
        <rect x="12" y="60" width="16" height="5" fill="#EC5B3E" />
        <rect x="52" y="60" width="16" height="5" fill="#EC5B3E" />
        <!-- Twin Exhaust -->
        <circle cx="30" cy="70" r="3" fill="#888" />
        <circle cx="50" cy="70" r="3" fill="#888" />
      </g>

      <!-- Competitor Cars in Distance -->
      <rect x="270" y="210" width="22" height="14" fill="#1F2133" rx="2" />
      <rect x="310" y="200" width="18" height="12" fill="#E6A817" rx="2" />

      <!-- HUD: Speedometer, Gear 4, Lap Times -->
      <text x="290" y="325" font-family="'Arial Black', monospace" font-weight="900" font-size="20" fill="#FFFFFF">133 km/h</text>
      <text x="385" y="325" font-family="'Arial Black', monospace" font-weight="900" font-size="28" fill="#F7BE3E">4</text>
      <!-- Mini Track Map in top right -->
      <path d="M500 50 Q540 60 520 100 Q480 120 500 50" fill="none" stroke="#FFFFFF" stroke-width="3" />
    </g>

    <!-- Warm Orange/Gold LED Strip under the TV on the wall -->
    <line x1="0" y1="560" x2="810" y2="560" stroke="#F7BE3E" stroke-width="12" filter="drop-shadow(0 0 16px #F7BE3E)" />
    <line x1="0" y1="560" x2="810" y2="560" stroke="#FFF" stroke-width="3" />

    <!-- Gaming Wheel Stand & PS5 console below -->
    <rect x="360" y="560" width="240" height="280" fill="#1C1B1F" />
    <!-- White PS5 console upright inside stand -->
    <rect x="420" y="600" width="35" height="140" fill="#ECEFF4" rx="4" />
    <rect x="425" y="605" width="25" height="130" fill="#1F2430" />

    <!-- Racing Cockpit Steel Rig (Black tubes) -->
    <line x1="280" y1="840" x2="350" y2="680" stroke="#252528" stroke-width="24" stroke-linecap="round" />
    <line x1="470" y1="840" x2="400" y2="680" stroke="#252528" stroke-width="24" stroke-linecap="round" />

    <!-- Logitech G29 Force Feedback Steering Wheel -->
    <g transform="translate(240, 520)">
      <!-- Base housing -->
      <polygon points="40,90 190,90 210,180 20,180" fill="#15171C" />
      <!-- Outer Wheel Rim (Perforated black leather) -->
      <circle cx="115" cy="115" r="130" fill="none" stroke="#1D2026" stroke-width="36" />
      <!-- Blue top center stripe (Racing 12 o'clock marker) -->
      <rect x="110" y="-15" width="10" height="36" fill="#4C8DF6" />

      <!-- Center Spokes and Red Dial Button -->
      <circle cx="115" cy="115" r="48" fill="#181B22" stroke="#2B2F3D" stroke-width="4" />
      <circle cx="75" cy="120" r="14" fill="#C5251C" />
      <line x1="-15" y1="115" x2="67" y2="115" stroke="#1D2026" stroke-width="28" />
      <line x1="163" y1="115" x2="245" y2="115" stroke="#1D2026" stroke-width="28" />
      <line x1="115" y1="163" x2="115" y2="245" stroke="#1D2026" stroke-width="28" />
      <circle cx="115" cy="115" r="22" fill="#0E1015" />
    </g>

    <!-- Player's Hands on the Steering Wheel -->
    <!-- Left Hand gripping rim at 9 o'clock -->
    <ellipse cx="140" cy="540" rx="36" ry="24" fill="#D4A78A" transform="rotate(-30 140 540)" />
    <!-- Right Hand gripping rim at 3 o'clock -->
    <ellipse cx="440" cy="560" rx="36" ry="24" fill="#D4A78A" transform="rotate(30 440 560)" />

    <!-- Driver seated in foreground (view from behind/side) -->
    <path d="M-40 760 Q120 740 220 860 L240 1080 L-40 1080 Z" fill="#6A6258" />
    <!-- Bare feet on aluminum pedal box below -->
    <polygon points="460,940 530,940 545,990 475,990" fill="#D4A78A" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'racing-sim.jpg'));
  console.log('✓ Generated racing-sim.jpg');
}

// 6. kids-corner.jpg (1080x810, Cartoon mural, red teddy, pink princess play tent, ball pit)
async function generateKidsCorner() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="810" viewBox="0 0 1080 810">
    <defs>
      <linearGradient id="muralGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#2D72D2" />
        <stop offset="35%" stop-color="#4CB8F6" />
        <stop offset="70%" stop-color="#F7BE3E" />
        <stop offset="100%" stop-color="#EC5B3E" />
      </linearGradient>
    </defs>

    <!-- Ceiling/truss beam -->
    <rect width="1080" height="70" fill="#2E2822" />
    <line x1="0" y1="70" x2="1080" y2="70" stroke="#1A1714" stroke-width="4" />

    <!-- Giant Vibrant Cartoon Character Wallpaper Mural -->
    <rect y="70" width="1080" height="540" fill="url(#muralGrad)" />

    <!-- Mural Graphic Blocks (Cartoon homage inspired by photo) -->
    <!-- Doraemon graphic left -->
    <g transform="translate(180, 290)">
      <circle cx="0" cy="0" r="75" fill="#1C8CE6" />
      <circle cx="0" cy="12" r="58" fill="#FFFFFF" />
      <!-- Eyes -->
      <ellipse cx="-16" cy="-28" rx="14" ry="18" fill="#FFF" stroke="#222" stroke-width="2" />
      <ellipse cx="16" cy="-28" rx="14" ry="18" fill="#FFF" stroke="#222" stroke-width="2" />
      <circle cx="-10" cy="-28" r="5" fill="#222" />
      <circle cx="10" cy="-28" r="5" fill="#222" />
      <!-- Red nose -->
      <circle cx="0" cy="-10" r="10" fill="#E52B1E" />
      <line x1="0" y1="0" x2="0" y2="35" stroke="#222" stroke-width="2" />
      <path d="M-35 25 Q0 55 35 25" fill="none" stroke="#222" stroke-width="3" />
    </g>

    <!-- Spongebob homage in center -->
    <g transform="translate(360, 280)">
      <rect x="-55" y="-70" width="110" height="140" fill="#F7D02C" rx="6" stroke="#A88B12" stroke-width="3" />
      <!-- Large Eyes -->
      <circle cx="-22" cy="-25" r="22" fill="#FFF" stroke="#222" stroke-width="2" />
      <circle cx="22" cy="-25" r="22" fill="#FFF" stroke="#222" stroke-width="2" />
      <circle cx="-18" cy="-25" r="8" fill="#4C8DF6" />
      <circle cx="18" cy="-25" r="8" fill="#4C8DF6" />
      <!-- Big smile with two buck teeth -->
      <path d="M-40 5 Q0 35 40 5" fill="none" stroke="#222" stroke-width="3" />
      <rect x="-12" y="14" width="10" height="12" fill="#FFF" stroke="#222" />
      <rect x="2" y="14" width="10" height="12" fill="#FFF" stroke="#222" />
      <!-- Shirt and tie -->
      <rect x="-55" y="70" width="110" height="25" fill="#FFF" stroke="#222" />
      <polygon points="0,72 -8,90 0,98 8,90" fill="#C5251C" />
    </g>

    <!-- Lightning McQueen graphic top-left -->
    <g transform="translate(140, 150)">
      <rect x="-50" y="-20" width="100" height="35" fill="#C5251C" rx="8" />
      <polygon points="-40,-20 -20,-40 20,-40 40,-20" fill="#C5251C" />
      <rect x="-15" y="-36" width="30" height="14" fill="#88D4FF" />
      <text x="0" y="2" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#F7BE3E" text-anchor="middle">95</text>
    </g>

    <!-- Comic Words: KABOOM & WOW! -->
    <text x="370" y="160" font-family="'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#EC5B3E" stroke="#1F2133" stroke-width="2" letter-spacing="2">KABOOM</text>
    <text x="660" y="160" font-family="'Arial Black', sans-serif" font-weight="900" font-size="44" fill="#4C8DF6" stroke="#FFFFFF" stroke-width="3" letter-spacing="3">WOW!</text>

    <!-- Kung Fu Panda & Elsa homages on right -->
    <g transform="translate(560, 420)">
      <circle cx="0" cy="-30" r="50" fill="#FFFFFF" stroke="#222" stroke-width="3" />
      <!-- Panda Eye Patches -->
      <ellipse cx="-20" cy="-35" rx="16" ry="12" fill="#222" transform="rotate(-20 -20 -35)" />
      <ellipse cx="20" cy="-35" rx="16" ry="12" fill="#222" transform="rotate(20 20 -35)" />
      <circle cx="-18" cy="-35" r="4" fill="#FFF" />
      <circle cx="18" cy="-35" r="4" fill="#FFF" />
      <polygon points="0,-22 -8,-15 8,-15" fill="#222" />
    </g>
    <!-- Elsa Blue Ice silhouette -->
    <path d="M520 80 Q550 40 580 80 Q610 160 560 220 Z" fill="#D6E6FF" opacity="0.8" />

    <!-- Red Carpet Floor -->
    <polygon points="0,610 1080,610 1080,810 0,810" fill="#D22B1E" />
    <!-- White edge strip along wall baseline -->
    <rect y="605" width="1080" height="10" fill="#FFFDF0" />

    <!-- Pop-up Mesh Ball Pit on Left with colorful plastic balls -->
    <g transform="translate(180, 680)">
      <!-- Hexagonal pop-up tent frame in green mesh -->
      <polygon points="-80,0 -40,-60 40,-60 80,0 40,60 -40,60" fill="#69C254" opacity="0.65" stroke="#3D8E2B" stroke-width="4" />
      <!-- Colorful balls inside pit -->
      <circle cx="-30" cy="10" r="14" fill="#F7BE3E" />
      <circle cx="0" cy="20" r="14" fill="#4C8DF6" />
      <circle cx="30" cy="15" r="14" fill="#EC5B3E" />
      <circle cx="-15" cy="-15" r="14" fill="#FFC9D6" />
      <circle cx="20" cy="-10" r="14" fill="#69C254" />
      <circle cx="-35" cy="-20" r="12" fill="#4C8DF6" />
    </g>

    <!-- Big Plush Red Teddy Bear sitting on the floor against the wall -->
    <g transform="translate(620, 680)">
      <!-- Legs and Paws -->
      <circle cx="-45" cy="55" r="30" fill="#9E1610" />
      <circle cx="-45" cy="55" r="18" fill="#C2281E" />
      <circle cx="45" cy="55" r="30" fill="#9E1610" />
      <circle cx="45" cy="55" r="18" fill="#C2281E" />
      <!-- Torso -->
      <ellipse cx="0" cy="15" rx="55" ry="60" fill="#B81C15" />
      <!-- Arms -->
      <ellipse cx="-55" cy="0" rx="24" ry="40" fill="#A81812" transform="rotate(25 -55 0)" />
      <ellipse cx="55" cy="0" rx="24" ry="40" fill="#A81812" transform="rotate(-25 55 0)" />
      <!-- Head and Ears -->
      <circle cx="-36" cy="-75" r="18" fill="#B81C15" />
      <circle cx="36" cy="-75" r="18" fill="#B81C15" />
      <circle cx="0" cy="-45" r="48" fill="#C2281E" />
      <!-- Snout & Nose -->
      <ellipse cx="0" cy="-35" rx="20" ry="16" fill="#D87878" />
      <ellipse cx="0" cy="-42" rx="10" ry="7" fill="#1F2133" />
      <!-- Eyes -->
      <circle cx="-18" cy="-55" r="5" fill="#1F2133" />
      <circle cx="18" cy="-55" r="5" fill="#1F2133" />
    </g>

    <!-- Pink Disney Princess Play Castle Tent on Right -->
    <g transform="translate(860, 680)">
      <!-- Tent Walls in Pink -->
      <rect x="-110" y="-120" width="220" height="150" fill="#FFC9D6" stroke="#EC5B3E" stroke-width="4" rx="4" />
      <!-- Tent Roof / Turrets -->
      <polygon points="-115,-120 0,-190 115,-120" fill="#EC5B3E" />
      <!-- Golden finial star -->
      <polygon points="0,-205 -5,-190 5,-190" fill="#F7BE3E" />
      <!-- Arched Doorway Curtain Opening -->
      <path d="M-40 30 Q-40 -40 0 -40 Q40 -40 40 30 Z" fill="#9E1610" />
      <!-- Princess Homage silhouettes on tent walls -->
      <rect x="-95" y="-100" width="45" height="60" fill="#FFE9A6" opacity="0.9" rx="2" />
      <rect x="50" y="-100" width="45" height="60" fill="#D6E6FF" opacity="0.9" rx="2" />
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'kids-corner.jpg'));
  console.log('✓ Generated kids-corner.jpg');
}

async function main() {
  await generateLogoBadge();
  await generateEntrance();
  await generatePlayHall();
  await generateVrRide();
  await generateRacingSim();
  await generateKidsCorner();
  console.log('★ All 6 venue assets generated successfully in public/images!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
