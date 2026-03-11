interface ChipProps {
  label: string;
  color?: string;
}

export default function Chip({ label, color = "var(--accent)" }: ChipProps) {
  return (
    <span
      style={{
        display:      "inline-block",
        padding:      "3px 11px",
        borderRadius: "var(--radius-full)",
        fontSize:     11,
        fontWeight:   700,
        letterSpacing:"0.06em",
        background:   `color-mix(in srgb, ${color} 12%, transparent)`,
        border:       `1px solid color-mix(in srgb, ${color} 35%, transparent)`,
        color,
        marginRight:  6,
        marginBottom: 6,
        fontFamily:   "var(--font-body)",
      }}
    >
      {label}
    </span>
  );
}
