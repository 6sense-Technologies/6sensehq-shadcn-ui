"use client"

import {
  BarChart3Icon,
  ChartNoAxesCombinedIcon,
  ChevronRightIcon,
  FileSearchIcon,
  HomeIcon,
  LinkIcon,
  RefreshCcwIcon,
  ScanIcon,
  SettingsIcon,
  UserRoundIcon,
} from "lucide-react"

import { BrandMark } from "@/components/app-shells/shared"
import { RailSubmenu, RailSubmenuCaret } from "@/components/app-shells/sidebars/rail-submenu"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

type MenuItem = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  defaultOpen?: boolean
  items?: { title: string; badge?: string }[]
}

const top: MenuItem[] = [
  { title: "Home", icon: HomeIcon },
  {
    title: "Portfolio",
    icon: UserRoundIcon,
    defaultOpen: true,
    items: [
      { title: "Holdings" },
      { title: "Watchlist", badge: "8" },
      { title: "Performance" },
    ],
  },
  { title: "Market", icon: RefreshCcwIcon },
  {
    title: "Trading",
    icon: ChartNoAxesCombinedIcon,
    items: [
      { title: "Open Orders" },
      { title: "Order History" },
      { title: "Trade Ideas" },
    ],
  },
]

const mid: MenuItem[] = [
  {
    title: "Stocks",
    icon: BarChart3Icon,
    items: [
      { title: "Top Gainers" },
      { title: "Top Losers" },
      { title: "Most Active" },
    ],
  },
  { title: "Scanner", icon: ScanIcon },
  { title: "Analytics", icon: FileSearchIcon },
]

const bottom: MenuItem[] = [
  {
    title: "Settings",
    icon: SettingsIcon,
    items: [
      { title: "Account" },
      { title: "Preferences" },
      { title: "Security" },
    ],
  },
  { title: "Invite", icon: LinkIcon },
]

function IconLabelNav({ items }: { items: MenuItem[] }) {
  const buttonClassName = cn(
    "h-auto flex-col gap-1.5 rounded-lg px-1 py-2 text-[10px] leading-tight"
  )

  return (
    <SidebarMenu className="gap-1">
      {items.map((item) =>
        item.items ? (
          <SidebarMenuItem key={item.title}>
            <RailSubmenu
              title={item.title}
              items={item.items}
              trigger={
                <SidebarMenuButton
                  tooltip={{
                    children: item.title,
                    hidden: false,
                  }}
                  isActive={item.title === "Home"}
                  className={buttonClassName}
                />
              }
            >
              <item.icon className="size-4" />
              <span className="inline-flex items-center gap-0.5">
                {item.title}
                <RailSubmenuCaret />
              </span>
            </RailSubmenu>
          </SidebarMenuItem>
        ) : (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={{
                children: item.title,
                hidden: false,
              }}
              isActive={item.title === "Home"}
              className={buttonClassName}
            >
              <item.icon className="size-4" />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      )}
    </SidebarMenu>
  )
}

function MobileNavItems({ items }: { items: MenuItem[] }) {
  return (
    <SidebarMenu>
      {items.map((item) =>
        item.items ? (
          <Collapsible
            key={item.title}
            defaultOpen={item.defaultOpen}
            className="group/collapsible"
            render={<SidebarMenuItem />}
          >
            <CollapsibleTrigger
              render={<SidebarMenuButton tooltip={item.title} />}
            >
              <item.icon />
              <span>{item.title}</span>
              <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton render={<a href="#" />}>
                      <span>{subItem.title}</span>
                      {subItem.badge ? (
                        <Badge
                          variant="secondary"
                          className="ml-auto rounded-full"
                        >
                          {subItem.badge}
                        </Badge>
                      ) : null}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton isActive={item.title === "Home"}>
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      )}
    </SidebarMenu>
  )
}

export function PortfolioSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const { isMobile } = useSidebar()

  if (isMobile) {
    const sections = [top, mid, bottom]
    return (
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader className="flex-row items-center gap-2 py-3">
          <BrandMark className="size-8" />
          <span className="font-semibold">Portfolio</span>
        </SidebarHeader>
        <SidebarContent>
          {sections.map((items, index) => (
            <div key={index} className="contents">
              {index > 0 ? <SidebarSeparator /> : null}
              <SidebarGroup>
                <SidebarGroupContent>
                  <MobileNavItems items={items} />
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          ))}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }

  return (
    <Sidebar
      collapsible="none"
      className="w-[4.75rem] border-r"
      {...props}
    >
      <SidebarHeader className="items-center py-3">
        <BrandMark className="size-9" />
      </SidebarHeader>
      <SidebarContent className="items-center overflow-x-hidden px-1">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <IconLabelNav items={top} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-auto w-8" />
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <IconLabelNav items={mid} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-auto w-8" />
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <IconLabelNav items={bottom} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
