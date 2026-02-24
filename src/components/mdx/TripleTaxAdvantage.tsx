const advantages = [
  { emoji: "\u{1F4E5}", label: "Tax-deductible\ncontributions", color: "#3b82f6" },
  { emoji: "\u{1F4C8}", label: "Tax-free\ngrowth", color: "#8b5cf6" },
  { emoji: "\u{1F4E4}", label: "Tax-free\nwithdrawals*", color: "#10b981" },
];

export default function TripleTaxAdvantage() {
  return (
    <>
      <div
        className="not-prose"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          margin: "2rem 0",
          flexWrap: "wrap",
        }}
      >
        {advantages.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "1.25rem 1.5rem",
              borderRadius: "12px",
              border: `2px solid ${item.color}`,
              background: `${item.color}10`,
              minWidth: "160px",
            }}
          >
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.emoji}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, whiteSpace: "pre-line" }}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="not-prose" style={{ textAlign: "center", fontSize: "0.8rem", color: "#64748b", marginTop: "-1rem", marginBottom: "1.5rem" }}>
        *For qualified medical expenses. After age 65, non-medical withdrawals are taxed as ordinary income (like a Traditional IRA) but with no penalty.
      </div>
    </>
  );
}
