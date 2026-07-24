import { notFound } from "next/navigation"

const sidebars = {
  "01": () => import("@/components/examples/base/sidebar-01/page"),
  "02": () => import("@/components/examples/base/sidebar-02/page"),
  "03": () => import("@/components/examples/base/sidebar-03/page"),
  "04": () => import("@/components/examples/base/sidebar-04/page"),
  "05": () => import("@/components/examples/base/sidebar-05/page"),
  "06": () => import("@/components/examples/base/sidebar-06/page"),
  "07": () => import("@/components/examples/base/sidebar-07/page"),
  "08": () => import("@/components/examples/base/sidebar-08/page"),
  "09": () => import("@/components/examples/base/sidebar-09/page"),
  "10": () => import("@/components/examples/base/sidebar-10/page"),
  "11": () => import("@/components/examples/base/sidebar-11/page"),
  "12": () => import("@/components/examples/base/sidebar-12/page"),
  "13": () => import("@/components/examples/base/sidebar-13/page"),
  "14": () => import("@/components/examples/base/sidebar-14/page"),
  "15": () => import("@/components/examples/base/sidebar-15/page"),
  "16": () => import("@/components/examples/base/sidebar-16/page"),
  "academy": () => import("@/components/examples/base/sidebar-academy/page"),
  "analytics": () => import("@/components/examples/base/sidebar-analytics/page"),
  "social": () => import("@/components/examples/base/sidebar-social/page"),
  "food-point": () => import("@/components/examples/base/sidebar-food-point/page"),
  "portfolio": () => import("@/components/examples/base/sidebar-portfolio/page"),
  "travel": () => import("@/components/examples/base/sidebar-travel/page"),
  "payments": () => import("@/components/examples/base/sidebar-payments/page"),
} as const

type SidebarSlug = keyof typeof sidebars

export function generateStaticParams() {
  return Object.keys(sidebars).map((slug) => ({ slug }))
}

export default async function SidebarViewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loader = sidebars[slug as SidebarSlug]

  if (!loader) {
    notFound()
  }

  const mod = await loader()
  const Example = mod.default

  return <Example />
}
