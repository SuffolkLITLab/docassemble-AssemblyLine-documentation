---
sidebar_label: al_general
title: AssemblyLine.al_general
---

#### safe\_subdivision\_type

Returns the subdivision type for the country with the given country code.
If no subdivision type is found, returns None.

**Arguments**:

- `country_code` _str_ - The ISO-3166-1 alpha-2 code for the country.
  

**Returns**:

- `Optional[str]` - The subdivision type for the country with the given country code.

## ALAddress Objects

```python
class ALAddress(Address)
```

This class is used to store addresses. The ALAddress class extends the Address
class with the `address_fields()` method and &quot;smarter&quot;
handling of the unit attribute when printing a formatted address.

**Attributes**:

- `address` _str_ - The street where the person lives.
- `unit` _str_ - The unit number where the person lives.
- `city` _str_ - The city where the person lives.
- `state` _str_ - The state where the person lives.
- `zip` _str_ - The zip code where the person lives.
- `country` _str_ - The country where the person lives.
- `impounded` _Optional[bool]_ - Whether the address is impounded.

#### address\_fields

Return a YAML structure representing the list of fields for the object&#x27;s address.

Optionally, allow the user to specify they do not have an address. When using
`allow_no_address=True`, ensure to trigger the question with `users[0].address.has_no_address`
rather than `users[0].address.address`. If `show_if` is used, it will not be applied when
`allow_no_address` is also used. Ensure `country_code` adheres to ISO-3166-1 alpha-2 code standard.

NOTE: This function is stateful under specific conditions. Refer to the conditions mentioned below.

**Arguments**:

- `country_code` _Optional[str]_ - ISO-3166-1 alpha-2 code of the country. Defaults to None.
- `default_state` _Optional[str]_ - Default state to set. Defaults to None.
- `show_country` _bool_ - Whether to display the country field. Defaults to False.
- `show_county` _bool_ - Whether to display the county field. Defaults to False.
- `show_if` _Union[str, Dict[str, str], None]_ - Condition to display each field. Defaults to None.
- `allow_no_address` _bool_ - Allow users to specify they don&#x27;t have an address. Defaults to False.
- `ask_if_impounded` _Optional[bool]_ - Whether to ask if the address is impounded. Defaults to False.
  

**Returns**:

- `list` - A list of YAML structure representing address fields.
  

**Notes**:

  - The function will set the `country` attribute of the Address to `country_code` under these
  circumstances:
  1. The `country_code` parameter is used.
  2. The `show_country` parameter is not used.
  3. `country_code` differs from the value returned by `get_country()`.
  
  - Link to ISO-3166-1 alpha-2 codes:
  [Officially assigned code elements](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements).

#### formatted\_unit

Returns the unit, formatted appropriately.

**Arguments**:

- `language` _str, optional_ - The language in which to format the unit. Defaults to None (which uses system language).
- `require` _bool, optional_ - A flag indicating whether the unit is required. If set to True, the function will
  raise an error if the unit attribute does not exist. Defaults to False.
- `bare` _bool, optional_ - A flag indicating whether to add the word &#x27;Unit&#x27; before the unit number. If set to
  True, the function will not add &#x27;Unit&#x27; regardless of other conditions. Defaults to False.
  

**Returns**:

- `str` - The formatted unit. If the unit attribute does not exist and require is set to False, this will be an
  empty string. If the unit attribute exists and is not None or an empty string, the function will return
  the unit number, possibly prefixed with &#x27;Unit&#x27;. If the unit attribute exists and is None or an empty
  string, the function will return an empty string.

#### block

Returns a one-line formatted address, primarily for geocoding.

**Arguments**:

- `language` _str, optional_ - Language for the address format.
- `international` _bool_ - If True, formats the address as an international address. Defaults to False.
- `show_country` _bool, optional_ - If True, includes the country in the formatted address.
  If None, decides based on the country attribute.
- `bare` _bool_ - If True, excludes certain formatting elements. Defaults to False.
- `long_state` _bool_ - If True, uses the full state name. Defaults to False.
- `show_impounded` _bool_ - If True, shows the address even if impounded. Defaults to False.
  

