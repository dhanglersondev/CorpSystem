import type { DataTableColumn } from "../../components/DataTable"

// Inline Position type definition
export type Position = {
  name: string
  especializacao: string
  departamento: string
  active: boolean
}

export const positionColumns: DataTableColumn<Position>[] = [
  {
    key: "sequence",
    header: "#",
    render: (_, index) => index + 1,
  },
  {
    key: "name",
    header: "Cargo",
  },
  {
    key: "especializacao",
    header: "Especialização",
  },
  {
    key: "departamento",
    header: "Departamento",
  },
  {
    key: "active",
    header: "Status",
    render: (position) => (
      <span
        className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
        style={{
          backgroundColor: position.active
            ? "var(--color-verde-claro)"
            : "var(--color-vermelho-claro)",
          color: position.active
            ? "var(--color-verde-principal)"
            : "var(--color-vermelho-principal)",
        }}
      >
        {position.active ? "Ativo" : "Inativo"}
      </span>
    ),
  },
]