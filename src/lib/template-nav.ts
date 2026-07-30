export type TemplateNavItem = {
  title: string
  href: string
  slug: string
  /** When to choose this category — for humans in the gallery and for AI agents. */
  whenToUse: string
}

export type TemplateVariation = {
  title: string
  description: string
  href: string
  slug: string
  /** When to choose this variation — for humans in the gallery and for AI agents. */
  whenToUse: string
}

/** Sidebar sections for the templates gallery */
export const templateNav: TemplateNavItem[] = [
  {
    title: "Login",
    href: "/template/login",
    slug: "login",
    whenToUse:
      "Use when building sign-in experiences; pick a variation that matches branding density and social-auth needs.",
  },
  {
    title: "Registration",
    href: "/template/registration",
    slug: "registration",
    whenToUse:
      "Use when building signup or trial flows; choose a layout based on marketing vs. form-first priority.",
  },
  {
    title: "App Shells",
    href: "/template/app-shells",
    slug: "app-shells",
    whenToUse:
      "Use as the outer chrome for authenticated apps; pick the shell that matches nav density and product tone.",
  },
  {
    title: "List Pages",
    href: "/template/list-pages",
    slug: "list-pages",
    whenToUse:
      "Use for data-dense admin or ops screens that list, filter, and act on many records.",
  },
  {
    title: "Create Pages",
    href: "/template/create-pages",
    slug: "create-pages",
    whenToUse:
      "Use when users create a record or resource; pick simple, multi-step, invite, or attachment flows as needed.",
  },
  {
    title: "AI Chats",
    href: "/template/ai-chats",
    slug: "ai-chats",
    whenToUse:
      "Use for assistant-style products with conversation history, empty greeting, and message threads.",
  },
]

/** Login page variations — each opens as a full page */
export const loginVariations: TemplateVariation[] = [
  {
    title: "Login 01",
    description: "A simple login form",
    href: "/view/login/login-01",
    slug: "login-01",
    whenToUse:
      "Use for a minimal email/password login with no marketing panel.",
  },
  {
    title: "Login 02",
    description: "A two column login page with a cover image",
    href: "/view/login/login-02",
    slug: "login-02",
    whenToUse:
      "Use when brand imagery should share the viewport equally with the form.",
  },
  {
    title: "Login 03",
    description: "A login page with a muted background color",
    href: "/view/login/login-03",
    slug: "login-03",
    whenToUse:
      "Use for a calm, centered card login without a photo cover.",
  },
  {
    title: "Login 04",
    description: "A login page with form and image",
    href: "/view/login/login-04",
    slug: "login-04",
    whenToUse:
      "Use when you want a form column paired with a supporting image panel.",
  },
  {
    title: "Login 05",
    description: "A simple email-only login page",
    href: "/view/login/login-05",
    slug: "login-05",
    whenToUse:
      "Use for passwordless or magic-link flows that only collect email.",
  },
  {
    title: "Login 06",
    description: "Split card with form and media panel",
    href: "/view/login/login-06",
    slug: "login-06",
    whenToUse:
      "Use for a polished split card where media and form sit in one framed unit.",
  },
  {
    title: "Login 07",
    description: "Split card with social sign-in first",
    href: "/view/login/login-07",
    slug: "login-07",
    whenToUse:
      "Use when social providers should be the primary path, with email secondary.",
  },
  {
    title: "Login 08",
    description: "Split card with dark testimonial panel",
    href: "/view/login/login-08",
    slug: "login-08",
    whenToUse:
      "Use when social proof or a testimonial should dominate the non-form panel.",
  },
  {
    title: "Login 09",
    description: "Media left, form right with social icons",
    href: "/view/login/login-09",
    slug: "login-09",
    whenToUse:
      "Use for media-led branding with compact social icon actions beside the form.",
  },
  {
    title: "Login 10",
    description: "Black testimonial panel with avatar quote",
    href: "/view/login/login-10",
    slug: "login-10",
    whenToUse:
      "Use for high-contrast trust-building login with an attributed customer quote.",
  },
  {
    title: "Login 11",
    description: "Centered card with login / create account tabs",
    href: "/view/login/login-11",
    slug: "login-11",
    whenToUse:
      "Use when login and signup should share one card via tabs.",
  },
  {
    title: "Login 12",
    description: "Facebook-style split login with collage and Meta branding",
    href: "/view/login/login-12",
    slug: "login-12",
    whenToUse:
      "Use for social-product style branding with a collage hero and familiar Meta cues.",
  },
]

