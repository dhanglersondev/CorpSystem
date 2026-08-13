import type { DataTableColumn } from "../../components/DataTable";

// Opções de status, cargos e departamentos - padrão igual ao EmployeesPage
export const statusOptions = [
  { value: "ativo", label: "Ativo" },
  { value: "inativo", label: "Inativo" },
];

export const cargoOptions = [
  { value: "", label: "Selecione" },
  { value: "analista", label: "Analista" },
  { value: "gestor", label: "Gestor" },
  { value: "coordenador", label: "Coordenador" },
  { value: "assistente", label: "Assistente" },
];

export const departamentoOptions = [
  { value: "", label: "Selecione" },
  { value: "dp", label: "Departamento Pessoal" },
  { value: "rh", label: "Recursos Humanos" },
  { value: "fin", label: "Financeiro" },
  { value: "ope", label: "Operações" },
];

// Tipo Employee, convergente ao usado no cadastro
export type Employee = {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  dataContratacao: string;
  status: string;
  cargo: string;
  departamento: string;
  active?: boolean; // pode ser usado no DataTable para estilização
};

export const employeesColumns: DataTableColumn<Employee>[] = [
  {
    key: "nome",
    header: "Nome",
  },
  {
    key: "email",
    header: "E-mail",
  },
  {
    key: "cpf",
    header: "CPF",
  },
  {
    key: "dataContratacao",
    header: "Data de Contratação",
    render: (item) =>
      item.dataContratacao
        ? new Date(item.dataContratacao).toLocaleDateString("pt-BR")
        : "",
  },
  {
    key: "status",
    header: "Status",
    render: (item) => {
      const statusOption = statusOptions.find((opt) => opt.value === item.status);
      return (
        <span
          className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor:
              item.status === "ativo"
                ? "var(--color-verde-claro)"
                : "var(--color-vermelho-claro)",
            color:
              item.status === "ativo"
                ? "var(--color-verde-principal)"
                : "var(--color-vermelho-principal)",
          }}
        >
          {statusOption ? statusOption.label : ""}
        </span>
      );
    },
  },
  {
    key: "cargo",
    header: "Cargo",
    render: (item) => {
      const cargoOption = cargoOptions.find((c) => c.value === item.cargo);
      return cargoOption ? cargoOption.label : "";
    },
  },
  {
    key: "departamento",
    header: "Departamento",
    render: (item) => {
      const departamentoOption = departamentoOptions.find((d) => d.value === item.departamento);
      return departamentoOption ? departamentoOption.label : "";
    },
  },
];