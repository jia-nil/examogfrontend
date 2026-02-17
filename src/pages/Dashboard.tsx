import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f9fafb 0%, #eef2ff 100%)",
      }}
    >
      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 58,
            fontWeight: 800,
            marginBottom: 16,
            background:
              "linear-gradient(90deg, #2563EB, #4F46E5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Class 10 CBSE
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#6B7280",
            letterSpacing: "0.3px",
          }}
        >
          Previous Year Question Papers
        </p>
      </section>

      {/* Main Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px 100px",
        }}
      >
        {/* Year Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 18,
            marginBottom: 70,
          }}
        >
          {years.map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: "14px 0",
                borderRadius: 14,
                textAlign: "center",
                cursor: "pointer",
                fontWeight: 600,
                backdropFilter: "blur(6px)",
                background:
                  selectedYear === year
                    ? "linear-gradient(90deg, #2563EB, #4F46E5)"
                    : "rgba(255,255,255,0.7)",
                color:
                  selectedYear === year
                    ? "#FFFFFF"
                    : "#111827",
                border:
                  selectedYear === year
                    ? "none"
                    : "1px solid rgba(0,0,0,0.05)",
                boxShadow:
                  selectedYear === year
                    ? "0 8px 20px rgba(79,70,229,0.3)"
                    : "0 4px 10px rgba(0,0,0,0.03)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (selectedYear !== year) {
                  e.currentTarget.style.transform =
                    "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 18px rgba(0,0,0,0.06)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedYear !== year) {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.03)";
                }
              }}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Subject Cards */}
        {selectedYear && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 28,
            }}
          >
            {subjects.map((subj) => (
              <div
                key={subj}
                style={{
                  padding: 36,
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 30px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.04)";
                }}
              >
                <h3
                  style={{
                    marginBottom: 10,
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {subj}
                </h3>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  View Question & Answer PDFs
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
