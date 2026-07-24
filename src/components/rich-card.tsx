"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BellIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HeartIcon,
  LinkIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  PackageIcon,
  Repeat2Icon,
  SendIcon,
  SparklesIcon,
  StarIcon,
  TerminalIcon,
  UserPlusIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export type RichCardAppearance =
  | "media-bottom"
  | "media-top"
  | "horizontal"
  | "social"
  | "testimonial"
  | "promo"
  | "overlay"
  | "overlay-author"
  | "billing"
  | "status"
  | "feature"
  | "docs"

type RichCardStat = { label: string; value: string }
type RichCardMetric = { label: string; value: string }

type RichCardProps = {
  appearance: RichCardAppearance
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  primaryAction?: string
  secondaryAction?: string
  align?: "start" | "center"
  badge?: string
  featured?: boolean
  /** Social */
  author?: string
  handle?: string
  avatarSrc?: string
  verified?: boolean
  caption?: string
  tags?: string[]
  likes?: string
  comments?: string
  reposts?: string
  shares?: string
  /** Testimonial */
  highlight?: string
  rating?: number
  /** Billing */
  billingTitle?: string
  creditLabel?: string
  creditValue?: string
  onDemandLabel?: string
  onDemandValue?: string
  progress?: number
  metrics?: RichCardMetric[]
  /** Status */
  statusIcon?: LucideIcon
  stats?: RichCardStat[]
  /** Feature / docs */
  icon?: LucideIcon
  linkLabel?: string
  className?: string
}

const defaultImage =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format&fit=crop"

