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
        transition: "all 0.3s ease",
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
          background: colors.card,
          borderRight: `1px solid ${colors.border}`,
          padding: "90px 20px",
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

        <div style={{ marginTop: 40 }}>
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

      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          width: 36,
          height: 36,
          borderRadius: 8,
          border: `1px solid ${colors.border}`,
          background: colors.card,
          cursor: "pointer",
          zIndex: 1100,
        }}
      >
        ☰
      </button>

      {/* Content Wrapper */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 32px 80px",
        }}
      >
        {/* Page Header */}
        <div style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Class 10 CBSE Papers
          </h1>
          <p style={{ color: colors.muted }}>
            Access 16 years of structured question papers
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 20,
            marginBottom: 60,
          }}
        >
          {["16 Years Covered", "4 Core Subjects", "Structured Solutions", "AI Evaluation Soon"].map(
            (item) => (
              <div
                key={item}
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  padding: 20,
                  borderRadius: 16,
                }}
              >
                <div style={{ fontSize: 14, color: colors.muted }}>
                  {item}
                </div>
              </div>
            )
          )}
        </div>

        {/* Year Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 16,
            marginBottom: 50,
          }}
        >
          {years.map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: "12px 0",
                textAlign: "center",
                borderRadius: 12,
                cursor: "pointer",
                background:
                  selectedYear === year
                    ? colors.accent
                    : colors.card,
                color:
                  selectedYear === year
                    ? "#fff"
                    : colors.text,
                border: `1px solid ${colors.border}`,
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
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {subjects.map((subj) => (
              <div
                key={subj}
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  padding: 30,
                  borderRadius: 18,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h3 style={{ marginBottom: 8, fontSize: 18 }}>
                  {subj}
                </h3>
                <p style={{ fontSize: 14, color: colors.muted }}>
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
