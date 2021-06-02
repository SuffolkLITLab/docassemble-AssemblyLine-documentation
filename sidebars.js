module.exports = {
  someSidebar: {
    'Using the AssemblyLine Framework': ['intro',
    'bootcamp',
    'getting_started',
    {
      type: 'category',
      label: 'Generate Code',
      items: [
        'alweaver_overview',
        'pdfs',
        'document_variables_reference',
        'yaml_anatomy',
      ],
    },
    'content_guide',
    'github',
    'name_formats',
    'docs_style_guide',
    ],	
    "API Documentation": require("./docs/reference/sidebar.json")
  },
};
