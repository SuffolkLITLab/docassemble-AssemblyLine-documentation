module.exports = {
    mainSidebar: [
    ],
    get_started: [
        'get_started/intro',
        'get_started/al_project_architecture',
        'get_started/installation',
        {
            type: 'category',
            label: 'Setting up your team',
            items: [
                'get_started/bootcamp',
                'get_started/getting_started',
                'get_started/assembly_line_steps',
                'get_started/assembly_line_steps_roles',
                'get_started/assembly_line_steps_planning_time',
                'get_started/assembly_line_steps_step_by_step',
                'get_started/customization',
            ],
        },
        'contributors',
    ],
    docs: [
        'overview',
        {
            type: 'category',
            label: 'Authoring interviews',
            items: [
                'plan_interview',
                'authoring/working_with_teams',
                'pdf_templates',
                'docx_templates',
                'authoring/dynamic_phrasing_based_on_values',
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
            label: 'Writing good questions',
            items: [
                'question_style_overview',
                'style_guide_respect',
                // 'question_style_sensitivities',
                'style_guide_readability',
                'question_style_structure',
                'question_style_organize_fields',
                'question_style_help_your_user',
                'style_guide_formatting',
                'question_style_validation',
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
            ]
        },
        {
            type: 'category',
            label: 'Coding style guide',
            items: [
                'coding_style/coding_style_overview',
                'coding_style/python',
                'coding_style/yaml',
                'coding_style/yaml_structure',
                'coding_style/yaml_dynamic',
                'coding_style/yaml_interface',
                'coding_style/yaml_translation',
                'coding_style/defense',
                'coding_style/accessibility'
            ]
        },
        'framework/magic_variables',
        'framework/reserved_keywords',
        {
            "type": "category",
            "label": "AssemblyLine",
            "items": [
                'framework/algeneral',
                "reference/AssemblyLine/al_general",
                "reference/AssemblyLine/al_courts",
                'framework/aldocument',
                "reference/AssemblyLine/al_document",
                "reference/AssemblyLine/language",
                'framework/alreminders',
                "reference/AssemblyLine/sessions",
                {
                    type: 'category',
                    label: 'Answer sets',
                    items: [
                        'framework/answer_sets',
                        'framework/answer_set_intakes',
                    ]
                },
                'framework/navigation',
                'framework/error_actions',
            ]
        },
        'framework/alrecipes',
        {
            "type": "category",
            "label": "ALToolbox",
            "items": [
                'framework/altoolbox',
                {
                    type: 'category',
                    label: 'ALIncome',
                    items: [
                        "reference/ALToolbox/al_income",
                        'alincome/overview',
                        'alincome/expenses',
                        'alincome/jobs',
                        'alincome/itemizedjobs',
                    ]
                },
                "reference/ALToolbox/business_days",
                "reference/ALToolbox/copy_button",
                "reference/ALToolbox/misc",
                "reference/ALToolbox/save_input_data"
            ]
        },
        'complexity/complexity',
        'framework/github_feedback',
        'analytics/tracking_usage',
        {
            "label": "FormFyxer",
            "type": "category",
            "items": [
                "reference/formfyxer/lit_explorer",
                "reference/formfyxer/pdf_wrangling"
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
        }
    ]
};
