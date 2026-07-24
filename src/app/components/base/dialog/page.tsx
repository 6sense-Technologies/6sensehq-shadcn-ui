import type { Metadata } from "next"

import { DialogDemoExample } from "@/components/examples/base/dialog-demo"
import { DialogCloseButtonExample } from "@/components/examples/base/dialog-close-button"
import { DialogNoCloseButtonExample } from "@/components/examples/base/dialog-no-close-button"
import { DialogStickyFooterExample } from "@/components/examples/base/dialog-sticky-footer"
import { DialogScrollableContentExample } from "@/components/examples/base/dialog-scrollable-content"
import { DialogRtlExample } from "@/components/examples/base/dialog-rtl"

export const metadata: Metadata = {
  title: "Dialog",
  description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dialog</h1>
        <p className="text-muted-foreground text-lg">A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DialogDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom Close Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DialogCloseButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">No Close Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DialogNoCloseButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sticky Footer</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DialogStickyFooterExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Scrollable Content</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DialogScrollableContentExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DialogRtlExample />
        </div>
      </section>
    </div>
  )
}
