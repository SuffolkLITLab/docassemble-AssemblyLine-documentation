---
id: style_guide_formatting
title: Format text for legibility
sidebar_label: Format text for legibility
slug: /style_guide/formatting
---

## Avoid "walls of text"

It is easier to read text when it is chunked into meaningful groups.
Users [tend to scan text](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) rather than reading each word.

### Keep text short

If you are tempted to write a large amount of text on the screen, consider:

1. Using a link
1. Adding a [progressive disclosure
element](../coding_style/yaml_interface.md) that lets a user click to read more.

Your user is very goal oriented when using a legal form. They rarely come to
a form to be educated about the law. Help them get to the end as quickly
as possible by using only as much text as they need.

Usually, you can avoid writing a lot of instructional text by adding additional questions.

### Use headings to group longer text

If you follow the rule about keeping text short, headings are rarely needed
inside the interview. You may
use headings when longer explanations are needed and inside instructions
that your user takes with them when they finish the interview.

For accessiblity reasons, headings should always follow in order from H1, to H2,
and then H3 and so on. Do not skip a level. In docassemble, the question title
is H1, so you should stick with H2 and below.

#### Use sentence case, not Title Case for page headings

`Sentence case` only capitalizes the first word while `Title Case` capitalizes
each word in a sentence. `Sentence case` is easier to read and most websites use
it.

#### Keep headings short {#short-headings}
A heading should only be about one line of text on the screen.

### Use lists and bullets to group information

Use lists and bullets to make it easy for your user to understand the information
at a glance.

[Learn more](https://www.plainlanguage.gov/guidelines/organize/use-lists/).

### Use tables when they are clearer than the alternative

Tables can break up a complex rule or list of examples into something that is easier
to scan and understand at a glance.

:::tip Example
  If | And a fair percentage to take off of the rent was | Then the amount you can ask for would be
  ---|---------------------------|-----------------------------------
  You had a minor problem with mice | 10% | $200
  You had no heat during a mild part of the winter | 50% | $1000
  You could not lock your doors | 25% | $500
:::

Keep tables simple. Not all users
can easily read tables. But the table may still be easier to understand than a large wall of text.
It is a good idea to limit them to situations when you are providing your user
extra context or information rather than when they need the information to
keep going.

* [US style guide on tables](https://www.plainlanguage.gov/guidelines/design/use-tables-to-make-complex-material-easier-to-understand/).
* [Australian style guide on tables](https://www.stylemanual.gov.au/structuring-content/tables)


## Only use all capital letters for acronyms and initialisms

Sentences written with all capital letters are harder to read. Use them
only when the word is always written in all capital letters. Do not use
capital letters for emphasis.

For example, the Department of Children and Families (DCF), Transitional
Assistance for Families and Dependent Children (TAFDC).

## Use bold for emphasis. Avoid underlines, italics, or all capital letters

Bold text is easy to identify and read.

When you are on a webpage, underlines should always mean a link to a new page.
Italics are hard to read. Capital letters are similarly difficult to read.

## Apply basic design principles

Use [contrast, repetition, alignment and proximity](https://vwo.com/blog/crap-design-principles/) 
to make it easier for your user to read the information.

Your guided interview platform may already make a lot of choices for you that affect alignment
and contrast. When you customize or add a lot of text, though, you need to keep them in mind yourself.

[The Non-designer's Design Book](https://www.amazon.com/Non-Designers-Design-Book-4th/dp/0133966151/) is
a terrific introduction to basic design concepts.