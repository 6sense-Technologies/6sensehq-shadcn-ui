import type { Metadata } from "next"

import { SkeletonDemoExample } from "@/components/examples/base/skeleton-demo"
import { SkeletonAvatarExample } from "@/components/examples/base/skeleton-avatar"
import { SkeletonCardExample } from "@/components/examples/base/skeleton-card"
import { SkeletonTextExample } from "@/components/examples/base/skeleton-text"
import { SkeletonFormExample } from "@/components/examples/base/skeleton-form"
import { SkeletonTableExample } from "@/components/examples/base/skeleton-table"
import { SkeletonRtlExample } from "@/components/examples/base/skeleton-rtl"

export const metadata: Metadata = {
  title: "Skeleton",
  description: "Use to show a placeholder while content is loading.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
        <p className="text-muted-foreground text-lg">Use to show a placeholder while content is loading.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonAvatarExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Card</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonCardExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Text</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonTextExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Form</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonFormExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Table</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonTableExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SkeletonRtlExample />
        </div>
      </section>
    </div>
  )
}
