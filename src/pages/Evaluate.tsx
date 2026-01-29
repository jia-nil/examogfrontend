type EvaluateProps = {
  onEvaluate: (question: string, answer: string) => void;
};

export default function Evaluate({ onEvaluate }: EvaluateProps) {
  return (
    <div>
      <button onClick={() => onEvaluate("Sample question", "Sample answer")}>
        Evaluate
      </button>
    </div>
  );
}
