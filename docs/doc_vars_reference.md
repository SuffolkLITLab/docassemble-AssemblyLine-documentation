---
id: document_variables_reference
title: Field labels to use in template files
sidebar_label: Field labels to use in template files
slug: /label_variables
---

The Document Assembly Line framework can help you automate templates that use any
field (or `variable`) names that you choose. However, you should use the names
that we list below for full compatibility.

## Example documents

- [A fully labeled PDF](./assets/generic_motion_family_law.pdf)
- [The DOCX version of the same motion](./assets/generic_motion_family_law.docx)

## The basics
### Fields, labels, and variables

A blank space on a paper form is usually called a `form field`, or `field` for
short. We call adding unique names that refer to those blank spaces `labeling`
them.

When you access the labeled field in your Docassemble code, it is usually called
a `variable`.

### How the Assembly Line labels work

We have identified common fields that exist in most paper court forms:

- names of people
- addresses
- information that identifies the court 
- signatures
- dates
- currency figures
- a pair of yes/no checkboxes
- docket numbers or court filing numbers


We came up with a convention to identify the roles that people may play in
relation to your form:

* The "user" of the form: the person who the form is being filed for, making a
  request or response to the court
* The "other_party" of the form: the person who the user is responding to or suing

We have also identified some common names for people that appear across many
forms.

By using the labels for fields that we selected, you will be able to use the
questions that we have vetted and pre-written without needing to write them from
scratch. You still have the option to customize those questions later.

