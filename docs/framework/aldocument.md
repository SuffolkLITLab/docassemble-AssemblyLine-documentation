---
id: aldocument
title: |
    ALDocument: Python Classes to simplify working with multiple templates
sidebar_label: |
  ALDocument: Python Classes to simplify working with multiple templates
slug: /framework/aldocument
---

## Overview

The `ALDocument` class was created to solve these problems in Docassemble interviews:

1. handling apps that can assemble multiple forms, with the final list of forms
   depending on the answers that the user gives
1. handling a way to display a "preview" and "final" version of a document with
   and without a signature (to allow the user to confirm information before
   signing)
1. handling text in PDF templates that doesn't fit and needs to be sent to an addendum

This collection of classes has some other nice benefits:

1. a compact, neat and easily customizable list of downloads at the end, with
   both `view` and `download` buttons
1. a more customizable email-sending input than the stock Docassemble input that
   can be displayed on the final screen
1. always-fresh documents that will be updated when the user changes or edits a
   response
1. a helper class and model questions to allow the user to upload evidence,
   including generating a table of contents and adding exhibit cover pages
1. helper classes to include not just templates but static documents and tables
   in XLSX format as download options

The primary classes that developers interact with are the `ALDocument` class,
which represents a template that is filled in with the user's answers during the
course of the interview, and the `ALDocumentBundle` class, which provides a way
to group documents together to be emailed, downloaded, or delivered to a court 
or opposing party.

`ALDocumentBundle` objects can be nested to allow you to group multiple individual 
template files into one document that the user can download.

Both `ALDocument` and `ALDocumentBundle` objects can be either `enabled` or not.
The Docassemble interview will seek logic that defines when the document should
be included in the final output, letting you easily create interviews that have
contingent documents.

## ALDocument class

