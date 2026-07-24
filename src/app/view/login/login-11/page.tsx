import { LoginForm } from "@/components/examples/login/login-11/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-xs sm:p-8">
        <LoginForm />
      </div>
    </div>
  )
}
