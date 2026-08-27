import type { UserConfig } from '~/types'

const FONT_STACK
  = '"HiraMinProN-W6","Hiragino Mincho ProN","Yu Mincho",YuMincho,"Source Han Serif SC","Source Han Serif TC","Noto Serif CJK SC",serif'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'Theo Wu',
    subtitle: 'Writing things down',
    author: 'Theo Wu',
    description: 'Notes and essays by Theo Wu.',
    website: 'https://www.theowu.me/',
    pageSize: 8,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/tleewu',
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/theowu93',
      },
      {
        name: 'email',
        href: 'mailto:theowu93@gmail.com',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'en-us',
    fonts: {
      // HiraMinProN-W6 is a macOS/iOS system font. The rest of the stack are
      // the closest serifs available per-platform so non-Mac visitors get
      // something similar without loading a webfont.
      header: FONT_STACK,
      ui: FONT_STACK,
    },
  },
  seo: {
    twitter: '@theowu93',
  },
}
