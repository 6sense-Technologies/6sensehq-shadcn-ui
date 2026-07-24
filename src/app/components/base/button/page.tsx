import type { Metadata } from "next"

import { ButtonDemoExample } from "@/components/examples/base/button-demo"
import { ButtonSizeExample } from "@/components/examples/base/button-size"
import { ButtonDefaultExample } from "@/components/examples/base/button-default"
import { ButtonOutlineExample } from "@/components/examples/base/button-outline"
import { ButtonSecondaryExample } from "@/components/examples/base/button-secondary"
import { ButtonGhostExample } from "@/components/examples/base/button-ghost"
import { ButtonDestructiveExample } from "@/components/examples/base/button-destructive"
import { ButtonLinkExample } from "@/components/examples/base/button-link"
import { ButtonIconExample } from "@/components/examples/base/button-icon"
import { ButtonWithIconExample } from "@/components/examples/base/button-with-icon"
import { ButtonRoundedExample } from "@/components/examples/base/button-rounded"
import { ButtonSpinnerExample } from "@/components/examples/base/button-spinner"
import { ButtonGroupDemoExample } from "@/components/examples/base/button-group-demo"
import { ButtonRenderExample } from "@/components/examples/base/button-render"
import { ButtonRtlExample } from "@/components/examples/base/button-rtl"
import {
  ButtonDashedExample,
  ButtonSocialContinueExample,
  ButtonSocialIconsExample,
  ButtonCountExample,
  ButtonSocialLoginExample,
  ButtonChoiceExample,
} from "@/components/examples/base/button-rich-examples"

export const metadata: Metadata = {
  title: "Button",
  description: "Displays a button or a component that looks like a button.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-muted-foreground text-lg">Displays a button or a component that looks like a button.</p>
      </div>
      <section className="flex flex-col gap-4">
        
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonSizeExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Default</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonDefaultExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Outline</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonOutlineExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Secondary</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonSecondaryExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Ghost</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGhostExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Destructive</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonDestructiveExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Link</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonLinkExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Icon</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonIconExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With Icon</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonWithIconExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dashed</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonDashedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Social continue
        </h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonSocialContinueExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Social icons</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonSocialIconsExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">With count</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonCountExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Social login</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonSocialLoginExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Choice</h2>
        <div className="flex min-h-[160px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonChoiceExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Rounded</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonRoundedExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Spinner</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonSpinnerExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Button Group</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonGroupDemoExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">As Link</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonRenderExample />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">RTL</h2>
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border bg-background p-6">
          <ButtonRtlExample />
        </div>
      </section>
    </div>
  )
}
