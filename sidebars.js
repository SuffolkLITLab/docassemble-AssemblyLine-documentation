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
        'customization/customization_overview',
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
                'github',
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
                'question_style_validation'
            ]
        },
        {
            type: 'category',
            label: 'Question library',
            items: [
                'question_library/ql_names',
                'question_library/ql_addresses',
                'question_library/ql_gender',
                'question_library/ql_language',
            ]
        },
        {
            type: 'category',
            label: 'Coding Style Guide',
            items: [
                'coding_style/coding_style_overview',
                'coding_style/python',
                'coding_style/yaml',
                'coding_style/yaml_structure',
                'coding_style/yaml_dynamic',
                'coding_style/yaml_interface',
                'coding_style/yaml_translation',
                'coding_style/defense',
                'coding_style/docs_style_guide'
            ]
        },
        {
            type: 'category',
            label: 'Measuring form complexity',
            items: [
                'complexity/complexity'
            ]
        },
        //'name_formats',
        {
            type: 'category',
            label: 'Feature documentation',
            items: [
                'framework/framework_overview',
                'framework/magic_variables',
                'framework/algeneral',
                'framework/aldocument',
                'framework/altoolbox',
                'framework/alrecipes',
                'automated_testing',
                'framework/answer_sets',
                'framework/reserved_keywords',
            ]
        },
        {
            type: 'category',
            label: 'E-filing',
            items: [
                'efiling/overview',
                'efiling/efiling_through_docassemble'
            ]
        },
        {
            type: 'category',
            label: 'Analytics',
            items: [
                'analytics/tracking_usage'
            ]
        },
        'contributors',
        require('./docs/reference/sidebar.json')
    ],
};
