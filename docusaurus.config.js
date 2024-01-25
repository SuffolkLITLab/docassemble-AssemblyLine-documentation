module.exports = {
  title: 'The Document Assembly Line Project',
  tagline: 'From paper to webform, made easier',
  url: 'https://suffolklitlab.org',
  baseUrl: '/docassemble-AssemblyLine-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SuffolkLITLab', // the GitHub org name.
  projectName: 'docassemble-AssemblyLine-documentation', // the repo name.
  themeConfig: {
    announcementBar: {
      id: 'lit_con',
      content:
        'Suffolk\'s annual 🔥LIT Conference is on April 8th, 2024! <a target="_blank" rel="noopener noreferrer" href="https://suffolklitlab.org/litcon/">Register now!🔥</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: 'The Document Assembly Line Project',
      logo: {
        alt: 'The Suffolk LIT Lab Logo',
        src: 'img/LITLab_white_and_gold.svg',
        srcDark: 'img/LITLab_white_and_gold.svg'
      },
      items: [
        // { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left', },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'doc',
          docId: 'intro',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          label: 'Code API'
        },
        {
          href: 'https://suffolklitlab.org/legal-tech-class/docs/introduction-to-docassemble',
          label: 'Intro to Docassemble',
          position: 'right',
        },
        {
          href: 'https://docassemble.org/docs.html',
          label: 'Docassemble Docs',
          position: 'right',
        },
        {
          href: 'https://courtformsonline.org',
          label: 'CourtFormsOnline',
          position: 'right',
        },
        {
          href: 'https://github.com/SuffolkLITLab/docassemble-AssemblyLine',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
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
              href: 'https://github.com/SuffolkLITLab/docassemble-AssemblyLine',
            },
          ],
        },
      ],
      copyright: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> - AssemblyLine Docs Built with Docusaurus.`,
    },
  },
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/framework/efiling',
            to: '/docs/efiling/overview'
          },
          {
            from: '/docs/automated_integrated_testing',
            to: '/docs/alkiln'
          }
        ]
      }
    ]
  ],
  themes: [
	  [
	  require.resolve("@easyops-cn/docusaurus-search-local"),
	  {
		  hashed: true,
	  }],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/',
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
        gtag: {
          trackingID: 'G-622Z2D6Q3Q',
          anonymizeIP: true
        }
      },
    ],
  ],
};
