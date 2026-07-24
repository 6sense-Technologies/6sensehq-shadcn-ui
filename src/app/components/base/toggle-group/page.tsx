import type { Metadata } from "next"

import { ToggleGroupDemoExample } from "@/components/examples/base/toggle-group-demo"
import { ToggleGroupOutlineExample } from "@/components/examples/base/toggle-group-outline"
import { ToggleGroupSizesExample } from "@/components/examples/base/toggle-group-sizes"
import { ToggleGroupSpacingExample } from "@/components/examples/base/toggle-group-spacing"
import { ToggleGroupVerticalExample } from "@/components/examples/base/toggle-group-vertical"
import { ToggleGroupDisabledExample } from "@/components/examples/base/toggle-group-disabled"
import { ToggleGroupFontWeightSelectorExample } from "@/components/examples/base/toggle-group-font-weight-selector"
import { ToggleGroupRtlExample } from "@/components/examples/base/toggle-group-rtl"

export const metadata: Metadata = {
  title: "Toggle Group",
  description: "A set of two-state buttons that can be toggled on or off.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Toggle Group</h1>
        <p className="text-muted-foreground text-lg">A set of two-state buttons that can be toggled on or off.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Outline</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupOutlineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupSizesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Spacing</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupSpacingExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Vertical</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupVerticalExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupFontWeightSelectorExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToggleGroupRtlExample />
        </div>
      </section>
    </div>
  )
}
