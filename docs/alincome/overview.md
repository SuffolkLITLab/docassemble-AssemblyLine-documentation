---
id: overview
title: 'al_income: Python classes to gather financial information'
sidebar_label: 'al_income 02'
slug: /alincome/overview
---

## Overview

Gathering detailed financial information about a person can be complicated. They could have
multiple jobs, each with a different pay period, and you might need to report their pay
from all of those jobs monthly or annually. You might also need to ask about expenses,
debts, and then allow users to review and add or change that information.

The ALIncome module and associated YAML files were made to handle all of these complicated
cases, so you can focus on the details specific to your clients.

If you want to jump right into the demo interview, you can visit out the live demo at [Suffolk's test server](https://apps-test.suffolklitlab.org/start/ALToolbox/al_income_demo).
You can also install the [ALToolbox package](https://github.com/SuffolkLITLab/docassemble-ALToolbox)
on your server, and run the [al_income_demo interview](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/data/questions/al_income_demo.yml), by going to "https://yourserverurl.com/start/ALToolbox/al_income_demo".

Once you have a broad idea of what each class is about, you can choose from one of the more in-depth tutorials:

* [Expenses](expenses.md)
* [Jobs](jobs.md)
* [Itemized Jobs](itemizedjobs.md)

:::warning Work in progress
The following classes don't yet have tutorials that you can follow, but you can follow
how they are used in the [al_income_demo interview](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blobl/main/docassemble/ALToolbox/data/questions/al_income_demo.yml), and by checking out their source code below.

:::

* [ALSimpleValue](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L712)
* [ALIncome](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L152)
* [ALAsset](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L558)
* [ALVehicle](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L672)
