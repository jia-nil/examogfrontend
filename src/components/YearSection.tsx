import { paperLinks } from "../data/paperLinks";

type Props = {
  year: number;
  board: string;
};

const subjects = ["Maths", "Science", "English", "SST"];

export default function YearSection({ year, board }: Props) {
  return (
    <section style={{ padding: "0 48px 64px" }}>
      {/* Year Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {year}
        </h2>

        <div
          style={{
            height: "1px",
            flex: 1,
            background: "#2A2F36",
            marginLeft: "24px",
          }}
        />
      </div>

      {/* Subject Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
        }}
      >
        {subjects.map((subj) => {
          const link = paperLinks?.[board]?.[year]?.[subj];

          return (
            <div
              key={subj}
              onClick={() => link && window.open(link, "_blank")}
              style={{
                padding: "28px",
                borderRadius: "20px",
                background: "#161A20",
                border: "1px solid #2A2F36",
                cursor: link ? "pointer" : "not-allowed",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7C5CFF";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2F36";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {subj}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#9CA3AF",
                }}
              >
                view paper & answers
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
