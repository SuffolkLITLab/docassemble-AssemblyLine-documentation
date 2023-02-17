---
sidebar_label: copy_button
title: ALToolbox.copy_button
---

#### copy\_button\_html

```python
def copy_button_html(text_to_copy: str,
                     text_before: str = "",
                     label: str = "Copy",
                     tooltip_inert_text: str = "Copy to clipboard",
                     tooltip_copied_text: str = "Copied!",
                     copy_template_block: bool = False,
                     scroll_class: str = "",
                     style_class: str = "",
                     adjust_height: str = "") -> str
```

Return the html for a button that will let a user copy the given text

To use, include `docassemble.ALToolbox:copy_button.yml` in your DA interview.

**Arguments**:

- `text_to_copy` - text you want the user to be able to copy.
- `text_before` - the prompt that will appear to the left of the HTML input
- `label` - the label of the Button
- `tooltip_inert_text` - text shown when the button is hovered over, before it&#x27;s clicked
- `tooltip_copied_text` - text shown when the button is hovered over, after the text is placed on the clipboard

