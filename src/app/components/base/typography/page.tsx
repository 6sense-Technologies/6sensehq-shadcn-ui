import type { Metadata } from "next"

import { TypographyDemoExample } from "@/components/examples/base/typography-demo"
import { TypographyH1Example } from "@/components/examples/base/typography-h1"
import { TypographyH2Example } from "@/components/examples/base/typography-h2"
import { TypographyH3Example } from "@/components/examples/base/typography-h3"
import { TypographyH4Example } from "@/components/examples/base/typography-h4"
import { TypographyPExample } from "@/components/examples/base/typography-p"
import { TypographyBlockquoteExample } from "@/components/examples/base/typography-blockquote"
import { TypographyTableExample } from "@/components/examples/base/typography-table"
import { TypographyListExample } from "@/components/examples/base/typography-list"
import { TypographyInlineCodeExample } from "@/components/examples/base/typography-inline-code"
import { TypographyLeadExample } from "@/components/examples/base/typography-lead"
import { TypographyLargeExample } from "@/components/examples/base/typography-large"
import { TypographySmallExample } from "@/components/examples/base/typography-small"
import { TypographyMutedExample } from "@/components/examples/base/typography-muted"
import { TypographyRtlExample } from "@/components/examples/base/typography-rtl"

export const metadata: Metadata = {
  title: "Typography",
  description: "Styles for headings, paragraphs, lists, etc.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="text-muted-foreground text-lg">Styles for headings, paragraphs, lists, etc.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">h1</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyH1Example />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">h2</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyH2Example />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">h3</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyH3Example />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">h4</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyH4Example />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">p</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyPExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">blockquote</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyBlockquoteExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">table</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyTableExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">list</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyListExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Inline code</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyInlineCodeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Lead</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyLeadExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Large</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyLargeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Small</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographySmallExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Muted</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyMutedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TypographyRtlExample />
        </div>
      </section>
    </div>
  )
}