**Returns**:

- `str` - The one-line formatted address.

#### line\_one

Returns the first line of the address, including the unit number if it exists.

**Arguments**:

- `language` _str, optional_ - Language for the address format.
- `bare` _bool_ - If True, excludes certain formatting elements. Defaults to False.
- `show_impounded` _bool_ - If True, shows the address even if impounded. Defaults to False.
  

**Returns**:

- `str` - The first line of the address.

#### line\_two

Returns the second line of the address, including city, state, and postal code.

**Arguments**:

- `language` _str, optional_ - Language for the address format.
- `long_state` _bool_ - If True, uses the full state name. Defaults to False.
- `show_impounded` _bool_ - If True, shows the address even if impounded. Defaults to False.
  

**Returns**:

- `str` - The second line of the address.

#### on\_one\_line

Returns a one-line formatted address.

**Arguments**:

- `include_unit` _bool_ - If True, includes the unit in the formatted address. Defaults to True.
- `omit_default_country` _bool_ - If True, doesn&#x27;t show the Docassemble default country in the formatted address. Defaults to True.
- `language` _str, optional_ - Language for the address format.
- `show_country` _bool, optional_ - If True, includes the country in the formatted address.
  If None, decides based on the country attribute.
- `bare` _bool_ - If True, excludes certain formatting elements. Defaults to False.
- `long_state` _bool_ - If True, uses the full state name. Defaults to False.
- `show_impounded` _bool_ - If True, shows the address even if impounded. Defaults to False.
  

**Returns**:

- `str` - The one-line formatted address.

#### normalized\_address

Try geocoding the address, returning the normalized version if successful.

If geocoding is successful, the method returns the &quot;long&quot; normalized version
of the address. All methods, such as `my_address.normalized_address().block()`, are
still available on the returned object. However, note that the returned object will
be a standard Address object, not an ALAddress object. If geocoding fails, it returns
the version of the address as entered by the user.

Warning: currently the normalized address will not be redacted if the address is impounded.

**Returns**:

  Union[Address, &quot;ALAddress&quot;]: Normalized address if geocoding is successful, otherwise
  the original address.

#### state\_name

Returns the full state name based on the state abbreviation.

If a `country_code` is provided, it will override the country attribute of the Address
object. Otherwise, the method uses, in order:

1. The country code associated with the Address object, and then
2. The country set in the global config for the server.

**Arguments**:

- `country_code` _str, optional_ - ISO-3166-1 alpha-2 code to override the country attribute of
  the Address object. For valid codes, refer to:
  https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
  

**Returns**:

- `str` - The full state name corresponding to the state abbreviation. If an error occurs
  or the full name cannot be determined, returns the state abbreviation.

## ALAddressList Objects

```python
class ALAddressList(DAList)
```

A class to store a list of ALAddress objects.

Extends the DAList class and specifically caters to ALAddress objects.
It provides methods to initialize the list and get a string representation
of the list in a formatted manner.

#### \_\_str\_\_

Provide a string representation of the ALAddressList.

This method returns the addresses in the list formatted in a
comma-separated manner using the on_one_line method of ALAddress.

**Returns**:

- `str` - Formatted string of all addresses in the list.

## ALNameList Objects

```python
class ALNameList(DAList)
```

A class to store a list of IndividualName objects.

Extends the DAList class and is tailored for IndividualName objects.

#### \_\_str\_\_

Provide a string representation of the ALNameList.

**Returns**:

- `str` - Formatted string of all names in the list.

## ALPeopleList Objects

```python
class ALPeopleList(DAList)
```

Class to store a list of ALIndividual objects, representing people.

For example, defendants, plaintiffs, or children.

#### names\_and\_addresses\_on\_one\_line

Provide names and addresses of individuals on one line.

**Arguments**:

- `comma_string` _str, optional_ - The string to use between name-address pairs. Defaults to &#x27;; &#x27;.
- `bare` _bool, optional_ - If True, prevents appending the word &quot;Unit&quot; to the unit attribute. Defaults to False.
  

