"use client"

import type { ComponentType, ReactNode } from "react"

import { HeaderActions, ShellSearch } from "@/components/app-shells/shared"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function ShellTopbar({
  className,
  showShare = false,
  showProfileText = false,
  searchPlaceholder,
  hideSearch = false,
  children,
}: {
  className?: string
  showShare?: boolean
  showProfileText?: boolean
  searchPlaceholder?: string
  hideSearch?: boolean
  children?: ReactNode
}) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b px-3 sm:gap-3 sm:px-4",
        className
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-1 hidden data-vertical:h-4 data-vertical:self-center sm:block"
      />
      {children ? (
        <div className="min-w-0 flex-1">{children}</div>
      ) : !hideSearch ? (
        <ShellSearch
          placeholder={searchPlaceholder}
          className="hidden max-w-xs flex-1 sm:block md:max-w-sm"
        />
      ) : null}
      <div className="ml-auto">
        <HeaderActions showShare={showShare} showProfileText={showProfileText} />
      </div>
    </header>
  )
}

export function ShellMobileSearch({
  placeholder = "Type to search...",
}: {
  placeholder?: string
}) {
  return (
    <div className="border-b p-3 sm:hidden">
      <ShellSearch placeholder={placeholder} className="max-w-none" />
    </div>
  )
}

export type NavItem = {
  title: string
  icon: ComponentType<{ className?: string }>
}

export function HorizontalNav({
  items,
  className,
}: {
  items: NavItem[]
  className?: string
}) {
  return (
    <nav
      className={cn(
        "flex gap-1 overflow-x-auto border-b px-3 py-2 sm:px-4",
        className
      )}
    >
      {items.map((item, index) => (
        <Button
          key={item.title}
          variant="ghost"
          size="sm"
          className={cn(
            "shrink-0 gap-2",
            index === 0 && "bg-muted"
          )}
        >
          <item.icon className="size-4" />
          <span className="hidden sm:inline">{item.title}</span>
        </Button>
      ))}
    </nav>
  )
}
