---
id: pdfs
title: Working with PDF files
sidebar_label: Editing PDFs
slug: /pdfs
---

:::note
- [Edit your PDFs with Documate](https://www.documate.org/pdf)
- [Use the weaver to generate code](https://apps-dev.suffolklitlab.org/run/assemblylinewizard/assembly_line/#/1&new_session=1)
:::

## Add labels and fields
We recommend using [Documate](https://documate.wrkflows.io/). It can do everything that AssemblyLine makes use of as far as PDF labels and fields go.

Watch a 2 minute video segment on [how to edit a PDF](https://documate.wrkflows.io/en/articles/1007) with Documate's [online free PDF editor](https://www.documate.org/pdf).
<!-- <iframe width="1370" height="563" src="https://www.youtube.com/embed/HHGTWJ4r2hk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
<iframe width="560" height="315" src="https://youtube.com/embed/HHGTWJ4r2hk?start=83" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="How to edit a PDF with Documate's editor"></iframe>

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
