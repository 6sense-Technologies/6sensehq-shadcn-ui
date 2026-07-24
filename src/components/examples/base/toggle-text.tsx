import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleTextExample() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
