module.exports = {
  someSidebar: [
    'intro',
    'bootcamp',
    'getting_started',
    {
      type: 'category',
      label: 'Assembly Line Process',
      items: [
        'assembly_line_steps',
        'assembly_line_steps_roles',
        'assembly_line_steps_planning_time',
        'assembly_line_steps_step_by_step',
      ],
    },
    'installation',
    'al_project_architecture',
    {
      type: 'category',
      label: 'Authoring your interview',
      items: [
        'plan_interview',
        'pdf_templates',
        'docx_templates',
        'document_variables_reference',
        'alweaver_overview',
      	'customizing_interview',
        'yaml_anatomy',
      ],
    },
    {
      type: 'category',
      label: 'How to write good questions',
      items: [
        'question_style_overview',
        'style_guide_readability',
        'style_guide_formatting',
        'style_guide_respect',
        'question_style_structure',
        'question_style_help_your_user',
        'question_style_organize_fields',
        'question_style_sensitivities',
      ]
    },
    {
      type: 'category',
      label: 'Question library',
      items: [
        'question_library/ql_names',
        'question_library/ql_addresses'
      ]
    },
    {
      type: 'category',
      label: 'Coding Style Guide',
      items: [
        'coding_style',
        'coding_style_python',
        'coding_style_yaml',
        'coding_style_yaml_structure',
        'coding_style_yaml_dynamic',
        'coding_style_yaml_interface',
        'coding_style_yaml_translation',
        'coding_style_defense',
        'docs_style_guide'
      ]
    },
    'github',
    //'name_formats',
    {
      type: 'category',
      label: 'Feature documentation',
      items: [
        'framework/framework_overview',
        'framework/altoolbox',
        'automated_testing',
      ]
    },
    require('./docs/reference/sidebar.json')
  ],
};
