export default function Footer() {
  return (
    <footer className="h-14 border-t border-green-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <span className="text-sm text-green-700">
          © 2026 CorpSystem
        </span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:contato@corpsystem.com"
            className="text-green-700 hover:text-green-900 transition-colors"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect width="20" height="14" x="2" y="5" rx="2" fill="none" />
              <path d="M22 7.17l-10 6-10-6" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/corpsystem"
            className="text-green-700 hover:text-green-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 inline-block"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.269c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.783 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 11.269h-3v-5.604c0-1.337-.026-3.061-1.868-3.061-1.869 0-2.156 1.46-2.156 2.97v5.695h-3v-10h2.885v1.367h.042c.402-.76 1.384-1.563 2.848-1.563 3.047 0 3.611 2.006 3.611 4.617v5.579z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/corpsystem"
            className="text-green-700 hover:text-green-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="17"
                cy="7"
                r="1.5"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}