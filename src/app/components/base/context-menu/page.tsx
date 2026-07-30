import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { ContextMenuDemoExample } from "@/components/examples/base/context-menu-demo"
import { ContextMenuBasicExample } from "@/components/examples/base/context-menu-basic"
import { ContextMenuSubmenuExample } from "@/components/examples/base/context-menu-submenu"
import { ContextMenuShortcutsExample } from "@/components/examples/base/context-menu-shortcuts"
import { ContextMenuGroupsExample } from "@/components/examples/base/context-menu-groups"
import { ContextMenuIconsExample } from "@/components/examples/base/context-menu-icons"
import { ContextMenuCheckboxesExample } from "@/components/examples/base/context-menu-checkboxes"
import { ContextMenuRadioExample } from "@/components/examples/base/context-menu-radio"
import { ContextMenuDestructiveExample } from "@/components/examples/base/context-menu-destructive"
import { ContextMenuSidesExample } from "@/components/examples/base/context-menu-sides"
import { ContextMenuRtlExample } from "@/components/examples/base/context-menu-rtl"

export const metadata: Metadata = {
  title: "Context Menu",
  description: "Displays a menu of actions triggered by a right click.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("context-menu")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
        <p className="text-muted-foreground text-lg">Displays a menu of actions triggered by a right click.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Submenu</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuSubmenuExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Shortcuts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuShortcutsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Groups</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuGroupsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Checkboxes</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuCheckboxesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Radio</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuRadioExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Destructive</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuDestructiveExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sides</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuSidesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ContextMenuRtlExample />
        </div>
      </section>
    </div>
  )
}
