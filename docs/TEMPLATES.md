# Template guidelines

When-to-use guidance for every template category and variation in this design system.

**Audience:** humans browsing the gallery and AI agents choosing page layouts.

**Source of truth:** `src/lib/template-nav.ts` (`whenToUse`). Keep this file in sync when you add or rename a template.

Regenerate this file with: `node scripts/generate-guidelines.mjs`

## How to use these guidelines

- Start from the category (`templateNav`), then pick the variation that matches content density and product tone.
- Prefer composing an app shell + list/create/chat template over inventing a new page chrome.
- Gallery pages under `/template/*` show the same `When to use` line on each card.

## Categories

### Login

- **Slug:** `login`
- **Gallery:** /template/login
- **When to use:** Use when building sign-in experiences; pick a variation that matches branding density and social-auth needs.

### Registration

- **Slug:** `registration`
- **Gallery:** /template/registration
- **When to use:** Use when building signup or trial flows; choose a layout based on marketing vs. form-first priority.

### App Shells

- **Slug:** `app-shells`
- **Gallery:** /template/app-shells
- **When to use:** Use as the outer chrome for authenticated apps; pick the shell that matches nav density and product tone.

### List Pages

- **Slug:** `list-pages`
- **Gallery:** /template/list-pages
- **When to use:** Use for data-dense admin or ops screens that list, filter, and act on many records.

### Create Pages

- **Slug:** `create-pages`
- **Gallery:** /template/create-pages
- **When to use:** Use when users create a record or resource; pick simple, multi-step, invite, or attachment flows as needed.

### AI Chats

- **Slug:** `ai-chats`
- **Gallery:** /template/ai-chats
- **When to use:** Use for assistant-style products with conversation history, empty greeting, and message threads.


## Login variations

### Login 01

- **Slug:** `login-01`
- **Preview:** /view/login/login-01
- **Description:** A simple login form
- **When to use:** Use for a minimal email/password login with no marketing panel.

### Login 02

- **Slug:** `login-02`
- **Preview:** /view/login/login-02
- **Description:** A two column login page with a cover image
- **When to use:** Use when brand imagery should share the viewport equally with the form.

### Login 03

- **Slug:** `login-03`
- **Preview:** /view/login/login-03
- **Description:** A login page with a muted background color
- **When to use:** Use for a calm, centered card login without a photo cover.

### Login 04

- **Slug:** `login-04`
- **Preview:** /view/login/login-04
- **Description:** A login page with form and image
- **When to use:** Use when you want a form column paired with a supporting image panel.

### Login 05

- **Slug:** `login-05`
- **Preview:** /view/login/login-05
- **Description:** A simple email-only login page
- **When to use:** Use for passwordless or magic-link flows that only collect email.

### Login 06

- **Slug:** `login-06`
- **Preview:** /view/login/login-06
- **Description:** Split card with form and media panel
- **When to use:** Use for a polished split card where media and form sit in one framed unit.

### Login 07

- **Slug:** `login-07`
- **Preview:** /view/login/login-07
- **Description:** Split card with social sign-in first
- **When to use:** Use when social providers should be the primary path, with email secondary.

### Login 08

- **Slug:** `login-08`
- **Preview:** /view/login/login-08
- **Description:** Split card with dark testimonial panel
- **When to use:** Use when social proof or a testimonial should dominate the non-form panel.

### Login 09

- **Slug:** `login-09`
- **Preview:** /view/login/login-09
- **Description:** Media left, form right with social icons
- **When to use:** Use for media-led branding with compact social icon actions beside the form.

### Login 10

- **Slug:** `login-10`
- **Preview:** /view/login/login-10
- **Description:** Black testimonial panel with avatar quote
- **When to use:** Use for high-contrast trust-building login with an attributed customer quote.

### Login 11

- **Slug:** `login-11`
- **Preview:** /view/login/login-11
- **Description:** Centered card with login / create account tabs
- **When to use:** Use when login and signup should share one card via tabs.

### Login 12

- **Slug:** `login-12`
- **Preview:** /view/login/login-12
- **Description:** Facebook-style split login with collage and Meta branding
- **When to use:** Use for social-product style branding with a collage hero and familiar Meta cues.


## Registration variations

### Signup 01

- **Slug:** `signup-01`
- **Preview:** /view/registration/signup-01
- **Description:** A simple signup form
- **When to use:** Use for a minimal create-account form without marketing chrome.

### Signup 02

- **Slug:** `signup-02`
- **Preview:** /view/registration/signup-02
- **Description:** A two column signup page with a cover image
- **When to use:** Use when a cover image should sell the product beside the signup form.

### Signup 03

- **Slug:** `signup-03`
- **Preview:** /view/registration/signup-03
- **Description:** A signup page with a muted background color
- **When to use:** Use for a quiet, centered signup card on a muted canvas.

### Signup 04

- **Slug:** `signup-04`
- **Preview:** /view/registration/signup-04
- **Description:** A signup page with form and image
- **When to use:** Use for a balanced form-and-image registration layout.

### Signup 05

- **Slug:** `signup-05`
- **Preview:** /view/registration/signup-05
- **Description:** A simple signup form with social providers
- **When to use:** Use when offering both email signup and social provider shortcuts.

### Signup 06

