interface SectionHeadProps {
  children: React.ReactNode;
}

export default function SectionHead({ children }: SectionHeadProps) {
  return (
    <div style={{ marginBottom: 52 }}>
      <h2
        style={{
          fontFamily:    "var(--font-display)",
          fontSize:      "clamp(30px, 4.5vw, 48px)",
          fontWeight:    700,
          color:         "var(--white)",
          letterSpacing: "-0.025em",
          lineHeight:    1.1,
        }}
      >
        {children}
        <span style={{ color: "var(--accent)" }}>.</span>
      </h2>

      <div
        style={{
          width:        40,
          height:       3,
          marginTop:    14,
          background:   "linear-gradient(90deg, var(--accent), var(--purple), transparent)",
          borderRadius: 2,
        }}
      />
    </div>
  );
}
