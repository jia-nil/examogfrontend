import { useState } from "react";
import Hero from "../components/Hero";
import Selector from "../components/Selector";
import YearSection from "../components/YearSection";

const years = Array.from({ length: 16 }, (_, i) => 2025 - i);

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <Hero />

      <Selector
        selectedClass={selectedClass}
        selectedBoard={selectedBoard}
        onSelectClass={(c) => {
          setSelectedClass(c);
          setSelectedBoard(null); // reset board when class changes
        }}
        onSelectBoard={setSelectedBoard}
      />

      {/* 👇 THIS IS THE IMPORTANT PART */}
      {selectedClass && selectedBoard && (
        <div style={{ marginTop: 48 }}>
          <h2 style={{ marginBottom: 24 }}>
            {selectedBoard} Class {selectedClass} – Previous Year Papers
          </h2>

          {years.map((year) => (
            <YearSection key={year} year={year} />
          ))}
        </div>
      )}
    </div>
  );
}
