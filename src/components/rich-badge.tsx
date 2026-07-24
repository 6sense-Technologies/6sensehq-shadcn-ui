import type { ReactNode } from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

type RichBadgeProps = {
  children: ReactNode
  /** Filled gradient, gradient border, or avatar chip */
  appearance?: "default" | "gradient" | "gradient-outline" | "avatar"
  avatarSrc?: string
  avatarAlt?: string
  avatarFallback?: string
  variant?: VariantProps<typeof badgeVariants>["variant"]
  className?: string
}

function RichBadge({
  children,
  appearance = "default",
  avatarSrc,
  avatarAlt,
  avatarFallback = "?",
  variant = "outline",
  className,
}: RichBadgeProps) {
  if (appearance === "gradient") {
    return (
      <Badge
        className={cn(
          "border-transparent bg-gradient-to-r from-foreground to-muted-foreground text-background",
          className
        )}
      >
        {children}
      </Badge>
    )
  }

  if (appearance === "gradient-outline") {
    return (
      <span
        className={cn(
          "inline-flex rounded-4xl bg-gradient-to-r from-foreground to-muted-foreground p-px",
          className
        )}
      >
        <Badge
          variant="outline"
          className="border-0 bg-background text-foreground"
        >
          {children}
        </Badge>
      </span>
    )
  }

  if (appearance === "avatar") {
    return (
      <Badge
        variant={variant}
        className={cn(
          "h-7 gap-1.5 rounded-full border-border pr-2.5 pl-1",
          className
        )}
      >
        <Avatar size="sm" className="size-5 after:border-0">
          {avatarSrc ? (
            <AvatarImage src={avatarSrc} alt={avatarAlt ?? avatarFallback} />
          ) : null}
          <AvatarFallback className="text-[9px]">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        {children}
      </Badge>
    )
  }

  return (
    <Badge variant={variant} className={className}>
      {children}
    </Badge>
  )
}

export { RichBadge }
