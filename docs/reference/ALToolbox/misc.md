---
sidebar_label: misc
title: ALToolbox.misc
---

#### thousands

```python
def thousands(num: Union[float, str, Decimal], show_decimals=False) -> str
```

Return a whole number formatted with thousands separator.
Optionally, format with 2 decimal points (for a PDF form with the
currency symbol already present in the form)

If `trucate`, will call `int(num)`, truncating the decimals instead of
rounding to the closest int.

#### tel

```python
def tel(phone_number) -> str
```

Format a phone number so you can click on it to open in your phone dialer

#### fa\_icon

```python
def fa_icon(icon: str,
            color="primary",
            color_css=None,
            size="sm",
            fa_class="fa-solid") -> str
```

Return HTML for a font-awesome icon of the specified size and color. You can reference
a CSS variable (such as Bootstrap theme color) or a true CSS color reference, such as &#x27;blue&#x27; or
&#x27;`DDDDDD`&#x27;. Defaults to Bootstrap theme color &quot;primary&quot;.

Sizes can be &#x27;2xs&#x27;, &#x27;xs&#x27;, &#x27;sm&#x27;, &#x27;md&#x27; (or None), &#x27;lg&#x27;, &#x27;xl&#x27;, &#x27;2xl&#x27;.

#### space

```python
def space(var_name: str, prefix=" ", suffix="") -> str
```

If the value as a string is defined, return it prefixed/suffixed. Defaults to prefix
of a space. Helps build a sentence with less cruft. Equivalent to SPACE function in
HotDocs.

#### yes\_no\_unknown

```python
def yes_no_unknown(var_name: str,
                   condition: Optional[bool],
                   unknown="Unknown",
                   placeholder=0)
```

Return &#x27;unknown&#x27; if the value is None rather than False. Helper for PDF filling with
yesnomaybe fields

#### number\_to\_letter

```python
def number_to_letter(n: Optional[int]) -> str
```

Returns a capital letter representing ordinal position. E.g., 1=A, 2=B, etc. Appends letters
once you reach 26 in a way compatible with Excel/Google Sheets column naming conventions. 27=AA, 28=AB...

#### collapse\_template

```python
def collapse_template(template,
                      classname=None,
                      closed_icon="caret-right",
                      open_icon="caret-down")
```

Insert HTML for a Bootstrap &quot;collapse&quot; div.

Optionally, you can specify a custom icon to override the defaults:

The default icons are &quot;🞂&quot; which displays when the text is collapsed (`closed_icon`) and
&quot;▼&quot; which displays when the text is open (`open_icon`).

#### tabbed\_templates\_html

```python
def tabbed_templates_html(tab_group_name: str, *pargs) -> str
```

Provided a list of templates, create Bootstrap v 4.5 tabs with the `subject` as the tab label.

#### review\_widget

```python
def review_widget(
        *,
        up_action: str,
        down_action: str,
        review_action: Optional[str] = None,
        thumbs_display: str = "Did we help you?",
        review_display: str = "Thanks! Let us know what we could do better",
        submit_review_button: str = "Add your review",
        post_review_display: str = "Thank you for your review!") -> str
```

A widget that allows people to give a quick review (thumbs up and down, with an optional text
component) in the middle of an interview without triggering a page reload.

If `review_action` is provided, once you press either of the thumbs, a text input screen with
a submit button appears, and once the text review is submitted (or after the thumbs, if no
`review_action` was provided), a final &quot;thank you&quot; messsage is displayed.

@param up_action {string} - the variable name of an event to be executed on the server if the
thumbs up is pressed
@param down_action {string} - the variable name of an event to be executed on the server i
the thumbs down is pressed
@param (optional) review_action {string} - the variable name of an event to be execute on the
server when someone submits their text review
@param (optional) thumbs_display {string} - text displayed to user describing the thumbs
@param (optional) review_display {string} - text displayed to user describing the text input
@param (optional) submit_review_button {string} - text on the button to submit their text review
@param (optional) post_review_display {string} - text displayed to user after review is
submitted

#### sum\_if\_defined

```python
def sum_if_defined(*pargs)
```

Lets you add up the value of variables that are not in a list

#### add\_records

```python
def add_records(obj, labels)
```

List demo interviews in the current package to be run from the landing page

#### output\_checkbox

```python
def output_checkbox(value_to_check: bool,
                    checked_value: str = "[X]",
                    unchecked_value: str = "[  ]")
```

Generate a conditional checkbox for docx templates

#### nice\_county\_name

```python
def nice_county_name(address: Address) -> str
```

If the county name contains the word &quot;County&quot;, which Google Address
Autocomplete does by default, remove it.

