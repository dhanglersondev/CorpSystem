import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function Button({
  className = '',
  children,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md
        w-[150px] h-9
        text-base font-medium
        bg-green-600 text-white
        hover:bg-green-700
        focus:outline-none focus:ring-2 focus:ring-green-300
        disabled:cursor-not-allowed disabled:opacity-50
        transition
        ${icon ? 'sm:gap-4' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="w-5 h-5 flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="w-5 h-5 flex-shrink-0">{icon}</span>
      )}
    </button>
  )
}