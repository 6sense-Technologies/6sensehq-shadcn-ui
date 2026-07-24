import type { Metadata } from "next"

import { RadioGroupDemoExample } from "@/components/examples/base/radio-group-demo"
import { RadioGroupDescriptionExample } from "@/components/examples/base/radio-group-description"
import { RadioGroupChoiceCardExample } from "@/components/examples/base/radio-group-choice-card"
import { RadioGroupFieldsetExample } from "@/components/examples/base/radio-group-fieldset"
import { RadioGroupDisabledExample } from "@/components/examples/base/radio-group-disabled"
import { RadioGroupInvalidExample } from "@/components/examples/base/radio-group-invalid"
import { RadioGroupRtlExample } from "@/components/examples/base/radio-group-rtl"

export const metadata: Metadata = {
  title: "Radio Group",
  description: "A set of checkable buttons\u2014known as radio buttons\u2014where no more than one of the buttons can be checked at a time.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-muted-foreground text-lg">A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Description</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupDescriptionExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Choice Card</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupChoiceCardExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Fieldset</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupFieldsetExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <RadioGroupRtlExample />
        </div>
      </section>
    </div>
  )
}
