import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex w-full max-w-sm flex-col gap-4", className)} {...props}>
      <h1 className="text-center text-2xl font-bold tracking-tight sm:text-[1.75rem]">
        Log in to Facebook
      </h1>
      <FieldGroup className="gap-3">
        <Field>
          <Input
            id="email"
            type="text"
            placeholder="Email address or mobile number"
            className="h-12 rounded-lg text-base"
            required
          />
        </Field>
        <Field>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            className="h-12 rounded-lg text-base"
            required
          />
        </Field>
        <Field>
          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-[#1877F2] text-base font-semibold text-white hover:bg-[#166FE5]"
          >
            Log in
          </Button>
        </Field>
      </FieldGroup>
      <a
        href="#"
        className="text-center text-sm font-medium underline-offset-4 hover:underline"
      >
        Forgotten password?
      </a>
      <Button
        type="button"
        variant="outline"
        className="mt-2 h-12 w-full rounded-full border-[#1877F2] text-base font-semibold text-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
      >
        Create new account
      </Button>
    </form>
  )
}
