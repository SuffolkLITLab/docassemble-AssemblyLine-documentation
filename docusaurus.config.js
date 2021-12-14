module.exports = {
  title: 'The Document Assembly Line Project',
  tagline: 'From paper to webform, made easier',
  url: 'https://plocket.github.io',
  // baseUrl: '/',
  baseUrl: '/docassemble-AssemblyLine-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'plocket', // Usually your GitHub org/user name.
  projectName: 'docassemble-AssemblyLine-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'The Document Assembly Line Project',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left', },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/plocket/docassemble-AssemblyLine-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/plocket/docassemble-AssemblyLine',
            },
          ],
        },
      ],
      copyright: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> - AssemblyLine Docs Built with Docusaurus.`,
    },
  },
  plugins: [
    '@docusaurus/plugin-ideal-image',
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/plocket/docassemble-AssemblyLine-documentation/edit/main/',
        },
        //blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        //},
        pages: {
        },        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
