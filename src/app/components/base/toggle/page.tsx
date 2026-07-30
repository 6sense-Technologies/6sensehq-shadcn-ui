import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { ToggleDemoExample } from "@/components/examples/base/toggle-demo"
import { ToggleOutlineExample } from "@/components/examples/base/toggle-outline"
import { ToggleTextExample } from "@/components/examples/base/toggle-text"
import { ToggleSizesExample } from "@/components/examples/base/toggle-sizes"
import { ToggleDisabledExample } from "@/components/examples/base/toggle-disabled"
import { ToggleRtlExample } from "@/components/examples/base/toggle-rtl"

export const metadata: Metadata = {
  title: "Toggle",
  description: "A two-state button that can be either on or off.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("toggle")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="text-muted-foreground text-lg">A two-state button that can be either on or off.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Outline</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleOutlineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Text</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleTextExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleSizesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleRtlExample />
        </div>
      </section>
    </div>
  )
}
