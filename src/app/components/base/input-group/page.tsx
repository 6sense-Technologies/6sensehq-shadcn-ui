import type { Metadata } from "next"

import { InputGroupDemoExample } from "@/components/examples/base/input-group-demo"
import { InputGroupInlineStartExample } from "@/components/examples/base/input-group-inline-start"
import { InputGroupInlineEndExample } from "@/components/examples/base/input-group-inline-end"
import { InputGroupBlockStartExample } from "@/components/examples/base/input-group-block-start"
import { InputGroupBlockEndExample } from "@/components/examples/base/input-group-block-end"
import { InputGroupIconExample } from "@/components/examples/base/input-group-icon"
import { InputGroupTextExample } from "@/components/examples/base/input-group-text"
import { InputGroupButtonExample } from "@/components/examples/base/input-group-button"
import { InputGroupKbdExample } from "@/components/examples/base/input-group-kbd"
import { InputGroupDropdownExample } from "@/components/examples/base/input-group-dropdown"
import { InputGroupSpinnerExample } from "@/components/examples/base/input-group-spinner"
import { InputGroupTextareaExample } from "@/components/examples/base/input-group-textarea"
import { InputGroupCustomExample } from "@/components/examples/base/input-group-custom"
import { InputGroupRtlExample } from "@/components/examples/base/input-group-rtl"

export const metadata: Metadata = {
  title: "Input Group",
  description: "Add addons, buttons, and helper content to inputs.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Input Group</h1>
        <p className="text-muted-foreground text-lg">Add addons, buttons, and helper content to inputs.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Align</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupInlineStartExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Align</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupInlineEndExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Align</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupBlockStartExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Align</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupBlockEndExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icon</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupIconExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Text</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupTextExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Kbd</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupKbdExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dropdown</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupDropdownExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Spinner</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupSpinnerExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Textarea</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupTextareaExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom Input</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupCustomExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputGroupRtlExample />
        </div>
      </section>
    </div>
  )
}
