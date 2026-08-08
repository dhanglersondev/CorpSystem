import type { SelectHTMLAttributes } from 'react'

export interface SelectOption {
  value: string | number
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  error?: boolean
}

export default function Select({
  options,
  error = false,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
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

          pr-9

          ${className}
        `}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-900"
          >
            {option.label}
          </option>
        ))}
      </select>
      {/* Custom styled arrow icon */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className={`w-4 h-4 ${error ? 'text-red-500' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}