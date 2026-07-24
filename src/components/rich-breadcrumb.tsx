import type { LucideIcon } from "lucide-react"
import { Fragment } from "react"
import { HomeIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

export type RichBreadcrumbItem = {
  label?: string
  href?: string
  icon?: LucideIcon
  /** Wrap the icon in a bordered rounded square */
  iconBox?: boolean
}

type RichBreadcrumbProps = {
  items: RichBreadcrumbItem[]
  /** Outer wrapper style */
  container?: "none" | "pill" | "bordered"
  className?: string
}

function ItemContent({
  item,
  isCurrent,
}: {
  item: RichBreadcrumbItem
  isCurrent: boolean
}) {
  const Icon = item.icon
  const iconNode = Icon ? (
    item.iconBox ? (
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground">
        <Icon className="size-3.5" />
      </span>
    ) : (
      <Icon className="size-3.5 shrink-0" />
    )
  ) : null

  if (isCurrent) {
    return (
      <BreadcrumbPage className="inline-flex items-center gap-1.5 font-semibold">
        {iconNode}
        {item.label}
      </BreadcrumbPage>
    )
  }

  return (
    <BreadcrumbLink
      href={item.href ?? "#"}
      className="inline-flex items-center gap-1.5"
    >
      {iconNode}
      {item.label ? <span>{item.label}</span> : null}
      {!item.label && Icon ? <span className="sr-only">Home</span> : null}
    </BreadcrumbLink>
  )
}

function RichBreadcrumb({
  items,
  container = "none",
  className,
}: RichBreadcrumbProps) {
  const list = (
    <BreadcrumbList
      className={cn(
        container !== "none" && "gap-2 sm:gap-2.5",
        container === "none" && className
      )}
    >
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1
        return (
          <Fragment key={`${item.label ?? "item"}-${index}`}>
            {index > 0 ? <BreadcrumbSeparator /> : null}
            <BreadcrumbItem>
              <ItemContent item={item} isCurrent={isCurrent} />
            </BreadcrumbItem>
          </Fragment>
        )
      })}
    </BreadcrumbList>
  )

  if (container === "pill") {
    return (
      <Breadcrumb
        className={cn(
          "inline-flex w-fit rounded-full border bg-card px-3 py-2 shadow-xs",
          className
        )}
      >
        {list}
      </Breadcrumb>
    )
  }

  if (container === "bordered") {
    return (
      <Breadcrumb
        className={cn(
          "inline-flex w-fit rounded-lg border bg-card px-3 py-2",
          className
        )}
      >
        {list}
      </Breadcrumb>
    )
  }

  return <Breadcrumb className={className}>{list}</Breadcrumb>
}

/** Convenience presets matching common gallery patterns */
const homeIconItem = (href = "#"): RichBreadcrumbItem => ({
  href,
  icon: HomeIcon,
})

const homeIconBoxItem = (href = "#"): RichBreadcrumbItem => ({
  href,
  icon: HomeIcon,
  iconBox: true,
})

const homeLabelItem = (href = "#"): RichBreadcrumbItem => ({
  label: "Home",
  href,
  icon: HomeIcon,
})

export {
  RichBreadcrumb,
  homeIconItem,
  homeIconBoxItem,
  homeLabelItem,
}
