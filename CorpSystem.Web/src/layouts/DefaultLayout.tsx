import { useState } from 'react'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function DefaultLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-branco)]">
      <Topbar
        sidebarOpen={sidebarOpen}
        onMenuClick={() => setSidebarOpen((open) => !open)}
      />

      <div className="flex min-h-0 flex-1">
        {/* Overlay mobile */}
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
          />
        )}

        <Sidebar
          open={sidebarOpen}
          collapsed={sidebarCollapsed}
          onClose={() => setSidebarOpen(false)}
          onToggleCollapse={() =>
            setSidebarCollapsed((collapsed) => !collapsed)
          }
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <main className="flex-1 p-4 sm:p-6">
            <Outlet />
          </main>

        </div>
      </div>
      <Footer />
    </div>
  )
}