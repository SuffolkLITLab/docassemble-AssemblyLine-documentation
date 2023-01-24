---
id: expenses
title: |
    ALExpenseList
sidebar_label: |
  ALExpenseList
slug: /alincome/expenses
---

The `ALExpenseList` is a class that lets you ask a user about many different types of expenses in a simple way.

## Guiding Philosophy

Certain financial forms ask for a person's expenses, as a proof of hardship or burden.
In designing these questions, we tried to balance the number of questions a user needs
to answer with detailed enough descriptions of expenses, so the user isn't burdened, but also
doesn't forget to list any significant expenses they would have that could prove financial burden.

What expenses you want to ask about by default will depend on your community's needs.
For example, if your community lives in northern rural areas, they might have alternative
heating needs, like wood or oil, and might not immediately associate those costs with just
standard "utilities". If your community is in a flood plain, you might want to include flood
insurance as an option.

## Expenses Tutorial

Let's make a short interview that just asks for someone's expenses. These some pieces
of code can be used in longer interviews as well.

### Before

Before you start, we'll assume that you:

* have access to a [developer account on a docassemble server](TODO)
* have the [`ALToolbox` package installed on your server](TODO)
* know [what the playground is](TODO) and [how to use it to develop a docassemble interview](TODO)
* know [what "blocks" are](TODO) in docassemble

### Writing the interview

First, include the `al_income.yml` YAML file in your interview. This will
let you use the al_income questions and python code.

```yml
include:
  - docassemble.ALToolbox:al_income.yml
```

Then, create an `ALExpenseList` using a `objects` block.

```yml
objects:
  - expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")
```

:::tip Other objects
You can also associate these expenses with [another object](TODO), say the main user of a form, like `users[0]`.

```yml
objects:
  - users[0].expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")
```

:::

Then to trigger gathering expenses, add the following line into your [interview order code block](TODO).

```yml
mandatory: True
code: |
  expenses.gathered
```

This will ask the user a few questions:

* first will be what types of expenses the user has. You can customize the options shown to the user by including
  a definition of an `expense_terms` variable in your interview. Since the default list is pretty long, we'll make it
  shorter in this example:

  ```yml
  # "!!omap" makes these terms ordered: 
  # their order here will be their same order when shown to users.
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

  Here is what this question screen will look like:

  ![A screenshot of a webpage. At the top, it asks "What kind of expenses do you have?" There is a checkbox next to each option, like "rent" and "food". There is a continue button at the bottom](../assets/alincome_expenses_checkboxes.jpg)

* for each expense that the user confirmed they have, there will be one question screen,
  asking for how often they pay for that expense, and how much they pay.

  If you want to change the options for how often they pay the amount, you can define a `times_per_year_list`,
  similarly to the `expense_terms` above. By default, the list contains "weekly", "once every two weeks", "twice per month",
  "monthly", "once every 3 months", "once every 6 months", and "yearly". For this tutorial, let's make that list a little shorter.
  Add the below block to your code:

  ```yml
  variable name: times_per_year_list
  data:
    - [52, "Weekly"]
    - [26, "Once every two weeks"]
    - [24, "Twice per month"]
    - [12, "Monthly"]
    - [1, "Yearly"]
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

  ${ expenses.table }

  ${ expenses.add_action() }
field: review_expenses_screen
```

:::tip Review screens
You can also add the expense list to a [review screen](TODO) with the below code:

```yml
review:
  - Edit: expenses.revisit
    button: |
      **Expenses**:

      % for item in expenses:
      * ${ item.display_name }: ${ currency(item.value) }
      % endfor
```

:::

That's all you need to gather the information, but the ALExpenseList class also
gives you many ways to display the info. This is the same way of displaying the `ALIncomeList` class, so if you've used `ALIncomeList` before feel free to [skip past this section](TODO).

Let's add one last screen to display our information. We'll
describe what each line of code is doing on the screen.

```yml
event: final_screen
question: Last screen!
subquestion: |
  All of the types of expenses, which we call "sources": ${ expenses.sources() }

  Sum of all of the expenses (by default, this is annually): ${ expenses.total() }

  Sum of all of the expenses over a month: ${ expenses.total(times_per_year=12) }

  Value of just one expense: ${ expenses.total(source="rent") }

  Sum of just some expenses: ${ expenses.total(source=["rent", "food", "mortgage"]) }

  Sum of all expenses except a specific source: ${ expenses.total(exclude_source="food") }
```

With that last screen, we can change our mandatory code block above to now be:

```yml
mandatory: True
code: |
  expenses.gathered
  review_expenses
  final_screen
```

And run through the interview!

You'll likely want to display this information in a PDF or word template as well. See [this
page for more information about using document templates](TODO).
