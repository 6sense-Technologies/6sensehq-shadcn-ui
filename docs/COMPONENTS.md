# Component guidelines

When-to-use guidance for every base component in this design system.

**Audience:** humans browsing the gallery and AI agents choosing components.

**Source of truth:** `src/lib/component-nav.ts` (`whenToUse`). Keep this file in sync when you add or rename a component.

Regenerate this file with: `node scripts/generate-guidelines.mjs`

## How to use these guidelines

- Prefer an existing component over a one-off custom control.
- Match the `whenToUse` line to the user job; if two components fit, prefer the simpler one.
- Gallery pages under `/components/base/*` show the same line under each component title.

## Components

### Accordion

- **Slug:** `accordion`
- **Gallery:** /components/base/accordion
- **When to use:** Use when grouping related content into expandable sections to reduce vertical space.

### Alert

- **Slug:** `alert`
- **Gallery:** /components/base/alert
- **When to use:** Use for persistent, in-page notices that do not require an immediate decision.

### Alert Dialog

- **Slug:** `alert-dialog`
- **Gallery:** /components/base/alert-dialog
- **When to use:** Use when the user must confirm or cancel a destructive or irreversible action.

### Aspect Ratio

- **Slug:** `aspect-ratio`
- **Gallery:** /components/base/aspect-ratio
- **When to use:** Use to lock media or embeds to a fixed width-to-height ratio across breakpoints.

### Attachment

- **Slug:** `attachment`
- **Gallery:** /components/base/attachment
- **When to use:** Use to show file or image attachments with metadata, upload state, and actions in chats or forms.

### Avatar

- **Slug:** `avatar`
- **Gallery:** /components/base/avatar
- **When to use:** Use to represent a person or entity with an image, initials, or fallback.

### Badge

- **Slug:** `badge`
- **Gallery:** /components/base/badge
- **When to use:** Use for compact status, counts, or category labels next to text or controls.

### Breadcrumb

- **Slug:** `breadcrumb`
- **Gallery:** /components/base/breadcrumb
- **When to use:** Use to show hierarchy and let users navigate back through nested pages.

### Bubble

- **Slug:** `bubble`
- **Gallery:** /components/base/bubble
- **When to use:** Use for chat-style message bubbles with alignment, reactions, or collapsible content.

### Button

- **Slug:** `button`
- **Gallery:** /components/base/button
- **When to use:** Use for the primary way users trigger actions; prefer clear variants over custom styles.

### Button Group

- **Slug:** `button-group`
- **Gallery:** /components/base/button-group
- **When to use:** Use when several related actions belong together as one visual control set.

### Calendar

- **Slug:** `calendar`
- **Gallery:** /components/base/calendar
- **When to use:** Use when users need to pick a date or range from a month grid.

### Card

- **Slug:** `card`
- **Gallery:** /components/base/card
- **When to use:** Use to group related content and actions into a single bordered surface.

### Carousel

- **Slug:** `carousel`
- **Gallery:** /components/base/carousel
- **When to use:** Use for a horizontal set of slides when space is limited but multiple items must be browsable.

### Chart

- **Slug:** `chart`
- **Gallery:** /components/base/chart
- **When to use:** Use to visualize quantitative data with themed chart primitives.

### Checkbox

- **Slug:** `checkbox`
- **Gallery:** /components/base/checkbox
- **When to use:** Use for binary or multi-select choices that can be toggled independently.

### Collapsible

- **Slug:** `collapsible`
- **Gallery:** /components/base/collapsible
- **When to use:** Use for a single expand/collapse region when a full accordion set is unnecessary.

### Combobox

- **Slug:** `combobox`
- **Gallery:** /components/base/combobox
- **When to use:** Use when users need a searchable select with optional custom or filtered options.

### Command

- **Slug:** `command`
- **Gallery:** /components/base/command
- **When to use:** Use for command palettes, keyboard-first search, and action menus.

### Context Menu

- **Slug:** `context-menu`
- **Gallery:** /components/base/context-menu
- **When to use:** Use for right-click or long-press actions scoped to a specific element.

### Data Table

- **Slug:** `data-table`
- **Gallery:** /components/base/data-table
- **When to use:** Use for sortable, filterable, paginated tabular data beyond a simple static table.

### Date Picker

- **Slug:** `date-picker`
- **Gallery:** /components/base/date-picker
- **When to use:** Use when a form needs a compact date (or range) input backed by a calendar popover.

### Dialog

- **Slug:** `dialog`
- **Gallery:** /components/base/dialog
- **When to use:** Use for focused tasks that interrupt the page without navigating away.

### Direction

- **Slug:** `direction`
- **Gallery:** /components/base/direction
- **When to use:** Use to demonstrate or force LTR/RTL layout direction for localized UIs.

### Drawer

- **Slug:** `drawer`
- **Gallery:** /components/base/drawer
- **When to use:** Use for mobile-friendly panels that slide in for filters, details, or secondary flows.

### Dropdown Menu

- **Slug:** `dropdown-menu`
- **Gallery:** /components/base/dropdown-menu
- **When to use:** Use for a compact list of actions triggered from a button or icon.

### Empty

- **Slug:** `empty`
- **Gallery:** /components/base/empty
- **When to use:** Use when a list, table, or view has no data and you need a clear next action.

### Field

- **Slug:** `field`
- **Gallery:** /components/base/field
- **When to use:** Use to compose labeled form controls with help text and validation messaging.

### Hover Card

- **Slug:** `hover-card`
- **Gallery:** /components/base/hover-card
- **When to use:** Use for rich previews on hover when a full dialog would be too heavy.

### Input

- **Slug:** `input`
- **Gallery:** /components/base/input
- **When to use:** Use for single-line text, email, password, and similar form values.