/** Registration page variations — each opens as a full page */
export const registrationVariations: TemplateVariation[] = [
  {
    title: "Signup 01",
    description: "A simple signup form",
    href: "/view/registration/signup-01",
    slug: "signup-01",
    whenToUse:
      "Use for a minimal create-account form without marketing chrome.",
  },
  {
    title: "Signup 02",
    description: "A two column signup page with a cover image",
    href: "/view/registration/signup-02",
    slug: "signup-02",
    whenToUse:
      "Use when a cover image should sell the product beside the signup form.",
  },
  {
    title: "Signup 03",
    description: "A signup page with a muted background color",
    href: "/view/registration/signup-03",
    slug: "signup-03",
    whenToUse:
      "Use for a quiet, centered signup card on a muted canvas.",
  },
  {
    title: "Signup 04",
    description: "A signup page with form and image",
    href: "/view/registration/signup-04",
    slug: "signup-04",
    whenToUse:
      "Use for a balanced form-and-image registration layout.",
  },
  {
    title: "Signup 05",
    description: "A simple signup form with social providers",
    href: "/view/registration/signup-05",
    slug: "signup-05",
    whenToUse:
      "Use when offering both email signup and social provider shortcuts.",
  },
  {
    title: "Signup 06",
    description: "Free trial marketing panel with registration card",
    href: "/view/registration/signup-06",
    slug: "signup-06",
    whenToUse:
      "Use for trial or growth campaigns where benefits copy leads into registration.",
  },
]

/** App shell page variations — each opens as a full page */
export const appShellVariations: TemplateVariation[] = [
  {
    title: "Automobile",
    description: "Top navigation shell with search, menu, and breadcrumbs",
    href: "/view/app-shell/automobile",
    slug: "automobile",
    whenToUse:
      "Use for products that prefer top nav, global search, and breadcrumb context over a left sidebar.",
  },
  {
    title: "Academy",
    description: "Left sidebar with promo card and inset content",
    href: "/view/app-shell/academy",
    slug: "academy",
    whenToUse:
      "Use as the default learning/admin shell with a left sidebar and inset main content.",
  },
  {
    title: "Analytics",
    description: "Floating sidebar with premium upgrade CTA",
    href: "/view/app-shell/analytics",
    slug: "analytics",
    whenToUse:
      "Use for analytics-style apps with a floating sidebar and upgrade messaging.",
  },
  {
    title: "Social Media",
    description: "Profile sidebar with footer breadcrumbs",
    href: "/view/app-shell/social",
    slug: "social",
    whenToUse:
      "Use for profile-centric social products with identity-forward sidebar navigation.",
  },
  {
    title: "Food Point",
    description: "Restaurant ops sidebar with today's order card",
    href: "/view/app-shell/food-point",
    slug: "food-point",
    whenToUse:
      "Use for ops dashboards that highlight today’s activity in the sidebar.",
  },
  {
    title: "Portfolio",
    description: "Slim icon-and-label sidebar navigation",
    href: "/view/app-shell/portfolio",
    slug: "portfolio",
    whenToUse:
      "Use for creative or portfolio apps needing a slim labeled icon rail.",
  },
  {
    title: "Travel",
    description: "Icon-only mini sidebar with Book now action",
    href: "/view/app-shell/travel",
    slug: "travel",
    whenToUse:
      "Use when navigation must stay ultra-compact with a primary CTA in the rail.",
  },
  {
    title: "Payments",
    description: "Stripe-style shell with workspace switcher and collapsible products",
    href: "/view/app-shell/payments",
    slug: "payments",
    whenToUse:
      "Use for fintech/billing products that need workspace switching and nested product nav.",
  },
]

