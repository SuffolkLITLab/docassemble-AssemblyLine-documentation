---
sidebar_label: save_input_data
title: ALToolbox.save_input_data
---

#### save\_input\_data

```python
def save_input_data(title: str = "",
                    input_dict: Optional[Dict[str, Any]] = None,
                    tags: Optional[List[str]] = None) -> None
```

This function is used by survey type interviews to save input data for data reporting purposes.

The input_dict should a dictionary where each key is a string and each value is a value from a Docassemble interview
question. Typically that is a string, float, int, or a DADict.

