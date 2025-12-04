import { InputHTMLAttributes } from 'react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

export function SearchInput({
  onSearch,
  className = '',
  ...props
}: SearchInputProps) {
  return (
    <div className={`sw-search ${className}`}>
      <svg
        className="sw-search__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="search"
        className="sw-search__input"
        onChange={(e) => onSearch?.(e.target.value)}
        {...props}
      />
    </div>
  )
}
