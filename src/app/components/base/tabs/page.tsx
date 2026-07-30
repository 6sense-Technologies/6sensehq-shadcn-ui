import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { TabsDemoExample } from "@/components/examples/base/tabs-demo"
import { TabsLineExample } from "@/components/examples/base/tabs-line"
import { TabsVerticalExample } from "@/components/examples/base/tabs-vertical"
import { TabsDisabledExample } from "@/components/examples/base/tabs-disabled"
import { TabsIconsExample } from "@/components/examples/base/tabs-icons"
import { TabsPillExample } from "@/components/examples/base/tabs-pill"
import { TabsPillStackedExample } from "@/components/examples/base/tabs-pill-stacked"
import { TabsPillInvertedExample } from "@/components/examples/base/tabs-pill-inverted"
import { TabsPillBadgeExample } from "@/components/examples/base/tabs-pill-badge"
import { TabsUnderlineExample } from "@/components/examples/base/tabs-underline-custom"
import { TabsRtlExample } from "@/components/examples/base/tabs-rtl"

export const metadata: Metadata = {
  title: "Tabs",
  description: "A set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("tabs")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="text-muted-foreground text-lg">A set of layered sections of content—known as tab panels—that are displayed one at a time.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Line</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsLineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Vertical</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsVerticalExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pill</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsPillExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pill Stacked</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsPillStackedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pill Inverted</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsPillInvertedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pill Badge</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsPillBadgeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Underline</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsUnderlineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TabsRtlExample />
        </div>
      </section>
    </div>
  )
}
