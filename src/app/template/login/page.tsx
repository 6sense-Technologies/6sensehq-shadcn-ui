import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRightIcon } from "lucide-react"

import { DocsWhenToUse } from "@/components/docs-when-to-use"
import { loginVariations } from "@/lib/template-nav"

export const metadata: Metadata = {
  title: "Login Templates",
  description: "Login page variations.",
}

export default function TemplateLoginIndexPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Login</h1>
        <p className="text-muted-foreground text-lg">
          All login page variations. Each opens in a new page.
        </p>
      </div>

      {loginVariations.length === 0 ? (
        <div className="rounded-xl border border-dashed px-6 py-12 text-center">
          <p className="text-muted-foreground text-sm">
            No login variations yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {loginVariations.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-3 rounded-xl border px-4 py-4 transition-colors hover:bg-muted"
            >
              <div className="min-w-0 space-y-1.5">
                <span className="font-medium">{item.title}</span>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                <DocsWhenToUse>{item.whenToUse}</DocsWhenToUse>
              </div>
              <ArrowUpRightIcon className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
