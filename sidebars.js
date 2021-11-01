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
    {
      type: 'category',
      label: 'Content Style Guide',
      items: [
        'style_guide_readability'
      ]
    },
    {
      type: 'category',
      label: 'Coding Style Guide',
      items: [
        'coding_style',
        'coding_style_python',
        'coding_style_yaml'
      ]
    },
    'github',
    'name_formats',
    'docs_style_guide',
    require('./docs/reference/sidebar.json')
  ],
};
