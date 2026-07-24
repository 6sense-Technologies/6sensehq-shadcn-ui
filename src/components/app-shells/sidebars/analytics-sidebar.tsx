"use client"

import {
  AlertTriangleIcon,
  ChartNoAxesColumnIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  DownloadIcon,
  LayoutDashboardIcon,
  LineChartIcon,
  LinkIcon,
  ListChecksIcon,
  UsersIcon,
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

const core: MenuItem[] = [
  { title: "User Behavior", icon: UserIcon },
  { title: "Audience", icon: UsersIcon },
  { title: "Traffic Sources", icon: LineChartIcon, badge: "3" },
  { title: "Engagement Metrics", icon: ChartNoAxesColumnIcon },
  {
    title: "Custom Reports",
    icon: ClipboardListIcon,
    defaultOpen: true,
    items: [
      { title: "Saved Reports" },
      { title: "Scheduled Reports" },
      { title: "Report Builder" },
    ],
  },
  { title: "Error Logs", icon: AlertTriangleIcon },
  { title: "Survey Results", icon: ListChecksIcon },
]

const visualization: MenuItem[] = [
  { title: "Data Export", icon: DownloadIcon },
  {
    title: "Integrations",
    icon: LinkIcon,
    items: [
      { title: "Connected Apps", badge: "5" },
      { title: "API Keys" },
      { title: "Webhooks" },
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

export function AnalyticsSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <BrandMark />
              <span className="font-semibold">Analytics</span>
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
                    5
                  </Badge>
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Core Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={core} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Visualization</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={visualization} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="space-y-3 rounded-xl border bg-sidebar p-3">
          <div>
            <p className="text-sm font-medium">Go to Premium</p>
            <p className="text-muted-foreground mt-1 text-xs">
              Explore 600+ courses with lifetime membership
            </p>
          </div>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
