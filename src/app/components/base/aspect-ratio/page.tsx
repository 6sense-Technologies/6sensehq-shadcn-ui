import type { Metadata } from "next"

import { AspectRatioDemoExample } from "@/components/examples/base/aspect-ratio-demo"
import { AspectRatioSquareExample } from "@/components/examples/base/aspect-ratio-square"
import { AspectRatioPortraitExample } from "@/components/examples/base/aspect-ratio-portrait"
import { AspectRatioRtlExample } from "@/components/examples/base/aspect-ratio-rtl"

export const metadata: Metadata = {
  title: "Aspect Ratio",
  description: "Displays content within a desired ratio.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="text-muted-foreground text-lg">Displays content within a desired ratio.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AspectRatioDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Square</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AspectRatioSquareExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Portrait</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AspectRatioPortraitExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AspectRatioRtlExample />
        </div>
      </section>
    </div>
  )
}
