---
id: alincome
title: |
    ALIncome: Python Classes to gather financial information
sidebar_label: |
  ALIncome: Python Classes to gather financial information
slug: /framework/alincome
---

## Overview

Gathering detailed financial information about a person can be difficult. They could have
multiple jobs, each with a different pay period, and you might need to report their pay
from all of those jobs monthly or annually. You might also need to ask about expenses,
debts, and then allow users to review and add or change that information.

The ALIncome module and associated YAML files were made to handle all of these complicated
cases, so you can focus on the details specific to your clients.

## Expenses: An example

First, include the al_income YAML file in your interview. This will
let you use the al_income questions and python code.

```yml
include:
  - docassemble.ALToolbox:al_income.yml
```

Then, create an `ALExpenseList` using a `objects` block.

```yml
objects:
  - users[i].expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")
```

Then to trigger gathering expenses, add the following line into your code block.

```yml
code: |
  users[0].expenses.gathered
```

This will ask the user a few questions:

* first will be what types of expenses the user has. You can customize the options shown to the user by including
  a definition of an `expense_terms` variable in your interview. Since the default list is pretty long, we'll make it
  shorter in this example:

```yml
variable name: expense_terms
data: !!omap
  - rent: "Rent"
  - mortgage: "Mortgage"
  - food: "Food"
  - utilities: "Utilities"
  - clothing: "Clothing"
  - credit cards: "Credit Card Payments"
  - property tax: "Property Tax (State and Local)"
  - other taxes: "Other taxes and fees related to your home"
  - medical: "Medical costs (including insurance)"
  - transportation: "Transportation costs"
  - other: "Other"
```

Once you have the information, you can show let the user review the expenses they've entered
with the following question block:

```yml
id: expenses review
question: |
  Review your expenses
subquestion: |
  Here is what you've told us about your monthly expenses. You can add more or continue
  to the next question.

  ${ users[0].expenses.table }

  ${ users[0].expenses.add_action() }
field: review_expenses_screen
```

They can also review their expenses on a review screen with the below code:

```yml
review:
  - Edit: users[0].expenses.revisit
    button: |
      **Expenses**:

      % for item in users[0].expenses:
      * ${ item.display_name }: ${ currency(item.value) }
      % endfor
```

That's all you need to gather the information, but the ALExpenseList class also
gives you many ways to display this information in a PDF or word template. In this
example, we'll use a PDF document.

TODO:
* total
* exclude
* other list things