type LandingProps = {
  onStart: () => void;
};

export default function Landing({ onStart }: LandingProps) {
  return (
    <div>
      <h1>Examog</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
}
