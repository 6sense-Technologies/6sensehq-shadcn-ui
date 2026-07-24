import type { Metadata } from "next"

import { DrawerDemoExample } from "@/components/examples/base/drawer-demo"
import { DrawerSidesExample } from "@/components/examples/base/drawer-sides"
import { DrawerSwipeHandleExample } from "@/components/examples/base/drawer-swipe-handle"
import { DrawerNestedExample } from "@/components/examples/base/drawer-nested"
import { DrawerNonModalExample } from "@/components/examples/base/drawer-non-modal"
import { DrawerSnapPointsExample } from "@/components/examples/base/drawer-snap-points"
import { DrawerDialogExample } from "@/components/examples/base/drawer-dialog"

export const metadata: Metadata = {
  title: "Drawer",
  description: "A drawer component for React.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
        <p className="text-muted-foreground text-lg">A drawer component for React.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Position</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerSidesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Swipe Handle</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerSwipeHandleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Nested</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerNestedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Non Modal</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerNonModalExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Snap Points</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerSnapPointsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Responsive</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DrawerDialogExample />
        </div>
      </section>
    </div>
  )
}
