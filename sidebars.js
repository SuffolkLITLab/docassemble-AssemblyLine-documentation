module.exports = {
    mainSidebar: [
        'intro',
        'getting_started_docassemble',
        {
            type: 'category',
            label: 'Setting up your own Assembly Line team',
            items: [
                'bootcamp',
                'getting_started',
                'assembly_line_steps',
                'assembly_line_steps_roles',
                'assembly_line_steps_planning_time',
                'assembly_line_steps_step_by_step',
                'customization/customization_overview',
            ],
        },
        'installation',
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
                'style_guide_respect',
                // 'question_style_sensitivities',
                'style_guide_readability',
                'question_style_structure',
                'question_style_organize_fields',
                'question_style_help_your_user',
                'style_guide_formatting',
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
                'question_library/ql_pronouns',
                'question_library/ql_language',
                'question_library/ql_terms_of_use',
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
                'coding_style/accessibility',
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
                'al_project_architecture',
                'framework/framework_overview',
                'framework/magic_variables',
                'framework/algeneral',
                'framework/aldocument',
                'framework/altoolbox',
                'framework/alrecipes',
                'framework/github_feedback',
                {
                    type: 'category',
                    label: 'ALKiln testing',
                    items: [
                        'alkiln_about',
                        'alkiln_advanced',
                    ]
                },
                'framework/answer_sets',
                'framework/answer_set_intakes',
                'framework/error_actions',
                'framework/reserved_keywords',
                'framework/alreminders',
            ]
        },
        {
            type: 'category',
            label: 'AL Income Module',
            items: [
                'alincome/overview',
                'alincome/expenses',
                'alincome/jobs',
                'alincome/itemizedjobs',
            ]
        },
        {
            type: 'category',
            label: 'E-filing',
            items: [
                'efiling/overview',
                'efiling/efiling_through_docassemble',
                'efiling/efiling_case_search',
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
    ],
    api: [
          require('./docs/reference/sidebar.json')["items"]
    ]
};
