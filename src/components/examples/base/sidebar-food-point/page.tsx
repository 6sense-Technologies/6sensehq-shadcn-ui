"use client"

import { FoodPointSidebar } from "@/components/app-shells/sidebars/food-point-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <FoodPointSidebar />
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="text-sm font-medium">Sidebar Preview</div>
        </header>
        <div className="flex flex-1 items-center justify-center p-6">
          <p className="text-muted-foreground text-sm">Main content</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
