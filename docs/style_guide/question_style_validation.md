---
id: question_style_validation
title: Use input validation carefully
sidebar_label: Use input validation carefully
slug: question_style_validation
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

### Focus validation on true errors, not edge cases

Use validation to catch information that cannot be correct, rather than unlikely but
possible inputs. For example, reject an impossible date (e.g. a 13th month) or an
obviously invalid format, but don't arbitrarily cap a number field
(like number of children or income) if a higher value is technically feasible.

* Overly strict rules based on "common" assumptions will eventually fail for some users
(creating false errors)
* It's safer to trust users on unusual inputs and let them review those answers on their own.

## When to avoid input validation

Avoid validation when:

* validation helps the user avoid an unlikely answer, but not a technically invalid answer.
  For example: avoid validation of how many children, income amount, or other situations
  where the user could enter what we think, now, is a comically large number.
* the rules for the correct format are inconsistent in the real world. For example:
  case numbers or docket numbers
* rules are strict but may be unpredictable, such as for a phone number that
  might be provided in an international format you do not have the ability to
  code for specifically
* users may have a valid reason for using the input to communicate with the clerk,
  such as providing a short note in addition to the value, like (my cousin's number)

In general, we are careful about adding validation rules to predict every scenario a
user might encounter where they could possibly make a mistake. We save validation for
high-stakes input choices (a missing digit in the only contact method the user provides) or
that would cause the form to be invalid.

> Validation rules rarely account for a much-needed wide range of exceptions and custom rules.
> They are often based on common assumptions that will eventually fail for some users —
> we just don't know for how many. - Smashing Magazine

## How to write good validation messages

* Use error messages to tell users how to fix problems, not describe what is wrong.
* Don't blame the user for the problem.
* Try reading the error message aloud. Make sure it is specific to the actual error.
* You may need to write multiple error messages to handle different error states.

## Let users keep going when you can

Don't trap users with validation: Never implement validations in a way that completely
blocks the user from moving forward without any option. For example, avoid disabling
the "Next" or "Submit" button entirely just because some field doesn't perfectly meet
a rule. Users might be right (or have a valid but unanticipated answer) and still be
prevented from proceeding. Research shows that such hard stops – like disabled submit
buttons due to validation – often lead to 100% abandonment for those users.

Provide overrides for edge cases: If you must enforce a validation rule that could erroneously
catch some legitimate inputs, give users a safety valve. One approach is to allow an override--
for instance, a small "Confirm and continue" link or button when the system flags something that
the user insists is correct. This way, a user with a rare scenario (say, an address that your
system doesn't recognize, or an uncommon name with multiple special characters) isn't completely
blocked. They can confirm their entry and move on, and you'll at least capture the data for manual
review if needed. It's better to collect the input and double-check it later than to reject a 
real user outright due to a strict rule.

## Further reading

* [UK.gov guidance on validation](https://design-system.service.gov.uk/patterns/validation/)
* [UK.gov guidance on writing error messages](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise)
* [UK's NHS guidance on writing error messages](https://service-manual.nhs.uk/design-system/components/error-message)
* https://uxplanet.org/how-to-write-a-perfect-error-message-da1ca65a8f36
* [A Complete Guide To Live Validation UX (Smashing Magazine)](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)

## "Soft" validation: how to use warnings

Sometimes you don't want to stop the user, you just want to let the user know to double check their answer. Unfortunately, we still don't have a good model for this and are looking for evidence-based research on it. Here are some unverified possibilities.

* For important choices, you can use a follow up screen to warn someone about their choice. If it's not that important, you might consider skipping the validation completely.
* For radio buttons, you might only show the warning if they choose something you want to draw their attention to.
* A modal pop-up is one way to tell the user something might be wrong. Some people find those confusing and annoying.
* Another option is to show warning text under the field as soon as the user starts answering. You would hide it as soon as the answer looked good. You would allow the user to continue either way. With this method, some people may feel they're being scolded before they've been given a chance to put in their answer.
* A possible way around the issue is to offer an "I know what I'm doing" checkbox that reveals a different field - one that won't stop the user.
* Alternatively, you could have a review screen for the user before they submit their final answer and show the warning there. It's not immediate, but they could choose to edit the answer at that point.
