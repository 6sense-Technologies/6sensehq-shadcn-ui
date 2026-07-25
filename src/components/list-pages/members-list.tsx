"use client"

import * as React from "react"
import {
  ListChecksIcon,
  ListFilterIcon,
  MoreVerticalIcon,
  SearchIcon,
  ShieldCheckIcon,
  UserCheckIcon,
  UserPlusIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type AccountType =
  | "Workspace Owner"
  | "Workspace Admin"
  | "Regular Member"
  | "Multi-Channel Guest"
  | "Single-Channel Guest"
  | "Invited"

type BillingStatus = "Active" | "Inactive"
type AuthMethod = "Two-factor (2FA)" | "SSO" | "Default (email & password)"

type Member = {
  id: string
  fullName: string
  memberId: string
  displayName: string
  email: string
  accountType: AccountType
  billingStatus: BillingStatus
  auth: AuthMethod
  lastActive: string
  timezone: string
  deactivated: boolean
}

type MemberFilters = {
  accountTypes: AccountType[]
  billingStatuses: BillingStatus[]
  authMethods: AuthMethod[]
  hideDeactivated: boolean
}

const PAGE_SIZE = 20

const accountTypeOptions: AccountType[] = [
  "Workspace Owner",
  "Workspace Admin",
  "Regular Member",
  "Multi-Channel Guest",
  "Single-Channel Guest",
  "Invited",
]

const billingStatusOptions: BillingStatus[] = ["Active", "Inactive"]

const authMethodOptions: AuthMethod[] = [
  "Two-factor (2FA)",
  "SSO",
  "Default (email & password)",
]

const defaultFilters: MemberFilters = {
  accountTypes: [],
  billingStatuses: [],
  authMethods: [],
  hideDeactivated: false,
}

const firstNames = [
  "Alex", "Jordan", "Casey", "Riley", "Morgan", "Taylor", "Quinn", "Avery",
  "Jamie", "Reese", "Skyler", "Cameron", "Drew", "Harper", "Peyton",
]
const lastNames = [
  "Demo", "Sample", "Placeholder", "Fixture", "Mock", "Testuser", "Dummy",
  "Example", "Sandbox", "Staging",
]
const accountTypesCycle: AccountType[] = [
  "Workspace Owner",
  "Workspace Admin",
  "Regular Member",
  "Regular Member",
  "Regular Member",
  "Multi-Channel Guest",
  "Single-Channel Guest",
  "Invited",
  "Regular Member",
  "Workspace Admin",
]
const timezones = [
  "UTC-8", "UTC-5", "UTC+0", "UTC+1", "UTC+5:30", "UTC+8", "UTC+9",
]
const lastActives = [
  "Just now", "5 min ago", "1 hour ago", "Yesterday", "3 days ago", "1 week ago",
]

const members: Member[] = Array.from({ length: 64 }, (_, i) => {
  const first = firstNames[i % firstNames.length]
  const last = lastNames[(i + Math.floor(i / firstNames.length)) % lastNames.length]
  const fullName = `${first} ${last}`
  const slug = `${first.toLowerCase()}.${last.toLowerCase()}`
  return {
    id: `member-${i + 1}`,
    fullName,
    memberId: `MEM_DEMO_${String(i + 1).padStart(4, "0")}`,
    displayName: i % 3 === 0 ? `${first}_${last}` : first,
    email: `${slug}${i + 1}@example.com`,
    accountType: accountTypesCycle[i % accountTypesCycle.length],
    billingStatus: (i % 7 === 0 ? "Inactive" : "Active") as BillingStatus,
    auth: (["Default (email & password)", "SSO", "Two-factor (2FA)"] as AuthMethod[])[
      i % 3
    ],
    lastActive: lastActives[i % lastActives.length],
    timezone: timezones[i % timezones.length],
    deactivated: i % 11 === 0,
  }
})

const memberStats = (() => {
  const total = members.length
  const active = members.filter(
    (m) => m.billingStatus === "Active" && !m.deactivated
  ).length
  const admins = members.filter(
    (m) =>
      m.accountType === "Workspace Owner" ||
      m.accountType === "Workspace Admin"
  ).length
  const guests = members.filter(
    (m) =>
      m.accountType === "Multi-Channel Guest" ||
      m.accountType === "Single-Channel Guest" ||
      m.accountType === "Invited"
  ).length
  return [
    {
      title: "Total members",
      value: String(total),
      note: "Across the workspace",
      icon: UsersIcon,
      tone: "bg-muted text-muted-foreground",
    },
    {
      title: "Active",
      value: String(active),
      note: "Currently active accounts",
      icon: UserCheckIcon,
      tone: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Admins",
      value: String(admins),
      note: "Owners & workspace admins",
      icon: ShieldCheckIcon,
      tone: "bg-sky-50 text-sky-600",
    },
    {
      title: "Guests & invites",
      value: String(guests),
      note: "Guests and pending invites",
      icon: UserPlusIcon,
      tone: "bg-amber-50 text-amber-600",
    },
  ]
})()

const avatarTones = [
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-800",
  "bg-rose-100 text-rose-700",
  "bg-teal-100 text-teal-700",
]

function MemberAvatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
        avatarTones[index % avatarTones.length]
      )}
    >
      {initials}
    </span>
  )
}

