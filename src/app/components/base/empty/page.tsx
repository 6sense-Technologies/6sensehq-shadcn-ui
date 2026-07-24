import type { Metadata } from "next"

import { EmptyDemoExample } from "@/components/examples/base/empty-demo"
import { EmptyOutlineExample } from "@/components/examples/base/empty-outline"
import { EmptyBackgroundExample } from "@/components/examples/base/empty-background"
import { EmptyAvatarExample } from "@/components/examples/base/empty-avatar"
import { EmptyAvatarGroupExample } from "@/components/examples/base/empty-avatar-group"
import { EmptyInputGroupExample } from "@/components/examples/base/empty-input-group"
import { EmptyRtlExample } from "@/components/examples/base/empty-rtl"

export const metadata: Metadata = {
  title: "Empty",
  description: "Use the Empty component to display an empty state.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Empty</h1>
        <p className="text-muted-foreground text-lg">Use the Empty component to display an empty state.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Outline</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyOutlineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyBackgroundExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyAvatarExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatar Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyAvatarGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">InputGroup</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyInputGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <EmptyRtlExample />
        </div>
      </section>
    </div>
  )
}
