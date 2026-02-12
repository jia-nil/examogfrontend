import { useState } from "react";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
const subjects = ["Maths", "Science", "English", "SST"];

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div>
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px 100px",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}
        >
          Board preparation.
          <br />
          Simplified.
        </h1>

        <p
          style={{
            fontSize: 20,
            color: "#6B6B6B",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Previous year question papers and answer PDFs.
          Structured. Minimal. Focused.
        </p>
      </section>

      {/* Main Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px 120px",
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
                  padding: "10px 20px",
                  border: "1px solid #E6E6E6",
                  borderRadius: 999,
                  cursor: "pointer",
                  background:
                    selectedClass === cls ? "#111111" : "transparent",
                  color:
                    selectedClass === cls ? "#FFFFFF" : "#111111",
                }}
              >
                Class {cls}
              </div>
            ))}
          </div>
        </div>

        {/* Board Selector */}
        {selectedClass && (
          <div style={{ marginBottom: 60 }}>
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
                    padding: "10px 20px",
                    border: "1px solid #E6E6E6",
                    borderRadius: 999,
                    cursor: "pointer",
                    background:
                      selectedBoard === board
                        ? "#111111"
                        : "transparent",
                    color:
                      selectedBoard === board
                        ? "#FFFFFF"
                        : "#111111",
                  }}
                >
                  {board}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Year Strip */}
        {selectedClass && selectedBoard && (
          <>
            <div style={{ marginBottom: 60 }}>
              <h3 style={{ marginBottom: 20 }}>Select Year</h3>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  overflowX: "auto",
                }}
              >
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: "10px 18px",
                      border: "1px solid #E6E6E6",
                      borderRadius: 999,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      background:
                        selectedYear === year
                          ? "#111111"
                          : "transparent",
                      color:
                        selectedYear === year
                          ? "#FFFFFF"
                          : "#111111",
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Grid */}
            {selectedYear && (
              <div>
                <h3 style={{ marginBottom: 32 }}>
                  {selectedBoard} Class {selectedClass} — {selectedYear}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 32,
                  }}
                >
                  {subjects.map((subj) => (
                    <div
                      key={subj}
                      style={{
                        padding: 40,
                        border: "1px solid #E6E6E6",
                        borderRadius: 20,
                        background: "#FFFFFF",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <h3 style={{ marginBottom: 8 }}>
                        {subj}
                      </h3>

                      <p
                        style={{
                          color: "#6B6B6B",
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
