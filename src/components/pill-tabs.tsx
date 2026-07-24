"use client"

import type { LucideIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export type PillTabItem = {
  value: string
  label: string
  icon?: LucideIcon
  count?: number
}

type PillTabsProps = {
  items: PillTabItem[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  /** `inline` = icon beside label; `stacked` = icon above label */
  layout?: "inline" | "stacked"
  /** `pill` = fully rounded; `rounded` = soft rectangle */
  shape?: "pill" | "rounded"
  /**
   * `default` = muted track + white active pill
   * `inverted` = bordered white track + black active pill
   * `underline` = bottom border with thick active underline
   */
  variant?: "default" | "inverted" | "underline"
  className?: string
  listClassName?: string
  triggerClassName?: string
}

const shapeClasses = {
  pill: {
    list: "rounded-full",
    trigger: "rounded-full data-active:rounded-full",
  },
  rounded: {
    list: "rounded-2xl",
    trigger: "rounded-xl data-active:rounded-xl",
  },
} as const

const layoutClasses = {
  inline: "h-9 flex-row gap-2 px-4 py-2",
  stacked: "h-auto min-w-[5.5rem] flex-col gap-1 px-4 py-2.5",
} as const

const variantClasses = {
  default: {
    list: "bg-muted p-1",
    trigger: cn(
      "text-muted-foreground shadow-none hover:text-foreground",
      "data-active:bg-background data-active:text-foreground data-active:shadow-sm"
    ),
  },
  inverted: {
    list: "border border-border bg-background p-1",
    trigger: cn(
      "text-muted-foreground shadow-none hover:text-foreground",
      "data-active:bg-foreground data-active:text-background data-active:shadow-none",
      "data-active:hover:bg-foreground data-active:hover:text-background"
    ),
  },
  underline: {
    list: "w-full justify-start gap-6 rounded-none bg-transparent p-0",
    trigger: cn(
      "h-auto flex-none rounded-none px-0 pb-3 pt-0 -mb-px",
      "text-muted-foreground shadow-none hover:text-foreground",
      "data-active:bg-transparent data-active:font-semibold data-active:text-foreground data-active:shadow-none",
      "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-none after:bg-foreground after:opacity-0",
      "group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-0 group-data-horizontal/tabs:after:h-0.5",
      "data-active:after:opacity-100"
    ),
  },
} as const

function PillTabs({
  items,
  defaultValue,
  value,
  onValueChange,
  layout = "inline",
  shape = "pill",
  variant = "default",
  className,
  listClassName,
  triggerClassName,
}: PillTabsProps) {
  const resolvedDefaultValue = defaultValue ?? items[0]?.value
  const isUnderline = variant === "underline"

  return (
    <Tabs
      defaultValue={value === undefined ? resolvedDefaultValue : undefined}
      value={value}
      onValueChange={onValueChange}
      className={className}
    >
      <TabsList
        className={cn(
          "h-auto items-center group-data-horizontal/tabs:h-auto",
          !isUnderline && shapeClasses[shape].list,
          variantClasses[variant].list,
          isUnderline && "border-b border-border",
          listClassName
        )}
        variant={isUnderline ? "line" : "default"}
      >
        {items.map((item) => {
          const Icon = item.icon

          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                "relative flex flex-none items-center justify-center",
                !isUnderline && "after:hidden",
                !isUnderline && shapeClasses[shape].trigger,
                !isUnderline && layoutClasses[layout],
                variantClasses[variant].trigger,
                triggerClassName
              )}
            >
              {Icon ? <Icon className="size-4" /> : null}
              <span className="text-sm font-medium">{item.label}</span>
              {typeof item.count === "number" ? (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-medium text-background">
                  {item.count}
                </span>
              ) : null}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}

export { PillTabs }
