---
id: advanced_efiling_docassemble
title: |
  Advanced E-filing
sidebar_label: Advanced E-filing
slug: /efiling/advanced-docassemble
---

This document covers more advanced techniques that you will likely have to use when
coding your interview to allow e-filing.

This guide, unlike the previous one, will integrate e-filing into a more realistic interview,
with most of the additional features that you would want in a user-facing interview.

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

For things like party types, you'll want to ask the AL questions about roles first, i.e. `user_ask_role`.

You can't anticipate all of the different situations that could happen when going through the interview. For some cases, you may have to fall back and let the litigant select the codes themselves.

## Searching for Existing Cases

The case search functionality is all in the `case_search.yml`. You should trigger the case search with `case_was_found` to
make sure that docassemble will run case search to completion and not exit early, which can cause confusing errors.

The output variables and their possible values are:
TODO(bryce): add those

The user will be guided through several screens to guide them to choose either a docket number or party name to search by.

## Payments

TODO(brycew)