export default function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 20,
        margin: "20px auto",
        width: "92%",
        maxWidth: 1200,
        backdropFilter: "blur(14px)",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: 30,
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
        zIndex: 999,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: 28,
          fontFamily: "Parisienne, cursive",
          letterSpacing: "1px",
          color: "#1F2937",
        }}
      >
        exam
        <span
          style={{
            color: "#8B5CF6",
            marginLeft: 4,
          }}
        >
          OG
        </span>
      </div>

      {/* Right Side (empty for now but aesthetic spacing) */}
      <div
        style={{
          fontSize: 14,
          color: "#6B7280",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        
      </div>
    </div>
  );
}
