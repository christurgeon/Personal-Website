const steps = [
  {
    number: 1,
    title: "Contribute $7,000 to a Traditional IRA",
    description: "This contribution is non-deductible since your income exceeds the limit.",
    color: "#3b82f6",
  },
  {
    number: 2,
    title: "Convert the Traditional IRA to a Roth IRA",
    description:
      "Move the funds into your Roth account. Since you already paid taxes on the contribution, there's little to no tax owed on conversion.",
    color: "#8b5cf6",
  },
  {
    number: 3,
    title: "Report the conversion on Form 8606",
    description:
      "This tells the IRS the contribution was non-deductible, so you don't get taxed twice.",
    color: "#f59e0b",
  },
  {
    number: 4,
    title: "Enjoy tax-free growth forever",
    description:
      "Once in the Roth, your money grows and can be withdrawn in retirement completely tax-free.",
    color: "#10b981",
  },
];

export default function BackdoorRothSteps() {
  return (
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: "16px",
        padding: "2rem",
        margin: "2rem 0",
        color: "#e2e8f0",
        fontSize: "0.9rem",
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase" as const,
          letterSpacing: "0.05em",
          color: "#94a3b8",
          marginBottom: "1.25rem",
        }}
      >
        The Backdoor Roth Process
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              background: `rgba(148,163,184,0.06)`,
              borderLeft: `3px solid ${step.color}`,
              borderRadius: "0 10px 10px 0",
              padding: "0.875rem 1rem",
            }}
          >
            <div
              style={{
                background: step.color,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.75rem",
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "0.1rem",
              }}
            >
              {step.number}
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{step.title}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: 1.5 }}>
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
