import type { UserConfig } from '~/types'

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
    theme: 'system',
    locale: 'en-us',
  },
  seo: {
    twitter: '@theowu93',
  },
}
