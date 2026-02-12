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
      <Navbar />

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "110px 20px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}
        >
          Calm. Structured.
          <br />
          Board Preparation.
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
          Previous year papers and clean answer PDFs.
          Designed for focused revision.
        </p>
      </section>

      {/* Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        {/* Class Selector */}
        <div style={{ marginBottom: 50 }}>
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
                  border: "1px solid #E7E5E4",
                  borderRadius: 999,
                  cursor: "pointer",
                  background:
                    selectedClass === cls ? "#5E8B7E" : "#FFFFFF",
                  color:
                    selectedClass === cls ? "#FFFFFF" : "#1C1917",
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
                    padding: "10px 22px",
                    border: "1px solid #E7E5E4",
                    borderRadius: 999,
                    cursor: "pointer",
                    background:
                      selectedBoard === board
                        ? "#5E8B7E"
                        : "#FFFFFF",
                    color:
                      selectedBoard === board
                        ? "#FFFFFF"
                        : "#1C1917",
                    transition: "all 0.2s ease",
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
                  gap: 14,
                  overflowX: "auto",
                }}
              >
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: "8px 18px",
                      border: "1px solid #E7E5E4",
                      borderRadius: 999,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      background:
                        selectedYear === year
                          ? "#5E8B7E"
                          : "#FFFFFF",
                      color:
                        selectedYear === year
                          ? "#FFFFFF"
                          : "#1C1917",
                      fontSize: 14,
                      transition: "all 0.2s ease",
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
                      "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 28,
                  }}
                >
                  {subjects.map((subj) => (
                    <div
                      key={subj}
                      style={{
                        padding: 36,
                        border: "1px solid #E7E5E4",
                        borderRadius: 18,
                        background: "#FFFFFF",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "#5E8B7E")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "#E7E5E4")
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