/** List page variations — each opens as a full page */
export const listPageVariations: TemplateVariation[] = [
  {
    title: "Payments",
    description:
      "Stripe-style payments table with tabs, filters, and pagination",
    href: "/view/list/payments",
    slug: "payments",
    whenToUse:
      "Use for transaction/payment lists with status tabs, dense filters, and financial table patterns.",
  },
  {
    title: "Users",
    description:
      "Admin users table with stat cards, search, and numbered pagination",
    href: "/view/list/users",
    slug: "users",
    whenToUse:
      "Use for admin user directories that lead with KPI cards and a classic data table.",
  },
  {
    title: "Members",
    description:
      "Slack-style member management with filter popover and zebra table",
    href: "/view/list/members",
    slug: "members",
    whenToUse:
      "Use for team/member management with selection mode and filter-heavy tooling.",
  },
  {
    title: "Users Directory",
    description:
      "Clean users table with summary cards, date range, and circular actions",
    href: "/view/list/users-02",
    slug: "users-02",
    whenToUse:
      "Use for a cleaner directory layout with date filters and circular row actions.",
  },
  {
    title: "Users Segmented",
    description:
      "Users list with pill status tabs, rounded search, and export header",
    href: "/view/list/users-03",
    slug: "users-03",
    whenToUse:
      "Use when status segmentation (All/Active/Pending) should drive the list, with export in the header.",
  },
]

/** Create page variations — each opens as a full page */
export const createPageVariations: TemplateVariation[] = [
  {
    title: "Simple Create",
    description:
      "Create project form with settings sidebar and live summary card",
    href: "/view/create/simple",
    slug: "simple",
    whenToUse:
      "Use for single-page create forms with a settings rail and live summary.",
  },
  {
    title: "Simple Create 02",
    description:
      "Create user with sectioned cards and sticky live profile preview",
    href: "/view/create/simple-02",
    slug: "simple-02",
    whenToUse:
      "Use when creating a person/profile with sectioned fields and a sticky preview.",
  },
  {
    title: "Create with Address",
    description:
      "Location form with line 1/2, city, state, ZIP, country, and preview",
    href: "/view/create/address",
    slug: "address",
    whenToUse:
      "Use when the primary create task is collecting a structured mailing address.",
  },
  {
    title: "Multi-step Create",
    description:
      "Workspace wizard with progress bar, nav stepper, and plan cards",
    href: "/view/create/multi-step",
    slug: "multi-step",
    whenToUse:
      "Use for longer create flows that need a progress bar, stepper, and plan selection.",
  },
  {
    title: "Multi-step Create 02",
    description:
      "Campaign wizard with vertical steps and segmented progress",
    href: "/view/create/multi-step-02",
    slug: "multi-step-02",
    whenToUse:
      "Use for campaign-style wizards with a vertical step list and segmented progress.",
  },
  {
    title: "Create with Invite",
    description:
      "Team create flow with an invite-users step and confirmation",
    href: "/view/create/invite",
    slug: "invite",
    whenToUse:
      "Use when creating a team/workspace should include inviting members before finish.",
  },
  {
    title: "Create with Attachments",
    description:
      "Request form with drag-and-drop upload and attachment list",
    href: "/view/create/attachments",
    slug: "attachments",
    whenToUse:
      "Use when the create flow centers on uploading and reviewing file attachments.",
  },
]

/** AI chat page variations — each opens as a full page */
export const aiChatVariations: TemplateVariation[] = [
  {
    title: "AI Chat Workspace",
    description:
      "Academy shell with nested chat history sidebar, empty greeting, and conversation view",
    href: "/view/ai-chats/workspace",
    slug: "workspace",
    whenToUse:
      "Use for an in-app AI assistant with history sidebar, empty state greeting, and threaded replies.",
  },
]

export function getTemplateVariation(
  variations: TemplateVariation[],
  slug: string
) {
  return variations.find((item) => item.slug === slug)
}
