"use client"

import * as React from "react"
import { Building2Icon, CheckIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
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
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function SimpleCreateForm() {
  const [name, setName] = React.useState("")
  const [visibility, setVisibility] = React.useState("private")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create project
            </h1>
            <Badge variant="secondary" className="font-normal">
              Simple
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Set up a new project with a name, visibility, and short brief.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button
            type="submit"
            form="simple-create-form"
            className="bg-sky-600 text-white hover:bg-sky-700"
          >
            Create project
          </Button>
        </div>
      </div>

      <form
        id="simple-create-form"
        className="overflow-hidden rounded-2xl border bg-background shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-0 lg:grid-cols-[1fr_17rem]">
          <div className="space-y-6 p-5 sm:p-6">
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Project details</FieldLegend>
                <FieldDescription>
                  These details appear in your workspace sidebar and project
                  list.
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="project-name">Project name</FieldLabel>
                    <Input
                      id="project-name"
                      placeholder="Website redesign"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="project-key">Project key</FieldLabel>
                    <Input
                      id="project-key"
                      placeholder="WEB"
                      className="max-w-[8rem] uppercase"
                      defaultValue={name.slice(0, 3).toUpperCase() || ""}
                    />
                    <FieldDescription>
                      Short unique code used in tickets and URLs.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="project-desc">Description</FieldLabel>
                    <Textarea
                      id="project-desc"
                      placeholder="What is this project about?"
                      className="min-h-28"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              <FieldSet>
                <FieldLegend>Settings</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Visibility</FieldLabel>
                    <Select
                      items={[
                        { label: "Private", value: "private" },
                        { label: "Team", value: "team" },
                        { label: "Public", value: "public" },
                      ]}
                      value={visibility}
                      onValueChange={(v) => setVisibility((v as string) ?? "private")}
                    >
                      <SelectTrigger className="w-full max-w-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="team">Team</SelectItem>
                          <SelectItem value="public">Public</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field orientation="horizontal" className="items-center">
                    <FieldLabel htmlFor="project-notify" className="flex-1">
                      Notify team on create
                      <FieldDescription>
                        Send a workspace announcement when this project goes
                        live.
                      </FieldDescription>
                    </FieldLabel>
                    <Switch id="project-notify" defaultChecked />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </div>

          <aside className="border-t bg-muted/30 p-5 lg:border-t-0 lg:border-l sm:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex size-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <Building2Icon className="size-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {name.trim() || "Untitled project"}
                </p>
                <p className="text-muted-foreground text-xs capitalize">
                  {visibility} · Ready to create
                </p>
              </div>
              <ul className="text-muted-foreground space-y-2 text-xs">
                {[
                  "Default board & backlog",
                  "Role-based permissions",
                  "Activity timeline",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-background flex items-start gap-2 rounded-xl border p-3 text-xs">
                <SparklesIcon className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                <p className="text-muted-foreground">
                  You can invite members and connect integrations after the
                  project is created.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </div>
  )
}