:::note A note about objects
For those with programming experience, we turn most of the field labels that we
recognize into `objects`. Learn more about the [Individual
object](https://docassemble.org/docs/objects.html#Individual) in the Docassemble
documentation.
:::

### Special names for special roles: `users` and `other_parties`

Where possible, you should use the label `users` for the person who the
interview is benefiting and `other_parties` for the person that is on the other
side of their dispute. Sometimes this is not known. In that situation, you 
can use the labels `plaintiffs` and `defendants` or `petitioners` and `respondents`.

:::important
The term `users` does not always mean the person sitting in front of the screen.
We use the term "user" to mean the person who the form is **for**. I.e., 
it should usually not be used to identify an attorney or advocate filling
in a form for someone else. In a court case, the `user` should normally
be a party to the case.
:::

### People are "plural" by default

We made the choice to make all variables representing people plural by default.
This allows us to use consistent terms across the many forms that do allow multiple
parties in different roles.

### Special situation for names of people in PDFs

In PDF forms, you can identify a single person's name like this:

`users1`, `users2`. This is due to a limit in how PDF labels work.

When the form is automated in the Weaver, the field name becomes part of a list:
`users`. There is also a special syntax that lets you indicate which item in the
list you are accessing, with the first item starting at 0: `users[0]` represents
the first user, `users[1]` the second, and so on.

The Docassemble and DOCX variable name `users[0]` is the equivalent of `users`
or `users1` in a PDF label. `users[1]` is the equivalent of `user2`.

Names are not transformed at all when you work in a DOCX template. You need to use the
Docassemble syntax from the beginning if you are identifying a specific person in a list.

## Labels for people, places, and things

### Labels for people's names

* `users` (Always use this for the person benefiting from the form)
* `other_parties` (Always use this for the opposing party)
* `plaintiffs`
* `defendants`
* `petitioners`
* `respondents`
* `children`
* `spouses`
* `parents`
* `caregivers`
* `attorneys`
* `translators`
* `debt_collectors`
* `creditors`
* `witnesses`
* `guardians_ad_litem`
* `guardians`
* `decedents`
* `interested_parties`

:::note Historical note

When the Assembly Line Project first began, we used **singular** names for
people that were then automatically turned into **plural** names. Like: `user`
became `users`. This feature still works but is confusing now that we automate
both PDF forms and DOCX templates. We do not recommend using it any longer.
:::

#### Custom names

You can add your own custom names for people to represent concepts that are not
listed above. Just use them in a way that matches specific information about the person
below--like `custom_name`, `custom_name_first`, etc. and the Weaver tool will
prompt you to decide if they should be treated as like people in the automation process.

#### Different forms of someone's name

Substitute the name `users` with any of the names listed above.

 PDF variation     | Docassemble / DOCX form                   | Meaning
-------------------|-------------------------------------------|-----------
`users1_name` or `users1_name_full` | `users[0]` or `users[0].name.full()`  | Full name
`users1_name_first` | `users[0].name.first` or `users[0].familiar()` | First name only
`users1_name_middle`| `users[0].name.middle` | Middle name only
`users1_name_middle_initial` | `users[0].name.middle_initial()` | First letter of middle name
`users1_name_last` | `users[0].name.last` | Last name only
`users1_name_suffix` | `users[0].name.suffix` | Suffix of user's name only

:::note
If the form has only one "user", "plaintiff", etc., it is not necessary to use a digit.
You can just write `users_name`, for example.
:::
#### Listing all parties at once

In a DOCX file, writing out `users` will list all of the `users`
added to the form, separated by a comma. Writing `users.familiar()`
will list all of the first names of each `user` separated by a comma.

This works for any Docassemble list.
### Demographic data for people

Substitute any name for a person for `users` below.

 PDF variation        | Docassemble / DOCX form   | Meaning
----------------------|---------------------------|-----------
`users1_birthdate`    | `users[0].birthdate`      | Birthdate (formatted like January 1, 2021 by default)
`users1_age`          | `users[0].age_in_years()` | Calculated age (based on birthdate)
`users1_gender`       | `users[0].gender`         | Gender
`users1_gender_female`| `users[0].gender_female`  | User is female (for checkbox field)
`users1_gender_male`  | `users[0].gender_male`    | User is male (for checkbox field)
`users1_gender_other` | `users[0].gender_other`   | User is not male or female (for checkbox field)
`users1_gender_nonbinary` | `users[0].gender_nonbinary` | User identifies as nonbinary (for checkbox field)
`users1_gender_undisclosed` | `users[0].gender_undisclosed` | User chose not to disclose gender (for checkbox field)
`users1_gender_self_described` | `users[0].gender_self_described` | User chose to self-describe gender (for checkbox field)
`user_needs_interpreter` | `user_needs_interpreter` | User needs an interpreter (for checkbox field)
`user_preferred_language`| `user_preferred_language` | User's preferred language

### Addresses

Substitute any name for a person for `users` below.

 PDF variation               | Docassemble / DOCX form    | Meaning
-----------------------------|----------------------------|-----------
`users1_address_block`       | `users[0].addres.block`    | Full address, on multiple lines
`users1_address_on_one_line` | `users[0].address.on_one_line()` | Full address on one line
`users1_address_line_one`    | `users[0].address.line_one()` | Line one of the address, including unit or apartment number
`users1_address_line_two`    | `users[0].address.line_two()` | Line two of the address, usually city, state, and Zip/postal code
`users1_address_address`     | `users[0].address.address` | Street address
`users1_address_unit`        | `users[0].address.unit`    | Apartment, unit, or suite
`users1_address_city`        | `users[0].address.city`    | City or town
`users1_address_state`       | `users[0].address.state`   | State, province, or sublocality (dependent on country)
`users1_address_zip`         | `users[0].address.zip`     | Zip or postal code
`users1_address_county`      | `users[0].address.county`  | County or parish
`users1_address_country`     | `users[0].address.country` | Country

:::info Mailing addresses
The Assembly Line framework also supports mailing addresses. Replace `address` with `mailing_address`
to ask a separate question about the user's mailing address.
:::

### Other contact information

Substitute any name for a person for `users` below.

 PDF variation               | Docassemble / DOCX form    | Meaning
-----------------------------|----------------------------|-----------
`users1_phone_number`        | `users[0].phone_number`    | Phone number
`users1_mobile_number`       | `users[0].mobile_number`   | A phone number explicitly labeled as the "mobile" number
`users1_phones`              | `users[0].phone_numbers()` | A list of both mobile and other phone numbers
`users1_email`               | `users[0].email`           | Email

### Signatures

Substitute any name for a person for `users` below.

 PDF variation               | Docassemble / DOCX form    | Meaning
-----------------------------|----------------------------|-----------
`users1_signature`           | `users[0].signature`       | Signature
`signature_date`             | `signature_date`           | Date the form is completed (automatically filled in by default)

### Information about court and court processes

 PDF variation               | Docassemble / DOCX form    | Meaning
-----------------------------|----------------------------|-----------
`trial_court`                | `trial_court`              | Court's full name, like: "Eastern Housing Court"
`trial_court_county`         | `trial_court.address.county` | County where court is located
`trial_court_division`       | `trial_court.division`     | Division of court (e.g., "Eastern")
`trial_court_department`     | `trial_court.department`   | Department of court (e.g., "Housing Court")
`docket_number`              | `docket_number`            | Case or docket number
`docket_numbers`             | `docket_numbers`           | A comma-separated list of docket numbers (rare but used in some family law cases)

## Special endings to mark data types

Usually, it is not recommended to mark the type of fields in Docassemble. There are 
a few exceptions that both mark type and carry a separate meaning that the Weaver
will recognize.

### Indicating paired yes/no checkboxes

The Weaver turns paired yes/no checkboxes into a single Docassemble variable.

Use any valid keyword to replace `is_minor` in the example below.

 PDF variation               | Docassemble / DOCX form    | Meaning
-----------------------------|----------------------------|-----------
`is_minor_yes`, `is_minor_no`| `is_minor`                 | Indicates the user is a minor

### Marking dates

Marking dates is optional. If you do mark a field with the `_date` suffix,
the Weaver will automatically recognize it as a date.

Replace `firm_founding` with any valid keyword in the example below.

 PDF variation         | Docassemble / DOCX form    | Meaning
-----------------------|----------------------------|-----------
`firm_founding_date`   | `firm_founding_date`       | Will be recognized as a date field by the Weaver.

### Marking currency figures

Marking currency values is optional. If you do mark a field with `_amount` or `_value`,
the Weaver will automatically recognize it as a currency amount.

Replace `expense_rent` or `house` with any valid keyword in the example below.

 PDF variation         | Docassemble / DOCX form    | Meaning
-----------------------|----------------------------|-----------
`expense_rent_amount`  | `expense_rent_amount`      | Will be recognized as a currency value by the Weaver.
`house_value`          | `house_value`              | Will be recognized as a currency value by the Weaver.


## Dealing with PDF limitations - adding the same field twice

Docassemble does not work with PDF forms that use the same label for a field
twice.

To work around this issue, simply annotate the second or third field with two
underscores and any digit, like this: `__1`.

Replace `users1_name` with any other valid field name in the example below.

 PDF variation         | Docassemble / DOCX form    | Meaning
-----------------------|----------------------------|-----------
`users1_name__1`       | `users[0]`                 | Allows you to label two fields in the PDF to contain the user's name.
`user1_name__2`        | `users[0]`                 | Same as above


DOCX files do not have any limit on using the same variable name twice.
This special syntax only applies to PDF templates.

:::note Use any digit
Docassemble does not do anything with the digit. Feel free to use `__1`, `__99` or any
other series of digits, in any order.
:::

## Adding custom field labels not listed above

### Add as many field labels as you need

The list above is a small sample of the fields that you will need for your form.
Use as many custom names for fields as you need.
### Stick with Docassemble conventions

The most important convention is to use
[`snake_case`](coding_style_python.md#use-snake_case-for-variable-names) for
field or variable names. `snake_case` is the name for a style that uses all
lower case letters and separates words with an underscore like this:
`my_custom_variable`.

## You can always edit your template again

Do your best to get your template right before running it through the Weaver.
However:

* you can always edit your template later
* keep your DOCX file logic simple at first to make it easier to run through the
  Weaver

When you make changes to your template, you do not need to run it through the
Weaver again. You can upload your edited template directly to the Docassemble
playground's templates folder.