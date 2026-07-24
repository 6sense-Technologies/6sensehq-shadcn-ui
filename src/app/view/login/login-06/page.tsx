import { LoginForm } from "@/components/examples/login/login-06/login-form"
import { MediaPlaceholder } from "@/components/examples/login/shared"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh bg-background lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-8 md:p-10">
        <LoginForm className="w-full max-w-sm" />
      </div>
      <div className="relative hidden min-h-svh p-6 lg:block lg:p-8">
        <MediaPlaceholder className="h-full min-h-[calc(100svh-4rem)] rounded-2xl" />
      </div>
    </div>
  )
}
