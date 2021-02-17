---
id: document_variables_reference
title: Label variables quick reference
sidebar_label: Add labels and variables
slug: /label_variables
---

To save time and effort later, use the naming conventions in your PDFs and DOCXs that the [AssemblyLine Weaver interview code generator](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) will understand.

Note that these are just the words that the ALWeaver knows. They help you generate your starting code. They are just a subset of the variables in the AssemblyLine library. 

## Example documents
- [A fully labeled PDF](./assets/generic_motion_family_law.pdf)
- [The DOCX version of the same motion](./assets/generic_motion_family_law.docx)

## Prefixes: [Reserved words](#reserved-words) for objects
<!-- TODO: put in overview Objects can be things like people or a court (trial_court). -->

### People Prefixes
Words that the [ALWeaver](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) will automatically know are people.

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - name of the 1st user | user | user[0] | user[0] |
| **First M. Last** - name of the 1st other party | other_party | other_parties[0] | other_parties[0] |
| **First M. Last** - name of the 1st plaintiff | plaintiff | plaintiff[0] | plaintiff[0] |
| **First M. Last** - name of the 1st defendant | defendant | defendant[0] | defendant[0] |
| **First M. Last** - name of the 1st petitioner | petitioner | petitioner[0] | petitioner[0] |
| **First M. Last** - name of the 1st respondent | respondent | respondent[0] | respondent[0] |
| **First M. Last** - name of the 1st spouse | spouse | spouse[0] | spouse[0] |
| **First M. Last** - name of the 1st parent | parent | parent[0] | parent[0] |
| **First M. Last** - name of the 1st guardian | guardian | guardian[0] | guardian[0] |
| **First M. Last** - name of the 1st caregiver | caregiver | caregiver[0] | caregiver[0] |
| **First M. Last** - name of the 1st attorney | attorney | attorney[0] | attorney[0] |
| **First M. Last** - name of the 1st translator | translator | translator[0] | translator[0] |
| **First M. Last** - name of the 1st debt_collector | debt_collector | debt_collector[0] | debt_collector[0] |
| **First M. Last** - name of the 1st creditor | creditor | creditors[0]| creditors[0] |
| **First M. Last** - name of the 1st child | child | children[0] | children[0] |
| **First M. Last** - name of the 1st guardian ad litem | guardian_ad_litem | guardians_ad_litem[0] | guardians_ad_litem[0] |
| **First M. Last** - name of the 1st witnesses | witnesses | witnesses[0] | witnesses[0] |
| **First M. Last** - name of the 1st decedent | decedent | decedents[0] | decedents[0] |
| **First M. Last** - name of the 1st interested party | interested_party | interested_parties[0] | interested_parties[0] |


### Other reserved words
Other words the [ALWeaver](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) will automatically know.

| Use case | Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|:-|
| name of the court | **Court Name** | trial_court | trial_court | trial_court |
| 1st docket number |**123456** | docket_number | docket_numbers[0] | docket_numbers[0] |
| Date that the user signs the form | **February 4, 2021** | signature_date | signature_date | signature_date |

## Suffixes: [Reserved words](#reserved-words) for attributes

<!-- TODO: Double check an example county name -->
<!-- TODO: Come up with a second address for the mailing address? -->

### Field types
<!-- These suffixes can be used to get the ALWeaver to automatically set the type of field that will be used and to create variables more effectively. It may affect the code that is generated. -->

**`_date`**
Something ending in `_date` will automatically show up in the weaver already set as a date field.
**Example:** `hearing_date`

**`_yes` combined with `_no`**
<!-- TODO: Move to overview doc if that's ever created -->
For PDFs specifically. When two otherwise identical labels in a PDF end in `_yes` and `_no`, they will be combined into one variable in the interview order, and will appear in the online interview as a single checkbox.
**Example:**
`is_minor_yes` and `is_minor_no`

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| Minor 'Yes' checkbox is checked or blank | is_minor_yes | "is_minor_yes": ${ is_minor is True } | is_minor |
| Minor 'No' checkbox is checked or blank | is_minor_no | "is_minor_no": ${ is_minor is not True } | is_minor |

