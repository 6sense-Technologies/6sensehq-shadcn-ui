"use client"

import * as React from "react"
import {
  addDays,
  format,
  startOfDay,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from "date-fns"
import { CheckCircle2Icon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export type RichCalendarEvent = {
  title: string
  detail: string
}

type RichCalendarProps = {
  appearance?: "agenda" | "appointment" | "sidebar-presets" | "multiple"
  events?: RichCalendarEvent[]
  timeSlots?: string[]
  title?: string
  className?: string
}

const defaultEvents: RichCalendarEvent[] = [
  { title: "Team Sync Meeting", detail: "9:00am – 10:00am" },
  { title: "Design Review", detail: "1:00pm – 2:30pm" },
  { title: "Code Review Session", detail: "3:00pm – 4:00pm" },
]

const defaultTimeSlots = [
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
]

const sidebarPresets = [
  { label: "Today", getDate: () => startOfDay(new Date()) },
  { label: "Yesterday", getDate: () => startOfDay(subDays(new Date(), 1)) },
  { label: "Last week", getDate: () => startOfDay(subWeeks(new Date(), 1)) },
  { label: "Last month", getDate: () => startOfDay(subMonths(new Date(), 1)) },
  { label: "Last year", getDate: () => startOfDay(subYears(new Date(), 1)) },
]

function RichCalendar({
  appearance = "agenda",
  events = defaultEvents,
  timeSlots = defaultTimeSlots,
  title = "Book your appointment",
  className,
}: RichCalendarProps) {
  const today = React.useMemo(() => startOfDay(new Date()), [])
  const [date, setDate] = React.useState<Date | undefined>(today)
  const [dates, setDates] = React.useState<Date[] | undefined>([
    addDays(today, -17),
    today,
    addDays(today, 2),
    addDays(today, 6),
  ])
  const [month, setMonth] = React.useState<Date>(today)
  const [time, setTime] = React.useState(timeSlots[4] ?? "10:00")

  if (appearance === "agenda") {
    return (
      <Card className={cn("mx-auto w-fit max-w-sm", className)} size="sm">
        <CardContent className="p-0 px-(--card-spacing)">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            className="p-0"
          />
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col items-stretch gap-3 border-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium">
              {date ? format(date, "MMMM d, yyyy") : "Select a date"}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Add event"
            >
              <PlusIcon />
            </Button>
          </div>
          <ul className="flex flex-col gap-2">
            {events.map((event) => (
              <li
                key={event.title}
                className="flex gap-3 rounded-lg bg-muted/60 p-3"
              >
                <span
                  className="w-1 shrink-0 rounded-full bg-foreground"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-muted-foreground text-xs">{event.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    )
  }

  if (appearance === "appointment") {
    return (
      <Card className={cn("mx-auto w-full max-w-2xl", className)} size="sm">
        <CardHeader className="border-b">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-0 p-0 md:grid-cols-[1fr_auto]">
          <div className="px-(--card-spacing) pb-(--card-spacing) md:border-r">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={month}
              onMonthChange={setMonth}
              className="mx-auto p-0"
            />
          </div>
          <div className="flex max-h-72 w-full flex-col gap-2 overflow-y-auto border-t p-(--card-spacing) md:w-44 md:border-t-0">
            <p className="text-sm font-medium md:sr-only">
              {date ? format(date, "EEEE, d") : "Select a date"}
            </p>
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant={time === slot ? "default" : "outline"}
                className="w-full rounded-full"
                onClick={() => setTime(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 border-t sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <CheckCircle2Icon className="size-4 shrink-0 text-foreground" />
            <span>
              Your meeting is booked for{" "}
              <span className="text-foreground">
                {date
                  ? `${format(date, "EEEE, MMMM d")} at ${time}`
                  : "a selected time"}
              </span>
            </span>
          </p>
          <Button type="button" variant="outline">
            Confirm
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (appearance === "sidebar-presets") {
    return (
      <Card className={cn("mx-auto w-fit", className)} size="sm">
        <CardContent className="flex flex-col gap-0 p-0 sm:flex-row">
          <div className="flex flex-row gap-1 overflow-x-auto border-b p-(--card-spacing) sm:w-36 sm:flex-col sm:overflow-visible sm:border-r sm:border-b-0">
            {sidebarPresets.map((preset) => (
              <Button
                key={preset.label}
                type="button"
                variant="ghost"
                className="justify-start font-semibold"
                onClick={() => {
                  const next = preset.getDate()
                  setDate(next)
                  setMonth(next)
                }}
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <div className="px-(--card-spacing) pb-(--card-spacing)">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={month}
              onMonthChange={setMonth}
              className="p-0"
            />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (appearance === "multiple") {
    return (
      <Card className={cn("mx-auto w-fit", className)} size="sm">
        <CardContent>
          <Calendar
            mode="multiple"
            selected={dates}
            onSelect={setDates}
            month={month}
            onMonthChange={setMonth}
            className="p-0"
          />
        </CardContent>
        <CardFooter className="border-t">
          <p className="text-muted-foreground text-sm">Multiple day selection</p>
        </CardFooter>
      </Card>
    )
  }

  return null
}

export { RichCalendar }
