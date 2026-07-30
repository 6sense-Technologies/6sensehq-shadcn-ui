"use client"

import * as React from "react"
import {
  BuildingIcon,
  CheckIcon,
  CreditCardIcon,
  PaletteIcon,
  RocketIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const steps = [
  {
    title: "Basics",
    description: "Name and purpose",
    icon: BuildingIcon,
  },
  {
    title: "Plan",
    description: "Choose billing",
    icon: CreditCardIcon,
  },
  {
    title: "Brand",
    description: "Accent color",
    icon: PaletteIcon,
  },
  {
    title: "Review",
    description: "Confirm & create",
    icon: RocketIcon,
  },
]

const plans = [
  {
    id: "starter",
    title: "Starter",
    price: "$0",
    period: "forever",
    desc: "For individuals and tiny teams trying things out.",
    perks: ["5 seats", "3 projects", "Community support"],
  },
  {
    id: "pro",
    title: "Pro",
    price: "$29",
    period: "per month",
    desc: "For growing teams that need roles and analytics.",
    perks: ["Unlimited projects", "Advanced roles", "Priority email"],
    popular: true,
  },
  {
    id: "business",
    title: "Business",
    price: "$79",
    period: "per month",
    desc: "For companies that need security and scale.",
    perks: ["SSO & SCIM", "Audit logs", "Dedicated support"],
  },
]

const accents = [
  {
    id: "sky",
    label: "Sky",
    swatch: "bg-sky-500",
    soft: "bg-sky-50 text-sky-700 ring-sky-200",
  },
  {
    id: "emerald",
    label: "Emerald",
    swatch: "bg-emerald-500",
    soft: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  {
    id: "amber",
    label: "Amber",
    swatch: "bg-amber-500",
    soft: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  {
    id: "rose",
    label: "Rose",
    swatch: "bg-rose-500",
    soft: "bg-rose-50 text-rose-700 ring-rose-200",
  },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function MultiStepCreateForm() {
  const [step, setStep] = React.useState(0)
  const [workspace, setWorkspace] = React.useState("Acme Studio")
  const [slug, setSlug] = React.useState("acme-studio")
  const [purpose, setPurpose] = React.useState(
    "Product design and launch workflows for the core team."
  )
  const [plan, setPlan] = React.useState("pro")
  const [accent, setAccent] = React.useState("sky")
  const [slugTouched, setSlugTouched] = React.useState(false)

  const isLast = step === steps.length - 1
  const selectedPlan = plans.find((p) => p.id === plan) ?? plans[1]
  const selectedAccent = accents.find((a) => a.id === accent) ?? accents[0]

  const goNext = () => setStep((s) => Math.min(steps.length - 1, s + 1))
  const goBack = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create workspace
          </h1>
          <Badge variant="secondary" className="font-normal">
            Multi-step
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Set up your workspace in a few short steps — basics, plan, brand, then
          review.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
        <div className="grid lg:grid-cols-[15.5rem_1fr]">
          <aside className="border-b bg-muted/20 p-4 lg:border-r lg:border-b-0 sm:p-5">
            <p className="text-muted-foreground mb-4 text-xs font-medium tracking-wide uppercase">
              Progress
            </p>
            <ol className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {steps.map((item, index) => {
                const done = index < step
                const current = index === step
                const Icon = item.icon
                return (
                  <li key={item.title} className="min-w-[9.5rem] lg:min-w-0">
                    <button
                      type="button"
                      onClick={() => setStep(index)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                        current && "bg-background shadow-sm ring-1 ring-border",
                        !current && "hover:bg-background/70"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                          done && "bg-sky-600 text-white",
                          current && "bg-sky-50 text-sky-700 ring-2 ring-sky-200",
                          !done &&
                            !current &&
                            "bg-muted text-muted-foreground"
                        )}
                      >
                        {done ? (
                          <CheckIcon className="size-4" />
                        ) : (
                          <Icon className="size-3.5" />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-medium",
                            !current && !done && "text-muted-foreground"
                          )}
                        >
                          {item.title}
                        </span>
                        <span className="text-muted-foreground hidden text-xs sm:block">
                          {item.description}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </aside>

          <div className="flex min-w-0 flex-col">
            <div className="flex-1 p-5 sm:p-6 md:p-8">
              {step === 0 ? (
                <FieldGroup className="max-w-xl">
                  <FieldSet>
                    <FieldLegend>Workspace basics</FieldLegend>
                    <FieldDescription>
                      This name shows up in invites, invoices, and the app
                      switcher.
                    </FieldDescription>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
                        <Input
                          id="ws-name"
                          value={workspace}
                          onChange={(e) => {
                            const value = e.target.value
                            setWorkspace(value)
                            if (!slugTouched) setSlug(slugify(value))
                          }}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="ws-url">Workspace URL</FieldLabel>
                        <div className="flex overflow-hidden rounded-lg border focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
                          <span className="bg-muted text-muted-foreground flex shrink-0 items-center px-3 text-sm">
                            app.6sense.dev/
                          </span>
                          <Input
                            id="ws-url"
                            value={slug}
                            onChange={(e) => {
                              setSlugTouched(true)
                              setSlug(slugify(e.target.value))
                            }}
                            className="rounded-none border-0 focus-visible:ring-0"
                          />
                        </div>
                        <FieldDescription>
                          Only lowercase letters, numbers, and hyphens.
                        </FieldDescription>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="ws-purpose">Purpose</FieldLabel>
                        <Textarea
                          id="ws-purpose"
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          placeholder="What will this workspace be used for?"
                          className="min-h-28"
                        />
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </FieldGroup>
              ) : null}

              {step === 1 ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold tracking-tight">
                      Choose a plan
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      You can change plans anytime. Billing starts after you
                      create the workspace.
                    </p>
                  </div>
                  <RadioGroup
                    value={plan}
                    onValueChange={setPlan}
                    className="grid gap-3 md:grid-cols-3"
                  >
                    {plans.map((item) => {
                      const selected = plan === item.id
                      return (
                        <label
                          key={item.id}
                          htmlFor={`plan-${item.id}`}
                          className={cn(
                            "relative flex cursor-pointer flex-col rounded-2xl border p-4 transition-colors",
                            selected
                              ? "border-sky-500 bg-sky-50/40 ring-1 ring-sky-500/30"
                              : "hover:bg-muted/30"
                          )}
                        >
                          {item.popular ? (
                            <Badge className="absolute -top-2.5 right-3 border-transparent bg-sky-600 text-white hover:bg-sky-600">
                              Popular
                            </Badge>
                          ) : null}
                          <div className="mb-3 flex items-start justify-between gap-2">
                            <div>
                              <p className="font-semibold">{item.title}</p>
                              <p className="mt-1 flex items-baseline gap-1">
                                <span className="text-2xl font-semibold tracking-tight">
                                  {item.price}
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {item.period}
                                </span>
                              </p>
                            </div>
                            <RadioGroupItem
                              value={item.id}
                              id={`plan-${item.id}`}
                              className="mt-1"
                            />
                          </div>
                          <p className="text-muted-foreground mb-4 text-sm">
                            {item.desc}
                          </p>
                          <ul className="mt-auto space-y-1.5">
                            {item.perks.map((perk) => (
                              <li
                                key={perk}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckIcon className="size-3.5 shrink-0 text-emerald-600" />
                                {perk}
                              </li>
                            ))}
                          </ul>
                        </label>
                      )
                    })}
                  </RadioGroup>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="max-w-2xl space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold tracking-tight">
                      Brand accent
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Used for navigation highlights, buttons, and focus states.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {accents.map((item) => {
                      const selected = accent === item.id
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setAccent(item.id)}
                          className={cn(
                            "flex flex-col items-center gap-3 rounded-2xl border p-4 transition-colors",
                            selected
                              ? "border-foreground/20 bg-muted/40 ring-1 ring-foreground/10"
                              : "hover:bg-muted/30"
                          )}
                        >
                          <span
                            className={cn(
                              "size-10 rounded-full shadow-sm ring-4 ring-white",
                              item.swatch
                            )}
                          />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm",
                      selectedAccent.soft,
                      "ring-1"
                    )}
                  >
                    <span
                      className={cn(
                        "size-3 rounded-full",
                        selectedAccent.swatch
                      )}
                    />
                    <span>
                      Preview: primary actions will use{" "}
                      <strong className="font-semibold">
                        {selectedAccent.label}
                      </strong>
                      .
                    </span>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="max-w-2xl space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold tracking-tight">
                      Ready to launch
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Double-check these details before creating your workspace.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl border">
                    <div className="flex items-center gap-3 border-b bg-muted/20 px-4 py-3">
                      <span
                        className={cn(
                          "flex size-10 items-center justify-center rounded-xl text-white",
                          selectedAccent.swatch
                        )}
                      >
                        <BuildingIcon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-semibold">
                          {workspace || "Untitled workspace"}
                        </p>
                        <p className="text-muted-foreground truncate text-xs">
                          app.6sense.dev/{slug || "—"}
                        </p>
                      </div>
                    </div>
                    <dl className="divide-y">
                      {[
                        {
                          label: "Plan",
                          value: `${selectedPlan.title} · ${selectedPlan.price}/${selectedPlan.period === "forever" ? "mo free" : "mo"}`,
                        },
                        {
                          label: "Accent",
                          value: selectedAccent.label,
                        },
                        {
                          label: "Purpose",
                          value: purpose || "—",
                        },
                        {
                          label: "Region",
                          value: "US East",
                        },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="grid gap-1 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
                        >
                          <dt className="text-muted-foreground text-sm">
                            {row.label}
                          </dt>
                          <dd className="text-sm font-medium">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t px-5 py-4 sm:px-6">
              <Button
                type="button"
                variant="outline"
                disabled={step === 0}
                onClick={goBack}
              >
                Back
              </Button>
              <div className="flex items-center gap-3">
                <p className="text-muted-foreground hidden text-sm sm:block">
                  Step {step + 1} of {steps.length}
                </p>
                <Button
                  type="button"
                  className="bg-sky-600 text-white hover:bg-sky-700"
                  onClick={() => {
                    if (!isLast) goNext()
                  }}
                >
                  {isLast ? "Create workspace" : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
