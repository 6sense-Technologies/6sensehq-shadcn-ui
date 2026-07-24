import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { LoginForm } from "@/components/examples/login/login-10/login-form"
import { BrandMark } from "@/components/examples/login/shared"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh bg-background lg:grid-cols-2">
      <div className="relative hidden min-h-svh flex-col justify-between bg-zinc-950 p-8 text-white lg:flex xl:p-10">
        <BrandMark className="bg-white text-zinc-950" />
        <div className="flex flex-1 flex-col justify-center gap-6 py-10">
          <Avatar size="lg" className="size-14">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop"
              alt="Sarah Thompson"
            />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <p className="text-lg leading-relaxed text-balance">
            &ldquo;Shadcn UI Kit for Figma has completely transformed our design
            process. It&apos;s incredibly intuitive and saves us so much time.
            The components are beautifully crafted and customizable.&rdquo;
          </p>
        </div>
        <div>
          <p className="font-medium">Sarah Thompson</p>
          <p className="text-sm text-white/70">
            Lead UX Designer at BrightWave Solutions
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-8 md:p-10">
        <LoginForm className="w-full max-w-sm" />
      </div>
    </div>
  )
}
