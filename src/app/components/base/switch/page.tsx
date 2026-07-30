import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { SwitchDemoExample } from "@/components/examples/base/switch-demo"
import { SwitchDescriptionExample } from "@/components/examples/base/switch-description"
import { SwitchChoiceCardExample } from "@/components/examples/base/switch-choice-card"
import { SwitchDisabledExample } from "@/components/examples/base/switch-disabled"
import { SwitchInvalidExample } from "@/components/examples/base/switch-invalid"
import { SwitchSizesExample } from "@/components/examples/base/switch-sizes"
import { SwitchRtlExample } from "@/components/examples/base/switch-rtl"

export const metadata: Metadata = {
  title: "Switch",
  description: "A control that allows the user to toggle between checked and not checked.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("switch")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="text-muted-foreground text-lg">A control that allows the user to toggle between checked and not checked.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Description</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchDescriptionExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Choice Card</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchChoiceCardExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchSizesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SwitchRtlExample />
        </div>
      </section>
    </div>
  )
}
