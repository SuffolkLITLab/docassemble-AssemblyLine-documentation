---
id: algeneral
title: |
    ALGeneral: Python Classes representing people
sidebar_label: |
  ALGeneral: Python Classes representing people
slug: /framework/algeneral
---

The functions and classes listed on this page are always available in Assembly
Line interviews.

## Python classes for representing people and addresses

### ALAddress and ALAddressList classes

The `ALAddress` class is an extension of the built-in Docassemble
[`Address`](https://docassemble.org/docs/objects.html#Address) class.

If an address is an `ALAddress`, it has an `address_fields()` method that can be used
inside a `fields: code: |` statement to insert a consistently formatted series of
address fields. `address_fields()` will include an autocomplete method and is 
internationalized.

Assembly Line question library questions use `ALAddress` objects for both the
`address` and `mailing_address` attributes of people.

Example:

```yaml
---
objects:
  - the_address: ALAddress
---
id: address question
sets:
  - the_address.address
  - the_address.city
question: |
  What is the address?
fields:
  - code: |
      the_address.address_fields()
```

See [`Addresses`](question_library/addresses.md) for more information and
examples.

:::note 
You must use `sets` with the `address_fields()` method. Otherwise
Docassemble will not be able to find the block to provide a definition
of the address fields.
:::

The `address_fields()` method includes the following optional parameters:

* `country_code`: if provided, will be used to control the list of states that
  is displayed as well as the default country in the `country` drop down. In
  the Assembly Line question library, `country_code` typically defaults to the value of
  `AL_DEFAULT_COUNTRY`
* `default_state`: default state, province, or sublocality. In the Assembly Line
  question library, `default_state` typically defaults to the value of
  `AL_DEFAULT_STATE`
* `show_country`: defaults to `False`. If enabled, a country drop down menu will
  be displayed.

#### ALAddressList

The `ALAddressList` class is simply a collection of `ALAddress`es. It is used to
allow you to collect multiple addresses in one go and otherwise works exactly
like the built-in Docassemble [`DAList`
object](https://docassemble.org/docs/objects.html#DAList).

The `__str__()` method of an `ALAddressList` has been modified so that using it
displays a series of addresses on one line, separated by `;`. This is used
any place that Docassemble treats the variable as text, such as in a
template, attachment block, or in a `question` or `subquestion` field.

Example:

`${ person.previous_addresses }` might display `123 Main St, Boston, MA; 456 Broadway, Cambridge, MA`.

The `previous_addresses` attribute of an `ALIndividual` is an `ALAddressList`.

### ALIndividual and ALPeopleList classes

The `ALIndividual` is an extension of the Docassemble
[`Individual`](https://docassemble.org/docs/objects.html#Individual) class. It
should be used to represent both natural people and businesses or other
entitities.

`ALIndividual` objects include the following methods that are not in the stock
`Individual` class:

* `signature_if_final(i)` is meant to be used inside a template or attachment
  block with the `ALDocument` class. It displays the signature if and only if
  `i` == 'final'.
* `phone_numbers()` displays either `mobile_number`, `phone_number`, or both if
  both are present for use in a PDF form with only one space to list phone
  numbers.
* `contact_methods()` displays a list of the contact methods the user provided
  in the default question library "contact information" screen as a formatted
  string. Specifically, it will display `mobile_number`, `phone_number`,
  `email`, and `other_contact_method`. This may be helpful in a formatted letter.
* `formatted_age()` is like `age_in_years()` but returns a formatted string with
  `years`, `months`, `weeks`, and `days` included when relevant. The cutoff is 2
  weeks to display days, 2 years to display months, and anything over 2 years
  displays only years.
* `name_fields(person_or_business:str = 'person', show_suffix=True)` is like
  `address_fields()` and is used to display a list of either 3 or 4 fields for a
  person's name. See [`Names`](question_library/names.md)
* `address_fields()` is a wrapper around the `address_fields()` method of an
  `ALAddress` with the same parameters.
* `gender_fields(show_help=False)` is like the `address_fields()` method but
  displays a list of vetted gender options. Read more about
  [`gender`](/question_library/gender.md) questions.
* `initials()` is used to return a string with the 1, 2, or 3 initial letters of
  a person's name. E.g., `QKS` for Quinten K Steenhuis.

Attributes:

* `gender_male`
* `gender_female`
* `gender_nonbinary`
* `gender_other`
* `gender_unknown`
* `gender_self_described`

#### ALPeopleList

The `ALPeopleList` class is used to represent a group of people. Otherwise it
works exactly like the built-in Docassemble [`DAList`
object](https://docassemble.org/docs/objects.html#DAList).

It also has the following additional methods:

* `familiar()` returns a comma-separated list of just the first name of each
  member of the list, with `and` joining the last two items (note that `and` may
  be translated using
  [`words.yml`](https://docassemble.org/docs/config.html#words))
* `familiar_or()` returns a comma-separated list of just the first name of each
  member of the list, with `or` joining the last two items
* `short_list(limit:int, truncate_string:str=', et. al.')` returns a list that
  will be cut off at the `limit` provided. By default, `, et. al.` is appended.
  The text can be customized.

Example:

`users.short_list(2)` will display `John Smith and Jane Smith, et. al.` if the
list contains John Smith, Jane Smith, and Jane Doe. `et al` is not used if the
list is at or below the limit provided.

### Classes for specific kinds of people

Currently, the Assembly Line interviews provide these classes that you can use 
to target questions to a specific type of person:

* `Tenant`
* `HousingAuthority`
* `Applicant`
* `Abuser`
* `Survivor`

Each class subclasses `ALIndividual` and shares its methods and attributes.
There are no special attributes or methods of these classes. They are simply
provided for you to customize questions.

<!-- 
## Standalone functions

### section_links

### is_phone_or_email

### github_modified_date

### safe_subdivision_type

-->

