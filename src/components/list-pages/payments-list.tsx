"use client"

import * as React from "react"
import {
  ClockIcon,
  CopyIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  MoreHorizontalIcon,
  ReceiptTextIcon,
  StarIcon,
  Undo2Icon,
  UserIcon,
  XIcon,
} from "lucide-react"

import {
  PaymentsFilterBar,
  type Brand,
  type Filters,
  type Status,
  type Wallet,
} from "@/components/list-pages/payments-filters"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type PaymentRow = {
  id: string
  status: Status
  wallet: Wallet
  brand: Brand
  last4: string
  customer: string
  date: string
  refundedDate?: string
  declineReason?: string
}

const tabs = [
  "All",
  "Succeeded",
  "Refunded",
  "Disputed",
  "Failed",
  "Uncaptured",
  "Blocked",
]

const rows: PaymentRow[] = [
  { id: "pi_3Demo0001AbcDefGhiJklMno", status: "uncaptured", wallet: null, brand: "mastercard", last4: "4242", customer: "alex.rivera@example.com", date: "Jul 24, 6:35 PM" },
  { id: "pi_3Demo0002AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "mastercard", last4: "4444", customer: "jamie.chen@example.com", date: "Jul 24, 6:28 PM" },
  { id: "pi_3Demo0003AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "visa", last4: "1111", customer: "cus_DemoCust0001", date: "Jul 24, 6:18 PM" },
  { id: "pi_3Demo0004AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "amex", last4: "0005", customer: "taylor.brooks@example.com", date: "Jul 24, 6:16 PM" },
  { id: "pi_3Demo0005AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "amex", last4: "1005", customer: "cus_DemoCust0002", date: "Jul 24, 6:16 PM" },
  { id: "pi_3Demo0006AbcDefGhiJklMno", status: "uncaptured", wallet: null, brand: "mastercard", last4: "5454", customer: "cus_DemoCust0003", date: "Jul 24, 5:42 PM" },
  { id: "pi_3Demo0007AbcDefGhiJklMno", status: "failed", wallet: "apple", brand: "mastercard", last4: "5454", customer: "cus_DemoCust0003", date: "Jul 24, 5:40 PM", declineReason: "Insufficient funds" },
  { id: "pi_3Demo0008AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "visa", last4: "2222", customer: "cus_DemoCust0004", date: "Jul 24, 5:29 PM" },
  { id: "pi_3Demo0009AbcDefGhiJklMno", status: "uncaptured", wallet: null, brand: "visa", last4: "3333", customer: "cus_DemoCust0005", date: "Jul 24, 5:27 PM" },
  { id: "pi_3Demo0010AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "visa", last4: "5555", customer: "morgan.lee@example.com", date: "Jul 24, 5:19 PM" },
  { id: "pi_3Demo0011AbcDefGhiJklMno", status: "canceled", wallet: "apple", brand: "mastercard", last4: "6666", customer: "casey.nguyen@example.com", date: "Jul 24, 4:44 PM", refundedDate: "Jul 24, 6:19 PM" },
  { id: "pi_3Demo0012AbcDefGhiJklMno", status: "partially-reversed", wallet: "apple", brand: "visa", last4: "7777", customer: "cus_DemoCust0006", date: "Jul 24, 4:35 PM", refundedDate: "Jul 24, 4:45 PM" },
  { id: "pi_3Demo0013AbcDefGhiJklMno", status: "uncaptured", wallet: null, brand: "mastercard", last4: "8888", customer: "riley.patel@example.com", date: "Jul 24, 4:18 PM" },
  { id: "pi_3Demo0014AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "visa", last4: "9999", customer: "sam.ortiz@example.com", date: "Jul 24, 4:02 PM" },
  { id: "pi_3Demo0015AbcDefGhiJklMno", status: "uncaptured", wallet: "link", brand: "mastercard", last4: "1234", customer: "jordan.kim@example.com", date: "Jul 24, 3:51 PM" },
  { id: "pi_3Demo0016AbcDefGhiJklMno", status: "succeeded", wallet: "apple", brand: "amex", last4: "3782", customer: "cus_DemoCust0007", date: "Jul 24, 3:39 PM" },
  { id: "pi_3Demo0017AbcDefGhiJklMno", status: "uncaptured", wallet: null, brand: "visa", last4: "0000", customer: "avery.scott@example.com", date: "Jul 24, 3:22 PM" },
  { id: "pi_3Demo0018AbcDefGhiJklMno", status: "uncaptured", wallet: "apple", brand: "mastercard", last4: "5100", customer: "cus_DemoCust0008", date: "Jul 24, 3:08 PM" },
  { id: "pi_3Demo0019AbcDefGhiJklMno", status: "failed", wallet: "apple", brand: "visa", last4: "4000", customer: "quinn.bailey@example.com", date: "Jul 24, 2:55 PM", declineReason: "Card declined" },
  { id: "pi_3Demo0020AbcDefGhiJklMno", status: "uncaptured", wallet: null, brand: "amex", last4: "0001", customer: "cus_DemoCust0009", date: "Jul 24, 2:41 PM" },
]

function MastercardMark() {
  return (
    <span className="inline-flex h-4 w-6 shrink-0 items-center justify-center rounded-[3px] bg-neutral-900">
      <svg viewBox="0 0 24 16" className="h-3 w-4" aria-hidden>
        <circle cx="9.5" cy="8" r="5" fill="#EB001B" />
        <circle cx="14.5" cy="8" r="5" fill="#F79E1B" />
        <path
          d="M12 4.2a5 5 0 0 1 0 7.6 5 5 0 0 1 0-7.6Z"
          fill="#FF5F00"
        />
      </svg>
    </span>
  )
}

function VisaMark() {
  return (
    <span className="inline-flex h-4 w-6 shrink-0 items-center justify-center rounded-[3px] bg-white ring-1 ring-black/10">
      <span className="text-[7px] font-bold italic tracking-tight text-[#1434CB]">
        VISA
      </span>
    </span>
  )
}

function AmexMark() {
  return (
    <span className="inline-flex h-4 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[#1F72CD]">
      <span className="text-[5px] font-bold tracking-tight text-white">
        AMEX
      </span>
    </span>
  )
}

function AppleMark() {
  return (
    <span className="inline-flex h-4 w-6 shrink-0 items-center justify-center rounded-[3px] bg-black">
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-white" aria-hidden>
        <path d="M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.9-3.1-.8-1.6 0-3 .9-3.8 2.3-1.6 2.9-.4 7.1 1.2 9.4.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-1-2.4-3.7ZM14.3 5.6c.6-.8 1-1.9.9-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3Z" />
      </svg>
    </span>
  )
}

function LinkMark() {
  return (
    <span className="inline-flex h-4 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[#00D66F]">
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-black" aria-hidden>
        <path d="M7 6l7 6-7 6V6zm8 0h2v12h-2V6z" />
      </svg>
    </span>
  )
}

function WalletMark({ wallet }: { wallet: Wallet }) {
  if (wallet === "apple") return <AppleMark />
  if (wallet === "link") return <LinkMark />
  return null
}

function CardMark({ brand }: { brand: Brand }) {
  if (brand === "mastercard") return <MastercardMark />
  if (brand === "visa") return <VisaMark />
  return <AmexMark />
}

function StatusBadge({ status }: { status: Status }) {
  switch (status) {
    case "succeeded":
      return (
        <Badge className="gap-1 border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">
          Succeeded
          <svg viewBox="0 0 24 24" className="size-3 fill-none stroke-current" strokeWidth={3}>
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Badge>
      )
    case "failed":
      return (
        <Badge variant="destructive" className="gap-1">
          Failed
          <XIcon className="size-3" />
        </Badge>
      )
    case "canceled":
      return (
        <Badge variant="secondary" className="gap-1 text-muted-foreground">
          Canceled
          <Undo2Icon className="size-3" />
        </Badge>
      )
    case "partially-reversed":
      return (
        <Badge variant="secondary" className="gap-1 text-muted-foreground">
          Partially reversed
          <InfoIcon className="size-3" />
        </Badge>
      )
    default:
      return (
        <Badge variant="secondary" className="gap-1 text-muted-foreground">
          Uncaptured
          <ClockIcon className="size-3" />
        </Badge>
      )
  }
}

const tabStatus: Record<string, Status | undefined> = {
  Succeeded: "succeeded",
  Refunded: "refunded",
  Disputed: "disputed",
  Failed: "failed",
  Uncaptured: "uncaptured",
  Blocked: "blocked",
}

function RowActions({
  paymentId,
  showQuickActions = true,
}: {
  paymentId: string
  showQuickActions?: boolean
}) {
  const [open, setOpen] = React.useState(false)

  const segmentClass =
    "bg-background text-muted-foreground hover:bg-muted hover:text-foreground size-7 shrink-0 items-center justify-center transition-colors"

  return (
    <span className="relative inline-flex size-7 shrink-0 items-center justify-end">
      <span
        className={cn(
          "isolate absolute top-1/2 right-0 z-30 flex -translate-y-1/2 items-stretch divide-x divide-border overflow-hidden rounded-md border bg-background",
          showQuickActions
            ? cn(
                "border-transparent",
                "group-hover:border-border group-hover:shadow-sm",
                open && "border-border shadow-sm"
              )
            : "border-transparent"
        )}
      >
        {showQuickActions ? (
          <>
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label="Refund payment"
                    className={cn(
                      segmentClass,
                      "hidden group-hover:inline-flex",
                      open && "inline-flex!"
                    )}
                  />
                }
              >
                <Undo2Icon className="size-3.5" />
              </TooltipTrigger>
              <TooltipContent>Refund payment</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label="Send receipt"
                    className={cn(
                      segmentClass,
                      "hidden group-hover:inline-flex",
                      open && "inline-flex!"
                    )}
                  />
                }
              >
                <MailIcon className="size-3.5" />
              </TooltipTrigger>
              <TooltipContent>Send receipt</TooltipContent>
            </Tooltip>
          </>
        ) : null}
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                aria-label="Row actions"
                className={cn(
                  segmentClass,
                  "inline-flex",
                  open && "bg-muted text-foreground"
                )}
              />
            }
          >
            <MoreHorizontalIcon className="size-3.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl p-1.5">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="h-9 gap-2.5">
                <Undo2Icon />
                Refund payment
              </DropdownMenuItem>
              <DropdownMenuItem className="h-9 gap-2.5">
                <MailIcon />
                Send receipt
              </DropdownMenuItem>
              <DropdownMenuItem
                className="h-9 gap-2.5"
                onClick={() => navigator.clipboard?.writeText(paymentId)}
              >
                <CopyIcon />
                Copy payment ID
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Connections</DropdownMenuLabel>
              <DropdownMenuItem className="h-9 gap-2.5">
                <UserIcon />
                View customer
              </DropdownMenuItem>
              <DropdownMenuItem className="h-9 gap-2.5">
                <ReceiptTextIcon />
                View payment details
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    </span>
  )
}

function EmptyPaymentsView() {
  return (
    <div className="flex min-h-[22rem] flex-col items-center justify-center gap-3 px-4 py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#E8F0FE]">
        <CreditCardIcon className="size-6 text-[#3B82F6]" strokeWidth={1.75} />
      </div>
      <div className="flex max-w-sm flex-col gap-1">
        <h2 className="text-base font-semibold text-slate-900">
          No payments found
        </h2>
        <p className="text-muted-foreground text-sm">
          There aren&apos;t any results for that query. Try using different
          filters.
        </p>
      </div>
    </div>
  )
}

export function PaymentsList() {
  const [activeTab, setActiveTab] = React.useState("All")
  const [showBanner, setShowBanner] = React.useState(true)
  const [selected, setSelected] = React.useState<Record<string, boolean>>({})
  const [filters, setFilters] = React.useState<Filters>({})
  const [scrolledLeft, setScrolledLeft] = React.useState(false)
  const [scrolledRight, setScrolledRight] = React.useState(false)
  const tableScrollRef = React.useRef<HTMLDivElement>(null)

  const visibleRows = React.useMemo(() => {
    const tabFilter = tabStatus[activeTab]
    return rows.filter((row) => {
      if (tabFilter && row.status !== tabFilter) return false
      if (filters.status && row.status !== filters.status.value) return false
      if (filters.cardBrand && row.brand !== filters.cardBrand.value)
        return false
      if (filters.paymentMethod) {
        const want = filters.paymentMethod.value
        if (want === "card" ? row.wallet !== null : row.wallet !== want)
          return false
      }
      return true
    })
  }, [activeTab, filters])

  const allSelected =
    visibleRows.length > 0 && visibleRows.every((r) => selected[r.id])
  const someSelected = visibleRows.some((r) => selected[r.id])
  const isFiltered = Object.keys(filters).length > 0 || activeTab !== "All"

  const updateTableScrollShadows = React.useCallback(() => {
    const el = tableScrollRef.current
    if (!el) return
    const nextLeft = el.scrollLeft > 0
    const nextRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    setScrolledLeft((prev) => (prev === nextLeft ? prev : nextLeft))
    setScrolledRight((prev) => (prev === nextRight ? prev : nextRight))
  }, [])

  React.useLayoutEffect(() => {
    const el = tableScrollRef.current
    if (!el) return
    updateTableScrollShadows()
    const ro = new ResizeObserver(updateTableScrollShadows)
    ro.observe(el)
    return () => ro.disconnect()
  }, [updateTableScrollShadows])

  const stickyCheckboxClass = cn(
    "sticky left-0 z-20 bg-background pr-3 pl-3 group-hover:bg-muted",
    "[&:has([role=checkbox])]:pr-3",
    scrolledLeft &&
      "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-3 after:translate-x-full after:bg-gradient-to-r after:from-black/10 after:to-transparent after:content-['']"
  )

  const stickyActionsClass = cn(
    "sticky right-0 z-20 bg-background px-2 group-hover:bg-muted",
    scrolledRight &&
      "after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:z-10 after:w-3 after:-translate-x-full after:bg-gradient-to-l after:from-black/10 after:to-transparent after:content-['']"
  )

  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      {showBanner ? (
        <div className="flex items-center gap-2.5 rounded-lg border bg-muted/40 px-3 py-2 text-sm">
          <StarIcon className="size-3.5 shrink-0 text-muted-foreground" />
          <span className="min-w-0 flex-1 truncate">
            You&apos;re prequalified for{" "}
            <span className="font-medium">$62,900</span> in financing
          </span>
          <button
            type="button"
            className="shrink-0 font-medium text-[#635BFF] hover:underline"
          >
            View offer
          </button>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setShowBanner(false)}
            className="text-muted-foreground hover:text-foreground shrink-0"
          >
            <XIcon className="size-3.5" />
          </button>
        </div>
      ) : null}

      <div className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "shrink-0 truncate rounded-md border px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-3 md:max-w-none md:flex-1",
              tab === "All" ? "max-w-none" : "max-w-[5.75rem] md:max-w-none",
              activeTab === tab
                ? "border-[#635BFF] bg-background text-[#635BFF]"
                : "border-border text-muted-foreground hover:bg-muted"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <PaymentsFilterBar filters={filters} onChange={setFilters} />

      {visibleRows.length === 0 ? (
        <EmptyPaymentsView />
      ) : (
        <>
      {/* Mobile card list */}
      <div className="overflow-hidden rounded-xl border bg-background md:hidden">
          <ul className="divide-y">
            {visibleRows.map((row) => (
              <li
                key={row.id}
                className={cn(
                  "flex gap-3 px-3 py-3",
                  selected[row.id] && "bg-muted/50"
                )}
              >
                <Checkbox
                  checked={!!selected[row.id]}
                  onCheckedChange={(checked) =>
                    setSelected((prev) => ({
                      ...prev,
                      [row.id]: checked === true,
                    }))
                  }
                  aria-label={`Select ${row.id}`}
                  className="mt-1"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex min-w-0 flex-1 items-baseline gap-1.5">
                      <span className="font-medium">$35.00</span>
                      <span className="text-muted-foreground text-xs">USD</span>
                    </div>
                    <StatusBadge status={row.status} />
                    <RowActions paymentId={row.id} showQuickActions={false} />
                  </div>
                  <dl className="mt-2 space-y-1.5 text-[13px]">
                    <div className="flex items-center gap-3">
                      <dt className="text-muted-foreground w-[7.5rem] shrink-0">
                        Payment method
                      </dt>
                      <dd className="flex min-w-0 items-center gap-1.5">
                        <WalletMark wallet={row.wallet} />
                        <CardMark brand={row.brand} />
                        <span className="text-muted-foreground truncate">
                          •••• {row.last4}
                        </span>
                      </dd>
                    </div>
                    <div className="flex items-center gap-3">
                      <dt className="text-muted-foreground w-[7.5rem] shrink-0">
                        Description
                      </dt>
                      <dd className="min-w-0 truncate font-mono text-xs">
                        {row.id}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
      </div>

      {/* Desktop table — horizontal scroll only */}
      <div
        ref={tableScrollRef}
        onScroll={updateTableScrollShadows}
        className="relative z-0 hidden overflow-x-auto rounded-xl border bg-background md:block [&_[data-slot=table-container]]:overflow-visible"
      >
        <Table className="min-w-[1100px] border-separate border-spacing-0 text-[13px] [&_td]:border-b [&_th]:border-b [&_tr:last-child_td]:border-b-0">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead
                className={cn(stickyCheckboxClass, "h-9 w-12")}
              >
                <Checkbox
                  checked={allSelected ? true : someSelected ? "indeterminate" : false}
                  onCheckedChange={(checked) =>
                    setSelected(
                      checked
                        ? Object.fromEntries(visibleRows.map((r) => [r.id, true]))
                        : {}
                    )
                  }
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead className="h-9 min-w-[220px]">Amount</TableHead>
              <TableHead className="h-9 min-w-[160px]">Payment method</TableHead>
              <TableHead className="h-9 min-w-[240px]">Description</TableHead>
              <TableHead className="h-9 min-w-[200px]">Customer</TableHead>
              <TableHead className="h-9 min-w-[130px]">Date</TableHead>
              <TableHead className="h-9 min-w-[130px]">Refunded date</TableHead>
              <TableHead className="h-9 min-w-[150px]">Decline reason</TableHead>
              <TableHead className={cn(stickyActionsClass, "h-9 w-10")} />
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow
                key={row.id}
                data-state={selected[row.id] ? "selected" : undefined}
                className="group h-10"
              >
                <TableCell
                  className={cn(
                    stickyCheckboxClass,
                    "py-1.5 group-data-[state=selected]:bg-muted"
                  )}
                >
                  <Checkbox
                    checked={!!selected[row.id]}
                    onCheckedChange={(checked) =>
                      setSelected((prev) => ({
                        ...prev,
                        [row.id]: checked === true,
                      }))
                    }
                    aria-label={`Select ${row.id}`}
                  />
                </TableCell>
                <TableCell className="py-1.5">
                  <span className="flex items-center gap-2">
                    <span className="font-medium">$35.00</span>
                    <span className="text-muted-foreground text-xs">USD</span>
                    <StatusBadge status={row.status} />
                  </span>
                </TableCell>
                <TableCell className="py-1.5">
                  <span className="flex items-center gap-1.5">
                    <WalletMark wallet={row.wallet} />
                    <CardMark brand={row.brand} />
                    <span className="text-muted-foreground">
                      •••• {row.last4}
                    </span>
                  </span>
                </TableCell>
                <TableCell className="py-1.5">
                  <span className="font-mono text-xs text-foreground">
                    {row.id}
                  </span>
                </TableCell>
                <TableCell className="py-1.5">
                  <a
                    href="#"
                    className="text-[#635BFF] hover:underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    {row.customer}
                  </a>
                </TableCell>
                <TableCell className="py-1.5 text-muted-foreground">
                  {row.date}
                </TableCell>
                <TableCell className="py-1.5 text-muted-foreground">
                  {row.refundedDate ?? "—"}
                </TableCell>
                <TableCell className="py-1.5 text-muted-foreground">
                  {row.declineReason ?? "—"}
                </TableCell>
                <TableCell
                  className={cn(
                    stickyActionsClass,
                    "py-1.5 group-data-[state=selected]:bg-muted"
                  )}
                >
                  <RowActions paymentId={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="sticky bottom-0 z-30 -mx-3 -mb-3 flex items-center justify-between gap-2 border-t bg-[#F6F8FA] px-3 py-2.5 text-sm sm:-mx-4 sm:-mb-4 sm:gap-3 sm:px-4 md:-mx-6 md:-mb-6 md:px-6">
        <span className="text-muted-foreground min-w-0 truncate">
          {isFiltered ? (
            `${visibleRows.length} ${visibleRows.length === 1 ? "item" : "items"}`
          ) : (
            <>
              Showing <span className="text-foreground">1–20</span> of over
              10,000 items
            </>
          )}
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled={isFiltered}>
            Next
          </Button>
        </div>
      </div>
        </>
      )}
    </div>
  )
}
