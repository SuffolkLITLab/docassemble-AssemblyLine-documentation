---
id: intro
title: The Document Assembly Line
sidebar_label: About
slug: /
---

<!-- original: https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/README.md -->

The Document Assembly Line project has produced a set of open-source tools and
processes to help groups quickly and effectively create mobile-friendly online
court forms and _pro se_ materials. The documentation provided here aims to help
groups adapt this work and create local versions of the assembly line.

Though we have focused on producing Massachusetts content at
https://courtformsonline.org, we have built our tools with replicability in
mind. Our novel code is released under an [MIT
License](https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/LICENSE),
and we have intentionally built on the open source
[docassemble](https://docassemble.org/) platform.

This documentation is under construction, but we are currently running a
[Document Assembly Line
bootcamp](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/bootcamp)
to help those interested in replicating this work.

The video below provides an overview of the project (0-10 min) and a detailed
look at one of the forms (12-30 min). _Note: This video is a lecture from the
course [Coding the
Law](https://www.codingthelaw.org/Fall_2020/level/3/#intro_vid). So please
disregard comments about "prior classes" and pending homework assignments at the
end._

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AECHOvmaUv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Get involved

We operate out of [Suffolk Law's Legal Innovation and Technology
Lab](https://suffolklitlab.org/) in cooperation with the Massachusetts [Access
to Justice Commission](https://massa2j.org/) and are staffed almost entirely by
volunteers and students. We have optional standup meetings twice a week and
online trainings every Tuesday, all of which are recorded. See [prior
meetings](https://www.youtube.com/playlist?list=PLy6i9GFGw5GzcPqGyZQ06lPp35v6S5-YF).
Most of the group's work takes place on [MS
Teams](https://teams.microsoft.com/l/team/19%3a8b0fa1d62a014c7d9c27b69939e38644%40thread.tacv2/conversations?groupId=eaa9bd9d-cf39-4686-8f30-e55aa9d98c75&tenantId=78733fa9-540e-4eb8-bf29-73c4eeb63412).
If you are interested in joining the team, email "mass access at suffolk dot
edu," and we will send you an invite.

You can also email that address if you're interested in joining our [Document
Assembly Line
bootcamp](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/bootcamp).
The Bootcamp should give you a good feel for what the work entails and is where
we suggest you start to learn more.   

## Our Repositories

All code generated as part of this project is available for free under
the MIT license.

- [The ALWeaver](https://github.com/SuffolkLITLab/docassemble-ALWeaver) for
  rapidly generating interactive court forms from marked-up templates.
- [The AssemblyLine docassemble
  package](https://github.com/SuffolkLITLab/docassemble-AssemblyLine) with
  runtime code and shared questions for interactive court forms.
    - [ALToolbox](https://github.com/SuffolkLITLab/docassemble-ALToolbox)
      contains functions and components that might benefit Docassemble
      developers who choose not to install the full Assembly Line framework.
    - [GithubFeedbackForm](https://github.com/SuffolkLITLab/docassemble-GithubFeedbackForm)
      helps Docassemble authors collect feedback from endusers and generate GitHub issues.
    - [ALRecipes](https://github.com/SuffolkLITLab/docassemble-ALRecipes)
      examples and snippets that use Assembly Line features or demonstrate best
      practices. Can be included directly in the Docassemble Playground to supplement the list
      of Playground examples.
    - [InterviewStats](https://github.com/SuffolkLITLab/docassemble-InterviewStats/) for
      gathering usage analytics.
- [PovertyScale](https://github.com/SuffolkLITLab/docassemble-PovertyScale) which contains
  a Python library, Docassemble code, static JSON and a REST server for determining income
  qualification based on the [United States Federal Poverty
  Scale](https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines), updated
  on an annual basis.
- [ALMassachusetts](https://github.com/SuffolkLITLab/docassemble-ALMassachusetts) with
  Massachusetts-specific questions and links to Massachusetts courts.
- [MACourts](https://github.com/GBLS/docassemble-MACourts) is maintained by Greater Boston
  Legal Services but has been expanded and improved by the Assembly Line Project. It contains
  a list of courts in Massachusetts and rules to determine jurisdiction and venue based on
  address.
- [MassAccess](https://github.com/SuffolkLITLab/docassemble-MassAccess) with branding
  specific to the [CourtFormsOnline.org](https://courtformsonline.org) website.
- [ALDashboard](https://github.com/SuffolkLITLab/docassemble-ALDashboard) an Assembly Line-
  independent tool that makes it easier to maintain a Docassemble server.
- [EFSP Integration](https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/) which
  is a Python and Docassemble frontend for Suffolk Law School's electronic filing Java server.
- [EFileProxyServer](https://github.com/SuffolkLITLab/EfileProxyServer) which is a Java-based
  REST server which provides a simplified interface to [Tyler EFMs](https://www.tylertech.com/products/odyssey/file-serve),
  as well as an interface to JeffNet, the home-brew efiling server run by Jefferson Parish, Louisiana. Suffolk LIT Lab
  is currently in the process of being a certified Tyler E-Filing Service Provider (EFSP).

We have also produced draft or final [automations of almost 100 unique Massachusetts court forms](https://github.com/orgs/SuffolkLITLab/repositories)
during the lifetime of our project.

