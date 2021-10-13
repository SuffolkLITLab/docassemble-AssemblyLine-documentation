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
 | names_and_addresses_on_one_line(comma_string: str = '; ') -> str
```

Returns the name of each person followed by their address, separated by a semicolon

## ALIndividual Objects

```python
class ALIndividual(Individual)
```

Used to represent an Individual on the assembly line project.
Two custom attributes are objects and so we need to initialize: `previous_addresses`
and `other_addresses`

#### contact\_methods

```python
 | contact_methods() -> str
```

Method to return a formatted string with all provided contact methods of the individual:
* Phone number(s)
* Email
* other method

**Returns**:

- `str` - Formatted string

#### merge\_letters

```python
 | merge_letters(new_letters: str)
```

If the Individual has a child_letters attribute, add the new letters to the existing list

#### name\_fields

```python
 | name_fields(person_or_business: str = 'person') -> List[Dict[str, str]]
```

Return suitable field prompts for a name. If `uses_parts` is None, adds the
proper &quot;show ifs&quot; and uses both the parts and the single entry

#### address\_fields

```python
 | address_fields(country_code: str = "US", default_state: str = None, show_country: bool = False) -> List[Dict[str, str]]
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
section_links(nav: DANav) -> List[str]
```

Returns a list of clickable navigation links without animation.

#### will\_send\_to\_real\_court

```python
will_send_to_real_court() -> bool
```

Dev or root needs to be in the URL root: can change in the config file

#### filter\_letters

```python
filter_letters(letter_strings: Union[List[str], str]) -> str
```

Used to take a list of letters like [&quot;A&quot;,&quot;ABC&quot;,&quot;AB&quot;] and filter out any duplicate letters.

#### fa\_icon

```python
fa_icon(icon: str, color: str = "primary", color_css: str = None, size: str = "sm")
```

Return HTML for a font-awesome icon of the specified size and color. You can reference
a CSS variable (such as Bootstrap theme color) or a true CSS color reference, such as &#x27;blue&#x27; or
&#x27;#DDDDDD&#x27;. Defaults to Bootstrap theme color &quot;primary&quot;.

#### is\_phone\_or\_email

```python
is_phone_or_email(text: str) -> bool
```

Returns True if the string is either a valid phone number or a valid email address.
Email validation is extremely minimal--just checks for an @ sign between two non-zero length
strings.

#### github\_modified\_date

```python
github_modified_date(github_user: str, github_repo_name: str) -> Union[DADateTime, None]
```

Returns the date that the given GitHub repository was modified or None if API call fails.

Will check for the presence of credentials in the configuration labeled &quot;github readonly&quot;
in this format:

github readonly:
username: YOUR_GITHUB_USERNAME
password: YOUR_GITHUB_PRIVATE_TOKEN
type: basic

If no valid auth information is in the configuration, it will fall back to anonymous authentication.
The GitHub API is rate-limited to 60 anonymous API queries/hour.

