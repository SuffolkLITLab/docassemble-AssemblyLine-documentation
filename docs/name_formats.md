---
id: name_formats
title: Name formats
sidebar_label: Name formats
slug: /naming
---

## Summary

### Goals
* Fewer conventions to remember
* Consistency

Name formats:
1. [`snake_case`](#snake_case)
1. [`kebab-case`](#kebab_case)
1. [`PascalCase`](#pascalcase)

In order of importance, names should be:
1. Descriptive/specific
1. Short


## General descriptions
### snake_case
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with underscores (`_`) instead of spaces
* All other characters are either 0-9 or a-z ([alphanumeric](#alphanumeric))

**When to use**
- Variable names. **Example:** `number_of_people`
- GitHub branch names. Example: `issue_12_address`
- Documents/templates in docassemble (.pdf, .docx). **Example:** `protective_order.pdf`
- YAML file names (.yml). **Example:** `protective_order.yml`
- Image file names (.jpg, .png, .svg, .ico). **Example:** `name_on_summons.jpg`
- Static files (.css, .py, .js, .json). **Example:** `styles.css`

### kebab-case
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with dashes (`-`) instead of spaces
* All other characters are either 0-9 or a-z ([alphanumeric](#alphanumeric))

**When to use**
- Documents that people will download. **Example:** `protective-order.yml`

### PascalCase
`PascalCase`

**When to use**
- Package names. **Example:** ProtectiveOrder
- docassemble Project name. **Example:** ProtectiveOrderRemoveAddress


## Details
### Forms stored in docassemble: snake_case

_Purpose: A name that’s not confusing to lawyers, but can be used as a variable name_

* Avoid using the section numbers of the law unless they are the common name of the form. **Example:** `protective_order.pdf`
* Include at least one descriptive term. Example: use `protective_order_209A.pdf`, even if attorneys call it "209A".
* In all other ways, use the common name of the form - the name attorneys know it by.

### Documents for people to download: kebab-case
_Purpose: A name that's accurate and visually clear to the user_

* We use dashes (`-`) because underscores (`_`) are sometimes hard to see in file names, especially if the text is underlined.
* Exactly the same as [the docassemble form name](#forms_stored_in_docassemble_snake_case) in all other ways.

### Other files stored in docassemble: snake_case
_Purpose: A name that's accurate and clear to developers_

No extra special conventions.

### Variables: snake_case
_Purpose: Clear and short, in that order_

No extra special conventions.

### Packages: PascalCase
_Purpose: follow python package and docassemble requirements_

No extra special conventions.

### Docassemble Projects: PascalCase
_Purpose: docassemble requirements_

No extra special conventions.


## Definitions

### Alphanumeric
A string that is alphanumeric has only digits 0-9 and the letters A-Z lowercase or uppercase in it. The letters can be lowercase or uppercase.

**Yes:** `A` `b` `12` `CZ` `5`

**No:** `A!` `(b)` `$12` `"CZ"` `0.5` 


## Other resources
**Different ways to name variables:** https://stackoverflow.com/a/54330161/14144258
