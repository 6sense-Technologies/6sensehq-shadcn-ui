import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { SliderDemoExample } from "@/components/examples/base/slider-demo"
import { SliderRangeExample } from "@/components/examples/base/slider-range"
import { SliderMultipleExample } from "@/components/examples/base/slider-multiple"
import { SliderVerticalExample } from "@/components/examples/base/slider-vertical"
import { SliderControlledExample } from "@/components/examples/base/slider-controlled"
import { SliderDisabledExample } from "@/components/examples/base/slider-disabled"
import { SliderRtlExample } from "@/components/examples/base/slider-rtl"

export const metadata: Metadata = {
  title: "Slider",
  description: "An input where the user selects a value from within a given range.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("slider")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
        <p className="text-muted-foreground text-lg">An input where the user selects a value from within a given range.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Range</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderRangeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Multiple Thumbs</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderMultipleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Vertical</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderVerticalExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Controlled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderControlledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SliderRtlExample />
        </div>
      </section>
    </div>
  )
}
