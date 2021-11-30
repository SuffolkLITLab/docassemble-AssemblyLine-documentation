---
id: question_style_validation
title: Using appropriate input validation
sidebar_label: Using appropriate input validation
slug: /style_guide/question_style_validation
---

## When to use input validation

Use validation to help ensure your user places information in the correct
location on the form. Validation can be helpful to provide instant feedback
to your user and avoid having a form rejected by a clerk.

Consider whether it would be helpful or too much clutter for your user to see
any validation rules, such as maxmimum length, before they start typing on the
form.

Examples of places validation can be helpful:

* to limit a Social Security Number input to 4 digits (and prevent 
  a user from typing additional digits, revealing a private number)
* to ensure an ID number or account number is correctly entered  
* to limit the length of fields that will be placed on a PDF form
  with limited space
* to validate a strictly defined format, such as an email address
* to provide password complexity rules (always display complexity 
  rules before the user starts typing a password)

## When to avoid input validation

Avoid validation when:

* the rules for the correct format are inconsistent in the real world. For example: 
  case numbers or docket numbers
* rules are strict but may be unpredictable, such as for a phone number that
  might be provided in an international format you do not have the ability to
  code for specifically
* users may have a valid reason for using the input to communicate with the clerk,
  such as providing a short note in addition to the value, like (my cousin's number)

## How to write good validation messages

* Use error messages to tell users how to fix problems, not describe what is wrong.
* Don't blame the user for the problem.
* Try reading the error message aloud. Make sure it is specific to the actual error.
* You may need to write multiple error messages to handle different error states.

## Further reading
* [UK.gov guidance on writing error messages](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise)
* [UK's NHS guidance on writing error messages](https://service-manual.nhs.uk/design-system/components/error-message)
* https://uxplanet.org/how-to-write-good-error-messages-858e4551cd4
