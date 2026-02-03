export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "32px 0",
      }}
    >
      {/* Soft logo mark */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 14,
          background: "#F3DCD4",
          color: "#9F5F4B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 18,
          marginRight: 14,
        }}
      >
        OG
      </div>

      {/* Wordmark */}
      <div>
        <div style={{ fontSize: 20, fontWeight: 700 }}>
          exam<span style={{ opacity: 0.55 }}>OG</span>
        </div>
        <div style={{ fontSize: 12, color: "#78716C" }}>
          calm board prep
        </div>
      </div>
    </div>
  );
}
