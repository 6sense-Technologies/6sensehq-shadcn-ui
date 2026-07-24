import type { Metadata } from "next"

import { NativeSelectDemoExample } from "@/components/examples/base/native-select-demo"
import { NativeSelectGroupsExample } from "@/components/examples/base/native-select-groups"
import { NativeSelectDisabledExample } from "@/components/examples/base/native-select-disabled"
import { NativeSelectInvalidExample } from "@/components/examples/base/native-select-invalid"
import { NativeSelectRtlExample } from "@/components/examples/base/native-select-rtl"

export const metadata: Metadata = {
  title: "Native Select",
  description: "A styled native HTML select element with consistent design system integration.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Native Select</h1>
        <p className="text-muted-foreground text-lg">A styled native HTML select element with consistent design system integration.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NativeSelectDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Groups</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NativeSelectGroupsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NativeSelectDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NativeSelectInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NativeSelectRtlExample />
        </div>
      </section>
    </div>
  )
}