function StatusBadge({ status }: { status: BillingStatus }) {
  if (status === "Active") {
    return (
      <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">
        Active
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="text-muted-foreground">
      Inactive
    </Badge>
  )
}

function toggleValue<T extends string>(list: T[], value: T) {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value]
}

function getPageItems(page: number, pageCount: number) {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }
  const items: Array<number | "ellipsis"> = [1]
  const start = Math.max(2, page - 1)
  const end = Math.min(pageCount - 1, page + 1)
  if (start > 2) items.push("ellipsis")
  for (let p = start; p <= end; p++) items.push(p)
  if (end < pageCount - 1) items.push("ellipsis")
  items.push(pageCount)
  return items
}

function MembersFilterPopover({
  filters,
  onChange,
}: {
  filters: MemberFilters
  onChange: (next: MemberFilters) => void
}) {
  const [open, setOpen] = React.useState(false)
  const activeCount =
    filters.accountTypes.length +
    filters.billingStatuses.length +
    filters.authMethods.length +
    (filters.hideDeactivated ? 1 : 0)

  const hasFilters = activeCount > 0

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="outline"
            aria-label="Filter"
            className={cn(
              "relative size-8 gap-1.5 px-0 sm:h-8 sm:w-auto sm:px-2.5",
              hasFilters && "border-foreground/30"
            )}
          />
        }
      >
        <ListFilterIcon className="size-4" />
        <span className="hidden sm:inline">Filter</span>
        {hasFilters ? (
          <span className="bg-foreground text-background absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full text-[10px] font-semibold sm:static sm:ml-0.5 sm:size-5">
            {activeCount}
          </span>
        ) : null}
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 gap-0 p-0">
        <div className="flex items-center justify-between border-b px-3 py-2.5">
          <span className="text-sm font-semibold">Filter</span>
          <Button
            type="button"
            variant="link"
            size="sm"
            className="h-auto px-0 text-[#1264A3]"
            disabled={!hasFilters}
            onClick={() => onChange(defaultFilters)}
          >
            Reset
          </Button>
        </div>
        <div className="max-h-80 overflow-y-auto p-3">
          <FilterSection title="Account type">
            {accountTypeOptions.map((option) => (
              <FilterCheck
                key={option}
                id={`account-${option}`}
                label={option}
                checked={filters.accountTypes.includes(option)}
                onCheckedChange={() =>
                  onChange({
                    ...filters,
                    accountTypes: toggleValue(filters.accountTypes, option),
                  })
                }
              />
            ))}
          </FilterSection>
          <FilterSection title="Billing status">
            {billingStatusOptions.map((option) => (
              <FilterCheck
                key={option}
                id={`billing-${option}`}
                label={option}
                checked={filters.billingStatuses.includes(option)}
                onCheckedChange={() =>
                  onChange({
                    ...filters,
                    billingStatuses: toggleValue(
                      filters.billingStatuses,
                      option
                    ),
                  })
                }
              />
            ))}
          </FilterSection>
          <FilterSection title="Authentication">
            {authMethodOptions.map((option) => (
              <FilterCheck
                key={option}
                id={`auth-${option}`}
                label={option}
                checked={filters.authMethods.includes(option)}
                onCheckedChange={() =>
                  onChange({
                    ...filters,
                    authMethods: toggleValue(filters.authMethods, option),
                  })
                }
              />
            ))}
          </FilterSection>
          <FilterSection title="View options" last>
            <FilterCheck
              id="hide-deactivated"
              label="Hide deactivated accounts"
              checked={filters.hideDeactivated}
              onCheckedChange={(checked) =>
                onChange({
                  ...filters,
                  hideDeactivated: checked === true,
                })
              }
            />
          </FilterSection>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function FilterSection({
  title,
  children,
  last = false,
}: {
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div className={cn("space-y-2", !last && "mb-4")}>
      <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
        {title}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function FilterCheck({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean | "indeterminate") => void
}) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={id} className="cursor-pointer font-normal">
        {label}
      </Label>
    </div>
  )
}

