"use client"

import * as React from "react"
import {
  ChartPieIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  CrownIcon,
  DownloadIcon,
  EyeIcon,
  ListFilterIcon,
  MailIcon,
  MoreVerticalIcon,
  PenLineIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  Trash2Icon,
  UploadIcon,
  UserCheckIcon,
  UserCogIcon,
  UserPlusIcon,
  UserRoundIcon,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Role = "Admin" | "Author" | "Editor" | "Maintainer" | "Subscriber"
type Plan = "Basic" | "Team" | "Company" | "Enterprise"
type UserStatus = "Active" | "Pending" | "Inactive"

type UserRow = {
  id: string
  name: string
  email: string
  role: Role
  plan: Plan
  billing: string
  status: UserStatus
  joined: string
  department: string
  country: string
  contact: string
  lastLogin: string
}

const firstNames = [
  "Zsasza", "Galen", "Halsey", "Marjory", "Cyrill",
  "Maggy", "Silvain", "Adena", "Benito", "Camila",
]
const lastNames = ["McCleverty", "Slixby", "Redmore", "Sicely", "Risby"]
const roles: Role[] = ["Maintainer", "Admin", "Admin", "Editor", "Subscriber", "Admin", "Author", "Admin", "Editor", "Admin"]
const plans: Plan[] = ["Enterprise", "Basic", "Basic", "Team", "Company", "Basic", "Basic", "Enterprise", "Team", "Basic"]
const billings = ["Auto debit", "Auto debit", "Manual - Paypal", "Auto debit", "Manual - Cash"]
const statuses: UserStatus[] = ["Pending", "Active", "Active", "Active", "Inactive", "Active", "Active", "Pending", "Active", "Active"]
const departments = ["Engineering", "Marketing", "Sales", "Support", "Finance", "Product"]
const countries = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "India", "Brazil"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const users: UserRow[] = Array.from({ length: 50 }, (_, i) => {
  const first = firstNames[i % firstNames.length]
  // Shift the last-name cycle each block of 10 so full names stay unique
  const last =
    lastNames[(i + Math.floor(i / firstNames.length)) % lastNames.length]
  const day = String(((i * 11) % 27) + 1).padStart(2, "0")
  const loginDay = String(((i * 7) % 27) + 1).padStart(2, "0")
  return {
    id: `user-${i + 1}`,
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}${i + 1}@example.com`,
    role: roles[i % roles.length],
    plan: plans[i % plans.length],
    billing: billings[i % billings.length],
    status: statuses[i % statuses.length],
    joined: `${day} ${months[(i * 2) % 12]} ${2022 + Math.floor(i / 24)}`,
    department: departments[i % departments.length],
    country: countries[i % countries.length],
    contact: `+1 (555) ${String(100 + (i % 900)).padStart(3, "0")}-${String(1000 + ((i * 37) % 9000)).padStart(4, "0")}`,
    lastLogin: `${loginDay} ${months[(i * 3) % 12]} ${2024 + Math.floor(i / 40)}`,
  }
})

const stats = [
  { title: "Session", value: "50", delta: "+29%", deltaUp: true, note: "Total Users", icon: UsersIcon, tone: "bg-muted text-muted-foreground" },
  { title: "Paid Users", value: "30", delta: "+18%", deltaUp: true, note: "Last week analytics", icon: UserPlusIcon, tone: "bg-red-50 text-red-500" },
  { title: "Active Users", value: "35", delta: "-14%", deltaUp: false, note: "Last week analytics", icon: UserCheckIcon, tone: "bg-emerald-50 text-emerald-600" },
  { title: "Pending Users", value: "7", delta: "+42%", deltaUp: true, note: "Last week analytics", icon: UserCogIcon, tone: "bg-amber-50 text-amber-500" },
]

const roleConfig: Record<Role, { icon: typeof UserRoundIcon; className: string }> = {
  Maintainer: { icon: ChartPieIcon, className: "text-teal-600" },
  Admin: { icon: UserRoundIcon, className: "text-emerald-600" },
  Editor: { icon: PenLineIcon, className: "text-sky-600" },
  Author: { icon: SettingsIcon, className: "text-violet-600" },
  Subscriber: { icon: CrownIcon, className: "text-amber-600" },
}

const avatarTones = [
  "bg-rose-100 text-rose-600",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
]

function UserAvatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
        avatarTones[index % avatarTones.length]
      )}
    >
      {initials}
    </span>
  )
}

function StatusBadge({ status }: { status: UserStatus }) {
  if (status === "Active") {
    return (
      <Badge className="border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">
        Active
      </Badge>
    )
  }
  if (status === "Pending") {
    return (
      <Badge className="border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-400">
        Pending
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="text-muted-foreground">
      Inactive
    </Badge>
  )
}

function UserRowActions({ user }: { user: UserRow }) {
  const [open, setOpen] = React.useState(false)
  const actionBtnClass =
    "text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors"

  return (
    <span className="flex items-center justify-end gap-0.5">
      <button
        type="button"
        aria-label={`View ${user.name}`}
        className={cn(actionBtnClass, "hidden sm:inline-flex")}
      >
        <EyeIcon className="size-4" />
      </button>
      <button
        type="button"
        aria-label={`Delete ${user.name}`}
        className={cn(actionBtnClass, "hidden sm:inline-flex")}
      >
        <Trash2Icon className="size-4" />
      </button>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label={`More actions for ${user.name}`}
              className={cn(
                actionBtnClass,
                open && "bg-muted text-foreground"
              )}
            />
          }
        >
          <MoreVerticalIcon className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuItem className="gap-2">
              <EyeIcon />
              View
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <PenLineIcon />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-2"
              onClick={() => navigator.clipboard?.writeText(user.email)}
            >
              <CopyIcon />
              Copy email
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <MailIcon />
              Send email
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive" className="gap-2">
              <Trash2Icon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  )
}

function EmptyUsersView({ onClearSearch }: { onClearSearch?: () => void }) {
  return (
    <div className="flex min-h-[22rem] flex-col items-center justify-center gap-4 border-t px-4 py-16 text-center">
      <div className="bg-muted flex size-14 items-center justify-center rounded-2xl">
        <UsersIcon className="text-muted-foreground size-7" strokeWidth={1.5} />
      </div>
      <div className="flex max-w-sm flex-col gap-1.5">
        <h2 className="text-base font-semibold">No users found</h2>
        <p className="text-muted-foreground text-sm">
          There are no users matching your search. Try a different query or add
          a new user to get started.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {onClearSearch ? (
          <Button variant="outline" onClick={onClearSearch}>
            Reset filters
          </Button>
        ) : null}
        <Button className="gap-1.5 bg-neutral-900 text-white hover:bg-neutral-800">
          <PlusIcon className="size-4" />
          Add New User
        </Button>
      </div>
    </div>
  )
}

const pageSize = 10

const roleOptions: Role[] = [
  "Admin",
  "Author",
  "Editor",
  "Maintainer",
  "Subscriber",
]
const planOptions: Plan[] = ["Basic", "Team", "Company", "Enterprise"]
const statusOptions: UserStatus[] = ["Active", "Pending", "Inactive"]

const ALL = "all"

function SelectFilter({
  label,
  value,
  options,
  onChange,
  className,
}: {
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  className?: string
}) {
  const items = React.useMemo(
    () => [
      { label: `All ${label}`, value: ALL },
      ...options.map((o) => ({ label: o, value: o })),
    ],
    [label, options]
  )

  return (
    <Select items={items} value={value} onValueChange={(v) => onChange(v as string)}>
      <SelectTrigger
        className={cn(
          "w-full sm:w-40",
          value !== ALL && "border-foreground/30",
          className
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function UsersList() {
  const [query, setQuery] = React.useState("")
  const [roleFilter, setRoleFilter] = React.useState<string>(ALL)
  const [planFilter, setPlanFilter] = React.useState<string>(ALL)
  const [statusFilter, setStatusFilter] = React.useState<string>(ALL)
  const [filtersOpen, setFiltersOpen] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [selected, setSelected] = React.useState<Record<string, boolean>>({})
  const [scrolledLeft, setScrolledLeft] = React.useState(false)
  const [scrolledRight, setScrolledRight] = React.useState(false)
  const tableScrollRef = React.useRef<HTMLDivElement>(null)

  const hasFilters =
    roleFilter !== ALL || planFilter !== ALL || statusFilter !== ALL

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter((u) => {
      if (q && !u.name.toLowerCase().includes(q) && !u.email.toLowerCase().includes(q))
        return false
      if (roleFilter !== ALL && u.role !== roleFilter) return false
      if (planFilter !== ALL && u.plan !== planFilter) return false
      if (statusFilter !== ALL && u.status !== statusFilter) return false
      return true
    })
  }, [query, roleFilter, planFilter, statusFilter])

  React.useEffect(() => {
    setPage(1)
  }, [query, roleFilter, planFilter, statusFilter])

  const clearFilters = () => {
    setRoleFilter(ALL)
    setPlanFilter(ALL)
    setStatusFilter(ALL)
  }

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const start = (currentPage - 1) * pageSize
  const pageRows = filtered.slice(start, start + pageSize)

  const allSelected =
    pageRows.length > 0 && pageRows.every((r) => selected[r.id])
  const someSelected = pageRows.some((r) => selected[r.id])

  const updateTableScrollShadows = React.useCallback(() => {
    const el = tableScrollRef.current
    if (!el) return
    setScrolledLeft(el.scrollLeft > 0)
    setScrolledRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  React.useLayoutEffect(() => {
    const el = tableScrollRef.current
    if (!el) return
    updateTableScrollShadows()
    const ro = new ResizeObserver(updateTableScrollShadows)
    ro.observe(el)
    return () => ro.disconnect()
  }, [updateTableScrollShadows, pageRows.length])

  const stickyCheckboxClass = cn(
    "sticky left-0 z-20 bg-background pr-3 pl-4 group-hover:bg-muted",
    "[&:has([role=checkbox])]:pr-3",
    scrolledLeft &&
      "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-3 after:translate-x-full after:bg-gradient-to-r after:from-black/10 after:to-transparent after:content-['']"
  )

  const stickyActionsClass = cn(
    "sticky right-0 z-20 bg-background px-1.5 sm:px-2 sm:pr-4 group-hover:bg-muted",
    scrolledRight &&
      "after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:z-10 after:w-3 after:-translate-x-full after:bg-gradient-to-l after:from-black/10 after:to-transparent after:content-['']"
  )

  return (
    <div className="flex min-w-0 flex-col gap-5">
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex items-start justify-between gap-2 rounded-xl border bg-background p-3 sm:gap-3 sm:p-4"
          >
            <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
              <span className="text-muted-foreground truncate text-xs sm:text-sm">
                {stat.title}
              </span>
              <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
                <span className="text-xl font-semibold sm:text-2xl">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium sm:text-sm",
                    stat.deltaUp ? "text-emerald-600" : "text-red-500"
                  )}
                >
                  ({stat.delta})
                </span>
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

      {/* Table card */}
      <div className="min-w-0 rounded-xl border bg-background">
        <div className="flex flex-wrap items-center gap-3 p-4">
          <div className="flex w-full items-center gap-2 sm:w-auto sm:max-w-none">
            <div className="relative min-w-0 flex-1 sm:w-80 sm:flex-none sm:max-w-80">
              <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search user"
                className="pl-9"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={filtersOpen ? "Hide filters" : "Show filters"}
              aria-pressed={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
              className={cn(
                "relative shrink-0 transition-colors sm:hidden",
                filtersOpen
                  ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white"
                  : hasFilters && "border-foreground/30"
              )}
            >
              <ListFilterIcon className="size-4" />
              {hasFilters ? (
                <span
                  className={cn(
                    "absolute -top-1 -right-1 size-2 rounded-full",
                    filtersOpen
                      ? "bg-white ring-2 ring-neutral-900"
                      : "bg-neutral-900"
                  )}
                />
              ) : null}
            </Button>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <Button variant="outline" className="gap-1.5">
              <UploadIcon className="size-4" />
              Export
            </Button>
            <Button variant="outline" className="gap-1.5">
              <DownloadIcon className="size-4" />
              Import
            </Button>
            <Button className="gap-1.5 bg-neutral-900 text-white hover:bg-neutral-800">
              <PlusIcon className="size-4" />
              Add New User
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-in-out sm:grid-rows-[1fr]",
            filtersOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-wrap items-center gap-2 border-t px-4 py-3">
              <SelectFilter
                label="Roles"
                value={roleFilter}
                options={roleOptions}
                onChange={setRoleFilter}
              />
              <SelectFilter
                label="Plans"
                value={planFilter}
                options={planOptions}
                onChange={setPlanFilter}
              />
              <SelectFilter
                label="Status"
                value={statusFilter}
                options={statusOptions}
                onChange={setStatusFilter}
              />
              {hasFilters ? (
                <Button
                  variant="ghost"
                  className="text-muted-foreground gap-1.5"
                  onClick={clearFilters}
                >
                  <XIcon className="size-4" />
                  Clear filters
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyUsersView
            onClearSearch={
              query || hasFilters
                ? () => {
                    setQuery("")
                    clearFilters()
                  }
                : undefined
            }
          />
        ) : (
          <>
        <div
          ref={tableScrollRef}
          onScroll={updateTableScrollShadows}
          className="relative z-0 overflow-x-auto border-t [&_[data-slot=table-container]]:overflow-visible"
        >
          <Table className="min-w-[1400px] border-separate border-spacing-0 text-sm [&_td]:border-b [&_th]:border-b [&_tr:last-child_td]:border-b-0">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className={cn(stickyCheckboxClass, "w-12")}>
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected && !allSelected}
                    onCheckedChange={(checked) =>
                      setSelected(
                        checked
                          ? Object.fromEntries(
                              pageRows.map((r) => [r.id, true])
                            )
                          : {}
                      )
                    }
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[240px]">
                  User
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[140px]">
                  Role
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[110px]">
                  Plan
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[130px]">
                  Billing
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[100px]">
                  Status
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[140px]">
                  Department
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[150px]">
                  Country
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[150px]">
                  Contact
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[120px]">
                  Joined Date
                </TableHead>
                <TableHead className="text-muted-foreground min-w-[120px]">
                  Last Login
                </TableHead>
                <TableHead
                  className={cn(
                    stickyActionsClass,
                    "text-muted-foreground w-10 text-right sm:w-28"
                  )}
                >
                  <span className="sr-only sm:not-sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageRows.map((user, index) => {
                const role = roleConfig[user.role]
                return (
                  <TableRow
                    key={user.id}
                    data-state={selected[user.id] ? "selected" : undefined}
                    className="group"
                  >
                    <TableCell
                      className={cn(
                        stickyCheckboxClass,
                        "group-data-[state=selected]:bg-muted"
                      )}
                    >
                      <Checkbox
                        checked={!!selected[user.id]}
                        onCheckedChange={(checked) =>
                          setSelected((prev) => ({
                            ...prev,
                            [user.id]: checked === true,
                          }))
                        }
                        aria-label={`Select ${user.name}`}
                      />
                    </TableCell>
                    <TableCell className="py-2.5">
                      <span className="flex items-center gap-3">
                        <UserAvatar name={user.name} index={start + index} />
                        <span className="flex min-w-0 flex-col">
                          <span className="truncate font-medium">
                            {user.name}
                          </span>
                          <span className="text-muted-foreground truncate text-xs">
                            {user.email}
                          </span>
                        </span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        <role.icon className={cn("size-4", role.className)} />
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.plan}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.billing}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={user.status} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.department}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.country}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.contact}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.joined}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.lastLogin}
                    </TableCell>
                    <TableCell
                      className={cn(
                        stickyActionsClass,
                        "group-data-[state=selected]:bg-muted"
                      )}
                    >
                      <UserRowActions user={user} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3 text-sm">
          <span className="text-muted-foreground">
            {`Showing ${start + 1} to ${Math.min(
              start + pageSize,
              filtered.length
            )} of ${filtered.length} entries`}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
              className="text-foreground hover:bg-muted inline-flex h-8 items-center gap-1 rounded-md px-2.5 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
            >
              <ChevronLeftIcon className="size-4" />
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-current={p === currentPage ? "page" : undefined}
                className={cn(
                  "inline-flex size-8 items-center justify-center rounded-md font-medium transition-colors",
                  p === currentPage
                    ? "bg-neutral-900 text-white"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === pageCount}
              onClick={() => setPage(currentPage + 1)}
              className="text-foreground hover:bg-muted inline-flex h-8 items-center gap-1 rounded-md px-2.5 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
            >
              Next
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  )
}
