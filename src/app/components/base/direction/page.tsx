import type { Metadata } from "next"

import { CardRtlExample } from "@/components/examples/base/card-rtl"

export const metadata: Metadata = {
  title: "Direction",
  description: "A provider component that sets the text direction for your application.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Direction</h1>
        <p className="text-muted-foreground text-lg">A provider component that sets the text direction for your application.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CardRtlExample />
        </div>
      </section>
    </div>
  )
}
