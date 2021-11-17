---
id: coding_style_yaml
title: Interview files
sidebar_label: Interview files
slug: /coding_style_guide/yaml
---

Docassemble interviews are written in
[YAML](https://suffolklitlab.org/legal-tech-class/docs/yaml).

They may also contain:

* template files (e.g., DOCX, PDF, or Markdown (.md) files)
* images
* css
* javascript
* data sources in CSV, XLSX, or JSON format

Keeping your files neat and organized can help other developers understand
your code.

## Use Python conventions for variable names and Python code in your YAML files

See [Python style guide](coding_style_python.md).

## Organize and name your files
### Avoid spaces in file names; use lowercase letters

Files in your Docassemble package, including YAML files, Python modules, and any
static resource files or data sources, should all be be named without spaces.
You may choose to use `snake_case` (underscores separating words) or `kebab-case`
(hyphens separating words). Using snake case avoids problems with some
command-line tools, as well as being more consistent with Python file name
conventions, but one challenge is that `snake_case` underscores can be hard to see
in a file browser window.

Use lowercase letters in file names. Some filesystems (Unix and Linux) are
case sensitive. Using a consistent case can reduce problems. Lower case is
the most commonly used convention.

### Avoid using leading numbers in file names

Where possible, avoid using leading digits in file names. Leading digits
are not valid in Python variable names, and it is often convenient to have
variable names and file names have matching prefixes.

### Use descriptive names for YAML files

When you are editing a file, the context sometimes is missing in places that the
file name is displayed. Therefore, you should prefer using file names like
"eviction_interview.yml" to just "interview.yml". Have the name describe the
function of the file, and give it a name that might be meaningful and build
trust with your end user.

Avoid using numbers, underscores, and other markers to indicate that you have a
"final", "draft", etc. interview even during the editing process, as these have
a chance of getting leaked to the public. Instead, use [version
control](github.md) to track the history of your files as your project develops.

### Use a small number of YAML files for each project

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

### Use clear filenames for modular interview files

Docassemble allows you to include one interview into another interview file.
If you want to design a file to be re-used:

1. avoid putting any mandatory blocks in the file
1. use the [`named block` pattern](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#triggering-code-and-then-continuing-using-named-blocks) for the `interview order` block
1. reference your `named block` in the file users will run
1. describe the function of each file in the name

We recommend the annotations:

1. `to_include` for the file with the interview logic, attachment block, and questions
1. `standalone` for a file that includes and then runs just one `to_include` file
1. `umbrella` for a file that generates multiple templates

Example:

Filename                | Purpose
------------------------|--------------
eviction_to_include.yml | The interview order block, questions, and content for one interview that cannot be run from this file.
eviction_standalone.yml | Include and run just one interview about evictions
eviction_umbrella.yml   | Include and run multiple interviews related to eviction
