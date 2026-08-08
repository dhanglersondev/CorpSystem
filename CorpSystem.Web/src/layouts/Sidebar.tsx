import {
  HomeIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink, useNavigate } from 'react-router' // Alterado aqui

import { useCallback } from 'react' // adicionar importação do React se não houver

interface SidebarProps {
  open: boolean
  collapsed: boolean
  onClose: () => void
  onToggleCollapse: () => void
}

const menuItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: HomeIcon,
  },
  {
    label: 'Departamentos',
    path: '/departamentos',
    icon: BuildingOffice2Icon,
  },
  {
    label: 'Cargos',
    path: '/cargos',
    icon: BriefcaseIcon,
  },
  {
    label: 'Funcionários',
    path: '/funcionarios',
    icon: UsersIcon,
  },
]

export default function Sidebar({
  open,
  collapsed,
  onClose,
  onToggleCollapse,
}: SidebarProps) {
  const navigate = useNavigate()

  const handleLogout = useCallback(() => {
    // Adicione aqui lógica adicional de logout se necessário
    navigate('/') // Volta para rota "/"
  }, [navigate])

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40
        flex flex-col
        border-r border-[var(--color-borda)]
        bg-[var(--color-branco)]
        shadow-lg
        transition-all duration-300

        md:static
        md:z-auto
        md:translate-x-0
        md:shadow-none

        ${open ? 'translate-x-0' : '-translate-x-full'}
        ${collapsed ? 'md:w-20' : 'md:w-54'}
        w-64
      `}
    >
      {/* Cabeçalho */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-[var(--color-borda)] px-4">
        {!collapsed && (
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Navegação
          </span>
        )}

        {/* Fechar mobile */}
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-2 text-gray-500 hover:bg-[var(--color-verde-claro)] hover:text-[var(--color-verde-principal)] md:hidden"
          aria-label="Fechar menu"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Recolher / expandir desktop */}
        <button
          type="button"
          onClick={onToggleCollapse}
          className={`
            hidden
            rounded-md
            p-2
            text-[var(--color-verde-principal)]
            transition-colors
            hover:bg-[var(--color-verde-claro)]
            hover:text-[var(--color-verde-secundario)]
            md:flex
            ${collapsed ? 'mx-auto' : ''}
          `}
          title={
            collapsed
              ? 'Expandir menu'
              : 'Recolher menu'
          }
          aria-label={
            collapsed
              ? 'Expandir menu'
              : 'Recolher menu'
          }
        >
          {collapsed ? (
            <ChevronRightIcon className="h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navegação */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                title={collapsed ? item.label : undefined}
                className={({ isActive }) =>
                  `
                  flex items-center
                  rounded-md
                  py-2
                  text-sm font-medium
                  transition-colors

                  ${collapsed ? 'justify-center px-2' : 'gap-3 px-3'}

                  ${
                    isActive
                      ? 'bg-[var(--color-verde-claro)] text-[var(--color-verde-principal)]'
                      : 'text-gray-700 hover:bg-[var(--color-verde-claro)] hover:text-[var(--color-verde-principal)]'
                  }
                  `
                }
              >
                <Icon className="h-5 w-5 shrink-0 text-[var(--color-verde-principal)]" />

                {!collapsed && (
                  <span>{item.label}</span>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>

      {/* Rodapé do Sidebar */}
      <div className="mt-auto border-t border-[var(--color-verde-claro)] px-4 py-3">
        <div className="space-y-2">

          <button
            type="button"
            className={`
              flex rounded-md
              text-gray-600
              transition-colors
              hover:bg-[var(--color-verde-claro)]
              hover:text-[var(--color-verde-principal)]

              ${
                collapsed
                  ? 'mx-auto h-9 w-9 items-center justify-center'
                  : 'w-full items-center gap-3 px-3 py-2 text-sm'
              }
            `}
            title="Tema"
          >
            <SunIcon className="h-5 w-5 shrink-0" />

            {!collapsed && (
              <span>Tema</span>
            )}
          </button>

          <button
            type="button"
            className={`
              flex rounded-md
              text-gray-600
              transition-colors
              hover:bg-[var(--color-verde-claro)]
              hover:text-[var(--color-verde-principal)]

              ${
                collapsed
                  ? 'mx-auto h-9 w-9 items-center justify-center'
                  : 'w-full items-center gap-3 px-3 py-2 text-sm'
              }
            `}
            title="Configurações"
          >
            <Cog6ToothIcon className="h-5 w-5 shrink-0" />

            {!collapsed && (
              <span>Configurações</span>
            )}
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className={`
              flex rounded-md
              text-red-600
              transition-colors
              hover:bg-red-50
              hover:text-red-800

              ${
                collapsed
                  ? 'mx-auto h-9 w-9 items-center justify-center'
                  : 'w-full items-center gap-3 px-3 py-2 text-sm'
              }
            `}
            title="Logout"
          >
            {/* Ícone de logout vermelho */}
            <svg
              className="h-5 w-5 shrink-0 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-3.75-3h9m0 0l-3-3m3 3l-3 3"
              />
            </svg>
            {!collapsed && (
              <span>Logout</span>
            )}
          </button>

        </div>
  
      </div>
    </aside>
  )
}