"use client"

import {
  PaymentsSidebar,
  PaymentsTopbar,
} from "@/components/app-shells/sidebars/payments-sidebar"
import { ScrollTopButton } from "@/components/app-shells/shared"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function PaymentsAppShellPage() {
  return (
    <SidebarProvider
      defaultOpen
      style={
        {
          "--sidebar-width": "15.5rem",
          "--sidebar-width-icon": "3.25rem",
        } as React.CSSProperties
      }
    >
      <PaymentsSidebar />
      <SidebarInset className="bg-[#F6F8FA]">
        <div className="flex items-center gap-2 border-b bg-background px-2 sm:px-3">
          <SidebarTrigger className="text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <PaymentsTopbar className="border-0 px-0" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-3 sm:p-4 md:p-6">
          <div className="min-h-[min(40vh,20rem)] flex-1 rounded-2xl border bg-background bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,color-mix(in_oklab,var(--border)_55%,transparent)_8px,color-mix(in_oklab,var(--border)_55%,transparent)_9px)]" />
        </div>
        <ScrollTopButton />
      </SidebarInset>
    </SidebarProvider>
  )
}
