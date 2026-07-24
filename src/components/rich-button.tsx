import type { ComponentProps, ReactNode } from "react"
import type { Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ButtonProps = ComponentProps<typeof Button>

type RichButtonProps = Omit<ButtonProps, "children"> & {
  appearance?: "default" | "dashed" | "count" | "choice" | "social"
  icon?: Icon
  count?: number | string
  /** Choice card title */
  title?: string
  /** Choice card description */
  description?: string
  /** Social: muted prefix e.g. "Login with" */
  prefix?: string
  children?: ReactNode
}

function RichButton({
  appearance = "default",
  icon: Icon,
  count,
  title,
  description,
  prefix,
  children,
  className,
  variant,
  size,
  ...props
}: RichButtonProps) {
  if (appearance === "dashed") {
    return (
      <Button
        variant={variant ?? "outline"}
        size={size}
        className={cn("border-dashed", className)}
        {...props}
      >
        {Icon ? <Icon data-icon="inline-start" /> : null}
        {children}
      </Button>
    )
  }

  if (appearance === "count") {
    const isOutline = (variant ?? "default") === "outline"
    return (
      <Button
        variant={variant ?? "default"}
        size={size}
        className={cn("gap-0 rounded-full px-0", className)}
        {...props}
      >
        <span className="inline-flex items-center gap-1.5 px-3">
          {Icon ? <Icon className="size-4" /> : null}
          {children}
        </span>
        <span
          className={cn(
            "h-4 w-px shrink-0",
            isOutline ? "bg-border" : "bg-primary-foreground/30"
          )}
          aria-hidden
        />
        <span
          className={cn(
            "px-3 tabular-nums",
            isOutline && "text-muted-foreground font-normal"
          )}
        >
          {count}
        </span>
      </Button>
    )
  }

  if (appearance === "choice") {
    return (
      <Button
        variant={variant ?? "outline"}
        size={size}
        className={cn(
          "h-auto w-full max-w-sm justify-start gap-3 rounded-xl px-4 py-3",
          className
        )}
        {...props}
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
          {Icon ? <Icon className="size-4" /> : null}
        </span>
        <span className="flex min-w-0 flex-col items-start gap-0.5 text-left">
          <span className="font-semibold">{title}</span>
          {description ? (
            <span className="text-muted-foreground text-sm font-normal whitespace-normal">
              {description}
            </span>
          ) : null}
        </span>
      </Button>
    )
  }

  if (appearance === "social") {
    return (
      <Button
        variant={variant ?? "outline"}
        size={size ?? "lg"}
        className={cn("w-full justify-center gap-2", className)}
        {...props}
      >
        {Icon ? <Icon data-icon="inline-start" className="size-4" /> : null}
        {prefix ? (
          <span className="inline-flex items-center gap-1">
            <span className="text-muted-foreground font-normal">{prefix}</span>
            <span className="font-semibold">{children}</span>
          </span>
        ) : (
          children
        )}
      </Button>
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {Icon ? <Icon data-icon="inline-start" /> : null}
      {children}
    </Button>
  )
}

type SocialIconButtonProps = Omit<ButtonProps, "children" | "size"> & {
  icon: Icon
  label: string
}

function SocialIconButton({
  icon: Icon,
  label,
  className,
  variant = "outline",
  ...props
}: SocialIconButtonProps) {
  return (
    <Button
      variant={variant}
      size="icon-lg"
      className={cn("rounded-xl", className)}
      aria-label={label}
      {...props}
    >
      <Icon className="size-5" />
    </Button>
  )
}

export { RichButton, SocialIconButton }
