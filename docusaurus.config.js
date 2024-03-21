module.exports = {
  title: 'The Document Assembly Line',
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
      title: 'The Document Assembly Line',
      logo: {
        alt: 'The Suffolk LIT Lab Logo',
        src: 'img/LITLab_white_and_gold.svg',
        srcDark: 'img/LITLab_white_and_gold.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'dal',
          label: 'Get Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          label: 'API'
        },
        {
          type: 'dropdown',
          label: 'Docassemble',
          items: [
            {
              href: 'https://suffolklitlab.org/legal-tech-class/docs/introduction-to-docassemble',
              label: 'Intro to Docassemble',
            },
            {
              href: 'https://docassemble.org/docs.html',
              label: 'Docassemble Docs',
            },
          ]
        },
        // {
        //   href: 'https://courtformsonline.org',
        //   label: 'CourtFormsOnline',
        //   position: 'right',
        // },
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
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SuffolkLITLab/docassemble-AssemblyLine',
            },
          ],
        },
      ],
      copyright: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> | This documentation website is built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>.`,
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
          editUrl:
            'https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/',
        },

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
