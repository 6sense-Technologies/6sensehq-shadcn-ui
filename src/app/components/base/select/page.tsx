import type { Metadata } from "next"

import { SelectDemoExample } from "@/components/examples/base/select-demo"
import { SelectAlignItemExample } from "@/components/examples/base/select-align-item"
import { SelectGroupsExample } from "@/components/examples/base/select-groups"
import { SelectScrollableExample } from "@/components/examples/base/select-scrollable"
import { SelectDisabledExample } from "@/components/examples/base/select-disabled"
import { SelectInvalidExample } from "@/components/examples/base/select-invalid"
import { SelectRtlExample } from "@/components/examples/base/select-rtl"

export const metadata: Metadata = {
  title: "Select",
  description: "Displays a list of options for the user to pick from\u2014triggered by a button.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="text-muted-foreground text-lg">Displays a list of options for the user to pick from—triggered by a button.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Align Item With Trigger</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectAlignItemExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Groups</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectGroupsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Scrollable</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectScrollableExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SelectRtlExample />
        </div>
      </section>
    </div>
  )
}
