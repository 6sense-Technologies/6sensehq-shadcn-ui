"use client"

import { CreatePageShell } from "@/components/create-pages/create-page-shell"
import { SimpleCreateForm } from "@/components/create-pages/simple-create"

export default function SimpleCreatePage() {
  return (
    <CreatePageShell
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Create project" },
      ]}
    >
      <SimpleCreateForm />
    </CreatePageShell>
  )
}
