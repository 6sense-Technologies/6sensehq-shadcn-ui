import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { NavigationMenuDemoExample } from "@/components/examples/base/navigation-menu-demo"
import { NavigationMenuRtlExample } from "@/components/examples/base/navigation-menu-rtl"

export const metadata: Metadata = {
  title: "Navigation Menu",
  description: "A collection of links for navigating websites.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("navigation-menu")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p className="text-muted-foreground text-lg">A collection of links for navigating websites.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NavigationMenuDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <NavigationMenuRtlExample />
        </div>
      </section>
    </div>
  )
}
