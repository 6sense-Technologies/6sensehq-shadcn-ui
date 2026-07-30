import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { TextareaDemoExample } from "@/components/examples/base/textarea-demo"
import { TextareaFieldExample } from "@/components/examples/base/textarea-field"
import { TextareaDisabledExample } from "@/components/examples/base/textarea-disabled"
import { TextareaInvalidExample } from "@/components/examples/base/textarea-invalid"
import { TextareaButtonExample } from "@/components/examples/base/textarea-button"
import { TextareaRtlExample } from "@/components/examples/base/textarea-rtl"

export const metadata: Metadata = {
  title: "Textarea",
  description: "Displays a form textarea or a component that looks like a textarea.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("textarea")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="text-muted-foreground text-lg">Displays a form textarea or a component that looks like a textarea.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TextareaDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Field</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TextareaFieldExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TextareaDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TextareaInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TextareaButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <TextareaRtlExample />
        </div>
      </section>
    </div>
  )
}
