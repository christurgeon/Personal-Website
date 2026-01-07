"use client";

import { useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
}

export function TextReveal({ text, className = "", delay = 0, staggerMs = 35 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const characters = text.split("");

  return (
    <span className={className} aria-label={text}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${index * staggerMs}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
