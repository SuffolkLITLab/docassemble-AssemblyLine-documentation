---
id: question_style_validation
title: Use input validation carefully
sidebar_label: Use input validation carefully
slug: /style_guide/question_style_validation
---

## When to use input validation

Use input validation to help ensure your user places information in the correct
location on the form. Validation can be helpful to provide instant feedback
to your user and avoid having a form rejected by a clerk.

Consider whether it would be helpful or too much clutter for your user to see
any validation rules, such as maximum length, before they start typing on the
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

## "Soft" validation: how to use warnings

Sometimes you don’t want to stop the user, you just want to let the user know to double check their answer. Unfortunately, we still don’t have a good model for this and are looking for evidence-based research on it. Here are some unverified possibilities.

* For important choices, you can use a follow up screen to warn someone about their choice. If it’s not that important, you might consider skipping the validation completely.
* For radio buttons, you might only show the warning if they choose something you want to draw their attention to.
* A modal pop-up is one way to tell the user something might be wrong. Some people find those confusing and annoying.
* Another option is to show warning text under the field as soon as the user starts answering. You would hide it as soon as the answer looked good. You would allow the user to continue either way. With this method, some people may feel they’re being scolded before they’ve been given a chance to put in their answer.
* A possible way around the issue is to offer an “I know what I’m doing” checkbox that reveals a different field - one that won’t stop the user.
* Alternatively, you could have a review screen for the user before they submit their final answer and show the warning there. It’s not immediate, but they could choose to edit the answer at that point.
