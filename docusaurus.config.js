module.exports = {
  title: 'The docassemble AssemblyLine Project',
  tagline: 'Online easy-form development in-a-box',
  url: 'https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation',
  baseUrl: '/docassemble-AssemblyLine-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SuffolkLITLab', // Usually your GitHub org/user name.
  projectName: 'docassemble-AssemblyLine-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'The docassemble AssemblyLine Project',
      // logo: { alt: 'My Site Logo', src: 'img/logo.svg', },
      items: [
        // { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left', },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // { title: 'Docs', items: [ { label: 'Style Guide', to: 'docs/', }, { label: 'Second Doc', to: 'docs/doc2/', }, ], },
        // { title: 'Community', items: [ { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus', }, { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus', }, { label: 'Twitter', href: 'https://twitter.com/docusaurus', }, ], },
        {
          title: 'More',
          items: [
            // { label: 'Blog', to: 'blog', },
            {
              label: 'GitHub',
              href: 'https://github.com/SuffolkLITLab/docassemble-AssemblyLine',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AssemblyLine Docs Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/',
        },
        // blog: { showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/', },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
