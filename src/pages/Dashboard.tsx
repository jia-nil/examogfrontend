import { useState } from "react";
import Hero from "../components/Hero";
import Selector from "../components/Selector";
import YearSection from "../components/YearSection";
import Navbar from "../components/Navbar";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fef9c3, #e0f2fe)",
        padding: 24,
      }}
    >
      {/* 🌟 Top branding */}
      <Navbar />

      {/* 📦 Main glass container */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 24,
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(14px)",
          borderRadius: 24,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        {/* 🌈 Hero section */}
        <Hero />

        {/* 🎓 Class & Board selector */}
        <Selector
          selectedClass={selectedClass}
          selectedBoard={selectedBoard}
          onSelectClass={(c) => {
            setSelectedClass(c);
            setSelectedBoard(null); // reset board when class changes
          }}
          onSelectBoard={setSelectedBoard}
        />

        {/* 📚 Papers listing */}
        {selectedClass && selectedBoard && (
          <div style={{ marginTop: 48 }}>
            <h2 style={{ marginBottom: 24 }}>
              {selectedBoard} Class {selectedClass} – Previous Year Papers
            </h2>

            {years.map((year) => (
              <YearSection
                key={year}
                year={year}
                board={selectedBoard}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
