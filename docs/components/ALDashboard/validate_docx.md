# Table of Contents

* [ALDashboard.validate\_docx](#ALDashboard.validate_docx)
  * [CallAndDebugUndefined](#ALDashboard.validate_docx.CallAndDebugUndefined)
    * [\_\_getitem\_\_](#ALDashboard.validate_docx.CallAndDebugUndefined.__getitem__)
  * [get\_jinja\_errors](#ALDashboard.validate_docx.get_jinja_errors)

---
sidebar_label: validate_docx
title: ALDashboard.validate_docx
---

<a id="ALDashboard.validate_docx.CallAndDebugUndefined"></a>

## CallAndDebugUndefined Objects

```python
class CallAndDebugUndefined(DebugUndefined)
```

Handles Jinja2 undefined errors by printing the name of the undefined variable.
Extended to handle callable methods.

<a id="ALDashboard.validate_docx.CallAndDebugUndefined.__getitem__"></a>

#### \_\_getitem\_\_

type: ignore

<a id="ALDashboard.validate_docx.get_jinja_errors"></a>

#### get\_jinja\_errors(the\_file: str)

```python
def get_jinja_errors(the_file: str) -> Optional[str]
```

Just try rendering the DOCX file as a Jinja2 template and catch any errors.
Returns a string with the errors, if any.

