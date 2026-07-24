"use client"

import { TravelSidebar } from "@/components/app-shells/sidebars/travel-sidebar"
import {
  ContentPlaceholder,
  HeaderActions,
  ScrollTopButton,
  ShellSearch,
} from "@/components/app-shells/shared"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function TravelAppShellPage() {
  return (
    <SidebarProvider
      defaultOpen
      style={{ "--sidebar-width": "3.5rem" } as React.CSSProperties}
    >
      <div className="flex min-h-svh w-full flex-col">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3 sm:gap-3 sm:px-4">
          <SidebarTrigger className="-ml-1 md:hidden" />
          <ShellSearch className="max-w-xs flex-1 md:max-w-sm" />
          <div className="ml-auto">
            <HeaderActions />
          </div>
        </header>
        <div className="flex min-h-0 flex-1">
          <TravelSidebar />
          <SidebarInset className="min-w-0">
            <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6">
              <ContentPlaceholder />
            </div>
            <ScrollTopButton />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