function RichCard({
  appearance,
  title = "Card title",
  description = "Card description goes here.",
  imageSrc = defaultImage,
  imageAlt = "",
  primaryAction = "Explore More",
  secondaryAction = "Download Now",
  align = "start",
  badge = "Trending",
  featured = true,
  author = "Philip George",
  handle = "@philip20",
  avatarSrc = "https://github.com/shadcn.png",
  verified = true,
  caption = "Lost in the colors of the night. Sometimes the blur reveals more than clarity.",
  tags = ["#AbstractVibes", "#Dreamscape", "#VisualPoetry"],
  likes = "2.1K",
  comments = "1.4K",
  reposts = "669",
  shares = "1.1K",
  highlight,
  rating = 4,
  billingTitle = "3 days remaining in cycle",
  creditLabel = "Included Credit",
  creditValue = "$18.08 / $20",
  onDemandLabel = "On-Demand Charges",
  onDemandValue = "$0",
  progress = 90,
  metrics = [
    { label: "Requests", value: "$210.84" },
    { label: "Active CPU", value: "$21.95" },
    { label: "Events", value: "$12.40" },
    { label: "Storage Usage", value: "$4.10" },
    { label: "Bandwidth", value: "$0.00" },
  ],
  statusIcon: StatusIcon = TerminalIcon,
  stats = [
    { label: "Environment", value: "Production" },
    { label: "Region", value: "us-east-1" },
    { label: "Version", value: "v2.4.0" },
    { label: "Status", value: "Healthy" },
  ],
  icon: Icon = PackageIcon,
  linkLabel = "View Orders",
  className,
}: RichCardProps) {
  const [expanded, setExpanded] = React.useState(false)

  if (appearance === "media-bottom") {
    return (
      <Card className={cn("mx-auto w-full max-w-sm gap-0 pb-0", className)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="mt-(--card-spacing) aspect-[4/3] w-full object-cover"
        />
      </Card>
    )
  }

  if (appearance === "media-top") {
    return (
      <Card className={cn("mx-auto w-full max-w-sm gap-0 pt-0", className)}>
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="aspect-video w-full object-cover"
        />
        <CardHeader className="pt-(--card-spacing)">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="justify-start gap-2 border-0 bg-transparent">
          <Button size="sm">{primaryAction}</Button>
          <Button size="sm" variant="outline">
            {secondaryAction}
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (appearance === "horizontal") {
    return (
      <Card
        className={cn(
          "mx-auto w-full max-w-xl flex-row gap-0 overflow-hidden p-0 py-0 *:[img:first-child]:rounded-none",
          className
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="aspect-square w-2/5 max-w-48 rounded-l-xl object-cover sm:w-48"
        />
        <div className="flex flex-1 flex-col justify-center gap-3 p-(--card-spacing)">
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div>
            <Button size="sm">{primaryAction}</Button>
          </div>
        </div>
      </Card>
    )
  }

  if (appearance === "social") {
    return (
      <Card className={cn("mx-auto w-full max-w-md", className)}>
        <CardHeader className="flex-row items-center gap-3 space-y-0">
          <Avatar size="default">
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <CardTitle className="truncate">{author}</CardTitle>
              {verified ? (
                <BadgeCheckIcon className="size-4 shrink-0 text-foreground" />
              ) : null}
            </div>
            <CardDescription>{handle}</CardDescription>
          </div>
          <CardAction className="static flex items-center gap-1 self-center">
            <Button variant="outline" size="sm" className="rounded-full">
              <UserPlusIcon data-icon="inline-start" />
              Follow
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="More">
              <MoreHorizontalIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-3">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="aspect-video w-full rounded-xl object-cover"
          />
          <p>{caption}</p>
          <p className="text-muted-foreground flex flex-wrap gap-x-2">
            {tags.map((tag) => (
              <span key={tag} className="text-foreground">
                {tag}
              </span>
            ))}
          </p>
        </CardContent>
        <CardFooter className="justify-between gap-2 border-0 bg-transparent text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <HeartIcon className="size-4 fill-foreground text-foreground" />
            {likes}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircleIcon className="size-4" />
            {comments}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Repeat2Icon className="size-4" />
            {reposts}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <SendIcon className="size-4" />
            {shares}
          </span>
        </CardFooter>
      </Card>
    )
  }

  if (appearance === "testimonial") {
    const body = highlight
      ? description.split(highlight).reduce<React.ReactNode[]>((acc, part, i, arr) => {
          acc.push(part)
          if (i < arr.length - 1) {
            acc.push(
              <mark
                key={i}
                className="rounded-sm bg-muted px-1 text-foreground"
              >
                {highlight}
              </mark>
            )
          }
          return acc
        }, [])
      : description

    return (
      <Card className={cn("mx-auto w-full max-w-md", className)}>
        <CardContent>
          <p className="text-base leading-relaxed">{body}</p>
        </CardContent>
        <CardFooter className="justify-between gap-3 border-0 bg-transparent">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarImage src={avatarSrc} alt={author} />
              <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-muted-foreground text-xs">{handle}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5" aria-label={`${rating} of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  "size-4",
                  i < rating
                    ? "fill-foreground text-foreground"
                    : "text-muted-foreground/40"
                )}
              />
            ))}
          </div>
        </CardFooter>
      </Card>
    )
  }

  if (appearance === "promo") {
    const isCenter = align === "center"
    return (
      <Card className={cn("mx-auto w-full max-w-sm gap-0 pt-0", className)}>
        <div className="p-(--card-spacing) pb-0">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="aspect-video w-full rounded-xl object-cover grayscale"
          />
        </div>
        <CardContent
          className={cn(
            "flex flex-col gap-4 pt-(--card-spacing)",
            isCenter && "items-center text-center"
          )}
        >
          <div
            className={cn(
              "flex w-full items-center gap-2",
              isCenter ? "justify-center" : "justify-between"
            )}
          >
            <Badge variant="outline" className="gap-1">
              <BellIcon className="size-3" />
              {badge}
            </Badge>
            {featured && !isCenter ? (
              <span className="text-muted-foreground inline-flex items-center gap-1 text-xs font-medium">
                <SparklesIcon className="size-3.5" />
                Featured
              </span>
            ) : null}
          </div>
          <p className={cn("font-medium", isCenter && "max-w-[18rem]")}>
            {description}
          </p>
          <Button
            className={cn("rounded-full", !isCenter && "w-full")}
            size="sm"
          >
            {primaryAction}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (appearance === "overlay") {
    return (
      <Card
        className={cn(
          "group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden p-0 py-0",
          className
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="absolute inset-0 size-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative mt-auto flex h-full flex-col justify-end p-5 text-white">
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-white/80">
            {description}
          </CardDescription>
        </div>
      </Card>
    )
  }

  if (appearance === "overlay-author") {
    return (
      <Card
        className={cn(
          "relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden p-0 py-0",
          className
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="absolute inset-0 size-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        <div className="relative flex h-full flex-col justify-between p-5 text-white">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Avatar size="default" className="ring-2 ring-white/20">
                  <AvatarImage src={avatarSrc} alt={author} />
                  <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
                </Avatar>
                {verified ? (
                  <BadgeCheckIcon className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-foreground text-background" />
                ) : null}
              </div>
              <div>
                <p className="font-semibold">{author}</p>
                <p className="text-sm text-white/70">{handle}</p>
              </div>
            </div>
            <Badge className="bg-background text-foreground hover:bg-background">
              New
            </Badge>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl text-white">{title}</CardTitle>
            <CardDescription className="text-white/80">
              {description}
            </CardDescription>
          </div>
        </div>
      </Card>
    )
  }

  if (appearance === "billing") {
    const visibleMetrics = expanded ? metrics : metrics.slice(0, 2)
    return (
      <div className={cn("relative mx-auto w-full max-w-md pb-4", className)}>
        <Card className="overflow-visible border border-border pb-6 ring-0">
          <div className="flex items-center justify-between gap-3 px-(--card-spacing)">
            <CardTitle>{billingTitle}</CardTitle>
            <Button variant="outline" size="sm">
              Billing
            </Button>
          </div>
          <div className="space-y-4 px-(--card-spacing)">
            <div className="space-y-3 rounded-xl bg-muted/60 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-muted-foreground text-xs">{creditLabel}</p>
                  <p className="text-lg font-semibold">{creditValue}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-xs">{onDemandLabel}</p>
                  <p className="text-lg font-semibold">{onDemandValue}</p>
                </div>
              </div>
              <Progress value={progress} className="w-full gap-0" />
            </div>
            <div className="relative">
              <ul className="space-y-2">
                {visibleMetrics.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}</span>
                  </li>
                ))}
              </ul>
              {!expanded ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-card/60 to-transparent"
                />
              ) : null}
            </div>
          </div>
        </Card>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2 rounded-full border bg-card shadow-xs"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Button>
      </div>
    )
  }

  if (appearance === "status") {
    return (
      <Card
        className={cn(
          "relative mx-auto w-full max-w-sm overflow-hidden border border-border ring-0",
          className
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,color-mix(in_oklab,var(--foreground)_16%,transparent),transparent_70%)]"
        />
        <div className="relative flex flex-col items-center gap-1 px-(--card-spacing) text-center">
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg border bg-card/80">
            <StatusIcon className="size-5" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="relative px-(--card-spacing)">
          <ul className="w-full space-y-1">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5",
                  index % 2 === 0 && "bg-muted/60"
                )}
              >
                <span className="font-semibold">{stat.label}</span>
                <span className="text-muted-foreground shrink-0">
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    )
  }

  if (appearance === "feature") {
    return (
      <Card className={cn("mx-auto w-full max-w-sm", className)}>
        <CardHeader>
          <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-foreground text-background">
            <Icon className="size-4" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="border-0 bg-transparent pt-0">
          <Button variant="link" className="h-auto px-0">
            {linkLabel}
            <ChevronRightIcon data-icon="inline-end" />
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (appearance === "docs") {
    return (
      <Card
        className={cn(
          "mx-auto w-full max-w-sm gap-0 overflow-visible border border-border py-0 ring-0",
          className
        )}
      >
        <div className="flex items-center gap-2 px-(--card-spacing) py-(--card-spacing)">
          <BookOpenIcon className="size-4 shrink-0" />
          <CardTitle>{title}</CardTitle>
        </div>
        <div className="h-px w-full bg-border" />
        <div className="space-y-4 px-(--card-spacing) py-(--card-spacing)">
          <CardDescription className="text-foreground/80">
            {description}
          </CardDescription>
          <Button variant="link" className="h-auto px-0">
            <LinkIcon data-icon="inline-start" />
            {linkLabel}
          </Button>
        </div>
      </Card>
    )
  }

  return null
}

export { RichCard }
