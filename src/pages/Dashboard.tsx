import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 60px",
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          Class 10 CBSE
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#6B7280",
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
            gap: 16,
            marginBottom: 60,
          }}
        >
          {years.map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: "12px 0",
                borderRadius: 12,
                textAlign: "center",
                cursor: "pointer",
                background:
                  selectedYear === year
                    ? "#2563EB"
                    : "#FFFFFF",
                color:
                  selectedYear === year
                    ? "#FFFFFF"
                    : "#111827",
                border:
                  selectedYear === year
                    ? "none"
                    : "1px solid #E5E7EB",
                fontWeight: 500,
                transition: "all 0.2s ease",
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
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {subjects.map((subj) => (
              <div
                key={subj}
                style={{
                  padding: 32,
                  borderRadius: 16,
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 style={{ marginBottom: 8 }}>{subj}</h3>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: 14,
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
