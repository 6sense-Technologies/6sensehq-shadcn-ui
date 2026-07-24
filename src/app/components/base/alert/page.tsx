import type { Metadata } from "next"

import { AlertDemoExample } from "@/components/examples/base/alert-demo"
import { AlertBasicExample } from "@/components/examples/base/alert-basic"
import { AlertDestructiveExample } from "@/components/examples/base/alert-destructive"
import { AlertActionExample } from "@/components/examples/base/alert-action"
import { AlertColorsExample } from "@/components/examples/base/alert-colors"
import { AlertRtlExample } from "@/components/examples/base/alert-rtl"
import {
  AlertInlineExample,
  AlertMediaExample,
  AlertDismissExample,
  AlertLinkExample,
  AlertTileExample,
  AlertUploadExample,
  AlertUpdateExample,
  AlertStatusExample,
  AlertSoftDismissExample,
  AlertAccentExample,
  AlertOpenActionExample,
  AlertCalloutExample,
  AlertSoftExample,
} from "@/components/examples/base/alert-rich-examples"

export const metadata: Metadata = {
  title: "Alert",
  description: "Displays a callout for user attention.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
        <p className="text-muted-foreground text-lg">
          Displays a callout for user attention.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDemoExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertBasicExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Destructive</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDestructiveExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Action</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertActionExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom Colors</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertColorsExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Inline</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertInlineExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Media</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertMediaExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dismiss</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDismissExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With link</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertLinkExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icon tile</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertTileExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Upload</h2>
        <div className="flex min-h-[180px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertUploadExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Update</h2>
        <div className="flex min-h-[180px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertUpdateExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Status</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertStatusExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Soft dismiss</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertSoftDismissExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Accent</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertAccentExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With button</h2>
        <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertOpenActionExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Callout</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertCalloutExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Soft</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertSoftExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertRtlExample />
        </div>
      </section>
    </div>
  )
}
