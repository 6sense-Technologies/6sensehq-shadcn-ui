"use client"

import {
  BoxesIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  ClipboardListIcon,
  FileTextIcon,
  LayoutGridIcon,
  ListIcon,
  MoreVerticalIcon,
  PackageIcon,
  PercentIcon,
  StarIcon,
  TableIcon,
  UserCogIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

import { BrandMark } from "@/components/app-shells/shared"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

type MenuItem = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  isActive?: boolean
  defaultOpen?: boolean
  items?: { title: string; badge?: string }[]
}

const primary: MenuItem[] = [
  { title: "Dashboard", icon: LayoutGridIcon, isActive: true },
  { title: "New Order", icon: PackageIcon },
  { title: "Inventory", icon: BoxesIcon },
  { title: "Discount", icon: PercentIcon, badge: "2" },
  { title: "Ordering Table", icon: TableIcon },
  {
    title: "Customers",
    icon: UsersIcon,
    defaultOpen: true,
    items: [{ title: "Customer List" }, { title: "Customer Groups" }],
  },
  { title: "Order List", icon: ListIcon },
  { title: "Staff Management", icon: UserCogIcon },
]

const useful: MenuItem[] = [
  { title: "Help Center", icon: CircleHelpIcon },
  {
    title: "Products",
    icon: ClipboardListIcon,
    defaultOpen: true,
    items: [
      { title: "All Products" },
      { title: "Categories", badge: "6" },
      { title: "Add Product" },
    ],
  },
  { title: "Customer Management", icon: UserIcon },
  { title: "Billing & Payment", icon: FileTextIcon },
  { title: "Feedback & Reviews", icon: StarIcon },
]

function NavItems({ items }: { items: MenuItem[] }) {
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
            <SidebarMenuButton
              isActive={item.isActive}
              tooltip={item.title}
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
            {item.badge ? (
              <SidebarMenuBadge>
                <Badge variant="secondary" className="rounded-full">
                  {item.badge}
                </Badge>
              </SidebarMenuBadge>
            ) : null}
          </SidebarMenuItem>
        )
      )}
    </SidebarMenu>
  )
}

export function FoodPointSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <BrandMark />
              <span className="font-semibold">Food Point</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <NavItems items={primary} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Useful Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={useful} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="rounded-xl border bg-card p-3">
          <div className="mb-3 flex items-start justify-between">
            <BrandMark className="size-7" />
            <Button variant="ghost" size="icon-sm" aria-label="More">
              <MoreVerticalIcon />
            </Button>
          </div>
          <p className="text-muted-foreground text-xs">Today&apos;s order</p>
          <div className="mt-1 flex items-end justify-between gap-2">
            <p className="text-2xl font-bold tracking-tight">234</p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} size="sm" className="ring-2 ring-card">
                  <AvatarImage
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    alt=""
                  />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
