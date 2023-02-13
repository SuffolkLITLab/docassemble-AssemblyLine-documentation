---
id: complexity
title: |
    Scoring form complexity with RateMyPDF
sidebar_label: |
  Scoring form complexity with RateMyPDF
slug: /complexity/complexity
---

[RateMyPDF](https://ratemypdf.com) is a tool built by Suffolk LIT Lab to help you
measure and improve the usability of court forms.

## Why readability scores aren't good enough

[Readability](style_guide_readability.md) has been one of the only available tools 
to measure the ease of use of court forms. Forward thinking courts have readability
targets of 6th grade. But readability isn't a very good measure of form complexity,
at least not on its own.

While readability scores focus on the content that appears on a page and the
focus is often on words, sentences, and paragraphs, forms have very different
features:

1. Litigants **answer questions** on forms as well as reading words. Some
   questions require the litigant to lookup information from a third party or to
   remember dates or times, while others involve simple facts such as names and
   addresses.
1. Instead of being organized in words, sentences, and paragraphs, forms
   typically involve short **labels** and **fields** (empty spaces where answers
   can be provided) and only occasionally incorporate longer narrative text. A
   label like "Massachusetts Health ID number" is short and therefore may
   score very high on readability metrics but be something the litigant needs to
   spend a lot of time locating.
1. Fields can have various types, such as short answer, long answer, select one
   (radio buttons) or select many (checkboxes). Some types are easier to
   interact with than others.
1. Forms can require litigants to disclose information that is very sensitive,
   such as bank account or Social Security numbers, or that triggers a strong
   emotional reaction, such as the details of an assault.

An important feature of measuring and comparing forms is that sometimes
information that imposes a high burden on the litigant is **required** to
resolve the dispute. For example: a complaint asking for protection from abuse
needs to disclose some information about the abuse. Our plan is to measure these
features, but to score them separate from features that are most likely to be in
the form author's control.

## Our approach

Our team started by gathering and analyzing the relevant literature, most of
which focuses on the readability of longer narrative texts. Our team member
Bryce Willey [curated a lot of this
material](https://brycewilley.xyz/2022/01/readability-scores-reference) for our
broader Assembly Line team to consider.

We followed with a brainstorming session and a card sorting exercise to put our
thoughts together, especially focusing on features that are unique to
interactive interviews and paper forms.

## Where will this score live?

Our goal is to incorporate the LitStyler score into the [Form
Explorer](https://suffolklitlab.org/form-explorer/) platform where it will be
used to analyze PDF forms. We will also incorporate the score into a
[Docassemble](https://docassemble.org) interview that can analyze a Docassemble
YAML interview file.

The current work is taking place inside a
[GitHub](https://github.com/SuffolkLITLab/docassemble-ALLinter) repository.

You may also want to [explore](https://suffolk-form-explorer.herokuapp.com/)
our database of 10,000 forms to see what features you can spot that might
be relevant to our work.

## Features under consideration

### Use of written language

#### Concepts measured in traditional [readability](style_guide_readability.md) scores
* Sentence length
* Number of syllables
* The frequency of words in the English language

#### Legal-specific features
* Presence of legal citations
* Use of legal-specific vocabulary, especially if it looks like a "normal" term.
  E.g., "proof"

#### Nature of the question itself
* Is the question double or triple barrelled (asking multiple questions to be
  answered in one field)?
* Is the question itself **conditional**? E.g., containing an instruction "if
  your answer to question 1 was 'yes'"

### Length of the form
* The total number of fields
* The total number of fields per page
* The total number of pages
* The total length of answers expected (e.g., large open text fields)

### Nature of the response required
* Is the question redundant with another question on the same form, or provided
  in an earlier required form in the same process?
* Does the information need to be exact, such as a date or dollar figure?
* Is the user being asked to perform a calculation, such as subtracting dollar
  figures or dates?
* Does the question ask for a social security number, driver's license number,
  bank account number, health insurance card number, or other traditional
  Personally Identifying Information ("PII")?
* Is the information otherwise personal, such as a birth date?
* Is the information sensitive for people with concerns for personal
  safety--such as a phone number or address?
* Does the user need to read a lot of options to find the one that applies to
  them?
* Is an "I don't know" response available when used with a list of options?
* Does the information need to be looked up or requested from a third party?
* Are checkboxes, radio buttons, short-answer text and long-answer area fields
  used appropriately?

### Features related to organizing content and providing context
* Does the form provide context that helps the user understand:
    - What the form is
    - Who is supposed to use it
    - Who is not supposed to use it
    - What do with the form when they are finished
* Are similar fields near each other in the form or on screen?
* Are fields grouped into a logical hierarchy, with headings, labels, and
  whitespace?
* Are questions asked in an order that builds trust and confidence, such as
  placing the most personal questions later in the interview or form?
* If a complex term must be used, is it explained in context or in a glossary?
* Does the (interactive) form include a progress bar or navigation?

### Features related to visual design
* Is the form legible?
* Is there sufficient whitespace on the form?
* Does the placement of fields and headings on the form follow a logical
  information hierarchy?
* Are there many fields on the page that need to be completed by a third party,
  such as a clerk or other court employee?

## Our reading list

* Our own page on [readability](style_guide_readability.md)
* [Readability Scores: Reference guide](https://brycewilley.xyz/2022/01/readability-scores-reference), by team member Bryce Willey
* [Benchmarking everyday documents](https://uploads-ssl.webflow.com/5c06fb475dbf1265069aba1e/5c2bb2a81110ecda570573fe_SC5Benchmarkingv4.pdf), Martin Evans, April 2011
* [What makes a good document?](https://www.reading.ac.uk/web/files/simplification/SC2CriteriaGoodDoc-7.pdf), Rob Waller, April 2011
* [How to estimate burden](https://pra.digital.gov/burden/estimation/), digital.gov
* [The power of white space](https://www.interaction-design.org/literature/article/the-power-of-white-space)
* [Clearmark awards criteria](https://centerforplainlanguage.org/awards/clearmark/criteria/)