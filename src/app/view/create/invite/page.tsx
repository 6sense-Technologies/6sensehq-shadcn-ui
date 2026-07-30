"use client"

import { CreatePageShell } from "@/components/create-pages/create-page-shell"
import { InviteCreateForm } from "@/components/create-pages/invite-create"

export default function InviteCreatePage() {
  return (
    <CreatePageShell
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Teams", href: "#" },
        { label: "Create & invite" },
      ]}
    >
      <InviteCreateForm />
    </CreatePageShell>
  )
}
