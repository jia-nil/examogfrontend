import { useState } from "react";
import Landing from "./pages/Landing";
import Evaluate from "./pages/Evaluate";
import Result from "./pages/Result";

type EvaluationResult = {
  total_marks: number;
  strengths: string[];
  mistakes: string[];
  improvements: string[];
};

export default function App() {
  const [page, setPage] = useState<"landing" | "evaluate" | "result">("landing");
  const [result, setResult] = useState<EvaluationResult | null>(null);

  async function handleEvaluate(question: string, answer: string) {
    setResult({
      total_marks: 3.5,
      strengths: ["Good intro"],
      mistakes: ["Weak conclusion"],
      improvements: ["Add examples"],
    });
    setPage("result");
  }

  if (page === "landing") return <Landing onStart={() => setPage("evaluate")} />;
  if (page === "evaluate") return <Evaluate onEvaluate={handleEvaluate} />;
  if (page === "result" && result)
    return <Result result={result} onBack={() => setPage("evaluate")} />;

  return null;
}
