---
id: plan_interview
title: Planning your interview
sidebar_label: Planning your interview
slug: /planning
---

## Planning and automating your first interview with the Assembly Line Framework

To automate a form using the Assembly Line framework, you must:

1. research and understand the context of your form
1. identify the template that you will use: either a PDF or DOCX template
1. add digital **field labels** where the information the user provides will go
1. run the labeled template through the Assembly Line Weaver
1. download the "weaved" form and refine in your Docassemble playground
1. test, respond to feedback, and iterate
1. deploy to a production server and add links on your public website

For more information about the process of researching and planning your completed
interview, refer to [Planning and building your first expert system](https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline).

## Selecting your template file

In many cases, you will be provided a template that you need to automate.
Ultimately, your form should be either a PDF document or a Word DOCX file.

If your document is a PDF already, consider whether to switch to a DOCX template
file.

Reasons to use PDF files:

* PDF files may be the best choice if you are automating an approved court form
  that already exists as a PDF
* PDF files are good for heavily formatted content that includes columns and multiple
  fields on a single line

Reasons to avoid PDF files:

* PDF files are rigid, and may not contain enough room for real-world
  information
* conditional logic must be appplied field by field
* lists and repeated data must be labeled one at a time for each field

Reasons to use DOCX files:

* DOCX files will grow or shrink to accomodate as much or as little information
  as the user has to provide
* DOCX files allow you to use lists and repeated groups naturally and with
  little extra effort after labeling the first item
* DOCX files allow you to easily make whole sections of a document contingent
* DOCX files work well with linear content that is read by scanning down the
  page, not across.

Reasons to avoid DOCX files:

* DOCX files work less well for content formatted into columns or that require
  precise layout
* DOCX files can be formatted, but content may flow unexpectedly if it is longer
  than expected

## Do some advance work to draft questions and a question order

The automation process will go better if you have planned out a basic
structure for your interview, as well as thought through the information
that you need to gather. Focus on a rough sketch of the process that your
form enables as well as the questions that you will ask to fill it in.

## Preparing your template for automation

Once you have decided on the template file that you will use, you need to add
labels to each empty space on the form that will be filled in to match the
user's specific situation.