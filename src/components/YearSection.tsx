type Props = {
  year: number;
};

export default function YearSection({ year }: Props) {
  return (
    <div style={{ marginTop: 32 }}>
      <h3 style={{ marginBottom: 12 }}>📅 {year}</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["Maths", "Science", "English", "SST"].map((subj) => (
          <div
            key={subj}
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              background: "#f5f7ff",
              cursor: "pointer",
            }}
          >
            {subj}
          </div>
        ))}
      </div>
    </div>
  );
}
