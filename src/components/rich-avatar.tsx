"use client"

import { BadgeCheckIcon, PlusIcon, UserIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type AvatarBadgePosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"

type RichAvatarProps = {
  src?: string
  alt?: string
  fallback?: string
  fallbackIcon?: boolean
  shape?: "circle" | "rounded"
  size?: "sm" | "default" | "lg" | "xl"
  ring?: boolean
  status?: boolean
  count?: number | string
  verified?: boolean
  badgePosition?: AvatarBadgePosition
  className?: string
}

const sizeMap = {
  sm: "sm" as const,
  default: "default" as const,
  lg: "lg" as const,
  xl: "lg" as const,
}

const sizeClass = {
  sm: "",
  default: "",
  lg: "",
  xl: "size-14 data-[size=lg]:size-14",
}

const badgePositionClass: Record<AvatarBadgePosition, string> = {
  "top-right": "top-0 right-0 bottom-auto left-auto",
  "top-left": "top-0 left-0 bottom-auto right-auto",
  "bottom-right": "right-0 bottom-0 top-auto left-auto",
  "bottom-left": "bottom-0 left-0 top-auto right-auto",
}

function RichAvatar({
  src,
  alt,
  fallback,
  fallbackIcon = false,
  shape = "circle",
  size = "default",
  ring = false,
  status = false,
  count,
  verified = false,
  badgePosition = "bottom-right",
  className,
}: RichAvatarProps) {
  const isRounded = shape === "rounded"
  const showCount = count !== undefined && count !== null && count !== ""

  return (
    <Avatar
      size={sizeMap[size]}
      className={cn(
        sizeClass[size],
        isRounded &&
          "rounded-lg after:rounded-lg **:data-[slot=avatar-image]:rounded-lg **:data-[slot=avatar-fallback]:rounded-lg",
        ring &&
          "p-0.5 ring-2 ring-foreground ring-offset-2 ring-offset-background after:hidden",
        className
      )}
    >
      {src ? <AvatarImage src={src} alt={alt ?? fallback ?? "Avatar"} /> : null}
      <AvatarFallback
        className={cn(isRounded && "rounded-lg", !fallbackIcon && "font-medium")}
      >
        {fallbackIcon ? <UserIcon className="size-4" /> : (fallback ?? "?")}
      </AvatarFallback>

      {status ? <AvatarBadge className="bg-foreground" /> : null}

      {showCount ? (
        <span
          className={cn(
            "absolute z-10 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-medium text-background ring-2 ring-background",
            status ? "top-0 right-0" : badgePositionClass[badgePosition]
          )}
        >
          {count}
        </span>
      ) : null}

      {verified ? (
        <AvatarBadge
          className={cn(
            "bg-foreground text-background",
            "group-data-[size=default]/avatar:size-3.5 group-data-[size=lg]/avatar:size-4 group-data-[size=sm]/avatar:size-3",
            "group-data-[size=default]/avatar:[&>svg]:size-2.5 group-data-[size=lg]/avatar:[&>svg]:size-3 group-data-[size=sm]/avatar:[&>svg]:size-2",
            badgePositionClass[badgePosition]
          )}
        >
          <BadgeCheckIcon />
        </AvatarBadge>
      ) : null}
    </Avatar>
  )
}

type RichAvatarGroupItem = {
  src?: string
  alt?: string
  fallback?: string
}

type RichAvatarGroupProps = {
  items: RichAvatarGroupItem[]
  count?: string
  pill?: boolean
  onAdd?: () => void
  size?: "sm" | "default" | "lg"
  className?: string
}

function RichAvatarGroup({
  items,
  count,
  pill = false,
  onAdd,
  size = "default",
  className,
}: RichAvatarGroupProps) {
  const content = (
    <>
      <AvatarGroup>
        {items.map((item, index) => (
          <Avatar key={index} size={size}>
            {item.src ? (
              <AvatarImage src={item.src} alt={item.alt ?? item.fallback} />
            ) : null}
            <AvatarFallback>{item.fallback ?? "?"}</AvatarFallback>
          </Avatar>
        ))}
        {count ? <AvatarGroupCount>{count}</AvatarGroupCount> : null}
      </AvatarGroup>
      {onAdd ? (
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="shrink-0 rounded-full"
          onClick={onAdd}
          aria-label="Add"
        >
          <PlusIcon />
        </Button>
      ) : null}
    </>
  )

  if (pill) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border bg-card px-2 py-1.5 shadow-xs",
          onAdd && "pr-1.5",
          className
        )}
      >
        {content}
      </div>
    )
  }

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {content}
    </div>
  )
}

export { RichAvatar, RichAvatarGroup }
