"use client"

import * as React from "react"
import { format } from "date-fns"
import {
  CalendarIcon,
  EyeIcon,
  PenLineIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  UserCheckIcon,
  UserCogIcon,
  UserPlusIcon,
  UsersIcon,
  XIcon,
} from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

type Role = "Admin" | "Author" | "Editor" | "Maintainer" | "Subscriber"
type Plan = "Basic" | "Team" | "Company" | "Enterprise"
type UserStatus = "Active" | "Pending" | "Inactive"

type UserRow = {
  id: string
  userId: string
  name: string
  email: string
  role: Role
  plan: Plan
  status: UserStatus
  joined: Date
  department: string
}

const firstNames = [
  "Zsasza",
  "Galen",
  "Halsey",
  "Marjory",
  "Cyrill",
  "Maggy",
  "Silvain",
  "Adena",
  "Benito",
  "Camila",
]
const lastNames = ["McCleverty", "Slixby", "Redmore", "Sicely", "Risby"]
const roles: Role[] = [
  "Maintainer",
  "Admin",
  "Editor",
  "Subscriber",
  "Author",
  "Admin",
  "Editor",
  "Admin",
  "Maintainer",
  "Subscriber",
]
const plans: Plan[] = [
  "Enterprise",
  "Basic",
  "Team",
  "Company",
  "Basic",
  "Enterprise",
  "Team",
  "Basic",
  "Company",
  "Basic",
]
const statuses: UserStatus[] = [
  "Pending",
  "Active",
  "Active",
  "Inactive",
  "Active",
  "Pending",
  "Active",
  "Active",
  "Inactive",
  "Active",
]
const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "Support",
  "Finance",
  "Product",
]

