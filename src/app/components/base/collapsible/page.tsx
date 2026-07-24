import type { Metadata } from "next"

import { CollapsibleDemoExample } from "@/components/examples/base/collapsible-demo"
import { CollapsibleBasicExample } from "@/components/examples/base/collapsible-basic"
import { CollapsibleSettingsExample } from "@/components/examples/base/collapsible-settings"
import { CollapsibleFileTreeExample } from "@/components/examples/base/collapsible-file-tree"
import { CollapsibleRtlExample } from "@/components/examples/base/collapsible-rtl"

export const metadata: Metadata = {
  title: "Collapsible",
  description: "An interactive component which expands/collapses a panel.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p className="text-muted-foreground text-lg">An interactive component which expands/collapses a panel.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CollapsibleDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CollapsibleBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Settings Panel</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CollapsibleSettingsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">File Tree</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CollapsibleFileTreeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CollapsibleRtlExample />
        </div>
      </section>
    </div>
  )
}
