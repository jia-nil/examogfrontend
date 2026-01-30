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
  className="floating-card"
  onClick={() => link && window.open(link, "_blank")}
  style={{
    padding: "14px 20px",
    borderRadius: 16,
    background: "linear-gradient(135deg, #FACC15, #38BDF8)",
    color: "#0f172a",
    fontWeight: 700,
    cursor: link ? "pointer" : "not-allowed",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    animationDelay: `${Math.random() * 2}s`,
  }}
>
  {subj}
</div>

          );
        })}
      </div>
    </div>
  );
}
