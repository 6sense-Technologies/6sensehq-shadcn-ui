"use client"

import * as React from "react"
import {
  CalendarIcon,
  MegaphoneIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react"

import { Stepper } from "@/components/stepper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const steps = [
  {
    title: "Campaign",
    description: "Name and objective",
    icon: MegaphoneIcon,
  },
  {
    title: "Audience",
    description: "Who to reach",
    icon: UsersIcon,
  },
  {
    title: "Schedule",
    description: "When it runs",
    icon: CalendarIcon,
  },
  {
    title: "Goals",
    description: "Success metrics",
    icon: TargetIcon,
  },
]

export function MultiStepCreate02Form() {
  const [step, setStep] = React.useState(0)
  const [name, setName] = React.useState("Spring product launch")
  const isLast = step === steps.length - 1

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create campaign
          </h1>
          <Badge variant="secondary" className="font-normal">
            Multi-step
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">
          Vertical guided setup with segment progress and clear step context.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[15rem_1fr]">
        <aside className="h-fit rounded-2xl border bg-background p-4 shadow-sm sm:p-5">
          <Stepper
            steps={steps}
            step={step}
            onStepChange={setStep}
            variant="inline"
            orientation="vertical"
            indicator="circle"
            showCompleted
          />
        </aside>

        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="border-b p-4 sm:px-5">
            <Stepper
              steps={steps}
              step={step}
              variant="segments"
              className="max-w-md"
            />
          </div>

          <div className="min-h-[22rem] p-5 sm:p-6">
            {step === 0 ? (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Campaign details</FieldLegend>
                  <FieldDescription>
                    Give your campaign a clear name and objective.
                  </FieldDescription>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="campaign-name">Name</FieldLabel>
                      <Input
                        id="campaign-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Channel</FieldLabel>
                      <Select
                        items={[
                          { label: "Email", value: "email" },
                          { label: "In-app", value: "in-app" },
                          { label: "Social", value: "social" },
                        ]}
                        defaultValue="email"
                      >
                        <SelectTrigger className="w-full max-w-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="in-app">In-app</SelectItem>
                            <SelectItem value="social">Social</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="objective">Objective</FieldLabel>
                      <Textarea
                        id="objective"
                        className="min-h-28"
                        placeholder="Drive product awareness among existing customers"
                        defaultValue="Announce the spring release to active subscribers."
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </FieldGroup>
            ) : null}

            {step === 1 ? (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Audience</FieldLegend>
                  <FieldDescription>
                    Select the segments that should receive this campaign.
                  </FieldDescription>
                  <div className="mt-2 space-y-3">
                    {[
                      {
                        id: "active",
                        label: "Active subscribers",
                        desc: "12,480 contacts · opened in last 30 days",
                      },
                      {
                        id: "trial",
                        label: "Trial users",
                        desc: "3,210 contacts · free plan",
                      },
                      {
                        id: "churn",
                        label: "At-risk accounts",
                        desc: "890 contacts · low engagement",
                      },
                    ].map((item) => (
                      <label
                        key={item.id}
                        htmlFor={`aud-${item.id}`}
                        className="hover:bg-muted/40 flex cursor-pointer items-start gap-3 rounded-xl border p-4"
                      >
                        <Checkbox id={`aud-${item.id}`} defaultChecked={item.id !== "churn"} className="mt-0.5" />
                        <span>
                          <span className="block text-sm font-medium">
                            {item.label}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {item.desc}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </FieldSet>
              </FieldGroup>
            ) : null}

            {step === 2 ? (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Schedule</FieldLegend>
                  <FieldGroup>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="start-date">Start date</FieldLabel>
                        <Input id="start-date" type="date" defaultValue="2026-07-28" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="start-time">Start time</FieldLabel>
                        <Input id="start-time" type="time" defaultValue="09:00" />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel>Timezone</FieldLabel>
                      <Select
                        items={[
                          { label: "Pacific Time (PT)", value: "pt" },
                          { label: "Eastern Time (ET)", value: "et" },
                          { label: "UTC", value: "utc" },
                        ]}
                        defaultValue="pt"
                      >
                        <SelectTrigger className="w-full max-w-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="pt">Pacific Time (PT)</SelectItem>
                            <SelectItem value="et">Eastern Time (ET)</SelectItem>
                            <SelectItem value="utc">UTC</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </FieldGroup>
            ) : null}

            {step === 3 ? (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Success metrics</FieldLegend>
                  <FieldDescription>
                    Track how this campaign performs after send.
                  </FieldDescription>
                  <FieldGroup>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="open-rate">
                          Target open rate (%)
                        </FieldLabel>
                        <Input id="open-rate" type="number" defaultValue="42" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="ctr">
                          Target click rate (%)
                        </FieldLabel>
                        <Input id="ctr" type="number" defaultValue="8" />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="kpi-notes">Notes</FieldLabel>
                      <Textarea
                        id="kpi-notes"
                        className="min-h-24"
                        placeholder="Optional KPI notes for the growth team"
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </FieldGroup>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t px-5 py-4 sm:px-6">
            <Button
              type="button"
              variant="outline"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Button type="button" variant="ghost">
                Save draft
              </Button>
              <Button
                type="button"
                className="bg-emerald-600 text-white hover:bg-emerald-700"
                onClick={() => {
                  if (!isLast) setStep((s) => Math.min(steps.length - 1, s + 1))
                }}
              >
                {isLast ? "Launch campaign" : "Continue"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
