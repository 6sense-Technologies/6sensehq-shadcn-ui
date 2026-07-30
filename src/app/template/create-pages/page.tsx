import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRightIcon } from "lucide-react"

import { createPageVariations } from "@/lib/template-nav"

export const metadata: Metadata = {
  title: "Create Page Templates",
  description: "Simple, multi-step, invite, and attachment create flows.",
}

export default function TemplateCreatePagesIndexPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create Pages</h1>
        <p className="text-muted-foreground text-lg">
          Form layouts for creating records — simple, multi-step, invites, and
          attachments. Each opens in a new page.
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {createPageVariations.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start justify-between gap-3 rounded-xl border px-4 py-4 transition-colors hover:bg-muted"
          >
            <div className="min-w-0">
              <span className="font-medium">{item.title}</span>
              <p className="text-muted-foreground mt-1 text-sm">
                {item.description}
              </p>
            </div>
            <ArrowUpRightIcon className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  )
}
