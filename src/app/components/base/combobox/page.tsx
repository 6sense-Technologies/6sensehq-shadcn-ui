import type { Metadata } from "next"

import { ComboboxDemoExample } from "@/components/examples/base/combobox-demo"
import { ComboboxBasicExample } from "@/components/examples/base/combobox-basic"
import { ComboboxMultipleExample } from "@/components/examples/base/combobox-multiple"
import { ComboboxClearExample } from "@/components/examples/base/combobox-clear"
import { ComboboxGroupsExample } from "@/components/examples/base/combobox-groups"
import { ComboboxCustomExample } from "@/components/examples/base/combobox-custom"
import { ComboboxInvalidExample } from "@/components/examples/base/combobox-invalid"
import { ComboboxDisabledExample } from "@/components/examples/base/combobox-disabled"
import { ComboboxAutoHighlightExample } from "@/components/examples/base/combobox-auto-highlight"
import { ComboboxPopupExample } from "@/components/examples/base/combobox-popup"
import { ComboboxInputGroupExample } from "@/components/examples/base/combobox-input-group"
import { ComboboxRtlExample } from "@/components/examples/base/combobox-rtl"

export const metadata: Metadata = {
  title: "Combobox",
  description: "Autocomplete input with a list of suggestions.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Combobox</h1>
        <p className="text-muted-foreground text-lg">Autocomplete input with a list of suggestions.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Multiple</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxMultipleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Clear Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxClearExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Groups</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxGroupsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom Items</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxCustomExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Auto Highlight</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxAutoHighlightExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Popup</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxPopupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxInputGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ComboboxRtlExample />
        </div>
      </section>
    </div>
  )
}
