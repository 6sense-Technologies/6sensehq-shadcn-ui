import type { Metadata } from "next"

import { CalendarDemoExample } from "@/components/examples/base/calendar-demo"
import { CalendarHijriExample } from "@/components/examples/base/calendar-hijri"
import { CalendarBasicExample } from "@/components/examples/base/calendar-basic"
import { CalendarRangeExample } from "@/components/examples/base/calendar-range"
import { CalendarCaptionExample } from "@/components/examples/base/calendar-caption"
import { CalendarPresetsExample } from "@/components/examples/base/calendar-presets"
import { CalendarTimeExample } from "@/components/examples/base/calendar-time"
import { CalendarBookedDatesExample } from "@/components/examples/base/calendar-booked-dates"
import { CalendarCustomDaysExample } from "@/components/examples/base/calendar-custom-days"
import { CalendarWeekNumbersExample } from "@/components/examples/base/calendar-week-numbers"
import { CalendarRtlExample } from "@/components/examples/base/calendar-rtl"
import {
  CalendarAgendaExample,
  CalendarAppointmentExample,
  CalendarSidebarPresetsExample,
  CalendarMultipleExample,
} from "@/components/examples/base/calendar-rich-examples"

export const metadata: Metadata = {
  title: "Calendar",
  description: "A calendar component that allows users to select a date or a range of dates.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground text-lg">A calendar component that allows users to select a date or a range of dates.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Persian / Hijri / Jalali Calendar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarHijriExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarBasicExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Range Calendar</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarRangeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Month and Year Selector</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarCaptionExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Presets</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarPresetsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Sidebar presets
        </h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarSidebarPresetsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Agenda</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarAgendaExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Appointment</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarAppointmentExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Multiple</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarMultipleExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Date and Time Picker</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarTimeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Booked dates</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarBookedDatesExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom Cell Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarCustomDaysExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Week Numbers</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarWeekNumbersExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <CalendarRtlExample />
        </div>
      </section>
    </div>
  )
}
