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

If `show_decimals`, will call `int(num)`, truncating the decimals instead of
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

Display a fontawesome icon inline.

Docassemble allows you to display an icon from [fontawesome](https://fontawesome.com),
but it does not provide control over the size or color of the icon. This function gives
you more control over the icon that is inserted.

**Arguments**:

- `icon` - a string representing a fontawesome icon. The icon needs to be in the
  [free library](https://fontawesome.com/search?o=r&amp;m=free).
- `color` - can be any [Bootstrap color variable](https://getbootstrapc.mo/docs/4.0/utilities/colors).
  For example: `primary`, `secondary`, `warning`
- `color_css` - allows you to use a CSS code to represent the color, e.g., `blue`, or ``fff`` for black
- `size` - used to control the [fontawesome size](https://fontawesome.com/v6.0/docs/web/style/size)
  (without the `fa-` prefix). Valid values include `2xs`, `xs`, the default of `sm`,
  `md`, `lg`, `xl`, `2x1`, and the python `None`, which defaults to `md`.
- `fa_class` - let&#x27;s you specify the fontawesome class, needed for any icon that isn&#x27;t
  the default class of `fa-solid`, like `fa-brands`, or `fa-regular` and `fa-light`.
  

**Returns**:

  HTML for a font-awesome icon of the specified size and color.

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

**Arguments**:

- `checked_value` - defaults to `[X]` but can be set to any string or even a `DAFile` or `DAStaticFile`
  with the image of a checkbox
- `unchecked_value` - opposite meaning of `checked_value` and defaults to `[  ]`

#### nice\_county\_name

```python
def nice_county_name(address: Address) -> str
```

If the county name contains the word &quot;County&quot;, which Google Address
Autocomplete does by default, remove it.

