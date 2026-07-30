"use client"

import { CreatePageShell } from "@/components/create-pages/create-page-shell"
import { SimpleCreate02Form } from "@/components/create-pages/simple-create-02"

export default function SimpleCreate02Page() {
  return (
    <CreatePageShell
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Users", href: "#" },
        { label: "Create user" },
      ]}
    >
      <SimpleCreate02Form />
    </CreatePageShell>
  )
}
