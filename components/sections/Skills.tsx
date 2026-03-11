"use client";

import FadeUp         from "@/components/ui/FadeUp";
import SectionHead    from "@/components/ui/SectionHead";
import { SKILL_GROUPS, EDUCATION } from "@/lib/constants";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "110px clamp(16px, 5vw, 80px)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp>
          <SectionHead>Skills</SectionHead>
        </FadeUp>

        {/* Skill groups grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 255px), 1fr))",
            gap:                 20,
            marginBottom:        56,
          }}
        >
          {SKILL_GROUPS.map((group, i) => (
            <FadeUp key={group.title} delay={i * 0.09}>
              <div
                style={{
                  background:   "var(--card)",
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding:      "26px",
                  transition:   "border-color var(--transition-base), box-shadow var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${group.color}45`;
                  e.currentTarget.style.boxShadow   = `0 8px 40px ${group.color}0D`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              >
                {/* Group header */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <div
                    style={{
                      width:          42,
                      height:         42,
                      borderRadius:   "var(--radius-sm)",
                      background:     `${group.color}15`,
                      border:         `1px solid ${group.color}30`,
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                      fontSize:       18,
                      color:          group.color,
                    }}
                  >
                    {group.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize:   16,
                      fontWeight: 700,
                      color:      "var(--white)",
                    }}
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div>
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        display:       "inline-block",
                        padding:       "4px 10px",
                        borderRadius:  "var(--radius-sm)",
                        fontSize:      11,
                        fontWeight:    500,
                        background:    "rgba(255,255,255,0.04)",
                        border:        "1px solid rgba(255,255,255,0.08)",
                        color:         "var(--text)",
                        marginRight:   5,
                        marginBottom:  6,
                        fontFamily:    "var(--font-mono)",
                        transition:    "all var(--transition-fast)",
                        cursor:        "default",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.target as HTMLElement;
                        el.style.background   = `${group.color}18`;
                        el.style.borderColor  = `${group.color}45`;
                        el.style.color        = group.color;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.target as HTMLElement;
                        el.style.background   = "rgba(255,255,255,0.04)";
                        el.style.borderColor  = "rgba(255,255,255,0.08)";
                        el.style.color        = "var(--text)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Education */}
        <FadeUp delay={0.2}>
          <h3
            style={{
              fontFamily:   "var(--font-display)",
              fontSize:     24,
              fontWeight:   700,
              color:        "var(--white)",
              marginBottom: 22,
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                style={{
                  flex:         "1 1 260px",
                  background:   "var(--card)",
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding:      "22px",
                  display:      "flex",
                  gap:          14,
                  alignItems:   "flex-start",
                }}
              >
                <span style={{ fontSize: 24 }} role="img" aria-label="graduation cap">🎓</span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize:   16,
                      fontWeight: 700,
                      color:      "var(--white)",
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   12,
                      color:      "var(--muted)",
                      marginTop:  4,
                      lineHeight: 1.5,
                    }}
                  >
                    {edu.school}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
