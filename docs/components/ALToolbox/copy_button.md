# Table of Contents

* [ALToolbox.copy\_button](#ALToolbox.copy_button)
  * [copy\_button\_html](#ALToolbox.copy_button.copy_button_html)

pydoc-module-header.hbs<a id="ALToolbox.copy_button.copy_button_html"></a>

#### copy\_button\_html(text\_to\_copy: str, text\_before: str = "", label: str = "Copy", tooltip\_inert\_text: str = "Copy to clipboard", tooltip\_copied\_text: str = "Copied!", copy\_template\_block: bool = False, scroll\_class: str = "", style\_class: str = "", adjust\_height: str = "")

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

