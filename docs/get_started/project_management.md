---
id: project_management
title: Interview project management and working with teams
sidebar_label: Project management
slug: project_management
toc_max_heading_level: 4
---

Whether you are building interviews for a court or legal aid organization, a LIT Clinic student, a recent [Forms Camp](https://www.ncsc.org/consulting-and-research/areas-of-expertise/access-to-justice/forms-camp) graduate, or anyone else building online guided interviews, this page will guide you through the stages of a successful project.

This contains the procedures, templates, and tools the LIT Lab uses on our own interview-building projects, which you can adapt to yours.

:::tip
If this is your first interview-building project, it may help to read more about [planning and building your first expert system](https://projects.suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline).
:::

## Overview {#overview}

Interview-building project generally follows these phases:

| Phase                           | Primary goal          |
| :------------------------------ | :-------------------- |
| [Kickoff](#kickoff)             | See [sample agenda](#kickoff:~:text=Sample%20kickoff%20meeting%20agenda)     |
| [Research](#research)           | Gain insight into and understanding of the problem to be solved |
| [Design](#design)               | Agree on an MVP       |
| [Development](#development)     | Build the interview   |
| [Feedback](#feedback)           | 1–3 rounds of feedback and further development |per feedback round |
| [Launch](#launch)               | Publish the interview |
| [Promotion](#promotion)         | Ensure that people who need the interview will |
| [Retrospective](#retrospective) | Identify areas of improvement for the next interview project |

After the kickoff through launch, the interview building team should hold regular [standups](#development-standups) and [check-ins](#decisionmaker-check-ins) with the decisionmaker and key stakeholders, with additional [communication](#communication) as necessary.

### Research {#research}

Before you start building anything, gain a thorough understanding of the problem you are trying to solve.

Work with the decisionmaker and subject-matter experts to document the process and develop user personas. Make sure they agree with your understanding before you move on to [design](#design).

#### Document the process {#document-process}

An online guided interview is a single step in a larger and more complex process.

Start by researching that process from beginning to end—especially what happens before and after someone completes your interview. It always helps to interview someone with experience and observe while someone goes through the process, or both.

<details>
  <summary>Process documentation checklist</summary>

  1. Familiarize yourself with the relevant law and procedure
  2. Identify 2 or 3 subject-matter experts you can call on
  3. Create a flowchart of the process from beginning to end
  4. Identify the user's ultimate goal
  5. What must have happened in order for someone to use this interview?
  6. What pieces of information will the user need to provide during the interview? Make a list, and classify each according to the [Jarrett and Gaffney](https://www.sciencedirect.com/book/9781558607101/forms-that-work) framework:
    * **Slot-in** information the user already knows, like their own name and address
    * **Gathered** information the user will look up from a readily available source like a court notice or a government ID (that you can tell them they will need before they start!)
    * **Third-party** information the user will get by calling someone or looking it up in a database (make a list of the sources of this information)
    * **Created** answers the user will make on the spot
  7. What documents must the interview assemble?
  8. What will the user have to do after completing the interview?
</details>

#### User research and personas {#user-research}

Describe the intended user of the interview.

* Legal knowledge
* Assistance
* Education level
* Languages they can speak
* Languages they can read and write
* Reading comprehension level
* Time available
* Access to technology (computer, smartphone, printer, etc.)
* Reliable internet access
* Stress or trauma involved in this process

Consider creating 2 or 3 [user personas](https://en.wikipedia.org/wiki/Persona_(user_experience)) that together describe likely interview users. Considering design and development problems from the perspective of your user personas can give you insight into what actual users will need from it.

:::warning
If your user personas are too general, they won't be help you focus. If they are too specific, they can result in blind spots and missed opportunities.

Even if your personas are about the right specificity, watch out for blind spots—details that could lead to a poor experience for other likely users. In the sample persona below, for example, "Maria" is a single mother. That's a helpful detail for understanding what someone facing eviction might be experiencing, but you probably wouldn't want to build an eviction defense tool that assumes all users are single mothers.

To strike the right balance, each user persona should reflect about 20–30% of likely users. Then, if you create 2 or 3 user personas, they should cover the majority of likely users. Even so, when you always check for blind spots when referring to a persona=!
:::

<details>
  <summary>Sample persona for an eviction defense tool</summary>

  **Maria Tenant**

  | Details           |               |
  | :---------------- | :------------ |
  | Age               | 35            |
  | Location          | Boston, MA    |
  | Occupation        | Retail worker |
  | Family status     | Single mother with 2 children, ages 8 and 5 |
  | Income            | Low           |
  | Housing status    | She is renting a 2-bedroom apartment in a building occupied primarily by other low-income families |
  | Technology use    | She owns an older Android smartphone with a limited data plan; uses social media and does all her communication on her phone |

  | Challenges              |    |
  | :---------------------- | :- |
  | Financial strain        | She earns $20,000 per year, which isn't enough for her expenses. She often has to decide between paying different bills. |
  | Limited legal knowledge | She has limited understanding of her rights as a tenant and feels intimidated by legal processes. |
  | Limited resources | She has limited access to technology and legal assistance due to her financial situation and work hours. |

  | Goals      |    |
  | :--------- | :- |
  | Stability  | Her primary goal is to provide a stable home for her children. She wants to avoid eviction to maintain access to her children’s school and her local support network. |
  | Education  | She is keen to learn more about her rights as a tenant and how she can legally contest an unfair eviction. |
  | Assistance | Maria needs easy-to-understand, accessible legal advice and support that fits into her limited budget and time constraints. |
</details>

### Design {#design}

Before you start building anything, make sure everyone agrees on what you will be building.

#### Identify the project requirements/MVP {#requirements}

Start by listing the requirements for your project—what it must do to be acceptable. Remember that you are building the *first* version of this interview, and you can iterate and improve on it in the future. Start by building something that works, using the minimum viable product concept as a guide.

<details id="mvp">
  <summary>Minimum viable product (MVP)</summary>

  First make something that works, then make it better. Consider [Henrik Kniberg's skateboard analogy](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp):

  ![Minimum viable product](../assets/mvp.png)

  Different projects will have different MVPs/skateboards.
</details>

The LIT Lab's [legal form maturity model](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model/#quick-summary) is a framework for thinking about your MVP. For interviews built for legal professionals, level 1.5 is usually enough. Interviews built for the general public should usually target level 2+. Levels 3 and 4 are meant for future iterations.

An MVP can be as simple as a list of requirements.

<details>
  <summary>Sample MVP description for a court form</summary>

  Maturity model target level: 2

  * The interview flows like a natural-language intake with a new legal aid employee
  * Compound questions are broken up into separate screens
  * The interview uses branching logic to skip unnecessary questions and provide a logical flow
  * The user is not asked for the same information twice
  * The interview correctly populates every field on the form
  * The user can sign on their computer or phone screen
  * Questions are written in plain language (for a 6th-grade reading level)
  * The user will be offered a next-steps document to download
  * The form identifies users who cannot use the firm as early as possible, and gives them an "off-ramp"
  * The interview has been approved by key subject-matter experts
  * The interview has been tested rigorously with a combination of scenario-baesd user testing, random input testing, or automated testing
</details>

Once everyone agrees on an MVP for this project, stick to it. Refer to the MVP description to help resolve questions about  to  Don't add to the MVP without a compelling justification.


#### Create a flowchart

Create a flowchart showing branching logic, follow-up questions, and changes to the output documents

#### Wireframing

Use wireframes, decision trees, and other low-fidelity tools to "sketch" the interview you are going to build.

### Development {#development}

#### Work planning

The LIT Lab's interview project template can help you keep your team organized and your project on track. It is based on the [Scrum agile project management framework](https://www.atlassian.com/agile/scrum). To use the project template:

1. Make a copy of the [interview project template](https://github.com/orgs/SuffolkLITLab/projects/22) by clicking the **Use this template** button (you'll need a free [GitHub](../authoring/github.md) account)
2. Once you have [published your interview to GitHub](../authoring/github.md#publish-your-interview-to-github), [connect the project board to your interview repository](https://github.com/orgs/SuffolkLITLab/projects/22/views/2?pane=issue&itemId=66449601)
   1. New issues will be added to the backlog automatically
   2. Issues will be closed automatically when the card is moved to the **Done** column
3. As you work on the interview, follow the [GitHub workflow](../authoring/github.md#workflow) and move issues/cards from left to right

### Feedback {#feedback}

Once the interview works from start to finish and you have closed all the issues that are in scope for the [MVP](#mvp), it is ready for feedback. Start by getting feedback internally, from your team. After you have made revisions based on the internal feedback, get external feednack from the decisionmaker and stakeholders.

After getting feedback, create a [GitHub issue](../authoring/github.md#use-issues) for each change request from the tester or decisionmaker. Consider this your "punch list" to finish the project. Then get back to work on those issues!

When you have closed all the issues/items on your punch list, send it back to the decisionmaker for further feedback. Each round of feedback should result in fewer change requests and move the project closer to completion.

:::info
Two rounds of feedback and revision are usually enough.
:::

#### Internal feedback

Before you show the interview to the decisionmaker and stakeholders, get someone with Document Assembly Line experience to test it with you. This will help you identify issues you may have missed and questions you still need to ask the decisionmaker.

:::tip
If you aren't sure where to find someone to give you preliminary feedback, try asking [the community](https://assemblyline.suffolklitlab.org/docs/get_started#join-the-community)! Come to one of the Monday community meetings or ask in the Microsoft Teams forum.
:::

Schedule a video meeting with the tester so you can watch them go through the interview. Or they can watch you demonstrate it. Record the test if you can so you can focus on the test instead of taking notes.

During the demonstration or testing:

* Encourage the tester to comment on all aspects of the interview
* Ask them to follow different branches of the interview logic
* Listen carefully to their feedback and ask follow-up questions to make sure you understand it

#### Client feedback

Once you have closed all the issues that are in scope for the [MVP](#mvp) and tested the interview yourself, it should be ready to hand off to the decisionmaker and stakeholders for their testing and feedback.

Share the interview with the decisionmaker and give them a few tips for giving helpful feedback:

* The feedback should come in the form of a written list of requested changes
* If there is confusing or conflicting feedback from stakeholders it is the decisionmaker's responsiblity to clarify it before presenting it to the interview building team
* Change requests should be specific. For example, if the text of a question should be changed, the change request should include the new text.
* At the top of each page of the interview is an ID. Use the ID to refer to specific interview pages, not a page number.

### Launch {#launch}

When the interview is complete, there is one last decision for the decisionmaker to make: whether the interview is ready to go live.

If the answer is yes, launch the interview!

If the answer is no, find out if further revision would result in a yes. If not, [do a retrospective](#do-a-retrospective) and try to understand what happened.

When you are ready to launch, add the interview to your production server and make sure it works as intended.

### Promotion {#promotion}

Once the interview is live, consider how people who need it will find it.

* You should have a dedicated page on your website that tells people about the interview and links to it. Put some thought into this page so people can find it by searching Google.
* Others might want to direct people to the interview, like courts, legal aid organizations, and other advocates. Ask them to link to your landing page from their own websites.
* Paid advertising can help spread awareness, if you have a budget for it.

It's worth investing some time in [search engine optimization (SEO)](search_engine_optimization). You can also set up [collect analytics](../components/InterviewStats/interviewstats_overview.md) to learn how people are finding and using the interview.

### Retrospective {#retrospective}

Before you start another interview-building project, pause briefly for a retrospective on how this one went. The retrospective format comes from [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), and it is a way to embrace continuous improvement by taking a moment to reflect on the project you just finished in order to improve the next one.

If your interview project fails, a retrospective is an important tool for making sure you avoid another failure.

To do a retrospective, the project manager should meet with each member of the group to discuss and document the answers to three questions:

1. What went well that we should keep doing?
2. What did not go well that we should stop doing?
3. What should we try going forward?

Retrospectives are generally most effective one-on-one, in real time.

:::tip
Insist that everyone give at least one answer to each question. Even if someone insists nothing went badly, ask if they found themselves confused or struggling at any point during the project. Their answer may lead to an area that could be improved.
:::

Use what you learn from the retrospective when planning your next interview-biulding project.

#### Success metrics {#success-metrics}

Consider measuring the success of your project in terms of:

* Time saved by those who use the tool
* People helped as a percentage of total filings of the same type
* Closing an access gap by enabling people to do something they couldn't before

You can use the [Interview Stats](../components/InterviewStats/interviewstats_overview.md) package to track usage. Usability tests, reading grade level measurements, and auditing for best practices can help you understand how your interview has affected the access gap.

#### Transfer docs {#transfer-docs}

## Timeline {#timeline}

<details>
  <summary>Sample timeline</summary>

  This is a sample timeline with estimated **minimum** times to complete each [project phase](#overview). Your team may decide it needs or wants more time for any of these phases.

  | Phase                           | Estimated minimum time  |
  | :------------------------------ | :------------------- |
  | [Kickoff](#kickoff)             | 1–2 hours            |
  | [Research](#research)           | 1–2 weeks            |
  | [Design](#design)               | 1 week               |
  | [Development](#development)     | See [estimating development time](#estimating-development-time) |
  | [Feedback](#feedback)           | 6 weeks (see [estimating feedback time](#estimating-development-time)) |
  | [Launch](#launch)               | 1 day                |
  | [Promotion](#promotion)         | 1 week, then ongoing |
  | [Retrospective](#retrospective) | 20 minutes per team member |
</details>

### Estimating development time {#estimating-development-time}

Development is a function of the complexity of the interview and the development resources (developer time) available.

Start by estimating the time required to develop the interview based on:

* The number of templates
* The number of fields
* The number of branching points in the interview logic
* How dynamic the interview questions need to be (i.e., to account for quantity, pronouns, and relationships, etc.)
* How dynamic the output documents need to be

Developer time depends on availability and experience:

* An experienced full-time developer has about 25 productive hours in a week
* A beginner may take 3–5 times as long to do the same work
* Other projects and obligations may reduce the available time

A single, fairly simple form might take about 20 hours. But if a beginner developer is going to work on it, it's safe to assume it will takek them at least 60 hours. And if the developer has only 3 hours per week, it will take about 5 months (20 weeks).

Come up with a schedule and key dates and milestones, working backward from the target launch date.

* Start date
* MVP and maturity level agreed on
* Ready for internal feedback
* Ready for client feedback 
* Go/no-go decision
* Target launch date

### Estimating feedback time {#estimating-feedback-time}

Most interview projects will involve 1 round of internal feedback and revision and 2 or 3 rounds of feedback and revision, then a final punch list to finalize the interview for the go/no-go decision. 

A round of feedback includes:

1. Demonstrating or handing off the draft interview
2. Feedback, which may be:
   1. Given synchronously (i.e., as part of a demo)
   2. Given asynchronoustly (i.e., the decisionmaker coordinates testing among stakeholders, compiles and clarifies their feedback, and delivers it to the interview-building team)
3. Revision or further development based on the feedback

#### Internal feedback

Internal feedback can be informal. For example, in the LIT Clinic, students demonstrate their interview in class, followed by 10–15 minutes of real-time feedback. If the interview-building team is too small for internal feedback to make sense, you could substitute a informal live feedback session with just the decisionmaker, not all the stakeholders.

Allow at least a week for further development before the interview is ready for for client feedback.

Assume at least 1 week for an internal feedback round.

#### Client feedback

One week (5 business days) should generally be enough time for the client to deliver feedback. Allow at least a week after that for further development and revision before seeking further feedback.

Two rounds of client feedback should be enough to arrive at a "punch list" of tasks necessary to finalize the interview before launch.

Assume at least 5 weeks for client feedback (2 rounds plus the final punch list).

## Roles and responsibilities

![Interview project roles & lines of communication](../assets/interview-project-roles-communication.png)

Every interview project has several roles:

1. **Interview builders.** The person or team responsible for building the actual interview. Sub-roles include designer, lead developer, developer, and project manager.
2. **Decisionmaker.** One person who represents the client and is responsible for managing stakeholders and converting their feedback into clear decisions for the interview builders. Similar to a product owner.
3. **Stakeholders.** Anyone who needs to have a say in the interview project, such as managers, judges, clerks, subject matter experts, IT staff, and users (self-represented litigants and lawyers).

:::note
You may have a team of interview builders and dozens of stakeholders, or you may be the only person working on this project. Even if this is a solo project, it helps to keep your different roles in mind.
:::

#### The decisionmaker {#decisionmaker}

**While a successful interview project needs all these roles, the decisionmaker is especially important.** Most interview projects involve multiple stakeholders. When the interview building team requests guidance or feedback, multiple stakeholders may give multiple responses that may be confusing or conflicting and dramatically slow progress.

The decisionmaker's job is to gather and clarify stakeholders' feedback so that interview builders have clear decisions to work from. The decisionmaker's responsibilities also include:

* Being a single point of contact and single source of decisions
* Regular meetings with the interview building team
* Timely responses to requests for decisions and feedback
* Gathering feedback or approvals from stakeholders and converting it to clear decisions
* Making the go/no-go decision to launch the interview

The decisionmaker must either (1) have the authority necessary to carry out these responsiblities, or (2) be responsible for getting authority when necessary.

## Meetings {#meetings}

Every interview building project should start with a kickoff meeting and then follow a regular cadence of interview-builder standups and decisionmaker-stakeholder check-ins.

### Kickoff meeting {#kickoff}

Hold a kickoff meeting for the project as early as possible. Everyone who is important to the success of the project—the interview building team, the decisionmaker, and the key stakeholders—should attend.

The goal of a kickoff meeting is to get everyone on the same page when it comes to roles, expectations, and timeline. A good kickoff meeting sets the stage for a successful project.

<details>
  <summary>Sample kickoff meeting agenda</summary>

  * Introductions
  * Decide who will be the [decisionmaker](#decisionmaker)
  * Review the interview-building process (i.e., refer to this page)
  * Agree on a [target launch date](#timeline)
  * Schedule regular [decisionmaker check-ins](#decisionmaker-check-ins)
  * Decide on [communication](#communication) tools
  * Ask the stakeholders to [summarize the process](#document-process) (you can follow up later to get more details)
  * Discuss the requirements for this interview and the [minimum viable product (MVP)](#mvp)
  * Agree on a process for changing the scope of the project (i.e., adding features)
  * Discuss what [success](#success-metrics) looks like for this project
  * Consider doing a pre-mortem[^pre-mortem]
</details>

[^pre-mortem]: A [pre-mortem](https://hbr.org/2007/09/performing-a-project-premortem) can be helpful on larger and riskier projects. A pre-mortem asks participants to imagine a project's failure in advance, without judgment or blame. Studies show that premortems can increase the success of projects because they make it easier for stakeholders to "correctly identify the reasons for future outcomes" by as much as 30%, reduce the risks, or reconsider the project.

### Development standups {#development-standups}

The interview-building team should meet frequently for a short, 5–15 minute "standup" to share progress and identify and remove blockers. It's also possible to do standups asynchronously, but only if your team works well that way.

Daily check-ins are common on active projects, and anything less than weekly is unlikely to be effective.

Standups should follow a straightforward standing agenda. Each person on the team shares:

1. **Progress:** what they worked on or accomplished since the last meeting
2. **Plan:** what they are working on now
3. **Blockers:** anything preventing them from making progress

The reason for sharing your progress and plan for the day or week is so that everyone is aware of what everyone else on the team is working on. This is necessary for the project manager, and can help interview builders avoid [merge conflicts](../authoring/github.md#resolve-conflicts) or identify when it's time to [merge branches](../authoring/github.md#pull-requests).

The reason for sharing blockers is to get help. Some teams reserve a larger block of time and use it to solve blockers together, like we do in our Monday community meetings. Other teams prefer to solve blockers separately. And sometimes a blocker is a question you need answered by the decisionmaker before you can move forward.  

:::tip
Consider incorporating our Monday community meetings into your standup schedule. We run them standup-style, plus time for solving blockers as a group. If this is a solo project, the Document Assembly Line community can be part of your interview-building team!
:::

### Decisionmaker check-ins {#decisionmaker-check-ins}

Weekly or every-other week check-in with the decisionmaker and one or two key stakeholders are a chance to keep them informed of your progress and get decisions when you need them to move forward. The standing agenda is similar to the one above:

1. **Progress:** what the interview-building team worked on or accomplished since the last meeting
2. **Plan:** what the interview-building team plans to work on between now and the next meeting
3. **Questions:** oustanding questions that are preventing the interview-building team from making progress

When sharing progress and the current plan, it can help to give a percentage estimate. Something like: "We think we are about 30% of the way to a complete draft interview, and by our next meeting we hope to be at 50%."

:::tip
Use [GitHub issues](../authoring/github.md#use-issues) to keep track of your questions for the decisionmaker. If you add a **question** label to issues, it is easy to pull up the list of your questions during a meeting.
:::

<details>
  <summary>Tips for asking questions</summary>

   To get better answers, ask questions better:

   * **Don't ask a question if you don't need the answer.** Before you ask the decisionmaker, ask your interview-building team or consult your [style guide](../style_guide/question_style_overview.md) or other internal documentation.
   * **Avoid open-ended questions.** Intead, give the decisionmaker options and explain the pros, cons, and implications of each.
   * **If you must ask an open-ended question**, explain that you are trying to generate ideas, not come up with the solution right then and there.
   * **Don't ask the decisionmaker to design the interview.** It is usually better to clarify goals or requirements ("Do you need the attorney's ID number?"), not details ("Do you want the ID number field to show up right under the attorney's name field?").

   **Remember: if you ask a question you will get an answer.** If you don't need an answer, asking for one is not likely to help, and you may get an answer that complicates the project instead of helping you move forward.

   Finally, when showing the relevant part of the interview to illustrate a question, remind the decisionmaker and stakeholders that the interview is a work in progress and you are not ready for feedback beyond the answer to your question.
</details>

## Communication {#communication}

You will need to communicate outside of meetings, of course. Agree on the tools you will use internally (i.e., within the interview-building team) and externally (i.e., with the decisionmaker and stakeholders).

If your team does not already have a preference, here is what we use for LIT Lab projects:

#### For internal communications:

* Zoom for meetings
* GitHub issues in the interview repository or [project board](https://github.com/orgs/SuffolkLITLab/projects/22)
* Microsoft Teams for general communications and file storage

#### For external communications:

* Zoom for meetings
* Email
* In some cases, GitHub or Teams

## Tips from the community

In a Document Assembly Line workshop, members of the community shared their tips for managing a successful interview-building project:

<p align="center">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/txm6VJVlG_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
