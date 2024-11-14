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
    // Keep for the next LIT Con
    announcementBar: {
      id: 'lit_con',
      content:
        'Save the date for Suffolk\'s annual 🔥LIT Conference🔥 on April 7th, 2025! <a target="_blank" rel="noopener noreferrer" href="https://suffolklitlab.org/litcon/">View past LITCons</a>',
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
            to: '/',
            from: '/docs'
          },
          {
            to: '/docs/get_started',
            from: '/docs/intro'
          },
          {
            to: '/docs/get_started/al_project_architecture',
            from: '/docs/al_project_architecture'
          },
          {
            to: '/docs/get_started/installation',
            from: '/docs/installation'
          },
          {
            to: '/docs/get_started/project_management',
            from: [
              '/docs/assembly_line_steps',
              '/docs/assembly_line_steps/steps',
              '/docs/get_started/assembly_line_steps',
              '/docs/get_started/assembly_line_steps/steps',
              '/docs/get_started/roadmap'
            ]
          },
          {
            to: '/docs/get_started/project_management#identify-key-roles--responsibilities',
            from: [
              '/docs/assembly_line_steps/roles',
              '/docs/get_started/assembly_line_steps/roles'
            ]
          },
          {
            to: '/docs/archive/bootcamp',
            from: '/docs/bootcamp'
          },
          {
            to: '/docs/get_started/planning',
            from: '/docs/planning'
          },
          {
            to: '/docs/get_started/working_with_teams',
            from: '/docs/authoring/working_with_teams'
          },
          {
            to: '/docs/translation',
            from: '/docs/translation/translation'
          },
          {
            to: '/docs/components/AssemblyLine/al_general_overview',
            from: '/docs/framework/algeneral'
          },
          {
            to: '/docs/components/AssemblyLine/al_document_overview',
            from: '/docs/framework/aldocument'
          },
          {
            to: '/docs/components/AssemblyLine/al_reminders_overview',
            from: '/docs/framework/alreminders'
          },
          {
            to: '/docs/components/AssemblyLine/answer_sets',
            from: '/docs/framework/answer_sets'
          },
          {
            to: '/docs/components/AssemblyLine/answer_set_intakes',
            from: '/docs/framework/answer_set_intakes'
          },
          {
            to: '/docs/components/AssemblyLine/navigation',
            from: '/docs/framework/navigation'
          },
          {
            to: '/docs/components/AssemblyLine/error_actions',
            from: '/docs/framework/error_actions'
          },
          {
            to: '/docs/components/AssemblyLine/al_general',
            from: '/docs/reference/AssemblyLine/al_general'
          },
          {
            to: '/docs/components/AssemblyLine/al_courts',
            from: '/docs/reference/AssemblyLine/al_courts'
          },
          {
            to: '/docs/components/AssemblyLine/al_document',
            from: '/docs/reference/AssemblyLine/al_document'
          },
          {
            to: '/docs/components/AssemblyLine/language',
            from: '/docs/reference/AssemblyLine/language'
          },
          {
            to: '/docs/components/AssemblyLine/sessions',
            from: '/docs/reference/AssemblyLine/sessions'
          },
          {
            to: '/docs/components/ALRecipes/alrecipes_overview',
            from: '/docs/framework/alrecipes'
          },
          {
            to: '/docs/components/ALToolbox/altoolbox_overview',
            from: '/docs/framework/altoolbox'
          },
          {
            to: '/docs/components/ALToolbox/al_income_overview',
            from: '/docs/alincome/overview'
          },
          {
            to: '/docs/components/ALToolbox/al_income_expenses',
            from: '/docs/alincome/expenses'
          },
          {
            to: '/docs/components/ALToolbox/al_income_itemizedjobs',
            from: '/docs/alincome/itemizedjobs'
          },
          {
            to: '/docs/components/ALToolbox/al_income_jobs',
            from: '/docs/alincome/jobs'
          },
          {
            to: '/docs/components/ALToolbox/al_income',
            from: '/docs/reference/ALToolbox/al_income'
          },
          {
            to: '/docs/components/ALToolbox/business_days',
            from: '/docs/reference/ALToolbox/business_days'
          },
          {
            to: '/docs/components/ALToolbox/copy_button',
            from: '/docs/reference/ALToolbox/copy_button'
          },
          {
            to: '/docs/components/ALToolbox/misc',
            from: '/docs/reference/ALToolbox/misc'
          },
          {
            to: '/docs/components/ALToolbox/save_input_data',
            from: '/docs/reference/ALToolbox/save_input_data'
          },
          {
            to: '/docs/components/ALToolbox/llms',
            from: '/docs/reference/ALToolbox/llms'
          },
          {
            to: '/docs/components/ALThemeTemplate/althemetemplate_overview',
            from: '/docs/framework/althemetemplate'
          },
          {
            to: '/docs/components/RateMyPDF/ratemypdf_overview',
            from: '/docs/complexity/complexity'
          },
          {
            to: '/docs/components/GithubFeedbackForm/githubfeedbackform_overview',
            from: '/docs/framework/github_feedback'
          },
          {
            to: '/docs/components/InterviewStats/interviewstats_overview',
            from: '/docs/analytics/tracking_usage'
          },
          {
            to: '/docs/components/FormFyxer/lit_explorer',
            from: '/docs/reference/formfyxer/lit_explorer'
          },
          {
            to: '/docs/components/FormFyxer/pdf_wrangling',
            from: '/docs/reference/formfyxer/pdf_wrangling'
          },
          {
            to: '/docs/components/EFSPIntegration/efsp_overview',
            from: [
              '/docs/efiling/overview',
              '/docs/framework/efiling'
            ]
          },
          {
            to: '/docs/components/EFSPIntegration/efiling_through_docassemble',
            from: '/docs/efiling/efiling_through_docassemble'
          },
          {
            to: '/docs/components/EFSPIntegration/efiling_case_search',
            from: '/docs/efiling/efiling_case_search'
          },
          {
            to: '/docs/components/EFSPIntegration/efiling_codes',
            from: '/docs/efiling/efiling_codes'
          },
          {
            to: '/docs/components/EFSPIntegration/efiling_monitoring',
            from: '/docs/efiling/monitoring'
          },
          {
            to: '/docs/components/ALKiln/alkiln_intro',
            from: [
              '/docs/alkiln/alkiln_intro',
              '/docs/automated_integrated_testing'
            ]
          },
          {
            to: '/docs/components/ALKiln/alkiln_about',
            from: '/docs/alkiln/alkiln_about'
          },
          {
            to: '/docs/components/ALKiln/alkiln_advanced',
            from: '/docs/alkiln/alkiln_advanced'
          },
          {
            to: '/docs/components/ALKiln/alkiln_setup',
            from: '/docs/alkiln/alkiln_setup'
          },
          {
            to: '/docs/components/ALKiln/alkiln_writing_tests',
            from: '/docs/alkiln/alkiln_writing'
          },
          {
            to: '/docs/components/ALKiln/alkiln_troubleshooting',
            from: '/docs/alkiln/alkiln_troubleshooting'
          },
          {
            to: '/docs/components/ALKiln/alkiln_security',
            from: '/docs/alkiln/alkiln_security'
          },
          {
            to: '/docs/components/ALKiln/alkiln_deprecated',
            from: '/docs/alkiln/alkiln_deprecated'
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
        blog: false,
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
