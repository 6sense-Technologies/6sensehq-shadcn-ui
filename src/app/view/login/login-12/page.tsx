import { HeartIcon, HomeIcon, StarIcon } from "lucide-react"

import { LoginForm } from "@/components/examples/login/login-12/login-form"

function FacebookLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-label="Facebook"
    >
      <path
        d="M18 0C8.059 0 0 8.059 0 18c0 8.686 6.164 15.92 14.344 17.638V22.78h-4.25V18h4.25v-3.438c0-4.22 2.534-6.562 6.406-6.562 1.855 0 3.797.344 3.797.344v4.188h-2.14c-2.11 0-2.766 1.309-2.766 2.656V18h4.71l-.754 4.78h-3.956v12.858C29.836 33.92 36 26.686 36 18 36 8.059 27.941 0 18 0z"
        fill="#1877F2"
      />
      <path
        d="M24.953 22.78l.754-4.78h-4.71v-3.812c0-1.347.656-2.656 2.766-2.656h2.14V7.344s-1.942-.344-3.797-.344c-3.872 0-6.406 2.342-6.406 6.562V18h-4.25v4.78h4.25v12.858a18.17 18.17 0 005.656 0V22.78h3.956z"
        fill="#fff"
      />
    </svg>
  )
}

function MetaWordmark() {
  return (
    <div className="flex items-center gap-1.5 text-[#0866FF]/80">
      <svg
        viewBox="0 0 36 24"
        className="h-4 w-6"
        fill="currentColor"
        aria-hidden
      >
        <path d="M8.5 4C4.5 4 1 7.8 1 12.5S4.5 21 8.5 21c2.2 0 4.1-1.1 5.5-2.8L18 12.5 14 6.8C12.6 5.1 10.7 4 8.5 4zm0 13.5c-1.9 0-3.5-1.8-3.5-5s1.6-5 3.5-5 3.5 1.8 3.5 5-1.6 5-3.5 5zM27.5 4c-2.2 0-4.1 1.1-5.5 2.8L18 12.5l4 5.7c1.4 1.7 3.3 2.8 5.5 2.8 4 0 7.5-3.8 7.5-8.5S31.5 4 27.5 4zm0 13.5c-1.9 0-3.5-1.8-3.5-5s1.6-5 3.5-5 3.5 1.8 3.5 5-1.6 5-3.5 5z" />
      </svg>
      <span className="text-sm font-semibold tracking-tight">Meta</span>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="grid min-h-svh bg-background lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden border-r p-8 lg:flex xl:p-10">
        <FacebookLogo className="relative z-10 size-10" />

        <div className="absolute inset-0 flex items-center justify-center px-6 pb-28 pt-20">
          <div className="relative h-[420px] w-[360px] xl:h-[480px] xl:w-[400px]">
            {/* Bottle — behind, top-left, tilted left */}
            <div className="absolute top-8 left-0 z-10 w-[150px] -rotate-[10deg] overflow-hidden rounded-[1.25rem] bg-card shadow-[0_10px_30px_rgba(0,0,0,0.12)] xl:w-[170px]">
              <div className="relative aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80&auto=format&fit=crop"
                  alt=""
                  className="size-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 flex size-7 items-center justify-center rounded-full bg-white shadow-sm">
                  <HomeIcon className="size-3.5 text-foreground" />
                </div>
              </div>
            </div>

            {/* Story — center, tilted right */}
            <div className="absolute top-2 left-[72px] z-20 w-[220px] rotate-[6deg] overflow-hidden rounded-[1.25rem] bg-card shadow-[0_16px_40px_rgba(0,0,0,0.18)] xl:left-[88px] xl:w-[250px]">
              <div className="relative aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop"
                  alt=""
                  className="size-full object-cover"
                />
                <div className="absolute inset-x-3 top-3">
                  <div className="h-1 overflow-hidden rounded-full bg-white/40">
                    <div className="h-full w-[68%] rounded-full bg-white" />
                  </div>
                </div>
                <div className="absolute top-6 right-3 rounded-full bg-[#7B61FF] px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-sm">
                  16:45
                </div>
              </div>
            </div>

            {/* Cassette — front, bottom-left, tilted left */}
            <div className="absolute bottom-10 left-2 z-30 flex w-[132px] -rotate-[12deg] items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#FF7A1A] p-4 shadow-[0_14px_36px_rgba(0,0,0,0.2)] xl:w-[148px]">
              <div className="relative aspect-square w-full">
                <svg
                  viewBox="0 0 120 80"
                  className="size-full drop-shadow-sm"
                  aria-hidden
                >
                  <rect
                    x="4"
                    y="8"
                    width="112"
                    height="64"
                    rx="8"
                    fill="white"
                  />
                  <rect
                    x="14"
                    y="18"
                    width="92"
                    height="36"
                    rx="4"
                    fill="#F3F4F6"
                  />
                  <circle cx="36" cy="36" r="12" fill="white" stroke="#D1D5DB" />
                  <circle cx="36" cy="36" r="4" fill="#9CA3AF" />
                  <circle cx="84" cy="36" r="12" fill="white" stroke="#D1D5DB" />
                  <circle cx="84" cy="36" r="4" fill="#9CA3AF" />
                  <rect
                    x="48"
                    y="30"
                    width="24"
                    height="12"
                    rx="2"
                    fill="white"
                    stroke="#D1D5DB"
                  />
                  <path
                    d="M20 72c18-18 40-10 52-28 8-12 20-8 28-18"
                    stroke="#A16207"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute -top-1 -left-1 flex size-7 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm">
                  <StarIcon className="size-3.5 fill-current" />
                </div>
              </div>
            </div>

            {/* Emoji sits in the notch between bottle + story */}
            <div className="absolute top-0 left-[78px] z-40 text-[2.75rem] leading-none drop-shadow-md xl:left-[92px]">
              😂
            </div>

            {/* Avatar — bottom-right with heart at 2 o'clock */}
            <div className="absolute right-10 bottom-20 z-30 size-[88px] xl:size-[96px]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop"
                alt=""
                className="size-full rounded-full object-cover shadow-[0_12px_28px_rgba(0,0,0,0.18)] ring-[3px] ring-white"
              />
              <div className="absolute top-0 right-0 flex size-8 translate-x-1 -translate-y-1 items-center justify-center rounded-full bg-white shadow-md">
                <HeartIcon className="size-3.5 fill-rose-500 text-rose-500" />
              </div>
            </div>
          </div>
        </div>

        <h2 className="relative z-10 max-w-xs text-4xl font-bold tracking-tight text-balance xl:text-5xl">
          Explore the things{" "}
          <span className="text-[#1877F2]">you love.</span>
        </h2>
      </div>

      <div className="relative flex min-h-svh flex-col items-center justify-center p-6 pb-20 sm:p-8 md:p-10">
        <LoginForm />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <MetaWordmark />
        </div>
      </div>
    </div>
  )
}