**Returns**:

- `str` - Formatted string of names followed by addresses.

#### familiar

Provide a list of familiar forms of names of individuals.

**Returns**:

- `str` - Formatted string of familiar names.

#### familiar\_or

Provide a list of familiar forms of names of individuals separated by &#x27;or&#x27;.

**Returns**:

- `str` - Formatted string of familiar names separated by &#x27;or&#x27;.

#### short\_list

Return a subset of the list, truncated with &#x27;et. al.&#x27; if it exceeds a given limit.

**Arguments**:

- `limit` _int_ - The maximum number of items to display before truncating.
- `truncate_string` _str, optional_ - The string to append when truncating. Defaults to &#x27;, et. al.&#x27;.
  

**Returns**:

- `str` - Formatted string of names, truncated if needed.

#### full\_names

Return a formatted list of full names of individuals.

**Arguments**:

- `comma_string` _str, optional_ - The string to use between names. Defaults to &#x27;,&#x27;.
- `and_string` _str, optional_ - The string to use before the last name in the list. Defaults to &#x27;and&#x27;.
  

**Returns**:

- `str` - Formatted string of full names.

## ALIndividual Objects

```python
class ALIndividual(Individual)
```

Used to represent an Individual on the assembly line project.

This class extends the Individual class and adds more tailored attributes and methods
relevant for the assembly line project. Specifically, it has attributes for previous addresses,
other addresses, mailing addresses, previous names, aliases, and a preferred name.

**Attributes**:

- `previous_addresses` _ALAddressList_ - List of previous addresses.
- `other_addresses` _ALAddressList_ - List of other addresses.
- `mailing_address` _ALAddress_ - Current mailing address.
- `service_address` _ALAddress_ - Service address.
- `previous_names` _ALNameList_ - List of previous names.
- `aliases` _ALNameList_ - List of aliases.
- `preferred_name` _IndividualName_ - The preferred name.
  

**Notes**:

  Objects as attributes should not be passed directly to the constructor due to
  initialization requirements in the Docassemble framework. See the `init` method.

#### signature\_if\_final

Returns the individual&#x27;s signature if `i` is &quot;final&quot;, which usually means we are assembling the final version of the document (as opposed to a preview).

**Arguments**:

- `i` _str_ - The condition which, if set to &quot;final&quot;, returns the signature.
  

**Returns**:

  Union[DAFile, str]: The signature if the condition is met, otherwise an empty string.

#### phone\_numbers

Fetches and formats the phone numbers of the individual.

**Arguments**:

- `country` _str, optional_ - The country for phone number formatting. Defaults to the country of the docassemble server.
- `show_impounded` _bool_ - If True, shows the phone numbers even if impounded. Defaults to False.
  

**Returns**:

- `str` - Formatted string of phone numbers.

#### contact\_methods

Generates a formatted string of all provided contact methods.

**Returns**:

- `str` - A formatted string indicating the available methods to contact the individual.

#### merge\_letters

If the Individual has a child_letters attribute, add the new letters to the existing list

Avoid using. Only used in 209A.

**Arguments**:

- `new_letters` _str_ - The new letters to add to the existing list of letters

#### formatted\_age

Calculates and formats the age of the individual based on their birthdate.

**Returns**:

- `str` - Formatted age string that shows the most relevant time unit; for example, if under 2 years, it will return &quot;X months&quot;.

#### normalized\_address

Fetches the normalized version of the address.

**Returns**:

  Union[Address, ALAddress]: The normalized address object.

#### name\_fields

Generates suitable field prompts for a name based on the type of entity (person or business)
and other provided parameters.

**Arguments**:

- `person_or_business` _str, optional_ - Specifies the entity type. It can either be &quot;person&quot; or &quot;business&quot;.
  Default is &quot;person&quot;.
- `show_suffix` _bool, optional_ - Determines if the name&#x27;s suffix (e.g., Jr., Sr.) should be included in the prompts.
  Default is True.
