import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { BadgeDemoExample } from "@/components/examples/base/badge-demo"
import { BadgeVariantsExample } from "@/components/examples/base/badge-variants"
import { BadgeIconExample } from "@/components/examples/base/badge-icon"
import { BadgeSpinnerExample } from "@/components/examples/base/badge-spinner"
import { BadgeLinkExample } from "@/components/examples/base/badge-link"
import { BadgeColorsExample } from "@/components/examples/base/badge-colors"
import { BadgeRtlExample } from "@/components/examples/base/badge-rtl"
import {
  BadgeGradientExample,
  BadgeGradientOutlineExample,
  BadgeAvatarExample,
} from "@/components/examples/base/badge-rich-examples"

export const metadata: Metadata = {
  title: "Badge",
  description: "Displays a badge or a component that looks like a badge.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("badge")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-muted-foreground text-lg">Displays a badge or a component that looks like a badge.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeVariantsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Icon</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeIconExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Gradient</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeGradientExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Gradient Outline
        </h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeGradientOutlineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Avatar</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeAvatarExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Spinner</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeSpinnerExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Link</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeLinkExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom Colors</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeColorsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BadgeRtlExample />
        </div>
      </section>
    </div>
  )
}
