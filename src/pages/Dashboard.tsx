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
        background: "#F8FAFC",
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
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 16,
            color: "#0F172A",
            letterSpacing: "-1px",
          }}
        >
          Class 10 CBSE
        </h1>

        <div
          style={{
            width: 60,
            height: 3,
            background: "#C6A75E",
            margin: "0 auto 18px",
            borderRadius: 2,
          }}
        />

        <p
          style={{
            fontSize: 18,
            color: "#64748B",
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
                borderRadius: 10,
                textAlign: "center",
                cursor: "pointer",
                fontWeight: 500,
                background:
                  selectedYear === year
                    ? "#0F172A"
                    : "#FFFFFF",
                color:
                  selectedYear === year
                    ? "#C6A75E"
                    : "#0F172A",
                border:
                  selectedYear === year
                    ? "none"
                    : "1px solid #E2E8F0",
                boxShadow:
                  selectedYear === year
                    ? "0 8px 20px rgba(15,23,42,0.15)"
                    : "0 3px 8px rgba(0,0,0,0.03)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (selectedYear !== year) {
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
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
                  padding: 40,
                  borderRadius: 16,
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow:
                    "0 8px 24px rgba(15,23,42,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 32px rgba(15,23,42,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(15,23,42,0.05)";
                }}
              >
                <h3
                  style={{
                    marginBottom: 12,
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  {subj}
                </h3>

                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: "#C6A75E",
                    marginBottom: 14,
                  }}
                />

                <p
                  style={{
                    color: "#64748B",
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
