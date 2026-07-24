"use client"

import {
  CalendarCheckIcon,
  CarIcon,
  ClockIcon,
  SettingsIcon,
  WrenchIcon,
} from "lucide-react"

import {
  BrandMark,
  ContentPlaceholder,
  HeaderActions,
  ScrollTopButton,
  ShellSearch,
} from "@/components/app-shells/shared"
import { HorizontalNav } from "@/components/app-shells/shell-topbar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"

const nav = [
  { title: "Dashboard", icon: ClockIcon },
  { title: "Booking", icon: CalendarCheckIcon },
  { title: "Buy Cars", icon: CarIcon },
  { title: "Sell Cars", icon: CarIcon },
  { title: "Services", icon: WrenchIcon },
  { title: "Settings", icon: SettingsIcon },
]

export default function AutomobileAppShellPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col">
      <header className="flex flex-col gap-3 border-b px-3 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2">
          <BrandMark />
          <span className="font-semibold">Automobile</span>
        </div>
        <ShellSearch
          placeholder="Search Services..."
          className="mx-auto max-w-md flex-1 sm:max-w-lg"
        />
        <HeaderActions showProfileText className="justify-end" />
      </header>

      <HorizontalNav items={nav} />

      <div className="flex flex-col gap-3 border-b px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Cars</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Book Car</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            Buy Cars
            <CarIcon data-icon="inline-end" />
          </Button>
          <Button size="sm">
            Book Appointment
            <CalendarCheckIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <main className="flex flex-1 flex-col p-3 sm:p-6">
        <ContentPlaceholder className="min-h-[min(70vh,40rem)]" />
      </main>
      <ScrollTopButton />
    </div>
  )
}
