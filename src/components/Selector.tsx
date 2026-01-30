type Props = {
  selectedClass: number | null;
  selectedBoard: string | null;
  onSelectClass: (c: number) => void;
  onSelectBoard: (b: string) => void;
};

export default function Selector({
  selectedClass,
  selectedBoard,
  onSelectClass,
  onSelectBoard,
}: Props) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>Select Your Class</h2>
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {[10, 12].map((c) => (
          <button
            key={c}
            onClick={() => onSelectClass(c)}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              background: selectedClass === c ? "#667eea" : "#eee",
              color: selectedClass === c ? "white" : "#333",
            }}
          >
            Class {c}
          </button>
        ))}
      </div>

      {selectedClass && (
        <>
          <h2>Select Board</h2>
          <div style={{ display: "flex", gap: 12 }}>
            {["CBSE", "ICSE"].map((b) => (
              <button
                key={b}
                onClick={() => onSelectBoard(b)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: selectedBoard === b ? "#764ba2" : "#eee",
                  color: selectedBoard === b ? "white" : "#333",
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