- `show_title` - (bool, optional): Determines if the name&#x27;s title (e.g., Mr., Ms.) should be included in the prompts.
  Default is False.
- `title_options` _List[str], optional_ - A list of title options to use in the prompts. Default is defined as a list
  of common titles in English-speaking countries.
- `show_if` _Union[str, Dict[str, str], None], optional_ - Condition to determine which fields to show.
  It can be a string, a dictionary with conditions, or None. Default is None.
  

**Returns**:

  List[Dict[str, str]]: A list of dictionaries where each dictionary contains field prompt details.
  

**Notes**:

  If `person_or_business` is set to None, the method will offer the end user a choice
  and will set appropriate &quot;show ifs&quot; conditions for each type.

#### address\_fields

Generate field prompts for capturing an address.

**Arguments**:

- `country_code` _str_ - The default country for the address. Defaults to &quot;US&quot;.
- `default_state` _Optional[str]_ - Default state if applicable. Defaults to None.
- `show_country` _bool_ - Whether to display the country field. Defaults to False.
- `show_county` _bool_ - Whether to display the county field. Defaults to False.
- `show_if` _Union[str, Dict[str, str], None]_ - Condition to determine if the field should be shown. Defaults to None.
- `allow_no_address` _bool_ - Whether to permit entries with no address. Defaults to False.
- `ask_if_impounded` _bool_ - Whether to ask if the address is impounded. Defaults to False.
  

**Returns**:

  List[Dict[str, str]]: A list of dictionaries with field prompts for addresses.

#### gender\_fields

Generate fields for capturing gender information, including a
self-described option.

**Arguments**:

- `show_help` _bool_ - Whether to show additional help text. Defaults to False.
- `show_if` _Union[str, Dict[str, str], None]_ - Condition to determine if the field should be shown. Defaults to None.
  

**Returns**:

  List[Dict[str, str]]: A list of dictionaries with field prompts for gender.

#### pronoun\_fields

Generate fields for capturing pronoun information.

**Arguments**:

- `show_help` _bool_ - Whether to show additional help text. Defaults to False.
- `show_if` _Union[str, Dict[str, str], None]_ - Condition to determine if the field should be shown. Defaults to None.
- `required` _bool_ - Whether the field is required. Defaults to False.
- `shuffle` _bool_ - Whether to shuffle the order of pronouns. Defaults to False.
- `show_unknown` _Union[Literal[&quot;guess&quot;], bool]_ - Whether to show an &quot;unknown&quot; option. Can be &quot;guess&quot;, True, or False. Defaults to &quot;guess&quot;.
  

**Returns**:

  List[Dict[str, str]]: A list of dictionaries with field prompts for pronouns.

#### get\_pronouns

Retrieve a set of the individual&#x27;s pronouns.

If the individual has selected the &quot;self-described&quot; option, it will use their custom input.

**Returns**:

- `set` - A set of strings representing the individual&#x27;s pronouns.

#### language\_fields

Generate fields for capturing language preferences.

**Arguments**:

- `choices` _Optional[List[Dict[str, str]]]_ - A list of language choices. Defaults to None.
- `style` _str_ - The display style of choices. Defaults to &quot;radio&quot;.
- `show_if` _Union[str, Dict[str, str], None]_ - Condition to determine if the field should be shown. Defaults to None.
  

**Returns**:

  List[Dict[str, str]]: A list of dictionaries with field prompts for language preferences.

#### language\_name

Get the human-readable version of the individual&#x27;s selected language.

**Returns**:

- `str` - The human-readable version of the language. If &#x27;other&#x27; is selected,
  it returns the value in `language_other`. Otherwise, it uses the
  `language_name` function.

#### gender\_male

Returns True only if the gender is male.

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### gender\_female

Returns True only if the gender is female.

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### gender\_other

Returns True only if the gender is not male or female.

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### gender\_nonbinary

Returns True only if the gender is nonbinary.

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### gender\_unknown

Returns True only if the gender is unknown.

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### gender\_undisclosed

