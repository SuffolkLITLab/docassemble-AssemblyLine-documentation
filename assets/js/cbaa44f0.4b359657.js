"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5264],{8280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(4848),s=n(8453);const a={id:"docx_templates",title:"Working with DOCX files",sidebar_label:"Working with DOCX files",slug:"/docx"},o=void 0,l={id:"docx_templates",title:"Working with DOCX files",description:"DOCX templates can be edited in any editor that is able to edit DOCX files, including:",source:"@site/docs/docx_templates.md",sourceDirName:".",slug:"/docx",permalink:"/docassemble-AssemblyLine-documentation/docs/docx",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/docx_templates.md",tags:[],version:"current",frontMatter:{id:"docx_templates",title:"Working with DOCX files",sidebar_label:"Working with DOCX files",slug:"/docx"},sidebar:"docs",previous:{title:"Working with PDF files",permalink:"/docassemble-AssemblyLine-documentation/docs/pdfs"},next:{title:"Dynamic phrasing based on values",permalink:"/docassemble-AssemblyLine-documentation/docs/authoring/dynamic_phrasing_based_on_values"}},r={},d=[{value:"DOCX field labels are just typed in",id:"docx-field-labels-are-just-typed-in",level:2},{value:"Start by just adding the basic variables in your DOCX template, without repeated elements or advanced code",id:"start-by-just-adding-the-basic-variables-in-your-docx-template-without-repeated-elements-or-advanced-code",level:2},{value:"Use the Assembly Line&#39;s standard field names for DOCX templates",id:"use-the-assembly-lines-standard-field-names-for-docx-templates",level:2},{value:"Use a space before and after the variable name in the field statements",id:"use-a-space-before-and-after-the-variable-name-in-the-field-statements",level:2},{value:"Dealing with whitespace and conditional text",id:"dealing-with-whitespace-and-conditional-text",level:2},{value:"Use <code>{%p %}</code> and <code>{%tr %}</code> to control white space at the paragraph level",id:"use-p--and-tr--to-control-white-space-at-the-paragraph-level",level:3},{value:"Use <code>{% if %}</code> for conditional text inside a single paragraph",id:"use--if--for-conditional-text-inside-a-single-paragraph",level:3},{value:"Use <code>output_checkbox()</code> for conditional checkbox fields that look like paper forms",id:"use-output_checkbox-for-conditional-checkbox-fields-that-look-like-paper-forms",level:3},{value:"Changing the appearance of inserted variable text",id:"changing-the-appearance-of-inserted-variable-text",level:2},{value:"Start with Microsoft Word&#39;s formatting for simple use cases",id:"start-with-microsoft-words-formatting-for-simple-use-cases",level:3},{value:"Use filters, functions, and methods for advanced changes to variables",id:"use-filters-functions-and-methods-for-advanced-changes-to-variables",level:3},{value:"Use Jinja2 filters to change capitalization",id:"use-jinja2-filters-to-change-capitalization",level:3},{value:"Use <code>fix_punctuation()</code> to add an ending <code>.</code>",id:"use-fix_punctuation-to-add-an-ending-",level:3},{value:"Tips for dealing with formatting issues caused by variable-length documents in Word",id:"tips-for-dealing-with-formatting-issues-caused-by-variable-length-documents-in-word",level:2},{value:"Use &quot;keep lines together&quot; and &quot;keep with next&quot; for notary blocks, signature blocks, and other text that can&#39;t split across pages",id:"use-keep-lines-together-and-keep-with-next-for-notary-blocks-signature-blocks-and-other-text-that-cant-split-across-pages",level:3},{value:"Use manual page breaks rather than extra typed paragraphs",id:"use-manual-page-breaks-rather-than-extra-typed-paragraphs",level:3},{value:"Working with lists inside a DOCX file",id:"working-with-lists-inside-a-docx-file",level:2},{value:"Iterate over every item in the list",id:"iterate-over-every-item-in-the-list",level:3},{value:"Get the index of the current loop",id:"get-the-index-of-the-current-loop",level:3},{value:"Use the list at a certain starting/ending value",id:"use-the-list-at-a-certain-startingending-value",level:3},{value:"Filter the list with DAList.filter()",id:"filter-the-list-with-dalistfilter",level:3},{value:"Create a sum with the <code>sum</code> filter",id:"create-a-sum-with-the-sum-filter",level:3},{value:"Use <code>selectattr</code> for more complex comparisons",id:"use-selectattr-for-more-complex-comparisons",level:3},{value:"Troubleshooting DOCX files",id:"troubleshooting-docx-files",level:2},{value:"Fixing corrupt or potentially corrupt DOCX files",id:"fixing-corrupt-or-potentially-corrupt-docx-files",level:3},{value:"Troubleshooting problems with conversion to PDF",id:"troubleshooting-problems-with-conversion-to-pdf",level:3},{value:"Installing the proper fonts",id:"installing-the-proper-fonts",level:4},{value:"Problems with lists and numbering after automation",id:"problems-with-lists-and-numbering-after-automation",level:3},{value:"Quality control checklist",id:"quality-control-checklist",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"DOCX templates can be edited in any editor that is able to edit DOCX files, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Microsoft Word, or Microsoft Word Online"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.libreoffice.org/",children:"Libre Office"})}),"\n",(0,i.jsx)(t.li,{children:"Google Docs"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We recommend using Microsoft Word as your editor when possible if the document\nmay need additional editing by the user."}),"\n",(0,i.jsx)(t.p,{children:"If your document will be converted into a PDF for the user, it may be useful to open the\nDOCX file in Libre Office. Docassemble, by default, uses Libre Office to convert the Word\nfile to PDF. Sometimes formatting glitches will be visible only when the document is opened in Libre Office."}),"\n",(0,i.jsx)(t.p,{children:"DOCX files can be very simple to work with, but we've taken the time to describe some common tasks,\nsuch as working with tables and lists, in more detail here. You have much more control over those\nfeatures in a DOCX template than you do in a PDF."}),"\n",(0,i.jsx)(t.h2,{id:"docx-field-labels-are-just-typed-in",children:"DOCX field labels are just typed in"}),"\n",(0,i.jsxs)(t.p,{children:["Fields are added to DOCX templates simply by typing the variable name in the body of your\nMicrosoft Word document, surrounded by two sets of curly braces, like: ",(0,i.jsx)(t.code,{children:"{{ variable_name }}"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The syntax to type in fields in a DOCX template is named ",(0,i.jsx)(t.code,{children:"jinja2"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/jinja2",children:"Learn more about Jinja2"}),"\nand about ",(0,i.jsx)(t.a,{href:"https://docassemble.org/docs/documents.html#docx%20template%20file",children:"DOCX templates in Docassemble"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The most common kinds of fields you will use again and again\nare:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Fill in the blank fields, which are simply surrounded with double curly brackets: ",(0,i.jsx)(t.code,{children:"{{ field_name }}"})]}),"\n",(0,i.jsxs)(t.li,{children:["Conditional text with ",(0,i.jsx)(t.code,{children:"{% if some_condition %}"})," and ",(0,i.jsx)(t.code,{children:"{% endif %}"}),", or the slight variation ",(0,i.jsx)(t.code,{children:"{%p if some_condition %} ... {%p endif %}"})," to make a whole paragraph conditional."]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsxs)(t.mdxAdmonitionTitle,{children:["Docassemble uses the ",(0,i.jsx)(t.a,{href:"https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax",children:"docxtpl"})," variant of Jinja2"]}),(0,i.jsxs)(t.p,{children:["docxtpl has slight differences to the more\ncommon Jinja2 format used in HTML documents. If a feature isn't working as\nyou expect, make sure to check the ",(0,i.jsx)(t.a,{href:"https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax",children:"docxtpl documentation"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of a DOCX template:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja2",children:'{{ other_parties[0].address_block() }}\n\nDear {{ other_parties[0] }}:\n\nI am writing today because my {{ house_or_apartment }} is not up to code.\n\nSpecifically,\n\n* {%p for item in problems %}\n* {{ item }}\n* {%p endfor %}\n\n{%p if previously_notified %}\nI already told you about this problem on {{ notification_date.format("MM/dd/yyyy") }}\n{%p endif %}\n\nPlease solve this problem promptly.\n\nYours,\n\n{{ users[0].signature_if_final(i) }}\n{{ users[0] }}\n'})}),"\n",(0,i.jsx)(t.h3,{id:""}),"\n",(0,i.jsx)(t.h2,{id:"start-by-just-adding-the-basic-variables-in-your-docx-template-without-repeated-elements-or-advanced-code",children:"Start by just adding the basic variables in your DOCX template, without repeated elements or advanced code"}),"\n",(0,i.jsx)(t.p,{children:"Before you run your form through the Weaver, start out with simple logic.\nFor example:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["wait to add ",(0,i.jsx)(t.code,{children:"for"})," loops that print out each item in a list"]}),"\n",(0,i.jsxs)(t.li,{children:["avoid using custom methods in variable names, other than the ones listed on\nthe ",(0,i.jsx)(t.a,{href:"/docassemble-AssemblyLine-documentation/docs/label_variables",children:"Field labels to use in template files"})," page."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The Weaver may not know how to properly handle some more advanced formatting if\nyou add it before you upload it to the Weaver. You can add these refining details\nafter you run the form through the Weaver. Use the first draft just to add placeholders\nwhere information will go."}),"\n",(0,i.jsx)(t.h2,{id:"use-the-assembly-lines-standard-field-names-for-docx-templates",children:"Use the Assembly Line's standard field names for DOCX templates"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.a,{href:"/docassemble-AssemblyLine-documentation/docs/label_variables",children:"specific names for labels"})," for full\ncompatibility with the Assembly Line framework."]}),"\n",(0,i.jsx)(t.h2,{id:"use-a-space-before-and-after-the-variable-name-in-the-field-statements",children:"Use a space before and after the variable name in the field statements"}),"\n",(0,i.jsx)(t.p,{children:"It's best to always use a space before and after the field name or conditional\ninstruction when using Jinja2 in a DOCX."}),"\n",(0,i.jsxs)(t.p,{children:["A few letters that can be typed directly after the ",(0,i.jsx)(t.code,{children:"{{"})," or ",(0,i.jsx)(t.code,{children:"{%"})," characters have\nspecial meaning. Specifically:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"r"}),', which means to treat the field as "raw" formatted DOCX run']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"p"}),", which means to remove the paragraph that the statement is in, and potentially replace with a new, preformatted paragraph"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tr"}),", same as ",(0,i.jsx)(t.code,{children:"p"})," but for table rows"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tc"}),", same as ",(0,i.jsx)(t.code,{children:"p"})," but for table columns"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Always using a space helps avoid you forgetting these special cases. It also helps with readability."}),"\n",(0,i.jsx)(t.h2,{id:"dealing-with-whitespace-and-conditional-text",children:"Dealing with whitespace and conditional text"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.mdxAdmonitionTitle,{children:["Avoid using ",(0,i.jsx)(t.code,{children:"-"})," to control whitespace"]}),(0,i.jsxs)(t.p,{children:["While in standard Jinja2 you can use a ",(0,i.jsx)(t.code,{children:"-"})," to control whitespace, this won't\nwork reliably in Docassemble. That is because Docassemble uses ",(0,i.jsx)(t.a,{href:"https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax",children:"docxtpl"}),", not the standard Jinja2."]}),(0,i.jsx)(t.p,{children:"Avoid using this feature in your templates."})]}),"\n",(0,i.jsxs)(t.h3,{id:"use-p--and-tr--to-control-white-space-at-the-paragraph-level",children:["Use ",(0,i.jsx)(t.code,{children:"{%p %}"})," and ",(0,i.jsx)(t.code,{children:"{%tr %}"})," to control white space at the paragraph level"]}),"\n",(0,i.jsxs)(t.p,{children:["When inserting conditional paragraphs, make sure that they are wrapped in ",(0,i.jsx)(t.code,{children:"{%p %}"})," tags, like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:"{%p if some_condition %}\nThis is my conditional paragraph.\n{%p endif %}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["But make sure that the ",(0,i.jsx)(t.code,{children:"{%p %}"})," is truly in its own paragraph,\nnot just a soft carriage return. You can check by toggling the ",(0,i.jsx)(t.a,{href:"https://support.microsoft.com/en-us/office/turn-formatting-marks-on-or-off-b166e811-d762-4f24-8328-d897cdace459",children:"show formatting marks"})," option in Word."]}),"\n",(0,i.jsxs)(t.p,{children:["Also use ",(0,i.jsx)(t.code,{children:"{%p if %}"})," to control conditional items in a list, like this:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"{%p if condition %}"})}),"\n",(0,i.jsx)(t.li,{children:"Conditional text"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"{%p endif %}"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Keep the condition inside the list itself. Avoid using the condition in its own\nparagraph, as when Docassemble merges the two lists they may behave unpredictably."}),"\n",(0,i.jsxs)(t.p,{children:["Similarly, use ",(0,i.jsx)(t.code,{children:"tc"})," and ",(0,i.jsx)(t.code,{children:"tr"})," to control repeated or conditional rows.\nKeep this in-line in one table when it makes sense. Avoid using ",(0,i.jsx)(t.code,{children:"{%p %}"})," and multiple tables, as this can lead to unexpected table formatting when the two\nseparate tables are merged."]}),"\n",(0,i.jsx)(t.p,{children:"For example, to repeat rows in a table:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute 1"}),(0,i.jsx)(t.th,{children:"Attribute 2"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{%tr for item in my_list %}"})}),(0,i.jsx)(t.td,{children:"\xa0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ item.attribute_1 }}"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ item.attribute_2 }}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{%tr endfor %}"})}),(0,i.jsx)(t.td,{children:"\xa0"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The same ",(0,i.jsx)(t.code,{children:"{%tr %}"})," can be used for conditional rows, and ",(0,i.jsx)(t.code,{children:"{%tc %}"})," works\nsimilarly for conditional or repeated columns."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"{%tr %}"})," and ",(0,i.jsx)(t.code,{children:"{%tc %}"})," should always be in their own row or column."]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsxs)(t.mdxAdmonitionTitle,{children:["Don't use ",(0,i.jsx)(t.code,{children:"{%p %}"})," inside a table cell"]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"{%p %}"})," can lead to unexpected results inside a table. Use ",(0,i.jsx)(t.code,{children:"{%tr %}"})," instead."]})]}),"\n",(0,i.jsxs)(t.h3,{id:"use--if--for-conditional-text-inside-a-single-paragraph",children:["Use ",(0,i.jsx)(t.code,{children:"{% if %}"})," for conditional text inside a single paragraph"]}),"\n",(0,i.jsxs)(t.p,{children:["If you have a few conditional words in a paragraph, you can use ",(0,i.jsx)(t.code,{children:"{% if %}"}),"\nin-line in the paragraph. For example:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'{%if user == "self" %}I request{% else %}{{ user }} requests{% endif %} the following:'})}),"\n",(0,i.jsx)(t.p,{children:"If you have many repeated examples of the same condition, though, you may be\nbetter off making the whole paragraph conditional."}),"\n",(0,i.jsx)(t.p,{children:"When using in-line conditions, make sure you consistently place the space across\neach condition."}),"\n",(0,i.jsxs)(t.h3,{id:"use-output_checkbox-for-conditional-checkbox-fields-that-look-like-paper-forms",children:["Use ",(0,i.jsx)(t.code,{children:"output_checkbox()"})," for conditional checkbox fields that look like paper forms"]}),"\n",(0,i.jsxs)(t.p,{children:["In some cases, you need to make your Word Document look like a document that was\nfilled in by hand. ",(0,i.jsx)(t.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/framework/altoolbox#shorthand-function-to-display-a-checkbox-in-replace-of-a-truefalse-boolean-value-in-a-docx-template",children:(0,i.jsx)(t.code,{children:"output_checkbox()"})})," can be used to add a checkbox in-line in your document."]}),"\n",(0,i.jsx)(t.p,{children:"These two expressions are equivalent, but the second version takes substantially less\nspace in your template:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Using if/else/endif"}),(0,i.jsx)(t.th,{children:"Using output_checkbox()"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{%if condition %}[X]{% else %}[  ]{% endif %}"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ output_checkbox(condition) }}"})})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"changing-the-appearance-of-inserted-variable-text",children:"Changing the appearance of inserted variable text"}),"\n",(0,i.jsx)(t.h3,{id:"start-with-microsoft-words-formatting-for-simple-use-cases",children:"Start with Microsoft Word's formatting for simple use cases"}),"\n",(0,i.jsx)(t.p,{children:"In general, to control the color, italicization, bold, and other features\nof the text, you can use Microsoft Word's built-in functionality."}),"\n",(0,i.jsxs)(t.p,{children:["Make sure that the bold formatting, etc., is applied to the whole label, including the starting and ending ",(0,i.jsx)(t.code,{children:"{{ }}"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsxs)(t.p,{children:["This is an inline formatted ",(0,i.jsx)(t.em,{children:"{{ variable }}"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"use-filters-functions-and-methods-for-advanced-changes-to-variables",children:"Use filters, functions, and methods for advanced changes to variables"}),"\n",(0,i.jsx)(t.p,{children:"For more advanced changes to the variable text, you will use a mix of\nPython functions, methods, and Jinja2 filters. It's not always intuitive which\nto use when. In some cases, you can use more than one."}),"\n",(0,i.jsx)(t.p,{children:"Functions and methods are either built-in to Python, Docassemble, or a custom class you create. Note that some Python functions won't work in a DOCX template.\nIf you run into a function that doesn't work as expected, look to see if there's\nan equivalent filter to replace it. In most cases there will be."}),"\n",(0,i.jsxs)(t.p,{children:["This is a function, which surrounds the variable name in ",(0,i.jsx)(t.code,{children:"()"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"{{ function_wrapper(some_variable, optional_parameter) }}"})}),"\n",(0,i.jsx)(t.p,{children:"This is a method:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"{{ some_variable.method(optional_parameter) }}"})}),"\n",(0,i.jsx)(t.p,{children:"This is a filter:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"{{ some_variable | filter }}"})}),"\n",(0,i.jsx)(t.p,{children:"This is a filter with a parameter:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"{{ some_variable | filter(optional_parameter) }}"})}),"\n",(0,i.jsx)(t.p,{children:"Some sources for filters you can use:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docassemble.org/docs/documents.html#filters",children:"Docassemble-provided Jinja2 filters"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://jinja.palletsprojects.com/en/2.11.x/templates/#builtin-filters",children:"List of built-in Jinja2 filters"})," (but note this easier to read, ",(0,i.jsx)(t.a,{href:"https://tedboy.github.io/jinja2/templ14.html",children:"unofficial version of this same list"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["One filter you'll find yourself using frequently is the ",(0,i.jsx)(t.code,{children:"length"})," filter. Docassemble doesn't make ",(0,i.jsx)(t.code,{children:"len()"})," available\ninside of Docassemble templates, so you must use ",(0,i.jsx)(t.code,{children:"length"})," as a filter instead. For example:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:"{%p if users | length > 2 %}\n...\n{%p endif %}\n"})})]}),"\n",(0,i.jsx)(t.h3,{id:"use-jinja2-filters-to-change-capitalization",children:"Use Jinja2 filters to change capitalization"}),"\n",(0,i.jsx)(t.p,{children:"To change the capitalization of text, it's best to use a Jinja2 filter.\nIf you used Word's formatting instead, it would be harder to check for typos\nor mistakes in the variable name, which is case sensitive."}),"\n",(0,i.jsx)(t.p,{children:"Use these filters for common changes to capitalization:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Purpose"}),(0,i.jsx)(t.th,{children:"Filter"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Capitalize all letters"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"upper"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ some_variable | upper }}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Make all letters lowercase"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lower"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ some_variable | lower }}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Capitalize just the first letter"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"capitalize"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ some_variable | capitalize }}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Capitalize just the first letter of each word"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"title"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{{ some_variable | title }}"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:['Note that the "title" filter is not smart enough to follow ',(0,i.jsx)(t.a,{href:"https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case",children:"standard grammatical\nrules"}),".\nIt will simply capitalize the first letter of every word."]}),"\n",(0,i.jsxs)(t.h3,{id:"use-fix_punctuation-to-add-an-ending-",children:["Use ",(0,i.jsx)(t.code,{children:"fix_punctuation()"})," to add an ending ",(0,i.jsx)(t.code,{children:"."})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://docassemble.org/docs/functions.html#fix_punctuation",children:(0,i.jsx)(t.code,{children:"fix_punctuation()"})})," function can help you add an ending ",(0,i.jsx)(t.code,{children:"."})," without\nrisking adding an extra one to the user's provided text."]}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"I need this order because:\n\n{{ fix_punctuation(order_reason) }}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"tips-for-dealing-with-formatting-issues-caused-by-variable-length-documents-in-word",children:"Tips for dealing with formatting issues caused by variable-length documents in Word"}),"\n",(0,i.jsx)(t.p,{children:"When working with documents that are tightly formatted, it's important to test\nwith both short and long amounts of text and with different numbers of repeated fields."}),"\n",(0,i.jsx)(t.p,{children:"Usually, the best place to control these is inside the Word document itself."}),"\n",(0,i.jsx)(t.p,{children:"Repeated items in a list can often reveal formatting problems in the underlying document, as can long text inputs or even long names."}),"\n",(0,i.jsx)(t.p,{children:"For example, a long name can bump text down to a new line. This may break\nparagraphs you intended to be together on a single page across multiple pages."}),"\n",(0,i.jsx)(t.p,{children:"You will need to make choices about whether and how you want to control these problems in the template and which problems you are okay with leaving to resolve until the attorney or user edits it manually. You will inevitably have some of these choices to make."}),"\n",(0,i.jsx)(t.h3,{id:"use-keep-lines-together-and-keep-with-next-for-notary-blocks-signature-blocks-and-other-text-that-cant-split-across-pages",children:'Use "keep lines together" and "keep with next" for notary blocks, signature blocks, and other text that can\'t split across pages'}),"\n",(0,i.jsxs)(t.p,{children:["Microsoft Word has ",(0,i.jsx)(t.a,{href:"https://support.microsoft.com/en-us/office/keep-text-together-af94e5b8-3a5a-4cb0-9c53-dea56b43d96d",children:"several features"}),"\nthat can be used to control when a paragraph is able to break across multiple pages."]}),"\n",(0,i.jsx)(t.h3,{id:"use-manual-page-breaks-rather-than-extra-typed-paragraphs",children:"Use manual page breaks rather than extra typed paragraphs"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://support.microsoft.com/en-us/office/insert-a-page-break-in-word-eb0e569c-8e3f-4db4-9b13-7bfe1cabdbd7",children:"Insert a manual page break"})," when you want\ntext to be at the top of its own page, rather than relying on the current amount\nof text to flow onto a new page automatically."]}),"\n",(0,i.jsx)(t.h2,{id:"working-with-lists-inside-a-docx-file",children:"Working with lists inside a DOCX file"}),"\n",(0,i.jsxs)(t.p,{children:["Unfortunately, if you've gotten used to using ",(0,i.jsx)(t.a,{href:"https://docs.python.org/3/tutorial/datastructures.html",children:"list comprehensions"})," to filter and manage\nworking with lists, you cannot use list comprehensions\nin a DOCX file."]}),"\n",(0,i.jsx)(t.p,{children:"There are a few alternatives to use when dealing with a subset\nof a list, described below."}),"\n",(0,i.jsx)(t.h3,{id:"iterate-over-every-item-in-the-list",children:"Iterate over every item in the list"}),"\n",(0,i.jsxs)(t.p,{children:["Jinja2 supports the standard ",(0,i.jsx)(t.code,{children:"for"})," loop construct from Python. See: ",(0,i.jsx)(t.a,{href:"https://jinja.palletsprojects.com/en/3.0.x/templates/#for",children:"https://jinja.palletsprojects.com/en/3.0.x/templates/#for"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You'll normally use ",(0,i.jsx)(t.code,{children:"{%p for temporary_variable in list_name %} ... {%p endfor %}"})," to loop over the items in a list."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:"{%p for child in children %}\n\n{{ child }} was born on {{ child.birthdate }}\n\n{%p endfor %}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"child"})," is a temporary variable that updates with a new item of the list each time the loop\nruns through."]}),"\n",(0,i.jsx)(t.h3,{id:"get-the-index-of-the-current-loop",children:"Get the index of the current loop"}),"\n",(0,i.jsx)(t.p,{children:"In Jinja2, there are 2 separate special variables that you can access that represent the current\nposition in the list:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"loop.index"}),", which starts with the number 1, for the first item in the list"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"loop.index0"}),", which starts with the number 0 for the first item in the list"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["More special variables with information about the list are ",(0,i.jsx)(t.a,{href:"https://jinja.palletsprojects.com/en/3.0.x/templates/#for",children:"documented here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"use-the-list-at-a-certain-startingending-value",children:"Use the list at a certain starting/ending value"}),"\n",(0,i.jsx)(t.p,{children:'You can use Python\'s normal list "slices" to shorten the size of the list you display\nin the template, as well as list indices to get just one item.'}),"\n",(0,i.jsx)(t.p,{children:'The basic syntax of a list "slice" is to put the starting and ending index inside\nthe brackets. You can leave off either the starting or ending digit to get everything up\nto/before that index, or you can specify negative numbers to count backwards.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"list[1:] starts at index 1 in the list and returns everything after that index."}),"\n",(0,i.jsx)(t.li,{children:"list[:5] gets items at the indices 0-4."}),"\n",(0,i.jsx)(t.li,{children:"list[1:3] returns a list with the items at indices 1 and 2."}),"\n",(0,i.jsx)(t.li,{children:"list[2] returns just the item at index 2 (not a list of items)."}),"\n",(0,i.jsx)(t.li,{children:"list[:-1] returns every item except the final item in the list."}),"\n",(0,i.jsx)(t.li,{children:"list[-1] returns only the last item in the list."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:"1. Primary agent\n\nPrimary agent's name: {{ agents[0] }}\n\n{%p for agent in agents[1:] %}\n\n2. {{ ordinal(loop.index0) }} Backup Agent\n\n{{ agent }}\n\n{%p endfor %}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"filter-the-list-with-dalistfilter",children:"Filter the list with DAList.filter()"}),"\n",(0,i.jsxs)(t.p,{children:["You can do very simple filtering of a list with the ",(0,i.jsx)(t.code,{children:".filter()"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, suppose every item in the list ",(0,i.jsx)(t.code,{children:"my_list"})," has an attribute\n",(0,i.jsx)(t.code,{children:"is_employed"})," that can be True or False:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:"1. People with jobs\n\n{%p for person in my_list.filter(is_employed=True) %}\n{{ person }}\n{%p endfor %}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This only works for checking one attribute, and one value. You can use ",(0,i.jsx)(t.code,{children:"selecattr"}),", described below,\nfor more complex situations. One benefit of ",(0,i.jsx)(t.code,{children:"filter()"})," is that the result will be of the special Docassemble\nDAList class."]}),"\n",(0,i.jsxs)(t.h3,{id:"create-a-sum-with-the-sum-filter",children:["Create a sum with the ",(0,i.jsx)(t.code,{children:"sum"})," filter"]}),"\n",(0,i.jsxs)(t.p,{children:["If you have a list of objects that each have a number stored in an attribute, you can use the ",(0,i.jsx)(t.code,{children:"sum"})," filter to add the\nvalues altogether."]}),"\n",(0,i.jsxs)(t.p,{children:["You may also want to use the ",(0,i.jsx)(t.code,{children:"currency()"})," function to format\nthe number as currency."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"{{ currency(incomes | sum(attribute='amount')) }}"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that the filter, ",(0,i.jsx)(t.code,{children:"sum"}),", can appear in-line in the expression and then the result of the list with the filter can be passed as a parameter to the ",(0,i.jsx)(t.code,{children:"currency()"})," function."]}),"\n",(0,i.jsxs)(t.h3,{id:"use-selectattr-for-more-complex-comparisons",children:["Use ",(0,i.jsx)(t.code,{children:"selectattr"})," for more complex comparisons"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://jinja.palletsprojects.com/en/3.0.x/templates/#jinja-filters.selectattr",children:(0,i.jsx)(t.code,{children:"selectattr"})})," filter can be used to narrow a list down to only those items\nthat have a particular attribute value. There's a shortcut for a ",(0,i.jsx)(t.code,{children:"True"}),"/",(0,i.jsx)(t.code,{children:"False"})," value:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'{{ users | selectattr("is_active") }}'})}),"\n",(0,i.jsx)(t.p,{children:"Or the longer version to check for a particular exact value:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'{{ users | selectattr("email", "none") }}'})}),"\n",(0,i.jsxs)(t.p,{children:["If you need to check for 1 of 2 possible values, you can use the ",(0,i.jsx)(t.code,{children:'"in"'})," parameter\nand provide a list of choices:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:"{% for applicant in applicants | selectattr('status', 'in', ['approved', 'conditionally_approved']) %}\n* {{ applicant.name }} - {{ applicant.birthdate.format(\"MM/dd/yyyy\") }}\n{% endfor %}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Notice that the name of the attribute goes in quotes."}),"\n",(0,i.jsxs)(t.p,{children:["In addition to ",(0,i.jsx)(t.code,{children:"in"}),", you can use any of the ",(0,i.jsx)(t.a,{href:"https://jinja.palletsprojects.com/en/3.0.x/templates/#list-of-builtin-tests",children:'Jinja2 "tests" documented here'}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also combine multiple ",(0,i.jsx)(t.code,{children:"selectattr"})," filters in a series, like:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'{{ my_list | selecattr("test1") | selecattr("test2") }}'})}),"\n",(0,i.jsx)(t.h2,{id:"troubleshooting-docx-files",children:"Troubleshooting DOCX files"}),"\n",(0,i.jsx)(t.h3,{id:"fixing-corrupt-or-potentially-corrupt-docx-files",children:"Fixing corrupt or potentially corrupt DOCX files"}),"\n",(0,i.jsx)(t.p,{children:"You can fix some hard to track down problems in a DOCX file by converting to a simpler format, such\nas RTF, and then converting back to DOCX. These problems might only appear when you merge multiple DOCX files together and be silently fixed when you open just one at a time.\nThis is sometimes caused by using Google Docs, which reliably produces DOCX files that don't\nmeet the full DOCX technical specification."}),"\n",(0,i.jsx)(t.p,{children:"To try this fix:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open the document in Microsoft Word or Libre Office"}),"\n",(0,i.jsx)(t.li,{children:'Choose File | Save as, and select "RTF - Rich Text Format" as the file type'}),"\n",(0,i.jsx)(t.li,{children:"Close your word processor"}),"\n",(0,i.jsx)(t.li,{children:"Open the file with the newly added .RTF extension"}),"\n",(0,i.jsx)(t.li,{children:"Save the file back to Microsoft Word - DOCX format."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"troubleshooting-problems-with-conversion-to-pdf",children:"Troubleshooting problems with conversion to PDF"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes the DOCX will look right, but things like headings, numberings, and other\nstyles will look off when Docassemble converts your template to PDF."}),"\n",(0,i.jsxs)(t.p,{children:["The first thing to check when troubleshooting a DOCX conversion to PDF is to see\nhow the document looks in ",(0,i.jsx)(t.a,{href:"https://www.libreoffice.org/",children:"Libre Office"}),". Docassemble\nuses Libre Office to convert DOCX to PDF, so if you can fix issues in Libre Office\non your home computer, it should look right when Docassemble converts it to PDF on the\nserver."]}),"\n",(0,i.jsx)(t.h4,{id:"installing-the-proper-fonts",children:"Installing the proper fonts"}),"\n",(0,i.jsx)(t.p,{children:"One issue you may find is that the PDF doesn't have the right fonts. There are two potential\nsolutions:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"You can revise your document to use the Microsoft True Type Core Fonts for the Web, which come pre-installed on Docassemble servers. These include Arial and Times New Roman."}),"\n",(0,i.jsxs)(t.li,{children:["You can install the fonts on the Docassemble server. The ",(0,i.jsx)(t.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALDashboard",children:"ALDashboard"}),'\'s "Install fonts" widget can help you install a TTF (TrueType)\nfont on your server.']}),"\n",(0,i.jsxs)(t.li,{children:["You can ",(0,i.jsx)(t.a,{href:"https://support.microsoft.com/en-us/office/benefits-of-embedding-custom-fonts-cb3982aa-ea76-4323-b008-86670f222dbc",children:"embed the fonts"})," inside the DOCX file.\nThis might significantly increase the file size."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"problems-with-lists-and-numbering-after-automation",children:"Problems with lists and numbering after automation"}),"\n",(0,i.jsx)(t.p,{children:"Multi-level numbered and lettered lists are a frequent problem spot. On occasion, the\nonly way to fix the list in your template is to copy all of the text, paste into a new document\nas unformatted text, and then re-apply all of the formatting (or at least the list formatting)\nmanually."}),"\n",(0,i.jsx)(t.h2,{id:"quality-control-checklist",children:"Quality control checklist"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","The DOCX template has valid Jinja syntax. You can use the ",(0,i.jsx)(t.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALDashboard",children:"ALDashboard"}),'\'s "Validate DOCX template" widget,\ninstalled on your own Docassemble server, to check.']}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","All of the expected standard field names are recognized by the Weaver (marked in bold when you upload and view the quality control screen)"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Custom field names are all properly spelled, without typos"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Run the interview with short, long, and one and many items for repeated lists to ensure that the full range of common scenarios looks proper."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Check choices that can trigger conditional text to make sure white space is correct across all conditions. It's easy to add an extra space when using in-line conditions."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);