---
sidebar_label: example_google
title: example_google
---

Example Google style docstrings.

This module demonstrates documentation as specified by the `Google Python
Style Guide`_. Docstrings may extend over multiple lines. Sections are created
with a section header and a colon followed by a block of indented text.

**Example**:

  Examples can be given using either the ``Example`` or ``Examples``
  sections. Sections support any reStructuredText formatting, including
  literal blocks::
  
  $ python example_google.py
  
  Section breaks are created by resuming unindented text. Section breaks
  are also implicitly created anytime a new section starts.
  

**Attributes**:

- `module_level_variable1` _int_ - Module level variables may be documented in
  either the ``Attributes`` section of the module docstring, or in an
  inline docstring immediately following the variable.
  
  Either form is acceptable, but the two should not be mixed. Choose
  one convention to document module level variables and be consistent
  with it.
  

**Todo**:

  * For module TODOs
  * You have to also use ``sphinx.ext.todo`` extension
  
  .. _Google Python Style Guide:
  http://google.github.io/styleguide/pyguide.html

#### module\_level\_variable2

int: Module level variable documented inline.

The docstring may span multiple lines. The type may optionally be specified
on the first line, separated by a colon.

#### function\_with\_types\_in\_docstring

```python
function_with_types_in_docstring(param1, param2)
```

Example function with types documented in the docstring.

`PEP 484`_ type annotations are supported. If attribute, parameter, and
return types are annotated according to `PEP 484`_, they do not need to be
included in the docstring:

**Arguments**:

- `param1` _int_ - The first parameter.
- `param2` _str_ - The second parameter.
  

**Returns**:

- `bool` - The return value. True for success, False otherwise.
  
  .. _PEP 484:
  https://www.python.org/dev/peps/pep-0484/

#### function\_with\_pep484\_type\_annotations

```python
function_with_pep484_type_annotations(param1: int, param2: str) -> bool
```

Example function with PEP 484 type annotations.

**Arguments**:

- `param1` - The first parameter.
- `param2` - The second parameter.
  

**Returns**:

  The return value. True for success, False otherwise.

#### module\_level\_function

```python
module_level_function(param1, param2=None, *args, **kwargs)
```

This is an example of a module level function.

Function parameters should be documented in the ``Args`` section. The name
of each parameter is required. The type and description of each parameter
is optional, but should be included if not obvious.

If \*args or \*\*kwargs are accepted,
they should be listed as ``*args`` and ``**kwargs``.

The format for a parameter is::

name (type): description
The description may span multiple lines. Following
lines should be indented. The &quot;(type)&quot; is optional.

Multiple paragraphs are supported in parameter
descriptions.

**Arguments**:

- `param1` _int_ - The first parameter.
- `param2` _:obj:`str`, optional_ - The second parameter. Defaults to None.
  Second line of description should be indented.
- `*args` - Variable length argument list.
- `**kwargs` - Arbitrary keyword arguments.
  

**Returns**:

- `bool` - True if successful, False otherwise.
  
  The return type is optional and may be specified at the beginning of
  the ``Returns`` section followed by a colon.
  
  The ``Returns`` section may span multiple lines and paragraphs.
  Following lines should be indented to match the first line.
  
  The ``Returns`` section supports any reStructuredText formatting,
  including literal blocks::
  
  {
- `&#x27;param1&#x27;` - param1,
- `&#x27;param2&#x27;` - param2
  }
  

**Raises**:

- `AttributeError` - The ``Raises`` section is a list of all exceptions
  that are relevant to the interface.
- `ValueError` - If `param2` is equal to `param1`.

#### example\_generator

```python
example_generator(n)
```

Generators have a ``Yields`` section instead of a ``Returns`` section.

**Arguments**:

- `n` _int_ - The upper limit of the range to generate, from 0 to `n` - 1.
  

**Yields**:

- `int` - The next number in the range of 0 to `n` - 1.
  

**Examples**:

  Examples should be written in doctest format, and should illustrate how
  to use the function.
  
  &gt;&gt;&gt; print([i for i in example_generator(4)])
  [0, 1, 2, 3]

## ExampleError Objects

```python
class ExampleError(Exception)
```

Exceptions are documented in the same way as classes.

The __init__ method may be documented in either the class level
docstring, or as a docstring on the __init__ method itself.

Either form is acceptable, but the two should not be mixed. Choose one
convention to document the __init__ method and be consistent with it.

**Notes**:

  Do not include the `self` parameter in the ``Args`` section.
  

**Arguments**:

- `msg` _str_ - Human readable string describing the exception.
- `code` _:obj:`int`, optional_ - Error code.
  

**Attributes**:

- `msg` _str_ - Human readable string describing the exception.
- `code` _int_ - Exception error code.

## ExampleClass Objects

```python
class ExampleClass(object)
```

The summary line for a class docstring should fit on one line.

If the class has public attributes, they may be documented here
in an ``Attributes`` section and follow the same formatting as a
function&#x27;s ``Args`` section. Alternatively, attributes may be documented
inline with the attribute&#x27;s declaration (see __init__ method below).

Properties created with the ``@property`` decorator should be documented
in the property&#x27;s getter method.

**Attributes**:

- `attr1` _str_ - Description of `attr1`.
- `attr2` _:obj:`int`, optional_ - Description of `attr2`.

#### \_\_init\_\_

```python
 | __init__(param1, param2, param3)
```

Example of docstring on the __init__ method.

The __init__ method may be documented in either the class level
docstring, or as a docstring on the __init__ method itself.

Either form is acceptable, but the two should not be mixed. Choose one
convention to document the __init__ method and be consistent with it.

**Notes**:

  Do not include the `self` parameter in the ``Args`` section.
  

**Arguments**:

- `param1` _str_ - Description of `param1`.
- `param2` _:obj:`int`, optional_ - Description of `param2`. Multiple
  lines are supported.
- `param3` _:obj:`list` of :obj:`str`_ - Description of `param3`.

#### readonly\_property

```python
 | @property
 | readonly_property()
```

str: Properties should be documented in their getter method.

#### readwrite\_property

```python
 | @property
 | readwrite_property()
```

:obj:`list` of :obj:`str`: Properties with both a getter and setter
should only be documented in their getter method.

If the setter method contains notable behavior, it should be
mentioned here.

#### example\_method

```python
 | example_method(param1, param2)
```

Class methods are similar to regular functions.

**Notes**:

  Do not include the `self` parameter in the ``Args`` section.
  

**Arguments**:

- `param1` - The first parameter.
- `param2` - The second parameter.
  

**Returns**:

  True if successful, False otherwise.

#### \_\_special\_\_

```python
 | __special__()
```

By default special members with docstrings are not included.

Special members are any methods or attributes that start with and
end with a double underscore. Any special member with a docstring
will be included in the output, if
``napoleon_include_special_with_doc`` is set to True.

This behavior can be enabled by changing the following setting in
Sphinx&#x27;s conf.py::

    napoleon_include_special_with_doc = True

