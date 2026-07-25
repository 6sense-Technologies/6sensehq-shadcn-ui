"use client"

import * as React from "react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import {
  ChevronDownIcon,
  CirclePlusIcon,
  CircleXIcon,
  DownloadIcon,
  SettingsIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type Brand = "mastercard" | "visa" | "amex"
export type Wallet = "apple" | "link" | null
export type Status =
  | "uncaptured"
  | "failed"
  | "canceled"
  | "partially-reversed"
  | "succeeded"
  | "refunded"
  | "disputed"
  | "blocked"

export type Filters = {
  date?: { display: string }
  amount?: { display: string }
  currency?: { display: string; value: string }
  status?: { display: string; value: Status }
  paymentMethod?: { display: string; value: "card" | "apple" | "link" }
  cardBrand?: { display: string; value: Brand }
}

const accent = "text-[#635BFF]"

/* ------------------------------ chip shell ------------------------------ */

function FilterChip({
  label,
  value,
  open,
  onOpenChange,
  onRemove,
  children,
  contentClassName,
}: {
  label: string
  value?: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onRemove?: () => void
  children: React.ReactNode
  contentClassName?: string
}) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      {value ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-background py-1 pr-2 pl-1.5 text-sm">
          <button
            type="button"
            aria-label={`Remove ${label} filter`}
            onClick={onRemove}
            className="text-muted-foreground hover:text-foreground"
          >
            <CircleXIcon className="size-3.5" />
          </button>
          <span className="text-muted-foreground">{label}</span>
          <span aria-hidden className="h-3.5 w-px bg-border" />
          <PopoverTrigger
            render={
              <button
                type="button"
                className={cn("inline-flex items-center gap-1 font-medium", accent)}
              />
            }
          >
            {value}
            <ChevronDownIcon className="size-3.5" />
          </PopoverTrigger>
        </span>
      ) : (
        <PopoverTrigger
          render={
            <button
              type="button"
              className="text-muted-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-2.5 py-1 text-sm"
            />
          }
        >
          <CirclePlusIcon className="size-3.5 opacity-70" />
          {label}
        </PopoverTrigger>
      )}
      <PopoverContent
        align="start"
        className={cn("w-auto min-w-64", contentClassName)}
      >
        {children}
      </PopoverContent>
    </Popover>
  )
}

function FilterTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-medium text-foreground">Filter by: {children}</p>
}

function FilterActions({
  onApply,
  onCancel,
  applyDisabled,
}: {
  onApply: () => void
  onCancel: () => void
  applyDisabled?: boolean
}) {
  return (
    <div className="flex justify-end gap-2 pt-0.5">
      <Button variant="outline" size="sm" onClick={onCancel}>
        Cancel
      </Button>
      <Button
        size="sm"
        disabled={applyDisabled}
        onClick={onApply}
        className="bg-[#635BFF] hover:bg-[#5347F2]"
      >
        Apply
      </Button>
    </div>
  )
}

/* ------------------------------ date filter ----------------------------- */

const dateOperators = [
  { label: "is in the last", value: "in-the-last" },
  { label: "is equal to", value: "equal" },
  { label: "is between", value: "between" },
  { label: "is on or after", value: "on-or-after" },
  { label: "is before or on", value: "before-or-on" },
]

const dateUnits = [
  { label: "days", value: "days" },
  { label: "weeks", value: "weeks" },
  { label: "months", value: "months" },
]

const fmt = (d: Date) => format(d, "MMM d, yyyy")

