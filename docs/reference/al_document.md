---
sidebar_label: al_document
title: al_document
---

#### html\_safe\_str

```python
html_safe_str(the_string) -> str
```

Return a string that can be used as an html class or id

#### table\_row

```python
table_row(title, view_file: DAFile, download_file: DAFile = None, view_icon: str = "eye", download_icon: str = "download") -> str
```

Uses the provided DAFile/DAFileCollection objects to build the row of a table in HTML format that allows
you to both view and download an ALDocument.

## ALAddendumField Objects

```python
class ALAddendumField(DAObject)
```

Object representing a single field and its attributes as related to whether
it should be displayed in an addendum. Useful for PDF templates.

The items can be strings or lists/list-like objects. It does not know
how to handle overflow for a dictionary, e.g.

Required attributes:
  - field_name-&gt;str represents the name of a docassemble variable
  - overflow_trigger-&gt;int

Optional/planned (not implemented yet):    
  - headers-&gt;dict(attribute: display label for table)
  - field_style-&gt;&quot;list&quot;|&quot;table&quot;|&quot;string&quot; (optional: defaults to &quot;string&quot;)

#### overflow\_value

```python
 | overflow_value(preserve_newlines: bool = False, input_width: int = 80, overflow_message: str = "")
```

Try to return just the portion of the variable (list-like object or string)
that is not contained in the safe_value().

#### max\_lines

```python
 | max_lines(input_width=80, overflow_message_length=0)
```

Estimate the number of rows in the field in the output document.

#### value

```python
 | value()
```

Return the full value, disregarding overflow. Could be useful in addendum
if you want to show the whole value without making user flip back/forth between multiple
pages.

#### safe\_value

```python
 | safe_value(overflow_message="", input_width=80, preserve_newlines=False)
```

Try to return just the portion of the variable
that is _shorter than_ the overflow trigger. Otherwise, return empty string.

#### value\_if\_defined

```python
 | value_if_defined()
```

Return the value of the field if it is defined, otherwise return an empty string.
Addendum should never trigger docassemble&#x27;s variable gathering.

#### columns

```python
 | columns(skip_empty_attributes: bool = True, skip_attributes: set = {'complete'}) -> list
```

Return a list of the columns in this object.

By default, skip empty attributes and the `complete` attribute.

#### type

```python
 | type()
```

list | object_list | other

#### is\_list

```python
 | is_list()
```

Identify whether the field is a list, whether of objects/dictionaries or just plain variables.

#### is\_object\_list

```python
 | is_object_list()
```

Identify whether the field represents a list of either dictionaries or objects.

#### overflow\_markdown

```python
 | overflow_markdown()
```

Return a formatted markdown table or bulleted list representing the values in the list.

This method does not give you any control over the output other than labels of columns,
but you also do not need to use this output if you want to independently control the format
of the table.

#### overflow\_docx

```python
 | overflow_docx(path="docassemble.ALDocumentDict:data/templates/addendum_table.docx")
```

Light wrapper around insert_docx_template() that inserts a formatted table into a docx
file. If the object in the list is a plain string/int, it returns a bulleted list.

Using this method will not give you any control at all over the formatting, but you can directly
call field.overflow_value() instead of using this method.

## ALAddendumFieldDict Objects

```python
class ALAddendumFieldDict(DAOrderedDict)
```

Object representing a list of fields in your output document, together
with the character limit for each field.

Provides convenient methods to determine if an addendum is needed and to 
control the display of fields so the appropriate text (overflow or safe amount)
is displayed in each context.

Adding a new entry will implicitly set the `field_name` attribute of the field.

optional:
  - style: if set to &quot;overflow_only&quot; will only display the overflow text

#### initializeObject

```python
 | initializeObject(*pargs, **kwargs)
```

When we create a new entry implicitly, make sure we also set the .field_name
attribute to the key name so it knows its own field_name.

#### defined\_fields

```python
 | defined_fields(style='overflow_only')
```

Return a filtered list of just the defined fields.
If the &quot;style&quot; is set to overflow_only, only return the overflow values.

## DALazyAttribute Objects

```python
class DALazyAttribute(DAObject)
```

A DAObject with attributes that are reconsidered on every page load. Useful for
caching information on a per-page load basis.

Takes advantage of the way that objects are pickled in Docassemble by overriding the
__getstate__ method Pickle uses.

## ALDocument Objects

```python
class ALDocument(DADict)
```

An opinionated collection of typically three attachment blocks:
1. The final version of a document, at typical key &quot;final&quot;
2. The preview version of a document, at typical key &quot;preview&quot;
3. An addendum of a document, at the attribute `addendum`

Each form that an interview generates will get its own ALDocument object.

This should really relate to one canonical document in different states. Not multiple
unrelated output documents that might get delivered together, except the addendum.

The &quot;addendum&quot; attribute will typically be handled in a generic object block.
Multiple documents can use the same addendum template, with just the case caption
varying.

Required attributes:
  - filename: name used for output PDF
  - title: display name for the output PDF
  - enabled
  - has_addendum: set to False if the document never has overflow, like for a DOCX template

