---
id: complexity
title: |
    The LitStyler Completion Ease Score
sidebar_label: |
  The LitStyler Completion Ease Score
slug: /complexity/complexity
---

The Assembly Line Team is working on building a **completion ease**-based score
that can evaluate the burden that completing a form places on a litigant. Our
hope is to build a robust metric or set of metrics that can be used to highlight
areas for improvement within a single form as well as to rank and compare forms
across jurisdictions.

As much as possible, this measure will be broadly applicable to both paper court
forms and digital guided interviews, such as those built using the Assembly Line
Framework.

Tentatively, we are calling this metric the "LitStyler" score.

[Readability](style_guide_readability.md) is just one small piece of what makes
a **form** easy or hard for a litigant to complete.

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

We followed with a brainstorming session and a cardsorting exercise to put our
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

## Features under consideration

### Use of written language
* Traditional [readability](style_guide_readability.md) scores
* The frequency of terms in the English language
* Use of legal terms of art (like "proof") that may be confused with common
  usage terms
* Sentence length
* Presence of legal citations
* Is a question double or triple barrelled (asking multiple questions to be
  answered in one field)
* The total number of fields
* The total number of fields per page
* The total number of pages
* Use of conditional questions, especially any instructions such as "skip
  questions 1-3" on paper forms

### Nature of the response required
* Does the information need to be exact, such as a date or dollar figure?
* Does the information need to be looked up or requested from a third party?
* Is the information requested sensitive?
* Is the information requested **personally identifying**, such as name,
  address, or contact information?
* Is the user being asked to perform a calculation, such as subtracting dollar
  figures or dates?
* Appropriate use of checkboxes, radio buttons, text and area fields
* The availability of "I don't know" responses when multiple choice options are
  provided

### Features related to organizing content and providing context
* Use of a logical grouping of fields, such as keeping similar questions
  together in sections
* Use of a question order that maximizes the litigants comfort with the form
  (e.g., asking for the most private questions after asking "safer" questions)
* The existence of explanations or glossaries of complicated words
* Presence or absence of navigation features and progress bars
* Presence of early screen-out questions to avoid inappropriate use of the form

## Our reading list

* Our own page on [readability](style_guide_readability.md)
* [Readability Scores: Reference guide](https://brycewilley.xyz/2022/01/readability-scores-reference), by team member Bryce Willey
* [Benchmarking everyday documents](https://uploads-ssl.webflow.com/5c06fb475dbf1265069aba1e/5c2bb2a81110ecda570573fe_SC5Benchmarkingv4.pdf), Martin Evans, April 2011
* [What makes a good document?](https://www.reading.ac.uk/web/files/simplification/SC2CriteriaGoodDoc-7.pdf), Rob Waller, April 2011
* [How to estimate burden](https://pra.digital.gov/burden/estimation/), digital.gov