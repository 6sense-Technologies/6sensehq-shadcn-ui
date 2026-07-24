"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AppleIcon,
  BrandMark,
  GoogleIcon,
} from "@/components/examples/login/shared"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      <div className="mb-6 flex flex-col gap-2">
        <BrandMark />
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Get started
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Tabs defaultValue="login" className="gap-6">
        <TabsList className="grid h-auto w-full grid-cols-2">
          <TabsTrigger value="login" className="w-full">
            Log in
          </TabsTrigger>
          <TabsTrigger value="create" className="w-full">
            Create account
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form>
            <FieldGroup>
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
                  Log in
                </Button>
              </Field>
              <FieldSeparator>OR</FieldSeparator>
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
            </FieldGroup>
          </form>
        </TabsContent>
        <TabsContent value="create">
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="create-email">Email</FieldLabel>
                <Input
                  id="create-email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="create-password">Password</FieldLabel>
                <Input
                  id="create-password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  Create account
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
