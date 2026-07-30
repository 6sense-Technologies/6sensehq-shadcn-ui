import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { MarkerDemoExample } from "@/components/examples/base/marker-demo"
import { MarkerVariantsExample } from "@/components/examples/base/marker-variants"
import { MarkerStatusExample } from "@/components/examples/base/marker-status"
import { MarkerShimmerExample } from "@/components/examples/base/marker-shimmer"
import { MarkerSeparatorExample } from "@/components/examples/base/marker-separator"
import { MarkerBorderExample } from "@/components/examples/base/marker-border"
import { MarkerIconExample } from "@/components/examples/base/marker-icon"
import { MarkerLinkButtonExample } from "@/components/examples/base/marker-link-button"

export const metadata: Metadata = {
  title: "Marker",
  description: "Displays an inline status, system note, bordered row, or labeled separator in a conversation.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("marker")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Marker</h1>
        <p className="text-muted-foreground text-lg">Displays an inline status, system note, bordered row, or labeled separator in a conversation.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerVariantsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Status</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerStatusExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Shimmer</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerShimmerExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Separator</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerSeparatorExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Border</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerBorderExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Icon</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerIconExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Links and Buttons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MarkerLinkButtonExample />
        </div>
      </section>
    </div>
  )
}
