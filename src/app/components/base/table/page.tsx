import type { Metadata } from "next"

import { TableDemoExample } from "@/components/examples/base/table-demo"
import { TableFooterExample } from "@/components/examples/base/table-footer"
import { TableActionsExample } from "@/components/examples/base/table-actions"
import { TableRtlExample } from "@/components/examples/base/table-rtl"

export const metadata: Metadata = {
  title: "Table",
  description: "A responsive table component.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="text-muted-foreground text-lg">A responsive table component.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TableDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Footer</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TableFooterExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Actions</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TableActionsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TableRtlExample />
        </div>
      </section>
    </div>
  )
}
