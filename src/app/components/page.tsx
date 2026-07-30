import Link from "next/link"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { componentNav } from "@/lib/component-nav"

export default function ComponentsIndexPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground text-lg">
          Examples of shadcn/ui Base components, matching the official docs.
        </p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {componentNav.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="flex flex-col gap-1.5 rounded-lg border px-4 py-3 transition-colors hover:bg-muted"
          >
            <span className="text-sm font-medium">{item.title}</span>
            <DocsWhenToUse>{item.whenToUse}</DocsWhenToUse>
          </Link>
        ))}
      </div>
    </div>
  )
}
