"use client"

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react"
import {
  ArrowLeftRightIcon,
  CalendarIcon,
  ChartNoAxesColumnIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  FileTextIcon,
  HashIcon,
  LayoutDashboardIcon,
  LineChartIcon,
  RadioIcon,
  SettingsIcon,
  SmileIcon,
  UserRoundIcon,
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

const socialLinks = [
  { label: "Facebook", icon: IconBrandFacebook },
  { label: "Instagram", icon: IconBrandInstagram },
  { label: "LinkedIn", icon: IconBrandLinkedin },
  { label: "X", icon: IconBrandX },
]

const pages: MenuItem[] = [
  { title: "Content Performance", icon: FileTextIcon },
  {
    title: "Audience Insight",
    icon: UsersIcon,
    defaultOpen: true,
    items: [
      { title: "Demographics" },
      { title: "Interests", badge: "2" },
    ],
  },
  { title: "Engagement Metrics", icon: ChartNoAxesColumnIcon },
  { title: "Hashtag Performance", icon: HashIcon, badge: "3" },
  { title: "Competitor Analysis", icon: ArrowLeftRightIcon },
  { title: "Campaign Tracking", icon: LineChartIcon },
  { title: "Sentiment Tracking", icon: SmileIcon },
  { title: "Influencer", icon: UserRoundIcon },
]

const supporting: MenuItem[] = [
  { title: "Real Time Monitoring", icon: RadioIcon },
  { title: "Schedule Post & Calendar", icon: CalendarIcon },
  { title: "Report & Export", icon: ClipboardListIcon },
  {
    title: "Settings & Integrations",
    icon: SettingsIcon,
    items: [
      { title: "Account Settings" },
      { title: "Connected Apps" },
      { title: "Notifications" },
    ],
  },
  { title: "User Management", icon: UsersIcon },
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

export function SocialSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex flex-col items-center gap-3 px-2 py-3 text-center">
          <Avatar size="lg" className="size-14">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop"
              alt="John Doe"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-muted-foreground text-xs">john.doe@example.com</p>
          </div>
          <div className="flex gap-1">
            {socialLinks.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="icon-sm"
                aria-label={item.label}
                className="size-8"
              >
                <item.icon className="size-4" />
              </Button>
            ))}
          </div>
        </div>
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
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={pages} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavItems items={supporting} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <BrandMark />
              <span className="font-semibold">Social Media</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
