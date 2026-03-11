"use client";

import FadeUp      from "@/components/ui/FadeUp";
import SectionHead from "@/components/ui/SectionHead";
import GlowOrb     from "@/components/ui/GlowOrb";
import Chip        from "@/components/ui/Chip";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding:  "110px clamp(16px, 5vw, 80px)",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowOrb right="-5%" top="10%" size={500} opacity={0.07} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <FadeUp>
          <SectionHead>Projects</SectionHead>
        </FadeUp>

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 330px), 1fr))",
            gap:                 22,
          }}
        >
          {PROJECTS.map((proj, i) => (
            <FadeUp key={proj.name} delay={i * 0.08}>
              <article
                style={{
                  background:    "var(--card)",
                  borderRadius:  "var(--radius-lg)",
                  border:        "1px solid var(--border)",
                  padding:       "26px",
                  height:        "100%",
                  display:       "flex",
                  flexDirection: "column",
                  position:      "relative",
                  overflow:      "hidden",
                  transition:    "transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base)",
                  cursor:        "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform   = "translateY(-6px)";
                  el.style.borderColor = `${proj.color}45`;
                  el.style.boxShadow   = `0 20px 60px ${proj.color}12`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform   = "translateY(0)";
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow   = "none";
                }}
              >
                {/* Top colour bar */}
                <div
                  aria-hidden
                  style={{
                    position:   "absolute",
                    top:        0,
                    left:       0,
                    right:      0,
                    height:     2,
                    background: `linear-gradient(90deg, ${proj.color}, transparent)`,
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    alignItems:     "flex-start",
                    marginBottom:   16,
                  }}
                >
                  <span style={{ fontSize: 34 }} role="img" aria-label={proj.name}>
                    {proj.icon}
                  </span>
                  <span
                    style={{
                      background:    `${proj.color}15`,
                      color:         proj.color,
                      border:        `1px solid ${proj.color}30`,
                      borderRadius:  "var(--radius-full)",
                      padding:       "3px 12px",
                      fontSize:      10,
                      fontWeight:    700,
                      fontFamily:    "var(--font-body)",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {proj.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily:   "var(--font-display)",
                    fontSize:     19,
                    fontWeight:   700,
                    color:        "var(--white)",
                    marginBottom: 10,
                  }}
                >
                  {proj.name}
                </h3>

                <p
                  style={{
                    fontFamily:   "var(--font-body)",
                    fontSize:     13,
                    color:        "var(--muted)",
                    lineHeight:   1.75,
                    flex:         1,
                    marginBottom: 18,
                  }}
                >
                  {proj.desc}
                </p>

                <div>
                  {proj.tech.map((t) => (
                    <Chip key={t} label={t} color={proj.color} />
                  ))}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
