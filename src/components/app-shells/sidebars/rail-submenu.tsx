"use client"

import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import * as React from "react"

import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-popover"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-foreground/10"
      />
    </svg>
  )
}

export type RailSubItem = { title: string; badge?: string }

/** Tiny right caret that isn't affected by sidebar button svg sizing. */
export function RailSubmenuCaret({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "border-foreground inline-block size-0 shrink-0 border-y-[3px] border-l-[3.5px] border-y-transparent opacity-70 transition-opacity group-hover/menu-button:opacity-100 group-data-open/menu-button:opacity-100",
        className
      )}
    />
  )
}

export function RailSubmenu({
  title,
  items,
  trigger,
  children,
}: {
  title: string
  items: RailSubItem[]
  trigger: React.ReactElement<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={trigger}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="start"
        sideOffset={12}
        className="w-auto min-w-44 overflow-visible"
      >
        <MenuPrimitive.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
          <ArrowSvg />
        </MenuPrimitive.Arrow>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{title}</DropdownMenuLabel>
          {items.map((subItem) => (
            <DropdownMenuItem key={subItem.title} className="gap-6">
              {subItem.title}
              {subItem.badge ? (
                <Badge variant="secondary" className="ml-auto rounded-full">
                  {subItem.badge}
                </Badge>
              ) : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
