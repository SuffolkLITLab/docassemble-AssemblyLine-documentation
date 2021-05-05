---
sidebar_label: al_general
title: al_general
---

## ALAddressList Objects

```python
class ALAddressList(DAList)
```

Store a list of Address objects

## ALPeopleList Objects

```python
class ALPeopleList(DAList)
```

Used to represent a list of people. E.g., defendants, plaintiffs, children

#### names\_and\_addresses\_on\_one\_line

```python
 | names_and_addresses_on_one_line(comma_string='; ')
```

Returns the name of each person followed by their address, separated by a semicolon

## ALIndividual Objects

```python
class ALIndividual(Individual)
```

Used to represent an Individual on the assembly line project.
Two custom attributes are objects and so we need to initialize: `previous_addresses` 
and `other_addresses`

#### merge\_letters

```python
 | merge_letters(new_letters)
```

If the Individual has a child_letters attribute, add the new letters to the existing list

#### name\_fields

```python
 | name_fields(person_or_business: str = 'person')
```

Return suitable field prompts for a name. If `uses_parts` is None, adds the 
proper &quot;show ifs&quot; and uses both the parts and the single entry

#### address\_fields

```python
 | address_fields(country_code="US", default_state=None, show_country=False)
```

Return field prompts for address.

#### gender\_fields

```python
 | gender_fields(show_help=False)
```

Return a standard gender input with &quot;self described&quot; option.

#### contact\_fields

```python
 | contact_fields()
```

Return field prompts for other contact info

#### section\_links

```python
section_links(nav)
```

Returns a list of clickable navigation links without animation.

#### will\_send\_to\_real\_court

```python
will_send_to_real_court()
```

Dev or root needs to be in the URL root: can change in the config file

#### filter\_letters

```python
filter_letters(letter_strings)
```

Used to take a list of letters like [&quot;A&quot;,&quot;ABC&quot;,&quot;AB&quot;] and filter out any duplicate letters.

#### fa\_icon

```python
fa_icon(icon, color="primary", color_css=None, size="sm")
```

Return HTML for a font-awesome icon of the specified size and color. You can reference
a CSS variable (such as Bootstrap theme color) or a true CSS color reference, such as &#x27;blue&#x27; or 
&#x27;#DDDDDD&#x27;. Defaults to Bootstrap theme color &quot;primary&quot;.

