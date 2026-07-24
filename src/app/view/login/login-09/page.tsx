import { LoginForm } from "@/components/examples/login/login-09/login-form"
import { MediaPlaceholder } from "@/components/examples/login/shared"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh bg-background lg:grid-cols-2">
      <div className="order-2 relative hidden min-h-svh p-6 lg:order-1 lg:block lg:p-8">
        <MediaPlaceholder className="h-full min-h-[calc(100svh-4rem)] rounded-2xl" />
      </div>
      <div className="order-1 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:order-2">
        <LoginForm className="w-full max-w-sm" />
      </div>
    </div>
  )
}
