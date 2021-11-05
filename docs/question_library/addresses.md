---
id: ql_addresses
title: Addresses
sidebar_label: Addresses
slug: /question_library/addresses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Ask for addresses in parts

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
  What address should the court use to mail papers to you?
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
  What address should the court use to mail papers to you?
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

### Not all users have an address

Some users may be unhomed. Consider fallback solutions that gracefully handle
someone without a home.

### Consider a fall back of a completely open text field

The most flexible input of all for an address is a wide-open text field. This
may be appropriate to show as an alternative, even if your user is able to
select the country, to handle countries with address formats that you may not
know in advance.

Keep in mind that this may not be a very good user experience for most users.
Your default address question should be more standardized.