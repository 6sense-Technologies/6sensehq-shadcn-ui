"use client"

import type { ReactNode } from "react"

import { AcademySidebar } from "@/components/app-shells/sidebars/academy-sidebar"
import { ShellTopbar } from "@/components/app-shells/shell-topbar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

type Crumb = { label: string; href?: string }

export function CreatePageShell({
  crumbs,
  children,
  className,
  contentClassName,
}: {
  crumbs: Crumb[]
  children: ReactNode
  className?: string
  contentClassName?: string
}) {
  return (
    <SidebarProvider>
      <AcademySidebar />
      <SidebarInset className={cn("min-w-0 bg-muted/40", className)}>
        <div className="sticky top-0 z-40 bg-background">
          <ShellTopbar hideSearch showShare>
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                {crumbs.map((crumb, index) => {
                  const isLast = index === crumbs.length - 1
                  return (
                    <span key={crumb.label} className="contents">
                      {index > 0 ? (
                        <BreadcrumbSeparator
                          className={cn(
                            index === 1 && "hidden sm:list-item",
                            index === 2 && "hidden md:list-item"
                          )}
                        />
                      ) : null}
                      <BreadcrumbItem
                        className={cn(
                          "min-w-0",
                          index === 0 && "hidden sm:inline-flex",
                          index === 1 && !isLast && "hidden md:inline-flex"
                        )}
                      >
                        {isLast || !crumb.href ? (
                          <BreadcrumbPage className="truncate">
                            {crumb.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={crumb.href}>
                            {crumb.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </span>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </ShellTopbar>
        </div>
        <div
          className={cn(
            "mx-auto flex w-full max-w-5xl flex-col gap-4 p-3 sm:p-4 md:p-6",
            contentClassName
          )}
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
