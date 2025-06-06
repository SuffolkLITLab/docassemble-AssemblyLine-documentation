---
sidebar_label: misc
title: ALToolbox.misc
---

#### thousands

Return a whole number formatted with thousands separator.
Optionally, format with 2 decimal points (for a PDF form with the
currency symbol already present in the form)

If `show_decimals`, will call `int(num)`, truncating the decimals instead of
rounding to the closest int.

#### tel

Format a phone number so you can click on it to open in your phone dialer

#### fa\_icon

Display a fontawesome icon inline.

Docassemble allows you to display an icon from [fontawesome](https://fontawesome.com),
but it does not provide control over the size or color of the icon. This function gives
you more control over the icon that is inserted.

**Arguments**:

- `icon` - a string representing a fontawesome icon. The icon needs to be in the
  [free library](https://fontawesome.com/search?o=r&amp;m=free).
- `color` - can be any [Bootstrap color variable](https://getbootstrap.com/docs/5.0/utilities/colors/).
  For example: `primary`, `secondary`, `warning`
- `color_css` - allows you to use a CSS code to represent the color, e.g., `blue`, or ``fff`` for black
- `size` - used to control the [fontawesome size](https://fontawesome.com/v6.0/docs/web/style/size)
  (without the `fa-` prefix). Valid values include `2xs`, `xs`, the default of `sm`,
  `md`, `lg`, `xl`, `2x1`, and the python `None`, which defaults to `md`.
- `fa_class` - let&#x27;s you specify the fontawesome class, needed for any icon that isn&#x27;t
  the default class of `fa-solid`, like `fa-brands`, or `fa-regular` and `fa-light`.
- `aria_hidden` - if True, adds `aria-hidden="true"` to the icon, which is the default
  

**Returns**:

  HTML for a font-awesome icon of the specified size and color.

#### space

If the value as a string is defined, return it prefixed/suffixed. Defaults to prefix
of a space. Helps build a sentence with less cruft. Equivalent to SPACE function in
HotDocs.

#### yes\_no\_unknown

Return &#x27;unknown&#x27; if the value is None rather than False. Helper for PDF filling with
yesnomaybe fields

#### number\_to\_letter

Returns a capital letter representing ordinal position. E.g., 1=A, 2=B, etc. Appends letters
once you reach 26 in a way compatible with Excel/Google Sheets column naming conventions. 27=AA, 28=AB...

#### collapse\_template

Insert HTML for a Bootstrap &quot;collapse&quot; div.

Optionally, you can specify a custom icon to override the defaults:

The default icons are &quot;right caret&quot; which displays when the text is collapsed (`closed_icon`) and
&quot;down caret&quot; which displays when the text is open (`open_icon`).

#### tabbed\_templates\_html

Provided a list of templates, create Bootstrap v 4.5 tabs with the `subject` as the tab label.

#### review\_widget

A widget that allows people to give a quick review (thumbs up and down, with an optional text
component) in the middle of an interview without triggering a page reload.

If `review_action` is provided, once you press either of the thumbs, a text input screen with
a submit button appears, and once the text review is submitted (or after the thumbs, if no
`review_action` was provided), a final &quot;thank you&quot; message is displayed.

**Arguments**:

- `up_action` - the variable name of an event to be executed on the server if the
  thumbs up is pressed
- `down_action` - the variable name of an event to be executed on the server if the
  thumbs down is pressed
- `review_action` - the variable name of an event to be execute on the
  server when someone submits their text review
- `thumbs_display` - text displayed to user describing the thumbs
- `review_display` - text displayed to user describing the text input
- `submit_review_button` - text on the button to submit their text review
- `post_review_display` - text displayed to user after review is submitted

**Returns**:

  the HTML string of the widget

#### sum\_if\_defined

Lets you add up the value of variables that are not in a list

#### add\_records

List demo interviews in the current package to be run from the landing page

#### output\_checkbox

Generate a conditional checkbox for docx templates

**Arguments**:

- `checked_value` - defaults to `[X]` but can be set to any string or even a `DAFile` or `DAStaticFile`
  with the image of a checkbox
- `unchecked_value` - opposite meaning of `checked_value` and defaults to `[  ]`

#### nice\_county\_name

If the county name contains the word &quot;County&quot;, which Google Address
Autocomplete does by default, remove it.

#### button\_array

Create a grid of da-buttons from a dictionary of links and icons

This uses the same CSS classes to mimic the look and feel of Docassemble&#x27;s `buttons` field type, but
doesn&#x27;t have the limits of that particular input method. This is meant to appear
on any page of an interview in the `subquestion` area.

Optionally, you can limit access to paricular buttons by specifying a privilege or a list
of privileges.

**Arguments**:

- `button_list` - a dictionary of ButtonDicts (or plain dictionaries) with the following keys:
  - `name`: the text to display on the button
  - `image`: the name of a fontawesome icon to display on the button
  - `url`: the name of the page to link to
  - `privilege`: optional, the name of a Docassemble privilege that the user must have to see the button. Can be a list or a single string.
  
- `custom_container_class` - optional, a string of additional CSS classes to add to the container div
- `custom_link_class` - optional, a string of additional CSS classes to add to each link
  

**Returns**:

  HTML for a grid of buttons

