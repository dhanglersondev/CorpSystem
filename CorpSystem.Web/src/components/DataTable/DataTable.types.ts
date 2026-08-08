export type DataTableColumn<T> = {
    key: string
    header: string
    render?: (item: T, index: number) => React.ReactNode
  }
  
  export type DataTableProps<T> = {
    data: T[]
    columns: DataTableColumn<T>[]
    emptyMessage?: string
  }