const users: UserRow[] = Array.from({ length: 50 }, (_, i) => {
  const first = firstNames[i % firstNames.length]
  const last =
    lastNames[(i + Math.floor(i / firstNames.length)) % lastNames.length]
  const joined = new Date(2024, (i * 3) % 12, ((i * 11) % 27) + 1)
  return {
    id: `user-${i + 1}`,
    userId: `USR-${String(982341 - i * 137).padStart(6, "0")}`,
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}${i + 1}@example.com`,
    role: roles[i % roles.length],
    plan: plans[i % plans.length],
    status: statuses[i % statuses.length],
    joined,
    department: departments[i % departments.length],
  }
})

const stats = [
  {
    title: "Total users",
    value: String(users.length),
    note: "Across the directory",
    icon: UsersIcon,
    tone: "bg-muted text-muted-foreground",
  },
  {
    title: "Active",
    value: String(users.filter((u) => u.status === "Active").length),
    note: "Currently active accounts",
    icon: UserCheckIcon,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Pending",
    value: String(users.filter((u) => u.status === "Pending").length),
    note: "Awaiting activation",
    icon: UserCogIcon,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Paid plans",
    value: String(users.filter((u) => u.plan !== "Basic").length),
    note: "Team and above",
    icon: UserPlusIcon,
    tone: "bg-sky-50 text-sky-600",
  },
]

const avatarTones = [
  "bg-rose-100 text-rose-700",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
  "bg-teal-100 text-teal-700",
]

const PAGE_SIZE = 20

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

function StatusBadge({ status }: { status: UserStatus }) {
  if (status === "Active") {
    return (
      <Badge className="rounded-full border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-medium text-emerald-700 hover:bg-emerald-50">
        Active
      </Badge>
    )
  }
  if (status === "Pending") {
    return (
      <Badge className="rounded-full border-violet-200 bg-violet-50 px-2.5 py-0.5 font-medium text-violet-700 hover:bg-violet-50">
        Pending
      </Badge>
    )
  }
  return (
    <Badge className="rounded-full border-orange-200 bg-orange-50 px-2.5 py-0.5 font-medium text-orange-700 hover:bg-orange-50">
      Inactive
    </Badge>
  )
}

function UserAvatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
  return (
    <Avatar size="sm">
      <AvatarFallback
        className={cn(
          "text-[10px] font-semibold",
          avatarTones[index % avatarTones.length]
        )}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}

function CircularAction({
  label,
  tone,
  children,
}: {
  label: string
  tone: "view" | "edit" | "delete"
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors",
        tone === "view" &&
          "bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white",
        tone === "edit" &&
          "bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white",
        tone === "delete" &&
          "bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white"
      )}
    >
      {children}
    </button>
  )
}

function EmptyUsersView({ onReset }: { onReset?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <span className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
        <UsersIcon className="size-5" />
      </span>
      <div className="space-y-1">
        <h2 className="text-base font-semibold">No users found</h2>
        <p className="text-muted-foreground max-w-sm text-sm">
          No users match your search or filters. Try adjusting your filters or
          search query.
        </p>
      </div>
      {onReset ? (
        <Button type="button" variant="outline" onClick={onReset}>
          Reset filters
        </Button>
      ) : null}
    </div>
  )
}

function TableSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-[960px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {Array.from({ length: 8 }, (_, i) => (
              <TableHead key={i}>
                <Skeleton className="h-4 w-16" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rows }, (_, i) => (
            <TableRow key={i} className="hover:bg-transparent">
              <TableCell className="w-10 pr-0 pl-4">
                <Skeleton className="size-4" />
              </TableCell>
              <TableCell className="pl-2">
                <span className="flex items-center gap-2.5">
                  <Skeleton className="size-6 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </span>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-36" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-16 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <span className="flex justify-end gap-1.5">
                  <Skeleton className="size-8 rounded-full" />
                  <Skeleton className="size-8 rounded-full" />
                  <Skeleton className="size-8 rounded-full" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function UsersDirectoryList() {
  const [query, setQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [roleFilter, setRoleFilter] = React.useState<string>("all")
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>()
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)
  const [selected, setSelected] = React.useState<Set<string>>(new Set())

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter((u) => {
      if (statusFilter !== "all" && u.status !== statusFilter) return false
      if (roleFilter !== "all" && u.role !== roleFilter) return false
      if (dateRange?.from) {
        const start = new Date(dateRange.from)
        start.setHours(0, 0, 0, 0)
        if (u.joined < start) return false
      }
      if (dateRange?.to) {
        const end = new Date(dateRange.to)
        end.setHours(23, 59, 59, 999)
        if (u.joined > end) return false
      }
      if (!q) return true
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.userId.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q) ||
        u.department.toLowerCase().includes(q)
      )
    })
  }, [query, statusFilter, roleFilter, dateRange])

  React.useEffect(() => {
    setPage(1)
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [query, statusFilter, roleFilter, dateRange])

  const hasFilters =
    statusFilter !== "all" ||
    roleFilter !== "all" ||
    Boolean(dateRange?.from) ||
    Boolean(query.trim())

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageRows = filtered.slice(start, start + PAGE_SIZE)
  const pageItems = getPageItems(currentPage, pageCount)

  const toggleRow = (id: string, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })
  }

  const allPageSelected =
    pageRows.length > 0 && pageRows.every((u) => selected.has(u.id))
  const somePageSelected = pageRows.some((u) => selected.has(u.id))

  const toggleAllOnPage = (checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev)
      for (const u of pageRows) {
        if (checked) next.add(u.id)
        else next.delete(u.id)
      }
      return next
    })
  }

  const resetFilters = () => {
    setQuery("")
    setStatusFilter("all")
    setRoleFilter("all")
    setDateRange(undefined)
  }

  const dateLabel = dateRange?.from
    ? dateRange.to
      ? `${format(dateRange.from, "LLL d, y")} – ${format(dateRange.to, "LLL d, y")}`
      : format(dateRange.from, "LLL d, y")
    : "Date Range"

  return (
    <div className="flex min-w-0 flex-col gap-4">
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
          : stats.map((stat) => (
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

      <div className="min-w-0 overflow-hidden rounded-2xl border bg-background shadow-sm">
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Users
              </h2>
              <p className="text-muted-foreground text-sm">
                Track and manage all user accounts.
              </p>
              {!loading && selected.size > 0 ? (
                <p className="text-foreground pt-1 text-sm font-medium">
                  {selected.size} selected
                </p>
              ) : null}
            </div>
            <Button
              type="button"
              className="shrink-0 gap-1.5 bg-sky-600 text-white hover:bg-sky-700"
            >
              <PlusIcon className="size-4" />
              Add New User
            </Button>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="relative w-full min-w-0 sm:max-w-xs sm:flex-1">
              <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className={cn("h-8 pl-8", query && "pr-8")}
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

            <div className="flex flex-wrap items-center gap-2">
              <Popover>
                <PopoverTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      aria-label="Date range"
                      className={cn(
                        "h-8 justify-start gap-1.5 px-2.5 font-normal",
                        dateRange?.from && "border-foreground/30"
                      )}
                    />
                  }
                >
                  <CalendarIcon className="size-4 shrink-0" />
                  <span className="max-w-[11rem] truncate">{dateLabel}</span>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                  {dateRange?.from ? (
                    <div className="flex justify-end border-t p-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setDateRange(undefined)}
                      >
                        Clear
                      </Button>
                    </div>
                  ) : null}
                </PopoverContent>
              </Popover>

              <Select
                items={[
                  { label: "All roles", value: "all" },
                  { label: "Admin", value: "Admin" },
                  { label: "Author", value: "Author" },
                  { label: "Editor", value: "Editor" },
                  { label: "Maintainer", value: "Maintainer" },
                  { label: "Subscriber", value: "Subscriber" },
                ]}
                value={roleFilter}
                onValueChange={(value) =>
                  setRoleFilter((value as string) ?? "all")
                }
              >
                <SelectTrigger
                  aria-label="Role"
                  className={cn(
                    "h-8 w-auto min-w-[8.5rem]",
                    roleFilter !== "all" && "border-foreground/30"
                  )}
                >
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent align="start">
                  <SelectGroup>
                    <SelectItem value="all">All roles</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Author">Author</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Maintainer">Maintainer</SelectItem>
                    <SelectItem value="Subscriber">Subscriber</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select
                items={[
                  { label: "All statuses", value: "all" },
                  { label: "Active", value: "Active" },
                  { label: "Pending", value: "Pending" },
                  { label: "Inactive", value: "Inactive" },
                ]}
                value={statusFilter}
                onValueChange={(value) =>
                  setStatusFilter((value as string) ?? "all")
                }
              >
                <SelectTrigger
                  aria-label="User status"
                  className={cn(
                    "h-8 w-auto min-w-[9.5rem]",
                    statusFilter !== "all" && "border-foreground/30"
                  )}
                >
                  <SelectValue placeholder="User Status" />
                </SelectTrigger>
                <SelectContent align="start">
                  <SelectGroup>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {loading ? (
          <TableSkeleton rows={PAGE_SIZE} />
        ) : filtered.length === 0 ? (
          <EmptyUsersView onReset={hasFilters ? resetFilters : undefined} />
        ) : (
          <div className="overflow-x-auto border-t">
            <Table className="min-w-[960px] text-sm">
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-10 pr-0 pl-4">
                    <Checkbox
                      aria-label="Select all on this page"
                      checked={allPageSelected}
                      indeterminate={somePageSelected && !allPageSelected}
                      onCheckedChange={(checked) =>
                        toggleAllOnPage(checked === true)
                      }
                    />
                  </TableHead>
                  <TableHead className="text-foreground pl-2 font-semibold">
                    User
                  </TableHead>
                  <TableHead className="text-foreground font-semibold">
                    User ID
                  </TableHead>
                  <TableHead className="text-foreground font-semibold">
                    Email
                  </TableHead>
                  <TableHead className="text-foreground font-semibold">
                    Role
                  </TableHead>
                  <TableHead className="text-foreground font-semibold">
                    Plan
                  </TableHead>
                  <TableHead className="text-foreground font-semibold">
                    Status
                  </TableHead>
                  <TableHead className="text-foreground font-semibold">
                    Joined
                  </TableHead>
                  <TableHead className="text-foreground text-right font-semibold">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageRows.map((user, index) => {
                  const rowIndex = start + index
                  return (
                    <TableRow key={user.id} className="group">
                      <TableCell className="w-10 pr-0 pl-4">
                        <Checkbox
                          aria-label={`Select ${user.name}`}
                          checked={selected.has(user.id)}
                          onCheckedChange={(checked) =>
                            toggleRow(user.id, checked === true)
                          }
                        />
                      </TableCell>
                      <TableCell className="pl-2">
                        <span className="flex items-center gap-2.5">
                          <UserAvatar name={user.name} index={rowIndex} />
                          <span className="font-medium">{user.name}</span>
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground font-mono text-xs">
                        {user.userId}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {user.email}
                      </TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.plan}</TableCell>
                      <TableCell>
                        <StatusBadge status={user.status} />
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {format(user.joined, "MMM d, yyyy")}
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center justify-end gap-1.5">
                          <CircularAction
                            label={`View ${user.name}`}
                            tone="view"
                          >
                            <EyeIcon className="size-3.5" />
                          </CircularAction>
                          <CircularAction
                            label={`Edit ${user.name}`}
                            tone="edit"
                          >
                            <PenLineIcon className="size-3.5" />
                          </CircularAction>
                          <CircularAction
                            label={`Delete ${user.name}`}
                            tone="delete"
                          >
                            <Trash2Icon className="size-3.5" />
                          </CircularAction>
                        </span>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        )}

        {!loading && filtered.length > 0 ? (
          <div className="flex flex-col items-center gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="text-muted-foreground text-center text-sm sm:text-left">
              Showing {start + 1} to{" "}
              {Math.min(start + PAGE_SIZE, filtered.length)} of{" "}
              {filtered.length} entries
            </p>

            <Pagination className="mx-0 w-full justify-center sm:w-auto sm:justify-end">
              <PaginationContent className="gap-1">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    text="Previous"
                    aria-disabled={currentPage === 1}
                    className={cn(
                      "size-8 px-0 sm:h-8 sm:w-auto sm:gap-1.5 sm:px-2.5 sm:pl-1.5!",
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
                        className={cn(
                          item === currentPage &&
                            "border-transparent bg-sky-600 text-white hover:bg-sky-600 hover:text-white"
                        )}
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
                    text="Next"
                    aria-disabled={currentPage === pageCount}
                    className={cn(
                      "size-8 px-0 sm:h-8 sm:w-auto sm:gap-1.5 sm:px-2.5 sm:pr-1.5!",
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
    </div>
  )
}
