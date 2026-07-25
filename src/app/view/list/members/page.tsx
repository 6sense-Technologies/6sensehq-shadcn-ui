"use client"

import { AnalyticsSidebar } from "@/components/app-shells/sidebars/analytics-sidebar"
import { ShellTopbar } from "@/components/app-shells/shell-topbar"
import { MembersList } from "@/components/list-pages/members-list"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function MembersListPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "17rem",
        } as React.CSSProperties
      }
    >
      <AnalyticsSidebar />
      <SidebarInset className="min-w-0 bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl">
        <div className="sticky top-0 z-40 bg-background md:rounded-t-xl">
          <ShellTopbar hideSearch showShare className="bg-background md:rounded-t-xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">People</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Members</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ShellTopbar>
        </div>
        <div className="flex min-w-0 flex-col bg-background p-3 sm:p-4 md:p-6">
          <MembersList />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
