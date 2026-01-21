export default function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-medium">{title}</h3>
      {children}
    </section>
  )
}
