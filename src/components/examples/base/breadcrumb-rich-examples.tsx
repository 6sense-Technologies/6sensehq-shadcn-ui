import {
  RichBreadcrumb,
  homeIconBoxItem,
  homeIconItem,
  homeLabelItem,
} from "@/components/rich-breadcrumb"

export function BreadcrumbPillExample() {
  return (
    <RichBreadcrumb
      container="pill"
      items={[
        homeLabelItem(),
        { label: "Products", href: "#" },
        { label: "Checkout" },
      ]}
    />
  )
}

export function BreadcrumbIconBoxExample() {
  return (
    <RichBreadcrumb
      items={[
        homeIconBoxItem(),
        { label: "Help Center", href: "#" },
        { label: "Getting Started" },
      ]}
    />
  )
}

export function BreadcrumbBorderedExample() {
  return (
    <RichBreadcrumb
      container="bordered"
      items={[
        homeIconItem(),
        { label: "Documents", href: "#" },
        { label: "Add Document" },
      ]}
    />
  )
}
