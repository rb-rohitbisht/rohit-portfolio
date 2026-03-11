# Rohit Bisht — Portfolio

A production-ready Next.js 15 portfolio built with TypeScript, App Router, and a custom dark design system.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Variables + Inline styles (zero external CSS libs)
- **Fonts**: Clash Display · Cabinet Grotesk · JetBrains Mono (via Fontshare)
- **Animations**: CSS keyframes + IntersectionObserver

---

## Project Structure

```
rohit-portfolio/
├── app/
│   ├── globals.css          # CSS variables, keyframes, utility classes
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Home page (assembles all sections)
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx       # Fixed nav with active-section tracking
│   ├── sections/
│   │   ├── Hero.tsx         # Landing section with typewriter + illustration
│   │   ├── Experience.tsx   # Timeline of work experience
│   │   ├── Projects.tsx     # Project card grid
│   │   ├── Skills.tsx       # Skill groups + education
│   │   └── Contact.tsx      # Contact links + CTA
│   └── ui/
│       ├── FadeUp.tsx        # Scroll-triggered fade-up animation
│       ├── Chip.tsx          # Tech tag badge
│       ├── SectionHead.tsx   # Section title with gradient underline
│       ├── GlowOrb.tsx       # Decorative radial glow
│       └── DevIllustration.tsx  # AI-style SVG developer portrait
│
├── lib/
│   ├── constants.ts         # ALL portfolio data (edit this to update content)
│   └── hooks.ts             # useIntersection, useActiveSection, useScrolled, useTypewriter
│
├── public/                  # Static assets
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Customising Content

All personal data lives in **`lib/constants.ts`** — edit that single file to update:

- Personal info, email, phone, LinkedIn
- Work experience entries
- Project descriptions and tech stacks
- Skill groups
- Education

---

## Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy instantly on **Vercel** by connecting your GitHub repo — zero config needed for Next.js.
