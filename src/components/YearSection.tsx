import { paperLinks } from "../data/paperLinks";

type Props = {
  year: number;
  board: string;
};

const subjects = ["Maths", "Science", "English", "SST"];

export default function YearSection({ year, board }: Props) {
  return (
    <div style={{ marginTop: 28 }}>
      <h3 style={{ marginBottom: 12, color: "#1e3a8a" }}>📅 {year}</h3>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {subjects.map((subj) => {
          const link = paperLinks?.[board]?.[year]?.[subj];

          return (
            <div
              key={subj}
              onClick={() => link && window.open(link, "_blank")}
              style={{
                padding: "14px 18px",
                borderRadius: 14,
                background: link
                  ? "linear-gradient(135deg, #fde047, #38bdf8)"
                  : "#e5e7eb",
                color: "#0f172a",
                fontWeight: 600,
                cursor: link ? "pointer" : "not-allowed",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.transform = "scale(1.05)"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.transform = "scale(1)"))
              }
            >
              {subj}
            </div>
          );
        })}
      </div>
    </div>
  );
}
