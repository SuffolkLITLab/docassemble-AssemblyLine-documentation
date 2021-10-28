module.exports = {
  someSidebar: [
    'intro',
    'bootcamp',
    'getting_started',
    'installation',
    'al_project_architecture',
    {
      type: 'category',
      label: 'Generate Code',
      items: [
        'alweaver_overview',
	'customizing_interview',
        'pdfs',
        'document_variables_reference',
        'yaml_anatomy',
      ],
    },
    'content_guide',
    'github',
    'name_formats',
    'docs_style_guide',
    require('./docs/reference/sidebar.json')
  ],
};
