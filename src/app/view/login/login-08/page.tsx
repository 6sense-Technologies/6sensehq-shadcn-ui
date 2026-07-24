import { LoginForm } from "@/components/examples/login/login-08/login-form"
import { MediaPlaceholder } from "@/components/examples/login/shared"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh bg-background lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-8 md:p-10">
        <LoginForm className="w-full max-w-sm" />
      </div>
      <div className="relative hidden min-h-svh lg:block">
        <MediaPlaceholder
          tone="dark"
          className="absolute inset-0 rounded-none"
        />
        <div className="relative z-10 flex h-full min-h-svh flex-col justify-end gap-4 p-8 text-white xl:p-10">
          <p className="text-sm leading-relaxed text-balance sm:text-base">
            &ldquo;Shadcn UI Kit for Figma has completely transformed our design
            process. It&apos;s incredibly intuitive and saves us so much time.
            The components are beautifully crafted and customizable.&rdquo;
          </p>
          <div>
            <p className="font-medium">Sarah Thompson</p>
            <p className="text-sm text-white/70">
              Lead UX Designer at BrightWave Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
