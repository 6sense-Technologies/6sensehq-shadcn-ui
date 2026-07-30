import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { ProgressDemoExample } from "@/components/examples/base/progress-demo"
import { ProgressLabelExample } from "@/components/examples/base/progress-label"
import { ProgressControlledExample } from "@/components/examples/base/progress-controlled"
import { ProgressRtlExample } from "@/components/examples/base/progress-rtl"

export const metadata: Metadata = {
  title: "Progress",
  description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("progress")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="text-muted-foreground text-lg">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ProgressDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Label</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ProgressLabelExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Controlled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ProgressControlledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ProgressRtlExample />
        </div>
      </section>
    </div>
  )
}
