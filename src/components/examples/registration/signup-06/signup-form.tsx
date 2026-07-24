import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  AppleIcon,
  GitHubIcon,
  GoogleIcon,
} from "@/components/examples/login/shared"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={className} {...props}>
      <FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="first-name">Name</FieldLabel>
            <Input id="first-name" type="text" placeholder="Name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
            <Input id="last-name" type="text" placeholder="Name" required />
          </Field>
        </div>
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
            minLength={8}
          />
          <FieldDescription>Minimum 8 characters.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign in
            </a>
          </FieldDescription>
        </Field>
        <FieldSeparator>OR</FieldSeparator>
        <Field className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            type="button"
            aria-label="Sign up with Google"
          >
            <GoogleIcon />
          </Button>
          <Button
            variant="outline"
            type="button"
            aria-label="Sign up with GitHub"
          >
            <GitHubIcon />
          </Button>
          <Button
            variant="outline"
            type="button"
            aria-label="Sign up with Apple"
          >
            <AppleIcon />
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
