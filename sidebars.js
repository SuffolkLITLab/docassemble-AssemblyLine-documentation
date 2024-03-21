module.exports = {
    mainSidebar: [
    ],
    dal: [
        'intro',
        {
            type: 'category',
            label: 'Setting Up Your Team',
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
        'getting_started_docassemble',
        {
            type: 'category',
            label: 'Authoring Your Interview',
            items: [
                'plan_interview',
                'pdf_templates',
                'docx_templates',
                'document_variables_reference',
                'alweaver_overview',
                'customizing_interview',
                'writing_review_screen',
                'yaml_anatomy',
                'github',
            ],
        },
        {
            type: 'category',
            label: 'Writing Good Questions',
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
        'complexity/complexity',
        'contributors',
    ],
    docs: [
        'installation',
        'al_project_architecture',
        'framework/magic_variables',
        'framework/reserved_keywords',
        {
            type: 'category',
            label: 'Question Library',
            items: [
                'question_library/ql_names',
                'question_library/ql_addresses',
                'question_library/ql_gender',
                'question_library/ql_pronouns',
                'question_library/ql_language',
                'question_library/ql_terms_of_use',
            ]
        },
        'framework/alrecipes',
        'framework/algeneral',
        'framework/aldocument',
        'framework/altoolbox',
        {
            type: 'category',
            label: 'ALIncome',
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
                'efiling/monitoring',
            ]
        },
        {
            type: 'category',
            label: 'Answer Sets',
            items: [
                'framework/answer_sets',
                'framework/answer_set_intakes',
            ]
        },
        'framework/alreminders',
        'framework/github_feedback',
        'framework/error_actions',
        {
            type: 'category',
            label: 'ALKiln',
            items: [
                // WIPs
                'alkiln/alkiln_intro',
                // Old
                'alkiln/alkiln_about',
                'alkiln/alkiln_advanced',
                // WIPs
                'alkiln/alkiln_setup',
                'alkiln/alkiln_writing',
                'alkiln/alkiln_troubleshooting',
                'alkiln/alkiln_security',
                'alkiln/alkiln_deprecated',
            ]
        },
        {
            type: 'category',
            label: 'Analytics',
            items: [
                'analytics/tracking_usage'
            ]
        },
    ],
    api: [
        require('./docs/reference/sidebar.json')["items"]
    ]
};
