#!/usr/bin/env node
/**
 * Regenerates docs/COMPONENTS.md and docs/TEMPLATES.md from nav whenToUse fields.
 * Run: node scripts/generate-guidelines.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs"
import { componentNav } from "../src/lib/component-nav.ts"
import {
  templateNav,
  loginVariations,
  registrationVariations,
  appShellVariations,
  listPageVariations,
  createPageVariations,
  aiChatVariations,
} from "../src/lib/template-nav.ts"

mkdirSync("docs", { recursive: true })

const componentsMd = `# Component guidelines

When-to-use guidance for every base component in this design system.

**Audience:** humans browsing the gallery and AI agents choosing components.

**Source of truth:** \`src/lib/component-nav.ts\` (\`whenToUse\`). Keep this file in sync when you add or rename a component.

Regenerate this file with: \`node scripts/generate-guidelines.mjs\`

## How to use these guidelines

- Prefer an existing component over a one-off custom control.
- Match the \`whenToUse\` line to the user job; if two components fit, prefer the simpler one.
- Gallery pages under \`/components/base/*\` show the same line under each component title.

## Components

${componentNav
  .map(
    (c) => `### ${c.title}

- **Slug:** \`${c.slug}\`
- **Gallery:** ${c.href}
- **When to use:** ${c.whenToUse}
`
  )
  .join("\n")}
`

const section = (title, items) =>
  `## ${title}

${items
  .map(
    (t) => `### ${t.title}

- **Slug:** \`${t.slug}\`
- **Preview:** ${t.href}
- **Description:** ${t.description}
- **When to use:** ${t.whenToUse}
`
  )
  .join("\n")}
`

const templatesMd = `# Template guidelines

When-to-use guidance for every template category and variation in this design system.

**Audience:** humans browsing the gallery and AI agents choosing page layouts.

**Source of truth:** \`src/lib/template-nav.ts\` (\`whenToUse\`). Keep this file in sync when you add or rename a template.

Regenerate this file with: \`node scripts/generate-guidelines.mjs\`

## How to use these guidelines

- Start from the category (\`templateNav\`), then pick the variation that matches content density and product tone.
- Prefer composing an app shell + list/create/chat template over inventing a new page chrome.
- Gallery pages under \`/template/*\` show the same \`When to use\` line on each card.

## Categories

${templateNav
  .map(
    (t) => `### ${t.title}

- **Slug:** \`${t.slug}\`
- **Gallery:** ${t.href}
- **When to use:** ${t.whenToUse}
`
  )
  .join("\n")}

${section("Login variations", loginVariations)}
${section("Registration variations", registrationVariations)}
${section("App shell variations", appShellVariations)}
${section("List page variations", listPageVariations)}
${section("Create page variations", createPageVariations)}
${section("AI chat variations", aiChatVariations)}
`

writeFileSync("docs/COMPONENTS.md", componentsMd)
writeFileSync("docs/TEMPLATES.md", templatesMd)
console.log("Wrote docs/COMPONENTS.md and docs/TEMPLATES.md")
