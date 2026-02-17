import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>

      {/* Subtle Glow Elements */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "140px 20px 100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            marginBottom: 10,
          }}
        >
          Previous Year
        </h1>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 56,
            fontWeight: 700,
            color: "#4F46E5",
            marginBottom: 20,
          }}
        >
          Board Papers
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "#64748B",
          }}
        >
          Class 10 & 12 · CBSE · ICSE
        </p>
      </section>

      {/* Main Panel */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 60,
          background: "#FFFFFF",
          borderRadius: 36,
          boxShadow: "0 40px 100px rgba(15,23,42,0.06)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Class & Board */}
        <div style={{ marginBottom: 60 }}>

          <div style={{ display: "flex", gap: 16, marginBottom: 30 }}>
            {[10, 12].map((cls) => (
              <div
                key={cls}
                onClick={() => {
                  setSelectedClass(cls);
                  setSelectedBoard(null);
                  setSelectedYear(null);
                }}
                style={{
                  padding: "12px 26px",
                  borderRadius: 999,
                  cursor: "pointer",
                  background:
                    selectedClass === cls
                      ? "#4F46E5"
                      : "#F1F5FF",
                  color:
                    selectedClass === cls
                      ? "#FFFFFF"
                      : "#0F172A",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                }}
              >
                Class {cls}
              </div>
            ))}
          </div>

          {selectedClass && (
            <div style={{ display: "flex", gap: 16 }}>
              {["CBSE", "ICSE"].map((board) => (
                <div
                  key={board}
                  onClick={() => {
                    setSelectedBoard(board);
                    setSelectedYear(null);
                  }}
                  style={{
                    padding: "12px 26px",
                    borderRadius: 999,
                    cursor: "pointer",
                    background:
                      selectedBoard === board
                        ? "#4F46E5"
                        : "#F1F5FF",
                    color:
                      selectedBoard === board
                        ? "#FFFFFF"
                        : "#0F172A",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                >
                  {board}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Year Grid */}
        {selectedClass && selectedBoard && (
          <>
            <div style={{ marginBottom: 60 }}>
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
                      padding: "10px 0",
                      borderRadius: 16,
                      textAlign: "center",
                      cursor: "pointer",
                      background:
                        selectedYear === year
                          ? "#4F46E5"
                          : "#F8FAFF",
                      color:
                        selectedYear === year
                          ? "#FFFFFF"
                          : "#0F172A",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
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
                      background: "#FFFFFF",
                      boxShadow:
                        "0 20px 60px rgba(15,23,42,0.05)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform =
                        "translateY(-6px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform =
                        "translateY(0px)")
                    }
                  >
                    <h3 style={{ marginBottom: 8 }}>{subj}</h3>
                    <p
                      style={{
                        color: "#64748B",
                        fontSize: 14,
                      }}
                    >
                      Question & Answer PDFs
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
