import { useState } from "react";
import Hero from "../components/Hero";
import Selector from "../components/Selector";
import YearSection from "../components/YearSection";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh" }}>
      
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Wrapper */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 48px",
        }}
      >

        {/* Class + Board Selector */}
        <Selector
          selectedClass={selectedClass}
          selectedBoard={selectedBoard}
          onSelectClass={(c) => {
            setSelectedClass(c);
            setSelectedBoard(null);
            setSelectedYear(null);
          }}
          onSelectBoard={(b) => {
            setSelectedBoard(b);
            setSelectedYear(null);
          }}
        />

        {/* Year Strip (Only show when class + board selected) */}
        {selectedClass && selectedBoard && (
          <>
            <div
              style={{
                marginTop: 80,
                marginBottom: 40,
                borderBottom: "1px solid #2A2F36",
                paddingBottom: 24,
              }}
            >
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  marginBottom: 24,
                  letterSpacing: "-0.02em",
                }}
              >
                {selectedBoard} • Class {selectedClass}
              </h2>

              {/* Horizontal Scroll Years */}
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  overflowX: "auto",
                  paddingBottom: 8,
                }}
              >
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: "14px 22px",
                      borderRadius: 16,
                      background:
                        selectedYear === year
                          ? "#7C5CFF"
                          : "#161A20",
                      border: "1px solid #2A2F36",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                      fontWeight: 500,
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Section */}
            {selectedYear && (
              <YearSection
                year={selectedYear}
                board={selectedBoard}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
