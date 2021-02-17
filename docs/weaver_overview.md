---
id: alweaver_overview
title: AssemblyLine Weaver overview
sidebar_label: ALWeaver overview
slug: /generating_code
---

<!-- Boilerplate, Baseline, kit, ready to build, some assembly required, something to build on, starting point, blank slate, foundation, groundwork, starter dough, groundwork, spark -->

You can use the labels and variables of your PDFs and DOCXs in combination with the ALWeaver to help you generate starter code that is ready to work with the AssemblyLine library. You will then be able to edit that code to get the interview you want.

If you have [prepared your PDF or DOCX using certain conventions](doc_vars_reference.md), the weaver will handle the fields it recognizes without further prompting. It will ask questions about the rest of the fields. It will try to recognize fields that ask about people and organizations.

To generate the starter code:
1. If you have a PDF, [add labels to it](doc_vars_reference.md)
1. [Go to the weaver's page](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1)
1. Upload your PDF or DOCX
1. Select the field type of each field (e.g. text, date, checkbox)
1. Give labels to the individual question fields that the user will see
1. Build a page by writing a heading and explanatory text
1. Pick which fields will go on that page

A page might look like this:
![One page of an interview made up of a heading, explanatory text, and the fields](./assets/interview_screen_or_page.png)

You can see [the ALWeaver docassemble package on GitHub](https://github.com/suffolkLITLab/docassemble-assemblylinewizard)
