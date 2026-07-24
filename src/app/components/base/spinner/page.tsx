import type { Metadata } from "next"

import { SpinnerDemoExample } from "@/components/examples/base/spinner-demo"
import { SpinnerCustomExample } from "@/components/examples/base/spinner-custom"
import { SpinnerSizeExample } from "@/components/examples/base/spinner-size"
import { SpinnerButtonExample } from "@/components/examples/base/spinner-button"
import { SpinnerBadgeExample } from "@/components/examples/base/spinner-badge"
import { SpinnerInputGroupExample } from "@/components/examples/base/spinner-input-group"
import { SpinnerEmptyExample } from "@/components/examples/base/spinner-empty"
import { SpinnerRtlExample } from "@/components/examples/base/spinner-rtl"

export const metadata: Metadata = {
  title: "Spinner",
  description: "An indicator that can be used to show a loading state.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Spinner</h1>
        <p className="text-muted-foreground text-lg">An indicator that can be used to show a loading state.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Customization</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerCustomExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerSizeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Button</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerButtonExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Badge</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerBadgeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerInputGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Empty</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerEmptyExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <SpinnerRtlExample />
        </div>
      </section>
    </div>
  )
}