Optional attribute:
  - addendum: an attachment block
  - overflow_fields

#### as\_docx

```python
 | as_docx(key='final', refresh=True)
```

Returns the assembled document as a single DOCX file, if possible. Otherwise returns a PDF.

#### as\_list

```python
 | as_list(key='final', refresh=True)
```

Returns a list of the document and its addendum, if any.
Specify refresh=True if you want to generate the attachment new each time.
This behavior is the default.

#### safe\_value

```python
 | safe_value(field_name, overflow_message=None, preserve_newlines=False, input_width=80)
```

Shortcut syntax for accessing the &quot;safe&quot; (shorter than overflow trigger)
value of a field that we have specified as needing an addendum.

#### overflow\_value

```python
 | overflow_value(field_name: str, overflow_message=None, preserve_newlines=False, input_width=80)
```

Shortcut syntax for accessing the &quot;overflow&quot; value (amount that exceeds overflow trigger)
for the given field as a string.

Should mirror the &quot;safe_value&quot; for the same field.

## ALDocumentBundle Objects

```python
class ALDocumentBundle(DAList)
```

DAList of ALDocuments or nested ALDocumentBundles.

Use case: providing a list of documents in a specific order.

**Example**:

  - Cover page
  - Main motion form
  - Notice of Interpreter Request
  
  E.g., you may bundle documents one way for the court, one way for the user, one way for the
  opposing party. ALDocuments can separately be &quot;enabled&quot; or &quot;disabled&quot; for a particular run, which
  will affect their inclusion in all bundles.
  
  A bundle can be returned as one PDF or as a list of documents. If the list contains nested
  bundles, each nested bundle can similarly be returned as a combined PDF or a list of documents.
  
  required attributes:
  - filename
  - title
  optional attribute: enabled

#### enabled\_documents

```python
 | enabled_documents()
```

Returns the enabled documents

#### as\_flat\_list

```python
 | as_flat_list(key='final', refresh=True)
```

Returns the nested bundle as a single flat list. This could be the preferred way to deliver forms to the
court, e.g.--one file per court form/cover letter.

#### get\_titles

```python
 | get_titles(key='final') -> List[str]
```

Gets all of titles of the documents in a list

#### as\_pdf\_list

```python
 | as_pdf_list(key='final', refresh=True)
```

Returns the nested bundles as a list of PDFs that is only one level deep.

#### as\_editable\_list

```python
 | as_editable_list(key='final', refresh=True)
```

Return a flat list of the editable versions of the docs in this bundle.
Not yet tested with editable PDFs.

#### download\_list\_html

```python
 | download_list_html(key='final', format='pdf', view=True, refresh=True) -> str
```

Returns string of a table to display a list
of pdfs with &#x27;view&#x27; and &#x27;download&#x27; buttons.

#### download\_html

```python
 | download_html(key: str = 'final', format: str = 'pdf', view: bool = True, refresh: bool = True) -> str
```

Returns an HTML string of a table to display all the docs
combined into one pdf with &#x27;view&#x27; and &#x27;download&#x27; buttons.

#### send\_button\_html

```python
 | send_button_html(key: str = 'final', show_editable_checkbox: bool = True) -> str
```

Generate HTML for an input box and button that allows someone to send
the bundle to the specified email address.

Optionally, display a checkbox that allows someone to decide whether or not to
include an editable (Word) copy of the file, iff it is available.

#### send\_email

```python
 | send_email(to: any = None, key: str = 'final', editable: bool = False, template=None, **kwargs)
```

Send an email with the current bundle as a single flat pdf or as editable documents.
Can be used the same as https://docassemble.org/docs/functions.html#send_email with 
two optional additional params.

keyword arguments:
@param [editable] {bool} - Optional. User wants the editable docs. Default: False
@param [key] {string} - Optional. Which version of the doc. Default: &#x27;final&#x27;
@param to {string} - Same as da send_email `to` - email address(es) or objects with such.
@param template {object} - Same as da `send_email` `template` variable.
@param * {*} - Any other parameters you&#x27;d send to a da `send_email` function

#### table\_css

```python
 | table_css()
```

Return the css styles for the view/download table.
This will be hard to develop with and it will be a bit
harder to override for developers using this module.

## ALDocumentBundleDict Objects

```python
class ALDocumentBundleDict(DADict)
```

A dictionary with named bundles of ALDocuments.
In the assembly line, we expect to find two predetermined bundles:
court_bundle and user_bundle.

It may be helpful in some circumstances to have a &quot;bundle&quot; of bundles. E.g.,
you may want to present the user multiple combinations of documents for
different scenarios.

#### preview

```python
 | preview(format='PDF', bundle='user_bundle')
```

Create a copy of the document as a single PDF that is suitable for a preview version of the 
document (before signature is added).

#### as\_attachment

```python
 | as_attachment(format='PDF', bundle='court_bundle')
```

Return a list of PDF-ified documents, suitable to make an attachment to send_mail.

