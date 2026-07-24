"use client"

import {
  ChartNoAxesColumnIcon,
  CodeXmlIcon,
  PenToolIcon,
  UsersIcon,
} from "lucide-react"

import { PillTabs } from "@/components/pill-tabs"

const items = [
  { value: "designers", label: "Designers", icon: PenToolIcon },
  { value: "developers", label: "Developers", icon: CodeXmlIcon },
  { value: "managers", label: "Managers", icon: ChartNoAxesColumnIcon },
  { value: "teams", label: "Teams", icon: UsersIcon },
]

export function TabsPillExample() {
  return <PillTabs items={items} defaultValue="designers" shape="pill" layout="inline" />
}
