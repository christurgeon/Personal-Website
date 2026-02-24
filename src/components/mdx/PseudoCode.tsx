export default function PseudoCode() {
  return (
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: "16px",
        padding: "2rem",
        margin: "2rem 0",
        fontFamily: "monospace",
        color: "#e2e8f0",
        fontSize: "0.85rem",
        lineHeight: 1.8,
      }}
    >
      <div style={{ color: "#94a3b8", marginBottom: "0.25rem" }}>{"// tax_loss_harvesting.pseudo"}</div>
      <div>
        <span style={{ color: "#c084fc" }}>fn</span> <span style={{ color: "#60a5fa" }}>end_of_year_review</span>(portfolio) {"{"}
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#c084fc" }}>let</span> losses = portfolio.<span style={{ color: "#60a5fa" }}>filter</span>(|p| p.unrealized_gain {"<"} 0);
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#c084fc" }}>let</span> gains = portfolio.<span style={{ color: "#60a5fa" }}>filter</span>(|p| p.unrealized_gain {">"} 0);
      </div>
      <div style={{ paddingLeft: "1.5rem", color: "#6b7280" }}></div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#6b7280" }}>{"// Offset gains first, then deduct up to $3K from income"}</span>
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#c084fc" }}>let</span> net = gains.total() + losses.total();
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#c084fc" }}>let</span> deduction = <span style={{ color: "#60a5fa" }}>min</span>(net.<span style={{ color: "#60a5fa" }}>abs</span>(), <span style={{ color: "#f59e0b" }}>3000</span>);
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#c084fc" }}>let</span> carryforward = net.<span style={{ color: "#60a5fa" }}>abs</span>() - deduction;
      </div>
      <div style={{ paddingLeft: "1.5rem", color: "#6b7280" }}></div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#60a5fa" }}>sell</span>(losses); <span style={{ color: "#6b7280" }}>{"// realize the losses"}</span>
      </div>
      <div style={{ paddingLeft: "1.5rem" }}>
        <span style={{ color: "#60a5fa" }}>buy_similar_not_identical</span>(losses); <span style={{ color: "#6b7280" }}>{"// stay invested"}</span>
      </div>
      <div>{"}"}</div>
    </div>
  );
}
