import type { Metadata } from "next"

import { ResizableDemoExample } from "@/components/examples/base/resizable-demo"
import { ResizableVerticalExample } from "@/components/examples/base/resizable-vertical"
import { ResizableHandleExample } from "@/components/examples/base/resizable-handle"
import { ResizableRtlExample } from "@/components/examples/base/resizable-rtl"

export const metadata: Metadata = {
  title: "Resizable",
  description: "Accessible resizable panel groups and layouts with keyboard support.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="text-muted-foreground text-lg">Accessible resizable panel groups and layouts with keyboard support.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ResizableDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Vertical</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ResizableVerticalExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Handle</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ResizableHandleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ResizableRtlExample />
        </div>
      </section>
    </div>
  )
}
