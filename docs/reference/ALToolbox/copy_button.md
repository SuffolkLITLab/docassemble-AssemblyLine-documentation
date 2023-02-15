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

