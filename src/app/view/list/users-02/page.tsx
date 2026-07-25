"use client"

import { AcademySidebar } from "@/components/app-shells/sidebars/academy-sidebar"
import { ShellTopbar } from "@/components/app-shells/shell-topbar"
import { UsersDirectoryList } from "@/components/list-pages/users-directory-list"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function UsersDirectoryListPage() {
  return (
    <SidebarProvider>
      <AcademySidebar />
      <SidebarInset className="min-w-0 bg-muted/40">
        <div className="sticky top-0 z-40 bg-background">
          <ShellTopbar hideSearch showShare>
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="hidden sm:inline-flex">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden sm:list-item" />
                <BreadcrumbItem className="hidden md:inline-flex">
                  <BreadcrumbLink href="#">User Management</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:list-item" />
                <BreadcrumbItem className="min-w-0">
                  <BreadcrumbPage className="truncate">
                    Users Directory
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ShellTopbar>
        </div>
        <div className="flex min-w-0 flex-col gap-4 p-3 sm:p-4 md:p-6">
          <UsersDirectoryList />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
