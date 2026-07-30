import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { MessageScrollerDemoExample } from "@/components/examples/base/message-scroller-demo"
import { MessageScrollerAnchoringExample } from "@/components/examples/base/message-scroller-anchoring"
import { MessageScrollerGroupChatExample } from "@/components/examples/base/message-scroller-group-chat"
import { MessageScrollerPreviousContextExample } from "@/components/examples/base/message-scroller-previous-context"
import { MessageScrollerStreamingExample } from "@/components/examples/base/message-scroller-streaming"
import { MessageScrollerOpeningPositionExample } from "@/components/examples/base/message-scroller-opening-position"
import { MessageScrollerLoadHistoryExample } from "@/components/examples/base/message-scroller-load-history"
import { MessageScrollerAnimationExample } from "@/components/examples/base/message-scroller-animation"
import { MessageScrollerCommandsExample } from "@/components/examples/base/message-scroller-commands"
import { MessageScrollerVisibilityExample } from "@/components/examples/base/message-scroller-visibility"
import { MessageScrollerScrollableExample } from "@/components/examples/base/message-scroller-scrollable"

export const metadata: Metadata = {
  title: "Message Scroller",
  description: "A chat scroll container that anchors turns, opens saved transcripts, follows streamed responses, loads history without jumping, and jumps to any message.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("message-scroller")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Message Scroller</h1>
        <p className="text-muted-foreground text-lg">A chat scroll container that anchors turns, opens saved transcripts, follows streamed responses, loads history without jumping, and jumps to any message.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerAnchoringExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerGroupChatExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerPreviousContextExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerStreamingExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerOpeningPositionExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerLoadHistoryExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerAnimationExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerCommandsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerVisibilityExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageScrollerScrollableExample />
        </div>
      </section>
    </div>
  )
}
