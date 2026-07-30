import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { getComponentNavItem } from "@/lib/component-nav"

import { DropdownMenuDemoExample } from "@/components/examples/base/dropdown-menu-demo"
import { DropdownMenuBasicExample } from "@/components/examples/base/dropdown-menu-basic"
import { DropdownMenuSubmenuExample } from "@/components/examples/base/dropdown-menu-submenu"
import { DropdownMenuShortcutsExample } from "@/components/examples/base/dropdown-menu-shortcuts"
import { DropdownMenuIconsExample } from "@/components/examples/base/dropdown-menu-icons"
import { DropdownMenuCheckboxesExample } from "@/components/examples/base/dropdown-menu-checkboxes"
import { DropdownMenuCheckboxesIconsExample } from "@/components/examples/base/dropdown-menu-checkboxes-icons"
import { DropdownMenuRadioGroupExample } from "@/components/examples/base/dropdown-menu-radio-group"
import { DropdownMenuRadioIconsExample } from "@/components/examples/base/dropdown-menu-radio-icons"
import { DropdownMenuDestructiveExample } from "@/components/examples/base/dropdown-menu-destructive"
import { DropdownMenuAvatarExample } from "@/components/examples/base/dropdown-menu-avatar"
import { DropdownMenuComplexExample } from "@/components/examples/base/dropdown-menu-complex"
import { DropdownMenuRtlExample } from "@/components/examples/base/dropdown-menu-rtl"

export const metadata: Metadata = {
  title: "Dropdown Menu",
  description: "Displays a menu to the user \u2014 such as a set of actions or functions \u2014 triggered by a button.",
}

export default function Page() {
  const whenToUse = getComponentNavItem("dropdown-menu")?.whenToUse

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="text-muted-foreground text-lg">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</p>
        {whenToUse ? <DocsWhenToUse>{whenToUse}</DocsWhenToUse> : null}
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Submenu</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuSubmenuExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Shortcuts</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuShortcutsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Checkboxes</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuCheckboxesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Checkboxes Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuCheckboxesIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Radio Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuRadioGroupExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Radio Icons</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuRadioIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Destructive</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuDestructiveExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuAvatarExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Complex</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuComplexExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <DropdownMenuRtlExample />
        </div>
      </section>
    </div>
  )
}
