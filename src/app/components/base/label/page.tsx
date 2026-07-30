import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { LabelDemoExample } from "@/components/examples/base/label-demo"
import { FieldDemoExample } from "@/components/examples/base/field-demo"
import { LabelRtlExample } from "@/components/examples/base/label-rtl"

export const metadata: Metadata = {
  title: "Label",
  description: "Renders an accessible label associated with controls.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("label")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-muted-foreground text-lg">Renders an accessible label associated with controls.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <LabelDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Label in Field</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <FieldDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <LabelRtlExample />
        </div>
      </section>
    </div>
  )
}
