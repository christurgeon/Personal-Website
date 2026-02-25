const advantages = [
  { emoji: "\u{1F4E5}", label: "Tax-deductible\ncontributions", color: "#3b82f6" },
  { emoji: "\u{1F4C8}", label: "Tax-free\ngrowth", color: "#8b5cf6" },
  { emoji: "\u{1F4E4}", label: "Tax-free\nwithdrawals*", color: "#10b981" },
];

export default function TripleTaxAdvantage() {
  return (
    <>
      <div className="not-prose flex flex-col sm:flex-row justify-center items-stretch gap-3 my-8">
        {advantages.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center px-5 py-4 rounded-xl min-w-0 sm:min-w-[160px]"
            style={{
              border: `2px solid ${item.color}`,
              background: `${item.color}10`,
            }}
          >
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.emoji}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, whiteSpace: "pre-line" }}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="not-prose text-center text-xs text-slate-500 -mt-4 mb-6">
        *For qualified medical expenses. After age 65, non-medical withdrawals are taxed as ordinary income (like a Traditional IRA) but with no penalty.
      </div>
    </>
  );
}
