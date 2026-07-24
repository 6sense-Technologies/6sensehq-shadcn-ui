"use client"

import { PortfolioSidebar } from "@/components/app-shells/sidebars/portfolio-sidebar"
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

export default function PortfolioAppShellPage() {
  return (
    <SidebarProvider
      defaultOpen
      style={{ "--sidebar-width": "4.75rem" } as React.CSSProperties}
    >
      <div className="flex min-h-svh w-full">
        <PortfolioSidebar />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3 sm:gap-3 sm:px-4">
            <SidebarTrigger className="-ml-1 md:hidden" />
            <ShellSearch className="max-w-xs flex-1 md:max-w-sm" />
            <div className="ml-auto">
              <HeaderActions />
            </div>
          </header>
          <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6">
            <ContentPlaceholder />
          </div>
          <ScrollTopButton />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
