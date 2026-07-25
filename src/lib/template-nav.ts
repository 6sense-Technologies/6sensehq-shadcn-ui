export type TemplateNavItem = {
  title: string
  href: string
  slug: string
}

export type TemplateVariation = {
  title: string
  description: string
  href: string
  slug: string
}

/** Sidebar sections for the templates gallery */
export const templateNav: TemplateNavItem[] = [
  {
    title: "Login",
    href: "/template/login",
    slug: "login",
  },
  {
    title: "Registration",
    href: "/template/registration",
    slug: "registration",
  },
  {
    title: "App Shells",
    href: "/template/app-shells",
    slug: "app-shells",
  },
  {
    title: "List Pages",
    href: "/template/list-pages",
    slug: "list-pages",
  },
]

/** Login page variations — each opens as a full page */
export const loginVariations: TemplateVariation[] = [
  {
    title: "Login 01",
    description: "A simple login form",
    href: "/view/login/login-01",
    slug: "login-01",
  },
  {
    title: "Login 02",
    description: "A two column login page with a cover image",
    href: "/view/login/login-02",
    slug: "login-02",
  },
  {
    title: "Login 03",
    description: "A login page with a muted background color",
    href: "/view/login/login-03",
    slug: "login-03",
  },
  {
    title: "Login 04",
    description: "A login page with form and image",
    href: "/view/login/login-04",
    slug: "login-04",
  },
  {
    title: "Login 05",
    description: "A simple email-only login page",
    href: "/view/login/login-05",
    slug: "login-05",
  },
  {
    title: "Login 06",
    description: "Split card with form and media panel",
    href: "/view/login/login-06",
    slug: "login-06",
  },
  {
    title: "Login 07",
    description: "Split card with social sign-in first",
    href: "/view/login/login-07",
    slug: "login-07",
  },
  {
    title: "Login 08",
    description: "Split card with dark testimonial panel",
    href: "/view/login/login-08",
    slug: "login-08",
  },
  {
    title: "Login 09",
    description: "Media left, form right with social icons",
    href: "/view/login/login-09",
    slug: "login-09",
  },
  {
    title: "Login 10",
    description: "Black testimonial panel with avatar quote",
    href: "/view/login/login-10",
    slug: "login-10",
  },
  {
    title: "Login 11",
    description: "Centered card with login / create account tabs",
    href: "/view/login/login-11",
    slug: "login-11",
  },
  {
    title: "Login 12",
    description: "Facebook-style split login with collage and Meta branding",
    href: "/view/login/login-12",
    slug: "login-12",
  },
]

/** Registration page variations — each opens as a full page */
export const registrationVariations: TemplateVariation[] = [
  {
    title: "Signup 01",
    description: "A simple signup form",
    href: "/view/registration/signup-01",
    slug: "signup-01",
  },
  {
    title: "Signup 02",
    description: "A two column signup page with a cover image",
    href: "/view/registration/signup-02",
    slug: "signup-02",
  },
  {
    title: "Signup 03",
    description: "A signup page with a muted background color",
    href: "/view/registration/signup-03",
    slug: "signup-03",
  },
  {
    title: "Signup 04",
    description: "A signup page with form and image",
    href: "/view/registration/signup-04",
    slug: "signup-04",
  },
  {
    title: "Signup 05",
    description: "A simple signup form with social providers",
    href: "/view/registration/signup-05",
    slug: "signup-05",
  },
  {
    title: "Signup 06",
    description: "Free trial marketing panel with registration card",
    href: "/view/registration/signup-06",
    slug: "signup-06",
  },
]

/** App shell page variations — each opens as a full page */
export const appShellVariations: TemplateVariation[] = [
  {
    title: "Automobile",
    description: "Top navigation shell with search, menu, and breadcrumbs",
    href: "/view/app-shell/automobile",
    slug: "automobile",
  },
  {
    title: "Academy",
    description: "Left sidebar with promo card and inset content",
    href: "/view/app-shell/academy",
    slug: "academy",
  },
  {
    title: "Analytics",
    description: "Floating sidebar with premium upgrade CTA",
    href: "/view/app-shell/analytics",
    slug: "analytics",
  },
  {
    title: "Social Media",
    description: "Profile sidebar with footer breadcrumbs",
    href: "/view/app-shell/social",
    slug: "social",
  },
  {
    title: "Food Point",
    description: "Restaurant ops sidebar with today's order card",
    href: "/view/app-shell/food-point",
    slug: "food-point",
  },
  {
    title: "Portfolio",
    description: "Slim icon-and-label sidebar navigation",
    href: "/view/app-shell/portfolio",
    slug: "portfolio",
  },
  {
    title: "Travel",
    description: "Icon-only mini sidebar with Book now action",
    href: "/view/app-shell/travel",
    slug: "travel",
  },
  {
    title: "Payments",
    description: "Stripe-style shell with workspace switcher and collapsible products",
    href: "/view/app-shell/payments",
    slug: "payments",
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
  },
  {
    title: "Users",
    description:
      "Admin users table with stat cards, search, and numbered pagination",
    href: "/view/list/users",
    slug: "users",
  },
]
