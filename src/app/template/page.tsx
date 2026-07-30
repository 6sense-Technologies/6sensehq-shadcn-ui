import Link from "next/link"
import type { Metadata } from "next"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { templateNav } from "@/lib/template-nav"

export const metadata: Metadata = {
  title: "Templates",
  description: "Page layout templates including login and registration.",
}

export default function TemplateIndexPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
        <p className="text-muted-foreground text-lg">
          Browse page layout templates. New pages will live under this section.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {templateNav.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="flex flex-col gap-2 rounded-xl border px-5 py-6 transition-colors hover:bg-muted"
          >
            <span className="text-base font-medium">{item.title}</span>
            <DocsWhenToUse>{item.whenToUse}</DocsWhenToUse>
          </Link>
        ))}
      </div>
    </div>
  )
}
