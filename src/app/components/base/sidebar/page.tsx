import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sidebar",
  description: "A composable, themeable and customizable sidebar component.",
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-6 md:p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
        <p className="text-muted-foreground text-lg">
          A composable, themeable and customizable sidebar component. All 16
          official sidebar block variations, plus app-shell sidebars.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            01. Grouped
          </h2>
          <p className="text-muted-foreground text-sm">A simple sidebar with navigation grouped by section.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/01"
            title="sidebar-01"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            02. Collapsible Sections
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with collapsible sections.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/02"
            title="sidebar-02"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            03. Submenus
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with submenus.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/03"
            title="sidebar-03"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            04. Floating
          </h2>
          <p className="text-muted-foreground text-sm">A floating sidebar with submenus.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/04"
            title="sidebar-04"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            05. Collapsible Submenus
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with collapsible submenus.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/05"
            title="sidebar-05"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            06. Dropdown Submenus
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with submenus as dropdowns.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/06"
            title="sidebar-06"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            07. Icon Collapse
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar that collapses to icons.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/07"
            title="sidebar-07"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            08. Inset
          </h2>
          <p className="text-muted-foreground text-sm">An inset sidebar with secondary navigation.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/08"
            title="sidebar-08"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            09. Nested
          </h2>
          <p className="text-muted-foreground text-sm">Collapsible nested sidebars.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/09"
            title="sidebar-09"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            10. Popover
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar in a popover.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/10"
            title="sidebar-10"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            11. File Tree
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with a collapsible file tree.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/11"
            title="sidebar-11"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            12. Calendar
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with a calendar.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/12"
            title="sidebar-12"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            13. Dialog
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar in a dialog.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/13"
            title="sidebar-13"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            14. Right Side
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar on the right.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/14"
            title="sidebar-14"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            15. Left & Right
          </h2>
          <p className="text-muted-foreground text-sm">A left and right sidebar.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/15"
            title="sidebar-15"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            16. Sticky Header
          </h2>
          <p className="text-muted-foreground text-sm">A sidebar with a sticky site header.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/16"
            title="sidebar-16"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            17. Academy
          </h2>
          <p className="text-muted-foreground text-sm">Academy app sidebar with pages, misc, and mobile promo.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/academy"
            title="sidebar-academy"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            18. Analytics
          </h2>
          <p className="text-muted-foreground text-sm">Analytics floating sidebar with premium upgrade CTA.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/analytics"
            title="sidebar-analytics"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            19. Social
          </h2>
          <p className="text-muted-foreground text-sm">Social media sidebar with profile header and nav groups.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/social"
            title="sidebar-social"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            20. Food Point
          </h2>
          <p className="text-muted-foreground text-sm">Food Point sidebar with order summary card.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/food-point"
            title="sidebar-food-point"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            21. Portfolio
          </h2>
          <p className="text-muted-foreground text-sm">Slim icon-and-label portfolio sidebar.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/portfolio"
            title="sidebar-portfolio"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            22. Travel
          </h2>
          <p className="text-muted-foreground text-sm">Icon-only travel mini sidebar with Book now.</p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/travel"
            title="sidebar-travel"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            23. Payments
          </h2>
          <p className="text-muted-foreground text-sm">
            Stripe-style payments sidebar with workspace switcher and product groups.
          </p>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-xl border bg-background">
          <iframe
            src="/view/sidebar/payments"
            title="sidebar-payments"
            className="absolute inset-0 size-full"
          />
        </div>
      </section>
    </div>
  )
}
