import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <div className="flex max-w-lg flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight">shadcn/ui</h1>
        <p className="text-muted-foreground text-lg">
          Browse Base UI component examples from the official documentation.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button render={<Link href="/components" />} nativeButton={false}>
          View Components
        </Button>
        <Button
          variant="outline"
          render={<Link href="/template" />}
          nativeButton={false}
        >
          Templates
        </Button>
      </div>
    </main>
  )
}
