---
sidebar_label: language
title: AssemblyLine.language
---

#### get\_tuples

```python
def get_tuples(lang_codes)
```

Returns a list of tuples representing the language name, followed by language ISO 639-1 code.
Right now only lists languages in use by Massachusetts Defense for Eviction (MADE).

#### get\_language\_list

```python
def get_language_list(languages, current="")
```

given a list of ordered tuples with (Description, language_code), returns
an Bootstrap-formatted unordered inline list. The current language will not be a link.

#### get\_language\_list\_item

```python
def get_language_list_item(language, link=True)
```

Given an ordered tuple, returns a link to the current interview with lang=language code and the link title
given in the first part of the tuple.

