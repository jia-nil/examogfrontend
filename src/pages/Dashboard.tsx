import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%)",
      }}
    >
      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px 100px",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: 24,
            color: "#1E293B",
          }}
        >
          Board Prep.
          <br />
          Made Beautiful.
        </h1>

        <p
          style={{
            fontSize: 20,
            color: "#64748B",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Previous year papers with structured answers.
          Designed for focused revision.
        </p>
      </section>

      {/* Floating Panel */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 40,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          borderRadius: 24,
          boxShadow: "0 40px 80px rgba(0,0,0,0.08)",
        }}
      >
        {/* Class Selector */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ marginBottom: 16 }}>Select Class</h3>

          <div style={{ display: "flex", gap: 16 }}>
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
                      ? "#4F46E5"
                      : "#FFFFFF",
                  color:
                    selectedClass === cls
                      ? "#FFFFFF"
                      : "#1E293B",
                  border: "1px solid #E2E8F0",
                  transition: "all 0.2s ease",
                }}
              >
                Class {cls}
              </div>
            ))}
          </div>
        </div>

        {/* Board Selector */}
        {selectedClass && (
          <div style={{ marginBottom: 50 }}>
            <h3 style={{ marginBottom: 16 }}>Select Board</h3>

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
                        ? "#4F46E5"
                        : "#FFFFFF",
                    color:
                      selectedBoard === board
                        ? "#FFFFFF"
                        : "#1E293B",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.2s ease",
                  }}
                >
                  {board}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Year Grid */}
        {selectedClass && selectedBoard && (
          <>
            <div style={{ marginBottom: 50 }}>
              <h3 style={{ marginBottom: 20 }}>Select Year</h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: 14,
                }}
              >
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: "10px 0",
                      borderRadius: 12,
                      textAlign: "center",
                      cursor: "pointer",
                      background:
                        selectedYear === year
                          ? "#4F46E5"
                          : "#FFFFFF",
                      color:
                        selectedYear === year
                          ? "#FFFFFF"
                          : "#1E293B",
                      border: "1px solid #E2E8F0",
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
              <div>
                <h3 style={{ marginBottom: 32 }}>
                  {selectedBoard} • Class {selectedClass} • {selectedYear}
                </h3>

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
                        borderRadius: 18,
                        background: "#FFFFFF",
                        border: "1px solid #E2E8F0",
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
                      <h3 style={{ marginBottom: 8 }}>{subj}</h3>
                      <p
                        style={{
                          color: "#64748B",
                          fontSize: 14,
                        }}
                      >
                        View question & answer PDFs
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
