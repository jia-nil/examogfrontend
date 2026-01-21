import { useState } from "react"
import Button from "../components/Button"
import Select from "../components/Select"
import Textarea from "../components/Textarea"

export default function Evaluate({ onEvaluate }) {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Class 12 · Physics</h2>

          <Select
            label="Question"
            options={[
              "Explain the principle of conservation of energy",
              "Derive the expression for kinetic energy",
              "State and explain Ohm’s Law"
            ]}
            value={question}
            onChange={setQuestion}
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <label className="text-sm text-muted">
            Write your answer
          </label>

          <Textarea value={answer} onChange={setAnswer} />

          <Button
            onClick={() => onEvaluate({ question, answer })}
            disabled={!question || !answer}
          >
            Evaluate answer
          </Button>
        </div>

      </div>
    </div>
  )
}
