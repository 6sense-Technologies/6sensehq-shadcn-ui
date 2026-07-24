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
  BrandMark,
  GitHubIcon,
  GoogleIcon,
} from "@/components/examples/login/shared"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={className} {...props}>
      <FieldGroup>
        <BrandMark />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Sign in
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Log in to unlock tailored content and stay connected with your
            community.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Email" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="text-muted-foreground ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </Field>
        <Field>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </Field>
        <FieldSeparator>OR</FieldSeparator>
        <Field className="grid grid-cols-3 gap-3">
          <Button variant="outline" type="button" aria-label="Sign in with GitHub">
            <GitHubIcon />
          </Button>
          <Button variant="outline" type="button" aria-label="Sign in with Google">
            <GoogleIcon />
          </Button>
          <Button variant="outline" type="button" aria-label="Sign in with Apple">
            <AppleIcon />
          </Button>
        </Field>
        <FieldDescription className="text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Sign up
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
