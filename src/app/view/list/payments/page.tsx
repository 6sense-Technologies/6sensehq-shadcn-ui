"use client"

import {
  PaymentsSidebar,
  PaymentsTopbar,
} from "@/components/app-shells/sidebars/payments-sidebar"
import { PaymentsList } from "@/components/list-pages/payments-list"
import { Button } from "@/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function PaymentsListPage() {
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
      <SidebarInset className="min-w-0 bg-[#F6F8FA]">
        <div className="sticky top-0 z-40 flex items-center gap-2 border-b bg-background px-2 sm:px-3">
          <SidebarTrigger className="text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <PaymentsTopbar className="border-0 px-0" />
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4 md:px-6 md:pt-4 md:pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Payments
            </h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Analyze
              </Button>
              <Button
                size="sm"
                className="bg-[#635BFF] hover:bg-[#5347F2]"
              >
                Create payment
              </Button>
            </div>
          </div>
          <PaymentsList />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
