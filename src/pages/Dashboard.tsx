import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const colors = darkMode
    ? {
        bg: "#0B1220",
        card: "#111827",
        border: "#1F2937",
        text: "#E5E7EB",
        muted: "#94A3B8",
        accent: "#818CF8",
      }
    : {
        bg: "#F6F7FB",
        card: "#FFFFFF",
        border: "#E5E7EB",
        text: "#111827",
        muted: "#6B7280",
        accent: "#6366F1",
      };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.text,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Navbar */}
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 64,
          left: sidebarOpen ? 0 : -260,
          width: 260,
          height: "calc(100vh - 64px)",
          background: colors.card,
          borderRight: `1px solid ${colors.border}`,
          padding: "24px 20px",
          transition: "left 0.3s ease",
          zIndex: 1000,
        }}
      >
        <SidebarItem label="Dashboard" colors={colors} />
        <SidebarItem label="Papers" colors={colors} />
        <SidebarItem label="Analytics (Soon)" colors={colors} />

        <div
          style={{
            height: 1,
            background: colors.border,
            margin: "30px 0",
          }}
        />

        <SidebarItem label="Login" colors={colors} />
        <SidebarItem label="Sign Up" colors={colors} />

        <div style={{ marginTop: 30 }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: 8,
              border: `1px solid ${colors.border}`,
              background: "transparent",
              cursor: "pointer",
              color: colors.text,
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
            zIndex: 900,
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 32px 80px",
        }}
      >
        {/* Page Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 600 }}>
            Class 10 CBSE Papers
          </h1>
          <p style={{ fontSize: 14, color: colors.muted, marginTop: 6 }}>
            Access structured question papers from the last 16 years.
          </p>
        </div>

        {/* Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {[
            "16 Years Covered",
            "4 Core Subjects",
            "Structured Solutions",
            "AI Evaluation Soon",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 18px",
                borderRadius: 999,
                background: darkMode
                  ? "rgba(129,140,248,0.08)"
                  : "rgba(99,102,241,0.06)",
                border: `1px solid ${colors.border}`,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: colors.accent,
                }}
              />
              {item}
            </div>
          ))}
        </div>

        {/* Year Selection */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600 }}>
            Select Year
          </h2>
          <p style={{ fontSize: 14, color: colors.muted, marginTop: 4 }}>
            Choose a year to view available subjects
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 16,
            }}
          >
            {years.map((year) => (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  border: `1px solid ${
                    selectedYear === year
                      ? colors.accent
                      : colors.border
                  }`,
                  background:
                    selectedYear === year
                      ? colors.accent
                      : colors.card,
                  color:
                    selectedYear === year
                      ? "#FFFFFF"
                      : colors.text,
                  transition: "all 0.2s ease",
                }}
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        {/* Subjects */}
        {selectedYear && (
          <div>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Subjects for {selectedYear}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {subjects.map((subj) => (
                <div
                  key={subj}
                  style={{
                    padding: 24,
                    borderRadius: 16,
                    border: `1px solid ${colors.border}`,
                    background: colors.card,
                    cursor: "pointer",
                    transition:
                      "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform =
                      "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform =
                      "translateY(0)";
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    {subj}
                  </h3>

                  <p
                    style={{
                      fontSize: 13,
                      color: colors.muted,
                    }}
                  >
                    View question papers and solutions
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SidebarItem({
  label,
  colors,
}: {
  label: string;
  colors: any;
}) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 14,
        marginBottom: 6,
        transition: "background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = colors.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {label}
    </div>
  );
}
