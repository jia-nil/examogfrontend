import PaperCard from "../components/PaperCard";
import { papers, BoardPaper } from "../data/papers";

export default function Dashboard() {
  function handleOpenPaper(paper: BoardPaper) {
    alert(`Open paper: ${paper.subject} ${paper.year}`);
    // later → navigate to paper view
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Class 10 Board Papers</h1>
      <p>Select a paper to attempt</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {papers.map((paper) => (
          <PaperCard
            key={paper.id}
            paper={paper}
            onOpen={handleOpenPaper}
          />
        ))}
      </div>
    </div>
  );
}

