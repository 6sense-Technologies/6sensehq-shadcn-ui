import type { Metadata } from "next"

import { BubbleDemoExample } from "@/components/examples/base/bubble-demo"
import { BubbleVariantsExample } from "@/components/examples/base/bubble-variants"
import { BubbleAlignmentExample } from "@/components/examples/base/bubble-alignment"
import { BubbleGroupDemoExample } from "@/components/examples/base/bubble-group-demo"
import { BubbleLinkButtonExample } from "@/components/examples/base/bubble-link-button"
import { BubbleReactionsExample } from "@/components/examples/base/bubble-reactions"
import { BubbleCollapsibleExample } from "@/components/examples/base/bubble-collapsible"
import { BubbleTooltipExample } from "@/components/examples/base/bubble-tooltip"
import { BubblePopoverExample } from "@/components/examples/base/bubble-popover"

export const metadata: Metadata = {
  title: "Bubble",
  description: "Displays conversational content in a message bubble. Supports variants, alignment, grouping, reactions, and collapsible content.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Bubble</h1>
        <p className="text-muted-foreground text-lg">Displays conversational content in a message bubble. Supports variants, alignment, grouping, reactions, and collapsible content.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleVariantsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Alignment</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleAlignmentExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Bubble Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleGroupDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Links and Buttons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleLinkButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Reactions</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleReactionsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Show More / Collapsible</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleCollapsibleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tooltip</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubbleTooltipExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Popover</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BubblePopoverExample />
        </div>
      </section>
    </div>
  )
}