function DateFilter({
  value,
  onApply,
  onRemove,
}: {
  value?: Filters["date"]
  onApply: (next: NonNullable<Filters["date"]>) => void
  onRemove: () => void
}) {
  const [open, setOpen] = React.useState(false)
  const [operator, setOperator] = React.useState("in-the-last")
  const [count, setCount] = React.useState("7")
  const [unit, setUnit] = React.useState("days")
  const [single, setSingle] = React.useState<Date | undefined>(new Date())
  const [range, setRange] = React.useState<DateRange | undefined>()

  const isRange = operator === "between"
  const isRelative = operator === "in-the-last"

  const canApply = isRelative
    ? Number(count) > 0
    : isRange
      ? !!range?.from && !!range?.to
      : !!single

  function apply() {
    let display = ""
    if (isRelative) display = `in the last ${count} ${unit}`
    else if (isRange && range?.from && range?.to)
      display = `${fmt(range.from)} - ${fmt(range.to)}`
    else if (single) {
      if (operator === "equal") display = fmt(single)
      if (operator === "on-or-after") display = `on or after ${fmt(single)}`
      if (operator === "before-or-on") display = `before or on ${fmt(single)}`
    }
    onApply({ display })
    setOpen(false)
  }

  return (
    <FilterChip
      label="Date and time"
      value={value?.display}
      open={open}
      onOpenChange={setOpen}
      onRemove={onRemove}
    >
      <FilterTitle>date and time</FilterTitle>
      <Select
        items={dateOperators}
        value={operator}
        onValueChange={(v) => setOperator(v as string)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {dateOperators.map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {isRelative ? (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min={1}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="w-20"
            aria-label="Amount of time"
          />
          <Select
            items={dateUnits}
            value={unit}
            onValueChange={(v) => setUnit(v as string)}
          >
            <SelectTrigger className="flex-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {dateUnits.map((u) => (
                  <SelectItem key={u.value} value={u.value}>
                    {u.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      ) : isRange ? (
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          className="rounded-lg border p-2"
        />
      ) : (
        <Calendar
          mode="single"
          selected={single}
          onSelect={setSingle}
          className="rounded-lg border p-2"
        />
      )}

      <FilterActions
        onApply={apply}
        onCancel={() => setOpen(false)}
        applyDisabled={!canApply}
      />
    </FilterChip>
  )
}

/* ----------------------------- amount filter ---------------------------- */

const amountOperators = [
  { label: "is equal to", value: "equal" },
  { label: "is between", value: "between" },
  { label: "is greater than", value: "greater" },
  { label: "is less than", value: "less" },
]

const money = (v: string) => `$${Number(v || 0).toFixed(2)}`

function AmountFilter({
  value,
  onApply,
  onRemove,
}: {
  value?: Filters["amount"]
  onApply: (next: NonNullable<Filters["amount"]>) => void
  onRemove: () => void
}) {
  const [open, setOpen] = React.useState(false)
  const [operator, setOperator] = React.useState("equal")
  const [from, setFrom] = React.useState("35")
  const [to, setTo] = React.useState("50")

  const isBetween = operator === "between"
  const canApply = from !== "" && (!isBetween || to !== "")

  function apply() {
    let display = ""
    if (operator === "equal") display = `Exactly ${money(from)}`
    if (operator === "between") display = `${money(from)} – ${money(to)}`
    if (operator === "greater") display = `More than ${money(from)}`
    if (operator === "less") display = `Less than ${money(from)}`
    onApply({ display })
    setOpen(false)
  }

  return (
    <FilterChip
      label="Amount"
      value={value?.display}
      open={open}
      onOpenChange={setOpen}
      onRemove={onRemove}
    >
      <FilterTitle>amount</FilterTitle>
      <Select
        items={amountOperators}
        value={operator}
        onValueChange={(v) => setOperator(v as string)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {amountOperators.map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          min={0}
          step="0.01"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          aria-label="Amount"
        />
        {isBetween ? (
          <>
            <span className="text-muted-foreground">and</span>
            <Input
              type="number"
              min={0}
              step="0.01"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              aria-label="Amount upper bound"
            />
          </>
        ) : null}
      </div>
      <FilterActions
        onApply={apply}
        onCancel={() => setOpen(false)}
        applyDisabled={!canApply}
      />
    </FilterChip>
  )
}

/* --------------------------- simple list filter -------------------------- */

function ChoiceFilter<T extends string>({
  label,
  title,
  options,
  value,
  onApply,
  onRemove,
}: {
  label: string
  title: string
  options: { label: string; value: T }[]
  value?: { display: string; value: T }
  onApply: (next: { display: string; value: T }) => void
  onRemove: () => void
}) {
  const [open, setOpen] = React.useState(false)
  const [draft, setDraft] = React.useState<T>(options[0].value)

  React.useEffect(() => {
    if (open) setDraft(value?.value ?? options[0].value)
  }, [open, value?.value, options])

  function apply() {
    const match = options.find((o) => o.value === draft)
    if (match) onApply({ display: match.label, value: match.value })
    setOpen(false)
  }

  return (
    <FilterChip
      label={label}
      value={value?.display}
      open={open}
      onOpenChange={setOpen}
      onRemove={onRemove}
    >
      <FilterTitle>{title}</FilterTitle>
      <Select
        items={options}
        value={draft}
        onValueChange={(v) => setDraft(v as T)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FilterActions onApply={apply} onCancel={() => setOpen(false)} />
    </FilterChip>
  )
}

const currencyOptions = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "GBP", value: "gbp" },
  { label: "CAD", value: "cad" },
  { label: "AUD", value: "aud" },
  { label: "JPY", value: "jpy" },
]

const statusOptions: { label: string; value: Status }[] = [
  { label: "Succeeded", value: "succeeded" },
  { label: "Uncaptured", value: "uncaptured" },
  { label: "Failed", value: "failed" },
  { label: "Canceled", value: "canceled" },
  { label: "Partially reversed", value: "partially-reversed" },
  { label: "Refunded", value: "refunded" },
  { label: "Disputed", value: "disputed" },
  { label: "Blocked", value: "blocked" },
]

const paymentMethodOptions: {
  label: string
  value: "card" | "apple" | "link"
}[] = [
  { label: "Card", value: "card" },
  { label: "Apple Pay", value: "apple" },
  { label: "Link", value: "link" },
]

const cardBrandOptions: { label: string; value: Brand }[] = [
  { label: "MasterCard", value: "mastercard" },
  { label: "Visa", value: "visa" },
  { label: "American Express", value: "amex" },
]

/* ------------------------------ filter bar ------------------------------ */

export function PaymentsFilterBar({
  filters,
  onChange,
}: {
  filters: Filters
  onChange: (next: Filters) => void
}) {
  const [showCardBrand, setShowCardBrand] = React.useState(false)
  const [moreOpen, setMoreOpen] = React.useState(false)

  const set = <K extends keyof Filters>(key: K, val: Filters[K]) =>
    onChange({ ...filters, [key]: val })

  const remove = (key: keyof Filters) => {
    const next = { ...filters }
    delete next[key]
    onChange(next)
  }

  const activeCount = Object.keys(filters).length
  const hasFilters = activeCount > 0

  return (
    <div className="flex flex-wrap items-start gap-x-3 gap-y-1.5 border-b pb-2">
      <div className="flex flex-1 flex-wrap items-center gap-1.5">
        <DateFilter
          value={filters.date}
          onApply={(v) => set("date", v)}
          onRemove={() => remove("date")}
        />
        <AmountFilter
          value={filters.amount}
          onApply={(v) => set("amount", v)}
          onRemove={() => remove("amount")}
        />
        <ChoiceFilter
          label="Currency"
          title="currency"
          options={currencyOptions}
          value={filters.currency}
          onApply={(v) => set("currency", v)}
          onRemove={() => remove("currency")}
        />
        <ChoiceFilter
          label="Status"
          title="status"
          options={statusOptions}
          value={filters.status}
          onApply={(v) => set("status", v)}
          onRemove={() => remove("status")}
        />
        <ChoiceFilter
          label="Payment method"
          title="payment method"
          options={paymentMethodOptions}
          value={filters.paymentMethod}
          onApply={(v) => set("paymentMethod", v)}
          onRemove={() => remove("paymentMethod")}
        />
        {showCardBrand || filters.cardBrand ? (
          <ChoiceFilter
            label="Card brand"
            title="card brand"
            options={cardBrandOptions}
            value={filters.cardBrand}
            onApply={(v) => set("cardBrand", v)}
            onRemove={() => {
              remove("cardBrand")
              setShowCardBrand(false)
            }}
          />
        ) : null}

        <Popover open={moreOpen} onOpenChange={setMoreOpen}>
          <PopoverTrigger
            render={
              <button
                type="button"
                className="text-muted-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-2.5 py-1 text-sm"
              />
            }
          >
            <CirclePlusIcon className="size-3.5 opacity-70" />
            More filters
          </PopoverTrigger>
          <PopoverContent align="start" className="w-56 gap-1 p-1.5">
            <p className="px-1.5 py-1 text-xs text-muted-foreground">
              Add a filter
            </p>
            <button
              type="button"
              onClick={() => {
                setShowCardBrand(true)
                setMoreOpen(false)
              }}
              className="hover:bg-accent w-full rounded-md px-1.5 py-1.5 text-left text-sm"
            >
              Card brand
            </button>
            <button
              type="button"
              disabled
              className="w-full rounded-md px-1.5 py-1.5 text-left text-sm opacity-50"
            >
              Description
            </button>
            <button
              type="button"
              disabled
              className="w-full rounded-md px-1.5 py-1.5 text-left text-sm opacity-50"
            >
              Customer
            </button>
          </PopoverContent>
        </Popover>

        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              onChange({})
              setShowCardBrand(false)
            }}
            className={cn("px-2 py-1 text-sm font-medium hover:underline", accent)}
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="flex w-full items-center gap-2 sm:ml-auto sm:w-auto">
        {hasFilters ? (
          <Button variant="outline" size="sm">
            Save list
          </Button>
        ) : null}
        <Button variant="outline" size="sm" className="gap-1.5">
          <DownloadIcon className="size-4" />
          Export
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="hidden gap-1.5 sm:inline-flex"
        >
          <SettingsIcon className="size-4" />
          Edit columns
        </Button>
      </div>
    </div>
  )
}
