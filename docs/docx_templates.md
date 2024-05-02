---
id: docx_templates
title: Working with DOCX files
sidebar_label: Working with DOCX files
slug: /docx
---
## Add labels and fields

DOCX templates can be edited in any editor that is able to edit DOCX files, including:

* Microsoft Word, or Microsoft Word Online
* [Libre Office](https://www.libreoffice.org/)
* Google Docs

Most developers should use the word processing tool that they are already familiar with.
Rarely, you may run into compatibility issues with formatting of a DOCX file when it
is converted into a PDF. Docassemble uses Libre Office to convert DOCX files to PDF.
Try editing the file in the free [Libre Office](https://www.libreoffice.org/) and get
it looking right there if you have any PDF conversion problems.

While most editors should work, it is important to save the document in the DOCX
format.

## Start by just adding the basic variables in your DOCX template, without repeated elements or advanced code

Before you run your form through the Weaver, start out with simple logic.
For example:

* wait to add `for` loops that print out each item in a list
* avoid using custom methods in variable names, other than the ones listed on
  the [Field labels to use in template files](doc_vars_reference.md) page.

The Weaver may not know how to properly handle some more advanced formatting if 
you add it before you upload it to the Weaver. You can add these refining details 
after you run the form through the Weaver. Use the first draft just to add placeholders 
where information will go. 

## DOCX field labels are just typed in

You already know how to add fields to a DOCX template: just type them in as
ordinary text. The only difference is that you type brackets `{{ }}` or `{% %}`
to tell Docassemble that you want to replace the field with information that
comes from the Docassemble interview.

The syntax to type in fields in a DOCX template is named `jinja2`.

[Learn more about Jinja2](https://suffolklitlab.org/legal-tech-class/docs/jinja2)
and about [DOCX templates in Docassemble](https://docassemble.org/docs/documents.html#docx%20template%20file).

Jinja2 is very powerful but you will probably only use a small number of the
features it has, like:

1. adding `fields` with double curly brackets: `{{ field_name }}`
1. adding conditional text with `{% if some_condition %}` and `{% endif %}`
1. add conditional text in its own paragraph, row, or column, without extra whitespace with:
    * `{%p  %}` tags for conditional or repeated paragraphs
    * `{%tr  %}` tags for conditional or repeated rows in a table
    * `{%tc %}` tags for conditional or repeated columns in a table
1. add comments with `{# ... your comment here #}` tags
1. add special preformatted text from certain Docassemble functions with `{{r }}`

:::caution Docassemble uses the [docxtpl](https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax) syntax, 

docxtpl has slight differences to the more
common Jinja2 format used in HTML documents. If a feature isn't working as
you expect, make sure to check the docxtpl documentation.
:::

## Use the Assembly Line's standard field names for DOCX templates

Use the [specific names for labels](doc_vars_reference.md) for full
compatibility with the Assembly Line framework.

## Use a space before and after the variable name in the field statements

It's best to always use a space before and after the field name or conditional
instruction when using Jinja2 in a DOCX.

A few letters that can be typed directly after the `{{` or `{%` characters have
special meaning. Specifically:

* `r`, which means to treat the field as "raw" formatted DOCX run
* `p`, which means to remove the paragraph that the statement is in, and potentially replace with a new, preformatted paragraph
* `tr`, same as `p` but for table rows
* `tc`, same as `p` but for table columns

Always using a space helps avoid you forgetting these special cases. It also helps with readability.

## Use `{%p %}` and `{%tr %}` to control white space at the paragraph level

When inserting conditional paragraphs, make sure that they are wrapped in `{%p %}` tags, like this:

```jinja
{%p if some_condition %}
This is my conditional paragraph.
{%p endif %}
```

But make sure that the `{%p %}` is truly in its own paragraph,
not just a soft carriage return. You can check by toggling the [show formatting marks](https://support.microsoft.com/en-us/office/turn-formatting-marks-on-or-off-b166e811-d762-4f24-8328-d897cdace459) option in Word.

Also use `{%p if %}` to control conditional items in a list, like this:

1. `{%p if condition %}`
1. Conditional text
1. `{%p endif %}`

Keep the condition inside the list itself. Avoid using the condition in its own 
paragraph, as when Docassemble merges the two lists they may behave unpredictably.

Similarly, use `tc` and `tr` to control repeated or conditional rows.
Keep this in-line in one table when it makes sense. Avoid using `{%p %}` and multiple tables, as this can lead to unexpected table formatting when the two
separate tables are merged.

For example, to repeat rows in a table:

Attribute 1 | Attribute 2
--------------------|-------------------|
 `{%tr for item in my_list %}` | &nbsp;|
 `{{ item.attribute_1 }}` | `{{ item.attribute_2 }}` |
 `{%tr endfor %}` | &nbsp;

The same `{%tr %}` can be used for conditional rows, and `{%tc %}` works
similarly for conditional or repeated columns.

`{%tr %}` and `{%tc %}` should always be in their own row or column.

### Use `{% if %}` for conditional text inside a single paragraph

If you have a few conditional words in a paragraph, you can use `{% if %}`
in-line in the paragraph. For example:

`{%if user == "self" %}I request{% else %}{{user}} requests{% endif %} the following:`

If you have many repeated examples of the same condition, though, you may be
better off making the whole paragraph conditional.

When using in-line conditions, make sure you consistently place the space across
each condition.

### The standard `-` Jinja2 whitespace control will not work in Docassemble

While in standard Jinja2 you can use a `-` to control whitespace, this won't
work reliably in Docassemble. That is because Docassemble uses [docxtpl](https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax), not the standard Jinja2.

Avoid using this feature in your templates.

### Use `output_checkbox()` for checkbox fields that look like paper forms

In some cases, you need to make your Word Document look like a document that was
filled in by hand. [`output_checkbox()`](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/framework/altoolbox#shorthand-function-to-display-a-checkbox-in-replace-of-a-truefalse-boolean-value-in-a-docx-template) can be used to add a checkbox in-line in your document.

These two expressions are equivalent, but the second version takes substantially less
space in your template:

&nbsp; | &nbsp;
-------|--------
`{%if condition %}[X]{% else %}[  ]{% endif %}` | `{{ output_checkbox(condition) }}`

## Changing the appearance of inserted variable text

### Start with Microsoft Word's formatting for simple use cases

In general, to control the color, italicization, bold, and other features
of the text, you can use Microsoft Word's built-in functionality.

Make sure that the bold formatting, etc., is applied to the whole label, including the starting and ending `{{ }}`.

Example:

This is an inline formatted _\{\{ variable \}\}_.

### Use filters, functions, and methods for advanced changes to variables

For more advanced changes to the variable text, you will use a mix of
Python functions, methods, and Jinja2 filters. It's not always intuitive which 
to use when. In some cases, you can use more than one.

Functions and methods are either built-in to Python, Docassemble, or a custom class you create. Note that some Python functions won't work in a DOCX template.
If you run into a function that doesn't work as expected, look to see if there's
an equivalent filter to replace it. In most cases there will be.

This is a function, which surrounds the variable name in `()`:

`{{ function_wrapper(some_variable, optional_parameter) }}`

This is a method:

`{{ some_variable.method(optional_parameter) }}`

This is a filter:

`{{ some_variable | filter }}`

This is a filter with a parameter:

`{{ some_variable | filter(optional_parameter) }}`

Some sources for filters you can use:

* [Docassemble-provided Jinja2 filters](https://docassemble.org/docs/documents.html#filters)
* [List of built-in Jinja2 filters](https://jinja.palletsprojects.com/en/2.11.x/templates/#builtin-filters) (but note this easier to read, [unofficial version of this same list](https://tedboy.github.io/jinja2/templ14.html))

:::info
One filter you'll find yourself using frequently is the `length` filter. Docassemble doesn't make `len()` available
inside of Docassemble templates, so you must use `length` as a filter instead. For example:

```jinja
{%p if users | length > 2 %}
...
{%p endif %}
```
:::

### Use Jinja2 filters to change capitalization

To change the capitalization of text, it's best to use a Jinja2 filter.
If you used Word's formatting instead, it would be harder to check for typos
or mistakes in the variable name, which is case sensitive.

Use these filters for common changes to capitalization:

Purpose | Filter | Example
--------|--------|-----------
Capitalize all letters | `upper` | `\{\{ some_variable | upper \}\}`
Make all letters lowercase | `lower` | `\{\{ some_variable \| lower \}\}`
Capitalize just the first letter | `capitalize` | `\{\{ some_variable \| capitalize \}\}`
Capitalize just the first letter of each word | `title` | `\{\{ some_variable \| title \}\}`

Note that the "title" filter is not smart enough to follow [standard grammatical 
rules](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case).
It will simply capitalize the first letter of every word.

### Use `fix_punctuation()` to add an ending `.`

The [`fix_punctuation()`](https://docassemble.org/docs/functions.html#fix_punctuation) function can help you add an ending `.` without
risking adding an extra one to the user's provided text.

For example:

```
I need this order because:

{{ fix_punctuation(order_reason) }}
```

## Tips for dealing with formatting issues caused by variable-length documents in Word

When working with documents that are tightly formatted, it's important to test
with both short and long amounts of text and with different numbers of repeated fields.

Usually, the best place to control these is inside the Word document itself.

Repeated items in a list can often reveal formatting problems in the underlying document, as can long text inputs or even long names.

For example, a long name can bump text down to a new line. This may break
paragraphs you intended to be together on a single page across multiple pages.

You will need to make choices about whether and how you want to control these problems in the template and which problems you are okay with leaving to resolve until the attorney or user edits it manually. You will inevitably have some of these choices to make.

### Use "keep lines together" and "keep with next" for notary blocks, signature blocks, and other text that can't split across pages

Microsoft Word has [several features](https://support.microsoft.com/en-us/office/keep-text-together-af94e5b8-3a5a-4cb0-9c53-dea56b43d96d)
 that can be used to control when a paragraph is able to break across multiple pages.

### Use manual page breaks rather than extra typed paragraphs

[Insert a manual page break](https://support.microsoft.com/en-us/office/insert-a-page-break-in-word-eb0e569c-8e3f-4db4-9b13-7bfe1cabdbd7) when you want
text to be at the top of its own page, rather than relying on the current amount
of text to flow onto a new page automatically.

## Working with filtered and truncated lists 

Unfortunately, if you've gotten used to using [list comprehensions](https://docs.python.org/3/tutorial/datastructures.html) to filter and manage
working with lists, you cannot use list comprehensions
in a DOCX file.

There are a few alternatives to use when dealing with a subset
of a list, described below.

### Iterate over every item in the list

Jinja2 supports the standard `for` loop construct from Python. See: [https://jinja.palletsprojects.com/en/3.0.x/templates/#for](https://jinja.palletsprojects.com/en/3.0.x/templates/#for).

You'll normally use `{%p for temporary_variable in list_name %} ... {%p endfor %}` to loop over the items in a list.

Example:

```jinja
{%p for child in children %}

{{ child }} was born on {{ child.birthdate }}

{%p endfor %}
```
`child` is a temporary variable that updates with a new item of the list each time the loop
runs through.

### Get the index of the current loop

In Jinja2, there are 2 separate special variables that you can access that represent the current
position in the list:

1. `loop.index`, which starts with the number 1, for the first item in the list
1. `loop.index0`, which starts with the number 0 for the first item in the list

More special variables with information about the list are [documented here](https://jinja.palletsprojects.com/en/3.0.x/templates/#for).

### Use the list at a certain starting/ending value

You can use Python's normal list "slices" to shorten the size of the list you display
in the template, as well as list indices to get just one item.

```jinja
1. Primary agent

Primary agent's name: {{ agents[0] }}

{%p for agent in agents[1:] %}

2. {{ ordinal(loop.index0) }} Backup Agent

{{ agent }}

{%p endfor %}
```

### Filter the list with DAList.filter()

You can do very simple filtering of a list with the `.filter()` method.

For example, suppose every item in the list `my_list` has an attribute 
`is_employed` that can be True or False:

```jinja
1. People with jobs

{%p for person in my_list.filter(is_employed=True) %}
{{person}}
{%p endfor %}
```

This only works for checking one attribute, and one value. You can use `selecattr`, described below,
for more complex situations. One benefit of `filter()` is that the result will be of the special Docassemble
DAList class.

### Create a sum with the `sum` filter

If you have a list of objects that each have a number stored in an attribute, you can use the `sum` filter to add the
values altogether.

You may also want to use the `currency()` function to format
the number as currency.

Example:

`{{ currency(incomes | sum(attribute='amount')) }}`

Note that the filter, `sum`, can appear in-line in the expression and then the result of the list with the filter can be passed as a parameter to the `currency()` function.

### Use `selectattr` for more complex comparisons

The [`selectattr`](https://jinja.palletsprojects.com/en/3.0.x/templates/#jinja-filters.selectattr) filter can be used to narrow a list down to only those items
that have a particular attribute value. There's a shortcut for a `True`/`False` value:

`{{ users | selectattr("is_active") }}`

Or the longer version to check for a particular exact value:

`{{ users | selectattr("email", "none") }}`

If you need to check for 1 of 2 possible values, you can use the `"in"` parameter
and provide a list of choices:

```jinja
{% for applicant in applicants | selectattr('status', 'in', ['approved', 'conditionally_approved']) %}
* {{ applicant.name }} - {{ applicant.birthdate.format("MM/dd/yyyy") }}
{% endfor %}
```

Notice that the name of the attribute goes in quotes.

In addition to `in`, you can use any of the [Jinja2 "tests" documented here](https://jinja.palletsprojects.com/en/3.0.x/templates/#list-of-builtin-tests).

You can also combine multiple `selectattr` filters in a series, like:

`{{ my_list | selecattr("test1") | selecattr("test2") }}`

## Quality control checklist

- [ ] Make sure the DOCX template has valid Jinja syntax. You can use the [ALDashboard](https://github.com/SuffolkLITLab/docassemble-ALDashboard),
   installed on your own Docassemble server, to check.
- [ ] All of the expected standard field names are recognized by the Weaver (marked in bold when you upload and view the quality control screen)
- [ ] Custom field names are all properly spelled, without typos
- [ ] Run the interview with short, long, and one and many items for repeated lists to ensure that the full range of common scenarios looks proper.
- [ ] Check choices that can trigger conditional text to make sure white space is correct across all conditions. It's easy to add an extra space when using in-line conditions.
