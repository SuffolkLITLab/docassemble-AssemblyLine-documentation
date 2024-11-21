---
sidebar_label: language
title: AssemblyLine.language
---

#### get\_tuples

Returns a list of tuples representing the language name, followed by language ISO 639-1 code.

It will use the native_name value from the languages.yml file if available, otherwise it will use the
English name from pycountry. If neither is present, it will use the language code itself.

**Arguments**:

- `lang_codes` - a list of ISO 639-1 language codes (e.g. [&#x27;en&#x27;, &#x27;es&#x27;])
- `languages_path` - the path to the languages.yml file (defaults to data/sources/languages.yml)
  

**Returns**:

  A list of tuples representing the language name, followed by language ISO 639-1 code.

#### get\_language\_list\_dropdown

Get a Bootstrap 5 dropdown menu for language selection that can be added to navigation bar.

**Arguments**:

- `lang_codes` - a list of ISO 639-1 language codes (e.g. [&#x27;en&#x27;, &#x27;es&#x27;])
- `current` - the current language code
- `languages_path` - the path to the languages.yml file (defaults to data/sources/languages.yml)
- `event_name` - the name of the event to trigger when the language is changed
- `icon` - the name of the icon to use for the dropdown menu (defaults to fa-solid fa-language fa-xl)
- `extra_class` - additional classes to add to the link

**Returns**:

  A string containing the HTML for a dropdown menu for language selection.

#### get\_language\_list\_dropdown\_item

Given an ordered tuple, returns a link to the current interview with lang=language code and the link title
given in the first part of the tuple.

**Arguments**:

- `language` - a tuple containing the language name and language code
- `link` - whether to return a link or just the text
- `event_name` - the name of the event to trigger when the language is changed
  

**Returns**:

- `str` - A string containing the HTML for a dropdown menu item for language selection.

#### get\_language\_list

Given a list of language codes, returns
a Bootstrap-formatted unordered inline list. The current language will not be a link.

Deprecated behavior: instead of a list of language codes, you can provide list of
tuples containing the language name and language code. This is deprecated and may be removed in a future version.

**Arguments**:

- `languages` - a list of tuples containing the language name and language code (deprecated)
- `current` - the current language code
- `lang_codes` - a list of ISO 639-1 language codes (e.g. [&#x27;en&#x27;, &#x27;es&#x27;])
- `languages_path` - the path to the languages.yml file (defaults to data/sources/languages.yml)
- `event_name` - the name of the event to trigger when the language is changed
  

**Returns**:

  A string containing the HTML for an unordered inline list of language selection.

#### get\_language\_list\_item

Given an ordered tuple, returns a link to the current interview with lang=language code and the link title
given in the first part of the tuple.

**Arguments**:

- `language` - a tuple containing the language name and language code
- `link` - whether to return a link or just the text
- `event_name` - the name of the event to trigger when the language is changed
  

**Returns**:

- `str` - A string containing the HTML for an unordered inline list item for language selection.

