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

In order of importance, names should be:<br/>
1. Descriptive/specific
1. Short


## General descriptions
### snake_case
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with underscores (`_`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

**When to use**
- Variable names. **Example:** `number_of_people`
- GitHub branch names. **Example:** `issue_12_address`
- Documents/templates in docassemble (.pdf, .docx). **Example:** `protective_order.pdf`
- YAML file names (.yml). **Example:** `protective_order.yml`
- Image file names (.jpg, .png, .svg, .ico). **Example:** `name_on_summons.jpg`
- Static files (.css, .py, .js, .json). **Example:** `styles.css`

### kebab-case
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with dashes (`-`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

**When to use**
- Documents that people will download. **Example:** `protective-order.yml`

### PascalCase
* Always start with a letter, not a digit
* Each word starts with an uppercase letter
* All the words are squished together
* All characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))


**When to use**
- Package names. **Example:** ProtectiveOrder
- docassemble Project names. **Example:** ProtectiveOrderRemoveAddress


## Details
### Forms stored in docassemble: [snake_case](#snake_case)
_Purpose: Clear to lawyers and can be used as a variable name_
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with underscores (`_`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

**Extra info**
* Avoid using the section numbers of the law unless they are the common name of the form. **Example:** `protective_order.pdf`
* Include at least one descriptive term. **Example:** use `protective_order_209A.pdf`, even if attorneys call it "209A".
* In all other ways, use the common name of the form - the name attorneys know it by.

### Downloadable documents: [kebab-case](#kebab_case)
_Purpose: Accurate and visually clear to the person downloading_
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with dashes (`-`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

**Extra info**
* We use dashes (`-`) because underscores (`_`) are sometimes hard to see in file names, especially if the text is underlined.
* Exactly the same as [the docassemble form name](#forms_stored_in_docassemble_snake_case) in all other ways.

### Other files stored in docassemble: [snake_case](#snake_case)
_Purpose: A name that's accurate and clear to developers_
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with underscores (`_`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

No extra special conventions.

### PDF variables:  [snake_case](#snake_case)
_Purpose: Meet PDF or docx requirements and get AssemblyLine perks_
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with underscores (`_`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

See more details about [document variable names](document_variables).

### Code variables: [snake_case](#snake_case) mostly
_Purpose: Clear and short, in that order_
* Always start with a letter, not a digit
* All characters are lowercase
* Separate words with underscores (`_`) instead of spaces
* All other characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

**Extra info**

[`snake_case`](#snake_case):
- Regular variable names
- Objects
- Methods of classes

[`PascalCase`](#pascalcase):
- Classes

Variable names should read close to natural English out loud. Avoid 'hungarian notation'. Variable names with their type in them are using hungarian notation. Good variable names can do most of the work.

**Avoid**
- `is_parent_bool` indicating a boolean
- `children_list` indicating a list
- `countries_dict` indicating a dictionary

**Exceptions**
There are times where adding extra information into the variable name does help make things more clear.
- `got_notice_date`
- [The convensions for our PDF and docx variables](document_variables)

Good variable names can do the work most of the time.
- For a boolean value, use a word or phrase that you can answer with yes or no. They are often verb-noun pairs. `has_` and `is_` can be useful. **Examples:** `is_minor`, `was_convicted`, `has_court_date`.
- Use a plural word for a list of things. Use a singular word for one thing. **Examples:** `children`, `child`
<!-- TODO: Add link to guidance on naming variables -->


### Packages: [PascalCase](#pascalcase)
_Purpose: Meet python package and docassemble requirements and stay consistent_
* Always start with a letter, not a digit
* Each word starts with an uppercase letter
* All the words are squished together
* All characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

### Docassemble Projects: [PascalCase](#pascalcase)
_Purpose: Meet docassemble requirements_
* Always start with a letter, not a digit
* Each word starts with an uppercase letter
* All the words are squished together
* All characters are either 0 to 9 or a to z ([alphanumeric](#alphanumeric))

Each Project has to have a unique name, different from all other Project names.


## Definitions

### Alphanumeric
A string that is alphanumeric has only digits 0 to 9 and the letters A to Z in it. The letters can be lowercase or uppercase.

**Yes:** `A` `b` `12` `CZ` `5`

**No:** `A!` `(b)` `$12` `"CZ"` `0.5` 


## Other resources
* [Different ways to name variables](https://en.wikipedia.org/wiki/Naming_convention_%28programming%29#Examples_of_multiple-word_identifier_formats)
