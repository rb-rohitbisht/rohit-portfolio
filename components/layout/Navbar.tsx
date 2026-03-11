"use client";

import { useState } from "react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { useScrolled, useActiveSection } from "@/lib/hooks";

export default function Navbar() {
  const scrolled = useScrolled(50);
  const active   = useActiveSection(NAV_LINKS.map((l) => l.toLowerCase()));
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position:     "fixed",
          top:          0,
          left:         0,
          right:        0,
          zIndex:       200,
          height:       68,
          padding:      "0 clamp(16px, 5vw, 56px)",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "space-between",
          background:   scrolled ? "rgba(6,8,16,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition:   "all 0.35s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    700,
            fontSize:      24,
            color:         "var(--white)",
            letterSpacing: "-0.04em",
          }}
        >
          rb<span style={{ color: "var(--accent)" }}>_</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <button
                key={link}
                onClick={() => scrollTo(id)}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  fontFamily:    "var(--font-body)",
                  fontSize:      14,
                  fontWeight:    600,
                  color:         isActive ? "var(--accent)" : "var(--muted)",
                  padding:       "8px 14px",
                  borderRadius:  "var(--radius-sm)",
                  transition:    "color var(--transition-fast)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = isActive ? "var(--accent)" : "var(--muted)")
                }
              >
                {link}
              </button>
            );
          })}

          <a
            href={`mailto:${PERSONAL.email}`}
            style={{
              marginLeft:    10,
              padding:       "9px 22px",
              borderRadius:  "var(--radius-sm)",
              background:    "var(--accent)",
              color:         "var(--bg)",
              textDecoration:"none",
              fontFamily:    "var(--font-body)",
              fontSize:      13,
              fontWeight:    700,
              letterSpacing: "0.03em",
              transition:    "opacity var(--transition-fast)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background:     "none",
            border:         "none",
            cursor:         "pointer",
            display:        "none",
            flexDirection:  "column",
            gap:            5,
            padding:        4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 2 }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position:    "fixed",
            top:         68,
            left:        0,
            right:       0,
            zIndex:      199,
            background:  "var(--surface)",
            borderBottom:"1px solid var(--border)",
            padding:     "12px 20px",
            display:     "flex",
            flexDirection:"column",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                background:   "none",
                border:       "none",
                cursor:       "pointer",
                fontFamily:   "var(--font-body)",
                fontSize:     15,
                fontWeight:   600,
                color:        "var(--text)",
                padding:      "12px 4px",
                textAlign:    "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
