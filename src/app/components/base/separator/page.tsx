import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { SeparatorDemoExample } from "@/components/examples/base/separator-demo"
import { SeparatorVerticalExample } from "@/components/examples/base/separator-vertical"
import { SeparatorMenuExample } from "@/components/examples/base/separator-menu"
import { SeparatorListExample } from "@/components/examples/base/separator-list"
import { SeparatorRtlExample } from "@/components/examples/base/separator-rtl"

export const metadata: Metadata = {
  title: "Separator",
  description: "Visually or semantically separates content.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("separator")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
        <p className="text-muted-foreground text-lg">Visually or semantically separates content.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SeparatorDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Vertical</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SeparatorVerticalExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Menu</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SeparatorMenuExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">List</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SeparatorListExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SeparatorRtlExample />
        </div>
      </section>
    </div>
  )
}
