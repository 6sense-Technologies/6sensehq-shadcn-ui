"use client"

import * as React from "react"
import {
  ArrowLeftRightIcon,
  BellIcon,
  BoxIcon,
  Building2Icon,
  ChartColumnIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  ClockIcon,
  CreditCardIcon,
  FlaskConicalIcon,
  Grid2x2Icon,
  HomeIcon,
  LayersIcon,
  LayoutGridIcon,
  LinkIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ReceiptIcon,
  ScaleIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { ProfileMenu } from "@/components/app-shells/shared"
import {
  RailSubmenu,
  RailSubmenuCaret,
} from "@/components/app-shells/sidebars/rail-submenu"
import { cn } from "@/lib/utils"

const accent = "text-[#635BFF]"
const accentActive =
  "data-active:bg-[#635BFF]/10 data-active:text-[#635BFF] data-active:hover:bg-[#635BFF]/15 data-active:hover:text-[#635BFF]"

function ChargeMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-sm",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
        <path d="M7 6l7 6-7 6V6zm8 0h2v12h-2V6z" />
      </svg>
    </div>
  )
}

const primary = [
  { title: "Home", icon: HomeIcon },
  { title: "Balances", icon: ScaleIcon, isActive: true },
  { title: "Transactions", icon: ArrowLeftRightIcon },
  { title: "Customers", icon: UsersIcon },
  { title: "Product catalog", icon: BoxIcon },
]

const shortcuts = [
  { title: "Billing overview", icon: ClockIcon },
  { title: "Disputes", icon: ClockIcon },
  { title: "Payment Links", icon: LinkIcon },
]

const products = [
  {
    title: "Treasury",
    icon: Building2Icon,
    defaultOpen: true,
    items: [
      { title: "Overview" },
      { title: "Cards" },
      { title: "Payouts" },
      { title: "Capital" },
    ],
  },
  {
    title: "Payments",
    icon: WalletIcon,
    items: [
      { title: "Overview" },
      { title: "Payments" },
      { title: "Refunds" },
    ],
  },
  {
    title: "Billing",
    icon: CreditCardIcon,
    items: [
      { title: "Subscriptions" },
      { title: "Invoices" },
      { title: "Quotes" },
    ],
  },
  {
    title: "Reporting",
    icon: ChartColumnIcon,
    items: [
      { title: "Reports" },
      { title: "Sigma" },
      { title: "Data pipeline" },
    ],
  },
  {
    title: "Apps",
    icon: LayoutGridIcon,
    items: [
      { title: "Installed" },
      { title: "App marketplace" },
    ],
  },
]

function WorkspaceSwitcher() {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
                tooltip="Charge OnSite"
              />
            }
          >
            <ChargeMark />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Charge OnSite</span>
            </div>
            <ChevronDownIcon className="ml-auto size-4 opacity-60" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-72 rounded-xl p-1.5"
            align="start"
            side={collapsed ? "right" : "bottom"}
            sideOffset={8}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-2 font-normal">
                <div className="flex items-center gap-3">
                  <ChargeMark className="size-9" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold">Charge OnSite</p>
                    <p className="text-muted-foreground truncate text-xs">
                      chargeonsite.com
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="h-9 gap-2.5">
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="h-9 gap-2.5">
                  <LayersIcon />
                  Switch to sandbox
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-52 rounded-xl p-1.5">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Sandboxes</DropdownMenuLabel>
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <FlaskConicalIcon />
                      Test mode
                    </DropdownMenuItem>
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <FlaskConicalIcon />
                      Staging
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <PlusIcon />
                      New sandbox
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="h-9 gap-2.5">
                  <PlusIcon />
                  Create
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-52 rounded-xl p-1.5">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <ReceiptIcon />
                      Invoice
                    </DropdownMenuItem>
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <LinkIcon />
                      Payment link
                    </DropdownMenuItem>
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <UsersIcon />
                      Customer
                    </DropdownMenuItem>
                    <DropdownMenuItem className="h-9 gap-2.5">
                      <BoxIcon />
                      Product
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function PaymentsSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile

  return (
    <Sidebar collapsible="icon" className="border-r bg-background" {...props}>
      <SidebarHeader className="border-b border-transparent p-2">
        <WorkspaceSwitcher />
      </SidebarHeader>
      <SidebarContent className="gap-2 px-2 py-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {primary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    tooltip={item.title}
                    className={cn(accentActive, item.isActive && accent)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-muted-foreground/80 h-7 px-2 text-[11px] font-medium tracking-wide uppercase">
            Shortcuts
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {shortcuts.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-muted-foreground/80 h-7 px-2 text-[11px] font-medium tracking-wide uppercase">
            Products
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {products.map((product) =>
                collapsed ? (
                  <SidebarMenuItem key={product.title}>
                    <RailSubmenu
                      title={product.title}
                      items={product.items}
                      trigger={
                        <SidebarMenuButton
                          tooltip={{
                            children: product.title,
                            hidden: false,
                          }}
                          className="relative"
                        />
                      }
                    >
                      <product.icon />
                      <span className="sr-only">{product.title}</span>
                      <RailSubmenuCaret className="absolute top-1/2 right-0.5 -translate-y-1/2" />
                    </RailSubmenu>
                  </SidebarMenuItem>
                ) : (
                  <Collapsible
                    key={product.title}
                    defaultOpen={product.defaultOpen}
                    className="group/collapsible"
                    render={<SidebarMenuItem />}
                  >
                    <CollapsibleTrigger
                      render={
                        <SidebarMenuButton tooltip={product.title} />
                      }
                    >
                      <product.icon />
                      <span>{product.title}</span>
                      <ChevronRightIcon className="ml-auto size-4 opacity-50 transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {product.items.map((sub) => (
                          <SidebarMenuSubItem key={sub.title}>
                            <SidebarMenuSubButton render={<a href="#" />}>
                              <span>{sub.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                )
              )}
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="More">
                  <MoreHorizontalIcon />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

export function PaymentsTopbar({ className }: { className?: string }) {
  const [searchFocused, setSearchFocused] = React.useState(false)

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-3 border-b bg-background px-3 sm:px-4",
        className
      )}
    >
      <div className="relative min-w-0 flex-1 sm:max-w-md">
        <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <input
          placeholder="Search"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className="bg-muted/70 placeholder:text-muted-foreground h-9 w-full rounded-full border-0 pr-3 pl-9 text-sm outline-none ring-0 focus-visible:ring-2 focus-visible:ring-[#635BFF]/30"
        />
      </div>
      <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
        <div
          className={cn(
            "flex items-center gap-0.5 overflow-hidden transition-all duration-300 ease-out sm:gap-1",
            searchFocused
              ? "max-sm:pointer-events-none max-sm:max-w-0 max-sm:opacity-0"
              : "max-w-96 opacity-100"
          )}
        >
          <button
            type="button"
            aria-label="Apps"
            className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-md"
          >
            <Grid2x2Icon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Help"
            className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-md"
          >
            <CircleHelpIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="text-muted-foreground hover:bg-muted hover:text-foreground relative inline-flex size-8 shrink-0 items-center justify-center rounded-md"
          >
            <BellIcon className="size-4" />
            <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-[#635BFF]" />
          </button>
          <button
            type="button"
            aria-label="Settings"
            className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-md"
          >
            <SettingsIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Create"
            className="ml-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#635BFF] text-white shadow-sm hover:bg-[#5347F2]"
          >
            <PlusIcon className="size-4" />
          </button>
        </div>
        <ProfileMenu showProfileText={false} />
      </div>
    </header>
  )
}