An `ALDocument` is a
[`DADict`](https://docassemble.org/docs/objects.html#DADict)  that has top level
attributes and points to one or more Docassemble [`attachment`
blocks](https://docassemble.org/docs/documents.html#attachment).

There are usually exactly two keys in the dictionary: `preview` and `final`,
with the only difference being the presence or absence of a signature. Conditional
logic inside the template or attachment block can be used to show or hide the signature
depending on the value of the `key` so that the template does not need to be created
twice.

The `signature_if_final` method of an
[ALIndividual](algeneral#ALIndividual) was created to simplify this
common use case.

Here's how to use an ALDocument:

1. Create `ALDocument` objects in an objects block.
1. Set any required attributes, like `enabled`, in the object block or in a
   separate code block.
1. Define the key of the `ALDocument` in an `attachment` block using the
   `variable name` modifier. Usually, use one attachment block and define the variable name
   like this: `variable name: some_al_document[i]`.
1. Optionally, reference the `ALDocument` inside an `ALDocumentBundle`.

Example:

```yaml
---
objects:
  - letter: ALDocument.using(title="Letter to Social Security", filename="ssa_letter", enabled=True, has_addendum=False)
---
attachment:
  - pdf template file: ssa_letter.pdf
    variable name: letter[i]
    fields:
      - "users1_name": ${ users[0] }
      - "users1_signature": ${ users[0].signature_if_final(i) }
```

Example:

It's common in longer interviews to have the `enabled` attribute be defined in a code block, like this:

```yaml
---
objects:
  - main_document: ALDocument.using(title="Letter to Social Security", filename="main_document", enabled=True, has_addendum=False)
  - insurance_rider: ALDocument.using(title="Letter to Social Security", filename="rider", has_addendum=False)
---
attachments:
  - pdf template file: main_document.pdf
    variable name: main_document[i]
    fields:
      - "users1_name": ${ users[0] }
      - "users1_signature": ${ users[0].signature_if_final(i) }
  - pdf template file: rider.pdf
    variable name: rider[i]
    fields:
      - "users1_name": ${ users[0] }
      - "users1_signature": ${ users[0].signature_if_final(i) }
---
code: |
  if total_cost > 1000:
    insurance_rider.enabled = True
  else:
    insurance_rider.enabled = False
  # or more concise but slightly harder to read:
  # insurance_rider.enabled = total_cost > 1000
```

In the example above, the `insurance_rider` document is only included in any bundles if the 
total cost of the project is over $1,000. Note that the `enabled` value is global for the 
interview session. If you want to use different logic in different bundles, you can easily
create a separate `ALDocument` that references the same template file and attachment block.

Attributes:

* `filename`: the **display** filename used for the document when it is downloaded
* `title`: the title shown on the download screen
* `enabled`: whether the document should be "turned on" when it is referenced in an `ALDocumentBundle`
* `addendum`: points to a variable representing an `attachment` block with a
  formatted addendum. The Assembly Line provides a good default addendum
  template that is flexible enough to work with many fields.
* `overflow_fields`: an `ALAddendumFieldDict` with each representing a field
  that has potential to be sent to the addendum if exceeds a pre-set length.
* `has_addendum `: set this to True or False to control whether the
  `overflow_fields` dictionary will be checked to decide whether or not to
  generate an addendum file. Optional; defaults to `False`.

Methods:

* `as_pdf(key:str='final', refresh:bool=True)`: returns a PDF version of the
  completed template and any addendum. `key` is normally `preview` or `final`
* `as_docx(key:str='final', refresh:bool=True)`: returns a DOCX version of the
  completed template and any addendum if the original is a DOCX template. `key`
  is normally `preview` or `final`. 
* `as_list(key:str='final', refresh:bool=True)`: returns a 1 or 2 item list
  which contains the templaate and its addendum, if any.
* `need_addendum()`: returns `True` if the addendum exists and there are
  overflow fields.
* `has_overflow()`: returns `True` if there are fields that trigger the
  addendum.
* `overflow()`: returns a list of just the fields that triggered the addendum.
* `safe_value(field_name:str, overflow_message:str=None, preserve_newlines:bool=False, input_width:int=80)`: 
  returns the "safe" value
  of `field_name` (the amount that is less than `overflow_trigger`) plus an
  overflow message. Used in an attachment block.
* `overflow_value(field_name:str, overflow_message:str=None, preserve_newlines:bool=False, input_width:int=80)`: 
  returns the "unsafe" value of `field_name`--the amount that exceeds the `overflow_trigger`. Potentially used 
  inside an addendum document.

## ALDocumentBundle class

An `ALDocumentBundle` is a
[`DAList`](https://docassemble.org/docs/objects.html#DAList) that provides
developers a way to conveniently group documents and treat them as a single set,
even if the exact list of documents might change depending on the user's
answers.

Here's how to use an `ALDocumentBundle`: 

1. Create the `ALDocumentBundle` in an `objects` block.
1. Add each `ALDocument` or nested `ALDocumentBundle` that your interview will
   sometimes produce to the bundle. Because the list is usually known in advance,
   it's common to include this in the object definition.
1. Use the `as_pdf()` method on your preview screen to display a preview of the
   output without any signature.
1. Use the `download_list_html()` and `send_button_html()` methods on your `download`
   screen.

You can have as many or as few bundles as you would like. The Assembly Line convention
is to use the following two bundles:

1. `al_user_bundle` which should include a **next steps** document with
   instructions for your user
1. `al_court_bundle` which leaves out the instructions and should have every
   document that you want the clerk to receive

Stick with this convention if you expect to integrate with E-filing.

Example:

```yaml
---
objects:
  - al_user_bundle: ALDocumentBundle.using(title="Forms to download", filename="ssa_documents", elements=[ssa_next_steps, letter])
  - al_court_bundle: ALDocumentBundle.using(title="Forms to download", filename="ssa_documents", elements=[letter])
```

:::note
You can **nest** `ALDocumentBundle`s! Just create your bundle in a separate `objects` block and add it directly
into the list of `elements`. This lets you create a document from multiple templates that you want the user
to be able to open and print as one file.
:::

Attributes:

* `enabled` (optional): make sure to define this if the object is included inside another `ALDocumentBundle`
* `title`: this is displayed on the download screen
* `filename`: used to construct the display filename for a `pdf` version of the bundle

Methods:

* `as_pdf(key:str='final', refresh:bool=True) -> DAFile`: return a single concatenated PDF of the bundle's attachments
* `as_zip(self, key:str = 'final', refresh:bool = True, title:str = '') -> DAFile`: 
  returns a compressed ZIP archive with separate documents for each item.
* `enabled_documents(self, refresh:bool=True) -> List[Any]`: return a list of only the "enabled" documents in the bundle
* `as_flat_list(self, key:str='final', refresh:bool=True) -> List[DAFile]`:
* `get_titles(self, key:str='final', refresh:bool=True) -> List[str]`:
* `as_pdf_list(self, key:str='final', refresh:bool=True) -> List[DAFile]`:
* `as_editable_list(self, key:str='final', refresh:bool=True) -> List[DAFile]`:
* `download_list_html(self, key:str='final', format:str='pdf', view:bool=True
      refresh:bool=True, include_zip:bool = True, view_label="View", view_icon:str="eye",
      download_label:str="Download", download_icon:str="download", zip_label:str=None,
      zip_icon:str="file-archive") -> str`: returns HTML for a table with download and view buttons, as for a download screen
* `send_button_html(self, key:str='final', show_editable_checkbox:bool = True)->str`:
* `send_email(self, to:any=None, key:str='final', editable:bool=False, template:any=None, **kwargs) -> bool`:

Example of a download screen that uses an `ALDocumentBundle`:

```yaml
---
progress: 100
id: download
event: petition_to_change_name_of_adult_download
question: |
  Your form is ready to download.
subquestion: |
  Thank you ${ user_name_first_new }. Your form is ready to download and deliver.
  
  View, download and send your form below. Click the "Make changes" button to fix any mistakes. 
  
  1. Download each of the documents below. Print at least two copies.
  2. Call the ${ trial_court } at ${ bold(trial_court.phone) } to find out how
  to deliver these forms. You can mail a copy to ${ trial_court.address.on_one_line() }.
  3. Get a **certified** copy of your birth certificate from the town hall
  where you were born.
  4. File one of the copies with the court. Keep the other for your records.
  
  ${ action_button_html(url_action('review_petition_to_change_name_of_adult'), label='Make changes', color='info', icon='pencil-alt') } 
  
  ${ action_button_html(al_user_bundle.as_pdf().url_for(), label="Download a copy as a single PDF", icon='download') }
  
  ${ al_user_bundle.download_list_html() }
  
  ${ al_user_bundle.send_button_html() }
```

### Using the `download_list_html()` method

```python
download_list_html(self, key:str='final', format:str='pdf', view:bool=True,
      refresh:bool=True, include_zip:bool = True, view_label="View", view_icon:str="eye",
      download_label:str="Download", download_icon:str="download", zip_label:str=None,
      zip_icon:str="file-archive") -> str
```

The default download table displays a row with a title, a "view" button which 
allows opening a PDF in-browser, and a "download" button that allows downloading
the PDF with one blick. A row with a "Download as zip" button is also added
by default if there is more than 1 document in the table.

These defaults can be customized quite a bit. In addition to the parameters listed below,
the appearance can be controlled by editing CSS files. Take a look at the values in
[`aldocument.css`](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/data/static/aldocument.css) 
and customize to match your needs.

It is also not necessary to use the `download_list_html()` method. If you
prefer, you can directly reference `enabled_documents` and create your own
download table format.

Parameters:

* `key`: either "final" or "preview"
* `format`: either "pdf", "docx", or "original", used to control the file linked to the "download" button
* `view`: display a button that links to a PDF version of the document, if possible
* `refresh`: controls whether the file should be cached
* `include_zip`: controls whether a "Download zip" button is added to a download list with more than 1 document
* `view_label`: label used for the "View" button
* `view_icon`: icon from [fontawesome](https://fontawesome.com)'s "free" library
* `download_label`: label used for the "Download" button
* `download_icon`: icon from [fontawesome](https://fontawesome.com)'s "free" library
* `zip_label`: text used for the row with the "zip" button. If not provided,
  this will refer to the value of `self.zip_label` which should be defined in a
  Docassemble `template` block. This is to aid translation.
* `zip_icon`: icon from [fontawesome](https://fontawesome.com)'s "free" library

Example: customizing the text on the "zip_label" interview-wide:

```yaml
---
generic object: ALDocumentBundle
template: x.zip_label
content: |
  Download as one ZIP file
```

### Using the `send_button_html()` method

```python
  def send_button_html(self, key:str='final', show_editable_checkbox:bool = True)->str:
```

`send_button_html()` is used to display an HTML input that the user can interact
with to send themselves a copy of the contents of a bundle.

`send_button_html()` has just one parameter: `show_editable_checkbox` which controls
whether a checkbox will be displayed that allows the user to toggle including the DOCX
version of templates in the email that they receive. 

However, all of the text can be customized. Copy each YAML block
below into your own interview to edit and customize the text.
It can be edited interview-wide (shown) or on a per-bundle basis.

Customize the text "Get a copy of the documents in email":

```yaml
---
generic object: ALDocumentBundle
template: x.get_email_copy
content: |
  Get a copy of the documents in email
```

Customize the text "Include an editable copy":

```yaml
---
generic object: ALDocumentBundle
template: x.include_editable_documents
content: |
  Include an editable copy
```

Customize the text "Download zip":

```yaml
---
generic object: ALDocumentBundle
template: x.zip_label
content: |
  Download zip
```

The subject and contents of the email can also be customized:

```yaml
---
generic object: ALDocumentBundle
template: x.send_email_template
subject: |
  % if len(x) > 1:
  Your ${ x.title } document is ready
  % else:
  Your "${ x.title }" documents are ready
  % endif
content: |
  Thank you for using our app!

  Please find the document for ${ users } attached.
```

## Working with overflow text, ALAddendumField and ALAddendumFieldDict

## Handling uploaded documents with ALExhibitDocument and ALExhibitList

## Creating XLSX files with ALTableDocument

## ALStaticDocument

## ALUntransformedDocument