### People Suffixes
<!-- These are attributes of people or things. One attribute of a `parent` might be their `birthdate`. In the table below, imagine we need information about someone's parent. -->

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - name of the 1st parent | parent<strong>_name</strong> | parents[0]<strong>.name</strong> | parents<strong>.gather()</strong> |
| **First M. Last** - name of the 1st parent | parent<strong>_name_full</strong> | parents[0]<strong>.name</strong> | parents<strong>.gather()</strong> |
| **First** - first name of 1st parent  | parent<strong>_name_first</strong> | parents[0]<strong>.name.first</strong> | parents<strong>.gather()</strong> |
| **Middle** - middle name | parent<strong>_name_middle</strong> | parents[0]<strong>.name.middle</strong> | parents<strong>.gather()</strong> |
| **M.** - middle initials | parent<strong>_name_middle_initial</strong> | parents[0]<strong>.name.middle_initial()</strong> | parents<strong>.gather()</strong> |
| **Last** - last name | parent<strong>_name_last</strong> | parents[0]<strong>.name.last</strong> | parents<strong>.gather()</strong> |
| **Jr** - suffix | parent<strong>_name_suffix</strong> | parents[0]<strong>.name.suffix</strong> | parents<strong>.gather()</strong> |
| **female** - gender of 1st parent | parent<strong>_gender</strong> | parents[0]<strong>.gender</strong> | parents[0]<strong>.gender</strong> |
| **01/01/2001** - birthdate | parent<strong>_birthdate</strong> | parents[0]<strong>.birthdate.format()</strong> | parents[0]<strong>.birthdate</strong> |
| **01/01/2001** - birthdate | parent<strong>_age</strong> | parents[0]<strong>.birthdate.format()</strong> | parents[0]<strong>.birthdate</strong> |
| **someone@example.com** | parent<strong>_email</strong> | parents[0]<strong>.email</strong> | parents[0]<strong>.email</strong> |
| **120 Tremont St** | parent<strong>_address_street</strong> | parents[0]<strong>.address.address</strong> | parents[0]<strong>.address.address</strong> |
| **120 Tremont St** | parent<strong>_address_address</strong> | parents[0]<strong>.address.address</strong> | parents[0]<strong>.address.address</strong> |
| **Unit 2** | parent<strong>_address_street2</strong> | parents[0]<strong>.address.unit</strong> | parents[0]<strong>.address.unit</strong> |
| **Unit 2** | parent<strong>_address_unit</strong> | parents[0]<strong>.address.unit</strong> | parents[0]<strong>.address.unit</strong> |
| **Boston** | parent<strong>_address_city</strong> | parents[0]<strong>.address.city</strong> | parents[0]<strong>.address.city</strong> |
| **MA** | parent<strong>_address_state</strong> | parents[0]<strong>.address.state</strong> | parents[0]<strong>.address.state</strong> |
| **02108** | parent<strong>_address_zip</strong> | parents[0]<strong>.address.zip</strong> | parents[0]<strong>.address.zip</strong> |
| **USA** | parent<strong>_address_country</strong> | parents[0]<strong>.address.country</strong> | parents[0]<strong>.address.country</strong> |
| Multi-line full address | parent<strong>_address_block</strong> | parents[0]<strong>.address.block()</strong> | parents[0]<strong>.address.address</strong> |
| **120 Tremont St, Unit 2, Boston, MA 02108** | parent<strong>_address_on_one_line</strong> | parents[0]<strong>.address.on_one_line()</strong> | parents[0]<strong>.address.address</strong> |
| **120 Tremont St, Unit 2** | parent<strong>_address_line_one</strong> | parents[0]<strong>.address.line_one()</strong> | parents[0]<strong>.address.address</strong> |
| **Boston, MA 02108** | parent<strong>_address_city_state_zip</strong> | parents[0]<strong>.address.line_two()</strong> | parents[0]<strong>.address.address</strong> |
| **120 Tremont St** | parent<strong>_mail_address_street</strong> | parents[0]<strong>.mail_address.address</strong> | parents[0]<strong>.mail_address.address</strong> |
| **120 Tremont St** | parent<strong>_mail_address_address</strong> | parents[0]<strong>.mail_address.address</strong> | parents[0]<strong>.mail_address.address</strong> |
| **Unit 2** | parent<strong>_mail_address_street2</strong> | parents[0]<strong>.mail_address.unit</strong> | parents[0]<strong>.mail_address.unit</strong> |
| **Unit 2** | parent<strong>_mail_address_unit</strong> | parents[0]<strong>.mail_address.unit</strong> | parents[0]<strong>.mail_address.unit</strong> |
| **Boston** | parent<strong>_mail_address_city</strong> | parents[0]<strong>.mail_address.city</strong> | parents[0]<strong>.mail_address.city</strong> |
| **MA** | parent<strong>_mail_address_state</strong> | parents[0]<strong>.mail_address.state</strong> | parents[0]<strong>.mail_address.state</strong> |
| **02108** | parent<strong>_mail_address_zip</strong> | parents[0]<strong>.mail_address.zip</strong> | parents[0]<strong>.mail_address.zip</strong> |
| **USA** | parent<strong>_mail_address_country</strong> | parents[0]<strong>.mail_address.country</strong> | parents[0]<strong>.mail_address.country</strong> |
| Multi-line full mailing address | parent<strong>_mail_address_block</strong> | parents[0]<strong>.mail_address.block()</strong> | parents[0]<strong>.mail_address.address</strong> |
| **120 Tremont St, Unit 2, Boston, MA 02108** | parent<strong>_mail_address_on_one_line</strong> | parents[0]<strong>.mail_address.on_one_line()</strong> | parents[0]<strong>.mail_address.address</strong> |
| **120 Tremont St, Unit 2** | parent<strong>_mail_address_line_one</strong> | parents[0]<strong>.mail_address.line_one()</strong> | parents[0]<strong>.mail_address.address</strong> |
| **Boston, MA 02108** | parent<strong>_mail_address_city_state_zip</strong> | parents[0]<strong>.mail_address.line_two()</strong> | parents[0]<strong>.mail_address.address</strong> |
| An image of a signature | parent<strong>_signature</strong> | parents[0]<strong>.signature</strong> | parents[0]<strong>.signature</strong> |
| **123-123-1234** - landline number of 1st parent | parent<strong>_phone_number</strong> | parents[0]<strong>.phone_number</strong> | parents[0]<strong>.phone_number</strong> |
| **123-123-1234** - mobile number of 1st parent | parent<strong>_mobile_number</strong> | parents[0]<strong>.mobile_number</strong> | parents[0]<strong>.mobile_number</strong> |
| **123-123-1234 (cell)** or **123-123-1234 (other)** or **123-123-1234 (cell) 123-123-1234 (other)** - one or more phone numbers of 1st parent | parent<strong>_phones</strong> | parents[0]<strong>.phone_numbers()</strong> | - |

