---
id: question_style_overview
title: Writing good questions
sidebar_label: Writing good questions
slug: /style_guide/question_overview
---

<!-- original: https://docs.google.com/document/d/1B-_6A5OKZ0b3s8z2S14KdRQsK7ga4nmjjthJiaZMiB8/edit#heading=h.cvtj6d8ezh8x -->

## Organizing your interview structure


### Start with an intro screen

Your interview should start with a short screen that identifies the interview,
gives the user context, and tells them anything that they need to have in front
of them before they begin.


### Keep screening questions early in the interview

Screening questions are questions that tell the user if they are using the right
app. You want your user to answer as few questions as possible before you screen
them out of the interview to avoid wasting their time.


### Ask for only a few fields on each screen

A good rule of thumb is to ask for no more than about 5 pieces of information on
each screen. However: each screen should have a logical collection of related
fields. If you have more than 5 very closely related pieces of information, you
could bend this rule.


### Show your user all of the information that they need to make the correct choice

Use the order of questions and the set of fields that is visible on the screen
to guide your user to make correct choices. For example: if you ask your user to
describe what happened, and then you have a follow-up question to describe how
they were harmed by what happened, it would be annoying to your user to have
already answered the "harm" question in the more general response and then have
to re-write their response.


### Group like questions together

Ask for similar information at a similar time and in a logical order in your
interview. Try to approximate the way you would ask those questions in a
face-to-face interview.


### Be thoughtful about when you ask for personal information

It is often a good idea to demonstrate to your user the value of what you are
doing before you ask them for personal information. For example, you might tell
them if they qualify for help before getting their name or birthdate. In other
cases, that would be a confusing flow, or you may want to be able to address the
user by name as early as possible in the interview. Just make sure you have a
good reason for your choice.


### Make sure required fields are answerable

Docassemble is linear, so use required fields if you need the information to
appear on the form. The user can't easily jump around to fill in information
later. However, make sure that questions that can't be answered with the
information that your user has in front of them are optional.

If your form requires information that the user may not have in their
possession, make sure that the user knows what they are going to need very early
on so they can stop and get the information. Don't wait until the interview is
almost finished to tell them they need a crucial document.


### Provide graceful "I do not know" options when possible

Paper forms are flexible in this way. If a form asks for a date, like a
birthdate, the user can write in an estimate. Your interview should provide that
flexibility. Show a date input. If the user may not know the date, provide a
checkbox that allows the user to write in a longhand description of the date
instead (e.g. 'last summer').

When you give the user a list of options that requires them to make a choice,
give an "I do not know" choice among the options if you can.. Make sure your
form can deal with that uncertainty with an appropriate and safe default.


### Make sms messages separate from email messages
1. SMS messages function better when they are short with short urls.

    SMS has a character limit per message and it will "page" (create a new message) ones that are too long. Assume one message to be 160 characters long (https://www.twilio.com/docs/glossary/what-sms-character-limit). That works well on some phones, but not others. All the messages will get there, but sometimes in the wrong order and might break the URL into parts.


    It's good to keep URLs short and on the first page. There is a way to shorten urls, so do ask about that.

2. SMS messages also can't use hyperlinks and formatting.


## Other content resources
* [How to write good questions for forms (NHS)](https://service-manual.nhs.uk/content/how-to-write-good-questions-for-forms)
* How to write [good legal stuff](https://www.law.indiana.edu/instruction/tanford/web/reference/how2writegood.pdf)
* Readable [Info Sheet](https://www.masslegalservices.org/system/files/library/Create%20a%20Readable%20Info%20Sheet%20in%206%20Steps.pdf)
* Make it Readable [cheat sheet](https://cheatography.com/stevem/cheat-sheets/make-it-readable/)
* [UK.gov](http://uk.gov/) style guide - [online](https://www.gov.uk/guidance/content-design/writing-for-gov-uk#date-ranges)
* En rules or em dashes ([google search](https://www.google.com/search?client=safari&rls=en&q=en+rules+or+em+dashes&ie=UTF-8&oe=UTF-8) for this)
* Mass Legal Services [page](https://www.masslegalservices.org/content/making-legal-information-readable-more-plain-language) w/ info Caroline wrote
* MailChimp [style guide](https://styleguide.mailchimp.com/word-list/)
* [Gerunds and Participles](https://www.geist.com/writers/writers-toolbox/gerunds-and-participles-avoid-ing-words/): Avoiding -ING words