### Input Group

- **Slug:** `input-group`
- **Gallery:** /components/base/input-group
- **When to use:** Use when an input needs affixed icons, buttons, or addons in one control.

### Input OTP

- **Slug:** `input-otp`
- **Gallery:** /components/base/input-otp
- **When to use:** Use for one-time codes, verification PINs, and similar segmented numeric entry.

### Item

- **Slug:** `item`
- **Gallery:** /components/base/item
- **When to use:** Use for list rows with media, title, description, and trailing actions.

### Kbd

- **Slug:** `kbd`
- **Gallery:** /components/base/kbd
- **When to use:** Use to display keyboard shortcuts in docs, tooltips, or command UIs.

### Label

- **Slug:** `label`
- **Gallery:** /components/base/label
- **When to use:** Use to associate accessible text with a form control.

### Marker

- **Slug:** `marker`
- **Gallery:** /components/base/marker
- **When to use:** Use for system notes, status lines, or labeled separators inside conversations.

### Menubar

- **Slug:** `menubar`
- **Gallery:** /components/base/menubar
- **When to use:** Use for desktop-style top menus with nested items and keyboard navigation.

### Message

- **Slug:** `message`
- **Gallery:** /components/base/message
- **When to use:** Use to render a full chat message with avatar, header, body, and optional actions.

### Message Scroller

- **Slug:** `message-scroller`
- **Gallery:** /components/base/message-scroller
- **When to use:** Use for scrollable conversation threads that stick to the latest messages.

### Native Select

- **Slug:** `native-select`
- **Gallery:** /components/base/native-select
- **When to use:** Use when a lightweight native `<select>` is enough and a custom Select is unnecessary.

### Navigation Menu

- **Slug:** `navigation-menu`
- **Gallery:** /components/base/navigation-menu
- **When to use:** Use for site or app top navigation with optional mega-menu panels.

### Pagination

- **Slug:** `pagination`
- **Gallery:** /components/base/pagination
- **When to use:** Use to move between pages of results in tables, lists, or search.

### Popover

- **Slug:** `popover`
- **Gallery:** /components/base/popover
- **When to use:** Use for small interactive panels anchored to a trigger without blocking the page.

### Progress

- **Slug:** `progress`
- **Gallery:** /components/base/progress
- **When to use:** Use to show determinate completion of a task or upload.

### Radio Group

- **Slug:** `radio-group`
- **Gallery:** /components/base/radio-group
- **When to use:** Use when the user must pick exactly one option from a short visible list.

### Resizable

- **Slug:** `resizable`
- **Gallery:** /components/base/resizable
- **When to use:** Use for split panes where users adjust panel size (editors, inspectors, sidebars).

### Scroll Area

- **Slug:** `scroll-area`
- **Gallery:** /components/base/scroll-area
- **When to use:** Use for a contained region with custom scrollbars instead of page-level overflow.

### Select

- **Slug:** `select`
- **Gallery:** /components/base/select
- **When to use:** Use for choosing one value from a styled list when search is not required.

### Separator

- **Slug:** `separator`
- **Gallery:** /components/base/separator
- **When to use:** Use to visually divide sections of content or menu items.

### Sheet

- **Slug:** `sheet`
- **Gallery:** /components/base/sheet
- **When to use:** Use for edge-anchored panels (filters, details, mobile nav) over the current page.

### Sidebar

- **Slug:** `sidebar`
- **Gallery:** /components/base/sidebar
- **When to use:** Use as the primary app navigation shell with collapsible sections and insets.

### Skeleton

- **Slug:** `skeleton`
- **Gallery:** /components/base/skeleton
- **When to use:** Use as a placeholder layout while content is loading.

### Slider

- **Slug:** `slider`
- **Gallery:** /components/base/slider
- **When to use:** Use for selecting a numeric value or range along a continuum.

### Spinner

- **Slug:** `spinner`
- **Gallery:** /components/base/spinner
- **When to use:** Use for indeterminate loading on buttons, pages, or inline waits.

### Stepper

- **Slug:** `stepper`
- **Gallery:** /components/base/stepper
- **When to use:** Use to guide users through a multi-step flow with clear progress and navigation.

### Switch

- **Slug:** `switch`
- **Gallery:** /components/base/switch
- **When to use:** Use for immediate on/off settings that take effect without a submit action.

### Table

- **Slug:** `table`
- **Gallery:** /components/base/table
- **When to use:** Use for simple static or lightly interactive tabular layouts.

### Tabs

- **Slug:** `tabs`
- **Gallery:** /components/base/tabs
- **When to use:** Use to switch between related views in the same context without leaving the page.

### Textarea

- **Slug:** `textarea`
- **Gallery:** /components/base/textarea
- **When to use:** Use for multi-line text such as descriptions, notes, or messages.

### Toast

- **Slug:** `toast`
- **Gallery:** /components/base/toast
- **When to use:** Use for brief, non-blocking feedback after an action succeeds or fails.

### Toggle

- **Slug:** `toggle`
- **Gallery:** /components/base/toggle
- **When to use:** Use for a pressed/unpressed control such as a toolbar formatting option.

### Toggle Group

- **Slug:** `toggle-group`
- **Gallery:** /components/base/toggle-group
- **When to use:** Use when several toggles form one exclusive or multi-select control group.

### Tooltip

- **Slug:** `tooltip`
- **Gallery:** /components/base/tooltip
- **When to use:** Use for short explanatory text on hover or focus of an icon or control.

### Typography

- **Slug:** `typography`
- **Gallery:** /components/base/typography
- **When to use:** Use these text styles for consistent headings, body, lists, and inline emphasis.

