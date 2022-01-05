---
id: pdf_templates
title: Working with PDF files
sidebar_label: Working with PDF files
slug: /pdfs
---

## Edit your PDF

PDF templates can be edited in:

* Adobe Acrobat Professional
* [the Documate online free PDF editor](https://www.documate.org/pdf)
* many other PDF editors that support Acrobat Forms (mostly paid)

The free [Documate PDF
editor](https://www.documate.org/pdf) will meet most people's needs. It will allow
you to:

1. add text, checkbox, and digital signature fields
1. easily rename fields
1. edit existing field properties

Documate has [a page that talks about its PDF
editor](https://help.documate.org/articles/unlocking-pdf-documents).

Adobe Acrobat can still be helpful. The most important feature it has that
Documate lacks is the ability to automatically recognize blank spaces and turn
them into fields. You may decide to use a trial version of Adobe Acrobat for
this feature, which is only needed at the beginning of your project.

Watch a 2 minute video segment on [how to edit a
PDF](https://help.documate.org/articles/unlocking-pdf-documents) with Documate's editor.
<iframe width="560" height="315" src="https://youtube.com/embed/HHGTWJ4r2hk?start=83" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="How to edit a PDF with Documate's editor">
</iframe>

## Use limited field types

Use **only** these field types in your PDF document:

* text fields
* checkboxes
* signature fields

Do not use:

* radio buttons
* drop-down menus

## Use the Assembly Line's standard field labels for PDF templates

Use the [specific names for labels](doc_vars_reference.md) for full
compatibility with the Assembly Line framework.

## Delete extra pages
If you have a Google, Adobe, Facebook, or Apple account, or if you're willing to make a new account, [Adobe will let you delete PDF pages for free online](https://www.adobe.com/acrobat/online/delete-pdf-pages.html). All your fields will be left alone. The documents will be saved in your account.

## Adobe Live Cycle
If the form was created in Adobe Live Cycle, you will not be able to add form
fields that are compatible with Docassemble. A simple workaround is to print the
file to PDF. There is a built-in PDF printer in Chrome and in Windows 10, and one
also comes with Mac OS X and with Microsoft Office.

## Corrupted or locked PDFs
If you run into a problem with the PDF, the PDF might be corrupted in some way.
This happens infrequently but often enough to be troublesome.

Two methods you might try:

1. Run the PDF through [Documate](https://www.documate.org/pdf)'s PDF unlocker. This can fix some PDF issues and is quick and easy.
2. Try the [QPDF](http://qpdf.sourceforge.net/) tool, a command line tool that can fix more broken PDFs.
