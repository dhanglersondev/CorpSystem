import { useRef, useState } from "react";
import Form from "../../components/Form/Form";
import FormField from "../../components/Form/FormField";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import DataTable from "../../components/DataTable";
import { PlusIcon, PencilIcon, TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import {
  statusOptions,
  cargoOptions,
  departamentoOptions,
  employeesColumns,
  type Employee,
} from "./employeesColumns";

// Dados mock para demonstração inicial
const initialEmployees: Employee[] = [
  {
    id: 1,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    cpf: "345.321.654-00",
    dataContratacao: "2023-01-15",
    status: "ativo",
    cargo: "analista",
    departamento: "rh",
    active: true,
  },
  {
    id: 2,
    nome: "João Silva",
    email: "joao.silva@email.com",
    cpf: "123.456.789-00",
    dataContratacao: "2022-10-01",
    status: "inativo",
    cargo: "gestor",
    departamento: "fin",
    active: false,
  },
];

export default function EmployeesPage() {
  const nomeInputRef = useRef<HTMLInputElement>(null);
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  // Exemplo: foco ao clicar em "Novo"
  const handleNovoClick = () => {
    nomeInputRef.current?.focus();
  };

  // [Opcional] Eventos dos botões, para completar futuramente

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:p-8">
      <Header
        title="Funcionários"
        subtitle="Gerencie o cadastro de funcionários na sua organização"
        icon={
          <div className="flex-shrink-0">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              {/* Ícone representando funcionários */}
              <circle cx="28" cy="20" r="10" fill="var(--color-verde-principal)" />
              <rect x="10" y="36" width="36" height="14" rx="7" fill="var(--color-verde-secundario)" />
              <ellipse cx="42" cy="22" rx="6" ry="6" fill="var(--color-verde-claro)" opacity="0.7" />
            </svg>
          </div>
        }
      />
      <Form>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="w-full flex-1">
            <FormField label="Nome" htmlFor="nome" required>
              <Input
                id="nome"
                name="nome"
                placeholder="Digite o nome completo"
                // @ts-expect-error
                ref={nomeInputRef as any}
              />
            </FormField>
          </div>
          <div className="w-full flex-1">
            <FormField label="Email" htmlFor="email" required>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@dominio.com"
              />
            </FormField>
          </div>
          <div className="w-full sm:w-40">
            <FormField label="CPF" htmlFor="cpf" required>
              <Input
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                maxLength={14}
                pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                inputMode="numeric"
              />
            </FormField>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="w-full sm:w-44">
            <FormField label="Data de Contratação" htmlFor="dataContratacao" required>
              <Input
                id="dataContratacao"
                name="dataContratacao"
                type="date"
              />
            </FormField>
          </div>
          <div className="w-full sm:w-40">
            <FormField label="Status" htmlFor="status">
              <Select
                id="status"
                name="status"
                options={statusOptions}
                defaultValue="ativo"
              />
            </FormField>
          </div>
          <div className="w-full flex-1">
            <FormField label="Cargo" htmlFor="cargo" required>
              <Select
                id="cargo"
                name="cargo"
                options={cargoOptions}
                defaultValue=""
              />
            </FormField>
          </div>
          <div className="w-full flex-1">
            <FormField label="Departamento" htmlFor="departamento" required>
              <Select
                id="departamento"
                name="departamento"
                options={departamentoOptions}
                defaultValue=""
              />
            </FormField>
          </div>
        </div>
        <div className="flex flex-row gap-3 pt-4 sm:justify-center">
          <Button type="button" icon={<PlusIcon />} onClick={handleNovoClick}>
            <span className="hidden sm:inline">Novo</span>
          </Button>
          <Button type="submit" icon={<PencilIcon />}>
            <span className="hidden sm:inline">Inserir</span>
          </Button>
          <Button type="button" icon={<ArrowPathIcon />}>
            <span className="hidden sm:inline">Atualiza</span>
          </Button>
          <Button type="button" icon={<TrashIcon />}>
            <span className="hidden sm:inline">Excluir</span>
          </Button>
        </div>
      </Form>

      {/* Tabela de funcionários */}
      <div className="pt-10">
        <DataTable
          data={employees}
          columns={employeesColumns}
          emptyMessage="Nenhum funcionário cadastrado."
        />
      </div>
    </div>
  );
}