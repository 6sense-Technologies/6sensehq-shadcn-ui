"use client"

import { CreatePageShell } from "@/components/create-pages/create-page-shell"
import { MultiStepCreateForm } from "@/components/create-pages/multi-step-create"

export default function MultiStepCreatePage() {
  return (
    <CreatePageShell
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Workspaces", href: "#" },
        { label: "Create workspace" },
      ]}
    >
      <MultiStepCreateForm />
    </CreatePageShell>
  )
}
