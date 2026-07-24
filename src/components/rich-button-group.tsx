"use client"

import type { LucideIcon } from "lucide-react"
import { DownloadIcon, PaperclipIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { cn } from "@/lib/utils"

type RichButtonGroupProps = {
  /** Attachment pill: label + optional meta + download action */
  appearance?: "attachment"
  label: string
  meta?: string
  leadingIcon?: LucideIcon
  actionIcon?: LucideIcon
  onPrimary?: () => void
  onAction?: () => void
  className?: string
}

function RichButtonGroup({
  appearance = "attachment",
  label,
  meta,
  leadingIcon: LeadingIcon = PaperclipIcon,
  actionIcon: ActionIcon = DownloadIcon,
  onPrimary,
  onAction,
  className,
}: RichButtonGroupProps) {
  if (appearance === "attachment") {
    return (
      <ButtonGroup
        className={cn(
          "overflow-hidden rounded-full border border-border",
          "*:data-slot:rounded-none! *:data-slot:border-0!",
          "[&>[data-slot]:first-child]:rounded-l-full! [&>[data-slot]:last-child]:rounded-r-full!",
          className
        )}
      >
        <Button
          type="button"
          variant="ghost"
          className="gap-2 px-3 font-normal hover:bg-muted"
          onClick={onPrimary}
        >
          <LeadingIcon data-icon="inline-start" />
          <span className="inline-flex items-center gap-1.5">
            <span className="font-semibold">{label}</span>
            {meta ? (
              <span className="text-muted-foreground font-normal">({meta})</span>
            ) : null}
          </span>
        </Button>
        <ButtonGroupSeparator className="bg-border" />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="hover:bg-muted"
          onClick={onAction}
          aria-label="Download"
        >
          <ActionIcon />
        </Button>
      </ButtonGroup>
    )
  }

  return null
}

export { RichButtonGroup }
