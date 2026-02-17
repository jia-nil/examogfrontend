type NavbarProps = {
  onToggleSidebar: () => void;
};

export default function Navbar({ onToggleSidebar }: NavbarProps) {
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
        padding: "0 20px",
        zIndex: 1100,
        gap: 16,
      }}
    >
      <button
        onClick={onToggleSidebar}
        style={{
          background: "transparent",
          border: "none",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      <div
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "#111827",
        }}
      >
        Examog
      </div>
    </div>
  );
}
