import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { PaginationDemoExample } from "@/components/examples/base/pagination-demo"
import { PaginationSimpleExample } from "@/components/examples/base/pagination-simple"
import { PaginationIconsOnlyExample } from "@/components/examples/base/pagination-icons-only"
import { PaginationRtlExample } from "@/components/examples/base/pagination-rtl"

export const metadata: Metadata = {
  title: "Pagination",
  description: "Pagination with page navigation, next and previous links.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("pagination")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
        <p className="text-muted-foreground text-lg">Pagination with page navigation, next and previous links.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PaginationDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Simple</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PaginationSimpleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icons Only</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PaginationIconsOnlyExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PaginationRtlExample />
        </div>
      </section>
    </div>
  )
}
