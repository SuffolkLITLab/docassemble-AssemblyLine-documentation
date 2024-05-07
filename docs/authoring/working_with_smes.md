---
id: working_with_smes
title: Working with a subject expert
sidebar_label: Working with a subject expert
slug: /authoring/working_with_smes
---

## Getting the project started

### Identify decision makers, team members, and sources of information

Identify an internal and external team for the project. It should include:

1. A project manager tasked with keeping the project on schedule. This can be either
   internal or external.
1. The developer or developers.
1. An identified subject matter expert or experts.
1. Key stakeholders who will need to sign off on the project or make decisions.

This is also a good time to identify primary and secondary sources that the team
can use to answer questions if an SME isn't readily available.

### Schedule a check-in cadence

Many projects require a check-in at a cadence of once a week. For slower projects,
once every 2 weeks or once a month may be sufficient. Pick a day of the week
and time in advance and set up a regular standing meeting on your calendar.

Check-ins should generally be focused on quick status updates and blockers and take from 15 
minutes to 1 hour, depending on their frequency.

Not everyone needs to attend the check-in meetings.

### Create a project communication system

On the Assembly Line project, we default to using Kanban boards to track 
interview progress. We use these columns:

* Backlog, for cards that haven't been prioritized yet (they can represent ideas that need review)
* To-do
* Doing
* Blocked, for cards that can't be acted on because of a "blocker" (which might include waiting for an SME's response)
* Done

You can use our [GitHub project template](https://github.com/orgs/SuffolkLITLab/projects/22/views/2) as a starting
point for your project.

Using the GitHub project, you can track progress, assign deadlines to tasks, and have threaded conversations (once the cards are
converted into issues).

#### Alternatives to GitHub projects for asynchronous communication

* A shared Google Document
* Trello
* Microsoft Planner

And both
* Microsoft Teams
* Slack

May be useful for closer to real-time communication.

## Gather information

### Understanding the project scope

Meet early with the client or subject matter expert to talk through
the project's scope. In most projects, the client will have an existing
template or set of templates that they will want you to automate.

Read through the documents. Sketch out your understanding of the following 
key points:

1. What problem is the tool intended to solve?
1. Who is the most likely user of this tool? Possibilities often include:
        * An attorney or paralegal who is experienced in this area of work
        * A professional who may get light training (for example, a new employee
           or a volunteer in a clinic)
        * A litigant on their own.
1. What else do we know about the most likely user?
        * Are they dealing with a stressful or conflict heavy process?
        * Are they highly educated or likely to have a lower reading grade level?
1. Think through the [Legal app maturity model](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model). What level form would be right for this project?

### Identify a project timeline

Come up with a rough schedule with key milestones.

### Understanding success metrics

1. How will we know if the project is successful?
        * How much time does the process take now?
        * How long should it take users to complete the process after the project is done?
        * Who is unable to complete the process now? How will we know if they
          can complete it with assistance?
        * What is the total possible population the tool is targeting? (e.g., how many
          of the documents are currently filed in a year? What percentage do we want to cover?)
1. If the project failed, what would you predict is the reason why?

### Document the existing process

1. What primary law sources and secondary sources are important for this project?
1. Who knows about the current process? Who else should we talk to?
1. What **steps** will the user have to take before they use the tool?
1. What **information** will the user need to have before they use the tool?
1. What does the current process look like? Document:
        1. Inputs
        1. Outputs
        1. Tools and software, such as document management systems, CMSs, and CRMs
        1. Decision points
        1. The current **pain points** and **inefficiencies**
        1. Variations and exceptions
1. Should any parts of the process be left **un**-automated?
1. What compliance or regulation needs to be kept in mind?
1. What **steps** will the user need to take and **information** will they need to have 
   when they are **finished** using the tool?

One approach to this is to interview someone who currently completes the process. Have them pretend
that you are the client and ask questions as they walk you through filling in the form or gathering the information
needed to complete the document.

Interview key stakeholders to get answers. Write down the responses and make your own observations. 
Share your summary with the stakeholders to make sure they agree with your assessment.

## Mark up the templates

Annotate the documents for the following:

1. Names of parties, other participants, locations
1. Pronouns, quantities, relationships, and titles
1. Language that depends on quantity, relationship, or title
1. Dates
1. Dollar figures and financial terms
1. Conditional clauses
1. Signatures

Review the annotated document with the client to check your understanding about what parts of
the document need to be part of the interview.

## Share drafts early and often for feedback

### Consider using flowcharts, wireframes or low fidelity prototypes to communicate your vision

You can use a tool like:

1. Figma
1. Penpot
1. Flowchart.fun

or even PowerPoint or pen and paper sketches to communicate an early vision
of how the tool will work. This should include key branching logic.

This isn't necessary in every straightforward automation project or if
it would take less time to build a functional basic automation than to 
turn it into a flowchart or wireframes. The Weaver helps reach the prototype stage
early.

### Share examples of the marked up template

Early on, provide the client with your prepared template, ideally with the
Jinja syntax or PDF fields higlighted. This helps make sure you and the client 
both agree about what parts of the document will be automated.

If you rely on the client interactively testing to catch issues with the template,
they may not test a branch that would reveal the problem.

### Use the translation tool to pull out language from the interview

Once you have built the first version of the interview, you can use the
[ALDashboard](https://github.com/SuffolkLITLab/docassemble-ALDashboard)'s 
"Interview Translation" widget to create an Excel spreadsheet that contains
all of the text in the interview. This can help the subject matter expert review
the written work.

### Have your stakeholders take detailed notes or record their feedback

In some instances, it may be useful to have the stakeholder record themselves
using the tool. Make sure that the screen ID is visible in the recording.

A recording may capture irrelevant feedback. If the stakeholder has capacity,
it's more useful for them to write down their feedback.

### Ask the decision maker to triage feedback

It's generally not useful to get unfiltered feedback from multiple stakeholders.
If you have multiple people contribute feedback, ask the decision maker to triage
it. If they aren't able or willing to triage the feedback, take your own first pass
and come up with structured questions to triage any feedback that:

1. Is contradictory, either of a previous decision or another item of feedback
1. Seems out of the original project vision or scope
1. May take a significant amount of time, perhaps outside of the understood budget
1. Seems to contradict best practices or principles of usability

Ultimately, the client is working with you because they trust your expertise. But they
are the final decision maker. Your job is to counsel and then follow.

## Check in regularly on the project timeline and hourly budget

It's easy to get lost in the refining stage for a project. Pay attention to 
the project milestones, timeline, and budget. This may mean having to make
choices about optional features that don't directly advance the project goals.

### Use the check-in meetings to check in on project budget

### Share regular status emails with the client