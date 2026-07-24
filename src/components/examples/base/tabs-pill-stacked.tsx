"use client"

import { BookOpenIcon, GiftIcon, HeartIcon } from "lucide-react"

import { PillTabs } from "@/components/pill-tabs"

const items = [
  { value: "explore", label: "Explore", icon: BookOpenIcon },
  { value: "favorites", label: "Favorites", icon: HeartIcon },
  { value: "surprise", label: "Surprise Me", icon: GiftIcon },
]

export function TabsPillStackedExample() {
  return (
    <PillTabs
      items={items}
      defaultValue="explore"
      shape="rounded"
      layout="stacked"
    />
  )
}
