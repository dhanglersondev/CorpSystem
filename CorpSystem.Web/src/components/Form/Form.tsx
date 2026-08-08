import type { FormHTMLAttributes, ReactNode } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export default function Form({
  children,
  className = '',
  ...props
}: FormProps) {
  return (
    <form
      {...props}
      className={`space-y-5 bg-[var(--color-branco)] p-8 rounded-lg border border-[var(--color-borda)] ${className}`}
    >
      {children}
    </form>
  )
}