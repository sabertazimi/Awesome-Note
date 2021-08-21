const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Awesome Notes',
  tagline: 'Today I Learned',
  url: 'https://sabertazimi.github.io',
  baseUrl: '/awesome-notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'sabertazimi',
  projectName: 'awesome-notes',
  themeConfig: {
    defaultMode: 'dark',
    navbar: {
      title: 'Awesome Notes',
      logo: {
        alt: 'Awesome Notes',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Notes',
        },
        {
          to: 'computerScience/algorithms/algorithmsBasicNotes',
          label: 'Computer Science',
          position: 'left',
        },
        {
          to: 'programming/android/androidBasicNotes',
          label: 'Programming',
          position: 'left',
        },
        {
          to: 'language/assembly/assemblyBasicNotes',
          label: 'Language',
          position: 'left',
        },
        {
          to: 'web/angular/angularBasicNotes',
          label: 'Web',
          position: 'left',
        },
        {
          href: 'https://notes.tazimi.dev',
          label: 'GitBook',
          position: 'right',
        },
        {
          href: 'https://github.com/sabertazimi/awesome-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Notes',
          items: [
            {
              to: '/README',
              label: 'Getting Started',
            },
            {
              to: 'computerScience/algorithms/algorithmsBasicNotes',
              label: 'Computer Science',
            },
            {
              to: 'programming/android/androidBasicNotes',
              label: 'Programming',
            },
            {
              to: 'language/assembly/assemblyBasicNotes',
              label: 'Language',
            },
            {
              to: 'web/angular/angularBasicNotes',
              label: 'Web',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sabertazimi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sabertazimi',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/sabertazimi',
            },
            {
              label: 'Weibo',
              href: 'https://weibo.com/sabertazimi',
            },
            {
              label: 'Email',
              href: 'mailto:sabertazimi@gmail.com',
            },
          ],
        },
        {
          title: 'Find More',
          items: [
            {
              label: 'Awesome Web',
              href: 'https://github.com/sabertazimi/awesome-web',
            },
            {
              label: 'Blog',
              href: 'https://github.com/sabertazimi/blog',
            },
            {
              label: 'Bod',
              href: 'https://github.com/sabertazimi/bod',
            },
            {
              label: 'Boilerplate',
              href: 'https://github.com/sabertazimi/boilerplate',
            },
            {
              label: 'Dragon ZSH Theme',
              href: 'https://github.com/sabertazimi/dragon-zsh-theme',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sabertazimi.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'notes',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sabertazimi/awesome-notes/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
