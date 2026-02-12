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
          padding: "120px 20px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            marginBottom: 20,
          }}
        >
          Study.
          <br />
          But Make It Aesthetic.
        </h1>

        <p
          style={{
            fontSize: 20,
            color: "#6B7280",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Board papers, clean answers,
          and calm prep energy.
        </p>
      </section>

      {/* Glass Panel */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 40,
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px)",
          borderRadius: 28,
          boxShadow: "0 40px 80px rgba(0,0,0,0.12)",
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
                      ? "#7C3AED"
                      : "#FFFFFF",
                  color:
                    selectedClass === cls
                      ? "#FFFFFF"
                      : "#1F2937",
                  border: "1px solid rgba(0,0,0,0.08)",
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
                        ? "#7C3AED"
                        : "#FFFFFF",
                    color:
                      selectedBoard === board
                        ? "#FFFFFF"
                        : "#1F2937",
                    border: "1px solid rgba(0,0,0,0.08)",
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
                    "repeat(auto-fit, minmax(90px, 1fr))",
                  gap: 12,
                }}
              >
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: "8px 0",
                      borderRadius: 12,
                      textAlign: "center",
                      cursor: "pointer",
                      background:
                        selectedYear === year
                          ? "#7C3AED"
                          : "#FFFFFF",
                      color:
                        selectedYear === year
                          ? "#FFFFFF"
                          : "#1F2937",
                      border: "1px solid rgba(0,0,0,0.08)",
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
                <h3 style={{ marginBottom: 30 }}>
                  {selectedBoard} • Class {selectedClass} • {selectedYear}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 24,
                  }}
                >
                  {subjects.map((subj) => (
                    <div
                      key={subj}
                      style={{
                        padding: 30,
                        borderRadius: 20,
                        background: "#FFFFFF",
                        border: "1px solid rgba(0,0,0,0.08)",
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
                          color: "#6B7280",
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
