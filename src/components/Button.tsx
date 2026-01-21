export default function Button({ children, ...props }) {
  return (
    <button
      className="
        bg-accent text-white
        px-6 py-3 rounded-lg
        font-medium
        hover:opacity-90
        transition
      "
      {...props}
    >
      {children}
    </button>
  )
}

