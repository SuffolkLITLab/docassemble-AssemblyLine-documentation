---
id: efiling_codes
title: |
  E-filing: Tyler codes
sidebar_label: E-filing codes
slug: /efiling/tyler-codes
---

Codes are how Tyler Technologies handles the complexity of case categories,
case types, filing types, and party types. Each code is a number along with
a human readable name, like "210" and "Family" for the family case category.

:::warning
This e-filing functionality is being updated often, so this documentation might be out of date.
If anything is incorrect or doesn't work as expected, feel free to email us at
[massaccess@suffolk.edu](mailto:massaccess@suffolk.edu).
:::

If you are expecting to file into different courts, a potential complication is that some courts have different codes for the same cases.
For example, Peoria county's Adoption code is 7405, and the Adoption case type is 5892.
The good news is that most case categories and case types have the same name. You can hardcode the expected name of the case category or case type with
the following code block:

```python
# court_id can be any IL court, like "adams" or "peoria".
categories = proxy_conn.get_case_categories(court_id, fileable_only=True, timing='Initial')
for category in categories:
  if category['name'] == 'Adoption':
    tyler_category = category['code']
```

For things like party types, you'll want to ask the AL questions about roles first, i.e. `user_ask_role`.

You can't anticipate all of the different situations that could happen when going through the interview. For some cases, you may have to fall back and let the litigant select the codes themselves.
