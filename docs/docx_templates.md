---
id: docx_templates
title: Working with DOCX files
sidebar_label: Working with DOCX files
slug: /docx
---
## Add labels and fields

DOCX templates can be edited in any editor that is able to edit DOCX files, including:

* Microsoft Word, or Microsoft Word Online
* [Libre Office](https://www.libreoffice.org/)
* Google Docs

Most developers should use the word processing tool that they are already familiar with.
Rarely, you may run into compatibility issues with formatting of a DOCX file when it
is converted into a PDF. Docassemble uses Libre Office to convert DOCX files to PDF.
Try editing the file in the free [Libre Office](https://www.libreoffice.org/) and get
it looking right there if you have any PDF conversion problems.

While most editors should work, it is important to save the document in the DOCX
format.

## DOCX field labels are just typed in

You already know how to add fields to a DOCX template: just type them in as
ordinary text. The only difference is that you type brackets `{{ }}` or `{% %}`
to tell Docassemble that you want to replace the field with information that
comes from the Docassemble interview.

The syntax to type in fields in a DOCX template is named `Jinja2`.

[Learn more about Jinja2](https://suffolklitlab.org/legal-tech-class/docs/jinja2)
and about [DOCX templates in Docassemble](https://docassemble.org/docs/documents.html#docx%20template%20file).

Jinja2 is very powerful but you will probably only use a small number of the
features it has, like:

1. adding `fields` with double curly brackets: `{{ field_name }}`
1. adding conditional text with `{% if some_condition %}` and `{% endif %}`

## Start with simple logic in your DOCX template

Before you run your form through the Weaver, start out with simple logic.
For example:

* wait to add `for` loops that print out each item in a list
* avoid using custom methods in variable names, other than the ones listed on
  the [Field labels to use in template files](doc_vars_reference.md) page.

You can add these refining details after you run the form through the Weaver.
Use the first draft just to add placeholders where information will go. 

## Use the Assembly Line's standard field names for DOCX templates

Use the [specific names for labels](doc_vars_reference.md) for full
compatibility with the Assembly Line framework.