---
title: AssemblyLine.al_general
sidebar_label: al_general 02
---

## ALAddress Objects

```python
class ALAddress(Address)
```

#### address\_fields

```python
def address_fields(country_code: Optional[str] = None,
                   default_state: Optional[str] = None,
                   show_country: bool = False,
                   show_county: bool = False,
                   show_if: Union[str, Dict[str, str], None] = None,
                   allow_no_address: bool = False)
```

Return a YAML structure representing the list of fields for the object&#x27;s address.
Optionally, allow the user to specify they do not have an address.
NOTE: if you set allow_no_address to True, you must make sure to trigger
the question with `users[0].address.has_no_address` rather than
`users[0].address.address`.
Optionally, add a `show if` modifier to each field. The `show if` modifier
will not be used if the `allow_no_address` modifier is used.
`country_code` should be an ISO-3166-1 alpha-2 code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

NOTE: address_fields() is stateful if you:
1. Use the `country_code` parameter and;
1. Do not use the `show_country` parameter, and
1. `country_code` has a different value than `get_country()`.

Under these circumstances, address_fields() will set the `country` attribute of the Address
to `country_code`.

#### formatted\_unit

```python
def formatted_unit(language=None, require=False, bare=False)
```

Returns the unit, formatted appropriately

#### block

```python
def block(language=None,
          international=False,
          show_country=None,
          bare=False,
          long_state=False)
```

Returns the address formatted as a block, as in a mailing.

#### line\_one

```python
def line_one(language=None, bare=False)
```

Returns the first line of the address, including the unit
number if there is one.

#### line\_two

```python
def line_two(language=None, long_state=False)
```

Returns the second line of the address, including the city,
state and zip code.

#### on\_one\_line

```python
def on_one_line(include_unit=True,
                omit_default_country=True,
                language=None,
                show_country=None,
                bare=False,
                long_state=False)
```

Returns a one-line address.  Primarily used internally for geocoding.

#### normalized\_address

```python
def normalized_address() -> Union[Address, "ALAddress"]
```

Try geocoding the address, and if it succeeds, return the &quot;long&quot; normalized version of
the address. All methods are still available, such as my_address.normalized_address().block(), etc.,
but note that this will be a standard Address object, not an ALAddress object.

If geocoding fails, return the version of the address as entered by the user instead.

#### state\_name

```python
def state_name(country_code=None)
```

Return the full state name associated with the Address object&#x27;s state abbreviation.

If provided, the `country_code` parameter will override the country attribute of the
Address object. If omitted, it will use in order:

1. The country code associated with the Address object, and then
2. The country set in the global config for the server

`country_code` should be an ISO-3166-1 alpha-2 code
(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

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
def name_fields(
        person_or_business: str = "person",
        show_suffix: bool = True,
        show_if: Union[str, Dict[str, str],
                       None] = None) -> List[Dict[str, str]]
```

Return suitable field prompts for a name. If `person_or_business` is None, adds the
proper &quot;show ifs&quot; and uses both the parts and the single entry

#### address\_fields

```python
def address_fields(country_code: str = "US",
                   default_state: Optional[str] = None,
                   show_country: bool = False,
                   show_county: bool = False,
                   show_if: Union[str, Dict[str, str], None] = None,
                   allow_no_address: bool = False) -> List[Dict[str, str]]
```

Return field prompts for address.

#### gender\_fields

```python
def gender_fields(show_help=False,
                  show_if: Union[str, Dict[str, str], None] = None)
```

Return a standard gender input with &quot;self described&quot; option.

#### language\_fields

```python
def language_fields(choices: Optional[List[Dict[str, str]]] = None,
                    style: str = "radio",
                    show_if: Union[str, Dict[str, str], None] = None)
```

Return a standard language picker with an &quot;other&quot; input. Language should be specified as ISO 639-2 or -3 codes so it is compatible with the language_name() function.

#### language\_name

```python
def language_name()
```

Return the human-readable version of the individual&#x27;s language, handling the &quot;other&quot; option.

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
            color_css: Optional[str] = None,
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

#### language\_name

```python
def language_name(language_code: str) -> str
```

Given a 2 digit language code abbreviation, returns the full
name of the language. The language name will be passed through the `word()`
function.

#### safe\_states\_list

```python
def safe_states_list(country_code: str) -> List[Dict[str, str]]
```

Wrapper around states_list that doesn&#x27;t error if passed
an invalid country_code (e.g., a country name spelled out)

