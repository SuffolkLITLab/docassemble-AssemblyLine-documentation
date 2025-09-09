---
sidebar_label: custom_jinja_filters
title: AssemblyLine.custom_jinja_filters
---

#### catchall\_options

Jinja2 filter to support defining options for DACatchAll fields inside a DOCX template.

This filter takes a list of items, which can be strings, dictionaries, or tuples,
and converts them into a list of tuples containing the code and label for each option.

The items can be in various formats:

- String: `"code: label"`
- Dictionary: `\{"code": "label"\}`
- Tuple: `("code", "label")`
- List of any of the above types

The resulting list of tuples is assigned to the `_catchall_options` attribute of the
DACatchAll object, which can then be used to populate the options in the catchall field.

Example usage in a DOCX template:


Example in an interview with `features: use catchall: True` turned on:


```
\{\{ my_catchall_field | catchall_options("code1: label1", "code2: label2") \}\}

\{\{ my_catchall_field_2 | catchall_options(\{"code1": "label1"\}, \{"code2": "label2"\}) \}\}
```
```
---
if: |
    hasattr(x, "_catchall_options")
generic object: DACatchAll
question: |
    $\{ x.object_name() \}?
fields:
    - $\{ x.object_name() \}: x.value
      code: x._catchall_options
```

**Arguments**:

- `value` _DACatchAll_ - The DACatchAll object to which the options will be assigned.
- `*raw_items` - A variable number of arguments representing the options to be added.

**Returns**:

- `DACatchAll` - The modified DACatchAll object with the assigned options.

#### catchall\_label

Jinja2 filter to allow you to define a label for a DACatchAll field inside a DOCX template.

This filter takes a label string and assigns it to the `label` attribute of the
DACatchAll object. This label can be used to provide a more descriptive name for the
catchall field in the user interface.

Example usage in a DOCX template:
Example in an interview with `features: use catchall: True` turned on:
```
\{\{ my_catchall_field | catchall_label("My Custom Label") \}\}
```
```
---
generic object: DACatchAll
question: |
    $\{ x.label if hasattr(x, "label") else x.object_name() \}?
fields:
    - $\{ x.label if hasattr(x, "label") else x.object_name() \}: x.value
```

**Arguments**:

- `value` _DACatchAll_ - The DACatchAll object to which the label will be assigned.
- `label` _str_ - The label string to assign to the DACatchAll object.
  

**Returns**:

- `DACatchAll` - The modified DACatchAll object with the assigned label.

#### catchall\_datatype

Jinja2 filter to allow you to define a datatype for a DACatchAll field inside a DOCX template.

This filter takes a datatype string and assigns it to the `datatype` attribute of the
DACatchAll object. This can be useful for specifying the type of data expected in the
catchall field.

Example usage in a DOCX template:

```
\{\{ my_catchall_field | catchall_datatype("radio") \}\}
```

**Arguments**:

- `value` _DACatchAll_ - The DACatchAll object to which the datatype will be assigned.
- `datatype` _str_ - The datatype string to assign to the DACatchAll object.
  

**Returns**:

- `DACatchAll` - The modified DACatchAll object with the assigned datatype.

#### catchall\_question

Jinja2 filter to allow you to define a question for a DACatchAll field inside a DOCX template.

This filter takes a question string and assigns it to the `question` attribute of the
DACatchAll object. This can be useful for providing a specific question or prompt
related to the catchall field.

Example usage in a DOCX template:

```
\{\{ my_catchall_field | catchall_question("What additional information do you need?") \}\}
```

**Arguments**:

- `value` _DACatchAll_ - The DACatchAll object to which the question will be assigned.
- `question` _str_ - The question string to assign to the DACatchAll object.
  

**Returns**:

- `DACatchAll` - The modified DACatchAll object with the assigned question.

#### catchall\_subquestion

Jinja2 filter to allow you to define a subquestion for a DACatchAll field inside a DOCX template.

This filter takes a subquestion string and assigns it to the `subquestion` attribute of the
DACatchAll object. This can be useful for providing additional context or instructions
related to the catchall field.

Example usage in a DOCX template:

```
\{\{ my_catchall_field | catchall_subquestion("Please provide additional details.") \}\}
```

**Arguments**:

- `value` _DACatchAll_ - The DACatchAll object to which the subquestion will be assigned.
- `subquestion` _str_ - The subquestion string to assign to the DACatchAll object.
  

**Returns**:

- `DACatchAll` - The modified DACatchAll object with the assigned subquestion.

#### if\_final

Jinja2 filter to only seek the definition of a variable if the current value of `i`
is equal to the expected value (normally &quot;final&quot;); otherwise,
return a placeholder.

This is useful in ALDocument DOCX templates where you want to show a placeholder when
the document is being generated for preview or testing, but let Docassemble trigger
the actual value when the document is being generated for final output.

E.g., to show a placeholder for a signature field when the document is being
shown to the signer, but show the actual signature when the document is finalized.

The default placeholder is &quot;[ signature ]&quot; if the variable name follows the pattern &quot;users[0].signature&quot;,
or [ variable_name ] if it is not an attribute of an item.

`i` will be the value from the template&#x27;s context unless it is explicitly passed,
as in an ALDocument&#x27;s &quot;preview&quot; or &quot;final&quot; values.

**Example**:

  Contents of test_if_final.docx:
    ```jinja
    \{\{ users[0].signature | if_final \}\}
    ```
  
  Returns &quot;[ signature ]&quot; if `i` (passed to the context of the attachment block) is not &quot;final&quot;,
  otherwise the actual value of `users[0].signature`.
  
    ```yaml
    ---
    include:
    - assembly_line.yml
    ---
    mandatory: True
    code: |
        preview_screen
        final_screen
    ---
    question: |
        Here is what it looks like unsigned
    subquestion: |
        $\{ test_if_final_attachment.as_pdf(key="preview") \}
    continue button field: preview_screen
    ---
    question: |
        Here is what it looks like signed
    subquestion: |
        $\{ test_if_final_attachment.as_pdf(key="final") \}
    event: final_screen
    ---
    objects:
        - test_if_final_attachment: ALDocument.using(title="test_if_final", filename="test_if_final")
    ---
    attachment:
        variable name: test_if_final_attachment[i]
        docx template file: test_if_final.docx
    ```
  

**Arguments**:

- `context` _Jinja2Context_ - The Jinja2 context, automatically passed by the `pass_context` decorator.
- `value` _Any_ - The original value as passed to the filter.
- `i` _str, optional_ - The current value of `i`. If not provided, it will be fetched from the context.
- `expected_i` _Union[str, List[str]], optional_ - The expected value(s) of `i` to trigger passthrough of `value`.
  Defaults to &quot;final&quot;.
- `placeholder` _str, optional_ - The placeholder string to return if the condition is not met. If
  not provided, a default placeholder will be generated based on the variable name.
  

**Returns**:

- `Any` - The original `value` if `i` matches `expected_i`, otherwise the `placeholder`.

#### catchall\_fields\_code

Create Docassemble code for a catchall field with the appropriate datatypes.

**Arguments**:

- `value` _DACatchAll_ - The DACatchAll object containing the question and options.

**Returns**:

  List[Dict[str, Any]]: A dictionary containing the Docassemble code for the catchall question.

