"use client"

import { Fragment } from "react"
import type { LucideIcon } from "lucide-react"
import { CheckCircle2Icon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type StepperItem = {
  title?: string
  description?: string
  icon?: LucideIcon
}

export type StepperVariant =
  | "default"
  | "outline"
  | "icons"
  | "segments"
  | "nav"
  | "inline"

type StepperProps = {
  steps: StepperItem[]
  /** Zero-based current step index */
  step: number
  onStepChange?: (step: number) => void
  orientation?: "horizontal" | "vertical"
  /**
   * `default` — numbered squares with outer ring
   * `outline` — bordered squares
   * `icons` — icon squares/circles with optional labels
   * `segments` — pill progress bars
   * `nav` — icon + label with chevron separators
   * `inline` — circle icon beside title/description with chevrons
   */
  variant?: StepperVariant
  /** Indicator shape for default / icons / vertical */
  indicator?: "square" | "circle"
  /** Show connecting line between steps (ignored for segments / nav / inline) */
  showConnector?: boolean
  /** Show checkmark for completed steps (before current) */
  showCompleted?: boolean
  className?: string
}

type StepStatus = "completed" | "current" | "upcoming"

function getStatus(index: number, step: number): StepStatus {
  if (index < step) return "completed"
  if (index === step) return "current"
  return "upcoming"
}

function StepIndicator({
  index,
  status,
  variant,
  indicator,
  showCompleted,
  Icon,
  onStepChange,
  size = "md",
}: {
  index: number
  status: StepStatus
  variant: StepperVariant
  indicator: "square" | "circle"
  showCompleted: boolean
  Icon?: LucideIcon
  onStepChange?: (step: number) => void
  size?: "md" | "lg"
}) {
  const isOutline = variant === "outline"
  const isCurrent = status === "current"
  const isCompleted = status === "completed"
  const isUpcoming = status === "upcoming"
  const isCircle = indicator === "circle"
  const isLg = size === "lg"

  return (
    <button
      type="button"
      aria-current={isCurrent ? "step" : undefined}
      onClick={() => onStepChange?.(index)}
      className={cn(
        "group relative z-10 flex shrink-0 items-center justify-center bg-background p-0.5 transition-colors",
        isCircle ? "rounded-full" : "rounded-[10px]",
        onStepChange ? "cursor-pointer" : "cursor-default",
        !isOutline && "border border-transparent hover:border-border",
        !isOutline && isCurrent && "border-border"
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center text-sm font-medium transition-colors",
          isLg ? "size-12" : "size-8",
          isCircle ? "rounded-full" : "rounded-lg",
          isOutline &&
            (isCurrent || isCompleted) &&
            "border border-foreground bg-background text-foreground",
          isOutline &&
            isUpcoming &&
            "border border-border bg-background text-muted-foreground group-hover:border-foreground group-hover:text-foreground",
          !isOutline &&
            (isCurrent || isCompleted) &&
            "bg-foreground text-background",
          !isOutline && isUpcoming && "bg-muted text-foreground"
        )}
      >
        {isCompleted && showCompleted ? (
          <CheckCircle2Icon className={isLg ? "size-5" : "size-4"} />
        ) : (variant === "icons" || variant === "inline") && Icon ? (
          <Icon className={isLg ? "size-5" : "size-4"} />
        ) : (
          index + 1
        )}
      </span>
    </button>
  )
}

function SegmentsStepper({
  steps,
  step,
  onStepChange,
  className,
}: {
  steps: StepperItem[]
  step: number
  onStepChange?: (step: number) => void
  className?: string
}) {
  return (
    <nav aria-label="Progress" className={cn("flex w-full flex-col gap-3", className)}>
      <ol className="flex w-full gap-2">
        {steps.map((_, index) => {
          const filled = index <= step
          return (
            <li key={index} className="min-w-0 flex-1">
              <button
                type="button"
                aria-current={index === step ? "step" : undefined}
                aria-label={`Step ${index + 1}`}
                onClick={() => onStepChange?.(index)}
                className={cn(
                  "h-1.5 w-full rounded-full transition-colors",
                  onStepChange ? "cursor-pointer" : "cursor-default",
                  filled
                    ? "bg-foreground hover:bg-foreground/90"
                    : "bg-muted hover:bg-muted-foreground/25"
                )}
              />
            </li>
          )
        })}
      </ol>
      <p className="text-sm text-muted-foreground">
        Step {step + 1} of {steps.length}
      </p>
    </nav>
  )
}

function NavStepper({
  steps,
  step,
  onStepChange,
  className,
}: {
  steps: StepperItem[]
  step: number
  onStepChange?: (step: number) => void
  className?: string
}) {
  return (
    <nav
      aria-label="Progress"
      className={cn(
        "flex w-full items-center justify-center gap-3 sm:gap-4",
        className
      )}
    >
      {steps.map((item, index) => {
        const status = getStatus(index, step)
        const isActive = status !== "upcoming"
        const Icon = item.icon
        const isLast = index === steps.length - 1

        return (
          <Fragment key={index}>
            <button
              type="button"
              aria-current={status === "current" ? "step" : undefined}
              onClick={() => onStepChange?.(index)}
              className={cn(
                "flex flex-col items-center gap-2 transition-colors",
                onStepChange ? "cursor-pointer" : "cursor-default",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {Icon ? <Icon className="size-8 stroke-[1.5]" /> : null}
              {item.title ? (
                <span className="text-sm font-medium">{item.title}</span>
              ) : null}
            </button>
            {!isLast ? (
              <ChevronRightIcon
                className="mb-6 size-4 shrink-0 text-muted-foreground"
                aria-hidden
              />
            ) : null}
          </Fragment>
        )
      })}
    </nav>
  )
}

function InlineStepper({
  steps,
  step,
  onStepChange,
  orientation = "horizontal",
  showConnector = false,
  className,
}: {
  steps: StepperItem[]
  step: number
  onStepChange?: (step: number) => void
  orientation?: "horizontal" | "vertical"
  showConnector?: boolean
  className?: string
}) {
  const isVertical = orientation === "vertical"

  if (isVertical) {
    return (
      <nav
        aria-label="Progress"
        className={cn("flex w-full flex-col", className)}
      >
        {steps.map((item, index) => {
          const status = getStatus(index, step)
          const isLast = index === steps.length - 1
          const lineComplete = index < step

          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <StepIndicator
                  index={index}
                  status={status}
                  variant="inline"
                  indicator="circle"
                  showCompleted={false}
                  Icon={item.icon}
                  onStepChange={onStepChange}
                  size="lg"
                />
                {showConnector && !isLast ? (
                  <div
                    className={cn(
                      "w-px flex-1 min-h-6 transition-colors",
                      lineComplete ? "bg-foreground" : "bg-border"
                    )}
                    aria-hidden
                  />
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => onStepChange?.(index)}
                className={cn(
                  "flex min-w-0 flex-col gap-0.5 pt-2.5 text-left",
                  !isLast && (showConnector ? "pb-6" : "pb-5"),
                  onStepChange ? "cursor-pointer" : "cursor-default"
                )}
              >
                {item.title ? (
                  <span className="text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                ) : null}
                {item.description ? (
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </button>
            </div>
          )
        })}
      </nav>
    )
  }

  return (
    <nav
      aria-label="Progress"
      className={cn(
        "flex w-full flex-nowrap items-center justify-between gap-3 overflow-x-auto",
        className
      )}
    >
      {steps.map((item, index) => {
        const status = getStatus(index, step)
        const isLast = index === steps.length - 1

        return (
          <div key={index} className="flex shrink-0 items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <StepIndicator
                index={index}
                status={status}
                variant="inline"
                indicator="circle"
                showCompleted={false}
                Icon={item.icon}
                onStepChange={onStepChange}
                size="lg"
              />
              <button
                type="button"
                onClick={() => onStepChange?.(index)}
                className={cn(
                  "flex min-w-0 flex-col gap-0.5 text-left transition-opacity hover:opacity-80",
                  onStepChange ? "cursor-pointer" : "cursor-default"
                )}
              >
                {item.title ? (
                  <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                ) : null}
                {item.description ? (
                  <span className="whitespace-nowrap text-sm text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </button>
            </div>
            {!isLast ? (
              <ChevronRightIcon
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden
              />
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}

function Stepper({
  steps,
  step,
  onStepChange,
  orientation = "horizontal",
  variant = "default",
  indicator = "square",
  showConnector,
  showCompleted = false,
  className,
}: StepperProps) {
  if (variant === "segments") {
    return (
      <SegmentsStepper
        steps={steps}
        step={step}
        onStepChange={onStepChange}
        className={className}
      />
    )
  }

  if (variant === "nav") {
    return (
      <NavStepper
        steps={steps}
        step={step}
        onStepChange={onStepChange}
        className={className}
      />
    )
  }

  if (variant === "inline") {
    return (
      <InlineStepper
        steps={steps}
        step={step}
        onStepChange={onStepChange}
        orientation={orientation}
        showConnector={showConnector ?? orientation === "vertical"}
        className={className}
      />
    )
  }

  const isVertical = orientation === "vertical"
  const connectorGap = variant === "outline"
  const useConnector = showConnector ?? true
  const shape = indicator

  if (isVertical) {
    return (
      <nav
        aria-label="Progress"
        className={cn("flex w-full flex-col", className)}
      >
        {steps.map((item, index) => {
          const status = getStatus(index, step)
          const isLast = index === steps.length - 1
          const lineComplete = index < step

          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <StepIndicator
                  index={index}
                  status={status}
                  variant={variant}
                  indicator={shape}
                  showCompleted={showCompleted}
                  Icon={item.icon}
                  onStepChange={onStepChange}
                />
                {useConnector && !isLast ? (
                  <div
                    className={cn(
                      "w-px flex-1 min-h-8 transition-colors",
                      lineComplete ? "bg-foreground" : "bg-border"
                    )}
                    aria-hidden
                  />
                ) : null}
              </div>
              <div
                className={cn(
                  "flex min-w-0 flex-col gap-0.5 pt-1.5",
                  !isLast && "pb-8"
                )}
              >
                {item.title ? (
                  <span className="text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                ) : null}
                {item.description ? (
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </div>
            </div>
          )
        })}
      </nav>
    )
  }

  return (
    <nav
      aria-label="Progress"
      className={cn("flex w-full items-start", className)}
    >
      {steps.map((item, index) => {
        const status = getStatus(index, step)
        const isLast = index === steps.length - 1
        const hasContent = Boolean(item.title || item.description)
        const leftComplete = index <= step
        const rightComplete = index < step

        return (
          <div
            key={index}
            className={cn(
              "relative flex min-w-0 flex-1 flex-col items-center",
              hasContent ? "gap-3" : "gap-0"
            )}
          >
            <div className="relative flex h-10 w-full items-center justify-center">
              {useConnector && index > 0 ? (
                <div
                  className={cn(
                    "absolute top-1/2 left-0 -translate-y-1/2 transition-colors",
                    connectorGap
                      ? "right-[calc(50%+1.25rem)]"
                      : "right-1/2",
                    leftComplete ? "h-0.5 bg-foreground" : "h-px bg-border"
                  )}
                  aria-hidden
                />
              ) : null}

              {useConnector && !isLast ? (
                <div
                  className={cn(
                    "absolute top-1/2 right-0 -translate-y-1/2 transition-colors",
                    connectorGap
                      ? "left-[calc(50%+1.25rem)]"
                      : "left-1/2",
                    rightComplete ? "h-0.5 bg-foreground" : "h-px bg-border"
                  )}
                  aria-hidden
                />
              ) : null}

              <StepIndicator
                index={index}
                status={status}
                variant={variant}
                indicator={shape}
                showCompleted={showCompleted}
                Icon={item.icon}
                onStepChange={onStepChange}
              />
            </div>

            {hasContent ? (
              <div className="flex max-w-[9rem] flex-col items-center gap-0.5 text-center sm:max-w-none">
                {item.title ? (
                  <span className="text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                ) : null}
                {item.description ? (
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}

export { Stepper }
