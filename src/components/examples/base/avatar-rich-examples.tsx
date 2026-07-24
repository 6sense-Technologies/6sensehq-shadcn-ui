"use client"

import {
  RichAvatar,
  RichAvatarGroup,
  type AvatarBadgePosition,
} from "@/components/rich-avatar"

const sampleSrc = "https://github.com/shadcn.png"
const people = [
  { src: "https://github.com/shadcn.png", fallback: "CN", alt: "@shadcn" },
  {
    src: "https://github.com/maxleiter.png",
    fallback: "ML",
    alt: "@maxleiter",
  },
  {
    src: "https://github.com/evilrabbit.png",
    fallback: "ER",
    alt: "@evilrabbit",
  },
  { src: "https://avatar.vercel.sh/lee", fallback: "LE", alt: "Lee" },
]

export function AvatarFallbacksExample() {
  return (
    <div className="flex items-center gap-4">
      <RichAvatar fallback="AJ" size="lg" />
      <RichAvatar fallbackIcon size="lg" />
    </div>
  )
}

export function AvatarRingExample() {
  return <RichAvatar src={sampleSrc} alt="@shadcn" fallback="CN" ring size="xl" />
}

export function AvatarDualBadgeExample() {
  return (
    <RichAvatar
      src={sampleSrc}
      alt="@shadcn"
      fallback="CN"
      size="lg"
      status
      count={3}
    />
  )
}

export function AvatarGroupPillExample() {
  return <RichAvatarGroup items={people} count="+3" pill />
}

export function AvatarRoundedExample() {
  return (
    <RichAvatar
      src="https://avatar.vercel.sh/rocky"
      alt="Rocky"
      fallback="RO"
      shape="rounded"
      size="lg"
    />
  )
}

export function AvatarVerifiedRingExample() {
  return (
    <RichAvatar
      src="https://avatar.vercel.sh/rocky"
      alt="Rocky"
      fallback="RO"
      ring
      verified
      badgePosition="bottom-right"
      size="xl"
    />
  )
}

export function AvatarRoundedCountExample() {
  return (
    <RichAvatar
      src="https://avatar.vercel.sh/rocky"
      alt="Rocky"
      fallback="RO"
      shape="rounded"
      count={8}
      badgePosition="top-right"
      size="lg"
    />
  )
}

export function AvatarVerifiedExample() {
  return (
    <RichAvatar
      src="https://avatar.vercel.sh/rocky"
      alt="Rocky"
      fallback="RO"
      verified
      badgePosition="top-right"
      size="lg"
    />
  )
}

const positions: AvatarBadgePosition[] = [
  "bottom-left",
  "top-left",
  "bottom-right",
  "top-right",
]

export function AvatarBadgePositionsExample() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {positions.map((position) => (
        <RichAvatar
          key={position}
          src={sampleSrc}
          alt={position}
          fallback="CN"
          verified
          badgePosition={position}
          size="lg"
        />
      ))}
    </div>
  )
}

export function AvatarGroupAddExample() {
  return (
    <RichAvatarGroup
      items={people.slice(0, 3)}
      count="+5"
      onAdd={() => {}}
    />
  )
}
