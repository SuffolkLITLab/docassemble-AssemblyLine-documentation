---
id: assembly_line_steps_step_by_step
title: Step-by-step
sidebar_label: Step-by-step
slug: /assembly_line_steps/steps
---


The guidance below is for organizations that want to set up their **own** copy of the 
Assembly Line, not for individual automators.

Below is a brief explanation of the content on our sample [Trello boards](#trello).

## Pre-processing

The [pre-processing Trello board](https://trello.com/b/Z2Svx3oh/1-assemblyline-pre-processing-template-board#) is
where you will:

1. clean up the template file
1. add our standardized labels
1. get a peer to review your work adding labels to catch mistakes early on

## Development

The phase that you will spend the most time on for your app--development--gets
just one Trello board.

[Development Template Board](https://trello.com/b/ArfGFbz4/2-assemblyline-development-template-board)

### Using the Weaver

First, run your form through the [Weaver](weaver_overview.md).

### Refining in the Docassemble playground

Next, [customize your form](customizing_interview.md).

### Getting expert review

Get feedback from your subject matter experts. Turn the feedback into actionable
[Github](github.md) issues that you can triage later.

### Getting plain language review

Hopefully you kept in mind our guidance on [writing good
questions](question_style_overview.md). Nevertheless, get a second opinion that
focuses just on how readable and easy to understand the substantive content 
of your app is.

### Getting feedback from team members and external stakeholders

At our peak, we had multiple weekly meetings with 5-15 members of our team.
These were excellent places to ask developers to demonstrate their work and get more
holistic feedback on the app: focusing on aspects including:

* [appropriate use of fields](question_style_organize_fields.md)
* [interview structure](question_style_structure.md)

and any other aspects that required a bigger-picture view of the app.

On a smaller team, you may want to set up structured demos with potential 
stakeholders.

If you have time, budget, and access to real users, you may set up one-on-one
or focus-group sessions to observe real users of your product.

Assembly line forms also include an embedded feedback link that will create a GitHub
issue, so if you lack the ability to set up structured sessions, you could 
directly share a testing link with potential users to get feedback.

In either case: use this time, again, to turn the feedback into [actionable
Github issues](github.md). Spend time afterwards triaging and prioritizing the
feedback.

### Iteration

The point of gathering this feedback, of course, is to move on from your first
runnable prototype into a refined final product.

[Read more about iteration](https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline/#iteration-and-testing).

Some important points to keep in mind is:

1. not all feedback can be implemented
1. an imperfect tool may be better than a perfect tool that is never released or used.

We developed the [legal app maturity
model](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model)
to provide a very concrete guidance as to which features should be prioritized.

## Testing

Testing should be incorporated into multiple stages of development, but we
provided some more specific guidance on our [testing Trello board](https://trello.com/b/nT7yy2Wl/3-assemblyline-testing-template-board).

We found it effective to [test using this approach](https://suffolklitlab.org/legal-tech-class/docs/testing/testing-scenarios):

1. understand and create a high-level feature matrix
1. write realistic user scenarios that provide good coverage of the features you
   want to test
1. use multiple testers to use the scenarios as a rough guide to help with
   quasi-random input testing.

It is a good idea to ask your testers to record their tests on Zoom as they
work. This lets you rewind and spot the exact sequence of events that causes an
error.
