import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bgColor = darkMode ? "#0B1120" : "#F1F5F9";
  const cardColor = darkMode ? "#111827" : "#FFFFFF";
  const textColor = darkMode ? "#E2E8F0" : "#0F172A";
  const subTextColor = darkMode ? "#94A3B8" : "#64748B";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bgColor,
        transition: "all 0.3s ease",
        color: textColor,
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
          background: "#0F172A",
          color: "#E2E8F0",
          padding: 30,
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
      >
        <h3 style={{ marginBottom: 30 }}>Examog</h3>

        <button
          style={sidebarBtn}
        >
          Login
        </button>

        <button
          style={{ ...sidebarBtn, marginBottom: 30 }}
        >
          Sign Up
        </button>

        <div style={{ marginTop: 20 }}>
          <p style={{ marginBottom: 8 }}>Theme</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "none",
              background: "#C6A75E",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          background: "#C6A75E",
          border: "none",
          padding: "8px 12px",
          borderRadius: 6,
          cursor: "pointer",
          zIndex: 1100,
          fontWeight: 600,
        }}
      >
        ☰
      </button>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 60,
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            marginBottom: 18,
            letterSpacing: "1px",
          }}
        >
          Class 10 CBSE
        </h1>

        <div
          style={{
            width: 80,
            height: 3,
            background: "#C6A75E",
            margin: "0 auto 18px",
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
                fontWeight: 600,
                background:
                  selectedYear === year
                    ? "#C6A75E"
                    : cardColor,
                color:
                  selectedYear === year
                    ? "#0F172A"
                    : textColor,
                border: "1px solid rgba(0,0,0,0.05)",
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
                  background: cardColor,
                  border: "1px solid rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
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
  borderRadius: 8,
  border: "none",
  marginBottom: 12,
  cursor: "pointer",
  fontWeight: 600,
};
