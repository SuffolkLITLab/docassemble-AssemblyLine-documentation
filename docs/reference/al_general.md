---
sidebar_label: al_general
title: al_general
---

## ALAddress Objects

```python
class ALAddress(Address)
```

#### formatted\_unit

```python
def formatted_unit(language=None, require=False, bare=False)
```

Returns the unit, formatted appropriately

#### block

```python
def block(language=None, international=False, show_country=None, bare=False)
```

Returns the address formatted as a block, as in a mailing.

#### line\_one

```python
def line_one(language=None, bare=False)
```

Returns the first line of the address, including the unit
number if there is one.

#### on\_one\_line

```python
def on_one_line(include_unit=True,
                omit_default_country=True,
                language=None,
                show_country=None,
                bare=False)
```

Returns a one-line address.  Primarily used internally for geocoding.

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
def names_and_addresses_on_one_line(comma_string: str = "; ",
                                    bare=False) -> str
```

Returns the name of each person followed by their address, separated by a semicolon

#### short\_list

```python
def short_list(limit: int, truncate_string: str = ", et. al.")
```

Return a subset of the list, as as string with a comma separating items, followed by &#x27;et. al.&#x27; if the list exceeds the provided limit.
Otherwise just return the items in the list.

#### full\_names

```python
def full_names(comma_string=", ", and_string=word("and"))
```

Return a formatted list of names in the PeopleList, without shortening middle name to an initial.
Optional parameters `comma_string` and `and_string` will be passed to `comma_and_list` and allow
you to change the list separator and the word before the final list item, respectively.

## ALIndividual Objects

```python
class ALIndividual(Individual)
```

Used to represent an Individual on the assembly line project.
Two custom attributes are objects and so we need to initialize: `previous_addresses`
and `other_addresses`

#### contact\_methods

```python
def contact_methods() -> str
```

Method to return a formatted string with all provided contact methods of the individual:
* Phone number(s)
* Email
* other method

**Returns**:

- `str` - Formatted string

#### merge\_letters

```python
def merge_letters(new_letters: str)
```

If the Individual has a child_letters attribute, add the new letters to the existing list

#### name\_fields

```python
def name_fields(person_or_business: str = "person",
                show_suffix=True) -> List[Dict[str, str]]
```

Return suitable field prompts for a name. If `uses_parts` is None, adds the
proper &quot;show ifs&quot; and uses both the parts and the single entry

#### address\_fields

```python
def address_fields(country_code: str = "US",
                   default_state: str = None,
                   show_country: bool = False) -> List[Dict[str, str]]
```

Return field prompts for address.

#### gender\_fields

```python
def gender_fields(show_help=False)
```

Return a standard gender input with &quot;self described&quot; option.

#### gender\_male

```python
@property
def gender_male()
```

Provide True/False for &#x27;male&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on.

#### gender\_female

```python
@property
def gender_female()
```

Provide True/False for &#x27;female&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on.

#### gender\_other

```python
@property
def gender_other()
```

Provide True/False for &#x27;other&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on for forms without more inclusive options.

#### gender\_nonbinary

```python
@property
def gender_nonbinary()
```

Provide True/False for &#x27;nonbinary&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on.

#### gender\_unknown

```python
@property
def gender_unknown()
```

Provide True/False for &#x27;unknown&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on.

#### gender\_undisclosed

```python
@property
def gender_undisclosed()
```

Provide True/False for &#x27;prefer-not-to-say&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on.

#### gender\_self\_described

```python
@property
def gender_self_described()
```

Provide True/False for &#x27;self-described&#x27; gender to assist with checkbox filling
in PDFs with &quot;skip undefined&quot; turned on.

#### contact\_fields

```python
def contact_fields()
```

Return field prompts for other contact info

#### initials

```python
@property
def initials()
```

Return the individual&#x27;s initials, like QKS for Quinten K Steenhuis

#### address\_block

```python
def address_block(language=None,
                  international=False,
                  show_country=False,
                  bare=False)
```

Returns the person name address as a block, for use in mailings.

#### section\_links

```python
def section_links(nav) -> List[str]
```

Returns a list of clickable navigation links without animation.

#### will\_send\_to\_real\_court

```python
def will_send_to_real_court() -> bool
```

Dev or root needs to be in the URL root: can change in the config file

#### filter\_letters

```python
def filter_letters(letter_strings: Union[List[str], str]) -> str
```

Used to take a list of letters like [&quot;A&quot;,&quot;ABC&quot;,&quot;AB&quot;] and filter out any duplicate letters.

#### fa\_icon

```python
def fa_icon(icon: str,
            color: str = "primary",
            color_css: str = None,
            size: str = "sm")
```

Return HTML for a font-awesome icon of the specified size and color. You can reference
a CSS variable (such as Bootstrap theme color) or a true CSS color reference, such as &#x27;blue&#x27; or
&#x27;`DDDDDD`&#x27;. Defaults to Bootstrap theme color &quot;primary&quot;.

#### is\_phone\_or\_email

```python
def is_phone_or_email(text: str) -> bool
```

Returns True if the string is either a valid phone number or a valid email address.
Email validation is extremely minimal--just checks for an @ sign between two non-zero length
strings.

#### github\_modified\_date

```python
def github_modified_date(github_user: str,
                         github_repo_name: str,
                         auth=None) -> Union[DADateTime, None]
```

Returns the date that the given GitHub repository was modified or None if API call fails.

Will check for the presence of credentials in the configuration labeled &quot;github issues&quot;
in this format:

github issues:
username: YOUR_GITHUB_USERNAME
token: YOUR_GITHUB_PRIVATE_TOKEN

If those credentials aren&#x27;t found, it will then search for credentials in this format (deprecated):

github readonly:
username: YOUR_GITHUB_USERNAME
password: YOUR_GITHUB_PRIVATE_TOKEN
type: basic

If no valid auth information is in the configuration, it will fall back to anonymous authentication.
The GitHub API is rate-limited to 60 anonymous API queries/hour.

