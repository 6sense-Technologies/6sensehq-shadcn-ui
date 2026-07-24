import type { Metadata } from "next"

import { DataTableDemoExample } from "@/components/examples/base/data-table-demo"
import { DataTableRtlExample } from "@/components/examples/base/data-table-rtl"

export const metadata: Metadata = {
  title: "Data Table",
  description: "Powerful table and datagrids built using TanStack Table.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Data Table</h1>
        <p className="text-muted-foreground text-lg">Powerful table and datagrids built using TanStack Table.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DataTableDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DataTableRtlExample />
        </div>
      </section>
    </div>
  )
}
