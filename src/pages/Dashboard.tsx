import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "110px 20px 70px",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            marginBottom: 16,
          }}
        >
          Previous Year Papers
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#64748B",
          }}
        >
          Class 10 & 12 · CBSE & ICSE
        </p>
      </section>

      {/* Panel */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 48,
          background: "#FFFFFF",
          borderRadius: 32,
          boxShadow: "0 25px 60px rgba(0,0,0,0.06)",
        }}
      >
        {/* Class + Board */}
        <div style={{ marginBottom: 50 }}>
          <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
            {[10, 12].map((cls) => (
              <div
                key={cls}
                onClick={() => {
                  setSelectedClass(cls);
                  setSelectedBoard(null);
                  setSelectedYear(null);
                }}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  cursor: "pointer",
                  background:
                    selectedClass === cls
                      ? "#2563EB"
                      : "#E0E7FF",
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
                    padding: "10px 22px",
                    borderRadius: 999,
                    cursor: "pointer",
                    background:
                      selectedBoard === board
                        ? "#2563EB"
                        : "#E0E7FF",
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
            <div style={{ marginBottom: 50 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(90px, 1fr))",
                  gap: 14,
                }}
              >
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: "8px 0",
                      borderRadius: 14,
                      textAlign: "center",
                      cursor: "pointer",
                      background:
                        selectedYear === year
                          ? "#2563EB"
                          : "#F1F5FF",
                      color:
                        selectedYear === year
                          ? "#FFFFFF"
                          : "#0F172A",
                      fontSize: 14,
                      fontWeight: 500,
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
                        padding: 36,
                        borderRadius: 24,
                        background: "#F8FAFF",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform =
                          "translateY(-4px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform =
                          "translateY(0px)")
                      }
                    >
                      <h3 style={{ marginBottom: 6 }}>{subj}</h3>
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
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
