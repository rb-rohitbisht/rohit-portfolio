"use client";

import FadeUp      from "@/components/ui/FadeUp";
import SectionHead from "@/components/ui/SectionHead";
import Chip        from "@/components/ui/Chip";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "110px clamp(16px, 5vw, 80px)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp>
          <SectionHead>Experience</SectionHead>
        </FadeUp>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position:   "absolute",
              left:       20,
              top:        0,
              bottom:     0,
              width:      2,
              background: "linear-gradient(180deg, var(--accent), var(--border) 85%)",
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <FadeUp key={exp.company} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 36, marginBottom: 44, position: "relative" }}>

                {/* Timeline dot */}
                <div
                  style={{
                    width:        42,
                    height:       42,
                    borderRadius: "50%",
                    flexShrink:   0,
                    zIndex:       1,
                    background:   "var(--card)",
                    border:       `2px solid ${exp.color}`,
                    display:      "flex",
                    alignItems:   "center",
                    justifyContent: "center",
                    boxShadow:    `0 0 20px ${exp.color}30`,
                  }}
                >
                  <div
                    style={{ width: 10, height: 10, borderRadius: "50%", background: exp.color }}
                  />
                </div>

                {/* Card */}
                <div
                  style={{
                    flex:         1,
                    background:   "var(--card)",
                    border:       "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding:      "26px 28px",
                    transition:   "border-color var(--transition-base), box-shadow var(--transition-base)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${exp.color}55`;
                    e.currentTarget.style.boxShadow   = `0 8px 40px ${exp.color}0F`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize:   19,
                      fontWeight: 700,
                      color:      "var(--white)",
                      marginBottom: 3,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   14,
                      color:      exp.color,
                      fontWeight: 700,
                      marginBottom: 2,
                    }}
                  >
                    {exp.company}
                  </p>
                  <p
                    style={{
                      fontFamily:   "var(--font-body)",
                      fontSize:     12,
                      color:        "var(--muted)",
                      marginBottom: 16,
                    }}
                  >
                    {exp.location}
                  </p>

                  <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          fontFamily:   "var(--font-body)",
                          fontSize:     14,
                          color:        "var(--muted)",
                          lineHeight:   1.75,
                          marginBottom: 4,
                        }}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div>
                    {exp.tech.map((t) => (
                      <Chip key={t} label={t} color={exp.color} />
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
