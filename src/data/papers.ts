export type BoardPaper = {
  id: string;
  subject: "Maths" | "Science" | "English";
  board: "CBSE" | "ICSE" | "State";
  year: number;
  maxMarks: number;
  pdfUrl: string;
};

export const papers: BoardPaper[] = [
  {
    id: "cbse-maths-2023",
    subject: "Maths",
    board: "CBSE",
    year: 2023,
    maxMarks: 80,
    pdfUrl: "/papers/cbse_maths_2023.pdf",
  },
  {
    id: "cbse-science-2023",
    subject: "Science",
    board: "CBSE",
    year: 2023,
    maxMarks: 80,
    pdfUrl: "/papers/cbse_science_2023.pdf",
  },
  {
    id: "cbse-english-2022",
    subject: "English",
    board: "CBSE",
    year: 2022,
    maxMarks: 80,
    pdfUrl: "/papers/cbse_english_2022.pdf",
  },
];
