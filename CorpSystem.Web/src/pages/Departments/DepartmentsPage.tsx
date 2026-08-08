
import { useRef } from "react"
import Form from "../../components/Form/Form"
import FormField from "../../components/Form/FormField"
import Input from "../../components/Form/Input"
import Select from "../../components/Form/Select"
import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import { PlusIcon, PencilIcon, TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

const statusOptions = [
  { value: "ativo", label: "Ativo" },
  { value: "inativo", label: "Inativo" },
]

export default function DepartmentsPage() {
  const siglaInputRef = useRef<HTMLInputElement>(null)

  const handleNovoClick = () => {
    siglaInputRef.current?.focus()
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:p-8">
      <Header
        title="Departamentos"
        subtitle="Gerencie os departamentos da sua organização"
        icon={
          <div className="flex-shrink-0">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <rect x="6" y="16" width="28" height="20" rx="4" fill="var(--color-verde-principal)" />
              <rect x="22" y="6" width="28" height="20" rx="4" fill="var(--color-verde-secundario)" />
              <rect x="16" y="30" width="28" height="20" rx="4" fill="var(--color-verde-claro)" />
              <circle cx="20" cy="26" r="3" fill="var(--color-verde-principal)" />
            </svg>
          </div>
        }
      />
      <Form>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="w-full sm:w-32">
            <FormField label="Sigla" htmlFor="sigla" required>
              <Input
                id="sigla"
                name="sigla"
                maxLength={10}
                placeholder="ABC"
                // @ts-expect-error: TypeScript doesn't allow ref as prop but this works
                ref={siglaInputRef as any}
              />
            </FormField>
          </div>
          <div className="w-full flex-1">
            <FormField label="Departamento" htmlFor="nome" required>
              <Input id="nome" name="nome" placeholder="Nome do departamento" />
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