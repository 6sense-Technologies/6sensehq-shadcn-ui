"use client"

import {
  CircleHelpIcon,
  HeadsetIcon,
  LockIcon,
  PackageIcon,
  RotateCcwIcon,
  SettingsIcon,
} from "lucide-react"

import {
  RichAccordion,
  type RichAccordionItem,
} from "@/components/rich-accordion"

const faqIcons: RichAccordionItem[] = [
  {
    value: "track",
    title: "How do I track my order?",
    icon: PackageIcon,
    content:
      "You can track your order by logging into your account and visiting the Orders section. You'll receive tracking information via email once your order ships.",
  },
  {
    value: "returns",
    title: "What is your return policy?",
    icon: RotateCcwIcon,
    content:
      "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.",
  },
  {
    value: "support",
    title: "How can I contact customer support?",
    icon: HeadsetIcon,
    content:
      "Reach us via email, live chat, or phone. We typically respond within 24 hours on business days.",
  },
]

const faqMeta: RichAccordionItem[] = [
  {
    value: "track",
    title: "How do I track my order?",
    subtitle: "Shipping & Delivery",
    icon: PackageIcon,
    content:
      'You can track your order by logging into your account and visiting the "Orders" section. You\'ll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.',
  },
  {
    value: "returns",
    title: "What is your return policy?",
    subtitle: "Returns & Refunds",
    icon: RotateCcwIcon,
    content:
      "We offer a 30-day return policy for most items. Products must be unused and in their original packaging.",
  },
  {
    value: "support",
    title: "How can I contact customer support?",
    subtitle: "Help & Support",
    icon: HeadsetIcon,
    content:
      "Reach us via email, live chat, or phone. We typically respond within 24 hours on business days.",
  },
]

const faqSimple: RichAccordionItem[] = [
  {
    value: "track",
    title: "How do I track my order?",
    content:
      'You can track your order by logging into your account and visiting the "Orders" section. You\'ll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.',
  },
  {
    value: "returns",
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most items. Products must be unused and in their original packaging.",
  },
  {
    value: "support",
    title: "How can I contact customer support?",
    content:
      "Reach us via email, live chat, or phone. We typically respond within 24 hours on business days.",
  },
]

const settingsItems: RichAccordionItem[] = [
  {
    value: "account",
    title: "Account Settings",
    icon: SettingsIcon,
    badge: "New",
    badgeVariant: "success",
    content:
      "Manage your account preferences, security settings, and personal information. You can also configure two-factor authentication here.",
  },
  {
    value: "privacy",
    title: "Privacy & Security",
    icon: LockIcon,
    content:
      "Control who can see your profile, manage connected apps, and review recent security activity.",
  },
  {
    value: "help",
    title: "Help & Support",
    icon: CircleHelpIcon,
    content:
      "Browse documentation, contact support, or join the community forum for help.",
  },
]

const lockedItems: RichAccordionItem[] = [
  {
    value: "history",
    title: "Can I access my account history?",
    content:
      "Yes, you can view your complete account history including all transactions, plan changes, and support tickets in the Account History section of your dashboard.",
  },
  {
    value: "premium",
    title: "Premium feature information (Locked)",
    disabled: true,
    content: "Upgrade your plan to access this content.",
  },
  {
    value: "email",
    title: "How do I update my email address?",
    content:
      "You can update your email address in your account settings. You'll receive a verification email at your new address to confirm the change.",
  },
]

const teamItems: RichAccordionItem[] = [
  {
    value: "alex",
    title: "Alex Johnson",
    badge: "Admin",
    badgeVariant: "success",
    avatarSrc: "https://avatar.vercel.sh/alex",
    avatarFallback: "AJ",
    content:
      "Alex has full administrative access to the platform, including billing management, user provisioning, and security configurations.",
  },
  {
    value: "sarah",
    title: "Sarah Chen",
    badge: "Viewer",
    badgeVariant: "secondary",
    avatarSrc: "https://avatar.vercel.sh/sarah",
    avatarFallback: "SC",
    content:
      "Sarah can view dashboards and reports but cannot modify settings or invite new users.",
  },
  {
    value: "michael",
    title: "Michael Rodriguez",
    badge: "Editor",
    badgeVariant: "secondary",
    avatarSrc: "https://avatar.vercel.sh/michael",
    avatarFallback: "MR",
    content:
      "Michael can create and edit content across workspaces, and manage collaborators on projects they own.",
  },
]

export function AccordionIconsExample() {
  return (
    <RichAccordion
      items={faqIcons}
      variant="icons"
      defaultValue={["returns"]}
      className="max-w-lg"
    />
  )
}

export function AccordionIconMetaExample() {
  return (
    <RichAccordion
      items={faqMeta}
      variant="icon-meta"
      defaultValue={["track"]}
      className="max-w-lg"
    />
  )
}

export function AccordionSoftExample() {
  return (
    <RichAccordion
      items={faqSimple}
      variant="soft"
      defaultValue={["track"]}
      className="max-w-lg"
    />
  )
}

export function AccordionSeparatedCardsExample() {
  return (
    <RichAccordion
      items={faqSimple}
      variant="cards"
      defaultValue={["track"]}
      className="max-w-lg"
    />
  )
}

export function AccordionMediaCardsExample() {
  return (
    <RichAccordion
      items={settingsItems}
      variant="media-cards"
      defaultValue={["account"]}
      className="max-w-lg"
    />
  )
}

export function AccordionBoxedExample() {
  return (
    <RichAccordion
      items={lockedItems}
      variant="boxed"
      defaultValue={["history"]}
      className="max-w-lg"
    />
  )
}

export function AccordionMediaExample() {
  return (
    <RichAccordion
      items={settingsItems}
      variant="media"
      defaultValue={["account"]}
      className="max-w-lg"
    />
  )
}

export function AccordionAvatarExample() {
  return (
    <RichAccordion
      items={teamItems}
      variant="avatar"
      defaultValue={["alex"]}
      className="max-w-lg"
    />
  )
}
