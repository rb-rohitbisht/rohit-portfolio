"use client";

import FadeUp          from "@/components/ui/FadeUp";
import GlowOrb         from "@/components/ui/GlowOrb";
import DevIllustration from "@/components/ui/DevIllustration";
import { PERSONAL }    from "@/lib/constants";
import { useTypewriter } from "@/lib/hooks";

export default function Hero() {
  const typed = useTypewriter(PERSONAL.roles);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display:   "flex",
        alignItems:"center",
        padding:   "100px clamp(16px, 5vw, 80px) 60px",
        position:  "relative",
        overflow:  "hidden",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="grid-bg"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Ambient orbs */}
      <GlowOrb left="-5%"  top="20%"    size={500} opacity={0.06} />
      <GlowOrb right="-5%" bottom="5%"  size={420} color="var(--purple)" opacity={0.05} />

      <div
        style={{
          maxWidth:    1200,
          width:       "100%",
          margin:      "0 auto",
          display:     "flex",
          alignItems:  "center",
          gap:         "clamp(32px, 6vw, 80px)",
          flexWrap:    "wrap",
          position:    "relative",
        }}
      >
        {/* ── Left: text content ── */}
        <div style={{ flex: "1 1 340px", minWidth: 260 }}>

          {/* Status badge */}
          <FadeUp>
            <div
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:           8,
                padding:       "5px 16px",
                borderRadius:  "var(--radius-full)",
                marginBottom:  28,
                background:    "rgba(110,231,247,0.08)",
                border:        "1px solid rgba(110,231,247,0.28)",
                fontFamily:    "var(--font-body)",
                fontSize:      11,
                color:         "var(--accent)",
                fontWeight:    700,
                letterSpacing: "0.12em",
              }}
            >
              <span
                style={{
                  width:        6,
                  height:       6,
                  borderRadius: "50%",
                  background:   "var(--green)",
                  display:      "inline-block",
                  boxShadow:    "0 0 8px var(--green)",
                }}
              />
              OPEN TO SENIOR ROLES
            </div>
          </FadeUp>

          {/* Name */}
          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(44px, 7.5vw, 96px)",
                fontWeight:    700,
                lineHeight:    1.0,
                color:         "var(--white)",
                letterSpacing: "-0.035em",
                marginBottom:  8,
              }}
            >
              {PERSONAL.shortName}
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px var(--accent)",
                  color:            "transparent",
                  display:          "block",
                }}
              >
                {PERSONAL.lastName}
              </span>
            </h1>
          </FadeUp>

          {/* Typewriter */}
          <FadeUp delay={0.18}>
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "clamp(13px, 1.8vw, 19px)",
                color:         "var(--accent)",
                marginBottom:  24,
                minHeight:     "1.6em",
                letterSpacing: "0.02em",
              }}
            >
              {">"} {typed}
              <span className="cursor-blink" style={{ opacity: 0.85 }}>█</span>
            </p>
          </FadeUp>

          {/* Summary */}
          <FadeUp delay={0.24}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "clamp(14px, 1.5vw, 17px)",
                color:      "var(--muted)",
                lineHeight: 1.78,
                maxWidth:   500,
                marginBottom: 36,
              }}
            >
              {PERSONAL.summary}
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background:    "var(--accent)",
                  color:         "var(--bg)",
                  border:        "none",
                  borderRadius:  "var(--radius-sm)",
                  padding:       "13px 30px",
                  fontFamily:    "var(--font-body)",
                  fontSize:      14,
                  fontWeight:    700,
                  cursor:        "pointer",
                  boxShadow:     "0 0 28px rgba(110,231,247,0.4)",
                  transition:    "all var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 40px rgba(110,231,247,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 0 28px rgba(110,231,247,0.4)";
                }}
              >
                View My Work →
              </button>

              <a
                href={`mailto:${PERSONAL.email}`}
                style={{
                  color:         "var(--text)",
                  border:        "1px solid var(--border)",
                  borderRadius:  "var(--radius-sm)",
                  padding:       "13px 30px",
                  textDecoration:"none",
                  fontFamily:    "var(--font-body)",
                  fontSize:      14,
                  fontWeight:    600,
                  transition:    "all var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color       = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color       = "var(--text)";
                }}
              >
                Get In Touch
              </a>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.38}>
            <div
              style={{
                display:      "flex",
                gap:          36,
                marginTop:    52,
                paddingTop:   36,
                borderTop:    "1px solid var(--border)",
                flexWrap:     "wrap",
              }}
            >
              {PERSONAL.stats.map(({ num, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize:   36,
                      fontWeight: 700,
                      color:      "var(--white)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      11,
                      color:         "var(--muted)",
                      marginTop:     4,
                      letterSpacing: "0.07em",
                      fontWeight:    600,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ── Right: AI Developer Illustration ── */}
        <div
          style={{
            flex:           "1 1 320px",
            display:        "flex",
            justifyContent: "center",
            alignItems:     "center",
            minWidth:        260,
            maxWidth:        480,
          }}
        >
          <FadeUp delay={0.2} style={{ width: "100%" }}>
            <DevIllustration />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
