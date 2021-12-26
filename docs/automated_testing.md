---
id: automated_testing
title: Automated testing
sidebar_label: Automated testing
slug: /automated_integrated_testing
---

<!-- original: https://docs.google.com/document/d/1hkNr78mrU3Ha98tPUL4OKWi3eNnt-1Sba7L8470u06g/edit# -->

🚧 Reference for writing automated integrated tests with the Assembly Line testing framework.

## Intro

The Kiln (Assembly Line Kiln) framework runs tests on your docassemble interview through GitHub, making sure your interviews are running the way you want.

**Kiln works with any docassemble interview**, though it was developed through the Document Assembly Line project.

Docacon 2021, 10 minute intro presentation:

<!-- &amp;end=4115 -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YB-e-MGtLgI?&amp;start=3482" title="10 minute intro of Assembly Line Kiln testing framework at Docacon 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


1. Set up your repository or organization for testing using https://apps-dev.suffolklitlab.org/start/test-setup. Follow the instructions there to add new code to your repository.
1. In Docassemble, make a new Project and pull in the updated code.
1. Write tests in your Sources folder. The setup process will give you an example test to start you off.

Whenever you push to GitHub, GitHub will run the tests automatically with a bot that goes to whatever interviews you named in the tests and fills in the fields. You can see the tests running in your [GitHub Actions tab](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity).

At the end, you can see a report right in the GitHub Action or [download the report artifact to your computer](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).

<!-- ## Setup

For now, talk to us about it.

- Have admin permissions on the repo
- Use the setup interview (https://apps-dev.suffolklitlab.org/start/test-setup/)
- Add this element to the page somewhere: <div data-variable="${ encode_name(str( user_info().variable )) }" id="trigger" aria-hidden="true" style="display: none;"></div>

If you run the tests locally, add these environment variables to your `.env` file:

 -` PLAYGROUND_EMAIL`: the docassemble server email for the account that is running the tests.
- `PLAYGROUND_PASSWORD`: the docassemble server password for the account that is running the tests.
- `PLAYGROUND_ID`: the id that shows up in interviews when the testing account runs the tests from the server playground.
-->

## Security

Using a third-party library or package is always a risk. That said, we're working on some measures to help secure our code and to give you access to more secure ways to do this stuff. You can follow this conversation in GitHub at https://github.com/SuffolkLITLab/ALKiln/issues/425.

### Disable the tests

If you become worried about the tests, there are different ways you can stop the tests from running.

In order to run, the test setup interview added a "workflow" file to your repository. GitHub sometimes calls that an "action". That's what triggers the tests. You can manage that workflow, and your actions in general, in GitHub.

#### Disabling tests in one repository
GitHub lets you disable workflow files like these. See their instructions at https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow.

You can also delete the file from your repository completely. If you go to the front page of your repository, the file is in the `workflows` folder of the `.github` folder. It's called `run_form_tests.yml`. GitHub's instructions about how to delete a file are at https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository.

Another option is to disable or limiting all tests, all actions, in your repository. GitHub's documentation for managing repository actions is at https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository.

#### Disabling tests for the whole organization

You can disable these tests, or any actions, for a whole organization. GitHub's documentation for managing organization actions is at https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization.

## Quick Reference

1. You write and edit `.feature` test files in your Sources folder.
1. By default, each Step or field may only take 2 minutes. You can change that with the "the maximum seconds" Step listed in the Steps.
1. Tests are run in GitHub when you commit.
1. Tests can download PDF files, but humans have to review them to see if they've come out right.
1. Tests that error will create screenshots from when the error happened.
1. Tests create report files you can download. They're in [the Action's artifact section](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).

For interacting with things on GitHub, look for how to use the [Actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity) tab.

Give us feedback and ideas by making issues at https://github.com/plocket/docassemble-cucumber/issues.

### Example

