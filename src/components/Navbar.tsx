export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 48px",
        borderBottom: "1px solid #2A2F36",
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 700 }}>
        exam<span style={{ color: "#7C5CFF" }}>OG</span>
      </div>

      <div style={{ color: "#9CA3AF", fontSize: 14 }}>
        calm board prep
      </div>
    </div>
  );
}
