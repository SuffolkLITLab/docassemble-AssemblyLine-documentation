module.exports = {
    mainSidebar: [
    ],
    get_started: [
        'get_started/intro',
        'get_started/al_project_architecture',
        'get_started/installation',
        'get_started/beginners_guide',
        {
            label: 'Interview Projects',
            collapsed: false,
            type: 'category',
            items: [
                'get_started/project_management',
                'get_started/working_with_teams',
            ],
        },
        'get_started/resources',
        {
            "type": "link",
            "label": "Developer documentation",
            "href": "/docs/overview",
            "description": "View developer documentation"
        },
        'get_started/development_roadmap',
        'contributors',
        {
            label: 'Archived Pages',
            type: 'category',
            items: [
                'archive/bootcamp',
            ],
        }
    ],
    docs: [
        'overview',
        {
            label: 'Authoring interviews',
            type: 'category',
            items: [
                'pdf_templates',
                'docx_templates',
                'authoring/dynamic_phrasing_based_on_values',
                'document_variables_reference',
                'name_formats',
                'alweaver_overview',
                'github',
                'customizing_interview',
                'writing_review_screen',
                'yaml_anatomy',
            ],
        },
        {
            label: 'Writing good questions',
            type: 'category',
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
                    label: 'Question library',
                    type: 'category',
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
            label: 'Coding style guide',
            type: 'category',
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
        'translation',
        {
            "type": "html",
            "value": "Assembly Line components",
            "className": "sidebar-heading",
            "defaultStyle": true
        },
        {
            "type": "category",
            "label": "AssemblyLine",
            "items": [
                'components/AssemblyLine/al_general_overview',
                'components/AssemblyLine/al_document_overview',
                'components/AssemblyLine/al_reminders_overview',
                {
                    label: 'Answer sets',
                    type: 'category',
                    items: [
                        'components/AssemblyLine/answer_sets',
                        'components/AssemblyLine/answer_set_intakes',
                    ]
                },
                'components/AssemblyLine/navigation',
                'components/AssemblyLine/error_actions',
                "components/AssemblyLine/al_general",
                "components/AssemblyLine/al_courts",
                "components/AssemblyLine/al_document",
                "components/AssemblyLine/language",
                "components/AssemblyLine/sessions",
            ]
        },
        'components/ALRecipes/alrecipes_overview',
        {
            "type": "category",
            "label": "ALToolbox",
            "items": [
                'components/ALToolbox/altoolbox_overview',
                {
                    label: 'ALIncome',
                    type: 'category',
                    items: [
                        'components/ALToolbox/al_income_overview',
                        'components/ALToolbox/al_income_expenses',
                        'components/ALToolbox/al_income_jobs',
                        'components/ALToolbox/al_income_itemizedjobs',
                    ]
                },
                "components/ALToolbox/al_income",
                "components/ALToolbox/business_days",
                "components/ALToolbox/copy_button",
                "components/ALToolbox/misc",
                "components/ALToolbox/save_input_data",
                "components/ALToolbox/llms",
            ]
        },
        'components/ALThemeTemplate/althemetemplate_overview',
        'components/RateMyPDF/ratemypdf_overview',
        'components/GithubFeedbackForm/githubfeedbackform_overview',
        'components/InterviewStats/interviewstats_overview',
        {
            "label": "FormFyxer",
            "type": "category",
            "items": [
                "components/formfyxer/lit_explorer",
                "components/formfyxer/docx_wrangling",
                "components/formfyxer/pdf_wrangling"
            ]
        },
        {
            label: 'E-filing',
            type: 'category',
            items: [
                'efiling/overview',
                'efiling/efiling_through_docassemble',
                'efiling/efiling_case_search',
                'efiling/efiling_codes',
                'efiling/monitoring',
            ]
        },
        {
            label: 'ALKiln',
            type: 'category',
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