The tests use the [gherkin language and syntax](https://cucumber.io/docs/gherkin/reference/). Here's a complex example for quick reference of some of our features:

```
@children
Feature: I have children

  @fast @child_benefits
  Scenario: child has benefits
    Given I start the interview at "some_file_name.yml"
    And I get to the question id "benefits" with this data:
      | var | value | trigger |
      | x[i].name.first | Cashmere | children[0].name.first |
      | x[i].name.last | Davis | children[0].name.first |
      | x[i].name.first | Casey | children[1].name.first |
      | x[i].name.last | Davis | children[1].name.first |
      | x.there_are_any | True | children.there_are_any |
      | x.target_number | 2 | children.there_is_another |
    When I set the var "benefits['SSI']" to "True"
    And I tap to continue
    Then the question id should be "download"
    And I download "some_motion.pdf"

```

## First test

You can write a really simple test right away that just makes sure your YAML file runs using the name of the YAML file. Write a `Scenario` for each file you want to test.

```
Feature: Interviews load

  Scenario: The 209A loads
    Given I start the interview at "ma_209a_package.yml"

  Scenario: The Plaintiff's Motion to Modify loads
    Given I start the interview at "plaintiffs_motion_to_modify_209a.yml"
```

More complex tests might wait till your code is pretty much how you want it. Every time you change your variable names, you may have to update the tests.

## Story tables

**Story table** Steps, in our opinion, are the most effective and flexible way to set the values of fields in ALKiln in most cases. Using them, it doesn't matter what order you use to list your fields or what order your pages come in. It also doesn't matter if you include extra fields accidentally. They are a snapshot of the user who's filling out the form for that test.

You can write a story table that goes all the way through your interview, or a story table that only goes part way.

Very basically, you tell the story table Step what `question` you want to get to and the variables and values it will need to get there. Whenever the test gets to a page, it checks your story table for any variables that match a variable on the page. When it finds a match, it sets the value of the field. When it's done with a page, it continues to the next page until it reaches the terminal `question`.

You can have multiple tables in one Scenario and you can put other steps between story table Steps.

:::warning
A story table Step **must not** be the first step in your Scenario. The [`interview` Step](#starting-steps) **must** come before it.
:::

### Step description

The Step that triggers a story table is

```
    And I get to the question id "some id!" with this data:
```

It needs to know the `id` of the page it should get to. You can find the `id` in the `question` block in the YAML, or using the Sources tab in a live interview. The Sources tab is in the header and looks like angle brackets around a forward slash: `</>`.


### Rows

Indented under the description, put the header row of the table:

```
      | var | value | trigger |
```

* `var` lists the variable the field sets exactly as it appears in the code of the question.
* `value` is the value you want the test to fill in.
* `trigger` lists the variable that triggers that variable's page. We describe that more in a section below.

Under that, add a blank row for a field that you want the test to interact with during the interview:

```
      |  |  |  |
```

### var

In the `var` column, write the name of the variable that a field sets **exactly as it appears in the `question` block**. Most times you can see that name in the YAML `question` block. If `code:` is used to create the field's variable name, you may have to talk to the developers who wrote that code to find out the name or names of the variable or variables it generates.

Examples:

```
court_date
users[0].name.first
users[i].children[j].benefits['SSI']
x.favorite_color
```

<!-- The Document Assembly Line library has built in questions that use such code.
- `users[i].name_fields()` generates all the name fields with the right index number (NOT 'i'). E.g. `users[0].name.first`, `users[0].name.suffix`, `users[1].name.first`, `users[1].name.suffix`
- `users[i].address_fields()` generates all the address fields with the right index number (NOT 'i'). E.g. `users[0].address.address`, `users[1].address.address` -->

### value

In the `value` column, write what you want the field to be set to. For checkboxes, `True` means 'checked' and `False` means 'unchecked'.

One special value you can include is `today`. That will insert the date on which the test is being run. You can also subtract from, or add days to, `today`. Examples:

```
      | signature_date | today |  |
      | court_date | today + 20 |  |
      | minors_birth_date | today - 3650 |  |
```

The last example makes sure that the date is 10 years in the past, ensuring that a minor always stays a minor for that test.

### trigger

`trigger` is an optional value in most cases. It is mandatory for rows that list [index variables](https://docassemble.org/docs/fields.html#index%20variables), like `i`, `j`, or `k`, or [generic objects](https://docassemble.org/docs/fields.html#generic) (`x`). Your interview **must always** include [some special HTML](#a-missing-trigger-variable) to let the trigger variable work properly. As you can see, you will get a warning in the report if you leave that out.

In the `trigger` column, write the name of the variable that triggers the page on which the field appears.

For the below, the `trigger` is `users[0].hair.how_much`.

```
---
id: interview order
mandatory: True
code: |
  users[0].hair.how_much
---
id: hair
question: |
  Tell us about your hair
fields:
  - How much hair do you have?: users[i].hair.how_much
  - What color is your hair?: users[i].hair.color
```

Your story table rows to set those values would look like this:

```
      | var | value | trigger |
      | users[i].hair.how_much | Enough | users[0].hair.how_much |
      | users[i].hair.color | Sea green | users[0].hair.how_much |
```

Even though the `var` columns were different, both `trigger` columns listed `users[0].hair.how_much`. That's because when the docassemble asks for `users[0].hair.how_much`, both fields are on that page and both variables have to be set.

There are some rare cases where no `trigger` exists. For example, `question` blocks with the `mandatory` specifier:

```
mandatory: True
question: |
  Do you like mandatory questions?
yesno: likes_mandatory_questions
```

In those cases, leave the `trigger` column empty.

### Story table examples

_Simple field types with their values._

The 'yes' choice of [yesno buttons](https://docassemble.org/docs/fields.html#yesno), [yesnoradio](https://docassemble.org/docs/fields.html#fields%20yesno) fields, etc.
```
      | has_hair | True | has_hair |
```

The 'maybe' choice in [yesnomaybe buttons](https://docassemble.org/docs/fields.html#yesnomaybe) and [datatype: yesnomaybe](https://docassemble.org/docs/fields.html#fields%20yesno) fields.
```
      | has_hair | None | has_hair |
```

Checkboxes with multiple choices. The value 'True' means to check the checkbox and 'False' means to uncheck it.
```
      | benefits['SSI'] | True | benefits |
```

Radio or dropdown choices.
```
      | favorite_color | green | favorite_color |
```

Text field or textarea. Even if the answer has multiple lines, you can only use one line. When a new line is supposed to appear, instead use `\n`. See below:
```
      | favorite_color | Blue.\nNo, green!\nAaah... | favorite_color |
```

A generic object with an index variable.
```
      | x[i].name.first | Umi | users[1].name.first |
```

### `.there_is_another` loop

The `.there_is_another` loop in a story table is more complicated than you might expect.

The story table must handle setting the `.there_is_another` attribute automatically. You, as the developer, must pretend to use the `.target_number` attribute instead, whether you actually use it or not.

In your `var` column, replace any `.there_is_another` rows for a particular variable with with one `.target_number` row. In the `value` column, put the number of items of the appropriate type.

The `trigger` column should have the name of the page's trigger variable, as usual. Example:

```
      | x[i].name.first | Jose | users[0].name.first |
      | x[i].name.first | Sam | users[1].name.first |
      | x[i].name.first | Umi | users[2].name.first |
      | x.target_number | 3 | users.there_is_another |
```

### Story table signature

The `value` for a row setting a signature doesn't matter. All signatures will be a dot.
```
      | user.signature |  | user.signature |
```

### Other story table notes

Don't worry about accidentally including variables that won't show up during the test. Extra rows will be ignored.


## Steps

[Steps](https://cucumber.io/docs/gherkin/reference/#steps) must be written one after the other in the order they should happen. It's a bit more like you're the user clicking through the form. They can let you do things like download a file or make sure an user input invalidation message appears. If you change the order of the questions, even if you don't change any variable names, you may have to update these types of steps to change their order to match the new order of the screens.

Note: `When`, `Then`, `And`, and `Given` at the beginning of sentences can all be used interchangeably. It doesn't matter which you use.

### Starting Steps

:::warning
You **must** include the `interview` Step in each Scenario before setting any fields.
:::

Use an interview's filename in the `interview` Step to open the interview you want to test.

```
    Given I start the interview at "yaml_file_name.yml"
```

This Step must **always** be included in **each** `Scenario` **before** setting the values of any fields. There is no other way for the tests to know what website to go to.

---

<!-- Given I start the interview at "filename" in lang "Español" -->
<!-- And I am using a mobile -->

You can also start by giving your interview more time to load. The default maximum time is 30 seconds. This Step can be useful if you know that your interview takes longer to load.

```
    Given the maximum seconds for each Step is 200
```

This Step can also be used anywhere else in your Scenario to give Steps more time to complete their action.

### Observe things about the page

To check the id, look at the YAML `question` block and copy the id from there. This Step can help humans keep track of what page the tests are on. It will also show up in the logs of the tests and can help you see where things went wrong.
```
    Then the question id should be "some yaml block id!"
```

---

Some other observational steps are

```
    Then I can't continue
```
```
    Then I will be told an answer is invalid
```
```
    Then I arrive at the next page
```

---

Screenshots will be in the GitHub action's [artifacts](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts).
<!-- And I take a screenshot ?(?:named "([^"]+)")? -->
```
    Then I take a screenshot
```

---

You can make sure a link appears on the page. For example, a link to quickly leave the page for forms that deal with domestic abuse.

```
    Then I should see the link to "a-url.com"
```

<!-- Then an element should have the id "some_HTML_element_id" -->

---

Checking phrases will be language specific.

Be aware that sometimes the characters in your code and the characters on screen aren't the same. In our code, we often use apostrophes as quotes (`'`) and docassemble changes them to actual opening and closing quote characters (`‘` and `’`). It's best to copy the text straight from the screen.
```
    Then I SHOULD see the phrase "some phrase"
```
```
    Then I should NOT see the phrase "some phrase"
```

<!-- Then the "a" link leads to "a" -->
<!-- Then the "a" link opens a working page -->
<!-- Then the "a" link opens in a new window -->
<!-- Then the "a" link opens in the same window -->


### Set fields

Use this Step to continue to the next page. The text on the button itself doesn't matter.

```
    When I tap to continue
```

---

Use this Step to set the values of fields. Comparing this to [a story table](#story-tables), as described above, the first quotes contain the equivalent of the [`var`](#var) column and the second quotes contain the [`value`](#value) you want to set.

```
    When I set the variable "users[i].hair_color" to "blue"
```

For example, you can use the special word `today` as a value to set dates.

---

Sign on a signature field. All signatures are the same.
```
    When I sign
```

---

The "name" Step is specifically for the Document Assembly Line 4-part name questions.

Avoid punctuation. We recommend you just use 2 names - the first name and last name - but you can have all these formats:

- Firstname Lastname
- Firstname Middlename Lastname
- Firstname Middlename Lastname Suffix (where suffix is one of the dropdown suffix choices, like `II`)

```
    When I set the name of "x[i]" to "Ulli User"
```

---

The "address" Step is specifically for the Document Assembly Line 4-part address questions.

It allows a US address format, but can otherwise be any address you want that matches the format of the example below. Remember the commas.

```
    When I set the address of "users[0]" to "120 Tremont Street, Unit 1, Boston, MA 02108"
```

---

Use the story table Step to make sure the test reaches a particular screen given a set of fields with their values. See a better description in [sections above](#story-tables).
```
    I get to the question id "some question block id" with this data:
```

### Other actions

Use the "continue" Step to continue to the next page. The text on the button itself doesn't matter.
```
    When I tap to continue
```

---

Use the "download" Step to download documents. The documents will be in [the GitHub action's artifacts](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts). If you think this step could take more than 2 minutes, use the "maximum seconds for each Step" Step) to give the file more time to download.
```
    Then I download "file-name.pdf"
```

Leave out other parts of file's url.

---

Use this Step to give your pages or Steps more time to finish. The default maximum time is 30 seconds. This Step can be useful if you know that a page or an interaction with a field will take longer. You can also use it to shorten the time to let tests fail faster. If you need, you can use it in multiple places in each Scenario.

```
    Then the maximum seconds for each Step is 200
```

---

You can use the following "wait" Step to pause once a page has loaded. will let you wait for a number of seconds when you are on a page. The time must be shorter than the maximum amount of time for each Step. By default, that's 30 seconds, but you can increase that with the "maximum seconds for each Step" Step.

Waiting can help in some situations where you run into timing issues. It does nothing for the timing of other steps. You can give this Step any number of seconds, though all Steps will timeout after two minutes. You can add multiple rows of these if you want.

The situations that need this are pretty rare, but here's an example: You navigate to a new page and set a field. Sometimes the test passes, but sometimes the test says an element on this page does not exist. The problem is probably that the page sometimes needs an extra few seconds to load. Add this step in to give it that time.
```
    When I wait 10 seconds
```

Example:

```
    And I tap to continue
    When I wait 10 seconds
    And I set the variable "favorite_color" to "puce"
```

<!-- When I tap the defined text link {string} -->
<!-- When I do nothing -->

<!--
## Failing tests 
{#failing-tests}

Look at the [results of your tests](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity). Some of the error messages may tell you more. Also download the [Github test ‘artifacts’](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts) and see if any of those files give you a clue.


### The tests fail at the very first Step 
{#the-tests-fail-at-the-very-first-step}

1. Check the ‘Run npm run setup’ line right above the failed tests. Click to expand it and make sure that setting up the interview didn’t fail. If it did, try running it again.
2. Manually [make a new Project](https://docs.google.com/document/d/1pj1DFIhzzwB6raeCytnmPSR41WfNvG-T9GYPsf1wOsA/edit#heading=h.8yw6hi5hgw1d) on the server and [pull the code](https://docs.google.com/document/d/1pj1DFIhzzwB6raeCytnmPSR41WfNvG-T9GYPsf1wOsA/edit#heading=h.yve8jwod1owz) from the exact same branch into that Project. Manually run the file that is named in your test and double check that it is working the way you expect it to.
3. Make sure that the file you named in your `Given` **Step** is the right file.
4. Have you changed the server where you were running your code? Check your repository’s code in the .github/workflows/run_form_tests.yml file. Make sure the `BASE_URL` in there is the correct one for your server. [Edit it](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository) if it is the wrong one.
5. Contact someone who might know more.

### The test failed on or after ‘upload error artifacts’ 
{#the-test-failed-on-or-after-‘upload-error-artifacts’}

Something probably went wrong with Github. Or maybe they have a maximum amount that they can download that we haven’t yet dug up in their documentation. Try rerunning the tests and, if it fails the same way a second time, get in touch with us.


### The error says it “timed out“ 
{#the-error-says-it-“timed-out“}

That’s a stock system error. Some **Step** took too long to finish in a way for which we have not yet created a custom error message or cannot detect. It is often a page that took too long to load. It sometimes happens when the Project got deleted in the middle of the test, or when the [`Run npm run setup` phase doesn’t work correctly](#bookmark=id.y1ibk27fo4jy).


### Some other mysterious error 
{#some-other-mysterious-error}



1. You can rerun the test
2. Try to search for the text of the error online (don’t spend more than 20 min on this, though)
3. Ask one of us. Remember that this framework is under development. Something might be wrong with our code.

-->

<!--

### Translations

Always give your `choices` values that are separate from their labels and will never be translated.

In docassemble, you can write `choices` a few different ways.

Bad

```
question: |
  What is your favorite color?
fields:
  - Colors: favorite_color
    input type: radio
    choices:
      - green
      - red
      - blue
```

Good

```
question: |
  What is your favorite color?
fields:
  - Colors: favorite_color
    input type: radio
    choices:
      - green: green
      - red: red
      - blue: blue
```

If your field is like the Bad example, the label of a choice is also its value and the translations will break the tests. This is because the label will be translated. Since the label written this way is also the value, the value in the translated version of the interview will be different than the value you wrote in for your test.

If your field is like the Good example, the value of the choice should never get translated so it should always be the same and the tests will be happy.

-->

## Errors and Warnings

This section will be filled out as we go.

### A missing trigger variable

**This warning only matters for story tables that use index variables or generic objects.**

That warning isn't a bug, but if the above doesn't apply to you, you can ignore it. A future goal of ours is to [remove the warning from Steps that don't need it](https://github.com/SuffolkLITLab/ALKiln/issues/452).

If you are using a story table with index variables or generic objects, you need to add some code to the interview file where you set your [`metadata` block](https://docassemble.org/docs/initial.html#metadata). It controls items like `title` and `authors`.

Add this code to your `metadata` block to insert an invisible element to all your screens:

```yml
  post: |
    <div data-variable="${ encode_name(str( user_info().variable )) }" id="trigger" aria-hidden="true" style="display: none;"></div>
```

If you already have something in your `post:` metadata, just add that code anywhere inside there. There's a chance it can interfere with your css styles, so putting it at the end may be the best choice.

If you want to see some very technical details about why we need it in the first place, you can go to https://github.com/SuffolkLITLab/ALKiln/issues/256, where we've tried to summarize the problem this is solving. Unfortunately, we haven't found another way to solve this particular problem.

<!-- ### Access Denied -->


## FAQ

### I have a private GitHub repository. Can I use this testing framework?

Yes, you can use ALKiln with a private repository, though you have to do a bit of extra work.

1. Pick a GitHub account that has permission to change the private repository. 
1. Make sure the account on your docassemble server that you linked to the tests is integrated with the GitHub account. See [docassemble's documentation on integrating a GitHub account](https://docassemble.org/docs/packages.html#github).

As that documentation explains, the GitHub account _must_ be unique to the account on your docassemble server. No two accounts on a docassemble server can be connected to the same GitHub account.

### How do I add a new test file?

Go to your Playground > the dropdown Folders menu > Sources.

Add a new file that ends in the extension `.feature`. Ex: `has_children.feature`

Add this to the blank file:

```
Feature: A description of the category of the tests you'll write in this file

Scenario: The specific situation that this test is written for
  Given I start the interview at "name_of_the_interview_file_to_test.yml"
```

Make sure that

1. `Feature` is on the first line.
1. Each `Scenario` starts each new test in the file.
1. `Given I start the interview...` is the first line under `Scenario`.

After that, you can add the story table or other Steps that will test your code. Add the file to the files you commit to GitHub. From then on, GitHub will run that tests whenever you commit, or push, to GitHub.

An example for the start of two separate tests for a restraining order:

```
Feature: I have children

Scenario: I need visits to be supervised
  Given I start the interview at "restraining_order.yml"


Scenario: I allow unsupervised visitation
  Given I start the interview at "restraining_order.yml"
```

The story table or other Steps under each scenario will be a bit different because they each test a different path for the user.

<!-- The `Scenario` descriptions will later be used in the test report and names of downloaded files, so make each one different. -->

<!-- And I get to the question id "download" with this data: -->

### How do I add a new test to an existing test file?

To add a new test to the existing file you need:

1. The keyword `Scenario` with the `Scenario` description.
1. The step that loads the interview's page: `Given I start the interview at`. You must use it before you fill out any fields: 

Example:

```
Scenario: I allow unsupervised visitation
  Given I start the interview at "restraining_order.yml"
```

Make sure the line containing the `Scenario` description, as seen above, is below the line containing the `Feature` description.

After the `Given` step, you can add the story table or other Steps that will test your code.

### When do tests run?

Tests run when you commit your files to GitHub. That might be when you hit the 'Commit' button on the Packages page. It can also happen when you edit, add, or delete files in GitHub itself.

If you know how to use GitHub [actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity), you can also run the tests manually from GitHub actions with some more options.

### Why should I write a Scenario description?

Scenario descriptions affect the names of error screenshot files and report headings, so try to use useful descriptions.

<!-- I think this info is useful, but I'm not sure where it should go.
## About writing tests

**Who?**

It is easier to write the tests if you have access to the YAML code and can understand a bit about docassemble.

**What?**

There are a couple kinds of tests you can write.

You can write a really simple test right away that just makes sure your a file runs using the name of the file. Write a `Scenario` for each file you want to test.

```
Feature: Interviews load

  Scenario: The 209A loads
    Given I start the interview at "ma_209a_package.yml"

  Scenario: The Plaintiff's Motion to Modify loads
    Given I start the interview at "plaintiffs_motion_to_modify_209a.yml"
```

More complex tests might wait till your code is pretty much how you want it. Every time you change your variable names, you may have to update the tests.

**Where?**

The Sources folder. (Go to your Playground > the dropdown Folders menu > Sources.)

**When?**

Write the simple test described above as soon as you want. For the rest, write most of the tests after your code is mostly stable - you don't plan to change the variables that much.

**Why?**

Right now we're focused on two things:

1. The interview runs.
1. The interview keeps working when superficial things about it change. Things like changing the order of questions, the language, or adding translations.
-->

<!--
## Reading results

Output at the end of the test (in the console)

- The report
- The errors with their Steps listed (that can be annoying with long tables)
- The final count

Artifacts

- error screenshots
- reports
- custom screenshots
-->

<!--
## Running locally

.env

BASE_URL
REPO_URL
BRANCH_PATH
EXTRA_LANGUAGES
DEBUG

Debug/Non-headless mode
-->

<!-- 
## Open questions

We're interested in hearing your thoughts about these questions in particular.

What kinds of tests would be useful?

What kinds of tests can we provide?

Who are the main users of the testing framework?

-->

## Built with

Kiln uses cucumberjs, puppeteerjs, cheerio, and runs the assertions using mocha and chai libraries.

Even though this is built using [cucumberjs](https://cucumber.io/), this framework has a different, less lofty, purpose. cucumber focuses on BDD (behavior driven development). This framework mostly deals with regression testing and other conveniences.

## Repositories

The framework's repository is at https://github.com/SuffolkLITLab/ALKiln.

The interview for setting up tests for a repo is at https://apps-dev.suffolklitlab.org/start/test-setup/. The repo for that interview is at https://github.com/plocket/docassemble-ALAutomatedTestingTests.

The repo for the interviews for testing the framework is also at https://github.com/plocket/docassemble-ALAutomatedTestingTests.
