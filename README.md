# theowu.me

My personal site and blog. Built with [Astro](https://astro.build/) using the
[Typography](https://github.com/moeyua/astro-theme-typography) theme.

**Live:** https://www.theowu.me

## Running locally

```sh
pnpm install
pnpm dev      # http://localhost:4321
```

Other commands:

```sh
pnpm build    # type-check and build to ./dist
pnpm preview  # preview the production build
pnpm lint     # lint
```

## Writing a post

Add a Markdown file to `src/content/posts/`. Frontmatter looks like this:

```md
---
title: A post title
pubDate: 2026-08-27
categories: ["Notes"]
description: "One-line summary used for previews and SEO."
slug: a-post-title
draft: false
---

Body goes here.
```

Fields: `title`, `pubDate`, and `categories` are required. Optional ones include
`modDate`, `description`, `slug`, `draft`, `pin`, `banner`, and `author`. Set
`draft: true` to keep a post out of the production build.

There's also a helper: `pnpm theme:create`.

## Site settings

Everything configurable lives in `src/.config/user.ts` — title, subtitle, author,
social links, nav links, locale, colors, and fonts. It's merged over
`src/.config/default.ts`, so you only list what you want to change. Don't edit
`default.ts` directly.

The About page is `src/content/spec/about.md`.

## Deploying

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

The custom domain is set by `public/CNAME`, which is copied into the build output.
