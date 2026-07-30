"use client"

import * as React from "react"
import {
  BuildingIcon,
  CheckIcon,
  MailPlusIcon,
  UserPlusIcon,
  XIcon,
} from "lucide-react"

import { Stepper } from "@/components/stepper"
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
import { cn } from "@/lib/utils"

const steps = [
  { title: "Team", description: "Basics", icon: BuildingIcon },
  { title: "Invite", description: "Add people", icon: UserPlusIcon },
  { title: "Done", description: "Confirm", icon: CheckIcon },
]

type Invite = {
  id: string
  email: string
  role: string
}

const avatarTones = [
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
]

export function InviteCreateForm() {
  const [step, setStep] = React.useState(0)
  const [teamName, setTeamName] = React.useState("Design Systems")
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("Editor")
  const [invites, setInvites] = React.useState<Invite[]>([
    { id: "1", email: "alex.demo@example.com", role: "Admin" },
    { id: "2", email: "sam.sample@example.com", role: "Editor" },
  ])

  const addInvite = () => {
    const trimmed = email.trim()
    if (!trimmed) return
    setInvites((prev) => [
      ...prev,
      { id: String(Date.now()), email: trimmed, role },
    ])
    setEmail("")
  }

  const removeInvite = (id: string) => {
    setInvites((prev) => prev.filter((item) => item.id !== id))
  }

  const isLast = step === steps.length - 1

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create team & invite
          </h1>
          <Badge variant="secondary" className="font-normal">
            Invite step
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">
          Spin up a team, then invite collaborators before you finish.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
        <div className="border-b p-4 sm:p-5">
          <Stepper
            steps={steps}
            step={step}
            onStepChange={setStep}
            variant="icons"
            indicator="circle"
            showCompleted
            className="justify-center sm:justify-start"
          />
        </div>

        <div className="min-h-[24rem] p-5 sm:p-6">
          {step === 0 ? (
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Team details</FieldLegend>
                <FieldDescription>
                  Teams group people, permissions, and shared resources.
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="team-name">Team name</FieldLabel>
                    <Input
                      id="team-name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Visibility</FieldLabel>
                    <Select
                      items={[
                        { label: "Private", value: "private" },
                        { label: "Organization", value: "org" },
                      ]}
                      defaultValue="private"
                    >
                      <SelectTrigger className="w-full max-w-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="org">Organization</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          ) : null}

          {step === 1 ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Invite teammates
                </h2>
                <p className="text-muted-foreground text-sm">
                  Add emails now, or skip and invite later from team settings.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                <Field className="min-w-0 flex-1">
                  <FieldLabel htmlFor="invite-email">Email address</FieldLabel>
                  <Input
                    id="invite-email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addInvite()
                      }
                    }}
                  />
                </Field>
                <Field className="sm:w-36">
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
                <Button
                  type="button"
                  variant="outline"
                  className="gap-1.5"
                  onClick={addInvite}
                >
                  <MailPlusIcon className="size-4" />
                  Add
                </Button>
              </div>

              <div className="space-y-2">
                {invites.length === 0 ? (
                  <div className="text-muted-foreground flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-4 py-10 text-center text-sm">
                    <UserPlusIcon className="size-5" />
                    No invites yet. Add an email to get started.
                  </div>
                ) : (
                  invites.map((invite, index) => (
                    <div
                      key={invite.id}
                      className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
                    >
                      <Avatar size="sm">
                        <AvatarFallback
                          className={cn(
                            "text-[10px] font-semibold",
                            avatarTones[index % avatarTones.length]
                          )}
                        >
                          {invite.email.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {invite.email}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {invite.role}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Remove ${invite.email}`}
                        onClick={() => removeInvite(invite.id)}
                      >
                        <XIcon className="size-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-6 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckIcon className="size-6" />
              </span>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {teamName || "Your team"} is ready
                </h2>
                <p className="text-muted-foreground text-sm">
                  {invites.length} invite
                  {invites.length === 1 ? "" : "s"} will be sent when you
                  finish.
                </p>
              </div>
              <ul className="w-full space-y-2 text-left">
                {invites.map((invite, index) => (
                  <li
                    key={invite.id}
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
                  >
                    <Avatar size="sm">
                      <AvatarFallback
                        className={cn(
                          "text-[10px] font-semibold",
                          avatarTones[index % avatarTones.length]
                        )}
                      >
                        {invite.email.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="min-w-0 flex-1 truncate">
                      {invite.email}
                    </span>
                    <Badge variant="secondary">{invite.role}</Badge>
                  </li>
                ))}
              </ul>
            </div>
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
            {step === 1 ? (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep(2)}
              >
                Skip for now
              </Button>
            ) : null}
            <Button
              type="button"
              className="bg-sky-600 text-white hover:bg-sky-700"
              onClick={() => {
                if (!isLast) setStep((s) => Math.min(steps.length - 1, s + 1))
              }}
            >
              {isLast ? "Create & send invites" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
