"use client";

import { useEffect, useRef, useState } from "react";

/** Returns true once the referenced element enters the viewport */
export function useIntersection(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/** Tracks which section is currently in view */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** Detects scroll position passing a threshold */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

/** Animated typewriter that cycles through an array of strings */
export function useTypewriter(words: readonly string[], speed = 75, pause = 2200) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    let charIdx = 0;
    setText("");
    const word = words[wordIdx];
    const interval = setInterval(() => {
      setText(word.slice(0, ++charIdx));
      if (charIdx >= word.length) {
        clearInterval(interval);
        setTimeout(() => setWordIdx((i) => (i + 1) % words.length), pause);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [wordIdx, words, speed, pause]);

  return text;
}
