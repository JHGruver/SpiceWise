import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Card({
  variant = 'default',
  padding = 'md',
  children,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'sw-card'
  const variantStyles = `sw-card--${variant}`
  const paddingStyles = `sw-card--padding-${padding}`

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
