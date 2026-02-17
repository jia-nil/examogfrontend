import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bgColor = darkMode ? "#0F172A" : "#EEF2F7";
  const cardColor = darkMode ? "#1E293B" : "#FFFFFF";
  const textColor = darkMode ? "#E2E8F0" : "#0F172A";
  const subTextColor = darkMode ? "#94A3B8" : "#64748B";
  const accent = darkMode ? "#818CF8" : "#3B82F6";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bgColor,
        transition: "all 0.3s ease",
        color: textColor,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Navbar />

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : -260,
          width: 260,
          height: "100vh",
          background: darkMode ? "#111827" : "#FFFFFF",
          padding: 30,
          boxShadow: "2px 0 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
      >
        <h3 style={{ marginBottom: 30, fontWeight: 600 }}>
          Examog
        </h3>

        <button style={sidebarBtn}>Login</button>
        <button style={{ ...sidebarBtn, marginBottom: 30 }}>
          Sign Up
        </button>

        <p style={{ marginBottom: 8, fontSize: 14 }}>
          Appearance
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: "none",
            background: accent,
            color: "#fff",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          background: accent,
          border: "none",
          padding: "8px 12px",
          borderRadius: 8,
          cursor: "pointer",
          zIndex: 1100,
          color: "#fff",
        }}
      >
        ☰
      </button>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "130px 20px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 62,
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            fontWeight: 700,
            marginBottom: 18,
            letterSpacing: "1px",
          }}
        >
          Class 10 CBSE
        </h1>

        <div
          style={{
            width: 60,
            height: 3,
            background: accent,
            margin: "0 auto 18px",
            borderRadius: 2,
          }}
        />

        <p
          style={{
            fontSize: 18,
            color: subTextColor,
          }}
        >
          Previous Year Question Papers
        </p>
      </section>

      {/* Main */}
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
                borderRadius: 12,
                textAlign: "center",
                cursor: "pointer",
                fontWeight: 500,
                background:
                  selectedYear === year
                    ? accent
                    : cardColor,
                color:
                  selectedYear === year
                    ? "#fff"
                    : textColor,
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "all 0.2s ease",
              }}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Subjects */}
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
                  borderRadius: 18,
                  background: cardColor,
                  border: "1px solid rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    marginBottom: 12,
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {subj}
                </h3>

                <p
                  style={{
                    color: subTextColor,
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

const sidebarBtn = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #E5E7EB",
  marginBottom: 12,
  cursor: "pointer",
  fontWeight: 500,
  background: "transparent",
};
