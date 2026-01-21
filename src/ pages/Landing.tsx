import Button from "../components/Button"

export default function Landing({ onStart }) {
  return (
    <div className="min-h-screen bg-bg text-text flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-semibold">
          Physics Answer Evaluation
        </h1>

        <p className="mt-4 text-muted max-w-xl">
          Private, CBSE-aligned evaluation for Class 12 Physics answers.
        </p>

        <div className="mt-8">
          <Button onClick={onStart}>
            Try an evaluation
          </Button>
        </div>
      </div>
    </div>
  )
}

