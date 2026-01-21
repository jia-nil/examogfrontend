export default function Textarea(props) {
  return (
    <textarea
      className="
        w-full h-64
        bg-surface
        border border-border
        rounded-lg
        p-4
        text-text
        focus:outline-none focus:ring-1 focus:ring-accent
      "
      {...props}
    />
  )
}
