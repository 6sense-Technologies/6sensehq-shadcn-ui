export type ComponentNavItem = {
  title: string
  href: string
  slug: string
  /** When to choose this component — for humans in the gallery and for AI agents. */
  whenToUse: string
}

export const componentNav: ComponentNavItem[] = [
  {
    title: "Accordion",
    href: "/components/base/accordion",
    slug: "accordion",
    whenToUse:
      "Use when grouping related content into expandable sections to reduce vertical space.",
  },
  {
    title: "Alert",
    href: "/components/base/alert",
    slug: "alert",
    whenToUse:
      "Use for persistent, in-page notices that do not require an immediate decision.",
  },
  {
    title: "Alert Dialog",
    href: "/components/base/alert-dialog",
    slug: "alert-dialog",
    whenToUse:
      "Use when the user must confirm or cancel a destructive or irreversible action.",
  },
  {
    title: "Aspect Ratio",
    href: "/components/base/aspect-ratio",
    slug: "aspect-ratio",
    whenToUse:
      "Use to lock media or embeds to a fixed width-to-height ratio across breakpoints.",
  },
  {
    title: "Attachment",
    href: "/components/base/attachment",
    slug: "attachment",
    whenToUse:
      "Use to show file or image attachments with metadata, upload state, and actions in chats or forms.",
  },
  {
    title: "Avatar",
    href: "/components/base/avatar",
    slug: "avatar",
    whenToUse:
      "Use to represent a person or entity with an image, initials, or fallback.",
  },
  {
    title: "Badge",
    href: "/components/base/badge",
    slug: "badge",
    whenToUse:
      "Use for compact status, counts, or category labels next to text or controls.",
  },
  {
    title: "Breadcrumb",
    href: "/components/base/breadcrumb",
    slug: "breadcrumb",
    whenToUse:
      "Use to show hierarchy and let users navigate back through nested pages.",
  },
  {
    title: "Bubble",
    href: "/components/base/bubble",
    slug: "bubble",
    whenToUse:
      "Use for chat-style message bubbles with alignment, reactions, or collapsible content.",
  },
  {
    title: "Button",
    href: "/components/base/button",
    slug: "button",
    whenToUse:
      "Use for the primary way users trigger actions; prefer clear variants over custom styles.",
  },
  {
    title: "Button Group",
    href: "/components/base/button-group",
    slug: "button-group",
    whenToUse:
      "Use when several related actions belong together as one visual control set.",
  },
  {
    title: "Calendar",
    href: "/components/base/calendar",
    slug: "calendar",
    whenToUse:
      "Use when users need to pick a date or range from a month grid.",
  },
  {
    title: "Card",
    href: "/components/base/card",
    slug: "card",
    whenToUse:
      "Use to group related content and actions into a single bordered surface.",
  },
  {
    title: "Carousel",
    href: "/components/base/carousel",
    slug: "carousel",
    whenToUse:
      "Use for a horizontal set of slides when space is limited but multiple items must be browsable.",
  },
  {
    title: "Chart",
    href: "/components/base/chart",
    slug: "chart",
    whenToUse:
      "Use to visualize quantitative data with themed chart primitives.",
  },
  {
    title: "Checkbox",
    href: "/components/base/checkbox",
    slug: "checkbox",
    whenToUse:
      "Use for binary or multi-select choices that can be toggled independently.",
  },
  {
    title: "Collapsible",
    href: "/components/base/collapsible",
    slug: "collapsible",
    whenToUse:
      "Use for a single expand/collapse region when a full accordion set is unnecessary.",
  },
  {
    title: "Combobox",
    href: "/components/base/combobox",
    slug: "combobox",
    whenToUse:
      "Use when users need a searchable select with optional custom or filtered options.",
  },
  {
    title: "Command",
    href: "/components/base/command",
    slug: "command",
    whenToUse:
      "Use for command palettes, keyboard-first search, and action menus.",
  },
  {
    title: "Context Menu",
    href: "/components/base/context-menu",
    slug: "context-menu",
    whenToUse:
      "Use for right-click or long-press actions scoped to a specific element.",
  },
  {
    title: "Data Table",
    href: "/components/base/data-table",
    slug: "data-table",
    whenToUse:
      "Use for sortable, filterable, paginated tabular data beyond a simple static table.",
  },
  {
    title: "Date Picker",
    href: "/components/base/date-picker",
    slug: "date-picker",
    whenToUse:
      "Use when a form needs a compact date (or range) input backed by a calendar popover.",
  },
  {
    title: "Dialog",
    href: "/components/base/dialog",
    slug: "dialog",
    whenToUse:
      "Use for focused tasks that interrupt the page without navigating away.",
  },
  {
    title: "Direction",
    href: "/components/base/direction",
    slug: "direction",
    whenToUse:
      "Use to demonstrate or force LTR/RTL layout direction for localized UIs.",
  },
  {
    title: "Drawer",
    href: "/components/base/drawer",
    slug: "drawer",
    whenToUse:
      "Use for mobile-friendly panels that slide in for filters, details, or secondary flows.",
  },
  {
    title: "Dropdown Menu",
    href: "/components/base/dropdown-menu",
    slug: "dropdown-menu",
    whenToUse:
      "Use for a compact list of actions triggered from a button or icon.",
  },
  {
    title: "Empty",
    href: "/components/base/empty",
    slug: "empty",
    whenToUse:
      "Use when a list, table, or view has no data and you need a clear next action.",
  },
  {
    title: "Field",
    href: "/components/base/field",
    slug: "field",
    whenToUse:
      "Use to compose labeled form controls with help text and validation messaging.",
  },
  {
    title: "Hover Card",
    href: "/components/base/hover-card",
    slug: "hover-card",
    whenToUse:
      "Use for rich previews on hover when a full dialog would be too heavy.",
  },
  {
    title: "Input",
    href: "/components/base/input",
    slug: "input",
    whenToUse:
      "Use for single-line text, email, password, and similar form values.",
  },
  {
    title: "Input Group",
    href: "/components/base/input-group",
    slug: "input-group",
    whenToUse:
      "Use when an input needs affixed icons, buttons, or addons in one control.",
  },
  {
    title: "Input OTP",
    href: "/components/base/input-otp",
    slug: "input-otp",
    whenToUse:
      "Use for one-time codes, verification PINs, and similar segmented numeric entry.",
  },
  {
    title: "Item",
    href: "/components/base/item",
    slug: "item",
    whenToUse:
      "Use for list rows with media, title, description, and trailing actions.",
  },
  {
    title: "Kbd",
    href: "/components/base/kbd",
    slug: "kbd",
    whenToUse:
      "Use to display keyboard shortcuts in docs, tooltips, or command UIs.",
  },
  {
    title: "Label",
    href: "/components/base/label",
    slug: "label",
    whenToUse:
      "Use to associate accessible text with a form control.",
  },
  {
    title: "Marker",
    href: "/components/base/marker",
    slug: "marker",
    whenToUse:
      "Use for system notes, status lines, or labeled separators inside conversations.",
  },
  {
    title: "Menubar",
    href: "/components/base/menubar",
    slug: "menubar",
    whenToUse:
      "Use for desktop-style top menus with nested items and keyboard navigation.",
  },
  {
    title: "Message",
    href: "/components/base/message",
    slug: "message",
    whenToUse:
      "Use to render a full chat message with avatar, header, body, and optional actions.",
  },
  {
    title: "Message Scroller",
    href: "/components/base/message-scroller",
    slug: "message-scroller",
    whenToUse:
      "Use for scrollable conversation threads that stick to the latest messages.",
  },
  {
    title: "Native Select",
    href: "/components/base/native-select",
    slug: "native-select",
    whenToUse:
      "Use when a lightweight native `<select>` is enough and a custom Select is unnecessary.",
  },
  {
    title: "Navigation Menu",
    href: "/components/base/navigation-menu",
    slug: "navigation-menu",
    whenToUse:
      "Use for site or app top navigation with optional mega-menu panels.",
  },
  {
    title: "Pagination",
    href: "/components/base/pagination",
    slug: "pagination",
    whenToUse:
      "Use to move between pages of results in tables, lists, or search.",
  },
  {
    title: "Popover",
    href: "/components/base/popover",
    slug: "popover",
    whenToUse:
      "Use for small interactive panels anchored to a trigger without blocking the page.",
  },
  {
    title: "Progress",
    href: "/components/base/progress",
    slug: "progress",
    whenToUse:
      "Use to show determinate completion of a task or upload.",
  },
  {
    title: "Radio Group",
    href: "/components/base/radio-group",
    slug: "radio-group",
    whenToUse:
      "Use when the user must pick exactly one option from a short visible list.",
  },
  {
    title: "Resizable",
    href: "/components/base/resizable",
    slug: "resizable",
    whenToUse:
      "Use for split panes where users adjust panel size (editors, inspectors, sidebars).",
  },
  {
    title: "Scroll Area",
    href: "/components/base/scroll-area",
    slug: "scroll-area",
    whenToUse:
      "Use for a contained region with custom scrollbars instead of page-level overflow.",
  },
  {
    title: "Select",
    href: "/components/base/select",
    slug: "select",
    whenToUse:
      "Use for choosing one value from a styled list when search is not required.",
  },
  {
    title: "Separator",
    href: "/components/base/separator",
    slug: "separator",
    whenToUse:
      "Use to visually divide sections of content or menu items.",
  },
  {
    title: "Sheet",
    href: "/components/base/sheet",
    slug: "sheet",
    whenToUse:
      "Use for edge-anchored panels (filters, details, mobile nav) over the current page.",
  },
  {
    title: "Sidebar",
    href: "/components/base/sidebar",
    slug: "sidebar",
    whenToUse:
      "Use as the primary app navigation shell with collapsible sections and insets.",
  },
  {
    title: "Skeleton",
    href: "/components/base/skeleton",
    slug: "skeleton",
    whenToUse:
      "Use as a placeholder layout while content is loading.",
  },
  {
    title: "Slider",
    href: "/components/base/slider",
    slug: "slider",
    whenToUse:
      "Use for selecting a numeric value or range along a continuum.",
  },
  {
    title: "Spinner",
    href: "/components/base/spinner",
    slug: "spinner",
    whenToUse:
      "Use for indeterminate loading on buttons, pages, or inline waits.",
  },
  {
    title: "Stepper",
    href: "/components/base/stepper",
    slug: "stepper",
    whenToUse:
      "Use to guide users through a multi-step flow with clear progress and navigation.",
  },
  {
    title: "Switch",
    href: "/components/base/switch",
    slug: "switch",
    whenToUse:
      "Use for immediate on/off settings that take effect without a submit action.",
  },
  {
    title: "Table",
    href: "/components/base/table",
    slug: "table",
    whenToUse:
      "Use for simple static or lightly interactive tabular layouts.",
  },
  {
    title: "Tabs",
    href: "/components/base/tabs",
    slug: "tabs",
    whenToUse:
      "Use to switch between related views in the same context without leaving the page.",
  },
  {
    title: "Textarea",
    href: "/components/base/textarea",
    slug: "textarea",
    whenToUse:
      "Use for multi-line text such as descriptions, notes, or messages.",
  },
  {
    title: "Toast",
    href: "/components/base/toast",
    slug: "toast",
    whenToUse:
      "Use for brief, non-blocking feedback after an action succeeds or fails.",
  },
  {
    title: "Toggle",
    href: "/components/base/toggle",
    slug: "toggle",
    whenToUse:
      "Use for a pressed/unpressed control such as a toolbar formatting option.",
  },
  {
    title: "Toggle Group",
    href: "/components/base/toggle-group",
    slug: "toggle-group",
    whenToUse:
      "Use when several toggles form one exclusive or multi-select control group.",
  },
  {
    title: "Tooltip",
    href: "/components/base/tooltip",
    slug: "tooltip",
    whenToUse:
      "Use for short explanatory text on hover or focus of an icon or control.",
  },
  {
    title: "Typography",
    href: "/components/base/typography",
    slug: "typography",
    whenToUse:
      "Use these text styles for consistent headings, body, lists, and inline emphasis.",
  },
]

export function getComponentNavItem(slug: string) {
  return componentNav.find((item) => item.slug === slug)
}
