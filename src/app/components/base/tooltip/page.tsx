import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { TooltipDemoExample } from "@/components/examples/base/tooltip-demo"
import { TooltipSidesExample } from "@/components/examples/base/tooltip-sides"
import { TooltipKeyboardExample } from "@/components/examples/base/tooltip-keyboard"
import { TooltipDisabledExample } from "@/components/examples/base/tooltip-disabled"
import { TooltipRtlExample } from "@/components/examples/base/tooltip-rtl"

export const metadata: Metadata = {
  title: "Tooltip",
  description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("tooltip")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-muted-foreground text-lg">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TooltipDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Side</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TooltipSidesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Keyboard Shortcut</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TooltipKeyboardExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TooltipDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TooltipRtlExample />
        </div>
      </section>
    </div>
  )
}
