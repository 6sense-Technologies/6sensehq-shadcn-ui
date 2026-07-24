import { ShieldCheckIcon, UserIcon } from "lucide-react"

import { SignupForm } from "@/components/examples/registration/signup-06/signup-form"
import { BrandMark } from "@/components/examples/login/shared"

const features = [
  {
    title: "Seamless User Experience",
    description:
      "Streamline your workflow with an intuitive, user-friendly interface designed to boost productivity from day one.",
    icon: UserIcon,
  },
  {
    title: "Ensure Compliance",
    description:
      "Easily meet industry regulations with automated compliance checks and up-to-date standards.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Built-In Security",
    description:
      "Rest easy with enterprise-level encryption and multi-factor authentication, safeguarding your sensitive information.",
    icon: ShieldCheckIcon,
  },
]

export default function SignupPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted p-4 sm:p-6 md:p-10">
      <div className="grid w-full max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col gap-8">
          <BrandMark />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Start Your 30-Day Free Trial
            </h1>
            <p className="text-muted-foreground text-base text-balance sm:text-lg">
              Unlock premium tools to power up your workflow — no credit card
              required.
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <div className="bg-background mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs">
                  <feature.icon className="size-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{feature.title}</p>
                  <p className="text-muted-foreground text-sm text-balance">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full rounded-2xl border bg-card p-6 shadow-xs sm:p-8">
          <SignupForm className="w-full" />
        </div>
      </div>
    </div>
  )
}
