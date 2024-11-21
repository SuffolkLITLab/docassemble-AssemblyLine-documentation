---
id: ql_addresses
title: Addresses
sidebar_label: Addresses
slug: addresses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What addresses are for

Address information serves two unrelated purposes on most legal forms:

- Providing a place to send official court notices and receive service of
  process
- Determining eligibility and venue

Determine which purpose is served by the address question on your form. In
particular, if you have both purposes, be aware that your users may have
different domiciles and mailing addresses.

## Ask for addresses in parts

Most PDF forms ask for an address in multiple labeled parts. Addresses are also
often used to determine eligibility, which requires separating zip code or city
name from the rest of the address. There is no 100% reliable programmatic way to
break a single-line address field into parts, so best practice is to ask for the
address in parts in your interview.

<Tabs>
  <TabItem value="Assembly Line Example" label="Assembly Line Example" default>

```yaml
id: person's address
sets:
  - person.address.address
  - person.address.city
question: |
  Person's Address
fields:
  - code: |
      person.address_fields()
```      

  </TabItem>
  <TabItem value="Vanilla Docassemble" label="Vanilla Docassemble">

```yaml
---
id: your address
question: |
  What is your address?
subquestion: |
  Where do you live?
fields:
  - Street address: users[0].address.address
    address autocomplete: True
  - Unit: users[0].address.unit
    required: False
  - City: users[0].address.city
  - State: users[0].address.state
    code: |
      states_list()
    default: MA      
  - Zip: users[0].address.zip
    required: False
```

  </TabItem>
</Tabs>

### Allow user to specify country if appropriate

If your users commonly may provide addresses from a different country, 
show a country dropdown. Store the country with the ISO country code.

Ideally, update fields to match at least the most common countries, by
updating labels like `Zip code` to `Postal code` and replacing 
`State` with the appropriate label for that country.

<Tabs>
  <TabItem value="Assembly Line Example" label="Assembly Line Example" default>

```yaml
id: person's address
sets:
  - person.address.address
  - person.address.city
question: |
  Person's Address
fields:
  - code: |
      person.address_fields(show_country=True, country_code="US")
```      

  </TabItem>
  <TabItem value="Vanilla Docassemble" label="Vanilla Docassemble">

```yaml
---
id: your address
question: |
  What is your address?
subquestion: |
  Where do you live?
fields:
  - Street address: person.address.address
    address autocomplete: True
  - Unit: person.address.unit
    required: False
  - City: person.address.city
  - State: person.address.state
    code: |
      states_list()
    default: MA      
  - Zip: person.address.zip
    required: False
  - Country: person.address.country
    code: |
      countries_list()
```

  </TabItem>
</Tabs>

## Allow the user to provide a separate mailing address

If both residence and mailing address are important, make sure to ask for both,
and ask a clear question that prompts the user for the correct information.

It is appropriate to offer the user's home address as a default for their
mailing address.

`ALIndividual` objects in the Assembly Line framework have a predefined
`mailing_address` attribute.

<Tabs>
  <TabItem value="Assembly Line Example" label="Assembly Line Example" default>

```yaml
id: person's address
sets:
  - person.address.address
  - person.address.city
question: |
  Person's Address
fields:
  - My mailing address is: person.mailing_address
    datatype: object_radio
    choices:
      - person.address
    object labeler: |
      lambda y: y.on_one_line()      
    none of the above: |
      Somewhere else
    disable others: True  
  - code: |
      person.mailing_address.address_fields()
```      

  </TabItem>
  <TabItem value="Vanilla Docassemble" label="Vanilla Docassemble">

```yaml
---
objects:
  - person.mailing_address: Address
---
id: your address
question: |
  What is your address?
subquestion: |
  What address should the court use to mail papers to you?
fields:
  - My mailing address is: person.mailing_address
    datatype: object_radio
    choices:
      - person.address
    object labeler: |
      lambda y: y.on_one_line()      
    none of the above: |
      Somewhere else
    disable others: True
  - Mailing address: users[0].mailing_address.address
    address autocomplete: True
  - Unit: users[0].mailing_address.unit
    required: False
  - City: users[0].mailing_address.city
  - State: users[0].mailing_address.state
    code: |
      states_list()
    default: MA      
  - Zip: users[0].mailing_address.zip
    required: False
```

  </TabItem>
</Tabs>

## Getting the address of someone who is experiencing homelessness

Some users may be un-homed. Getting the address of a user who does not have a
traditional home can be tricky. Consider fallback solutions that gracefully
handle situations where an individual:

