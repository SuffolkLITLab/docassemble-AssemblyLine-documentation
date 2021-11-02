---
id: coding_style_defense
title: |
   "Safe" coding
sidebar_label: |
   "Safe" coding
slug: /coding_style_guide/defense
---

## Use Docassemble lists, dictionaries, and sets, or subclasses

Docassemble relies heavily on exceptions for its declarative logic
system. Those work better with the DAObject class and classes that 
inherit from it. Docassemble's DAObject class adds an `intrinsicName`
attribute to every object that helps Docassemble track down a question
that is able to define a variable.

Where you make uses of lists, dictionaries, or sets, you should 
default to using either a DAList, DADict, or DASet, or a class that
inherits from one of those classes.

## Look before you leap

Check for existence if an attribute or object may not be defined:

1. use `hasattr` to check if an optional attribute is defined
1. use `defined()` (sparingly) to check if an object or variable has been defined (note there are
significant performance implications with `defined()` so it should be used carefully)
1. use `.get()` with all dictionary looks. Include a default value of the correct type, especially for nested lookups in API results.
1. check list length before using a list index, or if you are using a DAList, use the `.item()` method.

e.g.:

```python
my_dict.get('key1',{}).get('key2','')
# NOT
# my_dict['key1']['key2']
```

## Use `skip undefined` on attachment blocks

When assembling documents, use the `skip undefined` modifier in production.
`skip undefined` should be used carefully as a safety measure, but not
to replace spelled-out logic in your interview. It leaves undefined fields
blank rather than triggering an exception.

When you use `skip undefined` it is important that you trigger all required variables
in your interview order block.

## Use Python 3.8's `f` strings when composing strings

A common runtime bug is attempting to concatenate a string with a non-string
value, such as `None`.

You can easily avoid these runtime errors by casting values to `str` explicitly.
The most elegant current solution is to use `f` strings.

Example:

```python
some_new_string = f"I like {fruit} the best"
# NOT 
# some_new_string = "I like" + fruit + " the best"
```

In addition to handling converting the value `fruit` to string, the `f` string
example is often clearer and easier to read, with less punctuation.