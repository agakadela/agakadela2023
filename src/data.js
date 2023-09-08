import { getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Projects',
      href: '/#projects',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  // actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://twitter.com/aga_kadela' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/aga_kadela/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/AgaKadelaCW' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/agakadela' },
  ],
  footNote: `
    Made by <a class="text-primary hover:underline dark:text-secondary" href="https://github.com/agakadela"> Aga Kadela</a> · All rights reserved.
  `,
};
