---
id: alkiln_about
title: ALKiln automated testing
sidebar_label: Overview
slug: /alkiln
---

<!-- /automated_integrated_testing -->

<!-- original: https://docs.google.com/document/d/1hkNr78mrU3Ha98tPUL4OKWi3eNnt-1Sba7L8470u06g/edit# -->

🚧

Reference material for testing your interview with ALKiln. This is under very active development.

**Any docassemble package can use ALKiln**, though it does have special features created especially for projects using AssemblyLine.


## Intro

The ALKiln (Assembly Line Kiln) framework runs tests on your docassemble interview either through the Playground or through GitHub, making sure your interviews are running correctly.

Docacon 2023, demo and examples of ALKiln automated testing:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TcLFA9a1bHs?start=3413" title="Assembly Line Kiln testing framework at Docacon 2023" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>

You can [skip straight to writing tests](https://youtu.be/TcLFA9a1bHs?t=3712). A little earlier in the presentation, you can see a bit about [why we test, what we test, and why to automate testing](https://www.youtube.com/watch?v=TcLFA9a1bHs&t=2970s).

You can also read the [presentation slides themselves](https://docs.google.com/presentation/d/165JJAj9w2YrXeifpyvHXTMUxr7u6UDvnCoYy1xvfdhU/edit) with all the speaker's notes.


## Start

You can use ALKiln from your server, through GitHub, or both. You can read more about the [differences between running ALKiln in GitHub vs. the Playground here](alkiln_advanced.md#two-ways-to-run-alkiln).

### Set up for ALKilnInThePlayground

1. On your server's "Package Management" page, install the [ALKilnInThePlayground package](https://github.com/SuffolkLITLab/docassemble-ALKilnInThePlayground) from its `main` branch.
1. Follow docassemble's instructions to add it to the [dispatch list](https://docassemble.org/docs/config.html#dispatch). This will add it to the server's list of interviews. It may look something like this:

```yml
dispatch:
  alkiln: docassemble.ALKilnInThePlayground:data/questions/run_alkiln_tests.yml
  # Your other server interviews
```

3. Make sure you have a Project that you want to test in your list of Projects.
1. Make sure that Project has some tests. They should be in the Sources folder of the Project and end in the extension `.feature`.
1. Go to your server's list of interviews and run the ALKilnInThePlayground interview.
1. Start by picking the the newest version of ALKiln to install. It should be at the top of the list of options. Tap to install it.
1. Pick a Project to test.
1. Run the tests and see [the output](#test-output).

<!-- 
1. Optionally, if you have added "tags" to your tests using [the tag expression syntax](https://www.cuketest.com/en/cucumber/tag-expressions), you can use a tag expression to limit which tests you run. -->

### Set up for GitHub

1. Prepare your repository or organization for testing using https://apps-dev.suffolklitlab.org/start/test-setup. Follow the instructions there to add new code to your repository. This can take over half an hour if you're unfamiliar with GitHub and docassemble API keys.
1. In Docassemble, make a new Project and pull in the package's updated code.
1. In the Project's Sources folder, add files with a `.feature` extention to write tests. You might already have an example test in that folder if you chose to create one during the ALKiln setup interview.
1. Commit the new files to GitHub to trigger the tests to run.
1. [See the results](#see-github-test-results).

## Quick reminders

1. You write and edit `.feature` test files in your Sources folder.
1. By default, each Step or field may only take 30 seconds. You can change that with the "the maximum seconds" Step listed in the Steps.
1. If you're using GitHub, tests are run when anyone commits to GitHub.
1. Tests can download files, but humans have to review them to see if they've come out right.
1. You will be able to see pictures of pages that errored. In GitHub, you can download them from the zip file in [the Action's artifact section](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).
1. ALKiln also creates test reports. In GitHub, you can download them in the same place.

Give us feedback and ideas by making issues at https://github.com/SuffolkLITLab/ALKiln/issues.

### Example

The tests use the [gherkin language and syntax](https://cucumber.io/docs/gherkin/reference/). Here's a complex example for a quick refresher on some of our features:

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

You can write a short test right away that just makes sure your YAML file runs. Write a `Scenario` for each file you want to test.

```
Feature: Interviews load

  Scenario: The 209A loads
    Given I start the interview at "ma_209a_package.yml"

  Scenario: The Plaintiff's Motion to Modify loads
    Given I start the interview at "plaintiffs_motion_to_modify_209a.yml"
```

You can wait to write more complex tests till your code is more stable.

## Story tables

**Story table** Steps, in our opinion, are the most effective and flexible way to set the values of fields in ALKiln in most cases. Using them, it doesn't matter what order you use to list your fields or what order your pages come in. It also doesn't matter if you include extra fields accidentally. They are a snapshot of the user who's filling out the form for that test.

Example:

```
    And I get to the question id "has sink" with this data:
      | var | value | trigger |
      | last_haircut_date | today - 730 | last_haircut_date |
      | wants_virtual_haircut | True | wants_virtual_haircut |
      | scissors[i].length | 2 | scissors[0].length |
      | scissors[i].length | 7 | scissors[1].length |
```

You can write a story table that goes all the way through your interview, or a story table that only goes part way.

Very basically, you tell the story table Step what `question` you want to get to and the variables and values it will need to get there. Whenever the test gets to a page, it checks your story table for any variables that match a variable on the page. When it finds a match, it sets the value of the field. When it's done with a page, it continues to the next page until it reaches the terminal `question`.

You can have multiple tables in one Scenario and you can put other steps between story table Steps. 

Right now, Story Tables are unable to use GitHub secrets to set variables.

:::caution
A story table Step **must not** be the first step in your Scenario. The [`interview` Step](#starting-steps) **must** come before it.
:::

### Generate a story table

You can use the [story table generator](https://plocket.github.io/al_story/) to generate a Scenario draft. Depending on your interview's code you might need to edit the table for it to work properly, but it can give you a good start.

Follow these instructions to use the generator:

1. If you don't have one already, [add a new test file](#how-do-i-add-a-new-test-file). You can leave out the Scenario.
1. Ensure your server config is set up to [show debug info](https://docassemble.org/docs/config.html#debug).
1. Run your interview manually until you reach the page you want the story table to get to.
1. Open the "source" display of the interview. Currently, that looks like angle brackets, `</>`, in the header of the page.
1. Note the `id` of the page.
1. Tap the "Show variables and values" button. It will open a new tab showing a big JSON object.
1. Copy all the text on that page.
1. Go to the [story table generator](https://plocket.github.io/al_story/).
1. Paste the JSON into the text area there, as instructed.
1. Use the other input fields to help finalize your Scenario, including the page `id`.
1. Copy the Scenario that has been generated for you.
1. Paste that into the already prepared test file.

This works best with interviews that don't need [index variables](https://docassemble.org/docs/fields.html#index%20variables) or [generic objects](https://docassemble.org/docs/fields.html#generic).

### Step description

The Step that triggers a story table is

```
    And I get to the question id "some id!" with this data:
```

**question id:** The story table needs to know the `id` of the page this story table should get to. You can find the `id` in the `question` block in the YAML in the Playground.


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

You must include a row for every variable that need to be set in order to get to the page with the `id` you chose.

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

`trigger` is an optional value in most cases. It is mandatory for rows that list [index variables](https://docassemble.org/docs/fields.html#index%20variables), like `i`, `j`, or `k`, or [generic objects](https://docassemble.org/docs/fields.html#generic) (`x`). Your interview **must always** include [some special HTML](#trigger_variable_code) to let the trigger variable work properly. As you can see, you will get a warning in the report if you leave that out.

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

The 'yes' choice of [`yesno` buttons](https://docassemble.org/docs/fields.html#yesno) or [`yesno` fields](https://docassemble.org/docs/fields.html#fields%20yesno) like `yesno` checkboxes and `yesnoradio`s.
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
      | favorite_color | Blue.\nNo, green!\nAah... | favorite_color |
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

The `value` for a row setting a signature doesn't matter. All signatures will be a single dot.
```
      | user.signature |  | user.signature |
```

### Other story table notes

Don't worry about accidentally including variables that won't show up during the test. Extra rows will be ignored.


## Steps

[Steps](https://cucumber.io/docs/gherkin/reference/#steps) must be written one after the other in the order they should happen. It's a bit more like you're the user clicking through the form. They can let you do things like download a file or make sure an user input invalidation message appears. If you change the order of the questions, even if you don't change any variable names, you may have to update these types of steps to change their order to match the new order of the screens.

Note: `When`, `Then`, `And`, and `Given` at the beginning of sentences can all be used interchangeably. It doesn't matter which you use.

### Starting Steps

_Establishing Steps that you might use as the first few lines of a "Scenario" - a test. They can also be used at any other time._ 

:::caution
You **must** include the `interview` Step in each Scenario **before setting any fields**.
:::

Use an interview's filename in the `interview` Step to open the interview you want to test.

```
    Given I start the interview at "yaml_file_name.yml"
```

This Step must **always** be included in **each** `Scenario` **before** setting the values of any fields. There is no other way for the tests to know what website to go to.

---

The `wait` Step can be a way to pause before the test tries to go to the interview's first page.

```
    Given I wait 120 seconds
    When I start the interview at "yaml_file_name.yml"
```

This Step can also be used anywhere in your scenario to wait between Steps.

<!-- Maybe put this in the errors/warnings section:

You might need this if your tests repeatedly fail on one Step, especially if it only happens sometimes. This is because some situations can cause race conditions that make the tests believe the next page has loaded even though it hasn't. We haven't yet found a way to detect all of these and it might never be possible. -->

---

<!-- Given I start the interview at "filename" in lang "Español" -->
<!-- And I am using a mobile -->

You can also start by making sure the test will give the interview's first page time to load once the test goes there. The default maximum time is 30 seconds. This Step can be useful if you know that your interview's first page takes longer to load.

```
    Given the maximum seconds for each Step is 200
    When I start the interview at "yaml_file_name.yml"
```

This Step can also be used anywhere else in your Scenario to give Steps more time to finish.

---

You can use <span id="log-in-step">the `log in` Step</span> to sign into your docassemble server before going to the interview:

```
    Given I log in with the email "USER_EMAIL" and the password "USER_PASSWORD"
    When I start the interview at "yaml_file_name.yml"
```

This is a complex Step to use and right now only works in GitHub (though we are working on developing the feature for the Playground version). You **must** use a GitHub "secret" to store each value as the information is sensitive. To learn how to create and add a secret for a test, see the [GitHub secrets section](#github-secrets).

`"USER_EMAIL"` and `"USER_PASSWORD"` are just examples of names. You can use any names you want.

### Observe things about the page

The `question id` Step will make sure the page's question id is right. This Step can help humans keep track of what page the tests are on. It will also show up in the logs of the tests and can help you see where things went wrong.

Copy the `id` value from the YAML `question` block of the screen you want to test.

```
    Then the question id should be "some yaml block id!"
```

---

The `invalid answers` Step can check that the user was prevented from continuing.

```
    Then I will be told an answer is invalid
```

<!--
I don't think these are trustworthy enough yet
Then I can't continue
Then I arrive at the next page
-->

---

The `screenshot` Step will take a picture of the screen. In GitHub tests, it will be put in the GitHub action's [artifacts](#see-github-test-results).
<!-- And I take a screenshot ?(?:named "([^"]+)")? -->

```
    Then I take a screenshot
```

---

The `link` Step can make sure a link appears on the page. For example, a link to quickly leave the page for forms that deal with domestic abuse.

```
    Then I should see the link to "a-url.com"
```

<!-- Then an element should have the id "some_HTML_element_id" -->

---

The `phrase` Steps can check for text on the page. Checking phrases will be language specific.

:::danger
Getting the characters right can be tricky with docassemble. If you get told a phrase is missing, read about [a possible reason](#phrase-is-missing) in the errors section.
:::

```
    Then I SHOULD see the phrase "some phrase"
```

```
    Then I should NOT see the phrase "some phrase"
```

The phrase should be inside double quotation marks and should NOT itself contain [regular double quotation marks](https://www.compart.com/en/unicode/U+0022) inside it. That usually isn't a problem with docassemble pages because docassemble transforms our code in ways we don't always expect. See the [missing phrase section](#phrase-is-missing) that talks about special characters.

---

The `accessibility` Step can <span id="accessibility">check a page for its accessibility</span> by running [aXe-core](https://github.com/dequelabs/axe-core) on the page.

```
    Then I check the page for accessibility issues
```

This will include a separate JSON file if there are any accessibility issues with the page.
 
You can also check all pages past a certain point automatically:

```
    Then I check all pages for accessibility issues
```

This is equivalent to running `I check the page for accessibility issues` on every new page
that the test runner sees.

---

The `text in JSON` Step can check that a variable on the page has a specific text value. **This is a multi-line step**. It will also save a copy of all of the page's JSON variables to a file that starts with 'json_for' followed by the question's id. The JSON variables are the same variables that you would see in [the docassemble sources tab](https://docassemble.org/docs/errors.html#tocAnchor-1-1).

:::caution
This step is unable to check values of nested objects. For example, it can test the value of a variable like `user_affidavit`, but not an attribute like `user.affidavit`.
:::

```
    Then the text in the JSON variable "user_affidavit" should be
    """
    Three quotes then some affidavit text.

    The text can be multi-line.

    Then close with three quotes.
    """
```

---

The `JSON variables` Step will add the page's JSON variables to the final test report. It's a bit messy, but you do get to see all the variables.

```
    And I get the page's JSON variables and values
```

<!-- Then the "a" link leads to "a" -->
<!-- Then the "a" link opens a working page -->
<!-- Then the "a" link opens in a new window -->
<!-- Then the "a" link opens in the same window -->

---

### Set values

_Fill in fields with answers, set values, and interact with the page in other ways._

---

The `continue` Step will tap the button to continue to the next page. The text on the button itself doesn't matter.

```
    When I tap to continue
```

---

Use the `set variable` Step to set the value of a field.

Comparing this to [a story table](#story-tables), as described above, the first quotes contain the equivalent of the [`var`](#var) column and the second quotes contain the [`value`](#value) you want to set.

```
    When I set the variable "users[i].hair_color" to "blue"
```

One special value you can include is `today`. That will insert the date on which the test is being run. You can also subtract from, or add days to, `today`. Examples:

```
    When I set the variable "signature_date" to "today"
    When I set the variable "birthdate" to "today - 500"
    When I set the variable "court_date" to "today + 12"
```

You can also use environment variables to set values with [the `secret variables` Step](#secret-variables-step), even if the value doesn't need to be secret.

---

The <span id="secret-variables-step"><code>secret variables</code> Step</span> can set variables that have sensitive information. For example, a password. The value of this variable will not appear anywhere in the report or in the console. If there is an error on this page, ALKiln will still avoid taking a picture of the screen.


This is a complex Step to use and currently only works with tests running in GitHub (though it's in development for the Playground version). You can use a GitHub "secret" to store the value. To learn how to create and add a secret for the test, see the [GitHub secrets section](#github-secrets).

```
    I set the variable "user_account_password" to the GitHub secret "USER1_PASSWORD"
```

:::caution
You **MUST** use [the `log in` Step](#log-in-step) if you want to sign into your docassemble server. The `secret variables` Step shown here is unable to do that.
:::

---

Sign on a signature page. All signatures are the same - one dot.

:::danger
**AVOID** taking screenshots of signature pages. There's a bug that will erase the signature if you do that.
:::

```
    When I sign
```

---

You can also tap or click on specific elements, like buttons on a page.
You can use any valid [CSS Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
to get an element on the page, and can add any additional wait time after tapping the element.

```
    When I tap the "#element-id" element
    And I tap the "#other-element" element and wait for 5 seconds
```

If you are using the [ALToolbox tabs](framework/altoolbox.md#display-a-series-of-tabs), you can say that you're tapping the tab,
and ALKiln will tap and wait until the tab is fully visible.

```
    When I tap the "TabGroup-specific_tab_name-tab" tab
```

---

Use the `story table` Step to make sure the test reaches a particular screen given a set of fields with their values. See a better description in [sections above](#story-tables).

```
    I get to the question id "some question block id" with this data:
```

---

The `name` Step is specifically for the Document Assembly Line 4-part name questions.

Avoid punctuation. We recommend you just use 2 names - the first name and last name - but you can have all these formats:

- Firstname Lastname
- Firstname Middlename Lastname
- Firstname Middlename Lastname Suffix (where suffix is one of the dropdown suffix choices, like `II`)

```
    When I set the name of "x[i]" to "Sam User"
```

---

The `address` Step is specifically for the Document Assembly Line 4-part address questions.

It allows a US address format, but can otherwise be any address you want that matches the format of the example below. Remember the commas.

```
    When I set the address of "users[0]" to "120 Tremont Street, Unit 1, Boston, MA 02108"
```

---

### Other actions

---

Use the `download` Step to download files so that humans can check that they are correct. When the tests run in GitHub, the files will be in [the GitHub action's artifacts](#see-github-test-results). If you think this step could take more than 30 seconds, use the "maximum seconds for each Step" Step to give the file more time to download.

```
    Then I download "file-name.pdf"
```

Leave out other parts of file's url.

---

Use the `upload` step to upload one or more files. You must store files that you plan to upload in your ["Sources" folder](https://docassemble.org/docs/playground.html#templates) along with your tests.

As you can see in the examples, if you want to upload more than one file you must separate their names with a comma.

```
And I upload "irrefutable_evidence.jpg, refutable_evidence.pdf" to "evidence_files"
```

In a story table, use the name of the variable as usual and use the name of the file or files in the `value` column.

```
      | evidence_files | irrefutable_evidence.jpg, refutable_evidence.pdf |  |
```

---

Use <span id="custom-timeout-step">the `custom timeout` Step</span> to give your pages or Steps more time to finish. The default maximum time is 30 seconds. This Step can be useful if you know that a page or an interaction with a field will take longer. You can also use it to shorten the time to let tests fail faster. If you need, you can use it in multiple places in each Scenario.

```
    Then the maximum seconds for each Step is 200
```

---

Use the `wait` Step to pause once a page has loaded. will let you wait for a number of seconds when you are on a page. The time must be shorter than the maximum amount of time for each Step. By default, that's 30 seconds, but you can increase that with the "maximum seconds for each Step" Step.

```
    When I wait 10 seconds
```

This Step can be used multiple times.

Waiting can help in some situations where you run into problems with timing. The situations that need this are pretty rare, but here's an example: You navigate to a new page and set a field. Sometimes the test passes, but sometimes the test says an element on this page does not exist. The problem is probably that the page sometimes needs an extra few seconds to load. Add this step in to give it that time.

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


## Tips

_Some of these are just good practices to follow when coding your interviews._

In questions with choices, give each label a value. See [docassemble's documentation on buttons](https://docassemble.org/docs/fields.html#field%20with%20buttons) to read about key-value pairs.

Not great with just labels:
```yaml
question: Tell me about yourself
fields:
  - Favorite color
```

Better with values as well:
```yaml
question: Tell me about yourself
fields:
  - Favorite color: user_favorite_color
```

It's always possible to use the labels alone, but giving a value as well ensures your tests will work for translated versions of your interview. It also helps your code be more translatable in general.

---

Add a [unique id](https://docassemble.org/docs/modifiers.html#id) to each `question` block of your interview. This also helps your team communicate with each other more easily.

---

Avoid `noyes` type fields. For one thing, the [story table generator](#generate-a-story-table) code will need less editing. For another, we've found that humans tend to find those confusing too.

---

If your package is not importing specifically al_package.yml from the styled Assembly Line package, make sure to add the [trigger variable code](#trigger_variable_code) to your interview.

---

You can write tests that just go part-way through an interview. That way, you can work on adding more content and yet also be sure that the work you've already done isn't affected by the new changes.

---

Use old Scenarios or story tables to help you make new ones. You don't have to make everything from scratch.

---

## Test output

ALKiln creates files and folders showing the output of the tests.
In GitHub, you can [download these GitHub "artifacts"](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts) at the bottom of the summary page for that run of tests.

The output ALKiln creates includes:

- A report of the result from all the tests.
- Pictures of screens where ALKiln ran into errors or unexpected behavior.
- A folder for each test (or Scenario) named using your Scenario description.
- A report for that specific Scenario, as well as pictures you took of screens, files you downloaded, and pictures of any errors it caused.

### Error pictures

ALKiln will try to take pictures of pages that run into errors. The names of those files use the id of the page where the error happened. There you might see that the test was unable to continue to the next page because required fields weren't filled, or that a variable wasn't defined. ALKiln avoids taking pictures of erroring pages when the page used GitHub secrets in case they contain sensitive information.

<!-- 
**Your test's status:** If your test has a green circle with a checkmark, the test has passed. If it has a red circle with an 'x', something went wrong. If it has a yellow circle, the test is still running.

**Summary page:** You can tap on the name of a test to be taken to its summary page. At the bottom, there might be items for you to download as zip files. GitHub calls those "artifacts" and ALKiln can create a few different kinds. You can read about artifacts in [GitHub's own documentation about artifacts](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts). Read about our specific artifacts in the sections below.

**Jobs page:** GitHub also has a page where you can more details about what happened during the test.

To see more details about how the test steps ran on GitHub, go to the left column. Tap on the first item under "Jobs".
 -->

### Reports

We're always trying to understand what people would find helpful in these reports. Tell us about your experiences at https://github.com/SuffolkLITLab/ALKiln/issues.

A report might look something like this:

```
Assembly Line Kiln Automated Testing Report - Wed, 29 Dec 2021 17:49:00 GMT


===============================
===============================
Failed scenarios:

---------------
Scenario: I get to the download page
---------------

ERROR: The question id was supposed to be "download", but it's actually "agree-to-terms".
**-- Scenario Failed --**


===============================
===============================
Passed scenarios:

---------------
Scenario: I fill in my name
---------------
screen id: user-name
      | user.name.first | Maru |  |
      | user.name.last | Plaintiff |  |
```

A report has a title with the date and time. It also has two main sections - the failed Scenarios and the Scenarios that passed.

Within each of those, every Scenario will have its own section. In the Scenario's section, ALKiln will list the id of each screen where fields were set in the order in which they appeared. Under each `screen id` will be the names of the variables whose fields were set and the values they were set to. We're still working out some issues here.

---

If you used a [story table](#story-tables) Step, a Scenario might look more like this:

```
---------------
Scenario: I fill in my name
---------------
screen id: user-name
      | user.name.first | Maru |  |
      | user.name.last | Plaintiff |  |

  Rows that got set:
    And I get to the question id "child information" with this data:
      | var | value | trigger |
      | user.name.first | Maru |  |
      | user.name.last | Plaintiff |  |
  Unused rows:
      | defendant.name.first | Sam |  |
      | defendant.name.last | Defendant |  |
```

Since story table Steps don't care about having extra unused rows, the report lets you know which rows did or did not get used. If rows are listed under "Unused rows", ALKiln couldn't find the fields for those variables during the test. Despite that, it was still able to get to the desired question id. You should check that section to make sure all your varibles got used.

Rows are listed in alphabetical order. If you have thoughts on pros and cons, we'd love to hear from you.

If everything looks right to you there, you can copy and paste the text under "Rows that got set" into your test to get rid of the extra rows you've got hanging around.

---

If a screen loaded with an error message, ALKiln will try to reload a few times, and will try to log the error message that it saw:

```
---------------
Scenario: I opened the interview
---------------

ERROR: On final attempt to load interview, got "Reference to invalid playground path"

ERROR: On final attempt to load interview, got "Reference to invalid playground path"

ERROR: On final attempt to load interview, got "Reference to invalid playground path"

ERROR: Failed to load "a-great-interview" after 3 tries. Each try gave the page 30 seconds to load.
**-- Scenario Failed --**
```

ALKiln will also try to take a picture of the page where the error happened. There will be two copies of that picture - one in the main folder of the output and one in the folder of the specific test (the Scenario) that caused the error.

Also watch the [errors and warnings](#errors-and-warnings) section for updates on similar information.

## See GitHub test results

In GitHub, to see the list of previous tests or running tests, go to your repository's [GitHub Actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity).

One of the rows should have the text of the commit you just made. The test may have a yellow dot next to it. That means it's still running. When the dot has turned into a red 'x' or a green checkmark, tap on the name to go to the test's summary page.

To see the output text of the test run online, its logs, follow [these GitHub instructions](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs).

ALKiln also creates files and folders showing the output of the tests.
In GitHub, you can [download these GitHub "artifacts"](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts) at the bottom of the summary page for that run of tests.

## Errors and warnings

_This section is a constant work in progress._

### A missing trigger variable

**This warning only matters for story tables that use index variables or generic objects.**

That warning isn't a bug, but if the above doesn't apply to you, you can ignore it. A future goal of ours is to [remove the warning from Steps that don't need it](https://github.com/SuffolkLITLab/ALKiln/issues/452).

If you are using a story table with index variables or generic objects, you need to add some code to the interview file where you set your [`metadata` block](https://docassemble.org/docs/initial.html#metadata). It controls items like `title` and `authors`.

<!-- This has to be a bit farther up than the code. For some reason the header isn't taken into account when jumping here. -->
<a name="trigger_variable_code"></a>

Add this code to your `metadata` block to insert an invisible element in all your screens:

```yml
  post: |
    <div data-variable="${ encode_name(str( user_info().variable )) }" id="trigger" aria-hidden="true" style="display: none;"></div>
```

If you already have something in your `post:` metadata, just add that code anywhere inside there. There's a chance it can interfere with your css styles, so putting it at the end may be the best choice.

If you want to see some very technical details about why we need it in the first place, you can go to https://github.com/SuffolkLITLab/ALKiln/issues/256, where we've tried to summarize the problem this is solving. Unfortunately, we haven't found another way to solve this particular problem.

### Timeout or "took too long" error

Different problems can cause the report to say that something "took too long" or caused a "timeout" error.

A "timeout" error can happen when a page took too long to load at some point in setup, when running tests, or during test cleanup. This can be because:

1. The page was trying to load a big file.
1. ALKiln could not continue to the next page for some reason.
1. A Story Table was unable to reach the page with the specified `id`.
1. There's a typo in the name of the interview YAML file that the test should go to.

If a page was taking too long to load a big file, use [the `custom timeout` Step](#custom-timeout-step) to give the page more time to load.

You might be able to look at the error page picture for more details. In GitHub, you can download the test [artifacts](#see-github-test-results) to look for it.

In GitHub, this error can also happen when:

1. The server was busy for too long.
1. The server was down.
1. That url is stored in the `SERVER_URL` [GitHub secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets) is wrong or out of date.

If the server might have been busy or down, try [re-running the tests](https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow).

You won't be able to tell if the `SERVER_URL` is wrong - GitHub considers the value of the secret to be sensitive information, so it's impossible to see that value. You can still give it a new value, though, and that's worth trying. Find the address of the docassemble server where the docassemble testing account is located. Edit the secret to give it that url.

### Invalid playground path error

If you see the text "invalid playground path" in the report, that means the `Given I start the interview at...` Step for that scenario is naming an interview that doesn't exist. Check for a typo.

### UnhandledPromiseRejection error

This is a misleading error. You need to read the text of the whole paragraph to see what the actual error is.

### Phrase is missing

If you get an error message that an expected phrase is missing, make sure you copy and paste the text you're expecting **directly from the running interview page**.

Sometimes the characters in your code and the characters on screen are not the same. For example, in our code we often use apostrophes as quotes (`'`) and docassemble changes them to actual opening and closing quote characters (`‘` and `’`). Same for double quotes. In our code editor, we use the unicode character [`"` (U+0022)](https://www.compart.com/en/unicode/U+0022) both for opening and closing quotes. On the running interview page, docassemble changes those into `“` - ["left double quotation mark" (U+201C)](https://www.compart.com/en/unicode/U+201C) - and `”` - ["right double quotation mark" (U+201D)](https://www.compart.com/en/unicode/U+201C)

They look very similar, but are not the same. It's best to copy the text **straight from the screen the user sees.**

Wrong:

```
    I should see the phrase "a document called a 'Certified docket sheet'"
```

Example error:

```
The text "a document called a 'Certified docket sheet'" SHOULD be on this page, but it's NOT
```

Right:

```
    I should see the phrase "a document called a ‘Certified docket sheet’"
```

### Inconsistent cell count

This error prevents all of your tests being run. The message is telling you that something about the syntax of the table is wrong. One of your story tables could missing a pipe (`|`) or could have an extra pipe, etc.

To fix this you can find the syntax typos by using an editor like the [editor at AssertThat](https://www.assertthat.com/online-gherkin-editor). It will let you paste in your test code and will show a red 'x' next to the lines that have syntax errors. The editor will not show error next to lines that are commented out. Those are the ones that start with `#`.

The error message will include text similar to this:

```bash
Error: Parse error in 'docassemble/ChildSupport/data/sources/new_case.feature': (10:5): inconsistent cell count within the table
```

<!-- ### Access Denied -->


## Security

Using a third-party library or package is always a risk. That said, we take measures to help secure our code, such as protecting our release branches and requiring reviews before merging any new code.

In addition, here are some actions you can take to manage the security of the tests, as well as general guidelines for server security.

### Disable the tests

If you become worried about the tests, there are different ways you can stop the tests from running.

In order to run, the test setup interview added a "workflow" file to your repository. GitHub sometimes calls that an "action". That's what triggers the tests. You can manage that workflow, and your actions in general, in GitHub.

#### Disabling tests in one repository
GitHub lets you disable workflow files like these. See their instructions at https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow.

You can also delete the file from your repository completely. If you go to the front page of your repository, the file is in the `workflows` folder of the `.github` folder. It's called `run_form_tests.yml`. GitHub's instructions about how to delete a file are at https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository.

Another option is to disable or limit all tests, all actions, in your repository. GitHub's documentation for managing repository actions is at https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository.

#### Disabling tests for the whole organization

You can disable these tests, or any actions, for a whole organization. GitHub's documentation for managing organization actions is at https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization.

### Use a separate server just for testing

Keep the test server completely separate from production server so that no sensitive information can be revealed to potential malicious actors.

In addition, some general good practices are:

* Never share API keys or passwords between servers.
* Periodically clear out the test server and start a new docker container from scratch.
* Occasionally check the test server to make sure it's not running resource stealing code (blockchain miners, etc.)

### See GitHub's security docs

GitHub has documentation on some best practices as well: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions

### Use ALKiln's commit sha

This one requires prior technical knowledge. To summarize, you can freeze the version of the ALKiln code your repository's tests use by referencing a specific ALKiln commit sha in your workflow file.

1. Go to [ALKiln's repository](https://github.com/SuffolkLITLab/ALKiln). For example, for the v4 branch, you can go to https://github.com/SuffolkLITLab/ALKiln/commits/releases/v4.
2. Find the sha of a commit you like.
3. In your repository's directory, go to .github/workflows and find the file running the tests. There's a line in there that look's something like this:

```yml
uses: suffolkLITLab/ALKiln@releases/v4
```

4. Change `releases/v4` to the commit sha.

When you want to update to a new version of the ALKiln, update that sha manually.

### Set ALKiln's npm version

This section requires prior technical knowledge about [npm](https://docs.npmjs.com/about-npm) and [GitHub workflow files](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions). Feel free to [ask us](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/#get-involved) any questions you might have.

You can use an exact npm version of ALKiln by using your workflow file's `ALKILN_VERSION` input. The default uses a carat, for example `^4.0.0`. That means it will use the latest minor or patch in version 4 of ALKiln. You can instead use an exact version, for example `4.3.0`. See our section on [setting optional inputs](#optional-inputs).

### GitHub secrets

<!-- TODO: Rearrange - Maybe use this section to refer to another section that is more focused on setting arbitrary environment variables in general -->

You can use GitHub secrets to set environment variable values with sensitive information. For example, a password. ALKiln will avoid taking error pictures of pages with sensitive information. The value of a secret variable will not appear anywhere in the report or in the console.

:::danger
Avoid taking pictures of pages with sensitive information. It is possible to trigger those pictures in Steps you write yourself, but we highly recommend against that for security reasons.
:::

GitHub secrets can be useful if an organization wants to create a variable that all of its repositories will be able to use, though right now Story Tables are unable to use GitHub secrets to set variables.

1. Follow the [GitHub instructions](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to set one or more GitHub secrets. You can add these to one repository's secrets or you can add these to your organization's secrets, whichever is right for you.

2. Go to the home page of your repository. Tap on the `.github` folder, then on `workflows` folder, then on the YAML file in there that runs the ALKiln tests.

3. It should include a line that looks like this:

```yml
jobs:
```

If this is the first environment variable you're adding, right above that line add a new line like this:

```yml
env:
```

4. Whenever you want to add a secret, add a new line under `env:` indented once as shown below:

```yml
  USER_PASSWORD: "${{ secrets.USER_PASSWORD }}"
```

`USER_PASSWORD` is just a placeholder in our example. You can name your secrets whatever you want to. Make sure you use the same words as the GitHub secret you made.

5. Write your Step and use the names of these secrets as the values.

If you're not worried about keeping the information secure, you don't have to use a GitHub secret - you can just put the value straight into your workflow file like this:

```yml
  MAX_SECONDS_FOR_SERVER_RELOAD: "300"
```

ALKiln will still avoid printing this value and avoid taking screenshots when it is used. There is no way ALKiln can tell which environment variables have sensitive information and which ones are safe.

All together, this section can look similar to this:

```yml
env:
  USER_PASSWORD: "${{ secrets.USER_PASSWORD }}"
  MAX_SECONDS_FOR_SERVER_RELOAD: "300"

jobs:
```


## Your workflow file

**Where is it?**

Your ALKiln workflow file is in your repository. To find it, go to your `.github` folder, then open the `workflows` folder there. It was probably created when you ran the setup interview and it might be called "run_form_tests.yml" or "alkiln_tests.yml" or something similar.

**What does it do?**

Among other things, the workflow file:

- Triggers the ALKiln tests when desired, like when you push new code to your package.
- Gives ALKiln inputs that are needed to run your tests.
- Optionally gives ALKiln other inputs and environment variables it can use.

You can also use the whole suite of GitHub's workflow and action functionality to do other things, like creating issues when tests fail.

These following sections probably require prior technical knowledge about [GitHub workflow files](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions). Feel free to [ask us](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/#get-involved) any questions you might have.

### Required inputs

The setup interview should have helped you create these required `inputs` and their values. They are in the `jobs:` section. They look something like this:

```yml
        with:
          SERVER_URL: "${{ secrets.SERVER_URL }}"
          DOCASSEMBLE_DEVELOPER_API_KEY: "${{ secrets.DOCASSEMBLE_DEVELOPER_API_KEY }}"
```

`SERVER_URL` is the url of the docassemble server the tests should run on.

`DOCASSEMBLE_DEVELOPER_API_KEY` is the API key that you created for the account on your server that will store the Project in the Playground while the tests are being run. You probably created this in the setup interview. Alternatively, your organization admin may have created it.

We recommend keeping the API key a GitHub secret for security reasons, but the server url can be type in plainly. For example `SERVER_URL: "https://apps-test.example.com"`.

### Optional inputs

There are also optional inputs that can go under `with:`.

`MAX_SECONDS_FOR_SETUP` lets you to set how long to allow ALKiln to try to pull your interview package's code into the docassemble Playground. The default is currently 120 seconds (2 minutes).

`ALKILN_VERSION` can be useful for security. It gives lets you control what npm version of ALKiln you're using. Read about that in [the "ALKiln's npm version" security section](#set-alkiln-s-npm-version).

If you're using a GitHub repository or organization secret, it will look very similar to the [required inputs described above](#required-inputs). Here the values are in context:

```yml
        with:
          SERVER_URL: "${{ secrets.SERVER_URL }}"
          DOCASSEMBLE_DEVELOPER_API_KEY: "${{ secrets.DOCASSEMBLE_DEVELOPER_API_KEY }}"
          MAX_SECONDS_FOR_SETUP: "${{ secrets.MAX_SECONDS_FOR_SETUP }}"
          ALKILN_VERSION: "${{ secrets.ALKILN_VERSION }}"
```

Other than `DOCASSEMBLE_DEVELOPER_API_KEY`, this information can usually be public. If your organization wants to share the values with multiple repositories you can still use an organization GitHub secret. If not, you can set them right there in the workflow file.

```yml
        with:
          SERVER_URL: "${{ secrets.SERVER_URL }}"
          DOCASSEMBLE_DEVELOPER_API_KEY: "${{ secrets.DOCASSEMBLE_DEVELOPER_API_KEY }}"
          MAX_SECONDS_FOR_SETUP: "300"
          ALKILN_VERSION: "4.3.0"
```

### ALKiln environment variables

There are some environment variables that ALKiln uses internally that don't need to be "inputs". They go under the `env:` section instead of under `with:`.

`MAX_SECONDS_FOR_SERVER_RELOAD` customizes how long to allow your tests to wait when the server is reloading. This helps avoid tests failing when they should otherwise be passing.

If you want to use this value in multiple repositories, you can use a GitHub organization secret. It can look something like the below:

```yml
env:
  MAX_SECONDS_FOR_SERVER_RELOAD: "${{ secrets.MAX_SECONDS_FOR_SERVER_RELOAD }}"
```

You can also set its value without a secret as this value is probably not sensitive information.

```yml
env:
  MAX_SECONDS_FOR_SERVER_RELOAD: "300"
```

You can read [the GitHub secrets section](#github-secrets) on setting arbitrary environment variables for more background information.

:::info
Your server can reload whenever someone saves a python file or whenever a developer or another test pulls a package that contains a python file into the Playground. If a test is running while that happens, the page the test is trying to open might take too long to load and the test will fail. This is unhelpful to you because the test stops part way and you cannot tell if it would have failed or passed on its own.

The next test might then fail during the same reload. That becomes a problem when a chain of tests fail because of one reload.

ALKiln cannot stop the first test from failing, but `MAX_SECONDS_FOR_SERVER_RELOAD` can help prevent the next tests from failing during the same reload.
:::

### Arbitrary environment variables

See [the GitHub secrets section](#github-secrets) on setting arbitrary environment variables. The section describes using GitHub secrets and using plain values.

### Make a GitHub issue when tests fail

1. Go to your GitHub repository.
1. Tap on the `.github` folder, then on `workflows`, then on the YAML file in there that runs the ALKiln tests.
1. Tap to [edit the file](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).
1. Add the below code under the last line of text in the file.
1. Avoid adding any new GitHub secrets to your repository for this.

```yml
      - name: If tests failed create an issue
        if: ${{ failure() }}
        uses: actions-ecosystem/action-create-issue@v1
        with:
          github_token: ${{ secrets.github_token }}
          title: ALKiln tests failed
          body: |
            An ALKiln test failed. See the action at ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}.
          labels: |
            bug
```

:::danger
Avoid changing the value `github_token` and avoid creating a new secret for it. The variable `secrets.github_token` is a value that your repository has by default.
:::

If you use the code above, the [GitHub issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) will contain a link to the workflow's action page itself.

You can edit the values of `title`, `body`, and `bug` to customize the issue.

If you've run the Setup interview more recently, you will already have this code in your file, though it will be inactive. You just have to remove the comment symbols (`#`) from the lines of code.

### Schedule test runs

By default, the ALKiln setup interview makes sure that the tests are triggered when code gets pushed to the repository. It also makes sure the tests can be triggered manually.

You can also run these tests on a schedule - daily, weekly, monthly, or on any other interval. To run the tests on a schedule, you must add code to your workflow file.

1. Go to your GitHub repository.
1. Tap on the `.github` folder, then on `workflows`, then on the YAML file in there that runs the ALKiln tests.
1. Tap to [edit the file](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).
1. Near the top of the code, you will see something like this:

```yml
  on:
    push:
```

5. Between those two lines, add code, like this:

```yml

    schedule:
      - cron: '0 1 * * TUE'
```

The GitHub docs can tell you more about [triggering workflows on a schedule](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#scheduled-events). If you want to change the interval, [these examples of cron syntax](https://crontab.guru/examples.html) can help a lot.

If you've run the Setup interview more recently, you will already have this code in your file, though it will be inactive. You just have to remove the comment symbols (`#`) from the lines of code.

## FAQ

### I have a private GitHub repository. Can I use this testing framework?

Yes, you can use ALKiln with a private repository, though you have to do a bit of extra work.

1. Pick a GitHub account that has permission to change the private repository. 
1. Make sure the account on your docassemble server that you linked to the tests is integrated with the GitHub account. See [docassemble's documentation on integrating a GitHub account](https://docassemble.org/docs/packages.html#github).

As that documentation explains, no two accounts on a docassemble server can be connected to the same GitHub account.

Also, there are some limits on the amount of time private repositories can run workflows: https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions

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

1. `Feature:` and it's description is on the first line.
1. Each test starts with a `Scenario:` and its description.
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

The Steps under each scenario will be a bit different because they each test a different path for the user.

<!-- The `Scenario` descriptions will later be used in the test report and names of downloaded files, so make each one different. -->

### How do I add a new test to an existing test file?

To add a new test to the existing file you need:

1. The keyword `Scenario` with the `Scenario` description.
1. The step that loads the interview's page: `Given I start the interview at`. You must use it before you fill out any fields: 

Example:

```
Scenario: I allow unsupervised visitation
  Given I start the interview at "restraining_order.yml"
```

Make sure to leave the `Feature` line at the very top of the file.

After the `Given` step, you can add the story table or other Steps that will test your interview.

ALKiln uses the `Scenario` description to label test results. Try to use something you'll recognize later.

### When do tests run?

GitHub tests run when you commit your files to GitHub. That might be when you hit the 'Commit' button on the Packages page. It can also happen when you edit, add, or delete files in GitHub itself.

If you know how to use GitHub [actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity), you can also run the tests manually from GitHub actions with some more options.

### Why should I write a Scenario description?

Scenario descriptions affect the names of error screenshot files and report headings, so try to write something unique that you will recognize later.

<!-- I think this info is useful, but I'm not sure where it should go.
## About writing tests

**Who?**

It is easier to write the tests if you have access to the YAML code and can understand a bit about docassemble.

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

- [ALKilnInThePlayground](https://github.com/SuffolkLITLab/docassemble-ALKilnInThePlayground) is the package that will let you run tests directly on your server
- [ALKiln's own repository](https://github.com/SuffolkLITLab/ALKiln)
- The [developer test setup interview's repo](https://github.com/SuffolkLITLab/docassemble-ALKilnSetup)
