import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AppleIcon,
  GoogleIcon,
} from "@/components/examples/login/shared"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={className} {...props}>
      <FieldGroup>
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Sign in
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Log in to unlock tailored content and stay connected with your
            community.
          </p>
        </div>
        <Field className="gap-3">
          <Button variant="outline" type="button" className="w-full">
            <GoogleIcon />
            Sign in with Google
          </Button>
          <Button variant="outline" type="button" className="w-full">
            <AppleIcon />
            Sign in with Apple
          </Button>
        </Field>
        <FieldSeparator>OR</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Email" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </Field>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="font-normal">
              Keep me signed in
            </Label>
          </div>
          <a
            href="#"
            className="text-muted-foreground text-sm underline-offset-4 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <Field>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
