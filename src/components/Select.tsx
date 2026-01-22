import React from "react"

type Props = {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}

export default function Select({ label, options, value, onChange }: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-muted">{label}</label>
      <select
        className="
          w-full bg-surface border border-border
          rounded-lg px-3 py-2 text-text
          focus:outline-none focus:ring-1 focus:ring-accent
        "
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
