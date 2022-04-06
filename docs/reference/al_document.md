---
sidebar_label: al_document
title: al_document
---

#### html\_safe\_str

```python
def html_safe_str(the_string: str) -> str
```

Return a string that can be used as an html class or id

#### table\_row

```python
def table_row(title: str, button_htmls: List[str] = []) -> str
```

Uses the provided title and list of button html strings to
return the row of an AL document-styled table in HTML format.

## ALAddendumField Objects

```python
class ALAddendumField(DAObject)
```

Object representing a single field and its attributes as related to whether
it should be displayed in an addendum. Useful for PDF templates.

The items can be strings or lists/list-like objects. It does not know
how to handle overflow for a dictionary, e.g.

Required attributes:
- field_name (str): represents the name of a docassemble variable
- overflow_trigger (int | bool): determines when text is cut off and sent to addendum

Optional/planned (not implemented yet):
- headers-&gt;dict(attribute: display label for table)
- field_style-&gt;&quot;list&quot;|&quot;table&quot;|&quot;string&quot; (optional: defaults to &quot;string&quot;)

#### overflow\_value

```python
def overflow_value(preserve_newlines: bool = False,
                   input_width: int = 80,
                   overflow_message: str = "")
```

Try to return just the portion of the variable (list-like object or string)
that is not contained in the safe_value().

#### max\_lines

```python
def max_lines(input_width: int = 80, overflow_message_length=0) -> int
```

Estimate the number of rows in the field in the output document.

#### value

```python
def value() -> Any
```

Return the full value, disregarding overflow. Could be useful in addendum
if you want to show the whole value without making user flip back/forth between multiple
pages.

#### safe\_value

```python
def safe_value(overflow_message: str = "",
               input_width: int = 80,
               preserve_newlines: bool = False,
               _original_value=None)
```

Try to return just the portion of the variable
that is _shorter than_ the overflow trigger. Otherwise, return empty string.

**Arguments**:

- `overflow_message` _str_ - A short message to go on the page where text is cutoff.
- `input_width` _int_ - The width, in characters, of the input box. Defaults to 80.
- `preserve_newlines` _bool_ - Determines whether newlines are preserved in the &quot;safe&quot; text.
  Defaults to False, which means all newlines are removed. This allows more text to appear
  before being sent to the addendum.
- `_original_value` _Any_ - for speed reasons, you can provide the full text and just use this
  method to determine if the overflow trigger is exceeded. If no _original_value is
  provided, this method will determine it using the value_if_defined() method.

#### value\_if\_defined

```python
def value_if_defined() -> Any
```

Return the value of the field if it is defined, otherwise return an empty string.
Addendum should never trigger docassemble&#x27;s variable gathering.

#### columns

```python
def columns(skip_empty_attributes: bool = True,
            skip_attributes: set = {"complete"}) -> Optional[list]
```

Return a list of the columns in this object.

By default, skip empty attributes and the `complete` attribute.

#### type

```python
def type() -> str
```

list | object_list | other

#### is\_list

```python
def is_list() -> bool
```

Identify whether the field is a list, whether of objects/dictionaries or just plain variables.

#### is\_object\_list

```python
def is_object_list() -> bool
```

Identify whether the field represents a list of either dictionaries or objects.

#### overflow\_markdown

```python
def overflow_markdown() -> str
```

Return a formatted markdown table or bulleted list representing the values in the list.

This method does not give you any control over the output other than labels of columns,
but you also do not need to use this output if you want to independently control the format
of the table.

#### overflow\_docx

```python
def overflow_docx(
    path: str = "docassemble.ALDocumentDict:data/templates/addendum_table.docx"
)
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
def initializeObject(*pargs, **kwargs)
```

When we create a new entry implicitly, make sure we also set the .field_name
attribute to the key name so it knows its own field_name.

#### defined\_fields

```python
def defined_fields(style="overflow_only")
```

Return a filtered list of just the defined fields.
If the &quot;style&quot; is set to overflow_only, only return the overflow values.

#### has\_overflow

```python
def has_overflow() -> bool
```

Returns True if any defined field&#x27;s length exceeds the overflow trigger.

**Returns**:

- `bool` - True if at least 1 field has &quot;overflow&quot; content, False otherwise.

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

