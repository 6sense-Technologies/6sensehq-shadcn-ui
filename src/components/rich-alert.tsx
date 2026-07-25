"use client"

import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { CircleAlertIcon, XIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export type RichAlertLayout =
  | "inline"
  | "media"
  | "dismiss"
  | "link"
  | "tile"
  | "upload"
  | "update"
  | "status"
  | "soft-dismiss"
  | "accent"
  | "action"
  | "callout"
  | "soft"

type RichAlertProps = {
  title: string
  description?: string
  icon?: LucideIcon
  /** Leading media (avatar / custom node). Used by `media` and `status`. */
  media?: ReactNode
  trailingIcon?: LucideIcon
  onClose?: () => void
  /** Right-side action node (`link`, `action`) */
  action?: ReactNode
  /** Footer actions (`upload`, `update`) */
  actions?: ReactNode
  /** 0–100 progress value (`upload`, `status`) */
  progress?: number
  layout?: RichAlertLayout
  className?: string
}

function CloseButton({ onClose }: { onClose?: () => void }) {
  if (!onClose) return null
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-xs"
      className="shrink-0 text-muted-foreground hover:text-foreground"
      onClick={onClose}
      aria-label="Dismiss"
    >
      <XIcon />
    </Button>
  )
}

function RichAlert({
  title,
  description,
  icon: Icon = CircleAlertIcon,
  media,
  trailingIcon: TrailingIcon,
  onClose,
  action,
  actions,
  progress,
  layout = "inline",
  className,
}: RichAlertProps) {
  if (layout === "inline") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-center gap-2 rounded-xl border bg-card px-4 py-3 text-card-foreground",
          className
        )}
      >
        <Icon className="size-4 shrink-0" />
        <span className="text-sm font-medium">{title}</span>
      </div>
    )
  }

  if (layout === "media") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-center gap-3 rounded-xl border bg-card px-4 py-3 text-card-foreground",
          className
        )}
      >
        {media}
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold">{title}</div>
          {description ? (
            <div className="text-sm text-muted-foreground">{description}</div>
          ) : null}
        </div>
        {TrailingIcon ? (
          <TrailingIcon className="size-4 shrink-0 text-foreground" />
        ) : (
          <CircleAlertIcon className="size-4 shrink-0" />
        )}
      </div>
    )
  }

  if (layout === "dismiss") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-start gap-2 rounded-xl border bg-card p-4 text-card-foreground",
          className
        )}
      >
        <Icon className="mt-0.5 size-4 shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold">{title}</div>
          {description ? (
            <div className="mt-1 text-sm text-muted-foreground">
              {description}
            </div>
          ) : null}
        </div>
        <CloseButton onClose={onClose} />
      </div>
    )
  }

  if (layout === "link" || layout === "action") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-start gap-2 rounded-xl border bg-card px-2.5 py-1.5 text-card-foreground sm:items-center sm:gap-3 sm:px-4 sm:py-3",
          className
        )}
      >
        <div className="flex min-w-0 flex-1 items-start gap-1.5 sm:items-center sm:gap-2">
          <Icon className="mt-0.5 size-3.5 shrink-0 sm:mt-0 sm:size-4" />
          <span className="text-xs leading-snug font-medium sm:text-sm sm:leading-normal">
            {title}
          </span>
        </div>
        {action ? (
          <div className="shrink-0 self-center">{action}</div>
        ) : null}
      </div>
    )
  }

  if (layout === "tile") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-center gap-3 rounded-xl border bg-card px-4 py-3 text-card-foreground",
          className
        )}
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
          <Icon className="size-4" />
        </span>
        <span className="text-sm font-medium">{title}</span>
      </div>
    )
  }

  if (layout === "upload") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full flex-col gap-3 rounded-xl border bg-card p-4 text-card-foreground",
          className
        )}
      >
        <div className="flex items-start gap-2">
          <Icon className="mt-0.5 size-4 shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="pr-6 text-sm font-semibold">{title}</div>
            {description ? (
              <div className="mt-1 text-sm text-muted-foreground">
                {description}
              </div>
            ) : null}
          </div>
          <CloseButton onClose={onClose} />
        </div>
        {typeof progress === "number" ? (
          <Progress value={progress} className="w-full gap-0" />
        ) : null}
        {actions ? <div className="flex items-center gap-4">{actions}</div> : null}
      </div>
    )
  }

  if (layout === "update") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full flex-col gap-3 rounded-xl bg-foreground p-4 text-background",
          className
        )}
      >
        <div className="flex items-start gap-2">
          <Icon className="mt-0.5 size-4 shrink-0" />
          <div className="min-w-0 flex-1 text-sm font-semibold">{title}</div>
          {onClose ? (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="shrink-0 text-background/70 hover:bg-background/10 hover:text-background"
              onClick={onClose}
              aria-label="Dismiss"
            >
              <XIcon />
            </Button>
          ) : null}
        </div>
        {description ? (
          <p className="text-sm text-background/70">{description}</p>
        ) : null}
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
    )
  }

  if (layout === "status") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-start gap-3 rounded-xl border bg-card p-4 text-card-foreground",
          className
        )}
      >
        {media}
        <div className="min-w-0 flex-1 space-y-2">
          <div>
            <div className="text-sm font-semibold">{title}</div>
            {description ? (
              <div className="text-sm text-muted-foreground">{description}</div>
            ) : null}
          </div>
          {typeof progress === "number" ? (
            <Progress value={progress} className="w-full gap-0" />
          ) : null}
        </div>
      </div>
    )
  }

  if (layout === "soft-dismiss") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-start gap-2 rounded-xl border bg-muted/60 p-4 text-foreground",
          className
        )}
      >
        <Icon className="mt-0.5 size-4 shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="pr-6 text-sm font-semibold">{title}</div>
          {description ? (
            <div className="mt-1 text-sm text-muted-foreground">
              {description}
            </div>
          ) : null}
        </div>
        <CloseButton onClose={onClose} />
      </div>
    )
  }

  if (layout === "accent") {
    return (
      <div
        role="alert"
        className={cn(
          "flex w-full items-center gap-2 rounded-lg border border-l-4 border-l-foreground bg-muted/40 py-3 pr-4 pl-3 text-foreground",
          className
        )}
      >
        <Icon className="size-4 shrink-0" />
        <span className="text-sm font-medium">{title}</span>
      </div>
    )
  }

  if (layout === "callout" || layout === "soft") {
    return (
      <Alert
        className={cn(
          "items-start gap-x-2 rounded-xl px-4 py-3 [&>svg]:translate-y-0.5",
          layout === "soft" && "border-transparent bg-muted",
          className
        )}
      >
        <Icon />
        <AlertTitle className="font-semibold">{title}</AlertTitle>
        {description ? (
          <AlertDescription>{description}</AlertDescription>
        ) : null}
      </Alert>
    )
  }

  return null
}

export { RichAlert }
