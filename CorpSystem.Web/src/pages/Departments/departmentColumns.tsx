import type { DataTableColumn } from "../../components/DataTable"

// Inline Department type definition since '../../types/department' module is missing.
export type Department = {
  sigla: string
  name: string
  active: boolean
}

export const departmentColumns: DataTableColumn<Department>[] = [
  {
    key: "sequence",
    header: "#",
    render: (_, index) => index + 1,
  },
  {
    key: "sigla",
    header: "Sigla",
  },
  {
    key: "name",
    header: "Nome",
  },
  {
    key: "active",
    header: "Status",
    render: (department) => (
      <span
        className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
        style={{
          backgroundColor: department.active
            ? "var(--color-verde-claro)"
            : "var(--color-vermelho-claro)", // Use vermellho menos intenso
          color: department.active
            ? "var(--color-verde-principal)"
            : "var(--color-vermelho-principal)",
        }}
      >
        {department.active ? "Ativo" : "Inativo"}
      </span>
    ),
  },
]
