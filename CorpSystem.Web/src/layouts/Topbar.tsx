import {
  Bars3Icon,
  XMarkIcon,
  BriefcaseIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

interface TopbarProps {
  sidebarOpen: boolean
  onMenuClick: () => void
}

export default function Topbar({
  sidebarOpen,
  onMenuClick,
}: TopbarProps) {
  return (
    <header className="h-16 shrink-0 border-b border-[var(--color-borda)] bg-[var(--color-branco)]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          {/* Botão mobile */}
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-md p-2 text-gray-600 hover:bg-[var(--color-verde-claro)] hover:text-[var(--color-verde-principal)] md:hidden"
            aria-label={
              sidebarOpen
                ? 'Fechar menu'
                : 'Abrir menu'
            }
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          <div className="bg-[var(--color-verde-claro)] p-2 rounded-full">
            <BriefcaseIcon className="h-6 w-6 text-[var(--color-verde-principal)]" />
          </div>
          <span className="text-lg font-bold text-gray-800">
            CorpSystem
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Sino de notificações */}
          <button
            type="button"
            className="relative rounded-full p-2 text-gray-600 hover:bg-[var(--color-verde-claro)] hover:text-[var(--color-verde-principal)] focus:outline-none transition-colors"
            title="Notificações"
            aria-label="Notificações"
          >
            <BellIcon className="h-6 w-6" />
            {/* Badge de notificação (exemplo, pode ser removido ou dinâmico) */}
            <span className="absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 rounded-full bg-[var(--color-verde-principal)]" />
          </button>
          {/* Perfil de usuário */}
          <div className="flex items-center gap-2">
            <div className="bg-[var(--color-verde-claro)] rounded-full p-1">
              <UserCircleIcon className="h-7 w-7 text-[var(--color-verde-principal)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-800">
                Usuário
              </span>
              <span className="text-xs text-gray-400">
                Administrador
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}