---
id: document_variables_reference
title: Variables themselves
sidebar_label: Reference
slug: /reference
---


## People
| Document output format | PDF label | Interview order | Attachment |
|:-|:-|:-|:-|
| **Court Name** - name of first court | court | courts[0] | courts[0] |
| **123456** - first docket number | docket_number | docket_numbers[0] | docket_numbers[0] |
| **First M. Last** - name of the first user | user | user[0] | user[0] |
| **First M. Last** - name of the first other_party | other_party | other_parties[0] | other_parties[0] |
| **First M. Last** - name of the first plaintiff | plaintiff | plaintiff[0] | plaintiff[0] |
| **First M. Last** - name of the first defendant | defendant | defendant[0] | defendant[0] |
| **First M. Last** - name of the first petitioner | petitioner | petitioner[0] | petitioner[0] |
| **First M. Last** - name of the first respondent | respondent | respondent[0] | respondent[0] |
| **First M. Last** - name of the first spouse | spouse | spouse[0] | spouse[0] |
| **First M. Last** - name of the first parent | parent | parent[0] | parent[0] |
| **First M. Last** - name of the first guardian | guardian | guardian[0] | guardian[0] |
| **First M. Last** - name of the first caregiver | caregiver | caregiver[0] | caregiver[0] |
| **First M. Last** - name of the first attorney | attorney | attorney[0] | attorney[0] |
| **First M. Last** - name of the first translator | translator | translator[0] | translator[0] |
| **First M. Last** - name of the first debt_collector | debt_collector | debt_collector[0] | debt_collector[0] |
|  **First M. Last** - name of the firstcreditor | creditor | creditors[0] | creditors[0]|
| **First M. Last** - name of the first child | child | children[0] | children[0] |
| **First M. Last** - name of the first guardian_ad_litem | guardian_ad_litem | guardians_ad_litem[0] | guardians_ad_litem[0] |
| **First M. Last** - name of the first witnesses | witnesses | witnesses[0] | witnesses[0] |
| **First M. Last** - name of the first decedent | decedent | decedents[0] | decedents[0] |
| **First M. Last** - name of the first interested_party | interested_party | interested_parties[0] | interested_parties[0] |

## Repeat a value in multiple places
| Document output format | PDF label | Interview order | Attachment |
|:-|:-|:-|:-|
|  |  |  |  |
|  |  |  |  |


## Multiple items of one category
| Document output format | PDF label | Interview order | Attachment |
|:-|:-|:-|:-|
|  |  |  |  |
|  |  |  |  |


## Names all things in a group
Like people, courts, or docket numbers

| Document output format | PDF label | Interview order | Attachment |
|:-|:-|:-|:-|
|  | phones | .phone_numbers() |  |
|  | courts |  |  |
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

## Suffixes
Imagine we are collecting information about someone's second parent.

<!-- TODO: check on mobile number -->

Reference material:
1. [Names](https://docassemble.org/docs/objects.html#Name)
1. [Other things to do with individuals](https://docassemble.org/docs/objects.html#Individual)

 <!-- TODO: Double check how county name would appear -->

| Document output format | PDF label | Interview order | Attachment |
|:-|:-|:-|:-|
| **First M. Last** - name of the second parent | parent2<strong>_name</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name</strong> |
| **First M. Last** - name of the second parent | parent2<strong>_name_full</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name</strong> |
| **First** - first name of second parent  | parent2<strong>_name_first</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name.first</strong> |
| **Middle** - middle name | parent2<strong>_name_middle</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name.middle</strong> |
| **M.** - middle initials | parent2<strong>_name_middle_initial</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name.middle_initial()</strong> |
| **Last** - last name | parent2<strong>_name_last</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name.last</strong> |
| **Jr** - suffix | parent2<strong>_name_suffix</strong> | parents<strong>.gather()</strong> | parents[1]<strong>.name.suffix</strong> |
| **female** - gender of second parent | parent2<strong>_gender</strong> | parents[1]<strong>.gender</strong> | parents[1]<strong>.gender</strong> |
| **01/01/2001** - birthdate | parent2<strong>_birthdate</strong> | parents[1]<strong>.birthdate</strong> | parents[1]<strong>.birthdate</strong> |
| **01/01/2001** - birthdate | parent2<strong>_age</strong> | parents[1]<strong>.birthdate</strong> | parents[1]<strong>.birthdate</strong> |
| **someone@example.com** - email | parent2<strong>_email</strong> | parents[1]<strong>.email</strong> | parents[1]<strong>.email</strong> |
| Multiline full address | parent2<strong>_address_block</strong> | parents[1]<strong>.address.block()</strong> | parents[1]<strong>.address.block()</strong> |
| **120 Tremont St** | parent2<strong>_address_street</strong> | parents[1]<strong>.address.address</strong> | parents[1]<strong>.address.address</strong> |
| **120 Tremont St** | parent2<strong>_address_address</strong> | parents[1]<strong>.address.address</strong> | parents[1]<strong>.address.address</strong> |
| **Unit 2** | parent2<strong>_address_street2</strong> | parents[1]<strong>.address.unit</strong> | parents[1]<strong>.address.unit</strong> |
| **Unit 2** | parent2<strong>_address_unit</strong> | parents[1]<strong>.address.unit</strong> | parents[1]<strong>.address.unit</strong> |
| **Boston** | parent2<strong>_address_city</strong> | parents[1]<strong>.address.city</strong> | parents[1]<strong>.address.city</strong> |
| **MA** | parent2<strong>_address_state</strong> | parents[1]<strong>.address.state</strong> | parents[1]<strong>.address.state</strong> |
| **02108** | parent2<strong>_address_zip</strong> | parents[1]<strong>.address.zip</strong> | parents[1]<strong>.address.zip</strong> |
| **Suffolk County** | parent2<strong>_address_county</strong> | parents[1]<strong>.address.county</strong> | parents[1]<strong>.address.county</strong> |
| **USA** | parent2<strong>_address_country</strong> | parents[1]<strong>.address.country</strong> | parents[1]<strong>.address.country</strong> |
| **120 Tremont St, Unit 2, Boston, MA 02108** | parent2<strong>_address_on_one_line</strong> | parents[1]<strong>.address.on_one_line()</strong> | parents[1]<strong>.address.on_one_line()</strong> |
| **120 Tremont St, Unit 2** | parent2<strong>_address_line_one</strong> | parents[1]<strong>.address.line_one()</strong> | parents[1]<strong>.address.line_one()</strong> |
| **Boston, MA 02108** | parent2<strong>_address_city_state_zip</strong> | parents[1]<strong>.address.line_two()</strong> | parents[1]<strong>.address.line_two()</strong> |
| An image of a signature | parent2<strong>_signature</strong> | parents[1]<strong>.signature</strong> | parents[1]<strong>.signature</strong> |
| **123-123-1234** - landline number | parent2<strong>_phone</strong> | parents[1]<strong>.phone_number</strong> | parents[1]<strong>.phone_number</strong> |
| **123-123-1234 (cell) 123-123-1234 (other)**  | parent2<strong>_phones</strong> | parents[1]<strong>.phone_numbers()</strong> | parents[1]<strong>.phone_numbers()</strong> |

:::note
`.phone_numbers()` is a method that AssemblyLine has added.
:::


# Others
court
courts
'_division': ".division",
'_county': ".address.county",
docket_number
docket_numbers
signature_date


#DOCX only
.birthdate,
.birthdate.format\(.*\)',
.familiar\(\)',
.familiar_or\(\)',
.phone_numbers\(\)',
.formatted_age\(\)'

