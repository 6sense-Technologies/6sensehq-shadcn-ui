"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type RichAccordionItem = {
  value: string
  title: string
  /** Secondary line under the title (categories, roles, etc.) */
  subtitle?: string
  content?: ReactNode
  icon?: LucideIcon
  badge?: string
  /** `success` for green “New” / “Admin”; `secondary` for muted pills */
  badgeVariant?: "success" | "secondary"
  avatarSrc?: string
  avatarFallback?: string
  disabled?: boolean
}

export type RichAccordionVariant =
  | "icons"
  | "icon-meta"
  | "soft"
  | "cards"
  | "media-cards"
  | "boxed"
  | "media"
  | "avatar"

type RichAccordionProps = {
  items: RichAccordionItem[]
  variant?: RichAccordionVariant
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  className?: string
}

function hideDefaultChevrons(className?: string) {
  return cn(
    "hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden",
    className
  )
}

function TogglePlusX() {
  return (
    <>
      <PlusIcon className="ml-auto size-4 shrink-0 text-foreground group-aria-expanded/accordion-trigger:hidden" />
      <XIcon className="ml-auto hidden size-4 shrink-0 text-foreground group-aria-expanded/accordion-trigger:inline" />
    </>
  )
}

function TogglePlusMinus() {
  return (
    <>
      <PlusIcon className="ml-auto size-4 shrink-0 text-foreground group-aria-expanded/accordion-trigger:hidden" />
      <MinusIcon className="ml-auto hidden size-4 shrink-0 text-foreground group-aria-expanded/accordion-trigger:inline" />
    </>
  )
}

function ToggleChevron({ muted }: { muted?: boolean }) {
  return (
    <>
      <ChevronDownIcon
        className={cn(
          "ml-auto size-4 shrink-0 group-aria-expanded/accordion-trigger:hidden",
          muted ? "text-muted-foreground" : "text-muted-foreground"
        )}
      />
      <ChevronUpIcon
        className={cn(
          "ml-auto hidden size-4 shrink-0 group-aria-expanded/accordion-trigger:inline",
          "text-muted-foreground"
        )}
      />
    </>
  )
}

function ItemBadge({
  label,
  variant = "secondary",
}: {
  label: string
  variant?: "success" | "secondary"
}) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "rounded-md px-1.5 font-medium",
        variant === "success" &&
          "border-transparent bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
      )}
    >
      {label}
    </Badge>
  )
}

function RichAccordion({
  items,
  variant = "icons",
  defaultValue,
  value,
  onValueChange,
  className,
}: RichAccordionProps) {
  const shared = { defaultValue, value, onValueChange }

  if (variant === "icons") {
    return (
      <Accordion {...shared} className={cn("w-full", className)}>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
              <AccordionTrigger className={hideDefaultChevrons("items-center gap-3 py-4")}>
                {Icon ? <Icon className="size-5 shrink-0" /> : null}
                <span className="flex-1 font-semibold">{item.title}</span>
                <TogglePlusX />
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground pl-8">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }

  if (variant === "icon-meta") {
    return (
      <Accordion {...shared} className={cn("w-full", className)}>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
              <AccordionTrigger
                className={hideDefaultChevrons("items-center gap-3 py-4")}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border">
                  {Icon ? <Icon className="size-4" /> : null}
                </span>
                <span className="flex flex-1 flex-col gap-0.5 text-left">
                  <span className="font-semibold">{item.title}</span>
                  {item.subtitle ? (
                    <span className="text-sm font-normal text-muted-foreground">
                      {item.subtitle}
                    </span>
                  ) : null}
                </span>
                <TogglePlusMinus />
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-[3.25rem] text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }

  if (variant === "soft") {
    return (
      <Accordion {...shared} className={cn("w-full gap-1", className)}>
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className="rounded-xl border-0 px-4 transition-colors data-open:bg-muted"
          >
            <AccordionTrigger
              className={hideDefaultChevrons("items-center py-4 font-semibold")}
            >
              <span className="flex-1">{item.title}</span>
              <ToggleChevron />
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  if (variant === "cards") {
    return (
      <Accordion {...shared} className={cn("w-full gap-3", className)}>
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className="overflow-hidden rounded-xl border bg-background"
          >
            <AccordionTrigger
              className={hideDefaultChevrons(
                "items-center rounded-none bg-muted/50 px-4 py-3.5 font-semibold hover:bg-muted/80"
              )}
            >
              <span className="flex-1">{item.title}</span>
              <ToggleChevron />
            </AccordionTrigger>
            <AccordionContent className="border-t px-4 pt-3 pb-4 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  if (variant === "media-cards") {
    return (
      <Accordion {...shared} className={cn("w-full gap-3", className)}>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <AccordionItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className="overflow-hidden rounded-xl border bg-background"
            >
              <AccordionTrigger
                className={hideDefaultChevrons(
                  "items-center gap-3 px-4 py-3.5 hover:bg-muted/40"
                )}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  {Icon ? <Icon className="size-4" /> : null}
                </span>
                <span className="flex flex-1 items-center gap-2 text-left font-semibold">
                  {item.title}
                  {item.badge ? (
                    <ItemBadge
                      label={item.badge}
                      variant={item.badgeVariant ?? "success"}
                    />
                  ) : null}
                </span>
                <ToggleChevron />
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-[4.25rem] pr-4 text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }

  if (variant === "boxed") {
    return (
      <Accordion
        {...shared}
        className={cn(
          "w-full overflow-hidden rounded-xl border bg-background",
          className
        )}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className="px-4"
          >
            <AccordionTrigger
              className={hideDefaultChevrons(
                "items-center py-4 font-semibold data-disabled:text-muted-foreground"
              )}
            >
              <span className="flex-1">{item.title}</span>
              <ToggleChevron />
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  if (variant === "media") {
    return (
      <Accordion
        {...shared}
        className={cn(
          "w-full overflow-hidden rounded-xl border bg-background",
          className
        )}
      >
        {items.map((item) => {
          const Icon = item.icon
          return (
            <AccordionItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className="px-4"
            >
              <AccordionTrigger
                className={hideDefaultChevrons(
                  "items-center gap-3 py-4 hover:bg-transparent"
                )}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  {Icon ? <Icon className="size-4" /> : null}
                </span>
                <span className="flex flex-1 items-center gap-2 text-left font-semibold">
                  {item.title}
                  {item.badge ? (
                    <ItemBadge
                      label={item.badge}
                      variant={item.badgeVariant ?? "success"}
                    />
                  ) : null}
                </span>
                <ToggleChevron />
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-[3.25rem] text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }

  // avatar
  return (
    <Accordion
      {...shared}
      className={cn(
        "w-full overflow-hidden rounded-xl border bg-background",
        className
      )}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className="px-4"
        >
          <AccordionTrigger
            className={hideDefaultChevrons("items-center gap-3 py-4")}
          >
            <Avatar size="default">
              {item.avatarSrc ? (
                <AvatarImage src={item.avatarSrc} alt={item.title} />
              ) : null}
              <AvatarFallback>
                {item.avatarFallback ?? item.title.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <span className="flex flex-1 items-center gap-2 text-left font-semibold">
              {item.title}
              {item.badge ? (
                <ItemBadge
                  label={item.badge}
                  variant={item.badgeVariant ?? "secondary"}
                />
              ) : null}
            </span>
            <ToggleChevron />
          </AccordionTrigger>
          <AccordionContent className="pb-4 pl-11 text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { RichAccordion }
