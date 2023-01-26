---
id: itemizedjobs
title: |
  Detailed Jobs: ALItemizedJob and ALItemizedJobList
sidebar_label: |
  Detailed Jobs
slug: /alincome/itemizedjobs
---

Sometimes, you'll need detailed information about a person's
income at the same job, including how much income comes from tips, or
how much is deducted from their paycheck for different reasons. `ALItemizedJob` is custom built for this purpose.

## Guiding Philosophy

## ALItemizedJob

## ALItemizedJobList Tutorial

### Before

Before you start, we'll assume that you

* have access to a [developer account on a docassemble server](https://suffolklitlab.org/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1#before-you-get-started)
* have the [`ALToolbox` package installed on your server](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#run-the-installation-script)
* know [what the playground is](https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#introduction-to-the-docassemble-playground) and [how to use it to develop a docassemble interview](https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#hello-world)
* know [what "blocks" are](https://suffolklitlab.org/legal-tech-class/docs/yaml#documents) in docassemble
* have gone through [the `ALJob` tutorial]() and decided you need to handle more complicated information

### Writing the interview

First, include the `al_income.yml` YAML file in your interview. This will let you use the al_income questions and python code.

```yml
include:
  - docassemble.ALToolbox:al_income.yml
```

Then, create an `ALItemizedJobList` using a `objects` block.

```yml
objects:
  - expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")
```