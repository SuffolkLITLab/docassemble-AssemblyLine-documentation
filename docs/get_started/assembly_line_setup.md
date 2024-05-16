---
id: assembly_line_setup
title: |
  Set up your Document Assembly Line
sidebar_label: |
  Set up your Document Assembly Line
slug: /get_started/assembly_line_setup
---

<!-- TODO: Add link to someplace to give feedback or some kind of forum. -->

The guidance below is for organizations that want to set up their **own** copy of the Assembly Line, not for individual automators.

How do you develop and deploy court forms effectively? This is what has worked
for us. Adjust it when you need to. We'd love to hear about the changes you make
for your organization!

## Setting up your organization

This happens once in the lifetime of an organization. These steps will be filled out as we develop this documentation further. Talk to us to learn more.

1. [Create a docassemble server](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/setup-server)
1. [Add the AssemblyLine package to your server](installation.md)
1. [Copy](https://help.trello.com/article/802-copying-cards-lists-or-boards) the Trello [checklist boards](#trello-boards)

You should also consider:

1. [enabling GitHub Playground integration](https://docassemble.org/docs/config.html#github)
2. inviting each developer who will use your server to [create their own accounts](https://docassemble.org/docs/users.html#add)

Below are some general techniques and knowledge we have found useful for starting the development of a form.

## Developing a form

The [Trello checklists](#trello-boards) are really the source of truth for developing a form. Much of the documentation on this site is meant mostly as reference material to support a developer as they work through the [step-by-step process](https://trello.com/c/uRD0ZIOc/1-form-name-type-of-law) this project has found useful.

The broad strokes of the details you can see in the Trello checklists:

1. Copy the template card in your organization's Trello board
1. [Move the card through the Trello lists/columns](#trello-boards), completing the checklists as you go
1. [Identify your MVP](#stick-to-an-mvp)
1. [Generate the code you will build off of](weaver_overview.md)
1. Edit the code of the interview
1. Get reviews on the interview
1. Submit the interview for approval, provisional on passing tests
1. Write tests for and test the interview
1. Deploy the interview

## Stick to an MVP
**MVP:** Minimum viable product - first make something that works. 

Henrik Kniberg has [created a useful skateboard analogy for an MVP](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp).
![Minimum viable product](../assets/mvp.png)
-- Henrik Kniberg

An MVP will be different for different projects. The [legal form maturity model](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model/#quick-summary) can help you identify your MVP. Once you've decided what this form's MVP is, avoid adding anything unless absolutely necessary.

## Trello boards

We have created three boards in Trello that help track the status of a form as it is being developed. Each of our forms has one card that is a copy of [the one template card](https://trello.com/c/uRD0ZIOc/1-form-name-type-of-law) and contains all the checklists. Those checklists walk a developer through the process step by step, providing resources along the way. They also keep track of what still needs to be done.

You can [copy](https://help.trello.com/article/802-copying-cards-lists-or-boards) our Trello boards and adjust them to your needs:

1. [AssemblyLine - Pre-processing Template Board](https://trello.com/b/Z2Svx3oh/1-assemblyline-pre-processing-template-board#)
1. [AssemblyLine - Development Template Board](https://trello.com/b/ArfGFbz4/2-assemblyline-development-template-board)
1. [AssemblyLine - Testing Template Board](https://trello.com/b/nT7yy2Wl/3-assemblyline-testing-template-board)

Each column, or list, on a board is either associated with a checklist or is a [buffer list](#buffer-lists). A developer will create a card for their form and move it through the columns, or 'lists', of the trello board. If one developer has to leave the development of the form, another developer can pick up the card wherever it is on the boards.

We recommend you keep all the checklists on that first card. Having developers add additional lists manually later turned out to be a logistical obstacle.

Note: Trello is not required to implement this kind of system. It just happens to be the tool we used.

<!-- TODO: Add instructions on how to hide finished checklist items. -->

### Buffer lists
You can see that every other column (list) is a 'buffer' list. Without buffer lists, it is hard to see what's going on with a project in the lists. Is the form done with this list and ready for the next one? Did it just arrive in this list? Is it being worked on actively by someone or does it need someone new to take hold of it?

Buffer lists clarify this, though. If a card is not in a buffer list, the work of that list is not complete. When a card is in a buffer list, the previous list's tasks were finished and the form is waiting for someone to pick up the work.

As a developer, you would:

1. Pick a card in a buffer list
1. Move the card out of the buffer list into the list immediately to the right (a ‘work in progress’ list)
1. Add yourself as a member of the card if needed
1. Complete the appropriate checklist
1. If you have to leave the development of that form, remove yourself from the card
1. Move the card into the next buffer list. It will sit there till the next person picks it up.

If a developer has to leave while in the middle of a task list, they can move the card to the previous buffer list to show that someone new needs to take over the work.
