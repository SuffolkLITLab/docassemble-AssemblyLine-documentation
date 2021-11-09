---
id: assembly_line_steps
title: The Assembly Line process
sidebar_label: The Assembly Line process
slug: /assembly_line_steps
---

We think that the most important work we did came not from computer code, but a
process: the process of automating a legal form, broken down into a series of
small steps.

## Our Trello boards {#trello}
We turned that process into a series of
[Kanban](https://blog.trello.com/kanban-data-nave) boards, and if you want you
can jump straight to
[copying](https://help.trello.com/article/802-copying-cards-lists-or-boards) and
customizing them for your needs:

1. [AssemblyLine - Pre-processing Template Board](https://trello.com/b/Z2Svx3oh/1-assemblyline-pre-processing-template-board#)
1. [AssemblyLine - Development Template Board](https://trello.com/b/ArfGFbz4/2-assemblyline-development-template-board)
1. [AssemblyLine - Testing Template Board](https://trello.com/b/nT7yy2Wl/3-assemblyline-testing-template-board)

## Overview

Automating a form involves:

* Research and vetting the substantive content
* Coding
* Adding labeled fields to a template document
* Generating and refining a prototype
* Testing and getting feedback

## Planning your time

### Planning out your app

Spend some time **mapping out the process**. Decide where your app will intervene, and
how you will help locate your users in the process. I.e., making sure they 
use your app at the right point in their journey and they have clearly communicated
next steps to complete the full journey. Rarely can a legal app complete the full
journey for a user.

The time required for this phase varies depending on the scope you select for your app.
Plan to spend several hours at a minimum. Depending on how you involve stakeholders,
you may spend several weeks here.

[Read more about planning](https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline/#the-planning-phase).

### Gaining comfort with Docassemble

If you are a completely new Docassemble developer, we recommend getting familiar in two steps:

* Get familiar with the Docassemble playground and the structure of a YAML file by completing a [Hello, World](https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world) exercise. Use the [Docassemble Slack](https://docassemble.org/docs/support.html#tocAnchor-1-1) or our Teams channel when you get stuck.
* Get familiar with the Weaver by following the exercises in our [Bootcamp](bootcamp.md)

Give yourself 2-3 weeks to become familiar with Docassemble basics.

The Weaver is a guided process, but it may still take a few weeks to familiarize yourself with its options. Start with
a very simple, already labeled form for your first experience.

### Getting your first prototype

To produce your first prototype, you must:

1. [label your template](doc_vars_reference.md) and then
1. [automate it in the Weaver](weaver_overview.md).

This first prototype will be very rough. It will not ask questions in the order that you want.
You may have extra questions or extra fields, or questions may be asked using our default
[question library](question_library/names.md) format and may need customization.

Plan to spend about an hour in the Assembly Line Weaver.

### Refining and testing

Almost all of your time will be in the refining and testing stage. You will take
your draft output from the Weaver and start to [customize the
output](customizing_interview.md). You should then share your work in progress regularly
with subject matter experts to check your assumptions and to refine the content.

You may spend several months here, even for a small project. You should be able to
get to a useful prototype stage within a few weeks, however, focusing on:

1. asking just the questions you want, and customizing stock questions
1. getting the order of questions right
1. refining the input style choices, such as adding multiple-choice options
1. adding navigational elements

Expect to have a lot of back and forth with your subject matter expert about
the language of your content. That is where most subject matter experts will
have experience and expertise. Be ready to push back where needed to address
our guidance on [asking good questions](question_style_overview.md).

### Launching your product

An app that nobody uses is not a good investment of your time. Plan your launch
strategy early, and budget at least a few weeks here.

Our work has a built-in landing page: [courtformsonline.org](https://courtformsonline.org).

Think about your landing page. A Docassemble interview is not indexable by Google, so you 
should have a static site, perhaps in Wordpress or another technology you already use, to
highlight and direct someone to your app.

Excellent examples include:

* [Illinois Legal Aid Online](https://www.illinoislegalaid.org/), [example landing page](https://www.illinoislegalaid.org/legal-information/divorce)
* [Washington Law Help](https://www.washingtonlawhelp.org/), [example landing page](https://www.washingtonlawhelp.org/resource/parenting-plan-forms-online)

Also consider building relationships with peers and organizations in control of
content. For an access to justice project (non-commercial) you will want to
build relationships directly with your regional legal help website, courts,
cities, and governmental partners to get direct links to your landing page on
their relevant self-help guides.

Consider direct outreach to potential repeat users of your app. For a tool focused
on domestic violence, building an ongoing relationship with victims advocates in
the police department, legal aid, and domestic violence shelters, for example, will
lead to many more users of your app than any approach to reaching consumers directly.
Hopefully, most of your consumers will be one-time users. Advocates will use it
again and again.

This direct outreach should be sustained over time. You can monitor analytics and
referrals to understand where your users are coming from and where to concentrate
your outreach.

Consider if you have a budget and willingness to experiment with direct
acquisition of consumers via: 

* paid advertising
* creating and sharing a promo, bus ad, or other materials that may be free advertising sources
* posting flyers
* gaining earned media (it helps to have a partner like a city or university here!)

## Step-by-step

Below is a brief outline of the content on our [Trello boards](#trello).

### Pre-processing

The [pre-processing Trello board](https://trello.com/b/Z2Svx3oh/1-assemblyline-pre-processing-template-board#) is
where you will:

1. clean up the template file
1. add our standardized labels
1. get a peer to review your work adding labels to catch mistakes early on

### Development

The phase that you will spend the most time on for your app--development--gets
just one Trello board.

[Development Template Board](https://trello.com/b/ArfGFbz4/2-assemblyline-development-template-board)

#### Using the Weaver

First, run your form through the [Weaver](weaver_overview.md).

#### Refining in the Docasemble playground

Next, [customize your form](customizing_interview.md).

#### Getting expert review

Get feedback from your subject matter experts. Turn the feedback into actionable
[Github](github.md) issues that you can triage later.

#### Getting plain language review

Hopefully you kept in mind our guidance on [writing good
questions](question_style_overview.md). Nevertheless, get a second opinion that
focuses just on how readable and easy to understand the substantive content 
of your app is.

#### Getting feedback from team members and external stakeholders

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

#### Iteration

The point of gathering this feedback, of course, is to move on from your first
runnable prototype into a refined final product.

[Read more about iteration](https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline/#iteration-and-testing).

Some important points to keep in mind is:

1. not all feedback can be implemented
1. an imperfect tool may be better than a perfect tool that is never released or used.

We developed the [legal app maturity
model](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model)
to provide a very concrete guidance as to which features should be prioritized.

### Testing

Testing should be incorporated into multiple stages of development, but we
provided some more specific guidance on our testing Trello
board](https://trello.com/b/nT7yy2Wl/3-assemblyline-testing-template-board).

We found it effective to [test using this approach](https://suffolklitlab.org/legal-tech-class/docs/testing/testing-scenarios):

1. understand and create a high-level feature matrix
1. write realistic user scenarios that provide good coverage of the features you
   want to test
1. use multiple testers to use the scenarios as a rough guide to help with
   quasi-random input testing.

It is a good idea to ask your testers to record their tests on Zoom as they
work. This lets you rewind and spot the exact sequence of events that causes an
error.

## More reading

* [Building your first expert system](https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline)
* Lauritsen and Soudakoff, [Keys to a Successful Document Assembly Project](https://static1.squarespace.com/static/571acb59e707ebff3074f461/t/5946f745725e25bf7ad93c9b/1497823045990/keys.pdf)