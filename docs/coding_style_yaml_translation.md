---
id: coding_style_yaml_translation
title: Planning for translation and flexible updates
sidebar_label: Planning for translation
slug: /coding_style_guide/yaml_translation
---
### Use labeled options with the `choices` modifier

When using the `choices` field modifier, always provide both
a display label and a value.

Example:

```yaml
fields: 
  - Pick a card, any card: which_card
    choices:
      - Ace: ace
      - Queen: queen
      - 3: three
      - 1: one
```

The value will remain stable for translation and any language changes that will
be made during the course of the project, allowing you to avoid updating your
logic with minor language tweaks.

It may be helpful to use `snake_case` for `choices` values. This will help
signal that they are static terms that will not change when other interview
language changes.

### Avoid using the language functions from `pattern.en` in your interview

Docassemble includes very useful features to conjugate verbs, match gender, and
more that are drawn from `pattern.en`, such as the `does_verb` method of a
DAList. These are safe to use inside a language-specific template, such as a
court form that will always be filed in English. Never use these inside a
`question` block:

1. using `does_verb` and its cousins inside a question block leads to question
   "fragments" that may not be grammatical in another language
1. `does_verb` may not be available in a language that you decide to translate
   your interview to in the future.

Similarly, do not use sentence fragments to update text that will change if:

1. the number of people in a list is either 1 or more
1. the user is answering the question on their own behalf or for someone else

Instead: use a Mako `if` statement on the whole sentence.

Example:

```yaml
---
id: agree overpaid
question: |
  % if client_is_overpaid_person:
  Do you agree that you got too much money from Social Security?
  % else:
  Do you agree that ${recordee} got too much money from Social Security?
  % endif
```
