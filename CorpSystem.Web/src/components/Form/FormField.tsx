import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  htmlFor?: string
  error?: string
  required?: boolean
  children: ReactNode
}

export default function FormField({
  label,
  htmlFor,
  error,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className={`flex items-center gap-2 text-[15px] font-semibold ${
          error ? 'text-red-600' : 'text-[var(--color-verde-principal)]'
        }`}
      >
        <span>{label}</span>
        {required && (
          <span className="text-base font-bold text-red-500 -translate-y-[1px]">*</span>
        )}
      </label>

      <div
        className={`
          transition-shadow
          ${error ? 'ring-2 ring-red-200 ring-inset' : 'focus-within:ring-2 focus-within:ring-[var(--color-verde-claro)]'}
          rounded-md
        `}
      >
        {children}
      </div>

      {error && (
        <p className="pt-1 text-[13px] text-red-600 font-medium flex items-center gap-1">
          <svg
            className="w-4 h-4 flex-shrink-0 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
            <path d="M10 6v4m0 4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}