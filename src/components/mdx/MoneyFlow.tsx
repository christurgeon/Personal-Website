export default function MoneyFlow() {
  return (
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: "16px",
        padding: "2rem",
        margin: "2rem 0",
        color: "#e2e8f0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94a3b8" }}>
        Monthly Money Flow — Automate Everything
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
        <div style={{ padding: "0.75rem 2rem", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "10px", fontWeight: 600, fontSize: "0.9rem", textAlign: "center" }}>
          Paycheck
        </div>
        <div style={{ color: "#64748b", fontSize: "1.25rem" }}>{"\u2193"}</div>
        <div style={{ padding: "0.75rem 2rem", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "10px", fontSize: "0.85rem", textAlign: "center" }}>
          <strong>401(k)</strong> — auto-deducted before it hits your bank
        </div>
        <div style={{ color: "#64748b", fontSize: "1.25rem" }}>{"\u2193"}</div>
        <div style={{ padding: "0.75rem 2rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "10px", fontSize: "0.85rem", textAlign: "center" }}>
          <strong>HSA</strong> — auto-deducted or auto-transferred
        </div>
        <div style={{ color: "#64748b", fontSize: "1.25rem" }}>{"\u2193"}</div>
        <div style={{ padding: "0.75rem 2rem", background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "10px", fontSize: "0.85rem", textAlign: "center" }}>
          <strong>Checking account</strong> — bills, rent, essentials
        </div>
        <div style={{ color: "#64748b", fontSize: "1.25rem" }}>{"\u2193"}</div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ padding: "0.75rem 1.25rem", background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: "10px", fontSize: "0.85rem", textAlign: "center" }}>
            <strong>Roth IRA</strong>
            <br />
            auto-transfer monthly
          </div>
          <div style={{ padding: "0.75rem 1.25rem", background: "rgba(236,72,153,0.15)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: "10px", fontSize: "0.85rem", textAlign: "center" }}>
            <strong>Brokerage</strong>
            <br />
            auto-invest remainder
          </div>
          <div style={{ padding: "0.75rem 1.25rem", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "10px", fontSize: "0.85rem", textAlign: "center" }}>
            <strong>Emergency Fund</strong>
            <br />
            HYSA, 3-6 months
          </div>
        </div>
      </div>
    </div>
  );
}
