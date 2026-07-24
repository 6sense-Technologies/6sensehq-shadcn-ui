import type { Metadata } from "next"

import { BreadcrumbDemoExample } from "@/components/examples/base/breadcrumb-demo"
import { BreadcrumbBasicExample } from "@/components/examples/base/breadcrumb-basic"
import { BreadcrumbSeparatorExample } from "@/components/examples/base/breadcrumb-separator"
import { BreadcrumbDropdownExample } from "@/components/examples/base/breadcrumb-dropdown"
import { BreadcrumbEllipsisExample } from "@/components/examples/base/breadcrumb-ellipsis"
import { BreadcrumbLinkExample } from "@/components/examples/base/breadcrumb-link"
import { BreadcrumbRtlExample } from "@/components/examples/base/breadcrumb-rtl"
import {
  BreadcrumbPillExample,
  BreadcrumbIconBoxExample,
  BreadcrumbBorderedExample,
} from "@/components/examples/base/breadcrumb-rich-examples"

export const metadata: Metadata = {
  title: "Breadcrumb",
  description:
    "Displays the path to the current resource using a hierarchy of links.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Breadcrumb</h1>
        <p className="text-muted-foreground text-lg">
          Displays the path to the current resource using a hierarchy of links.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbDemoExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbBasicExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pill</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbPillExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icon box</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbIconBoxExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Bordered</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbBorderedExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Custom separator
        </h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbSeparatorExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dropdown</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbDropdownExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Collapsed</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbEllipsisExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Link component</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbLinkExample />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <BreadcrumbRtlExample />
        </div>
      </section>
    </div>
  )
}
