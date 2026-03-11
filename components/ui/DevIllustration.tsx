export default function DevIllustration() {
  return (
    <div
      style={{
        position:    "relative",
        width:       "100%",
        maxWidth:    480,
        aspectRatio: "1 / 1.05",
      }}
    >
      {/* Pulse glow behind hex */}
      <div
        className="pulse-ring"
        aria-hidden
        style={{
          position:     "absolute",
          inset:        "-10%",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(110,231,247,0.10) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 480 504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
        role="img"
        aria-label="Illustrated developer sitting at a laptop with floating tech badges"
      >
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0D1F35" />
            <stop offset="100%" stopColor="#060810" />
          </radialGradient>
          <radialGradient id="skinGrad" cx="40%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#F5C9A0" />
            <stop offset="100%" stopColor="#D4956A" />
          </radialGradient>
          <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#6EE7F7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6EE7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#0D2040" />
          </linearGradient>
          <linearGradient id="laptopGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1A2F4A" />
            <stop offset="100%" stopColor="#0D1A2E" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#0A1628" />
            <stop offset="100%" stopColor="#050D1A" />
          </linearGradient>
          <linearGradient id="hexBorder" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#6EE7F7" stopOpacity="0.7" />
            <stop offset="50%"  stopColor="#A78BFA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6EE7F7" stopOpacity="0.2" />
          </linearGradient>
          <filter id="badge-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background ── */}
        <polygon points="240,10 450,125 450,355 240,470 30,355 30,125" fill="url(#bgGrad)" />
        <ellipse cx="240" cy="290" rx="175" ry="155" fill="url(#glowBlue)" opacity="0.4" />

        {/* ── Desk ── */}
        <ellipse cx="240" cy="392" rx="195" ry="26" fill="#0A1828" opacity="0.7" />
        <rect x="58" y="378" width="364" height="12" rx="6" fill="#0E2238" opacity="0.85" />

        {/* ── Laptop base ── */}
        <rect x="112" y="332" width="256" height="18" rx="8" fill="url(#laptopGrad)" />
        <rect x="117" y="330" width="246" height="3"  rx="1.5" fill="#2A4A6A" opacity="0.4" />
        <rect x="198" y="337" width="84"  height="7"  rx="3.5" fill="#0D1E33" opacity="0.8" />

        {/* ── Laptop screen shell ── */}
        <rect x="122" y="192" width="236" height="148" rx="10" fill="url(#laptopGrad)" />
        <rect x="130" y="200" width="220" height="130" rx="6"  fill="url(#screenGrad)" />
        <rect x="130" y="200" width="220" height="130" rx="6"  fill="#6EE7F7" opacity="0.025" />

        {/* ── Code on screen ── */}
        {[0,1,2,3,4,5].map((i) => (
          <text key={i} x="141" y={218 + i * 19} fontFamily="monospace" fontSize="8.5" fill="#3A5A74">
            {i + 1}
          </text>
        ))}
        <text x="156" y="218" fontFamily="monospace" fontSize="8.5" fill="#A78BFA">const</text>
        <text x="186" y="218" fontFamily="monospace" fontSize="8.5" fill="#6EE7F7"> dev</text>
        <text x="207" y="218" fontFamily="monospace" fontSize="8.5" fill="#E2EAF4"> = {"{"}</text>

        <text x="156" y="237" fontFamily="monospace" fontSize="8.5" fill="#5A7A94">{"  name:"}</text>
        <text x="196" y="237" fontFamily="monospace" fontSize="8.5" fill="#FCD34D">{"  'Rohit'"}</text>

        <text x="156" y="256" fontFamily="monospace" fontSize="8.5" fill="#5A7A94">{"  stack:"}</text>
        <text x="198" y="256" fontFamily="monospace" fontSize="8.5" fill="#34D399">{"  ['React',"}</text>

        <text x="156" y="275" fontFamily="monospace" fontSize="8.5" fill="#34D399">{"    'Next.js', 'TS']"}</text>

        <text x="156" y="294" fontFamily="monospace" fontSize="8.5" fill="#5A7A94">{"  exp:"}</text>
        <text x="186" y="294" fontFamily="monospace" fontSize="8.5" fill="#FCD34D">{"  '3+ yrs'"}</text>

        <text x="156" y="313" fontFamily="monospace" fontSize="8.5" fill="#E2EAF4">{"}"}</text>

        {/* Cursor */}
        <rect x="246" y="305" width="5.5" height="9" rx="1" fill="#6EE7F7">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
        </rect>

        {/* Screen shine */}
        <rect x="130" y="200" width="220" height="28" rx="6" fill="white" opacity="0.015" />

        {/* Hinge */}
        <rect x="122" y="338" width="236" height="2" rx="1" fill="#0A1828" />

        {/* ── Body / shirt ── */}
        <path
          d="M157 332 Q157 287 172 272 Q197 257 240 252 Q283 257 308 272 Q323 287 323 332 Z"
          fill="url(#shirtGrad)"
        />
        <path d="M219 270 L240 292 L261 270 Q251 262 240 260 Q229 262 219 270Z" fill="#0D2040" />
        <path d="M233 270 L240 282 L247 270" stroke="#1E3A5F" strokeWidth="1.5" fill="none" />

        {/* Neck */}
        <rect x="229" y="247" width="22" height="22" rx="7" fill="url(#skinGrad)" />

        {/* ── Head ── */}
        <ellipse cx="240" cy="226" rx="37" ry="39" fill="url(#skinGrad)" />

        {/* Hair */}
        <path
          d="M204 216 Q203 187 221 179 Q240 172 259 179 Q277 187 276 216
             Q269 201 264 199 Q252 193 240 194 Q228 193 216 199 Q211 201 204 216Z"
          fill="#160C00"
        />
        <path d="M211 199 Q226 193 240 194 Q254 193 269 199" stroke="#221200" strokeWidth="1.5" fill="none" />

        {/* Eyes */}
        <ellipse cx="225" cy="221" rx="4.8" ry="5.2" fill="#160C00" />
        <ellipse cx="255" cy="221" rx="4.8" ry="5.2" fill="#160C00" />
        <circle  cx="226.8" cy="219.2" r="1.4" fill="white" opacity="0.85" />
        <circle  cx="256.8" cy="219.2" r="1.4" fill="white" opacity="0.85" />

        {/* Eyebrows */}
        <path d="M218 213 Q225 210 231 212" stroke="#160C00" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M249 212 Q255 210 262 213" stroke="#160C00" strokeWidth="2.2" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M238 225 Q235 234 238 237 Q240 239 242 237 Q245 234 242 225" stroke="#C4825A" strokeWidth="1.1" fill="none" />

        {/* Smile */}
        <path d="M229 243 Q240 251 251 243" stroke="#C4825A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Ears */}
        <ellipse cx="203" cy="223" rx="5.5" ry="7.5" fill="#D4956A" />
        <ellipse cx="277" cy="223" rx="5.5" ry="7.5" fill="#D4956A" />

        {/* ── Arms ── */}
        <path d="M162 287 Q142 302 126 332" stroke="#1E3A5F" strokeWidth="26" strokeLinecap="round" fill="none" />
        <ellipse cx="123" cy="336" rx="11" ry="8.5" fill="url(#skinGrad)" />
        <path d="M318 287 Q338 302 354 332" stroke="#1E3A5F" strokeWidth="26" strokeLinecap="round" fill="none" />
        <ellipse cx="357" cy="336" rx="11" ry="8.5" fill="url(#skinGrad)" />

        {/* ── Floating tech badges ── */}
        {/* React */}
        <g filter="url(#badge-glow)" className="float-1">
          <rect x="46" y="197" width="64" height="26" rx="13" fill="#0D2040" stroke="#6EE7F7" strokeWidth="1.5" strokeOpacity="0.65" />
          <circle cx="62" cy="210" r="6.5" fill="none" stroke="#6EE7F7" strokeWidth="1.5" />
          <circle cx="62" cy="210" r="2.2" fill="#6EE7F7" />
          <text x="74" y="214" fontFamily="monospace" fontSize="8.5" fontWeight="bold" fill="#6EE7F7">React</text>
        </g>

        {/* Next.js */}
        <g filter="url(#badge-glow)" className="float-2">
          <rect x="370" y="207" width="68" height="26" rx="13" fill="#0D2040" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.65" />
          <rect x="382" y="203" width="13" height="13" rx="3" fill="#A78BFA" />
          <text x="383" y="213" fontFamily="monospace" fontSize="7.5" fontWeight="bold" fill="white">N</text>
          <text x="400" y="214" fontFamily="monospace" fontSize="8.5" fill="#A78BFA">Next.js</text>
        </g>

        {/* TypeScript */}
        <g filter="url(#badge-glow)" className="float-3">
          <rect x="53" y="297" width="62" height="26" rx="13" fill="#0D2040" stroke="#FCD34D" strokeWidth="1.5" strokeOpacity="0.65" />
          <rect x="63" y="303" width="13" height="13" rx="2.5" fill="#3178C6" />
          <text x="64"  y="313" fontFamily="monospace" fontSize="7.5" fontWeight="bold" fill="white">TS</text>
          <text x="82"  y="314" fontFamily="monospace" fontSize="8.5" fill="#FCD34D">Type</text>
        </g>

        {/* Redux */}
        <g filter="url(#badge-glow)" className="float-4">
          <rect x="374" y="297" width="62" height="26" rx="13" fill="#0D2040" stroke="#34D399" strokeWidth="1.5" strokeOpacity="0.65" />
          <circle cx="390" cy="310" r="6" fill="none" stroke="#764ABC" strokeWidth="1.8" />
          <text x="401" y="314" fontFamily="monospace" fontSize="8" fill="#34D399">Redux</text>
        </g>

        {/* ── Decorative particles ── */}
        {(
          [
            [78, 152, "#6EE7F7", 2.4, "2s"],
            [388, 162, "#A78BFA", 2.0, "2.4s"],
            [58, 352, "#34D399", 2.2, "2.8s"],
            [402, 347, "#FCD34D", 2.4, "3.2s"],
            [158, 162, "#6EE7F7", 1.5, "3.6s"],
            [322, 157, "#A78BFA", 1.5, "2.2s"],
            [432, 242, "#6EE7F7", 2.0, "2.6s"],
            [48,  247, "#FCD34D", 1.8, "3.0s"],
          ] as [number, number, string, number, string][]
        ).map(([x, y, c, r, dur], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={c} opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.15;0.7" dur={dur} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── Hex border ── */}
        <polygon points="240,10 450,125 450,355 240,470 30,355 30,125" fill="none" stroke="url(#hexBorder)" strokeWidth="2" />
        <polygon points="240,24 436,133 436,347 240,456 44,347 44,133"  fill="none" stroke="#6EE7F7" strokeWidth="0.5" strokeOpacity="0.1" />
      </svg>
    </div>
  );
}
