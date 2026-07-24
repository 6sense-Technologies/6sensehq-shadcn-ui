"use client"

import {
  AnchorIcon,
  BusIcon,
  CalendarIcon,
  CarIcon,
  ChevronRightIcon,
  CreditCardIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  PlaneIcon,
  SettingsIcon,
  TagIcon,
  UserIcon,
} from "lucide-react"

import { BrandMark } from "@/components/app-shells/shared"
import { RailSubmenu, RailSubmenuCaret } from "@/components/app-shells/sidebars/rail-submenu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

type MenuItem = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  defaultOpen?: boolean
  items?: { title: string; badge?: string }[]
}

const groups: MenuItem[][] = [
  [
    { title: "Dashboard", icon: LayoutDashboardIcon },
    { title: "Calendar", icon: CalendarIcon },
    {
      title: "Locations",
      icon: MapPinIcon,
      items: [
        { title: "Saved Places" },
        { title: "Nearby" },
        { title: "Popular Cities" },
      ],
    },
  ],
  [
    { title: "Home", icon: HomeIcon },
    {
      title: "Flights",
      icon: PlaneIcon,
      defaultOpen: true,
      items: [
        { title: "Search Flights" },
        { title: "My Bookings", badge: "2" },
        { title: "Flight Status" },
      ],
    },
    { title: "Buses", icon: BusIcon },
    {
      title: "Cars",
      icon: CarIcon,
      items: [
        { title: "Rent a Car" },
        { title: "Airport Transfer" },
      ],
    },
    { title: "Cruises", icon: AnchorIcon },
  ],
  [
    {
      title: "Deals",
      icon: TagIcon,
      items: [
        { title: "Today's Offers" },
        { title: "Seasonal Deals" },
      ],
    },
    { title: "Profile", icon: UserIcon },
    {
      title: "Settings",
      icon: SettingsIcon,
      items: [
        { title: "Account" },
        { title: "Preferences" },
        { title: "Notifications" },
      ],
    },
    { title: "Wallet", icon: CreditCardIcon },
  ],
]

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
              render={
                <SidebarMenuButton
                  isActive={item.title === "Dashboard"}
                  tooltip={item.title}
                />
              }
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
            <SidebarMenuButton isActive={item.title === "Dashboard"}>
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      )}
    </SidebarMenu>
  )
}

export function TravelSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const { isMobile } = useSidebar()

  if (isMobile) {
    return (
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader className="flex-row items-center gap-2 py-3">
          <BrandMark className="size-8" />
          <span className="font-semibold">Travel</span>
        </SidebarHeader>
        <SidebarContent>
          {groups.map((group, index) => (
            <div key={index} className="contents">
              {index > 0 ? <SidebarSeparator /> : null}
              <SidebarGroup>
                <SidebarGroupContent>
                  <MobileNavItems items={group} />
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          ))}
        </SidebarContent>
        <SidebarFooter className="pb-4">
          <Button size="sm" className="w-full">
            Book now
          </Button>
        </SidebarFooter>
      </Sidebar>
    )
  }

  return (
    <Sidebar collapsible="none" className="w-14 border-r" {...props}>
      <SidebarHeader className="items-center py-3">
        <BrandMark className="size-8" />
      </SidebarHeader>
      <SidebarContent className="items-center overflow-x-hidden px-1">
        {groups.map((group, index) => (
          <div key={index} className="contents">
            {index > 0 ? <SidebarSeparator className="mx-auto w-6" /> : null}
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.map((item) =>
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
                              isActive={item.title === "Dashboard"}
                              className="relative justify-center"
                            />
                          }
                        >
                          <item.icon />
                          <span className="sr-only">{item.title}</span>
                          <RailSubmenuCaret className="absolute top-1/2 right-0.5 -translate-y-1/2" />
                        </RailSubmenu>
                      </SidebarMenuItem>
                    ) : (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          tooltip={{
                            children: item.title,
                            hidden: false,
                          }}
                          isActive={item.title === "Dashboard"}
                          className="justify-center"
                        >
                          <item.icon />
                          <span className="sr-only">{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        ))}
      </SidebarContent>
      <SidebarFooter className="items-center pb-3">
        <Button
          size="sm"
          className="h-24 w-9 rounded-md px-0"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Book now
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
