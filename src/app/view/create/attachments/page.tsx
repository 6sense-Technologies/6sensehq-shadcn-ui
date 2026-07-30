"use client"

import { AttachmentCreateForm } from "@/components/create-pages/attachment-create"
import { CreatePageShell } from "@/components/create-pages/create-page-shell"

export default function AttachmentCreatePage() {
  return (
    <CreatePageShell
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Requests", href: "#" },
        { label: "Create request" },
      ]}
    >
      <AttachmentCreateForm />
    </CreatePageShell>
  )
}
