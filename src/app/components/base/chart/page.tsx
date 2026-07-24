import type { Metadata } from "next"

import { ChartDemoExample } from "@/components/examples/base/chart-demo"
import { ChartExample } from "@/components/examples/base/chart-example"
import { ChartExampleGridExample } from "@/components/examples/base/chart-example-grid"
import { ChartExampleAxisExample } from "@/components/examples/base/chart-example-axis"
import { ChartExampleTooltipExample } from "@/components/examples/base/chart-example-tooltip"
import { ChartExampleLegendExample } from "@/components/examples/base/chart-example-legend"
import { ChartTooltipExample } from "@/components/examples/base/chart-tooltip"
import { ChartRtlExample } from "@/components/examples/base/chart-rtl"

export const metadata: Metadata = {
  title: "Chart",
  description: "Beautiful charts. Built using Recharts. Copy and paste into your apps.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Chart</h1>
        <p className="text-muted-foreground text-lg">Beautiful charts. Built using Recharts. Copy and paste into your apps.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your First Chart</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your First Chart</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartExampleGridExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your First Chart</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartExampleAxisExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your First Chart</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartExampleTooltipExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your First Chart</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartExampleLegendExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tooltip</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartTooltipExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ChartRtlExample />
        </div>
      </section>
    </div>
  )
}