A dictionary of attachments, either created by a DAFile or an attachment
block. Typically there are three:
1. The final version of a document with a signature. E.g., my_doc[&#x27;final&#x27;].
2. The preview version of a document with no signature. E.g.,
my_doc[&#x27;preview&#x27;].
3. An addendum of a document contained in the attribute `addendum`. E.g.
`my_doc.addendum`.

There is no limit to the number of keys, but the ALDocumentBundle class
expects at least a &quot;final&quot; key to exist, and the `addendum` attribute is
required if you desire to use PDF documents with text overflow. It is best
practice to use exactly the two keys &quot;final&quot; and &quot;preview&quot; and the attribute
&quot;addendum&quot;. The &quot;final&quot; and &quot;preview&quot; documents will normally be the same
template, but with logic controlling the display of a particular section, such
as the signature.

Each form that an interview generates should get its own ALDocument object.

The &quot;addendum&quot; attribute can be handled in a generic object block. Multiple
documents can use the same addendum template, with just the case caption
varying.

ALDocuments are designed to be used contingently as part of ALDocumentBundle
objects. Each ALDocument is considered to be &quot;enabled&quot; or &quot;disabled&quot; for a
particular interview user&#x27;s session. This allows you to always work with a
single object representing all of the possible documents an interview can
generate, and use encapsulated logic to trigger individual documents inclusion
on the final download screen.

**Attributes**:

- `filename` _str_ - name used for output PDF
- `title` _str_ - display name for the output PDF
- `enabled` _bool_ - if this document should be created. See examples.
- `addendum` _DAFile | DAFileCollection_ - (optional) an attachment block
- `overflow_fields` _ALAddendumField_ - (optional) ALAddendumFieldDict
  instance. These values will be used to detect and handle overflow.
- `has_addendum` _bool_ - (optional) Defaults to False. Set to True if the
  document could have overflow, like for a PDF template.
  

**Notes**:

  The `enabled` attribute should always be defined by a code block or the
  objects block, because by default it is considered fresh on each page
  load. If your interview logic requires that you directly ask the user
  whether or not to include a document, you can use a single intermediate
  variable that is posed to the interview user to work around this
  limitation.
  
- `Examples` - # TODO: the code blocks aren&#x27;t working right yet on the Docusaurus page.
  
  Simple use where the document is always enabled and will have no addendum
  --------------------------------------------------------------------------
  ```yaml
  ---
  objects:
  - my_doc: ALDocument.using(filename=&quot;myDoc.pdf&quot;, title=&quot;myDoc&quot;, enabled=True)
  ---
  attachment:
  variable name: my_doc[i]  # This same template will be used for the `preview` and `final` keys
- `content` - |
  Here is some content
  
  % if i == &#x27;final&#x27;:
  ${ users[0].signature }
  % elif i == &#x27;preview&#x27;:
  [ Your signature here ]
  % endif
  ```
  
  Enable a document conditionally
  --------------------------------
  ```yaml
  ---
  # See that `enabled` is not defined here
  objects:
  - affidavit_of_indigency: ALDocument.using(filename=&quot;affidavit-of-indigency.pdf&quot;, title=&quot;Affidavit of Indigency&quot;)
  ---
- `code` - |
  affidavit_of_indigency.enabled = ask_indigency_questions and is_indigent
  ```
  
  An example enabling with a question posed to the interview user
  ----------------------------------------------------------------
  You should always use a code block or an object block to set the &quot;enabled&quot; status;
  Use an intermediate variable if you want to ask the user directly whether or not to include a document.
  ```yaml
  ---
- `question` - |
  Do you want the extra document included?
- `yesno` - include_extra_document
  ---
- `code` - |
  extra_document.enabled = include_extra_document
  ---
  attachment:
  variable name: extra_document[i] # This same template will be used for `final` and `preview`
  docx template file: extra_document.docx
  ```
  
  For a document that may need an addendum, you must specify this when the object is created
  or in a mandatory code block. The addendum will only be triggered if the document has &quot;overflow&quot;
  in one of the fields that you specify.
  ```
  ---
  objects:
  - my_doc: ALDocument.using(filename=&quot;myDoc.pdf&quot;, title=&quot;myDoc&quot;, enabled=True, has_addendum=True)
  ---
  attachment:
  variable name: my_doc[i]
  ...
  ---
  generic object: ALDocument
  attachment:
  variable name: x.addendum
  docx template file: docx_addendum.docx
  ---
- `code` - |
  my_doc.overflow_fields[&#x27;big_text_variable&#x27;].overflow_trigger = 640 # Characters
  my_doc.overflow_fields[&#x27;big_text_variable&#x27;].label = &quot;Big text label&quot; # Optional - you may use in your addendum
  my_doc.overflow_fields[&#x27;list_of_objects_variable&#x27;].overflow_trigger = 4 # Items in the list
  my_doc.overflow_fields.gathered = True
  ```

#### as\_docx

```python
def as_docx(key: str = "final", refresh: bool = True) -> DAFile
```

Returns the assembled document as a single DOCX file, if possible. Otherwise returns a PDF.

#### as\_list

```python
def as_list(key: str = "final", refresh: bool = True) -> List[DAFile]
```

Returns a list of the document and its addendum, if any.
Specify refresh=True if you want to generate the attachment new each time.
This behavior is the default.

#### safe\_value

```python
def safe_value(field_name: str,
               overflow_message: str = None,
               preserve_newlines: bool = False,
               input_width: int = 80)
```

Shortcut syntax for accessing the &quot;safe&quot; (shorter than overflow trigger)
value of a field that we have specified as needing an addendum.

#### overflow\_value

```python
def overflow_value(field_name: str,
                   overflow_message: str = None,
                   preserve_newlines: bool = False,
                   input_width: int = 80)
```

Shortcut syntax for accessing the &quot;overflow&quot; value (amount that exceeds overflow trigger)
for the given field as a string.

Should mirror the &quot;safe_value&quot; for the same field.

## ALStaticDocument Objects

```python
class ALStaticDocument(DAStaticFile)
```

A class that allows one-line initialization of static documents to include in an ALDocumentBundle.

**Notes**:

  You should always place the static file within the /data/static folder of a package.
  ALDocumentBundle relies on a publically accessible file. The /data/templates folder is private.
  

**Attributes**:

- `filename(str)` - the path to the file within /data/static/.
- `title(str)` - The title that will display as a row when invoked with `download_list_html()` method
  of an ALDocumentBundle.

**Examples**:

  Add a static PDF file to a document bundle.
  .. code-block:: yaml
  ---
  objects:
  - static_test: ALStaticDocument.using(title=&quot;Static Test&quot;, filename=&quot;static.pdf&quot;, enabled=True)
  ---
  objects:
  - bundle: ALDocumentBundle.using(elements=[static_test], filename=&quot;bundle&quot;, title=&quot;Documents to download now&quot;)
  

**Todo**:

  Handle files placed in /data/templates if that turns out to be useful. Likely by copying into
  a DAFile with pdf_concatenate().

#### as\_docx

```python
def as_docx(key: str = "final",
            refresh: bool = True) -> Union[DAStaticFile, DAFile]
```

Returns the assembled document as a single DOCX file, if possible. Otherwise returns a PDF.

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

#### as\_pdf

```python
def as_pdf(key: str = "final", refresh: bool = True) -> Optional[DAFile]
```

Returns the Bundle as a single PDF DAFile, or None if none of the documents are enabled.

#### as\_zip

```python
def as_zip(key: str = "final",
           refresh: bool = True,
           title: str = "",
           format="pdf",
           include_pdf=True) -> DAFile
```

Returns a zip file containing the whole bundle

#### enabled\_documents

```python
def enabled_documents(refresh: bool = True) -> List[Any]
```

Returns the enabled documents

**Arguments**:

- `refresh(bool)` - Controls whether the &#x27;enabled&#x27; attribute is reconsidered.

#### as\_flat\_list

```python
def as_flat_list(key: str = "final", refresh: bool = True) -> List[DAFile]
```

Returns the nested bundle as a single flat list. This could be the preferred way to deliver forms to the
court, e.g.--one file per court form/cover letter.

#### get\_titles

```python
def get_titles(key: str = "final", refresh: bool = True) -> List[str]
```

Gets all of titles of the documents in a list

#### as\_pdf\_list

```python
def as_pdf_list(key: str = "final", refresh: bool = True) -> List[DAFile]
```

Returns the nested bundles as a list of PDFs that is only one level deep.

#### as\_docx\_list

```python
def as_docx_list(key: str = "final", refresh: bool = True) -> List[DAFile]
```

Returns the nested bundles as a list of DOCX files. If the file isn&#x27;t able
to be represented as a DOCX, the original file or a PDF will be returned instead.

#### as\_editable\_list

```python
def as_editable_list(key: str = "final", refresh: bool = True) -> List[DAFile]
```

Return a flat list of the DOCX versions of the docs in this bundle, if they exist.

#### download\_list\_html

```python
def download_list_html(key: str = "final",
                       format: str = "pdf",
                       view: bool = True,
                       refresh: bool = True,
                       include_zip: bool = True,
                       view_label="View",
                       view_icon: str = "eye",
                       download_label: str = "Download",
                       download_icon: str = "download",
                       zip_label: str = None,
                       zip_icon: str = "file-archive") -> str
```

Returns string of a table to display a list
of pdfs with &#x27;view&#x27; and &#x27;download&#x27; buttons.

`format` is one of:
* pdf
* docx
* original

#### download\_html

```python
def download_html(key: str = "final",
                  format: str = "pdf",
                  view: bool = True,
                  refresh: bool = True,
                  view_label: str = "View",
                  view_icon: str = "eye",
                  download_label: str = "Download",
                  download_icon: str = "download") -> str
```

Returns an HTML string of a table to display all the docs
combined into one pdf with &#x27;view&#x27; and &#x27;download&#x27; buttons.

#### send\_button\_html

```python
def send_button_html(key: str = "final",
                     show_editable_checkbox: bool = True) -> str
```

Generate HTML for an input box and button that allows someone to send
the bundle to the specified email address.

Optionally, display a checkbox that allows someone to decide whether or not to
include an editable (Word) copy of the file, iff it is available.

#### send\_email

