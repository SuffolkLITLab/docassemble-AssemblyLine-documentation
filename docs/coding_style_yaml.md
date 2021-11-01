---
id: coding_style_yaml
title: Interview Files (YAML)
sidebar_label: YAML
slug: /coding_style_guide/yaml
---

Docassemble interviews are written in
[YAML](https://suffolklitlab.org/legal-tech-class/docs/yaml).

Keeping your YAML files neat and organized can help other developers understand
your code.

## Avoid spaces in file names; use lowercase letters

YAML files should be named without spaces. You may choose to use snake_case
(underscores separating words) or kebab-case (hyphens separating words). Using
snake case avoids problems with some command-line tools, as well as being more
consistent with Python file name conventions, but one challenge is that
snake_case underscores can be hard to see in a file browser window.

Use lowercase letters in file names. Some filesystems (Unix and Linux) are
case sensitive. Using a consistent case can reduce problems. Lower case is
the most commonly used convention.

## Use descriptive names for YAML files

When you are editing a file, the context sometimes is missing in places that the
file name is displayed. Therefore, you should prefer using file names like
"eviction_interview.yml" to just "interview.yml". Have the name describe the
function of the file, and give it a name that might be meaningful and build
trust with your end user.

Avoid using numbers, underscores, and other markers to indicate that you have a
"final", "draft", etc. interview even during the editing process, as these have
a chance of getting leaked to the public. Instead, use [version
control](github.md) to track the history of your files as your project develops.

## Use a small number of YAML files for each project

It can be a frustrating game of "which file is that in, again?" if you have too
many YAML files. Start out with just one YAML file for your interview. Start
adding additional files when:

1. you want to use an interview like a module inside another interview
1. your YAML file is thousands of lines long and you have clear functional
   separation between each file. For example: code, style, questions; or 
   maybe "eviction", "appeals", "bad_housing_conditions".
1. you need to split work between multiple developers and you are running into
   challenges with overwriting each others' work
1. you need non-technical members of your team to be able to make changes with
   confidence. You might choose to separate code from question language, in that 
   case.

## Use clear filenames for modular interview files

Docassemble allows you to include one interview into another interview file.
If you want to design a file to be re-used:

1. avoid putting any mandatory blocks in the file
1. use the `named block` pattern for the `interview order` block
1. reference your `named block` in the file users will run
1. name each file clearly.

For example: if you have one interview file that includes many other interview
files, you might call it `-umbrella`. If you have just one small file whose only
purpose is to run just one other interview, you might call it `-standalone`.

Generally, make the version of the file that is designed to be included in
another interview the shorter, unadorned name. Save the modifier for the version
with the mandatory block that can run on its own.

## Use a logical order for blocks inside your YAML file

Each block in your YAML file is separated by `---`. Below is a suggested
good practice for organizing your blocks into a YAML file:

1. `include`d files. Your file may break or act unexpectedly if your
   `include`s are in the wrong order. Keep them up top.
1. Metadata, such as file description and title, navigation [`sections`](https://docassemble.org/docs/initial.html#sections).
1. Your single, mandatory, [interview
   order](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block)
   block. Ideally this should start "above the fold" in your playground. I.e.,
   in the first 20 or so lines. Relocate other blocks as needed to get this "above the fold" (except the `include` block).
1. `object` blocks representing variables used in your interview.
1. Your `question` blocks, in the approximate order that they appear in your
   interview.
1. If short and clearly related, place `code` blocks that set variables based on
   questions directly after the question that they respond to.
1. More complex `code` blocks, including `named blocks`, come next.
1. Your review screen logic.
1. Any object blocks that are used solely for the attachments, such as `ALDocumentBundle` objects.
1. Your attachment block.

```yaml
---
include:
  - ...
---
metadata:
  title: My Interview
  ...
---
id: interview order
mandatory: True
code: |
  intro_screen
  ...
  download_screen
---
id: intro
question: |
  Welcome to my interview
continue button field: intro_screen
---
id: review screen
question: |
  Review your answers
review: 
  - Edit: users[0].name.first
    button: |
      Your name: ${ users[0] }
---
objects:
  - my_interview_attachment: ALDocument...
---
objects:
  - al_user_bundle: ALDocumentBundle...
---
attachment:
  variable name: my_interview_attachment[i]
  docx template file: my_interview.docx          
```

## Add an `id` keyword to every question block

Add a unique `id` to every question block. Your `id` can just be
a copy of the question text with punctuation removed.

Adding an id to each question:

1. gives you an invariant piece of text to enter in the "search" bar for
   feedback and bugs in your YAML file for the benefit of both developers and testers
1. allows you to track your questions with analytics
1. can prevent some (rare) docassemble bugs, or make it easier to find them
1. make it easier to read and understand an interview phrase translation file

## Use an [interview order](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block) block

It is important to be able view the logic of your interview at a glance. The
`interview order` block concept is the most powerful way that we have found to
accomplish that goal in Docassemble.

[Read more about interview order blocks](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block).

## Avoid setting values in your interview order block

Wherever possible, use small code blocks that are triggered dynamically by the interview order block
when a value is defined by `code`. Do not set the values directly in the interview order block.
Setting values in the order block can trigger infinite loops or unintended logic; it can also
make your code less flexible.

For example:

```yaml
---
id: client_is_overpaid_person
question: |
  ${ client.familiar() }, are you filing for yourself or someone else?
fields:
  - no label: filing_for
    datatype: radio
    choices:
      - Myself: self
      - Someone else: someone_else  
---
depends on:
  - filing_for
code: |
  client_is_overpaid_person = filing_for == 'self'
```

## Use the `depends on` modifier when setting values with code

Using [`depends on`](https://docassemble.org/docs/logic.html#depends%20on) keeps
the value of your variables fresh, while also keeping your YAML file easy to
read and performant.

```yaml
---
id: client_is_overpaid_person
question: |
  ${ client.familiar() }, are you filing for yourself or someone else?
fields:
  - no label: filing_for
    datatype: radio
    choices:
      - Myself: self
      - Someone else: someone_else  
---
depends on:
  - filing_for
code: |
  client_is_overpaid_person = filing_for == 'self'
```

The snippet above will recalculate the value of `client_is_overpaid_person` if
the user ever changes the value of `filing_for`.

## Use the attachment block or template file for display-only logic

When the output document or form has responses that should sometimes be hidden,
it is better to keep your variables general and use short logical statements
inside the `attachment` `fields` block (or inside the DOCX template's Jinja2
code) to control when the variables are displayed or hidden.

Use the multi-line `mako` `if` statement rather than a one-line `ternary` `if`
statement. The preferred option is shown below:

```yaml
attachment:
  pdf template file: my_template.pdf
  fields:
      - "client_relationship_other": |
          % if not client_is_overpaid_person:
          ${ relationship_to_user['other'] }
          % endif
      - "client_relationship_other_explanation": |
          % if not client_is_overpaid_person and relationship_to_user['other']:
          ${ client_relationship_other_explanation }
          % endif
```

The advantage of this is keeping your variable name space neat and completely
semantic. It reduces the need for adding `depends on` modifiers.

When your logic starts to become nested several levels deep or you have very
complex calculations, abandon this rule.

## Use Python classes in module files to keep complex logic readable

When you have very complex business rules that are reflected in the template file,
it is appropriate to move away from small `mako` blocks. However, replacing
complex logic with long `code` blocks is not always clear and easy to read.

It is better to encapsulate that logic inside a Python class.

Use logical method names to encapsulate such logic. For example:

The `ALIndividual` class has a `gender_female()` method that helps
fill in checkboxes. It returns `True` or `False` depending on
whether the user specifies that `the_individual.gender == 'female'`.

Small helper methods like this can make your attachment block or
DOCX template easier to read. They can also reduce errors.

## Use the "named block" pattern sparingly

The [`named block`
pattern](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#triggering-code-and-then-continuing-using-named-blocks)
should not be overused. Most often, it is appropriate to just use a standard
code block that defines a variable without giving it a "name".

Use `named blocks` when performing a calculation that should only need to be
performed once, such as sending an email or e-filing a form.

## Avoid `needs`, `sets`, `force_ask` and other logic "hacks"

Avoid the use of question modifiers that make your logic harder to follow, such
as `needs`, `sets`, `force_ask()` and the like. Instead, be explicit with your
interview logic and place most logic directly in the `interview order` block.

However, there are common exceptions to this rule:

1. use `needs` on review screens and other blocks that do not automatically
   trigger referenced variables to trigger `template:` blocks and the like
1. use `sets` with `ALIndividual` blocks that rely on `name_fields()` and
   similar fields, where needed for Docassemble to locate the question

