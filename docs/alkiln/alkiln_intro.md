---
id: alkiln_intro
title: ALKiln automated testing
sidebar_label: Intro
slug: /alkiln
---

<!-- Move to /docs
## Refresher

Some quick refreshers for those who need it.

1. You write and edit `.feature` test files in your Sources folder.
1. There are some fields ALKiln cannot yet handle, including `object`-type fields, like `object_multiselect`.
1. By default, each Step or field may only take 30 seconds. You can change that with the "the maximum seconds" Step listed in the Steps.
1. If you're using GitHub, tests are run when anyone commits to GitHub.
1. Tests can download docx files, but humans have to review them to see if they've come out right.
1. You will be able to see pictures and the HTML of pages that errored. In GitHub, you can download them from the zip file in [the Action's artifact section](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).
1. ALKiln also creates test reports. In GitHub, you can download them in the same place.
 -->


The ALKiln testing framework runs tests on your docassemble interview to make sure your interviews are running correctly. It is a robot that pretends to be a user as it fills in fields and clicks through your interview. Among other things, it can fill in fields, upload files, sign in, and compare PDFs.

**Any docassemble package can use ALKiln**[^1]. It is called ALKiln (Assembly Line Kiln) because it was created in collaboration with the AssemblyLine project and has special features created especially for projects using AssemblyLine.

Give us feedback and propose ideas by making issues at https://github.com/SuffolkLITLab/ALKiln/issues.

🚧 ALKiln is under very active development.


## Quick start

- Recommended first-time setup (alkiln/setup#recommended) (to link)
- Your first test (alkiln/setup#first-test) (to link)
- Reminders of the basics (alkiln/FAQ#reminders) (to link)


## Table of contents

- Setup - install ALKiln tests for your repository or organization.<!-- (setup and first test, maybe advanced pros and cons of setup) -->
- Writing tests. Test files, Steps, Gherkin syntax, and most other things.
- Docs for older versions of ALKiln. This contains instructions for deprecated Steps and their errors.
- FAQs, including quick refreshers.
- Troubleshooting for errors and warnings.<!-- (errors, maybe FAQ) -->
- Security.


## Why test?

You don't always need automated tests. Tests require maintanance along with your code and may not be worth your time for some projects or at some stages in your project.

That said, the more complex your project gets the more useful automated tests can be. When you start creating a project, you test it manually. You open the interview and run it yourself, clicking through every path your user might take. When an interview needs to get more complex you may no longer be able to do that manually each time you edit your code. Automated tests can do that for you.

Tests can protect your users from bugs that can:

- Lead them down the wrong path
- Give them the wrong output in their generated file
- Stop them completely with an error

When you make changes to your code, automated tests can make sure that you haven't broken code that was already working.

You can write your first test <!-- add link --> right away if you want. Write more tests when more of your code is stable. That means that your variables are staying the same or that the variables for a section of your interview are staying the same.

When you add a new field for the user or change the name of a variable that the user sets, you will need to update those tests.

<!-- There are many different kinds of tests. You test all the time when you run your inter -->

<!-- Other tools that can help with problems managing running interviews:
- When there's an error, give your users their data so they haven't wasted their time
- Get alerts when your server goes down
- Check that specific interviews are still running
 -->

The first part of this Docacon 2023 demo talks about why testing and when to test:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TcLFA9a1bHs" title="Assembly Line Kiln testing framework at Docacon 2023 - Why test?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>


## Built with...

Kiln uses cucumberjs, puppeteerjs, cheerio, and runs the assertions using mocha and chai libraries.

Even though this is built using [cucumberjs](https://cucumber.io/), this framework has a different, less lofty, purpose. cucumber focuses on BDD (behavior driven development). This framework mostly deals with regression testing and other conveniences.


## Repositories

- [ALKilnInThePlayground](https://github.com/SuffolkLITLab/docassemble-ALKilnInThePlayground) is the package that will let you run tests directly on your server
- [ALKiln's own repository](https://github.com/SuffolkLITLab/ALKiln)
- [GitHub setup interview](https://github.com/SuffolkLITLab/docassemble-ALKilnSetup)


## Feedback

<!-- Keep it simple. Just 2 repos -->

Give us feedback and propose ideas by making issues at https://github.com/SuffolkLITLab/ALKiln/issues.

Improve this documentation on GitHub (link will be added).

<!--
If we want people to file different issues for different repos (which I think is too complex):
- ALKiln in general and GitHub-based tests/workflows
- ALKiln in the Playground
- Setup
- Edit ALKiln documentation
 -->

---

[^1] There are some interview features ALKiln cannot yet handle. For example, `object_multiselect` fields. ALKiln also may not understand complex `CustomDatatype` fields if you make them. If you run into problems, file a clear and descriptive issue on our repository and we will see if we can help. <!-- TODO: Add links to custom datatypes -->
