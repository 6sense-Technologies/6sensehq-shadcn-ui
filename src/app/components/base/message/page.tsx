import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { MessageDemoExample } from "@/components/examples/base/message-demo"
import { MessageAvatarExample } from "@/components/examples/base/message-avatar"
import { MessageGroupExample } from "@/components/examples/base/message-group"
import { MessageHeaderFooterExample } from "@/components/examples/base/message-header-footer"
import { MessageActionsExample } from "@/components/examples/base/message-actions"
import { MessageAttachmentExample } from "@/components/examples/base/message-attachment"

export const metadata: Metadata = {
  title: "Message",
  description: "Displays a message in a conversation, with optional avatar, header, footer, and alignment.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("message")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Message</h1>
        <p className="text-muted-foreground text-lg">Displays a message in a conversation, with optional avatar, header, footer, and alignment.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageAvatarExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Header and Footer</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageHeaderFooterExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Actions</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageActionsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Attachment</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MessageAttachmentExample />
        </div>
      </section>
    </div>
  )
}
