<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Component and template selection

Before adding UI or page layouts, read:

- [`docs/COMPONENTS.md`](docs/COMPONENTS.md) — when to use each base component
- [`docs/TEMPLATES.md`](docs/TEMPLATES.md) — when to use each template category and variation

Prefer an existing component or template that matches the `When to use` line over inventing a new pattern. The same guidance is stored as `whenToUse` in `src/lib/component-nav.ts` and `src/lib/template-nav.ts`, and shown in the gallery UIs.
