import { PillTabs } from "@/components/pill-tabs"

const items = [
  { value: "explore", label: "Explore" },
  { value: "favorites", label: "Favorites" },
  { value: "surprise", label: "Surprise Me" },
]

export function TabsUnderlineExample() {
  return (
    <PillTabs
      items={items}
      defaultValue="explore"
      variant="underline"
      className="w-full max-w-md"
    />
  )
}
