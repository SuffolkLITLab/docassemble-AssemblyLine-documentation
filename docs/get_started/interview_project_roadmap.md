---
id: interview_project_roadmap
title: Roadmap of a Successful Interview Project
sidebar_label: Roadmap of an Interview Project
slug: /get_started/interview_project_roadmap
---

Whether you are a LIT Clinic student, a recent [Forms Camp](https://www.ncsc.org/consulting-and-research/areas-of-expertise/access-to-justice/forms-camp) graduate, or anyone else getting started on an interview project—whether it is your first or fiftieth—this page will guide you through the stages of an interview-building project, from concept to launch.

This roadmap reflects the procedures, templates, and tools the LIT Lab uses on our interview-building projects, which you can adapt to yours.

## Identify Key Roles & Responsibilities

![Interview Project Roles & Lines of Communication](../assets/interview-project-roles-communication.png)

Every interview project has:

1. **Interview builders.** The person or team responsible for building the actual interview.
2. **Decisionmaker.** One person who is responsible for managing stakeholders and converting their feedback into clear decisions for the interview builders.
3. **Stakeholders.** Anyone who needs to have a say in the interview project, such as managers, judges, clerks, subject matter experts, IT staff, and users (self-represented litigants and lawyers).

:::note
You may have a team of interview builders and dozens of stakeholders, or you may be the only person working on this project. Even if this is a solo project, it helps to keep your different roles in mind.
:::

### The Decisionmaker

**While a successful interview project needs all these roles, the decisionmaker is especially important.** Most interview projects involve multiple stakeholders. When the interview building team requests guidance or feedback, multiple stakeholders may give multiple responses that may be confusing or conflicting. This dramatically slows progress.

The decisionmaker's job is to gather and clarify stakeholders' feedback so that interview builders have clear decisions to work from. The decisionmaker's responsibilities also include:

* Being a single point of contact and single source of decisions
* Regular meetings with the interview building team
* Timely responses to requests for feedback
* Gathering feedback or approvals from stakeholders and converting it to clear decisions
* Making the go/no-go decision to launch the interview

The decisionmaker must either (1) have the authority necessary to carry out these responsiblities, or (2) be responsible for getting authority when necessary.

## Kickoff Meeting

Schedule a kickoff meeting for the project as early as possible. The interview building team, the decisionmaker, and the key stakeholders should attend.

Here is a sample kickoff meeting agenda:

* Everyone should introduce themselves and identify their role in the project.
* Discuss the reason for having a single decisionmaker and identify that person.
* Give an overview of the development process (use this page as a guide).
* Schedule a regular check-in meeting (weekly or every other week).
* Introduce the form and how it will be used. Cover the who, what, when, where, and why:
  * Who will use it and what are they called? Who else appears on the form? Who can't use it and how would they know?
  * What can someone do with it? What can't they do with it?
  * When would someone use it, and what will have happened before they do?
  * Where would someone use it? Where would they file it?
  * Why would someone use it?
  * How do they file it? If it shouldn't be filed, what should they do after completing it?
* Agree on a [minimum viable product (MVP)](assembly_line_setup#stick-to-an-mvp) and define the requirements for this project.
* Agree on a process for changing the scope of the project (i.e., adding features).
* Discuss what success looks like for this project, and how you will measure it.
* Do a [pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)—imagine this project has failed and discuss why.

:::info
If this is a solo project you should still make time for a kickoff "meeting" with yourself.
:::

## Build the Interview

After the kickoff meeting it is time to get to work! Interview building includes:

* Coding (following the [GitHub workflow](../github.md#workflow))
* Keeping track of tasks, change requests, questions, etc., using [GitHub issues](../github.md#use-issues)
* Getting help with blockers ([resources](resources.md))
* Testing the interview
* Demonstrating the interview
* Regular standups with the interview building team
* Regular check-ins with the decisionmaker and key stakeholders
* More coding

:::tip
The LIT Lab's [interview project template](https://github.com/orgs/SuffolkLITLab/projects/22) can help you keep your project organized. Just click the **Use this template** button to use it. (You'll need a free [GitHub](../github.md) account.)
:::

## Meeting Cadence

Two recurring meetings will help you keep the project moving forward. These are short, 5–15 minute "standup" meetings to share progress and identify and remove blockers—anything preventing someone from making progress.

### Interview-Building Team Meetings

The interview-building team should meet frequently. Daily check-ins are most common on active projects, and anything less than weekly is unlikely to be effective.

:::tip
Consider incorporating our Monday community meetings into your standup schedule. We run them standup-style, with time for solving blockers as a group. If this is a solo project, the Document Assembly Line community can be part of your interview-building team!
:::

These meetings should follow a straightforward standing agenda. Each person on the team should share:

1. **Progress:** what they worked on or accomplished since the last meeting
2. **Plan:** what they are working on now
3. **Blockers:** issues that are preventing them from making progress

The reason for sharing your progress and plan for the day/week is so that everyone has an idea what everyone else is working on. This is necessary for the project manager, and can help interview builders avoid code conflicts or identify when it's time to merge branches.

The reason for sharing blockers is to get help. Some teams reserve a larger block of time and use it to solve blockers together, like we do in our Monday community meetings. Other teams prefer to solve blockers separately. And sometimes a blocker is a question you need answered by the decisionmaker.

### Decisionmaker Meetings

Weekly or every-other week meetings with the decisionmaker and one or two key stakeholders are a chance to keep them informed of your progress and get decisions when you need them to move forward. The standing agenda is similar to the one above:

1. **Progress:** what the interview-building team worked on or accomplished since the last meeting
2. **Plan:** what the interview-building team plans to work on between now and the next meeting
3. **Questions:** oustanding questions that are preventing the interview-building team from making progress

When sharing progress and the current plan, it can help to give a percentage estimate. Something like: "We think we are about 30% of the way to a complete draft interview, and by our next meeting we hope to be at 50%."

:::tip
Use [GitHub issues](../github.md#use-issues) to keep track of your questions for the decisionmaker. Add a **question** label to GitHub issues to make it easy to pull up your list of questions during a meeting.
:::

To get better answers, ask questions better. Here are some tips for asking questions:

* Before you pose a question to the decisionmaker, ask your interview-building team (or the community).
* Avoid open-ended questions. When you decide to pose a question to the decisionmaker, give them two or three options and explain the pros, cons, and implications of each.
* If you do ask an open-ended question, explain that you are trying to generate ideas, not decide on a solution.
* Don't ask the decisionmaker to design the interview. Ask for goals ("Do you need the attorney's ID number?"), not details ("Do you want the ID number field to show up right under the attorney's name field?"). 

**Remember: if you ask a question you will get an answer.** Beware of asking questions when you don't need the answer, or you may just complicate the project. The decisionmaker and stakeholders will have ample opportunity to give feedback later.

Finally, when asking questions it helps to show the relevant part of the interview, but it is also a good idea to remind the decisionmaker and stakeholders that the interview is a work in progress. If a different screen catches their eye, you can just let them know you are still working on it and you aren't ready for their feedback, yet.

## Get Preliminary Feedback

The decisionmaker and key stakeholders will probably want to see a demonstration of the interview as soon as you have something to show them. 

Demonstrating your interview is a good way to show your progress and show context for your questions.

An interview is ready for preliminary feedback when it has all the essential elements, even if 



1. Demonstrate the interview to a more experienced interview builder, first. This will help identify problems you can solve on your own, as well as questions you need to ask the decisionmaker.
2. Create a separate Docassemble Playground project for your demo and make sure it works.
3. When you demonstrate the interview, listen carefully to the feedback and ask as many questions as you need to make sure you understand it.




## Get Feedback on the Completed Interview



Once the interview is built, it's time to hand it over to the decisionmaker for feedback. 

## Get a Go/No-Go Decision

## Launch the Interview
