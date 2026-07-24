import { buttonVariants } from "@/components/ui/button"

export function ButtonRenderExample() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  )
}
