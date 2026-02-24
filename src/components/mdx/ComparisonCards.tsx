interface CardSide {
  title: string;
  subtitle: string;
  color: string;
  items: string[];
}

const variants: Record<string, { left: CardSide; right: CardSide }> = {
  retirement: {
    left: {
      title: "Traditional 401(k)",
      subtitle: "Pay taxes later",
      color: "#3b82f6",
      items: [
        "Contributions reduce taxable income <strong>now</strong>",
        "Grows tax-deferred",
        "Taxed as ordinary income on withdrawal",
        "Better if your tax rate is <strong>higher now</strong> than in retirement",
      ],
    },
    right: {
      title: "Roth 401(k)",
      subtitle: "Pay taxes now",
      color: "#10b981",
      items: [
        "Contributions are <strong>after-tax</strong>",
        "Grows tax-free",
        "Withdrawals in retirement are <strong>completely tax-free</strong>",
        "Better if your tax rate is <strong>lower now</strong> than in retirement",
      ],
    },
  },
  "asset-location": {
    left: {
      title: "Tax-Advantaged Accounts",
      subtitle: "Hold tax-inefficient assets here",
      color: "#ef4444",
      items: [
        "Bonds, REITs, actively managed funds, high-dividend stocks — anything that generates income taxed at ordinary rates.",
      ],
    },
    right: {
      title: "Taxable Brokerage",
      subtitle: "Hold tax-efficient assets here",
      color: "#10b981",
      items: [
        "Broad index funds, long-term holdings, growth stocks — things with low turnover that benefit from long-term capital gains rates.",
      ],
    },
  },
};

function CardColumn({ side }: { side: CardSide }) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${side.color}14, ${side.color}05)`,
        border: `1px solid ${side.color}33`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: side.color, fontWeight: 600, marginBottom: "0.5rem" }}>
        {side.title}
      </div>
      <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{side.subtitle}</div>
      <ul style={{ fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.2rem", margin: 0 }}>
        {side.items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  );
}

export default function ComparisonCards({ variant }: { variant: string }) {
  const data = variants[variant];
  if (!data) return null;
  return (
    <div
      className="not-prose"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        margin: "1.5rem 0",
      }}
    >
      <CardColumn side={data.left} />
      <CardColumn side={data.right} />
    </div>
  );
}