- lacks a permanent address
- is "couch surfing" or staying with a friend
- living in a homeless shelter
- is sleeping outside
- is otherwise experiencing homelessness

Note that many unhoused people **do** have a place that they receive mail. It might
be:

- a friend or family member
- a local homeless shelter 
- a PO Box or non-traditional box (such as at Mailboxes, Etc.)
- [general delivery](https://faq.usps.com/s/article/What-is-General-Delivery) at
  the local post office

For people with these common solutions, the traditional address question above
may be sufficient.

### Determine the purpose of collecting the address

When designing your address question, it is important to know whether the
address is being collected to provide a place to send official correspondence or
to determine eligibility or venue.

For eligibility and venue, knowing the city and state is usually enough. People
without a traditional home still stay in a city and state. **Note**: someone who
is unhoused may be more likely to use a mailing address that is not in the same
venue as their physical location.

There may be special circumstances where more information is required for
determining venue or eligibility. For example, Dana Chisnell of the United
States Digital Service Agency
[reports](https://twitter.com/danachis/status/1557180760410492929) that they
allow people without a traditional address to mark a map indicating the
intersection where they can normally be found.

If the address is being used for official correspondence, decide how to handle
the fact that some users just will not have a traditional address to receive
correspondence.

### Ask for a city, state, and a written explanation

<Tabs>
  <TabItem value="Assembly Line Example" label="Assembly Line Example">

```yaml
id: person's address
sets:
  - person.address.address
  - person.address.city
question: |
  Person's Address
fields:
  - code: |
      person.address_fields(allow_no_address=True)
```      

  </TabItem>
  <TabItem value="Vanilla Docassemble" label="Vanilla Docassemble">

```yaml
---
id: your address
question: |
  What is your address?
subquestion: |
  Write the address where you live.
fields:
  - I do not have an address: person.address.has_no_address
    datatype: yesno
  - Is there anything else you want to say about your living situation?: person.address.no_address_explanation
    datatype: area
    required: False
    rows: 2
    show if: person.address.has_no_address
    help: |
      Explain your address circumstances. Example: "I usually stay at the corner
      of Fifth and Main St."
  - Street address: person.address.address
    address autocomplete: True
    hide if: person.address.has_no_address
  - Unit: person.address.unit
    required: False
    hide if: person.address.has_no_address
  - City: person.address.city
  - State: person.address.state
    code: |
      states_list()
    default: MA      
  - Zip: person.address.zip
    required: False
    hide if: person.address.has_no_address
```

  </TabItem>
</Tabs>

#### Use `person.address.has_no_address` as a trigger, not `person.address.address`

If you need to accommodate users without a traditional address, use the variable
`person.address.has_no_address` as a trigger in your interview order block,
instead of `person.address.address`.

### Come up with a strategy for placing the alternative address on the form

Most forms have two lines for an address--a line for apartment, street number and
street name, and a separate line for the city, state, and zip code.

If you use the 3-part input described above, you can put the explanation on line
1 and fill in the city and state as normal, leaving the zip code blank.

Make sure the user knows the character limit for this line on the form. Consider
providing an addendum.

If you use the Assembly Line framework, the following methods are all "aware" of the 
variation on an address that handle un-homed individuals, and you do not need
any special logic in the template file or attachment block:

- address.block()
- address_block()
- address.on_one_line()
- address.line_one()
- address.line_two()

## Handling international addresses

Court forms usually require that one or both litigants in the action reside in
the United States, but they may require you to provide the address of a
non-party to the case. That person may not live in the same country as the
jurisdiction of the form.

International addresses are complicated. Divisions like "state" may have a
different name and may not be commonly used to address mail in some countries.
The order of fields like postal code and apartment number may be totally
different.

Ideally, your address fields should accommodate the order and presence of fields
for at least the most common countries that your users will provide addresses
from.

The most common field that will cause trouble is the drop-down menu for "state".
You may want to replace this with a free-text field and make it optional when an
international address might be provided in your interview.

### Consider a fall back of a completely open text field

The most flexible input of all for an address is a wide-open text field. This
may be appropriate to show as an alternative, even if your user is able to
select the country, to handle countries with address formats that you may not
know in advance.

Keep in mind that this may not be a very good user experience for most users.
Your default address question should be more standardized.

## Further reading

### Collecting international addresses

* https://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php
* https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513

### Collecting address of an unhoused person

* https://demo.getcalfresh.org/
