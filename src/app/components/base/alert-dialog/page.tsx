import type { Metadata } from "next"

import { AlertDialogDemoExample } from "@/components/examples/base/alert-dialog-demo"
import { AlertDialogBasicExample } from "@/components/examples/base/alert-dialog-basic"
import { AlertDialogSmallExample } from "@/components/examples/base/alert-dialog-small"
import { AlertDialogMediaExample } from "@/components/examples/base/alert-dialog-media"
import { AlertDialogSmallMediaExample } from "@/components/examples/base/alert-dialog-small-media"
import { AlertDialogDestructiveExample } from "@/components/examples/base/alert-dialog-destructive"
import { AlertDialogRtlExample } from "@/components/examples/base/alert-dialog-rtl"

export const metadata: Metadata = {
  title: "Alert Dialog",
  description: "A modal dialog that interrupts the user with important content and expects a response.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="text-muted-foreground text-lg">A modal dialog that interrupts the user with important content and expects a response.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Small</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogSmallExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Media</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogMediaExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Small with Media</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogSmallMediaExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Destructive</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogDestructiveExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <AlertDialogRtlExample />
        </div>
      </section>
    </div>
  )
}
