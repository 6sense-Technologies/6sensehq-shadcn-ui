"use client"

import {
  AwardIcon,
  ChartNoAxesColumnIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  ClockIcon,
  FolderIcon,
  LayoutDashboardIcon,
  PencilIcon,
  SettingsIcon,
  StarIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react"

import { BrandMark } from "@/components/app-shells/shared"
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
  defaultOpen?: boolean
  items?: { title: string; badge?: string }[]
}

const pages: MenuItem[] = [
  { title: "Student Profile", icon: UserIcon },
  { title: "Progress", icon: TrendingUpIcon },
  { title: "Assignments", icon: PencilIcon, badge: "2" },
  { title: "Schedule", icon: ClockIcon },
  {
    title: "Resources",
    icon: FolderIcon,
    defaultOpen: true,
    items: [
      { title: "Course Materials" },
      { title: "Library" },
      { title: "Downloads", badge: "4" },
    ],
  },
  { title: "Reports", icon: ChartNoAxesColumnIcon },
  { title: "Certificates", icon: AwardIcon },
]

const misc: MenuItem[] = [
  { title: "Reviews", icon: StarIcon },
  { title: "FAQ", icon: CircleHelpIcon },
  {
    title: "Settings",
    icon: SettingsIcon,
    items: [
      { title: "Account" },
      { title: "Preferences" },
      { title: "Notifications" },
    ],
  },
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
            <SidebarMenuButton tooltip={item.title}>
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

export function AcademySidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <BrandMark />
              <span className="font-semibold">Academy</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Dashboard">
                  <LayoutDashboardIcon />
                  <span>Dashboard</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>
                  <Badge variant="secondary" className="rounded-full">
                    3
                  </Badge>
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={pages} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Misc</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={misc} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="space-y-3 rounded-xl border bg-card p-3">
          <div>
            <p className="text-sm font-medium">Mobile app is available</p>
            <p className="text-muted-foreground mt-1 text-xs">
              The personal account allows user management subscription
            </p>
          </div>
          <Button size="sm" className="w-full">
            Get App
          </Button>
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80&auto=format&fit=crop"
            alt=""
            className="h-20 w-full rounded-lg object-cover"
          />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
