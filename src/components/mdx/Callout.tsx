import type { ReactNode } from "react";

const styles: Record<string, { color: string; bg: string; border: string }> = {
  warning: { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.3)" },
  info: { color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.3)" },
};

interface CalloutProps {
  type?: "warning" | "info";
  title: string;
  children: ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const s = styles[type];
  return (
    <div
      className="not-prose"
      style={{
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderLeft: `4px solid ${s.color}`,
        borderRadius: "0 8px 8px 0",
        padding: "1rem 1.25rem",
        margin: "1.5rem 0",
        fontSize: "0.9rem",
      }}
    >
      <strong style={{ color: s.color }}>{title}</strong>
      <div style={{ margin: "0.5rem 0 0 0" }}>{children}</div>
    </div>
  );
}
