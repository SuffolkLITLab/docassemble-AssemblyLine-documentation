module.exports = {
  title: 'The Document Assembly Line',
  tagline: 'From paper to webform, made easier',
  url: 'https://assemblyline.suffolklitlab.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SuffolkLITLab', // the GitHub org name.
  projectName: 'docassemble-AssemblyLine-documentation', // the repo name.
  themeConfig: {
    // Keeping for the next LIT Con
    // announcementBar: {
    //   id: 'lit_con',
    //   content:
    //     'Suffolk\'s annual 🔥LIT Conference is on April 8th, 2024! <a target="_blank" rel="noopener noreferrer" href="https://suffolklitlab.org/litcon/">Register now!🔥</a>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: false,
    // },
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
          sidebarId: 'get_started',
          label: 'Get Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          label: 'Documentation',
        },
        {
          href: 'https://suffolklitlab.org/legal-tech-class/docs/introduction-to-docassemble',
          label: 'Legal Tech Class',
          position: 'right',
        },
        {
          href: 'https://docassemble.org/docs.html',
          label: 'Docassemble Docs',
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
            from: '/docs',
            to: '/'
          },
          {
            from: '/docs/framework/efiling',
            to: '/docs/efiling/overview'
          },
          {
            from: '/docs/automated_integrated_testing',
            to: '/docs/alkiln'
          },
          {
            from: '/docs/intro',
            to: '/docs/get_started'
          },
          {
            from: '/docs/al_project_architecture',
            to: '/docs/get_started/al_project_architecture'
          },
          {
            from: '/docs/installation',
            to: '/docs/get_started/installation'
          },
          {
            from: '/docs/getting_started',
            to: '/docs/get_started/assembly_line_setup'
          },
          {
            from: '/docs/assembly_line_steps',
            to: '/docs/get_started/assembly_line_steps'
          },
          {
            from: '/docs/assembly_line_steps/roles',
            to: '/docs/get_started/interview_project_roadmap#identify-key-roles--responsibilities'
          },
          {
            from: '/docs/assembly_line_steps/planning_time',
            to: '/docs/get_started/assembly_line_steps/planning_time'
          },
          {
            from: '/docs/assembly_line_steps/steps',
            to: '/docs/get_started/assembly_line_steps/steps'
          },
          {
            from: '/docs/customization',
            to: '/docs/get_started/customization'
          },
          {
            from: '/docs/bootcamp',
            to: '/docs/archive/bootcamp'
          },
          {
            from: '/docs/planning',
            to: '/docs/get_started/planning'
          },
          {
            from: '/docs/authoring/working_with_teams',
            to: '/docs/get_started/working_with_teams'
          },
          {
            from: '/docs/get_started/assembly_line_steps/roles',
            to: '/docs/get_started/interview_project_roadmap#identify-key-roles--responsibilities'
          },
        ]
      }
    ]
  ],
  themes: [
	  [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      }
    ],
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
