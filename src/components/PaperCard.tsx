import { BoardPaper } from "../data/papers";

type Props = {
  paper: BoardPaper;
  onOpen: (paper: BoardPaper) => void;
};

export default function PaperCard({ paper, onOpen }: Props) {
  return (
    <div
      onClick={() => onOpen(paper)}
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        cursor: "pointer",
        background: "#fff",
      }}
    >
      <h3>{paper.subject}</h3>
      <p>{paper.board} • {paper.year}</p>
      <p>Max Marks: {paper.maxMarks}</p>
    </div>
  );
}
