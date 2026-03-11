interface GlowOrbProps {
  color?: string;
  size?: number;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}

export default function GlowOrb({
  color   = "var(--accent)",
  size    = 500,
  left,
  top,
  right,
  bottom,
  opacity = 0.06,
}: GlowOrbProps) {
  return (
    <div
      aria-hidden
      style={{
        position:    "absolute",
        left,
        top,
        right,
        bottom,
        width:       size,
        height:      size,
        borderRadius:"50%",
        background:  `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}
