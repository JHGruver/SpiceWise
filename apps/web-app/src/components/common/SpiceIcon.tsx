import './SpiceIcon.css'

type SpiceIconName =
  | 'turmeric'
  | 'ginger'
  | 'cinnamon'
  | 'garlic'
  | 'peppermint'
  | 'basil'
  | 'rosemary'
  | 'cayenne'
  | 'default'

interface SpiceIconProps {
  name: SpiceIconName | string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const spiceIcons: Record<string, JSX.Element> = {
  turmeric: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 5 5 5 9c0 3 2 5 4 6v5c0 1 1 2 3 2s3-1 3-2v-5c2-1 4-3 4-6 0-4-3-7-7-7z" />
      <path d="M9 9c0-2 1-3 3-3" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  ),
  ginger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12c-2 0-4-1-4-3s2-3 4-3c1 0 2 0 3 1" />
      <path d="M16 8c2 0 4 1 4 3s-2 3-4 3c-1 0-2 0-3-1" />
      <path d="M12 6c0-2 1-4 3-4" />
      <path d="M12 18c0 2-1 4-3 4" />
      <ellipse cx="12" cy="12" rx="4" ry="6" />
    </svg>
  ),
  cinnamon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4c0 8 2 16 6 16s6-8 6-16" />
      <path d="M6 4c2 0 4 1 6 1s4-1 6-1" />
      <path d="M8 8c1.5 0 3 .5 4 .5s2.5-.5 4-.5" />
      <path d="M9 12c1 0 2 .5 3 .5s2-.5 3-.5" />
      <path d="M10 16c.5 0 1.5.5 2 .5s1.5-.5 2-.5" />
    </svg>
  ),
  garlic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-1 0-2 1-2 2v2" />
      <path d="M12 6c-4 0-7 3-7 7 0 5 3 9 7 9s7-4 7-9c0-4-3-7-7-7z" />
      <path d="M9 10v6" />
      <path d="M12 9v8" />
      <path d="M15 10v6" />
    </svg>
  ),
  peppermint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2" />
      <path d="M12 4c-3 0-6 2-6 5 0 2 1 3 2 4" />
      <path d="M12 4c3 0 6 2 6 5 0 2-1 3-2 4" />
      <path d="M8 13c-2 1-4 3-4 5 0 2 2 4 4 4" />
      <path d="M16 13c2 1 4 3 4 5 0 2-2 4-4 4" />
      <path d="M12 8v14" />
      <path d="M8 22h8" />
    </svg>
  ),
  basil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-8" />
      <path d="M12 14c-4 0-7-3-7-6 0-2 1-4 3-5 1 2 4 3 4 3s3-1 4-3c2 1 3 3 3 5 0 3-3 6-7 6z" />
      <path d="M8 5c0-2 2-3 4-3s4 1 4 3" />
      <circle cx="12" cy="9" r="1" fill="currentColor" />
    </svg>
  ),
  rosemary: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V8" />
      <path d="M12 8c0-3 0-6 0-6" />
      <path d="M8 10l4-2 4 2" />
      <path d="M7 13l5-2 5 2" />
      <path d="M6 16l6-2 6 2" />
      <path d="M5 19l7-2 7 2" />
      <path d="M4 22l8-2 8 2" />
    </svg>
  ),
  cayenne: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-1 0-2 1-2 2 0 0 0 1 2 1s2-1 2-1c0-1-1-2-2-2z" />
      <path d="M10 5c-2 1-4 4-4 8 0 6 3 9 6 9s6-3 6-9c0-4-2-7-4-8" />
      <path d="M12 5v3" />
      <path d="M9 11c0 1 1.5 2 3 2s3-1 3-2" />
      <path d="M10 15c0 1 1 2 2 2s2-1 2-2" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4" />
      <path d="M12 16v.01" />
    </svg>
  ),
}

export default function SpiceIcon({ name, size = 'md', className = '' }: SpiceIconProps) {
  const icon = spiceIcons[name] || spiceIcons.default

  return (
    <span className={`spice-icon spice-icon--${size} spice-icon--${name} ${className}`}>
      {icon}
    </span>
  )
}

export { spiceIcons }
export type { SpiceIconName }
