"use client"

import * as React from "react"
import {
  BookOpenIcon,
  ChartLineIcon,
  CheckCircle2Icon,
  CodeXmlIcon,
  CreditCardIcon,
  EyeIcon,
  FileTextIcon,
  HomeIcon,
  LinkIcon,
  MapPinnedIcon,
  RibbonIcon,
  RocketIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Stepper,
  type StepperItem,
  type StepperVariant,
} from "@/components/stepper"
import { cn } from "@/lib/utils"

const basicSteps: StepperItem[] = [{}, {}, {}]

const labeledSteps: StepperItem[] = [
  { title: "Details" },
  { title: "Confirm" },
  { title: "Done" },
]

const describedSteps: StepperItem[] = [
  { title: "Account", description: "Create an account" },
  { title: "Profile", description: "Set up our profile" },
  { title: "Complete", description: "Complete the setup" },
]

const iconSteps: StepperItem[] = [
  { title: "Details", icon: FileTextIcon },
  { title: "Review", icon: EyeIcon },
  { title: "Done", icon: CheckCircle2Icon },
]

const verticalIconSteps: StepperItem[] = [
  {
    title: "Details",
    description: "Enter the required details for this step",
    icon: BookOpenIcon,
  },
  {
    title: "Review",
    description: "Confirm your information and choices",
    icon: CodeXmlIcon,
  },
  {
    title: "Done",
    description: "All set. review completed",
    icon: RibbonIcon,
  },
]

const segmentSteps: StepperItem[] = [{}, {}, {}, {}]

const checkoutSteps: StepperItem[] = [
  { title: "Cart", icon: ShoppingCartIcon },
  { title: "Address", icon: MapPinnedIcon },
  { title: "Payment", icon: CreditCardIcon },
  { title: "Confirmation", icon: ChartLineIcon },
]

const dealSteps: StepperItem[] = [
  {
    title: "Deal Type",
    description: "Choose type of deal",
    icon: TagIcon,
  },
  {
    title: "Deal Details",
    description: "Provide deal details",
    icon: FileTextIcon,
  },
  {
    title: "Deal Usage",
    description: "Limitations & Offers",
    icon: CreditCardIcon,
  },
  {
    title: "Review & Complete",
    description: "Launch a deal!",
    icon: RocketIcon,
  },
]

const accountSteps: StepperItem[] = [
  {
    title: "Account Details",
    description: "Setup Account Details",
    icon: HomeIcon,
  },
  {
    title: "Personal Information",
    description: "Add Personal Info",
    icon: UserIcon,
  },
  {
    title: "Billing",
    description: "Payment Details",
    icon: LinkIcon,
  },
]

function ControlledStepperDemo({
  steps,
  variant = "default",
  showCompleted = false,
  orientation = "horizontal",
  indicator = "square",
  showConnector,
  showControls = false,
  defaultStep = 0,
  className,
}: {
  steps: StepperItem[]
  variant?: StepperVariant
  showCompleted?: boolean
  orientation?: "horizontal" | "vertical"
  indicator?: "square" | "circle"
  showConnector?: boolean
  showControls?: boolean
  defaultStep?: number
  className?: string
}) {
  const [step, setStep] = React.useState(defaultStep)
  const last = steps.length - 1

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-6",
        orientation === "vertical"
          ? "max-w-md"
          : variant === "inline"
            ? "max-w-3xl"
            : "max-w-xl",
        variant === "segments" && "max-w-md items-stretch",
        variant === "nav" && "max-w-2xl",
        className
      )}
    >
      <Stepper
        steps={steps}
        step={step}
        onStepChange={setStep}
        variant={variant}
        showCompleted={showCompleted}
        orientation={orientation}
        indicator={indicator}
        showConnector={showConnector}
      />
      {showControls ? (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={step <= 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Previous
          </Button>
          {variant !== "segments" ? (
            <span className="text-muted-foreground text-sm tabular-nums">
              Step {step + 1} of {steps.length}
            </span>
          ) : null}
          <Button
            size="sm"
            disabled={step >= last}
            onClick={() => setStep((s) => Math.min(last, s + 1))}
          >
            Next
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export function StepperBasicExample() {
  return <ControlledStepperDemo steps={basicSteps} showControls />
}

export function StepperLabeledExample() {
  return <ControlledStepperDemo steps={labeledSteps} />
}

export function StepperDescribedExample() {
  return <ControlledStepperDemo steps={describedSteps} />
}

export function StepperOutlineExample() {
  return <ControlledStepperDemo steps={basicSteps} variant="outline" />
}

export function StepperCompletedExample() {
  return (
    <ControlledStepperDemo
      steps={basicSteps}
      showCompleted
      defaultStep={1}
    />
  )
}

export function StepperIconsExample() {
  return <ControlledStepperDemo steps={iconSteps} variant="icons" />
}

export function StepperVerticalExample() {
  return (
    <ControlledStepperDemo
      steps={verticalIconSteps}
      variant="icons"
      orientation="vertical"
    />
  )
}

export function StepperSegmentsExample() {
  return (
    <ControlledStepperDemo
      steps={segmentSteps}
      variant="segments"
      showControls
    />
  )
}

export function StepperNavExample() {
  return <ControlledStepperDemo steps={checkoutSteps} variant="nav" />
}

export function StepperDealExample() {
  return (
    <ControlledStepperDemo
      steps={dealSteps}
      variant="inline"
      orientation="vertical"
      showConnector={false}
    />
  )
}

export function StepperInlineExample() {
  return <ControlledStepperDemo steps={accountSteps} variant="inline" />
}
