---
id: jobs
title: |
    Jobs: ALJob and ALJobList
sidebar_label: |
  Jobs
slug: /alincome/jobs
---

Asking people about their jobs is a common task when getting financial information. The `ALJob` class tries to be complete but simple to use and answer about, doing the
math for the user.

## ALJob

`ALJob` is a class that holds information about a specific job that a person can have. It has a few attributes:

## ALJobList tutorial

Let's make a short interview that asks about someone's jobs, lets
them review their answers, and shows them summaries about their
income from those jobs.

### Before

Before you start, we'll assume that you:

* have access to a [developer account on a docassemble server](https://suffolklitlab.org/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1#before-you-get-started)
* have the [`ALToolbox` package installed on your server](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#run-the-installation-script)
* know [what the playground is](https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#introduction-to-the-docassemble-playground) and [how to use it to develop a docassemble interview](https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#hello-world)
* know [what "blocks" are](https://suffolklitlab.org/legal-tech-class/docs/yaml#documents) in docassemble

### Writing the interview

First, include the `al_income.yml` YAML file in your interview. This will
let you use the al_income questions and python code.

```yml
include:
  - docassemble.ALToolbox:al_income.yml
```

Then, create an `ALJobList` using a `objects` block.

