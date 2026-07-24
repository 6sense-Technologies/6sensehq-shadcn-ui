import type { Metadata } from "next"

import { CarouselDemoExample } from "@/components/examples/base/carousel-demo"
import { CarouselSizeExample } from "@/components/examples/base/carousel-size"
import { CarouselSpacingExample } from "@/components/examples/base/carousel-spacing"
import { CarouselOrientationExample } from "@/components/examples/base/carousel-orientation"
import { CarouselApiExample } from "@/components/examples/base/carousel-api"
import { CarouselPluginExample } from "@/components/examples/base/carousel-plugin"
import { CarouselRtlExample } from "@/components/examples/base/carousel-rtl"

export const metadata: Metadata = {
  title: "Carousel",
  description: "A carousel with motion and swipe built using Embla.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
        <p className="text-muted-foreground text-lg">A carousel with motion and swipe built using Embla.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sizes</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselSizeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Spacing</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselSpacingExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Orientation</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselOrientationExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">API</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselApiExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Plugins</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselPluginExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CarouselRtlExample />
        </div>
      </section>
    </div>
  )
}
