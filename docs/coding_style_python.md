---
id: coding_style_python
title: Python
sidebar_label: Python
slug: /coding_style_guide/python
---

## Use Python conventions for Python code

In general, we refer to Python's [PEP 8](https://www.python.org/dev/peps/pep-0008/) for all Python code.

### Highlights of PEP 8

Docassemble does not force you to write very much Python code. Where you do, however, please
follow Python conventions, listed below.

### Use snake_case for variable names

Variable names should always start with a letter or `_`. Names should be lowercase
and words should separated by an underscore.

Example: `number_of_people`, `issue_12_address`

### Exceptions to PEP 8

#### Tab width

We use 2 spaces, not 4, for all indentation levels. The Docassemble playground makes it hard to
edit files that scroll too far horizontally.