"use client"

import { AcademySidebar } from "@/components/app-shells/sidebars/academy-sidebar"
import {
  ContentPlaceholder,
  ScrollTopButton,
} from "@/components/app-shells/shared"
import {
  ShellMobileSearch,
  ShellTopbar,
} from "@/components/app-shells/shell-topbar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function AcademyAppShellPage() {
  return (
    <SidebarProvider>
      <AcademySidebar />
      <SidebarInset>
        <ShellTopbar showShare />
        <ShellMobileSearch />
        <div className="flex flex-1 flex-col gap-4 bg-muted/30 p-3 sm:p-4 md:p-6">
          <ContentPlaceholder className="rounded-2xl bg-card" />
        </div>
        <ScrollTopButton />
      </SidebarInset>
    </SidebarProvider>
  )
}
