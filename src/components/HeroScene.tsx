import React from "react";

export const HeroScene: React.FC = () => {
  return (
    <svg
      viewBox="0 0 900 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block select-none"
      aria-hidden="true"
    >
      <defs>
        {/* Clip for Mt Fuji snow cap */}
        <clipPath id="fujiClip">
          <polygon points="450,420 300,640 600,640" />
        </clipPath>
      </defs>

      {/* 1. Sky: Sakura fill */}
      <rect width="900" height="1000" fill="#FFC9D6" />

      {/* 2. Sun Disc: large coral circle (r≈210) upper right, behind mountain */}
      <circle cx="680" cy="280" r="210" fill="#EC5B3E" />

      {/* 3. Mount Fuji (low on horizon) */}
      {/* Fuji Base Silhouette in Blue (~85% opacity) */}
      <polygon
        points="450,410 200,740 760,740"
        fill="#4C8DF6"
        fillOpacity="0.85"
      />
      {/* Fuji Snow Cap Zigzag in Cream */}
      <polygon
        points="450,410 405,480 420,490 435,475 450,495 465,475 480,490 495,480"
        fill="#FFF6E5"
      />
      {/* Second smaller darker-blue ridge in front */}
      <polygon
        points="140,740 280,630 460,740"
        fill="#1F2133"
        fillOpacity="0.22"
      />
      <polygon
        points="520,740 660,650 820,740"
        fill="#1F2133"
        fillOpacity="0.18"
      />

      {/* 4. Castle on Stepped Stone Base (Center-right, ink silhouette with cream windows) */}
      <g id="castle" fill="#1F2133">
        {/* Stepped Stone Base (Ishigaki) */}
        <polygon points="260,760 300,690 540,690 580,760" />
        <polygon points="280,690 310,650 530,650 560,690" />
        {/* Base stone texture lines */}
        <line x1="330" y1="690" x2="320" y2="760" stroke="#FFF6E5" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="390" y1="690" x2="385" y2="760" stroke="#FFF6E5" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="450" y1="690" x2="455" y2="760" stroke="#FFF6E5" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="510" y1="690" x2="520" y2="760" stroke="#FFF6E5" strokeWidth="1.5" strokeOpacity="0.3" />

        {/* Tier 1 Roof (Upswept curved eaves) */}
        <path d="M260 655 C330 648, 510 648, 580 655 C590 656, 582 645, 545 640 L295 640 C258 645, 250 656, 260 655 Z" />
        {/* Tier 1 Walls */}
        <rect x="325" y="595" width="190" height="45" />
        {/* Tier 1 Windows */}
        <rect x="345" y="608" width="12" height="18" fill="#FFF6E5" />
        <rect x="375" y="608" width="12" height="18" fill="#FFF6E5" />
        <rect x="455" y="608" width="12" height="18" fill="#FFF6E5" />
        <rect x="485" y="608" width="12" height="18" fill="#FFF6E5" />

        {/* Tier 2 Roof */}
        <path d="M295 600 C350 594, 490 594, 545 600 C555 601, 547 590, 520 585 L320 585 C293 590, 285 601, 295 600 Z" />
        {/* Tier 2 Walls */}
        <rect x="345" y="545" width="150" height="40" />
        {/* Tier 2 Windows */}
        <rect x="365" y="555" width="10" height="15" fill="#FFF6E5" />
        <rect x="415" y="555" width="10" height="15" fill="#FFF6E5" />
        <rect x="465" y="555" width="10" height="15" fill="#FFF6E5" />

        {/* Tier 3 Roof with ornamental gable (Chidori hafu) */}
        <path d="M320 550 C365 544, 475 544, 520 550 C530 551, 522 540, 500 535 L340 535 C318 540, 310 551, 320 550 Z" />
        {/* Triangle gable */}
        <polygon points="420,518 395,535 445,535" />
        {/* Tier 3 Walls */}
        <rect x="365" y="495" width="110" height="40" />
        {/* Tier 3 Windows */}
        <rect x="385" y="505" width="10" height="14" fill="#FFF6E5" />
        <rect x="445" y="505" width="10" height="14" fill="#FFF6E5" />

        {/* Tier 4 Top Roof (Hipped pyramid with curved ridges) */}
        <path d="M345 500 C380 494, 460 494, 495 500 C505 501, 498 490, 480 486 L420 450 L360 486 C342 490, 335 501, 345 500 Z" />
        {/* Top finial / Shachihoko */}
        <path d="M418 450 L420 435 C422 432, 426 430, 428 433 C426 437, 424 442, 422 450 Z" />
        <circle cx="420" cy="433" r="3" />
      </g>

      {/* 5. Torii Gate in Foreground (Right side framing the scene) */}
      <g id="torii-gate">
        {/* Left Post (Coral with slight slant) */}
        <polygon points="620,950 642,950 638,480 622,480" fill="#EC5B3E" />
        {/* Right Post */}
        <polygon points="810,950 832,950 828,480 812,480" fill="#EC5B3E" />
        {/* Base plates in Ink */}
        <rect x="612" y="930" width="38" height="24" rx="2" fill="#1F2133" />
        <rect x="802" y="930" width="38" height="24" rx="2" fill="#1F2133" />

        {/* Lower Horizontal Bar (Nuki) */}
        <rect x="590" y="530" width="270" height="16" fill="#EC5B3E" />
        {/* Center Vertical Tie (Gakuzuka) */}
        <rect x="717" y="475" width="16" height="55" fill="#EC5B3E" />

        {/* Upper Two-bar Top (Kasagi & Shimaki) */}
        {/* Lower top bar */}
        <rect x="580" y="480" width="290" height="16" fill="#EC5B3E" />
        {/* Top curved lintel with upswept ends */}
        <path
          d="M560 480 C650 468, 800 468, 890 480 C905 482, 908 460, 885 454 C795 442, 655 442, 565 454 C542 460, 545 482, 560 480 Z"
          fill="#EC5B3E"
        />

        {/* 6. One Paper Lantern hanging from the torii */}
        <g id="lantern" transform="translate(685, 546)">
          {/* Hanging string */}
          <line x1="22" y1="0" x2="22" y2="18" stroke="#1F2133" strokeWidth="2.5" />
          {/* Lantern Top Cap (Ink) */}
          <rect x="7" y="18" width="30" height="8" rx="2" fill="#1F2133" />
          {/* Lantern Body (Coral) */}
          <ellipse cx="22" cy="54" rx="22" ry="30" fill="#F7BE3E" />
          {/* Subtle ribbing lines */}
          <line x1="8" y1="42" x2="36" y2="42" stroke="#1F2133" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="4" y1="54" x2="40" y2="54" stroke="#1F2133" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="8" y1="66" x2="36" y2="66" stroke="#1F2133" strokeWidth="1" strokeOpacity="0.2" />
          {/* 楽しい set vertically in Cream (Zen Maru Gothic) */}
          <text
            x="22"
            y="46"
            textAnchor="middle"
            fill="#1F2133"
            className="font-kanji"
            fontSize="14"
            fontWeight="700"
          >
            楽
          </text>
          <text
            x="22"
            y="64"
            textAnchor="middle"
            fill="#1F2133"
            className="font-kanji"
            fontSize="13"
            fontWeight="700"
          >
            し
          </text>
          {/* Lantern Bottom Cap (Ink) */}
          <rect x="9" y="82" width="26" height="7" rx="2" fill="#1F2133" />
          {/* Tassel */}
          <line x1="22" y1="89" x2="22" y2="105" stroke="#EC5B3E" strokeWidth="3" />
        </g>
      </g>

      {/* 7. Cherry-Blossom Branch Entering Top-Left */}
      <g id="sakura-branch">
        {/* Main ink branch */}
        <path
          d="M-10 60 C80 90, 160 80, 220 150 C250 185, 290 200, 360 215"
          fill="none"
          stroke="#1F2133"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Side twigs */}
        <path
          d="M120 85 C140 50, 180 35, 210 25"
          fill="none"
          stroke="#1F2133"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M180 120 C210 125, 240 100, 280 95"
          fill="none"
          stroke="#1F2133"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M260 170 C280 190, 310 185, 340 170"
          fill="none"
          stroke="#1F2133"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Helper function / blossoms paths (~25 static 5-petal blossoms) */}
        {/* Blossom 1 (Coral) */}
        <g transform="translate(60, 95) scale(1.1) rotate(12)">
          <circle cx="0" cy="-12" r="8" fill="#EC5B3E" />
          <circle cx="11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="0" cy="0" r="4" fill="#FFF6E5" />
        </g>
        {/* Blossom 2 (Sakura) */}
        <g transform="translate(110, 75) scale(1.3) rotate(-25)">
          <circle cx="0" cy="-12" r="8" fill="#FFC9D6" />
          <circle cx="11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 3 (Cream) */}
        <g transform="translate(150, 50) scale(1.0) rotate(45)">
          <circle cx="0" cy="-12" r="8" fill="#FFF6E5" />
          <circle cx="11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 4 (Coral) */}
        <g transform="translate(195, 30) scale(0.9) rotate(8)">
          <circle cx="0" cy="-12" r="8" fill="#EC5B3E" />
          <circle cx="11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="0" cy="0" r="3.5" fill="#FFF6E5" />
        </g>
        {/* Blossom 5 (Sakura) */}
        <g transform="translate(170, 115) scale(1.2) rotate(60)">
          <circle cx="0" cy="-12" r="8" fill="#FFC9D6" />
          <circle cx="11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 6 (Cream) */}
        <g transform="translate(225, 95) scale(1.1) rotate(-15)">
          <circle cx="0" cy="-12" r="8" fill="#FFF6E5" />
          <circle cx="11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 7 (Coral) */}
        <g transform="translate(270, 90) scale(1.0) rotate(30)">
          <circle cx="0" cy="-12" r="8" fill="#EC5B3E" />
          <circle cx="11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="0" cy="0" r="3.5" fill="#FFF6E5" />
        </g>
        {/* Blossom 8 (Sakura) */}
        <g transform="translate(210, 160) scale(1.25) rotate(-40)">
          <circle cx="0" cy="-12" r="8" fill="#FFC9D6" />
          <circle cx="11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 9 (Cream) */}
        <g transform="translate(255, 180) scale(1.05) rotate(18)">
          <circle cx="0" cy="-12" r="8" fill="#FFF6E5" />
          <circle cx="11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 10 (Coral) */}
        <g transform="translate(300, 165) scale(0.95) rotate(-10)">
          <circle cx="0" cy="-12" r="8" fill="#EC5B3E" />
          <circle cx="11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="0" cy="0" r="3.5" fill="#FFF6E5" />
        </g>
        {/* Blossom 11 (Sakura) */}
        <g transform="translate(350, 210) scale(1.15) rotate(22)">
          <circle cx="0" cy="-12" r="8" fill="#FFC9D6" />
          <circle cx="11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="0" cy="0" r="4" fill="#EC5B3E" />
        </g>
        {/* Blossom 12 (Cream) */}
        <g transform="translate(290, 225) scale(0.9) rotate(80)">
          <circle cx="0" cy="-12" r="8" fill="#FFF6E5" />
          <circle cx="11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="0" cy="0" r="3.5" fill="#EC5B3E" />
        </g>
        {/* Blossom 13 (Sakura) */}
        <g transform="translate(30, 45) scale(0.9) rotate(-35)">
          <circle cx="0" cy="-12" r="8" fill="#FFC9D6" />
          <circle cx="11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-7" cy="10" r="8" fill="#FFC9D6" />
          <circle cx="-11" cy="-4" r="8" fill="#FFC9D6" />
          <circle cx="0" cy="0" r="3" fill="#EC5B3E" />
        </g>
        {/* Blossom 14 (Coral) */}
        <g transform="translate(90, 130) scale(0.85) rotate(5)">
          <circle cx="0" cy="-12" r="8" fill="#EC5B3E" />
          <circle cx="11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-7" cy="10" r="8" fill="#EC5B3E" />
          <circle cx="-11" cy="-4" r="8" fill="#EC5B3E" />
          <circle cx="0" cy="0" r="3" fill="#FFF6E5" />
        </g>
        {/* Blossom 15 (Cream) */}
        <g transform="translate(135, 150) scale(0.95) rotate(-20)">
          <circle cx="0" cy="-12" r="8" fill="#FFF6E5" />
          <circle cx="11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-7" cy="10" r="8" fill="#FFF6E5" />
          <circle cx="-11" cy="-4" r="8" fill="#FFF6E5" />
          <circle cx="0" cy="0" r="3.5" fill="#EC5B3E" />
        </g>

        {/* Loose Petals Drifting Below (Static, varied scale/rotation) */}
        <ellipse cx="140" cy="240" rx="9" ry="5" transform="rotate(-30 140 240)" fill="#EC5B3E" />
        <ellipse cx="200" cy="280" rx="10" ry="6" transform="rotate(45 200 280)" fill="#FFC9D6" />
        <ellipse cx="260" cy="310" rx="8" ry="5" transform="rotate(15 260 310)" fill="#FFF6E5" />
        <ellipse cx="320" cy="290" rx="9" ry="5" transform="rotate(-60 320 290)" fill="#EC5B3E" />
        <ellipse cx="370" cy="340" rx="8" ry="5" transform="rotate(30 370 340)" fill="#FFC9D6" />
        <ellipse cx="170" cy="360" rx="7" ry="4" transform="rotate(-15 170 360)" fill="#FFF6E5" />
        <ellipse cx="230" cy="410" rx="8" ry="5" transform="rotate(50 230 410)" fill="#EC5B3E" />
        <ellipse cx="300" cy="440" rx="9" ry="5" transform="rotate(-25 300 440)" fill="#FFC9D6" />
        <ellipse cx="360" cy="470" rx="7" ry="4" transform="rotate(70 360 470)" fill="#FFF6E5" />
        <ellipse cx="410" cy="510" rx="8" ry="5" transform="rotate(-40 410 510)" fill="#EC5B3E" />
      </g>

      {/* 8. Ground: Flat cream hill line with low ink railing suggestion */}
      <g id="ground">
        {/* Flat cream hill line along the bottom */}
        <path
          d="M0 840 Q250 820, 500 835 T900 820 L900 1000 L0 1000 Z"
          fill="#FFF6E5"
        />
        {/* Subtle secondary slope */}
        <path
          d="M0 900 Q400 870, 900 890 L900 1000 L0 1000 Z"
          fill="#1F2133"
          fillOpacity="0.04"
        />

        {/* Low ink railing suggestion along bottom */}
        <g stroke="#1F2133" strokeWidth="2.5" strokeOpacity="0.85">
          {/* Top rail */}
          <line x1="60" y1="875" x2="560" y2="875" />
          {/* Bottom rail */}
          <line x1="60" y1="915" x2="560" y2="915" />
          {/* Rail posts */}
          <line x1="80" y1="865" x2="80" y2="945" strokeWidth="4" />
          <line x1="160" y1="865" x2="160" y2="945" strokeWidth="4" />
          <line x1="240" y1="865" x2="240" y2="945" strokeWidth="4" />
          <line x1="320" y1="865" x2="320" y2="945" strokeWidth="4" />
          <line x1="400" y1="865" x2="400" y2="945" strokeWidth="4" />
          <line x1="480" y1="865" x2="480" y2="945" strokeWidth="4" />
          <line x1="540" y1="865" x2="540" y2="945" strokeWidth="4" />
        </g>
      </g>
    </svg>
  );
};
