"use client"

import { PortfolioSidebar } from "@/components/app-shells/sidebars/portfolio-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      defaultOpen
      style={{ "--sidebar-width": "4.75rem" } as React.CSSProperties}
    >
      <div className="flex min-h-svh w-full">
        <PortfolioSidebar />
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="text-sm font-medium">Sidebar Preview</div>
          </header>
          <div className="flex flex-1 items-center justify-center p-6">
            <p className="text-muted-foreground text-sm">Main content</p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
