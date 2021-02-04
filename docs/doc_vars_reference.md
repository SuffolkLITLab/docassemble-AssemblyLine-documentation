---
id: document_variables_reference
title: Label Variables Quick Reference
sidebar_label: Label Variables
slug: /reference
---

Lables and variables you can use in your PDFs and DOCXs to make the most of the [AssemblyLine Weaver interview code generator](https://github.com/suffolkLITLab/docassemble-assemblylinewizard).

:::note
This is a subset of the words that AssemblyLine can handle. These just the words that the [ALWeaver](https://github.com/suffolkLITLab/docassemble-assemblylinewizard) knows that will help you generate your starting code.
:::

## Reserved words (Prefixes)
The very specific words the [ALWeaver](https://github.com/suffolkLITLab/docassemble-assemblylinewizard) knows.

### People
Words that the [ALWeaver](https://github.com/suffolkLITLab/docassemble-assemblylinewizard) will automatically know are people.

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - name of the 1st user | user | user[0] | user[0] |
| **First M. Last** - name of the 1st other_party | other_party | other_parties[0] | other_parties[0] |
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
| **First M. Last** - name of the 1st guardian_ad_litem | guardian_ad_litem | guardians_ad_litem[0] | guardians_ad_litem[0] |
| **First M. Last** - name of the 1st witnesses | witnesses | witnesses[0] | witnesses[0] |
| **First M. Last** - name of the 1st decedent | decedent | decedents[0] | decedents[0] |
| **First M. Last** - name of the 1st interested_party | interested_party | interested_parties[0] | interested_parties[0] |


### Other reserved names
Other words the [ALWeaver](https://github.com/suffolkLITLab/docassemble-assemblylinewizard) will automatically know.

:::caution
`courts` will be replaced with one `trial_court`
:::

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **Court Name** - name of the 1st court | court | courts[0] | courts[0] |
| **123456** - 1st docket number | docket_number | docket_numbers[0] | docket_numbers[0] |
|  | signature_date |  |  |

## Reserved words (Suffixes)
These are attributes of people or things. One attribute of a `parent` might be their `birthdate`. In the table below, imagine we need information about someone's 2nd parent.

<!-- TODO: check on mobile number -->

Reference material:
1. [Names](https://docassemble.org/docs/objects.html#Name)
1. [Other things to do with individuals](https://docassemble.org/docs/objects.html#Individual)

 <!-- TODO: Double check how county name would appear -->

### People

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - name of the 2nd parent | parent<strong>_name</strong> | parents[0]<strong>.name</strong> | parents<strong>.gather()</strong> |
| **First M. Last** - name of the 2nd parent | parent<strong>_name_full</strong> | parents[0]<strong>.name</strong> | parents<strong>.gather()</strong> |
| **First** - first name of 2nd parent  | parent<strong>_name_first</strong> | parents[0]<strong>.name.first</strong> | parents<strong>.gather()</strong> |
| **Middle** - middle name | parent<strong>_name_middle</strong> | parents[0]<strong>.name.middle</strong> | parents<strong>.gather()</strong> |
| **M.** - middle initials | parent<strong>_name_middle_initial</strong> | parents[0]<strong>.name.middle_initial()</strong> | parents<strong>.gather()</strong> |
| **Last** - last name | parent<strong>_name_last</strong> | parents[0]<strong>.name.last</strong> | parents<strong>.gather()</strong> |
| **Jr** - suffix | parent<strong>_name_suffix</strong> | parents[0]<strong>.name.suffix</strong> | parents<strong>.gather()</strong> |
| **female** - gender of 2nd parent | parent<strong>_gender</strong> | parents[0]<strong>.gender</strong> | parents[0]<strong>.gender</strong> |
| **01/01/2001** - birthdate | parent<strong>_birthdate</strong> | parents[0]<strong>.birthdate</strong> | parents[0]<strong>.birthdate</strong> |
| **01/01/2001** - birthdate | parent<strong>_age</strong> | parents[0]<strong>.birthdate</strong> | parents[0]<strong>.birthdate</strong> |
| **someone@example.com** | parent<strong>_email</strong> | parents[0]<strong>.email</strong> | parents[0]<strong>.email</strong> |
| Multiline full address | parent<strong>_address_block</strong> | parents[0]<strong>.address.block()</strong> | parents[0]<strong>.address.block()</strong> |
| **120 Tremont St** | parent<strong>_address_street</strong> | parents[0]<strong>.address.address</strong> | parents[0]<strong>.address.address</strong> |
| **120 Tremont St** | parent<strong>_address_address</strong> | parents[0]<strong>.address.address</strong> | parents[0]<strong>.address.address</strong> |
| **Unit 2** | parent<strong>_address_street2</strong> | parents[0]<strong>.address.unit</strong> | parents[0]<strong>.address.unit</strong> |
| **Unit 2** | parent<strong>_address_unit</strong> | parents[0]<strong>.address.unit</strong> | parents[0]<strong>.address.unit</strong> |
| **Boston** | parent<strong>_address_city</strong> | parents[0]<strong>.address.city</strong> | parents[0]<strong>.address.city</strong> |
| **MA** | parent<strong>_address_state</strong> | parents[0]<strong>.address.state</strong> | parents[0]<strong>.address.state</strong> |
| **02108** | parent<strong>_address_zip</strong> | parents[0]<strong>.address.zip</strong> | parents[0]<strong>.address.zip</strong> |
| **Suffolk County** | parent<strong>_address_county</strong> | parents[0]<strong>.address.county</strong> | parents[0]<strong>.address.county</strong> |
| **USA** | parent<strong>_address_country</strong> | parents[0]<strong>.address.country</strong> | parents[0]<strong>.address.country</strong> |
| **120 Tremont St, Unit 2, Boston, MA 02108** | parent<strong>_address_on_one_line</strong> | parents[0]<strong>.address.on_one_line()</strong> | parents[0]<strong>.address.on_one_line()</strong> |
| **120 Tremont St, Unit 2** | parent<strong>_address_line_one</strong> | parents[0]<strong>.mail_address.line_one()</strong> | parents[0]<strong>.mail_address.line_one()</strong> |
| **Boston, MA 02108** | parent<strong>_address_city_state_zip</strong> | parents[0]<strong>.mail_address.line_two()</strong> | parents[0]<strong>.mail_address.line_two()</strong> |
| Multiline full address | parent<strong>_mail_address_block</strong> | parents[0]<strong>.mail_address.block()</strong> | parents[0]<strong>.mail_address.block()</strong> |
| **120 Tremont St** | parent<strong>_mail_address_street</strong> | parents[0]<strong>.mail_address.address</strong> | parents[0]<strong>.mail_address.address</strong> |
| **120 Tremont St** | parent<strong>_mail_address_address</strong> | parents[0]<strong>.mail_address.address</strong> | parents[0]<strong>.mail_address.address</strong> |
| **Unit 2** | parent<strong>_mail_address_street2</strong> | parents[0]<strong>.mail_address.unit</strong> | parents[0]<strong>.mail_address.unit</strong> |
| **Unit 2** | parent<strong>_mail_address_unit</strong> | parents[0]<strong>.mail_address.unit</strong> | parents[0]<strong>.mail_address.unit</strong> |
| **Boston** | parent<strong>_mail_address_city</strong> | parents[0]<strong>.mail_address.city</strong> | parents[0]<strong>.mail_address.city</strong> |
| **MA** | parent<strong>_mail_address_state</strong> | parents[0]<strong>.mail_address.state</strong> | parents[0]<strong>.mail_address.state</strong> |
| **02108** | parent<strong>_mail_address_zip</strong> | parents[0]<strong>.mail_address.zip</strong> | parents[0]<strong>.mail_address.zip</strong> |
| **Suffolk County** | parent<strong>_mail_address_county</strong> | parents[0]<strong>.mail_address.county</strong> | parents[0]<strong>.mail_address.county</strong> |
| **USA** | parent<strong>_mail_address_country</strong> | parents[0]<strong>.mail_address.country</strong> | parents[0]<strong>.mail_address.country</strong> |
| **120 Tremont St, Unit 2, Boston, MA 02108** | parent<strong>_mail_address_on_one_line</strong> | parents[0]<strong>.mail_address.on_one_line()</strong> | parents[0]<strong>.mail_address.on_one_line()</strong> |
| **120 Tremont St, Unit 2** | parent<strong>_mail_address_line_one</strong> | parents[0]<strong>.mail_address.line_one()</strong> | parents[0]<strong>.mail_address.line_one()</strong> |
| **Boston, MA 02108** | parent<strong>_mail_address_city_state_zip</strong> | parents[0]<strong>.mail_address.line_two()</strong> | parents[0]<strong>.mail_address.line_two()</strong> |
| An image of a signature | parent<strong>_signature</strong> | parents[0]<strong>.signature</strong> | parents[0]<strong>.signature</strong> |
| **123-123-1234** - landline number | parent<strong>_phone</strong> | parents[0]<strong>.phone_number</strong> | parents[0]<strong>.phone_number</strong> |
| **123-123-1234 (cell) 123-123-1234 (other)**  | parent<strong>_phones</strong> | parents[0]<strong>.phone_numbers()</strong> | parents[0]<strong>.phone_numbers()</strong> |

:::note
`.phone_numbers()` is a method that AssemblyLine has added.
:::

### Courts
| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **Division name** - division of the first court | court<strong>_division</strong> | courts[0]<strong>.division</strong> | courts[0]<strong>.division</strong> |
| **County name** - county of the first court | court<strong>_county</strong> | courts[0]<strong>.address.county</strong> | courts[0]<strong>.address.county</strong> |


## More than one
Situations where you have any these:
1. More than one item in a group, like 2 parents
1. The document needs the information for an item to be printed in mutiple places
1. You have a big area where you want to list a group of names or other values

<!-- TODO: Add definition of 'reserved word' in overview and link to that in the tip -->

:::tip
1. You can do the below for any reserved word  on the page.
1. You can combine these methods.
:::

### Multiple items of one category
For example, when there are multiple children.

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - name of the 2nd parent | parent<strong>2</strong>_name | parents<strong>[1].</strong>name | parents.gather() |
| **14** - age of the 3rd child | child<strong>3</strong>_age | children<strong>[2]</strong>.age | children<strong>[2]</strong>.age |

### Repeat a value in multiple places

<!-- TODO: Move some of this explanation to overview doc? -->

:::warning
In a PDF you **have** to use **unique label** for every field. See below for how to deal with this.
:::

When docassemble reads PDFs, each field should have a **unique label**. That means if you need to put a plaintiff's name in mutiple places on the form, you need to add two underscores (`__`) and a number to the end of the label each time. **Example:** `plaintiff__1` and `plaintiff__2`.

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - 1st appearance of name of 1st plaintiff | plaintiff<strong>__1</strong> | plaintiffs[0].gather() | plaintiffs[0].name |
| **First M. Last** - 2nd appearance of name of 1st plaintiff | plaintiff<strong>__2</strong> | plaintiffs[0].gather() | plaintiffs[0].name |

### Print all the names of things in a group in one spot
List all the plaintiffs, all the courts, docket numbers, etc.

:::info
All [people words](#people) can be used
:::

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
|  | phones |  | .phone_numbers() |
| **Court1 Name, Court2 Name** - name of all the courts | court | courts[0] | courts[0] |
|  | docket_numbers |  |  |
|  | users |  |  |
|  | other_parties |  |  |
|  | plaintiffs |  |  |
|  | defendants |  |  |
|  | petitioners |  |  |
|  | respondents |  |  |
|  | spouses |  |  |
|  | parents |  |  |
|  | guardians |  |  |
|  | caregivers |  |  |
|  | attorneys |  |  |
|  | translators |  |  |
|  | debt_collectors |  |  |
|  | creditors |  |  |
|  | children |  |  |
|  | guardians_ad_litem |  |  |
|  | witnesses |  |  |
|  | decedents |  |  |
|  | interested_parties |  |  |


## Combining
You can combine the methods on this page in many ways. Here are some examples

| Document output format | PDF label | Attachment | Interview order |
|:-|:-|:-|:-|
| **First M. Last** - 1st appearance of the name of the 2nd parent | parent<strong>2</strong>_name__1 | parents<strong>[1].</strong>name | parents.gather() |
| **First M. Last** - 2nd appearance of the name of the 2nd parent | parent<strong>2</strong>_name__2 | parents<strong>[1].</strong>name | parents.gather() |
| **14** - age of the 3rd child | child<strong>3</strong>_age | children<strong>[2]</strong>.age | children<strong>[2]</strong>.age |

<!-- 
#DOCX only
.birthdate,
.birthdate.format\(.*\)',
.familiar\(\)',
.familiar_or\(\)',
.phone_numbers\(\)',
.formatted_age\(\)'
 -->
