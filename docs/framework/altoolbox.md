---
id: altoolbox
title: |
    ALToolbox functions and components
sidebar_label: ALToolbox functions and components
slug: /framework/altoolbox
---

The functions and classes listed on this page can be used without the Assembly
Line framework. Follow the instructions to include each component in your
interview, which may involve including a single YAML file or a module, CSS, and
JavaScript file.

## Collapsible help text

Use `collapse_template()` to display an accordion-style information box that
starts out hidden but expands when the user clicks on it. The contents of the
information box come from a Docassemble [`template`
block](https://docassemble.org/docs/initial.html#template). The `subject` will
display with an arrow, and the `content` of the template will be shown when the
`subject` is clicked on.

We [recommend using this for help
text](question_style_help_your_user.md#provide-help-information-in-context) in
your interviews.

It works a lot like this `details` element:

<details><summary>Like this</summary>
<p>
Context-specific help goes here.
</p>
</details>

To include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
---
features:
  css: docassemble.ALToolbox:collapse_template.css
```  

Example usage:

```yaml
---
id: example question
question: |
  What is your favorite fruit?
subquestion: |
  ${ fruit_explanation }
---
template: fruit_explanation
subject: |
  Like this
content: |
  Context-specific help goes here.
```

[Code for `collapse_template`](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/misc.py)

## Display a series of tabs

`tabbed_templates_html()` displays a series of Docassemble
[`template`s](https://docassemble.org/docs/initial.html#template) with Bootstrap
tabs.

Example: `tabbed_templates_html('unique_name_of_tab_group', tab_template1, tab_template2)`.

Include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
```

## Format telephone numbers as clickable links

This `tel` function just makes a string representing a telephone number
clickable, which opens the dialer on mobile.

For example: `tel('617-555-5555')`

Include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
```

## Shorten a URL

The `shorten_url` function lets you use your Docassemble server as a URL
shortener.

The function has one parameter: `original_url` and can be called like this:
`shorten_url('https://www.example.com')`.

Links expire in 7 days, and can be to either internal or external content.
The URL will still display your server's domain name, and will look like this:

`https://my.docassemble-server.com/goto?c=aRjzWcNZyJGWnMQghHamcndEnVKfhNwo`

Include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
```

## Format numbers with a `thousands` separator

Use the `thousands()` function to format a `currency` value without adding a
currency symbol but with `,` separating the thousands positions. The decimal
portion is also rounded down. For example, for a PDF form that already includes
a `$` symbol. 

Example: `thousands(1870.22)` will display as `1,870`.

To use, include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
```

## Display a fontawesome icon inline

Docassemble allows you to display an icon from [fontawesome](https://fontawesome.com/),
but it does not provide control over the size or color of the icon. Use
`fa_icon()` to gain more control over the icon that is inserted.

Parameters:

* `icon`: a string representing a fontawesome icon. The icon needs to be in the free library.
* `color` can be any [Bootstrap color variable](https://getbootstrap.com/docs/4.0/utilities/colors/). For example: `primary`, `secondary`, `warning`
* `color_css` allows you to use a CSS hex code to represent the color, e.g., `#fff` for black.
* `size` is used to control the [fontawesome size](https://fontawesome.com/v6.0/docs/web/style/size) (without the `fa-` prefix). Valid values include `2xs`, the default of `sm` all the way to `2xl`.

## Total a list of values that may not be defined

`sum_if_defined()` returns the total of a list of values that may or may not be
defined. Each variable's name should be passed as a string as a separate
parameter.

Use it like this:

`sum_if_defined('value1', 'value2', 'value3')`. Using `sum_if_defined()` will
not error if any of the values are undefined. If no value is defined,
`sum_if_defined()` will return `0`.

It is usually a better pattern to put the values into a list and use the
built-in Python function
[`sum`](https://docs.python.org/3/library/functions.html#sum), but this provides
an alternative that may require less effort depending on how your form is
labeled.

## Provide a button that allows a user to copy text to the clipboard

Use `copy_button_html()` to display an HTML input with a button
that allows the user to copy the text to their device's clipboard.

Parameters:

* `text_to_copy`: text you want the user to be able to copy.
* `text_before`: the prompt that will appear to the left of the HTML input
* `label`: defaults to "Copy"
* `tooltip_inert_text`: defaults to "Copy to clipboard" when hovered over
* `tooltip_copied_text`: defaults to "Copied!" when the text is placed on the clipboard


```python
include:
  - docassemble.ALToolbox:copy_button.yml
```