---
id: getting_started
title: Getting started
sidebar_label: Getting started
slug: /getting_started
---

<!-- TODO: Add link to someplace to give feedback or some kind of forum. -->

How do you develop and deploy court forms effectively? This is what has worked for us. Adjust it when you need to. We'd love to hear about the changes you make for your organization!

Much of the documentation on this site is meant as reference material to support a developer as they work through the [step-by-step process](https://trello.com/c/uRD0ZIOc/1-form-name-type-of-law) this project has found useful.

## Summary
1. Set up the system for your organization
   1. Create a docassemble server
   1. Configure the server
   1. Add developers to the server
   1. Enable GitHub
   1. Add the AssemblyLine package to your server
   1. [Copy the Trello checklist boards](#checklists_and_trello)
1. Work on a specific form
   1. Copy the template card in your organization's Trello board
   1. [Move the card through the Trello lists](#buffer_lists), completing the checklists as you go
   1. [Identify your MVP](#stick_to_an_mvp)
   1. Prepare your document
   1. Generate the code you will start with
   1. Edit the interview
   1. Get reviews on the interview
   1. Submit it for provisional approval (provisional on testing)
   1. Write tests for and test the interview
   1. Deploy the interview

Below are some general techniques and knowledge we have found useful for starting the development of a form.

## Stick to an MVP
**MVP:** Minimum viable product - first make something that works. 

Henrik Kniberg has [created a useful skateboard analogy for an MVP](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp).
![Minimum viable product](./assets/mvp.png)
-- Henrik Kniberg

An MVP will be different for different projects. The [legal form maturity model](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model/#quick-summary) can help you identify your MVP. Once you've decided what this form's MVP is, avoid adding anything unless absolutely necessary.

## Checklists and Trello
Checklists can be an amaizing tool. They are one of the backbones of our process. Copy our Trello template boards and adjust them to your needs:

1. [AssemblyLine - Pre-processing Template Board](https://trello.com/b/Z2Svx3oh/1-assemblyline-pre-processing-template-board#)
1. [AssemblyLine - Development Template Board](https://trello.com/b/ArfGFbz4/2-assemblyline-development-template-board)
1. [AssemblyLine - Testing Template Board](https://trello.com/b/nT7yy2Wl/3-assemblyline-testing-template-board)

All the checklists are on the first card. They help someone new to the process slot in easily. They walk a developer through it step by step, providing resources along the way.

:::note Rationale
There's a lot on that card. Previously, we started with board 1's checklist and had developers copy new checklists to their card as they moved to board 2 and 3. It became logistical obstacle.
:::

### Buffer lists
Without buffer lists, it's hard to see where a project is at. Is it done with this column and ready for the next one? Is it being worked on actively? Who's working on it?

A card will sit in a ‘buffer’ list until someone can work on it. When they are ready, they will add themselves to the card and move it into the next list.

:::note
They are ‘pulling’ the work into their stream. This is called a 'pull-based' system.
::: 

1. Identify a card in a buffer list
1. Move the card out of the buffer list into the list immediately to the right (a ‘work in progress’ list)
1. Add yourself as a member of the card
1. Comment on the card saying that you will be completing a specific checklist
1. Complete the appropriate checklist
1. Remove yourself as a member of that card
1. Move the card into the next list on the right which should be the next buffer list. It will wait there until the next person is available to pull it into the next workstream.
