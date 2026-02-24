export default function WashSaleTimeline() {
  return (
    <div
      className="not-prose"
      style={{
        margin: "2rem 0",
        padding: "1.5rem",
        background: "rgba(99,102,241,0.05)",
        borderRadius: "12px",
        border: "1px solid rgba(99,102,241,0.15)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "1rem", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#6366f1" }}>
        Wash-Sale Danger Zone
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
        <div style={{ padding: "0.5rem 1rem", background: "rgba(239,68,68,0.1)", borderRadius: "8px 0 0 8px", border: "1px solid rgba(239,68,68,0.3)", textAlign: "center", minWidth: "140px" }}>
          <div style={{ fontSize: "0.7rem", color: "#ef4444", fontWeight: 600 }}>NO BUY ZONE</div>
          <div style={{ fontSize: "0.85rem" }}>30 days before</div>
        </div>
        <div style={{ padding: "0.75rem 1.25rem", background: "rgba(245,158,11,0.15)", border: "2px solid #f59e0b", textAlign: "center", zIndex: 1, minWidth: "100px" }}>
          <div style={{ fontSize: "0.7rem", color: "#f59e0b", fontWeight: 700 }}>SELL DAY</div>
          <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>Loss realized</div>
        </div>
        <div style={{ padding: "0.5rem 1rem", background: "rgba(239,68,68,0.1)", borderRadius: "0 8px 8px 0", border: "1px solid rgba(239,68,68,0.3)", textAlign: "center", minWidth: "140px" }}>
          <div style={{ fontSize: "0.7rem", color: "#ef4444", fontWeight: 600 }}>NO BUY ZONE</div>
          <div style={{ fontSize: "0.85rem" }}>30 days after</div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", color: "#64748b" }}>
        Buying a &ldquo;substantially identical&rdquo; security in this 61-day window disallows the loss.
      </div>
    </div>
  );
}
