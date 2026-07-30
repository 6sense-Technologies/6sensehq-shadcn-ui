"use client"

import { AddressCreateForm } from "@/components/create-pages/address-create"
import { CreatePageShell } from "@/components/create-pages/create-page-shell"

export default function AddressCreatePage() {
  return (
    <CreatePageShell
      crumbs={[
        { label: "Home", href: "#" },
        { label: "Locations", href: "#" },
        { label: "Create location" },
      ]}
    >
      <AddressCreateForm />
    </CreatePageShell>
  )
}
