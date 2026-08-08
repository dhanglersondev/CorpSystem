
import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  actions?: ReactNode; // Permite inserir botões, menus ou outros elementos de ação
  backgroundClassName?: string; // Permite customizar o background
  align?: "left" | "center"; // Controle de alinhamento
}

export default function Header({
  title,
  subtitle,
  icon,
  actions,
  backgroundClassName = "bg-gray-200",
  align = "left",
}: HeaderProps) {
  return (
    <header
      className={`flex ${
        align === "center" ? "justify-center text-center" : "items-center"
      } gap-4 ${backgroundClassName} p-6 rounded-lg mb-10 border border-gray-200 shadow-sm`}
    >
      {/* Optional Icon */}
      {icon && (
        <div className="flex-shrink-0 mr-2 flex items-center justify-center">
          {icon}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight tracking-normal truncate">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-gray-500 text-base font-normal whitespace-pre-line">
            {subtitle}
          </p>
        )}
        {/* Uma linha de destaque abaixo do título */}
        <div className="mt-2 h-0.5 w-12 bg-emerald-300 rounded transition-colors duration-500" />
      </div>

      {/* Optional actions on header (botões, menus, etc) */}
      {actions && (
        <div className="flex-shrink-0 flex items-center gap-2 ml-2">{actions}</div>
      )}
    </header>
  );
}