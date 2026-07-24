"use client"

import { SocialSidebar } from "@/components/app-shells/sidebars/social-sidebar"
import {
  ContentPlaceholder,
  ScrollTopButton,
} from "@/components/app-shells/shared"
import {
  ShellMobileSearch,
  ShellTopbar,
} from "@/components/app-shells/shell-topbar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function SocialAppShellPage() {
  return (
    <SidebarProvider>
      <SocialSidebar />
      <SidebarInset>
        <ShellTopbar showProfileText />
        <ShellMobileSearch />
        <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6">
          <ContentPlaceholder />
        </div>
        <footer className="text-muted-foreground flex flex-col gap-3 border-t px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 shadcn/studio, Made for better web design</p>
          <Breadcrumb>
            <BreadcrumbList className="text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Audience Insight</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Interests</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </footer>
        <ScrollTopButton />
      </SidebarInset>
    </SidebarProvider>
  )
}
