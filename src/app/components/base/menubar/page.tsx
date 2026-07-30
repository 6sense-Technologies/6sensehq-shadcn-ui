import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { MenubarDemoExample } from "@/components/examples/base/menubar-demo"
import { MenubarCheckboxExample } from "@/components/examples/base/menubar-checkbox"
import { MenubarRadioExample } from "@/components/examples/base/menubar-radio"
import { MenubarSubmenuExample } from "@/components/examples/base/menubar-submenu"
import { MenubarIconsExample } from "@/components/examples/base/menubar-icons"
import { MenubarRtlExample } from "@/components/examples/base/menubar-rtl"

export const metadata: Metadata = {
  title: "Menubar",
  description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("menubar")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Menubar</h1>
        <p className="text-muted-foreground text-lg">A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MenubarDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Checkbox</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MenubarCheckboxExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Radio</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MenubarRadioExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Submenu</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MenubarSubmenuExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MenubarIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <MenubarRtlExample />
        </div>
      </section>
    </div>
  )
}
