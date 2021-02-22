---
id: pdfs
title: Working with PDF files
sidebar_label: Tools to edit PDFs
slug: /pdfs
---

## Add labels and fields
We recommend you use [specific names for labels](doc_vars_reference.md) to take full advantage of the tools we've created.

To add those labels, we recommend using [the Documate online free PDF editor](https://www.documate.org/pdf). It can do everything that AssemblyLine makes use of as far as PDF labels and fields go. Documate has [a page that talks about its PDF editor](https://documate.wrkflows.io/).

Watch a 2 minute video segment on [how to edit a PDF](https://documate.wrkflows.io/en/articles/1007) with Documate's editor.
<iframe width="560" height="315" src="https://youtube.com/embed/HHGTWJ4r2hk?start=83" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="How to edit a PDF with Documate's editor"></iframe>

## Delete extra pages
If you have a Google, Adobe, Facebook, or Apple account, or if you're willing to make a new account, [Adobe will let you delete PDF pages for free online](https://www.adobe.com/acrobat/online/delete-pdf-pages.html). All your fields will be left alone. The documents will be saved in your account.

## Adobe Live Cycle
If the form was created in Adobe Live Cycle, you will not be able to add form
fields that are compatible with Docassemble. A simple workaround is to print the
file to PDF. There is a built-in PDF driver in Chrome and in Windows 10, and one
also comes with Mac OS X and with Microsoft Office.

You cannot use the Adobe print driver to print a Live Cycle form to PDF. It must
be a third-party driver. A commercial freeware option is [BullZip
PDF](https://www.bullzip.com/products/pdf/info.php).

A GPL-licensed alternative is
[GhostScript](https://www.ghostscript.com/download.html).


## Corrupted or locked PDFs
If you run into a problem with the PDF, the PDF might be corrupted in some way.
This happens infrequently but often enough to be troublesome.

Two methods you might try:

1. Run the PDF through [Documate](https://www.documate.org/pdf)'s PDF unlocker. This can fix some PDF issues and is quick and easy.
2. Try the [QPDF](http://qpdf.sourceforge.net/) tool, a command line tool that can fix more broken PDFs.
