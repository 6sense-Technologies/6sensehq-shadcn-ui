import type { Metadata } from "next"

import { CheckboxDemoExample } from "@/components/examples/base/checkbox-demo"
import { CheckboxInvalidExample } from "@/components/examples/base/checkbox-invalid"
import { CheckboxBasicExample } from "@/components/examples/base/checkbox-basic"
import { CheckboxDescriptionExample } from "@/components/examples/base/checkbox-description"
import { CheckboxDisabledExample } from "@/components/examples/base/checkbox-disabled"
import { CheckboxGroupExample } from "@/components/examples/base/checkbox-group"
import { CheckboxTableExample } from "@/components/examples/base/checkbox-table"
import { CheckboxRtlExample } from "@/components/examples/base/checkbox-rtl"

export const metadata: Metadata = {
  title: "Checkbox",
  description: "A control that allows the user to toggle between checked and not checked.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-muted-foreground text-lg">A control that allows the user to toggle between checked and not checked.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid State</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Description</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxDescriptionExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Table</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxTableExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CheckboxRtlExample />
        </div>
      </section>
    </div>
  )
}
