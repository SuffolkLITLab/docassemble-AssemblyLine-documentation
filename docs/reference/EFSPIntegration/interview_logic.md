---
sidebar_label: interview_logic
title: EFSPIntegration.interview_logic
---

A group of methods that were code blocks in various parts of the EFSP
package, but for better python tooling support, were moved here.

## EFCaseSearch Objects

```python
class EFCaseSearch(DAObject)
```

A data-class that has holds all of the information and state for a single case search

#### search\_went\_wrong

Returns true if something errored during the case search process

#### get\_lookup\_choices

Returns the DA choice list of what ways you are allowed to search for a case;
By default, this is &quot;party_search&quot;, and &quot;docket_lookup&quot;, and depending on the
court, it could also include &quot;non_indexed_case&quot;.

Not passed as direct arguments, but the object attributes `party_search_choice`,
`docket_lookup_choice`, and `non_indexed_choice` are the user-facing labels
for each choice.

#### num\_case\_choices

The number of cases that someone should have to choose between if there are too many.
Mostly to limit the amount of up-front waiting someone will have to do.

#### search\_case\_by\_name

Searches for cases by party name. If there are more than 10 cases found, we don&#x27;t
add all of the detailed information about the case, just for the first few cases

#### shift\_case\_select\_window

Specifically used in case_search.yml, with an action to only fetch a detailed information
for a few cases at a time

#### get\_full\_court\_info

Gets all of the information about the court from the id

#### get\_max\_allowed\_sizes

Returns attachment max size, then message max size

#### make\_filter

Makes a &#x27;filter&#x27; function from some simple type.

Necessary because docassemble doesn&#x27;t store lambdas and functions well in
interview dicts, so the filters need to be set as primitive types and kept
that way until the search actually happens (in filter_codes).

#### filter\_codes

Given a list of filter functions from most specific to least specific,
(if true, use that code), filters a total list of codes. If any codes match the exclude filter, won&#x27;t use them.

#### get\_available\_efile\_courts

Gets the list of efilable courts, if it can