Returns True only if the gender is not disclosed (&quot;prefer-not-to-say&quot;)

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### gender\_self\_described

Returns True only if the gender is self described.

Used to assist with checkbox filling in PDFs with &quot;skip undefined&quot;
turned on.

#### contact\_fields

Return field prompts for other contact info

#### initials

Returns the initials of the individual as a string.

For example, &quot;Quinten K Steenhuis&quot; would return &quot;QKS&quot;.

#### address\_block

Generate a formatted address block for mailings.

**Arguments**:

- `language` _Optional_ - The language in which the address is written.
- `international` _bool_ - If True, format for international mailing. Defaults to False.
- `show_country` _bool_ - If True, include the country in the address. Defaults to False.
- `bare` _bool_ - If True, produce the address without additional formatting. Defaults to False.
- `show_impounded` _bool_ - If True, show the address even if it is impounded. Defaults to False.
  

**Returns**:

- `str` - The formatted address block.

#### pronoun

Returns an objective pronoun as appropriate, based on attributes.

The pronoun could be &quot;you,&quot; &quot;her,&quot; &quot;him,&quot; &quot;it,&quot; or &quot;them&quot;. It depends
on the `gender` and `person_type` attributes and whether the individual
is the current user.

If the user selected specific pronouns, they take priority over
gender (only if they chose a pronoun from the list)

**Arguments**:

- `**kwargs` - Additional keyword arguments.
  

**Returns**:

- `str` - The appropriate pronoun.

#### pronoun\_objective

Returns the same pronoun as the `pronoun()` method.

**Arguments**:

- `**kwargs` - Additional keyword arguments.
  

**Returns**:

- `str` - The appropriate objective pronoun.

#### pronoun\_possessive

Returns a possessive pronoun and a target word, based on attributes.

Given a target word, the function returns &quot;\{pronoun\} \{target\}&quot;. The pronoun could be
&quot;her,&quot; &quot;his,&quot; &quot;its,&quot; or &quot;their&quot;. It depends on the `gender` and `person_type` attributes
and whether the individual is the current user.

**Arguments**:

- `target` _str_ - The target word to follow the pronoun.
- `**kwargs` - Additional keyword arguments.
  

**Returns**:

- `str` - The appropriate possessive phrase.

#### pronoun\_subjective

Returns a subjective pronoun, based on attributes.

The pronoun could be &quot;you,&quot; &quot;she,&quot; &quot;he,&quot; &quot;it,&quot; or &quot;they&quot;. It depends
on the `gender` and `person_type` attributes and whether the individual
is the current user.

**Arguments**:

- `**kwargs` - Additional keyword arguments.
  

**Returns**:

- `str` - The appropriate subjective pronoun.

#### name\_full

Returns the individual&#x27;s full name.

**Returns**:

- `str` - The individual&#x27;s full name.

#### name\_initials

Returns the individual&#x27;s name with the middle name as an initial.
Equivalent to `name.full(middle="initial")`, which is also the default.
Defined only to make it possible to be explicit about the name form.

**Returns**:

- `str` - The individual&#x27;s name with the middle name as an initial.

#### name\_short

Returns the individual&#x27;s name without any middle name.

Equivalent to self.name.firstlast()

**Returns**:

- `str` - The individual&#x27;

#### section\_links

Returns a list of clickable navigation links without animation.

**Arguments**:

- `nav` - The navigation object.
  

**Returns**:

- `List[str]` - A list of clickable navigation links without animation.

#### will\_send\_to\_real\_court

For legacy email to court forms, this checks to see if the form
is being run on the dev, test, or production server.

The text &quot;dev&quot; or &quot;test&quot; needs to be in the URL root in the DA config: can change in `/config`.

**Returns**:

- `bool` - True if the form is being run on the dev, test, or production server.

#### filter\_letters

Used to take a list of letters like [&quot;A&quot;,&quot;ABC&quot;,&quot;AB&quot;] and filter out any duplicate letters.

Avoid using, this is created for 209A.

**Arguments**:

