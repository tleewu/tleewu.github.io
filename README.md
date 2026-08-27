# theowu.me

My personal site and blog. Built with [Astro](https://astro.build/), styled after the
[Havi](https://wordpress.org/themes/havi/) WordPress theme by Uladzimir Kulesh (GPL v2).

Havi is a WordPress block theme and can't run on GitHub Pages, so its design system —
palette, type scale, spacing ramp, Inter — was ported out of its `theme.json` into
plain CSS in `src/styles/global.css`. The Astro plumbing (content collections, RSS,
sitemap, SEO) is what remains of the original
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

Everything configurable lives in `src/.config/user.ts` — title, author, avatar, the
home-page hero, social links, nav links, and footer. It's merged over
`src/.config/default.ts`, so you only list what you want to change. Don't edit
`default.ts` directly.

The About page is `src/content/spec/about.md`.

## Styling

All of it is in `src/styles/global.css`, as CSS custom properties at the top —
colors, type scale, spacing. There's no Tailwind/UnoCSS layer to learn; change a
token and the whole site follows.

Inter is self-hosted from `public/fonts/inter/` (SIL OFL), so there are no external
font requests.

## Deploying

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

The custom domain is set by `public/CNAME`, which is copied into the build output.
