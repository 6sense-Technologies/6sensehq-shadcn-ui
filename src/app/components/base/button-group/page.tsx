import type { Metadata } from "next"

import { ButtonGroupDemoExample } from "@/components/examples/base/button-group-demo"
import { ButtonGroupOrientationExample } from "@/components/examples/base/button-group-orientation"
import { ButtonGroupSizeExample } from "@/components/examples/base/button-group-size"
import { ButtonGroupNestedExample } from "@/components/examples/base/button-group-nested"
import { ButtonGroupSeparatorExample } from "@/components/examples/base/button-group-separator"
import { ButtonGroupSplitExample } from "@/components/examples/base/button-group-split"
import { ButtonGroupInputExample } from "@/components/examples/base/button-group-input"
import { ButtonGroupInputGroupExample } from "@/components/examples/base/button-group-input-group"
import { ButtonGroupDropdownExample } from "@/components/examples/base/button-group-dropdown"
import { ButtonGroupSelectExample } from "@/components/examples/base/button-group-select"
import { ButtonGroupPopoverExample } from "@/components/examples/base/button-group-popover"
import { ButtonGroupRtlExample } from "@/components/examples/base/button-group-rtl"
import { ButtonGroupAttachmentExample } from "@/components/examples/base/button-group-rich-examples"

export const metadata: Metadata = {
  title: "Button Group",
  description: "A container that groups related buttons together with consistent styling.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Button Group</h1>
        <p className="text-muted-foreground text-lg">A container that groups related buttons together with consistent styling.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Orientation</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupOrientationExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupSizeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Nested</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupNestedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Separator</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupSeparatorExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Split</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupSplitExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Attachment</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupAttachmentExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupInputExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupInputGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dropdown Menu</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupDropdownExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Select</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupSelectExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Popover</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupPopoverExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupRtlExample />
        </div>
      </section>
    </div>
  )
}
