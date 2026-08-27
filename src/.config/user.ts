import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'Theo Wu',
    subtitle: 'Writing things down',
    author: 'Theo Wu',
    description: 'Notes and essays by Theo Wu.',
    website: 'https://www.theowu.me/',
    avatar: '/profile.jpeg',
    hero: {
      title: 'Hello, I am Theo Wu',
      description:
        'Product manager. Previously a software engineer. I write things down here so they don\'t evaporate in notes apps and group chats.',
    },
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
      '© %year %author',
      'Design from <a target="_blank" href="https://wordpress.org/themes/havi/">Havi</a> by <a target="_blank" href="https://mroya.eu/">Uladzimir Kulesh</a> · Built with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'en-us',
  },
  seo: {
    twitter: '@theowu93',
  },
}
