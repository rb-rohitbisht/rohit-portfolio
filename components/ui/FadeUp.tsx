"use client";

import { CSSProperties } from "react";
import { useIntersection } from "@/lib/hooks";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

export default function FadeUp({ children, delay = 0, style = {}, className }: FadeUpProps) {
  const { ref, visible } = useIntersection();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
