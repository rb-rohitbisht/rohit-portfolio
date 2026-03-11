// ─── Design Tokens ───────────────────────────────────────────────────────────
export const PALETTE = {
  bg:      "#060810",
  surface: "#0C1018",
  card:    "#101520",
  border:  "#1A2333",
  accent:  "#6EE7F7",
  purple:  "#A78BFA",
  gold:    "#FCD34D",
  green:   "#34D399",
  orange:  "#FB923C",
  red:     "#F43F5E",
  text:    "#E2EAF4",
  muted:   "#5A7A94",
  white:   "#FFFFFF",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"] as const;

// ─── Personal Info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:       "Rohit Bisht",
  shortName:  "Rohit",
  lastName:   "Bisht",
  title:      "Frontend Developer",
  email:      "rohit.bisht757929@gmail.com",
  phone:      "+91-9650176645",
  linkedin:   "https://linkedin.com/in/rohit-bisht-010580181",
  linkedinId: "rohit-bisht-010580181",
  summary:
    "3+ years architecting performant, scalable web applications. Expert in React, Next.js & TypeScript — shipping products users love and code teams respect.",
  roles: [
    "Frontend Developer",
    "React Specialist",
    "Next.js Expert",
    "UI Architect",
  ],
  stats: [
    { num: "3+", label: "Years Exp" },
    { num: "10+", label: "Projects" },
    { num: "5+", label: "Tech Stacks" },
  ],
} as const;

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  role:     string;
  company:  string;
  location: string;
  color:    string;
  points:   string[];
  tech:     string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role:     "Frontend Developer",
    company:  "Bytesview Analytics Pvt. Ltd",
    location: "Noida",
    color:    PALETTE.accent,
    points: [
      "Spearheaded NewsData.io — comprehensive news aggregation platform using React.js & MUI",
      "Implemented Google OAuth 2.0 with refresh token handling for seamless authentication",
      "Integrated Axios interceptors for automated token renewal and reliability",
      "Employed Redux for scalable state management across the application",
      "Conducted code reviews and mentored junior developers",
    ],
    tech: ["React.js", "MUI", "Redux", "OAuth 2.0", "Axios", "Stripe"],
  },
  {
    role:     "React JS Developer",
    company:  "PsiBorg Technologies Pvt. Ltd",
    location: "Noida",
    color:    PALETTE.purple,
    points: [
      "Built high-performance web applications with React.js and Next.js",
      "Designed responsive UI components in cross-functional collaboration",
      "Engineered scalable modular components within a microservices architecture",
      "Implemented two-factor authentication for enhanced security",
      "Integrated RESTful APIs for seamless data retrieval and manipulation",
    ],
    tech: ["Next.js", "React.js", "Redux", "REST APIs", "2FA", "Microservices"],
  },
  {
    role:     "Software Developer",
    company:  "BytesBrick InfoSystems Pvt. Ltd",
    location: "Noida (Remote)",
    color:    PALETTE.gold,
    points: [
      "Developed pixel-perfect responsive web applications across all devices",
      "Wrote clean, reusable code adhering to industry best practices",
      "Leveraged Next.js SSR for optimised performance and enhanced SEO",
      "Designed React.js components focused on performance and reusability",
    ],
    tech: ["React.js", "Next.js", "SSR", "SCSS", "Git"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface ProjectItem {
  name:  string;
  icon:  string;
  badge: string;
  color: string;
  desc:  string;
  tech:  string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    name:  "NewsData.io",
    icon:  "📰",
    badge: "Featured",
    color: PALETTE.accent,
    desc:  "Comprehensive news aggregation platform with real-time global feeds, Google OAuth, Stripe payments, and a responsive React UI serving thousands of users.",
    tech:  ["React.js", "MUI", "OAuth 2.0", "Stripe", "Redux"],
  },
  {
    name:  "PostMyAd",
    icon:  "📢",
    badge: "AdTech",
    color: PALETTE.purple,
    desc:  "Full advertising platform with user, order, campaign, device & billboard management. Includes analytics, chatbot integration and promo codes.",
    tech:  ["React.js", "Next.js", "Redux", "REST APIs"],
  },
  {
    name:  "Trulynk Rakshak",
    icon:  "🛡️",
    badge: "Safety",
    color: PALETTE.green,
    desc:  "Admin panel with microservice-based role access. Live tracking, heart rate & SPO2 monitoring, geofencing, device management and MIS reports.",
    tech:  ["Next.js", "Microservices", "Socket.io", "Google Maps"],
  },
  {
    name:  "Cattle Tracking System",
    icon:  "🐄",
    badge: "AgriTech",
    color: PALETTE.orange,
    desc:  "IoT livestock monitoring with real-time geofencing, vaccination alerts, milk yield tracking and heat period detection.",
    tech:  ["React.js", "Google Maps", "Real-time", "IoT"],
  },
  {
    name:  "Showroom B2B",
    icon:  "🏪",
    badge: "B2B",
    color: PALETTE.red,
    desc:  "B2B marketplace with analytics, order tracking, payment gateway, and 2FA across admin / sub-admin / super-admin roles.",
    tech:  ["Next.js", "2FA", "Microservices", "Payment GW"],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillGroup {
  title: string;
  icon:  string;
  color: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon:  "{ }",
    color: PALETTE.accent,
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    title: "Frameworks",
    icon:  "⚛",
    color: PALETTE.purple,
    items: ["React.js", "Next.js", "Redux", "TanStack Query", "Bootstrap", "MUI"],
  },
  {
    title: "Tools",
    icon:  "⚙",
    color: PALETTE.green,
    items: ["Git", "Docker", "Socket.io", "Pub-Nub", "Jira", "Slack"],
  },
  {
    title: "APIs & Arch",
    icon:  "🏗",
    color: PALETTE.gold,
    items: ["Microservices", "REST APIs", "Google Maps API", "Google OAuth", "2FA", "Stripe"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export interface EducationItem {
  degree: string;
  school: string;
}

export const EDUCATION: EducationItem[] = [
  { degree: "MCA",             school: "G.L. Bajaj Institute of Technology & Management" },
  { degree: "BCA",             school: "Kumaun University, Nainital" },
  { degree: "Class 12th CBSE", school: "Sharda Public School, Almora" },
];
