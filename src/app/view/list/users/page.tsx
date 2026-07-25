"use client"

import { AcademySidebar } from "@/components/app-shells/sidebars/academy-sidebar"
import { ShellTopbar } from "@/components/app-shells/shell-topbar"
import { UsersList } from "@/components/list-pages/users-list"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function UsersListPage() {
  return (
    <SidebarProvider>
      <AcademySidebar />
      <SidebarInset className="min-w-0 bg-muted/30">
        <div className="sticky top-0 z-40 bg-background">
          <ShellTopbar hideSearch showShare>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">User Management</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Users</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ShellTopbar>
        </div>
        <div className="flex min-w-0 flex-col gap-4 p-3 sm:p-4 md:p-6">
          <h1 className="text-xl font-semibold tracking-tight">Users</h1>
          <UsersList />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