function EmptyMembersView({ onReset }: { onReset?: () => void }) {
  return (
    <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4 rounded-lg border bg-background px-4 py-16 text-center">
      <div className="bg-muted flex size-14 items-center justify-center rounded-2xl">
        <UsersIcon className="text-muted-foreground size-7" strokeWidth={1.5} />
      </div>
      <div className="flex max-w-sm flex-col gap-1.5">
        <h2 className="text-base font-semibold">No members found</h2>
        <p className="text-muted-foreground text-sm">
          No members match your search or filters. Try a different query or
          invite someone new to the workspace.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {onReset ? (
          <Button variant="outline" onClick={onReset}>
            Reset filters
          </Button>
        ) : null}
        <Button className="gap-1.5 bg-[#007A5A] text-white hover:bg-[#006B4F]">
          <UserPlusIcon className="size-4" />
          Invite People
        </Button>
      </div>
    </div>
  )
}

function MembersTableSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="min-w-0 overflow-x-auto rounded-lg border bg-background">
      <Table className="min-w-[1200px] border-separate border-spacing-0 text-sm [&_td]:border-b [&_th]:border-b [&_tr:last-child_td]:border-b-0">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="min-w-[240px]">
              <Skeleton className="h-4 w-24" />
            </TableHead>
            <TableHead className="min-w-[130px]">
              <Skeleton className="h-4 w-20" />
            </TableHead>
            <TableHead className="min-w-[130px]">
              <Skeleton className="h-4 w-24" />
            </TableHead>
            <TableHead className="min-w-[220px]">
              <Skeleton className="h-4 w-28" />
            </TableHead>
            <TableHead className="min-w-[160px]">
              <Skeleton className="h-4 w-24" />
            </TableHead>
            <TableHead className="min-w-[100px]">
              <Skeleton className="h-4 w-14" />
            </TableHead>
            <TableHead className="min-w-[170px]">
              <Skeleton className="h-4 w-28" />
            </TableHead>
            <TableHead className="min-w-[110px]">
              <Skeleton className="h-4 w-20" />
            </TableHead>
            <TableHead className="min-w-[100px]">
              <Skeleton className="h-4 w-16" />
            </TableHead>
            <TableHead className="w-12 sm:hidden">
              <Skeleton className="ml-auto size-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rows }).map((_, index) => (
            <TableRow
              key={index}
              className={cn(
                "hover:bg-transparent",
                index % 2 === 1 && "bg-muted/40"
              )}
            >
              <TableCell className="py-2.5">
                <span className="flex items-center gap-2.5">
                  <Skeleton className="size-8 shrink-0 rounded-md" />
                  <Skeleton className="h-4 w-28 flex-1" />
                  <Skeleton className="hidden size-7 shrink-0 rounded-md sm:block" />
                </span>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-14 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-14" />
              </TableCell>
              <TableCell className="text-right sm:hidden">
                <Skeleton className="ml-auto size-7 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function MemberRowActions({ member }: { member: Member }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={`Actions for ${member.fullName}`}
            className="text-muted-foreground cursor-pointer"
          />
        }
      >
        <MoreVerticalIcon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>View profile</DropdownMenuItem>
          <DropdownMenuItem>Edit member</DropdownMenuItem>
          <DropdownMenuItem>Change account type</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            Deactivate account
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function MembersList() {
  const [query, setQuery] = React.useState("")
  const [filters, setFilters] = React.useState<MemberFilters>(defaultFilters)
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)
  const [selectMode, setSelectMode] = React.useState(false)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())
  const [scrolledLeft, setScrolledLeft] = React.useState(false)
  const [scrolledRight, setScrolledRight] = React.useState(false)
  const tableScrollRef = React.useRef<HTMLDivElement>(null)

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return members.filter((m) => {
      if (filters.hideDeactivated && m.deactivated) return false
      if (
        filters.accountTypes.length > 0 &&
        !filters.accountTypes.includes(m.accountType)
      )
        return false
      if (
        filters.billingStatuses.length > 0 &&
        !filters.billingStatuses.includes(m.billingStatus)
      )
        return false
      if (
        filters.authMethods.length > 0 &&
        !filters.authMethods.includes(m.auth)
      )
        return false
      if (!q) return true
      return (
        m.fullName.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.memberId.toLowerCase().includes(q) ||
        m.displayName.toLowerCase().includes(q)
      )
    })
  }, [query, filters])

  React.useEffect(() => {
    setPage(1)
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [query, filters])

  const hasFilters =
    filters.accountTypes.length > 0 ||
    filters.billingStatuses.length > 0 ||
    filters.authMethods.length > 0 ||
    filters.hideDeactivated

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageRows = filtered.slice(start, start + PAGE_SIZE)
  const pageItems = getPageItems(currentPage, pageCount)

  const toggleSelectMode = () => {
    setSelectMode((on) => {
      if (on) setSelected(new Set())
      return !on
    })
  }

  const toggleRow = (id: string, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })
  }

  const allPageSelected =
    pageRows.length > 0 && pageRows.every((m) => selected.has(m.id))
  const somePageSelected = pageRows.some((m) => selected.has(m.id))

  const toggleAllOnPage = (checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev)
      for (const m of pageRows) {
        if (checked) next.add(m.id)
        else next.delete(m.id)
      }
      return next
    })
  }

  const updateScrollShadow = React.useCallback(() => {
    const el = tableScrollRef.current
    if (!el) return
    setScrolledLeft(el.scrollLeft > 0)
    setScrolledRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  React.useLayoutEffect(() => {
    const el = tableScrollRef.current
    if (!el) return
    updateScrollShadow()
    const ro = new ResizeObserver(updateScrollShadow)
    ro.observe(el)
    return () => ro.disconnect()
  }, [updateScrollShadow, pageRows.length])

  const stickyNameClass = cn(
    "bg-background group-hover:bg-muted sm:sticky sm:left-0 sm:z-20",
    scrolledLeft &&
      "sm:after:pointer-events-none sm:after:absolute sm:after:inset-y-0 sm:after:right-0 sm:after:z-10 sm:after:w-3 sm:after:translate-x-full sm:after:bg-gradient-to-r sm:after:from-black/10 sm:after:to-transparent sm:after:content-['']"
  )

  const stickyActionsClass = cn(
    "sticky right-0 z-20 bg-background px-1.5 group-hover:bg-muted sm:hidden",
    scrolledRight &&
      "after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:z-10 after:w-3 after:-translate-x-full after:bg-gradient-to-l after:from-black/10 after:to-transparent after:content-['']"
  )

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight">Manage members</h1>
        <Button className="gap-1.5 bg-[#007A5A] text-white hover:bg-[#006B4F]">
          <UserPlusIcon className="size-4" />
          Invite People
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-2 rounded-xl border bg-background p-3 sm:gap-3 sm:p-4"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:gap-2">
                  <Skeleton className="h-3.5 w-20 sm:h-4 sm:w-24" />
                  <Skeleton className="h-6 w-12 sm:h-7 sm:w-14" />
                  <Skeleton className="hidden h-3 w-28 sm:block" />
                </div>
                <Skeleton className="size-8 shrink-0 rounded-lg sm:size-10" />
              </div>
            ))
          : memberStats.map((stat) => (
              <div
                key={stat.title}
                className="flex items-start justify-between gap-2 rounded-xl border bg-background p-3 sm:gap-3 sm:p-4"
              >
                <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
                  <span className="text-muted-foreground truncate text-xs sm:text-sm">
                    {stat.title}
                  </span>
                  <span className="text-xl font-semibold sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground hidden text-xs sm:block">
                    {stat.note}
                  </span>
                </div>
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-lg sm:size-10",
                    stat.tone
                  )}
                >
                  <stat.icon className="size-4 sm:size-5" />
                </span>
              </div>
            ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-muted-foreground flex min-h-8 flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          {loading ? (
            <Skeleton className="h-4 w-24" />
          ) : (
            <span>
              {filtered.length.toLocaleString()} member
              {filtered.length === 1 ? "" : "s"}
            </span>
          )}
          {!loading && selectMode && selected.size > 0 ? (
            <span className="text-foreground font-medium">
              {selected.size} selected
            </span>
          ) : null}
          {!loading && filtered.length > 0 ? (
            <Button
              type="button"
              variant="link"
              size="sm"
              className="h-auto px-0 text-[#1264A3]"
            >
              Export full member list
            </Button>
          ) : null}
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <Button
            type="button"
            variant="outline"
            onClick={toggleSelectMode}
            aria-pressed={selectMode}
            aria-label="Select"
            className={cn(
              "size-8 gap-1.5 px-0 sm:h-8 sm:w-auto sm:px-2.5",
              selectMode &&
                "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
            )}
          >
            <ListChecksIcon className="size-4" />
            <span className="hidden sm:inline">Select</span>
          </Button>
          <MembersFilterPopover filters={filters} onChange={setFilters} />
          <div className="relative min-w-0 flex-1 sm:w-72 sm:flex-none">
            <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by name, email, or ID..."
              className={cn("pl-8", query && "pr-8")}
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 inline-flex size-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm"
              >
                <XIcon className="size-3.5" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {loading ? (
        <MembersTableSkeleton rows={10} />
      ) : filtered.length === 0 ? (
        <EmptyMembersView
          onReset={
            query || hasFilters
              ? () => {
                  setQuery("")
                  setFilters(defaultFilters)
                }
              : undefined
          }
        />
      ) : (
      <div
        ref={tableScrollRef}
        onScroll={updateScrollShadow}
        className="relative z-0 min-w-0 overflow-x-auto rounded-lg border bg-background [&_[data-slot=table-container]]:overflow-visible"
      >
        <Table className="min-w-[1200px] border-separate border-spacing-0 text-sm [&_td]:border-b [&_th]:border-b [&_tr:last-child_td]:border-b-0">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead
                className={cn(
                  stickyNameClass,
                  "text-muted-foreground w-[220px] min-w-[220px] max-w-[220px] font-semibold sm:w-[260px] sm:min-w-[260px] sm:max-w-[260px] sm:pr-10"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden">
                    {selectMode ? (
                      <Checkbox
                        aria-label="Select all on this page"
                        checked={allPageSelected}
                        indeterminate={somePageSelected && !allPageSelected}
                        onCheckedChange={(checked) =>
                          toggleAllOnPage(checked === true)
                        }
                      />
                    ) : null}
                  </span>
                  Full name
                </span>
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[130px] font-semibold">
                Member ID
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[130px] font-semibold">
                Display name
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[220px] font-semibold">
                Email address
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[160px] font-semibold">
                Account type
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[100px] font-semibold">
                Status
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[170px] font-semibold">
                Authentication
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[110px] font-semibold">
                Last active
              </TableHead>
              <TableHead className="text-muted-foreground min-w-[100px] font-semibold">
                Timezone
              </TableHead>
              <TableHead
                className={cn(stickyActionsClass, "w-12 text-right")}
              >
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageRows.map((member, index) => {
              const rowIndex = start + index
              const zebra = index % 2 === 1
              const stickyBg = zebra
                ? "bg-muted group-hover:bg-muted"
                : "bg-background group-hover:bg-muted"
              return (
                <TableRow
                  key={member.id}
                  className={cn("group", zebra && "bg-muted/40 hover:bg-muted/60")}
                >
                  <TableCell
                    className={cn(
                      stickyNameClass,
                      "relative w-[220px] max-w-[220px] overflow-hidden py-2.5 sm:w-[260px] sm:max-w-[260px] sm:pr-10",
                      stickyBg
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden">
                        {selectMode ? (
                          <Checkbox
                            aria-label={`Select ${member.fullName}`}
                            checked={selected.has(member.id)}
                            onCheckedChange={(checked) =>
                              toggleRow(member.id, checked === true)
                            }
                          />
                        ) : (
                          <MemberAvatar
                            name={member.fullName}
                            index={rowIndex}
                          />
                        )}
                      </span>
                      <span
                        className={cn(
                          "min-w-0 flex-1 truncate font-medium",
                          member.deactivated &&
                            "text-muted-foreground line-through"
                        )}
                      >
                        {member.fullName}
                      </span>
                    </span>
                    <span className="absolute top-1/2 right-1.5 hidden -translate-y-1/2 sm:inline-flex">
                      <MemberRowActions member={member} />
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground font-mono text-xs">
                    {member.memberId}
                  </TableCell>
                  <TableCell>{member.displayName}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {member.email}
                  </TableCell>
                  <TableCell>{member.accountType}</TableCell>
                  <TableCell>
                    <StatusBadge status={member.billingStatus} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {member.auth}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {member.lastActive}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {member.timezone}
                  </TableCell>
                  <TableCell
                    className={cn(
                      stickyActionsClass,
                      "text-right",
                      stickyBg
                    )}
                  >
                    <MemberRowActions member={member} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      )}

      {!loading && filtered.length > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            Showing {start + 1}–
            {Math.min(start + PAGE_SIZE, filtered.length)} of{" "}
            {filtered.length}
          </p>
          <Pagination className="mx-0 w-auto justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  aria-disabled={currentPage === 1}
                  className={cn(
                    currentPage === 1 && "pointer-events-none opacity-50"
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    setPage((p) => Math.max(1, p - 1))
                  }}
                />
              </PaginationItem>
              {pageItems.map((item, idx) =>
                item === "ellipsis" ? (
                  <PaginationItem key={`e-${idx}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={item}>
                    <PaginationLink
                      href="#"
                      isActive={item === currentPage}
                      onClick={(e) => {
                        e.preventDefault()
                        setPage(item)
                      }}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={currentPage === pageCount}
                  className={cn(
                    currentPage === pageCount &&
                      "pointer-events-none opacity-50"
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    setPage((p) => Math.min(pageCount, p + 1))
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : null}
    </div>
  )
}
