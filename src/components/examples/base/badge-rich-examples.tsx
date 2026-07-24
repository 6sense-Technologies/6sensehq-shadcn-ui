import { RichBadge } from "@/components/rich-badge"

export function BadgeGradientExample() {
  return <RichBadge appearance="gradient">Gradient</RichBadge>
}

export function BadgeGradientOutlineExample() {
  return (
    <RichBadge appearance="gradient-outline">Gradient Outline</RichBadge>
  )
}

export function BadgeAvatarExample() {
  return (
    <RichBadge
      appearance="avatar"
      avatarSrc="https://github.com/shadcn.png"
      avatarAlt="@shadcn"
      avatarFallback="CN"
    >
      Avatar
    </RichBadge>
  )
}
