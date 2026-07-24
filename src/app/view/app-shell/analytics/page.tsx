"use client"

import { AnalyticsSidebar } from "@/components/app-shells/sidebars/analytics-sidebar"
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

export default function AnalyticsAppShellPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "17rem",
        } as React.CSSProperties
      }
    >
      <AnalyticsSidebar />
      <SidebarInset className="bg-muted/40 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl">
        <ShellTopbar showShare className="bg-background md:rounded-t-xl" />
        <ShellMobileSearch />
        <div className="flex flex-1 flex-col gap-4 p-3 sm:p-4 md:p-6">
          <ContentPlaceholder className="rounded-2xl bg-card" />
        </div>
        <ScrollTopButton />
      </SidebarInset>
    </SidebarProvider>
  )
}
