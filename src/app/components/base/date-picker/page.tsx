import type { Metadata } from "next"

import { DatePickerDemoExample } from "@/components/examples/base/date-picker-demo"
import { DatePickerBasicExample } from "@/components/examples/base/date-picker-basic"
import { DatePickerRangeExample } from "@/components/examples/base/date-picker-range"
import { DatePickerDobExample } from "@/components/examples/base/date-picker-dob"
import { DatePickerInputExample } from "@/components/examples/base/date-picker-input"
import { DatePickerTimeExample } from "@/components/examples/base/date-picker-time"
import { DatePickerNaturalLanguageExample } from "@/components/examples/base/date-picker-natural-language"
import { DatePickerRtlExample } from "@/components/examples/base/date-picker-rtl"

export const metadata: Metadata = {
  title: "Date Picker",
  description: "A date picker component with range and presets.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Date Picker</h1>
        <p className="text-muted-foreground text-lg">A date picker component with range and presets.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Range Picker</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerRangeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Date of Birth</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerDobExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerInputExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Time Picker</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerTimeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Natural Language Picker</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerNaturalLanguageExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DatePickerRtlExample />
        </div>
      </section>
    </div>
  )
}