<!-- 
:::info Custom AssemblyLine methods
- `.phone_numbers()`
- `.familiar()`
- `.familiar_or()`
:::
-->

<!-- TODO: Do the resources below belong elsewhere? -->
<!-- TODO: This is stuff I've gotten questions about -->

Docassemble resources:
1. [Names](https://docassemble.org/docs/objects.html#Name)
1. [Other things to do with individuals](https://docassemble.org/docs/objects.html#Individual)

### Court
| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **Court name** - name of the court | trial_court | trial_court | trial_court |
| **County name** - county of the court | trial_court<strong>_county</strong> | trial_court<strong>.address.county</strong> | trial_court<strong>.address.address</strong> |
| **Division name** - division of the court | trial_court<strong>_division</strong> | trial_court<strong>.division</strong> | trial_court<strong>.division</strong> |
| **Department name** - deparment of the court | trial_court<strong>_deparment</strong> | trial_court<strong>.deparment</strong> | trial_court<strong>.deparment</strong> |


## More than one
Situations where you have any these:
1. More than one item in a group, like 2 parents
1. The document needs the information for an item to be printed in mutiple places
1. You have a big area where you want to list a group of names or other values

<!-- TODO: Add definition of 'reserved word' in overview and link to that in the tip -->

You can do the below for any reserved word  on the page. You can also use these methods in combination.

### Multiple items of one category
For example, when there are multiple children.

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - name of the 2nd parent | parent<strong>2</strong>_name | parents<strong>[1]</strong>.name | parents.gather() |
| **14** - age of the 3rd child | child<strong>3</strong>_age | children<strong>[2]</strong>.age | children<strong>[2]</strong>.age |

### Print a value in multiple places
<!-- TODO: Move some of this explanation to overview doc? -->

:::warning
In a PDF you **have** to use a **unique label** for every field. See below for how to deal with this.
:::

When docassemble reads PDFs, each field should have a **unique label**. That means if you need to put a plaintiff's name in multiple places on the form, you need to add two underscores (`__`) and a number to the end of the label each time. **Example:** `plaintiff__1` and `plaintiff__2`.

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - 1st appearance of name of 1st plaintiff | plaintiff<strong>__1</strong> | plaintiffs[0].gather() | plaintiffs[0].name |
| **First M. Last** - 2nd appearance of name of 1st plaintiff | plaintiff<strong>__2</strong> | plaintiffs[0].gather() | plaintiffs[0].name |

### Print all the items in one spot
List all the plaintiffs, all the docket numbers, etc. All [people words](#people_prefixes) can be used.

<!-- TODO: Check on way that docket numbers are 'gathered'? -->

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **123456, 654321** - list of all docket numbers | docket_numbers | docket_numbers | docket_numbers |
| **123-123-1234 (cell)** or **123-123-1234 (other)** or **123-123-1234 (cell) 123-123-1234 (other)** - one or more phone numbers of 1st parent | parent<strong>_phones</strong> | parents[0]<strong>.phone_numbers()</strong> | - |
| **First M. Last** of every user | users | users | users.gather() |
| **First M. Last** of every other_party | other_parties | other_parties | other_parties.gather() |
| **First M. Last** of every plaintiff | plaintiffs | plaintiffs | plaintiffs.gather() |
| **First M. Last** of every defendant | defendants | defendants | defendants.gather() |
| **First M. Last** of every petitioner | petitioners | petitioners | petitioners.gather() |
| **First M. Last** of every respondent | respondents | respondents | respondents.gather() |
| **First M. Last** of every spouse | spouses | spouses | spouses.gather() |
| **First M. Last** of every parent | parents | parents | parents.gather() |
| **First M. Last** of every guardian | guardians | guardians | guardians.gather() |
| **First M. Last** of every caregiver | caregivers | caregivers | caregivers.gather() |
| **First M. Last** of every attorney | attorneys | attorneys | attorneys.gather() |
| **First M. Last** of every translator | translators | translators | translators.gather() |
| **First M. Last** of every debt_collector | debt_collectors | debt_collectors | debt_collectors.gather() |
| **First M. Last** of every creditor | creditors | creditors | creditors.gather() |
| **First M. Last** of every child | children | children | children.gather() |
| **First M. Last** of every guardian_ad_litem | guardians_ad_litem | guardians_ad_litem | guardians_ad_litem.gather() |
| **First M. Last** of every witness | witnesses | witnesses | witnesses.gather() |
| **First M. Last** of every decedent | decedents | decedents | decedents.gather() |
| **First M. Last** of every interested_party | interested_parties | interested_parties | interested_parties.gather() |

## Combining
You can combine the methods on this page in many ways. Here are some examples

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - 1st appearance of the name of the 2nd parent | parent<strong>2</strong>_name<strong>__1</strong> | parents<strong>[1]</strong> | parents.gather() |
| **First M. Last** - 2nd appearance of the name of the 2nd parent | parent<strong>2</strong>_name<strong>__2</strong> | parents<strong>[1]</strong> | parents.gather() |
| **14** - 2nd appearance of 3rd child's age | child<strong>3</strong>_age<strong>__2</strong> | children<strong>[2]</strong>.age | children<strong>[2]</strong>.birthdate |
| 3rd appearance of a full list of all plaintiffs | plaintiffs<strong>__3</strong> | plaintiffs | plaintiffs.gather() |

## DOCX only
Some [reserved words](#reserved-words) that are just in DOCX files.

| Document output format | DOCX | Interview order |
|:-|:-|:-|
| **01/01/1991** - 1st child's date of birth  | children[0].birthdate | children[0].birthdate |
| **January 1, 1991** - display birth | children[0].birthdate.format() | children[0].birthdate |
| Age for young children - **2 years** or **4 months** or **2 weeks** or **2 days** | children[0].formatted_age() | - |
| **Firstname1, Firstname2, and Firstname3** - the 1st names of all the children joined with 'and'. Works for a single child too. | children.familiar() | - |
| **Firstname1, Firstname2, or Firstname3** - the 1st names of all the children joined with 'or'. Works for a single child too. | children.familiar_or() | - |
| **123-123-1234 (cell)** or **123-123-1234 (other)** or **123-123-1234 (cell) 123-123-1234 (other)** - one or more numbers of 1st parent | parents[0].phone_numbers() | - |

For more about `.format()`, see [the docassemble DADateTime documentation](https://docassemble.org/docs/objects.html#DADateTime)

## Definitions

### Reserved words
AssemblyLine's [ALWeaver](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) has some specific words that it knows to look for so it can help make your work easier. Those **reserved words** are listed here.
