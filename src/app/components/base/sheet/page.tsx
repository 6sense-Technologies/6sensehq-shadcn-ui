import type { Metadata } from "next"

import { SheetDemoExample } from "@/components/examples/base/sheet-demo"
import { SheetSideExample } from "@/components/examples/base/sheet-side"
import { SheetNoCloseButtonExample } from "@/components/examples/base/sheet-no-close-button"
import { SheetRtlExample } from "@/components/examples/base/sheet-rtl"

export const metadata: Metadata = {
  title: "Sheet",
  description: "Extends the Dialog component to display content that complements the main content of the screen.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
        <p className="text-muted-foreground text-lg">Extends the Dialog component to display content that complements the main content of the screen.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SheetDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Side</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SheetSideExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">No Close Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SheetNoCloseButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SheetRtlExample />
        </div>
      </section>
    </div>
  )
}
