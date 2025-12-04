import { HTMLAttributes, ReactNode } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'herb' | 'spice'
  size?: 'sm' | 'md'
  children: ReactNode
}

export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles = 'sw-badge'
  const variantStyles = `sw-badge--${variant}`
  const sizeStyles = `sw-badge--${size}`

  return (
    <span
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
