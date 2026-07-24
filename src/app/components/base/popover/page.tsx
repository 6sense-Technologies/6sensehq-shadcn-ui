import type { Metadata } from "next"

import { PopoverDemoExample } from "@/components/examples/base/popover-demo"
import { PopoverBasicExample } from "@/components/examples/base/popover-basic"
import { PopoverAlignmentsExample } from "@/components/examples/base/popover-alignments"
import { PopoverFormExample } from "@/components/examples/base/popover-form"
import { PopoverRtlExample } from "@/components/examples/base/popover-rtl"

export const metadata: Metadata = {
  title: "Popover",
  description: "Displays rich content in a portal, triggered by a button.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Popover</h1>
        <p className="text-muted-foreground text-lg">Displays rich content in a portal, triggered by a button.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PopoverDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PopoverBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Align</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PopoverAlignmentsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Form</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PopoverFormExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <PopoverRtlExample />
        </div>
      </section>
    </div>
  )
}
