export default function Navbar() {
  return (
    <div
      style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        fontWeight: 900,
        fontSize: 24,
        color: "#1e3a8a",
      }}
    >
      <span style={{ color: "#fde047" }}>exam</span>
      <span style={{ color: "#2563eb" }}>OG</span>
      <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 500 }}>
        grind smart. score hard.
      </span>
    </div>
  );
}