- **Slug:** `signup-06`
- **Preview:** /view/registration/signup-06
- **Description:** Free trial marketing panel with registration card
- **When to use:** Use for trial or growth campaigns where benefits copy leads into registration.


## App shell variations

### Automobile

- **Slug:** `automobile`
- **Preview:** /view/app-shell/automobile
- **Description:** Top navigation shell with search, menu, and breadcrumbs
- **When to use:** Use for products that prefer top nav, global search, and breadcrumb context over a left sidebar.

### Academy

- **Slug:** `academy`
- **Preview:** /view/app-shell/academy
- **Description:** Left sidebar with promo card and inset content
- **When to use:** Use as the default learning/admin shell with a left sidebar and inset main content.

### Analytics

- **Slug:** `analytics`
- **Preview:** /view/app-shell/analytics
- **Description:** Floating sidebar with premium upgrade CTA
- **When to use:** Use for analytics-style apps with a floating sidebar and upgrade messaging.

### Social Media

- **Slug:** `social`
- **Preview:** /view/app-shell/social
- **Description:** Profile sidebar with footer breadcrumbs
- **When to use:** Use for profile-centric social products with identity-forward sidebar navigation.

### Food Point

- **Slug:** `food-point`
- **Preview:** /view/app-shell/food-point
- **Description:** Restaurant ops sidebar with today's order card
- **When to use:** Use for ops dashboards that highlight today’s activity in the sidebar.

### Portfolio

- **Slug:** `portfolio`
- **Preview:** /view/app-shell/portfolio
- **Description:** Slim icon-and-label sidebar navigation
- **When to use:** Use for creative or portfolio apps needing a slim labeled icon rail.

### Travel

- **Slug:** `travel`
- **Preview:** /view/app-shell/travel
- **Description:** Icon-only mini sidebar with Book now action
- **When to use:** Use when navigation must stay ultra-compact with a primary CTA in the rail.

### Payments

- **Slug:** `payments`
- **Preview:** /view/app-shell/payments
- **Description:** Stripe-style shell with workspace switcher and collapsible products
- **When to use:** Use for fintech/billing products that need workspace switching and nested product nav.


## List page variations

### Payments

- **Slug:** `payments`
- **Preview:** /view/list/payments
- **Description:** Stripe-style payments table with tabs, filters, and pagination
- **When to use:** Use for transaction/payment lists with status tabs, dense filters, and financial table patterns.

### Users

- **Slug:** `users`
- **Preview:** /view/list/users
- **Description:** Admin users table with stat cards, search, and numbered pagination
- **When to use:** Use for admin user directories that lead with KPI cards and a classic data table.

### Members

- **Slug:** `members`
- **Preview:** /view/list/members
- **Description:** Slack-style member management with filter popover and zebra table
- **When to use:** Use for team/member management with selection mode and filter-heavy tooling.

### Users Directory

- **Slug:** `users-02`
- **Preview:** /view/list/users-02
- **Description:** Clean users table with summary cards, date range, and circular actions
- **When to use:** Use for a cleaner directory layout with date filters and circular row actions.

### Users Segmented

- **Slug:** `users-03`
- **Preview:** /view/list/users-03
- **Description:** Users list with pill status tabs, rounded search, and export header
- **When to use:** Use when status segmentation (All/Active/Pending) should drive the list, with export in the header.


## Create page variations

### Simple Create

- **Slug:** `simple`
- **Preview:** /view/create/simple
- **Description:** Create project form with settings sidebar and live summary card
- **When to use:** Use for single-page create forms with a settings rail and live summary.

### Simple Create 02

- **Slug:** `simple-02`
- **Preview:** /view/create/simple-02
- **Description:** Create user with sectioned cards and sticky live profile preview
- **When to use:** Use when creating a person/profile with sectioned fields and a sticky preview.

### Create with Address

- **Slug:** `address`
- **Preview:** /view/create/address
- **Description:** Location form with line 1/2, city, state, ZIP, country, and preview
- **When to use:** Use when the primary create task is collecting a structured mailing address.

### Multi-step Create

- **Slug:** `multi-step`
- **Preview:** /view/create/multi-step
- **Description:** Workspace wizard with progress bar, nav stepper, and plan cards
- **When to use:** Use for longer create flows that need a progress bar, stepper, and plan selection.

### Multi-step Create 02

- **Slug:** `multi-step-02`
- **Preview:** /view/create/multi-step-02
- **Description:** Campaign wizard with vertical steps and segmented progress
- **When to use:** Use for campaign-style wizards with a vertical step list and segmented progress.

### Create with Invite

- **Slug:** `invite`
- **Preview:** /view/create/invite
- **Description:** Team create flow with an invite-users step and confirmation
- **When to use:** Use when creating a team/workspace should include inviting members before finish.

### Create with Attachments

- **Slug:** `attachments`
- **Preview:** /view/create/attachments
- **Description:** Request form with drag-and-drop upload and attachment list
- **When to use:** Use when the create flow centers on uploading and reviewing file attachments.


## AI chat variations

### AI Chat Workspace

- **Slug:** `workspace`
- **Preview:** /view/ai-chats/workspace
- **Description:** Academy shell with nested chat history sidebar, empty greeting, and conversation view
- **When to use:** Use for an in-app AI assistant with history sidebar, empty state greeting, and threaded replies.


