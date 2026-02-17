export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 64,
        background: "#F6F7FB",
        borderBottom: "1px solid #E5E7EB",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "-0.2px",
          color: "#111827",
        }}
      >
        Examog
      </div>
    </div>
  );
}
