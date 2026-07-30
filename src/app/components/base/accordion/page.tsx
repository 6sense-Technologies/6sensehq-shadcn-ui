import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { AccordionDemoExample } from "@/components/examples/base/accordion-demo"
import { AccordionBasicExample } from "@/components/examples/base/accordion-basic"
import { AccordionMultipleExample } from "@/components/examples/base/accordion-multiple"
import { AccordionDisabledExample } from "@/components/examples/base/accordion-disabled"
import { AccordionBordersExample } from "@/components/examples/base/accordion-borders"
import { AccordionCardExample } from "@/components/examples/base/accordion-card"
import { AccordionRtlExample } from "@/components/examples/base/accordion-rtl"
import {
  AccordionIconsExample,
  AccordionIconMetaExample,
  AccordionSoftExample,
  AccordionSeparatedCardsExample,
  AccordionMediaCardsExample,
  AccordionBoxedExample,
  AccordionMediaExample,
  AccordionAvatarExample,
} from "@/components/examples/base/accordion-rich-examples"

export const metadata: Metadata = {
  title: "Accordion",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("accordion")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="text-muted-foreground text-lg">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionDemoExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionBasicExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Multiple</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionMultipleExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionDisabledExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Borders</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionBordersExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Card</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionCardExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionIconsExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icon meta</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionIconMetaExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Soft</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionSoftExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Separated cards
        </h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionSeparatedCardsExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Media cards</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionMediaCardsExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Boxed</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionBoxedExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Media</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionMediaExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionAvatarExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AccordionRtlExample />
        </div>
      </section>
    </div>
  )
}
