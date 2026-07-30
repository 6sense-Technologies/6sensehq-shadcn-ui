"use client"

import { CreatePageShell } from "@/components/create-pages/create-page-shell"
import { MultiStepCreate02Form } from "@/components/create-pages/multi-step-create-02"

export default function MultiStepCreate02Page() {
  return (
    <CreatePageShell
      contentClassName="max-w-6xl"
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Campaigns", href: "#" },
        { label: "Create campaign" },
      ]}
    >
      <MultiStepCreate02Form />
    </CreatePageShell>
  )
}
