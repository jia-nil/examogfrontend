export default function Hero() {
  return (
    <section
      style={{
        padding: "120px 48px 80px",
        borderBottom: "1px solid #2A2F36",
      }}
    >
      {/* Headline */}
      <h1
        style={{
          fontSize: "64px",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          fontWeight: 700,
          marginBottom: "24px",
          maxWidth: "900px",
        }}
      >
        board prep,
        <br />
        <span style={{ color: "#7C5CFF" }}>redesigned.</span>
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: "20px",
          color: "#9CA3AF",
          maxWidth: "520px",
          lineHeight: 1.6,
          marginBottom: "48px",
        }}
      >
        Previous year papers. Clean answer PDFs.
        No distractions. No clutter.
        Just structured, focused preparation.
      </p>

      {/* Subtle Call to Action */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          style={{
            padding: "14px 28px",
            borderRadius: "999px",
            background: "#7C5CFF",
            border: "none",
            color: "white",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          explore papers
        </button>

        <span style={{ color: "#6B7280", fontSize: "14px" }}>
          class 10 & 12 • CBSE & ICSE
        </span>
      </div>
    </section>
  );
}
