---
id: advanced_efiling_docassemble
title: |
  Advanced E-filing
sidebar_label: Advanced E-filing
slug: /efiling/advanced-docassemble
---

This document covers more advanced techniques that you will likely have to use when
coding your interview to allow e-filing.

## Codes

If you are expecting to file into different courts, a potential complication is that some courts have different codes for the same cases.
For example, Peoria county's Adoption code is 7405, and the Adoption case type is 5892.
This should be exception, but our EFSP will prevent you from filing into courts with the wrong codes.
The good news is that most case categories and case types have the same name. You can hardcode the expected name of the case category / type with
the following code block:

```python
# court_id can be any IL court, like "adams" or "peoria".
categories = proxy_conn.get_case_categories(court_id, fileable_only=True, timing='Initial')
for category in categories:
  if category['name'] == 'Adoption':
    tyler_category = category['code']
```

You can't anticipate all of the different situations that could happen when going through the interview. For some cases, you may have to fall back and let the litigant select the codes themselves.


## Payments