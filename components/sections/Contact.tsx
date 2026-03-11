"use client";

import FadeUp    from "@/components/ui/FadeUp";
import GlowOrb   from "@/components/ui/GlowOrb";
import { PERSONAL } from "@/lib/constants";

interface ContactLink {
  label: string;
  value: string;
  href:  string;
  icon:  string;
}

const CONTACT_LINKS: ContactLink[] = [
  { label: "Email",    value: PERSONAL.email,      href: `mailto:${PERSONAL.email}`,  icon: "✉️" },
  { label: "Phone",    value: PERSONAL.phone,       href: `tel:${PERSONAL.phone}`,     icon: "📱" },
  { label: "LinkedIn", value: PERSONAL.linkedinId,  href: PERSONAL.linkedin,           icon: "💼" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding:    "110px clamp(16px, 5vw, 80px)",
        background: "var(--surface)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Centre glow */}
      <div
        aria-hidden
        style={{
          position:     "absolute",
          left:         "50%",
          top:          "50%",
          transform:    "translate(-50%, -50%)",
          width:        600,
          height:       600,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(110,231,247,0.05) 0%, transparent 70%)",
          pointerEvents:"none",
        }}
      />

      <div
        style={{
          maxWidth:  660,
          margin:    "0 auto",
          textAlign: "center",
          position:  "relative",
        }}
      >
        <FadeUp>
          {/* Sub-label */}
          <span
            style={{
              display:       "inline-block",
              padding:       "5px 16px",
              borderRadius:  "var(--radius-full)",
              marginBottom:  18,
              background:    "rgba(110,231,247,0.08)",
              border:        "1px solid rgba(110,231,247,0.28)",
              fontFamily:    "var(--font-body)",
              fontSize:      11,
              color:         "var(--accent)",
              fontWeight:    700,
              letterSpacing: "0.12em",
            }}
          >
            LET&apos;S CONNECT
          </span>

          {/* Heading */}
          <h2
            style={{
              fontFamily:    "var(--font-display)",
              fontSize:      "clamp(30px, 5vw, 56px)",
              fontWeight:    700,
              color:         "var(--white)",
              letterSpacing: "-0.03em",
              lineHeight:    1.1,
              marginBottom:  18,
            }}
          >
            Ready to Build
            <br />
            <span style={{ color: "var(--accent)" }}>Something Great?</span>
          </h2>

          <p
            style={{
              fontFamily:   "var(--font-body)",
              fontSize:     16,
              color:        "var(--muted)",
              lineHeight:   1.75,
              marginBottom: 40,
            }}
          >
            Open to senior frontend opportunities. Whether it&apos;s a product, a startup, or a
            conversation — let&apos;s connect.
          </p>

          {/* Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {CONTACT_LINKS.map((c, i) => (
              <FadeUp key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  style={{
                    display:       "flex",
                    alignItems:    "center",
                    gap:           16,
                    background:    "var(--card)",
                    border:        "1px solid var(--border)",
                    borderRadius:  "var(--radius-md)",
                    padding:       "18px 24px",
                    textDecoration:"none",
                    transition:    "all var(--transition-base)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(110,231,247,0.5)";
                    el.style.transform   = "translateX(8px)";
                    el.style.boxShadow   = "0 8px 30px rgba(110,231,247,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.transform   = "translateX(0)";
                    el.style.boxShadow   = "none";
                  }}
                >
                  <span style={{ fontSize: 22 }} role="img" aria-label={c.label}>
                    {c.icon}
                  </span>
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontSize:      10,
                        color:         "var(--muted)",
                        marginBottom:  1,
                        fontWeight:    700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize:   13,
                        color:      "var(--text)",
                      }}
                    >
                      {c.value}
                    </p>
                  </div>
                  <span style={{ marginLeft: "auto", color: "var(--accent)" }}>→</span>
                </a>
              </FadeUp>
            ))}
          </div>

          {/* CTA button */}
          <a
            href={`mailto:${PERSONAL.email}`}
            style={{
              display:       "inline-block",
              background:    "var(--accent)",
              color:         "var(--bg)",
              borderRadius:  "var(--radius-md)",
              padding:       "15px 38px",
              fontFamily:    "var(--font-body)",
              fontSize:      15,
              fontWeight:    800,
              textDecoration:"none",
              boxShadow:     "0 0 36px rgba(110,231,247,0.35)",
              transition:    "all var(--transition-base)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 14px 50px rgba(110,231,247,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 36px rgba(110,231,247,0.35)";
            }}
          >
            Send a Message ✉️
          </a>
        </FadeUp>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign:   "center",
          marginTop:   68,
          paddingTop:  26,
          borderTop:   "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize:   12,
            color:      "var(--muted)",
          }}
        >
          Designed &amp; Built by{" "}
          <span style={{ color: "var(--accent)" }}>{PERSONAL.name}</span>{" "}
          · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
