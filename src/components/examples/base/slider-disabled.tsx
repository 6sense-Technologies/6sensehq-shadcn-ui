import { Slider } from "@/components/ui/slider"

export function SliderDisabledExample() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="mx-auto w-full max-w-xs"
    />
  )
}
