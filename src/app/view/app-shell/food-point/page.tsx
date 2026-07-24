"use client"

import { FoodPointSidebar } from "@/components/app-shells/sidebars/food-point-sidebar"
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

export default function FoodPointAppShellPage() {
  return (
    <SidebarProvider>
      <FoodPointSidebar />
      <SidebarInset>
        <ShellTopbar showProfileText />
        <ShellMobileSearch />
        <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6">
          <ContentPlaceholder />
        </div>
        <ScrollTopButton />
      </SidebarInset>
    </SidebarProvider>
  )
}
