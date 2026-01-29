type EvaluationResult = {
  total_marks: number;
  strengths: string[];
  mistakes: string[];
  improvements: string[];
};

type ResultProps = {
  result: EvaluationResult;
  onBack: () => void;
};

export default function Result({ result, onBack }: ResultProps) {
  return (
    <div>
      <h2>Total Marks: {result.total_marks}</h2>

      {result.strengths.map((s: string, i: number) => (
        <p key={i}>{s}</p>
      ))}

      <button onClick={onBack}>Back</button>
    </div>
  );
}
