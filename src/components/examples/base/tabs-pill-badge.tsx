import { PillTabs } from "@/components/pill-tabs"

const items = [
  { value: "explore", label: "Explore", count: 8 },
  { value: "favorites", label: "Favorites", count: 3 },
  { value: "surprise", label: "Surprise", count: 6 },
]

export function TabsPillBadgeExample() {
  return (
    <PillTabs
      items={items}
      defaultValue="explore"
      variant="default"
      shape="pill"
    />
  )
}
