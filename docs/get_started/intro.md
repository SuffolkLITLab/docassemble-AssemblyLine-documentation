---
id: intro
title: Introduction to the Document Assembly Line
sidebar_label: Introduction
slug: /get_started
---

The Document Assembly Line is a toolbox for building online guided interviews for court forms and other legal documents for use by self-represented litigants. It is supported by the [Legal Innovation and Technology Lab (LIT Lab)](https://suffolklitlab.org/) at [Suffolk University Law School](https://www.suffolk.edu/law/) and an active community of courts, orgs, and volunteers.

## Background

This short, 3-minute video by David Colarusso and Quinten Steenhuis explains how the Document Assembly Line was born from a large-scale international pandemic collaboration:

<p align="center">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y7Bwk9g8H7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

The LIT Lab gathered more than 200 volunteers from around the world and built tools such as:

* A [project management guide](project_management.md) for building [Docassemble](https://docassemble.org) interviews to assemble court forms for filing.
* The core [Document Assembly Line Tools](https://github.com/SuffolkLITLab/docassemble-AssemblyLine), to make it easier to use key Docassemble features.
* The [the Weaver](../authoring/weaver_overview.md), a tool for converting existing PDF and DOCX court forms into draft Docassemble interviews in as little as one hour.
* A [library](../style_guide/question_library/names.md) of pre-built, commonly used, accessible questions, vetted by experts and translated into at least 5 languages.
* A [style guide](../style_guide/question_style_overview.md) for interview questions that are easy to read and answer.
* The first [open-source, non-profit e-filing service provider (EFSP)](components/EFSPIntegration/efsp_overview.md) so that forms completed through guided interviews could be filed directly with courts using the Tyler e-filing management system.
* A [collection of existing PDF forms](https://suffolklitlab.org/form-explorer/)
  across multiple jurisdictions.

## More information

:::tip
[Get our one-page overview of the Document Assembly Line.](https://suffolklitlab.org/onepagers/docassemblyline/)
:::

All Document Assembly Line interviews:

* Have a common look and feel, with reusable components.
* Are mobile friendly so users can do everything on a smartphone.
* Contain contextual help to guide users through the interview.
* Use a standardized structure and questions to build consistency and gain trust.
* Use address autocompletion to improve accuracy and save time.
* Allow users to text, email, or share a link to their work in progress with a
  friend or advocate if they want help.
* Have an integrated feedback form for users to report problems or send praise.
* Gather anonymized statistics in aggregate for reporting on usage.
* Support digital signatures.

## See it in action

These websites and interviews are built with the Document Assembly Line tools:

* [CourtFormsOnline](https://courtformsonline.org/) (the original)
* [Missouri Tenant Help](http://motenanthelp.org)
* Illinois Legal Aid Online's [motion](https://www.illinoislegalaid.org/legal-information/motion) and [transfer on death instrument (TODI)](https://www.illinoislegalaid.org/legal-information/transfer-death-instrument-or-todi) are some of the interviews ILAO has converted to Docassemble

## Get involved/how you can help

The Document Assembly Line is community built and supported. Because all our tools and software are open source, courts and orgs can build with confidence knowing the underlying software will be free to use, forever, with no vendor lock-in. Instead we are building digital public infrastructure together.

### Join the community

The Document Assembly Line community is hosted and supported by the [LIT Lab](https://suffolklitlab.org/). The community is open to courts, legal aid organizations, and anyone else interested in building online guided interviews with Docassemble and the Document Assembly Line Tools.

You don't have to go it alone! We offer:

* **Weekly community check-ins.** Interview builders meet every Monday at 10am Eastern. We follow a standup-style agenda focused on identifying and removing "blockers." Backend developers who work on the Document Assembly Line tools have a similar meeting on Fridays at 12:30pm Eastern.
* **Community forum.** The LIT Lab hosts a community forum for the Document Assembly Line in Microsoft Teams for general discussions, coding help, server admin, and more.
* **First-Wednesday workshops.** On the first Wednesday of each month at 3pm Eastern we host online workshops where we go in-depth on topics requested by the community. These are informal sessions centered around questions from viewers. Our workshops are also streamed and archived on YouTube.

<details>
  <summary>📺 Explore Workshop Topics</summary>

  Our monthly First Wednesday workshops cover a wide range of topics relevant to building court forms and guided interviews:

  **Technical Topics:**
  - Docassemble fundamentals for beginners
  - Advanced interview logic and branching
  - Working with PDF and DOCX templates
  - Testing strategies and debugging techniques
  - API integrations and external services

  **Design & User Experience:**
  - Creating accessible interviews
  - Mobile-first design principles
  - Writing clear, user-friendly questions
  - Usability testing for legal interviews

  **Project Management:**
  - Planning and scoping interview projects
  - Working with stakeholders and courts
  - Version control and collaboration workflows
  - Launch strategies and user adoption

  All sessions are recorded and archived for the community. Whether you're just getting started or looking to solve specific technical challenges, there's likely a workshop that addresses your needs.

  [📚 Browse workshop archive →](https://suffolklitlab.org/tag/first-wednesday-workshops/)

</details>

To join the community, just [email us](mailto:litlab@suffolk.edu)!

### Partner with the LIT Lab

:::tip
[Get our one-page overview comparing Document Assemble Line partnerships with other online guided interview–building options.](https://suffolklitlab.org/onepagers/partnerships/)
:::

The LIT Lab's work has been and will continue to be supported by grants. Moving forward we will also rely on [partnerships](/#partners) to help support our work. Funding from partners pays for software development and support, training, user research, community building, project management, and technical support as well as direct costs like servers and staff time.

* We offer Docassemble hosting and e-filing for courts that want to build their own interviews or enable e-filing for third-party interviews
* We offer Docassemble hosting for legal aid organizations, with a free option if the court is a funding partner
* We work with granting organizations that want to support the Document Assembly Line

### Support our work

You can support the LIT Lab's work on the Document Assembly Line by [making a donation to the Legal Innovation and Tech Lab (LIT) Fund](https://www.givecampus.com/campaigns/55401/donations/new). Your contributions help us continue developing these free and open-source tools for the legal community.

## Our repositories

All code generated as part of this project is available for free [on GitHub](https://github.com/SuffolkLITLab) under the [MIT license](https://opensource.org/license/mit).

### Docassemble interview-building tools

* [The core AssemblyLine package](https://github.com/SuffolkLITLab/docassemble-AssemblyLine) contains runtime code and shared questions for interviews.
* [ALWeaver](https://github.com/SuffolkLITLab/docassemble-ALWeaver) is a tool for
  rapidly generating interviews from marked-up court form PDF and DOCX templates.
* [ALToolbox](https://github.com/SuffolkLITLab/docassemble-ALToolbox) contains functions and components that might benefit Docassemble developers whether or not they choose not to install the full Document Assembly Line toolbox.
* [ALRecipes](https://github.com/SuffolkLITLab/docassemble-ALRecipes) examples and snippets that use Assembly Line features or demonstrate best practices. Can be included directly in the Docassemble Playground to supplement the list of Playground examples.
* [PovertyScale](https://github.com/SuffolkLITLab/docassemble-PovertyScale) which contains a Python library, Docassemble code, static JSON and a REST server for determining income qualification based on the [United States Federal Poverty Scale](https://web.archive.org/web/20250528044709/http://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines), updated on an annual basis.
* [GithubFeedbackForm](https://github.com/SuffolkLITLab/docassemble-GithubFeedbackForm) helps Docassemble authors collect feedback from users and generate GitHub issues.

### Docassemble server tools

* [ALDashboard](https://github.com/SuffolkLITLab/docassemble-ALDashboard) is a Document Assembly Line–independent tool that makes it easier to maintain a Docassemble server.
* [InterviewStats](https://github.com/SuffolkLITLab/docassemble-InterviewStats/) for gathering usage analytics.

### E-filing

* [EFSP Integration](https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/) is a Python and Docassemble frontend for Suffolk Law School's electronic filing Java server.
* [EFileProxyServer](https://github.com/SuffolkLITLab/EfileProxyServer) is a Java-based REST server that provides a simplified interface to [Tyler EFMs](https://www.tylertech.com/products/odyssey/file-serve), as well as an interface to JeffNet, the home-brew efiling server run by Jefferson Parish, Louisiana.