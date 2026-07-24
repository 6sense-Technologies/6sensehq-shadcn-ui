import type { Metadata } from "next"

import { KbdDemoExample } from "@/components/examples/base/kbd-demo"
import { KbdGroupExample } from "@/components/examples/base/kbd-group"
import { KbdButtonExample } from "@/components/examples/base/kbd-button"
import { KbdTooltipExample } from "@/components/examples/base/kbd-tooltip"
import { KbdInputGroupExample } from "@/components/examples/base/kbd-input-group"
import { KbdRtlExample } from "@/components/examples/base/kbd-rtl"

export const metadata: Metadata = {
  title: "Kbd",
  description: "Used to display textual user input from keyboard.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Kbd</h1>
        <p className="text-muted-foreground text-lg">Used to display textual user input from keyboard.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <KbdDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <KbdGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <KbdButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tooltip</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <KbdTooltipExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <KbdInputGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <KbdRtlExample />
        </div>
      </section>
    </div>
  )
}
