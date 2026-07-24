import type { Metadata } from "next"

import { ToastDemoExample } from "@/components/examples/base/toast-demo"
import { ToastTypesExample } from "@/components/examples/base/toast-types"
import { ToastPromiseExample } from "@/components/examples/base/toast-promise"

export const metadata: Metadata = {
  title: "Toast",
  description: "A succinct message that is displayed temporarily.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Toast</h1>
        <p className="text-muted-foreground text-lg">A succinct message that is displayed temporarily.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToastDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Types</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToastTypesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Promise</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ToastPromiseExample />
        </div>
      </section>
    </div>
  )
}
