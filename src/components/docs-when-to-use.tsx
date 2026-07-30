export function DocsWhenToUse({ children }: { children: string }) {
  return (
    <p className="text-muted-foreground text-sm leading-relaxed">
      <span className="text-foreground font-medium">When to use.</span>{" "}
      {children}
    </p>
  )
}
