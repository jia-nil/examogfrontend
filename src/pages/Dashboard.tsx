import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bgColor = darkMode ? "#1E1B2E" : "#FDF6F9";
  const cardColor = darkMode ? "#2A243F" : "#FFFFFF";
  const textColor = darkMode ? "#F3F4F6" : "#1F2937";
  const subTextColor = darkMode ? "#C4B5FD" : "#6B7280";
  const accent = darkMode ? "#C4B5FD" : "#8B5CF6";

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
          background: cardColor,
          padding: 30,
          boxShadow: "0 0 40px rgba(0,0,0,0.08)",
          transition: "all 0.4s ease",
          zIndex: 1000,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
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
            borderRadius: 20,
            border: "none",
            background: accent,
            color: "#fff",
            cursor: "pointer",
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
          top: 25,
          left: 25,
          background: accent,
          border: "none",
          padding: "8px 14px",
          borderRadius: 20,
          cursor: "pointer",
          zIndex: 1100,
          color: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        ☰
      </button>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "140px 20px 90px",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontFamily: "Parisienne, cursive",
            marginBottom: 20,
          }}
        >
          Class 10 CBSE
        </h1>

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
          padding: "0 40px 120px",
        }}
      >
        {/* Year Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 20,
            marginBottom: 80,
          }}
        >
          {years.map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: "14px 0",
                borderRadius: 25,
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
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
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
              gap: 30,
            }}
          >
            {subjects.map((subj) => (
              <div
                key={subj}
                style={{
                  padding: 40,
                  borderRadius: 30,
                  background: cardColor,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.06)",
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
  borderRadius: 25,
  border: "none",
  marginBottom: 14,
  cursor: "pointer",
  background: "#EDE9FE",
};
