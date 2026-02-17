export default function Hero() {
  return (
  <section
  style={{
    textAlign: "center",
    padding: "120px 20px 90px",
    position: "relative",
  }}
>
  {/* Soft background blob */}
  <div
    style={{
      position: "absolute",
      top: -80,
      left: "50%",
      transform: "translateX(-50%)",
      width: 500,
      height: 500,
      background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)",
      zIndex: -1,
      borderRadius: "50%",
    }}
  />

  <h1
    style={{
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      marginBottom: 10,
    }}
  >
    Previous Year
  </h1>

  <h2
    style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontSize: 56,
      fontWeight: 700,
      color: "#2563EB",
      marginBottom: 20,
    }}
  >
    Board Papers
  </h2>

  <p
    style={{
      fontSize: 18,
      color: "#64748B",
    }}
  >
    Class 10 & 12 · CBSE & ICSE
  </p>
</section>

  );
}