- `letter_strings` _Union[List[str], str]_ - A list of letters.
  

**Returns**:

- `str` - A string of unique letters.

#### fa\_icon

Return HTML for a font-awesome icon of the specified size and color. You can reference
a CSS variable (such as Bootstrap theme color) or a true CSS color reference, such as &#x27;blue&#x27; or
&#x27;`DDDDDD`&#x27;. Defaults to Bootstrap theme color &quot;primary&quot;.

**Arguments**:

- `icon` _str_ - The name of the icon to use. See https://fontawesome.com/icons for a list of icons.
- `color` _str_ - The color of the icon. Defaults to &quot;primary&quot;.
- `color_css` _Optional[str]_ - A CSS variable or color reference. Defaults to None.
- `size` _str_ - The size of the icon. Defaults to &quot;sm&quot;.
  

**Returns**:

- `str` - HTML for the icon.

#### is\_sms\_enabled

Checks if SMS (Twilio) is enabled on the server. Does not verify that it works.

See https://docassemble.org/docs/config.html#twilio for more info.

**Returns**:

- `bool` - True if there is a non-empty Twilio config on the server, False otherwise

#### is\_phone\_or\_email

Returns True if the string is either a valid phone number or a valid email address.
If SMS is not enabled on the server (through the Twilio config), only accepts emails.
Email validation is extremely minimal--just checks for an @ sign between two non-zero length
strings.

**Arguments**:

- `text` _str_ - The string to check.
  

**Returns**:

- `bool` - True if the string is either a valid phone number or a valid email address.
  

**Raises**:

  DAValidationError if the string is neither a valid phone number nor a valid email address.

#### github\_modified\_date

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

**Arguments**:

- `github_user` _str_ - The GitHub username of the repository owner.
- `github_repo_name` _str_ - The name of the repository.
- `auth` _Optional[dict]_ - A dictionary containing authentication information. Defaults to None.
  

**Returns**:

  Union[DADateTime, None]: The date that the given GitHub repository was modified or None if API call fails.

#### language\_name

Given a 2 digit language code abbreviation, returns the full
name of the language. The language name will be passed through the `word()`
function.

**Arguments**:

- `language_code` _str_ - A 2 digit language code abbreviation.
  

**Returns**:

- `str` - The full name of the language.

#### safe\_states\_list

Wrapper around states_list that doesn&#x27;t error if passed
an invalid country_code (e.g., a country name spelled out)

**Arguments**:

- `country_code` _str_ - A 2 digit country code abbreviation.
  

**Returns**:

  List[Dict[str, str]]: A list of dictionaries with field prompts for states.

#### has\_parsable\_pronouns

Returns True if the pronouns string can be parsed into a dictionary of pronouns.

**Arguments**:

- `pronouns` - a string of pronouns in the format &quot;objective/subjective/possessive&quot;
  

**Returns**:

  True if the pronouns string can be parsed into a dictionary of pronouns, False otherwise

#### parse\_custom\_pronouns

Parses a custom pronoun string into a dictionary of pronouns.

**Arguments**:

- `pronouns` - a string of pronouns in the format &quot;objective/subjective/possessive&quot;
  

**Returns**:

  a dictionary of pronouns in the format \{&quot;o&quot;: objective, &quot;s&quot;: subjective, &quot;p&quot;: possessive\}

#### get\_visible\_al\_nav\_items

Processes a list of nav items and returns only the ones that are not hidden.
Can be used to control the visible nav items in a more declarative way while keeping
the navigation dynamic.

Expects a list like this:

data = [
\{&quot;key&quot;: &quot;value&quot;, &quot;hidden&quot;: True\},
&quot;top level item&quot;,
\{&quot;key2&quot;: [\{&quot;subkey&quot;: &quot;subvalue&quot;, &quot;hidden&quot;: False\}, \{&quot;subkey&quot;: &quot;subvalue2&quot;, &quot;hidden&quot;: True\}]\},
]

**Arguments**:

- `nav_items` - a list of nav items
  

**Returns**:

  a list of nav items with hidden items removed

