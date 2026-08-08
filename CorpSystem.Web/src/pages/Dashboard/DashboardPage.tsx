import {
  BuildingOffice2Icon,
  BriefcaseIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    key: "departamentos",
    label: "Departamentos",
    icon: <BuildingOffice2Icon className="h-9 w-9 text-[var(--color-verde-principal)]" />,
    value: 7,
    bg: "bg-[var(--color-verde-principal)]/10",
    text: "text-[var(--color-verde-principal)]",
  },
  {
    key: "cargos",
    label: "Cargos",
    icon: <BriefcaseIcon className="h-9 w-9 text-[var(--color-verde-principal)]" />,
    value: 15,
    bg: "bg-[var(--color-verde-principal)]/10",
    text: "text-[var(--color-verde-principal)]",
  },
  {
    key: "funcionarios",
    label: "Funcionários",
    icon: <UsersIcon className="h-9 w-9 text-[var(--color-verde-principal)]" />,
    value: 38,
    bg: "bg-[var(--color-verde-principal)]/10",
    text: "text-[var(--color-verde-principal)]",
  },
];

const LISTA_RECENTES = [
  {
    title: "Novo departamento criado",
    desc: "O departamento ‘Inovação’ foi cadastrado.",
    when: "Há 40 min",
  },
  {
    title: "Novo cargo incluído",
    desc: "Analista de Dados incluído no sistema.",
    when: "Há 2 horas",
  },
  {
    title: "Funcionário adicionado",
    desc: "Clara Lima registrada no RH.",
    when: "Ontem",
  },
];

export default function DashboardPage() {
  const now = new Date();
  const saudacao = () => {
    const h = now.getHours();
    if (h < 12) return "Bom dia";
    if (h < 18) return "Boa tarde";
    return "Boa noite";
  };
  const ultimaAtualizacao = `${now.toLocaleDateString("pt-BR")} ${now.toLocaleTimeString("pt-BR")}`;

  return (
    <main className="max-w-5xl mx-auto px-2 sm:px-6 py-8 sm:py-12">
      <header className="mb-8 flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-[var(--color-verde-principal)] mb-1">
            {saudacao()}, usuário!
          </h1>
          <p className="text-gray-500 font-medium">
            Bem-vindo ao painel administrativo do CorpSystem.
          </p>
        </div>
        <span className="inline-block text-xs rounded bg-[var(--color-verde-principal)]/90 px-3 py-1 text-white font-medium mt-3 sm:mt-0">
          Atualizado em: {ultimaAtualizacao}
        </span>
      </header>

      {/* Cards de Destaque */}
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.key}
              className={`flex flex-col items-center justify-center rounded-xl shadow-sm border border-[var(--color-borda)] ${card.bg} p-5`}
            >
              <div className="flex flex-row items-center gap-3">
                <span className={`text-lg sm:text-xl font-bold tracking-tight ${card.text}`}>{card.value}</span>
                <span>{card.icon}</span>
              </div>
              <span className={`font-medium text-sm sm:text-base mt-2 ${card.text}`}>{card.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Detalhes Rápidos e Atividades Recentes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Box: Resumo de ativos/inativos */}
        <div className="bg-white rounded-xl shadow border border-[var(--color-borda)] p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-[var(--color-verde-principal)] mb-4">
            Resumo de Status
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Departamentos ativos</span>
              <span className="font-bold text-[var(--color-verde-principal)]">5</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Departamentos inativos</span>
              <span className="font-bold text-red-500">2</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Cargos ativos</span>
              <span className="font-bold text-[var(--color-verde-principal)]">12</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Cargos inativos</span>
              <span className="font-bold text-red-500">3</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Funcionários ativos</span>
              <span className="font-bold text-[var(--color-verde-principal)]">34</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Funcionários inativos</span>
              <span className="font-bold text-red-500">4</span>
            </div>
          </div>
        </div>

        {/* Box: Últimas Atividades */}
        <div className="bg-white rounded-xl shadow border border-[var(--color-borda)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-verde-principal)] mb-4">
            Últimas Atividades
          </h2>
          <ul className="divide-y divide-[var(--color-borda)]">
            {LISTA_RECENTES.map((item, idx) => (
              <li key={idx} className="py-3 flex flex-col">
                <span className="font-medium text-[var(--color-verde-secundario)]">{item.title}</span>
                <span className="text-gray-600 text-sm">{item.desc}</span>
                <span className="text-xs text-gray-400 mt-1">{item.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}