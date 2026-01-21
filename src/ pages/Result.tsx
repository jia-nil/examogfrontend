import Section from "../components/Section"
import Button from "../components/Button"

export default function Result({ result, onBack }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

        <h2 className="text-2xl font-semibold">
          Score: {result.total_marks} / 5
        </h2>

        <Section title="What you did well">
          <ul className="list-disc ml-5 text-muted">
            {result.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </Section>

        <Section title="What’s missing">
          <ul className="list-disc ml-5 text-muted">
            {result.missing_points.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </Section>

        <Section title="How to improve">
          <ul className="list-disc ml-5 text-muted">
            {result.how_to_improve.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </Section>

        <Section title="Model Answer">
          <p className="text-muted whitespace-pre-line">
            {result.model_answer}
          </p>
        </Section>

        <Button onClick={onBack}>Evaluate another answer</Button>

      </div>
    </div>
  )
}
