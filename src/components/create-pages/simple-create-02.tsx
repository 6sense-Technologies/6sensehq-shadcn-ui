"use client"

import * as React from "react"
import {
  BriefcaseIcon,
  MailIcon,
  MapPinIcon,
  UserRoundIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function SimpleCreate02Form() {
  const [firstName, setFirstName] = React.useState("Jordan")
  const [lastName, setLastName] = React.useState("Lee")
  const [email, setEmail] = React.useState("jordan.lee@example.com")
  const [role, setRole] = React.useState("Editor")
  const [department, setDepartment] = React.useState("Product")

  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create user
            </h1>
            <Badge variant="secondary" className="font-normal">
              Simple
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Add a teammate with role, department, and contact details.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline">
            Save draft
          </Button>
          <Button
            type="submit"
            form="simple-create-02-form"
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Create user
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_20rem]">
        <form
          id="simple-create-02-form"
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <section className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Profile</FieldLegend>
                <FieldDescription>
                  Basic identity shown across the directory and mentions.
                </FieldDescription>
                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="first-name">First name</FieldLabel>
                      <Input
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="last-name">Last name</FieldLabel>
                      <Input
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Work email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="title">Job title</FieldLabel>
                    <Input id="title" placeholder="Product Designer" />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </section>

          <section className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Access & organization</FieldLegend>
                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel>Role</FieldLabel>
                      <Select
                        items={[
                          { label: "Admin", value: "Admin" },
                          { label: "Editor", value: "Editor" },
                          { label: "Viewer", value: "Viewer" },
                        ]}
                        value={role}
                        onValueChange={(v) => setRole((v as string) ?? "Editor")}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Editor">Editor</SelectItem>
                            <SelectItem value="Viewer">Viewer</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel>Department</FieldLabel>
                      <Select
                        items={[
                          { label: "Product", value: "Product" },
                          { label: "Engineering", value: "Engineering" },
                          { label: "Marketing", value: "Marketing" },
                          { label: "Sales", value: "Sales" },
                        ]}
                        value={department}
                        onValueChange={(v) =>
                          setDepartment((v as string) ?? "Product")
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Product">Product</SelectItem>
                            <SelectItem value="Engineering">
                              Engineering
                            </SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                            <SelectItem value="Sales">Sales</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="location">Location</FieldLabel>
                    <Input id="location" placeholder="San Francisco, CA" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="notes">Internal notes</FieldLabel>
                    <Textarea
                      id="notes"
                      placeholder="Optional onboarding notes for admins"
                      className="min-h-24"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </section>
        </form>

        <aside className="h-fit rounded-2xl border bg-background p-5 shadow-sm lg:sticky lg:top-20 sm:p-6">
          <p className="text-muted-foreground mb-4 text-xs font-medium tracking-wide uppercase">
            Live preview
          </p>
          <div className="flex flex-col items-center gap-3 text-center">
            <Avatar size="lg" className="size-16">
              <AvatarFallback
                className={cn(
                  "bg-emerald-100 text-base font-semibold text-emerald-700"
                )}
              >
                {initials || <UserRoundIcon className="size-5" />}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-0.5">
              <p className="font-semibold">
                {`${firstName} ${lastName}`.trim() || "New user"}
              </p>
              <p className="text-muted-foreground text-sm">{role}</p>
            </div>
          </div>
          <div className="mt-5 space-y-3 border-t pt-4 text-sm">
            <div className="flex items-start gap-2.5">
              <MailIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
              <span className="min-w-0 break-all">
                {email || "email@example.com"}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <BriefcaseIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
              <span>{department}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPinIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
              <span className="text-muted-foreground">Location optional</span>
            </div>
          </div>
          <Badge className="mt-5 w-full justify-center rounded-full border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
            Invitation pending
          </Badge>
        </aside>
      </div>
    </div>
  )
}
