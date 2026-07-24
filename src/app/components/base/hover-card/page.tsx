import type { Metadata } from "next"

import { HoverCardDemoExample } from "@/components/examples/base/hover-card-demo"
import { HoverCardSidesExample } from "@/components/examples/base/hover-card-sides"
import { HoverCardRtlExample } from "@/components/examples/base/hover-card-rtl"

export const metadata: Metadata = {
  title: "Hover Card",
  description: "For sighted users to preview content available behind a link.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Hover Card</h1>
        <p className="text-muted-foreground text-lg">For sighted users to preview content available behind a link.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <HoverCardDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <HoverCardDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sides</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <HoverCardSidesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <HoverCardRtlExample />
        </div>
      </section>
    </div>
  )
}
