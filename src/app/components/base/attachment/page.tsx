import type { Metadata } from "next"

import { AttachmentDemoExample } from "@/components/examples/base/attachment-demo"
import { AttachmentImageExample } from "@/components/examples/base/attachment-image"
import { AttachmentStatesExample } from "@/components/examples/base/attachment-states"
import { AttachmentSizesExample } from "@/components/examples/base/attachment-sizes"
import { AttachmentGroupExample } from "@/components/examples/base/attachment-group"
import { AttachmentTriggerExample } from "@/components/examples/base/attachment-trigger"

export const metadata: Metadata = {
  title: "Attachment",
  description: "Displays a file or image attachment with media, metadata, upload state, and actions.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Attachment</h1>
        <p className="text-muted-foreground text-lg">Displays a file or image attachment with media, metadata, upload state, and actions.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AttachmentDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Image</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AttachmentImageExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">States</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AttachmentStatesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sizes</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AttachmentSizesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AttachmentGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Trigger</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AttachmentTriggerExample />
        </div>
      </section>
    </div>
  )
}
