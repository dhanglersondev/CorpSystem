import type { DataTableProps } from "./DataTable.types";
import { useState } from "react";

export default function DataTable<T>({
  data,
  columns,
  emptyMessage = "Nenhum registro encontrado.",
}: DataTableProps<T>) {
  // Estado para linha selecionada e linha sob hover
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Determina estado de ativo/inativo, retorna true/false/null
  const getActiveState = (item: any) =>
    typeof item?.active === "boolean" ? item.active : null;

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-separate border-spacing-0">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700"
                  style={{ background: "inherit" }}
                  scope="col"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-8 text-center text-sm text-gray-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const isSelected = selectedRow === index;
                const isHovered = hoveredRow === index;
                const activeState = getActiveState(item);

                // Visual refinado para linhas selecionadas e hover
                let rowStyle: React.CSSProperties = {};
                let extraClass = "";

                if (isSelected) {
                  // Linha selecionada: verde/vermelho/cinza suave + destaque lateral
                  rowStyle = {
                    background:
                      activeState === true
                        ? "var(--color-verde-claro, #bbf7d0)"
                        : activeState === false
                        ? "var(--color-vermelho-claro, #fecaca)"
                        : "#f3f4f6",
                    color:
                      activeState === true
                        ? "var(--color-verde-principal, #15803d)"
                        : activeState === false
                        ? "var(--color-vermelho-principal, #dc2626)"
                        : undefined,
                    borderLeft: `4px solid ${
                      activeState === true
                        ? "var(--color-verde-claro, #bbf7d0)"
                        : activeState === false
                        ? "var(--color-vermelho-claro, #fecaca)"
                        : "transparent"
                    }`,
                  };
                  extraClass = "font-semibold";
                } else if (isHovered) {
                  // Linha em hover: tom ainda mais claro, menos saturação
                  rowStyle = {
                    background:
                      activeState === true
                        ? "var(--color-verde-hover, #ecfdf5)"
                        : activeState === false
                        ? "var(--color-vermelho-hover, #fef2f2)"
                        : "#f1f5f9",
                  };
                }

                return (
                  <tr
                    key={index}
                    style={rowStyle}
                    className={`transition-colors duration-150 cursor-pointer ${extraClass}`}
                    tabIndex={0}
                    onClick={() => setSelectedRow(index)}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-5 py-4 text-sm align-middle"
                        style={{
                          // Remove cinza do texto em linhas selecionadas (já colorido)
                          color:
                            isSelected && (activeState === true || activeState === false)
                              ? rowStyle.color
                              : undefined,
                        }}
                      >
                        {column.render
                          ? column.render(item, index)
                          : String(
                              (item as Record<string, unknown>)[column.key] ?? ""
                            )}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}