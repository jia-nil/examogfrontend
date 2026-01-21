import { useState } from "react"
import Landing from "./pages/Landing"
import Evaluate from "./pages/Evaluate"
import Result from "./pages/Result"

export default function App() {
  const [page, setPage] = useState<"landing" | "evaluate" | "result">("landing")
  const [result, setResult] = useState(null)

  async function handleEvaluate({ question, answer }) {
    // TEMP MOCK (replace with backend call)
    setResult({
      total_marks: 3.5,
      strengths: ["Correct core concept"],
      missing_points: ["Formula not clearly written"],
      how_to_improve: ["Start with principle, then formula"],
      model_answer: "Energy can neither be created nor destroyed..."
    })
    setPage("result")
  }

  if (page === "landing") return <Landing onStart={() => setPage("evaluate")} />
  if (page === "evaluate") return <Evaluate onEvaluate={handleEvaluate} />
  return <Result result={result} onBack={() => setPage("evaluate")} />
}

