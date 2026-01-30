export default function Hero() {
return (
  <div
    style={{
      position: "relative", // 🔥 IMPORTANT
      overflow: "hidden",   // 🔥 IMPORTANT
      background: "linear-gradient(135deg, #2563EB, #38BDF8)",
      color: "#FFFFFF",
      padding: "80px 24px",
      borderRadius: 16,
      textAlign: "center",
    }}
  >
    <h1 style={{ fontSize: 36, marginBottom: 16 }}>
      Ace Your Board Exams ✨
    </h1>

    <p style={{ fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
      Practice previous year papers, get AI-powered feedback,
      and learn exactly how to improve.
    </p>

    {/* 🌕 Floating yellow glow */}
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 60,
        width: 120,
        height: 120,
        background: "rgba(253, 224, 71, 0.45)",
        borderRadius: "50%",
        filter: "blur(40px)",
        animation: "float 8s ease-in-out infinite",
        pointerEvents: "none", // 👌 prevents interference
      }}
    />

    {/* 🔵 Optional blue glow (adds depth) */}
    <div
      style={{
        position: "absolute",
        bottom: 30,
        right: 80,
        width: 160,
        height: 160,
        background: "rgba(56, 189, 248, 0.35)",
        borderRadius: "50%",
        filter: "blur(50px)",
        animation: "float 10s ease-in-out infinite reverse",
        pointerEvents: "none",
      }}
    />
  </div>
);
}
