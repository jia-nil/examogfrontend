import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      
      {/* Neon Glow Background */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "140px 20px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: 70,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            marginBottom: 10,
          }}
        >
          Class 10
        </h1>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 56,
            fontWeight: 700,
            color: "#22D3EE",
            marginBottom: 16,
            textShadow: "0 0 30px rgba(34,211,238,0.4)",
          }}
        >
          CBSE Board Papers
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "#94A3B8",
          }}
        >
          Previous Year Question Papers
        </p>
      </section>

      {/* Main Container */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 60,
          background: "#151933",
          borderRadius: 36,
          boxShadow:
            "0 0 80px rgba(34,211,238,0.08)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Year Grid */}
        <div style={{ marginBottom: 70 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 16,
            }}
          >
            {years.map((year) => (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  padding: "12px 0",
                  borderRadius: 16,
                  textAlign: "center",
                  cursor: "pointer",
                  background:
                    selectedYear === year
                      ? "#22D3EE"
                      : "#1C2145",
                  color:
                    selectedYear === year
                      ? "#0F1222"
                      : "#F1F5FF",
                  fontWeight: 500,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (selectedYear !== year) {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(34,211,238,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        {/* Subject Cards */}
        {selectedYear && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 30,
            }}
          >
            {subjects.map((subj) => (
              <div
                key={subj}
                style={{
                  padding: 40,
                  borderRadius: 28,
                  background: "#1C2145",
                  boxShadow:
                    "0 0 40px rgba(34,211,238,0.05)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(34,211,238,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(34,211,238,0.05)";
                }}
              >
                <h3 style={{ marginBottom: 8 }}>{subj}</h3>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: 14,
                  }}
                >
                  Question & Answer PDFs
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
