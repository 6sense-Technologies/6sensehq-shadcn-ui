"use client"

import { AcademySidebar } from "@/components/app-shells/sidebars/academy-sidebar"
import { ShellTopbar } from "@/components/app-shells/shell-topbar"
import { AiChatWorkspace } from "@/components/ai-chats/chat-workspace"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function AiChatWorkspacePage() {
  return (
    <SidebarProvider>
      <AcademySidebar />
      <SidebarInset className="flex h-svh min-w-0 flex-col overflow-hidden bg-muted/30">
        <div className="sticky top-0 z-40 shrink-0 bg-background">
          <ShellTopbar hideSearch showShare>
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="hidden sm:inline-flex">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden sm:list-item" />
                <BreadcrumbItem className="min-w-0">
                  <BreadcrumbPage className="truncate">AI Chat</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ShellTopbar>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-2 sm:p-3 md:p-4">
          <AiChatWorkspace />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
