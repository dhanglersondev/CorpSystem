import { useRef } from "react"
import Form from "../../components/Form/Form"
import FormField from "../../components/Form/FormField"
import Input from "../../components/Form/Input"
import Select from "../../components/Form/Select"
import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import { PlusIcon, PencilIcon, TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

// Usando as variáveis CSS definidas em src/index.css
const statusOptions = [
  { value: 'ativo', label: 'Ativo' },
  { value: 'inativo', label: 'Inativo' },
]

const departamentoOptions = [
  { value: 'dp', label: 'Departamento Pessoal' },
  { value: 'rh', label: 'Recursos Humanos' },
  { value: 'fin', label: 'Financeiro' },
  { value: 'ope', label: 'Operações' },
]

export default function CargosPage() {
  const nomeInputRef = useRef<HTMLInputElement>(null)

  const handleNovoClick = () => {
    nomeInputRef.current?.focus()
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:p-8 bg-[var(--color-branco)] rounded-md shadow-sm">
      <Header
        title="Cargos"
        subtitle="Gerencie os cargos da sua organização"
        icon={
          <div className="flex-shrink-0">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <rect x="12" y="18" width="32" height="20" rx="4" fill="var(--color-verde-principal)" />
              <circle cx="28" cy="28" r="8" fill="var(--color-verde-secundario)" />
              <rect x="22" y="10" width="12" height="6" rx="2" fill="var(--color-verde-claro)" />
            </svg>
          </div>
        }
      />
      <Form>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="w-full flex-1">
            <FormField label="Cargo" htmlFor="nomeCargo" required>
              <Input
                id="nomeCargo"
                name="nomeCargo"
                placeholder="Nome do cargo"
                className="bg-[var(--color-branco)] border border-[var(--color-borda)] text-gray-900 rounded focus:border-[var(--color-verde-principal)] focus:ring-1 focus:ring-[var(--color-verde-principal)] transition-all"
                // @ts-expect-error
                ref={nomeInputRef as any}
              />
            </FormField>
          </div>
          <div className="w-full flex-1">
            <FormField label="Especialização" htmlFor="especializacao" required>
              <Input
                id="especializacao"
                name="especializacao"
                placeholder="Especialização"
                className="bg-[var(--color-branco)] border border-[var(--color-borda)] text-gray-900 rounded focus:border-[var(--color-verde-principal)] focus:ring-1 focus:ring-[var(--color-verde-principal)] transition-all"
              />
            </FormField>
          </div>
          <div className="w-full sm:w-40">
            <FormField label="Departamento" htmlFor="departamento" required>
              <Select
                id="departamento"
                name="departamento"
                options={[
                  { value: '', label: 'Selecione' },
                  ...departamentoOptions
                ]}
                defaultValue=""
              />
            </FormField>
          </div>
          <div className="w-full sm:w-36">
            <FormField label="Status" htmlFor="status">
              <Select
                id="status"
                name="status"
                options={statusOptions}
                defaultValue="ativo"
              />
            </FormField>
          </div>
        </div>
        {/* Botões somente ícones no mobile, mostram texto no sm+ */}
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
    </div>
  )
}