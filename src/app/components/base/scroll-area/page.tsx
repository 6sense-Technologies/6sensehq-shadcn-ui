import type { Metadata } from "next"

import { ScrollAreaDemoExample } from "@/components/examples/base/scroll-area-demo"
import { ScrollAreaHorizontalDemoExample } from "@/components/examples/base/scroll-area-horizontal-demo"
import { ScrollAreaRtlExample } from "@/components/examples/base/scroll-area-rtl"

export const metadata: Metadata = {
  title: "Scroll Area",
  description: "Augments native scroll functionality for custom, cross-browser styling.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-muted-foreground text-lg">Augments native scroll functionality for custom, cross-browser styling.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ScrollAreaDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Horizontal</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ScrollAreaHorizontalDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ScrollAreaRtlExample />
        </div>
      </section>
    </div>
  )
}
