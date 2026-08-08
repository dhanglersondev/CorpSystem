import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export default function Input({
  error = false,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`
          w-full
          appearance-none
          rounded-md
          border
          bg-[var(--color-branco)]
          px-3
          py-2.5
          text-sm
          font-medium
          text-gray-900
          outline-none
          transition-colors
          shadow-sm

          placeholder:text-gray-400

          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-[var(--color-borda)] focus:border-[var(--color-verde-principal)] focus:ring-2 focus:ring-[var(--color-verde-claro)]'
          }

          hover:border-[var(--color-verde-secundario)]
          focus:shadow-md

          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-500

          ${className}
        `}
      />
      {error && (
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.13" />
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  )
}