import type { Metadata } from "next"

import { InputOtpDemoExample } from "@/components/examples/base/input-otp-demo"
import { InputOtpPatternExample } from "@/components/examples/base/input-otp-pattern"
import { InputOtpSeparatorExample } from "@/components/examples/base/input-otp-separator"
import { InputOtpDisabledExample } from "@/components/examples/base/input-otp-disabled"
import { InputOtpControlledExample } from "@/components/examples/base/input-otp-controlled"
import { InputOtpInvalidExample } from "@/components/examples/base/input-otp-invalid"
import { InputOtpFourDigitsExample } from "@/components/examples/base/input-otp-four-digits"
import { InputOtpAlphanumericExample } from "@/components/examples/base/input-otp-alphanumeric"
import { InputOtpFormExample } from "@/components/examples/base/input-otp-form"
import { InputOtpRtlExample } from "@/components/examples/base/input-otp-rtl"

export const metadata: Metadata = {
  title: "Input OTP",
  description: "Accessible one-time password component with copy-paste functionality.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p className="text-muted-foreground text-lg">Accessible one-time password component with copy-paste functionality.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pattern</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpPatternExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Separator</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpSeparatorExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Disabled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpDisabledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Controlled</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpControlledExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Invalid</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpInvalidExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Four Digits</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpFourDigitsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Alphanumeric</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpAlphanumericExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Form</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpFormExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <InputOtpRtlExample />
        </div>
      </section>
    </div>
  )
}
