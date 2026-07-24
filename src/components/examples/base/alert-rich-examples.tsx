"use client"

import {
  ArrowRightIcon,
  CircleAlertIcon,
  FileWarningIcon,
  UploadIcon,
  UserCheckIcon,
} from "lucide-react"

import { RichAlert } from "@/components/rich-alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function AlertInlineExample() {
  return (
    <RichAlert
      layout="inline"
      title="New message!"
      icon={CircleAlertIcon}
      className="max-w-md"
    />
  )
}

export function AlertMediaExample() {
  return (
    <RichAlert
      layout="media"
      title="Sara has replied on the uploaded image."
      description="12 unread messages. Tap to see."
      media={
        <Avatar className="size-10 rounded-lg after:rounded-lg">
          <AvatarImage src="https://avatar.vercel.sh/sara" alt="Sara" />
          <AvatarFallback className="rounded-lg">SA</AvatarFallback>
        </Avatar>
      }
      className="max-w-md"
    />
  )
}

export function AlertDismissExample() {
  return (
    <RichAlert
      layout="dismiss"
      title="New message!"
      description="12 unread messages. Tap to see."
      icon={CircleAlertIcon}
      onClose={() => {}}
      className="max-w-md"
    />
  )
}

export function AlertLinkExample() {
  return (
    <RichAlert
      layout="link"
      title="New message!"
      icon={CircleAlertIcon}
      action={
        <Button variant="outline" size="xs" className="rounded-full">
          Link
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      }
      className="max-w-md"
    />
  )
}

export function AlertTileExample() {
  return (
    <RichAlert
      layout="tile"
      title="This file contains virus!"
      icon={FileWarningIcon}
      className="max-w-md"
    />
  )
}

export function AlertUploadExample() {
  return (
    <RichAlert
      layout="upload"
      title="Uploading your 'Img-234.png'"
      description="Please wait while we upload your image."
      icon={UploadIcon}
      progress={45}
      onClose={() => {}}
      actions={
        <>
          <Button variant="ghost" size="sm" className="h-auto px-0">
            Cancel
          </Button>
          <Button variant="link" size="sm" className="h-auto px-0">
            Upload another
          </Button>
        </>
      }
      className="max-w-md"
    />
  )
}

export function AlertUpdateExample() {
  return (
    <RichAlert
      layout="update"
      title="A new update is available"
      description="Includes the new dashboard view. Pages and exports will now load faster."
      icon={CircleAlertIcon}
      onClose={() => {}}
      actions={
        <>
          <Button
            size="sm"
            variant="secondary"
            className="bg-background/15 text-background hover:bg-background/25"
          >
            Skip this update
          </Button>
          <Button
            size="sm"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Install now
          </Button>
        </>
      }
      className="max-w-md"
    />
  )
}

export function AlertStatusExample() {
  return (
    <RichAlert
      layout="status"
      title="@Rocky"
      description="this projects task is remaining, deadline is near."
      progress={48}
      media={
        <Avatar className="size-10 rounded-lg after:rounded-lg">
          <AvatarImage src="https://avatar.vercel.sh/rocky" alt="Rocky" />
          <AvatarFallback className="rounded-lg">RO</AvatarFallback>
        </Avatar>
      }
      className="max-w-md"
    />
  )
}

export function AlertSoftDismissExample() {
  return (
    <RichAlert
      layout="soft-dismiss"
      title="Verify your email to activate your account"
      description="We've sent a confirmation link to your inbox. Check your email to complete the sign-up."
      icon={CircleAlertIcon}
      onClose={() => {}}
      className="max-w-md"
    />
  )
}

export function AlertAccentExample() {
  return (
    <RichAlert
      layout="accent"
      title="Your request to join the team is approved."
      icon={UserCheckIcon}
      className="max-w-md"
    />
  )
}

export function AlertOpenActionExample() {
  return (
    <RichAlert
      layout="action"
      title="New message!"
      icon={CircleAlertIcon}
      action={
        <Button variant="outline" size="sm">
          Open
        </Button>
      }
      className="max-w-md"
    />
  )
}

export function AlertCalloutExample() {
  return (
    <RichAlert
      layout="callout"
      title="Verify your email to activate your account"
      description="We've sent a confirmation link to your inbox. Check your email to complete the sign-up."
      icon={CircleAlertIcon}
      className="max-w-md"
    />
  )
}

export function AlertSoftExample() {
  return (
    <RichAlert
      layout="soft"
      title="This file might be too large"
      description="Uploading large files may take longer or fail. Consider compressing it first."
      icon={CircleAlertIcon}
      className="max-w-md"
    />
  )
}
