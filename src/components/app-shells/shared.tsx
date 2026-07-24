"use client"

import {
  ActivityIcon,
  ArrowUpIcon,
  BellIcon,
  CirclePlusIcon,
  CreditCardIcon,
  LanguagesIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
  Share2Icon,
  SquarePenIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M12 2l1.2 6.3L19 7l-3.5 4.2L21 14l-6.2.5L14 21l-2-5.5L10 21l-.8-6.5L3 14l5.5-2.8L5 7l5.8 1.3L12 2z" />
      </svg>
    </div>
  )
}

export function ContentPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "min-h-[min(60vh,32rem)] flex-1 rounded-xl border bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,color-mix(in_oklab,var(--border)_55%,transparent)_8px,color-mix(in_oklab,var(--border)_55%,transparent)_9px)]",
        className
      )}
    />
  )
}

export function ScrollTopButton({ className }: { className?: string }) {
  return (
    <Button
      type="button"
      size="icon-sm"
      className={cn("fixed right-4 bottom-4 z-20 rounded-md shadow-md", className)}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </Button>
  )
}

export function ShellSearch({
  placeholder = "Type to search...",
  className,
}: {
  placeholder?: string
  className?: string
}) {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
      <Input
        placeholder={placeholder}
        className="h-9 rounded-full bg-background pl-9"
      />
    </div>
  )
}

export function HeaderActions({
  showShare = false,
  showProfileText = false,
  className,
}: {
  showShare?: boolean
  showProfileText?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-1 sm:gap-2", className)}>
      {showShare ? (
        <Button variant="ghost" size="icon-sm" aria-label="Share" className="hidden sm:inline-flex">
          <Share2Icon />
        </Button>
      ) : null}
      <Button variant="ghost" size="icon-sm" aria-label="Language" className="hidden sm:inline-flex">
        <LanguagesIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Activity" className="hidden md:inline-flex">
        <ActivityIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Notifications" className="relative">
        <BellIcon />
        <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-red-500" />
      </Button>
      <ProfileMenu showProfileText={showProfileText} />
    </div>
  )
}

const profileImage =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop"

export function ProfileMenu({ showProfileText }: { showProfileText: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="ml-1 h-auto gap-2 rounded-lg px-1.5 py-1 data-open:bg-accent"
            aria-label="Open profile menu"
          />
        }
      >
        <Avatar size="sm" className="rounded-lg">
          <AvatarImage src={profileImage} alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        {showProfileText ? (
          <div className="hidden min-w-20 text-left leading-tight lg:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-muted-foreground text-xs">Admin</p>
          </div>
        ) : null}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-72 rounded-xl p-1.5 sm:w-80"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="p-2 font-normal">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="size-11">
                  <AvatarImage src={profileImage} alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-popover bg-emerald-500" />
              </div>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-base font-semibold text-foreground">
                  John Doe
                </p>
                <p className="text-muted-foreground truncate text-sm">
                  john.doe@example.com
                </p>
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="h-10 gap-3 px-2.5">
            <UserIcon />
            My account
          </DropdownMenuItem>
          <DropdownMenuItem className="h-10 gap-3 px-2.5">
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="h-10 gap-3 px-2.5">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="h-10 gap-3 px-2.5">
            <UsersIcon />
            Manage team
          </DropdownMenuItem>
          <DropdownMenuItem className="h-10 gap-3 px-2.5">
            <SquarePenIcon />
            Customization
          </DropdownMenuItem>
          <DropdownMenuItem className="h-10 gap-3 px-2.5">
            <CirclePlusIcon />
            Add team account
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          className="h-10 gap-3 px-2.5"
        >
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
