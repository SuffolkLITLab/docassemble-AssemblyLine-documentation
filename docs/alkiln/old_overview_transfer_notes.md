This file is to keep track of the progress transferring content to the new docs





## Start



## Steps

### Observe things about the page

---

The `screenshot` Step will take a picture and download the HTML of the screen. In GitHub tests, it will be put in the GitHub action's [artifacts](#see-github-test-results).
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

### Other actions

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
- Information about the screens where ALKiln ran into errors or unexpected behavior, including:
    - Pictures when the error happened
    - The HTML, slightly modified so CSS styles will load locally
- A folder for each test (or Scenario) named using your Scenario description.
- A report for that specific Scenario, as well as pictures you took of screens and the associated HTML of that page, files you downloaded, and pictures of any errors it caused with its HTML.

### Error pictures and HTML files

ALKiln will try to take pictures of pages that run into errors. The names of those files use the id of the page where the error happened. There you might see that the test was unable to continue to the next page because required fields weren't filled, or that a variable wasn't defined. ALKiln avoids taking pictures of erroring pages when the page used GitHub secrets in case they contain sensitive information.

Each time ALKiln takes a picture, it also saves the HTML of the page; this HTML file will have the same name as the picture, but will end with `.html`.
You can open this HTML file in your browser to interact with the page and inspect the page's HTML further.
The page in your browser might not look like the picture, and you shouldn't expect it too.
However, in the HTML, you can look at what particular options might have been available in a drop down, or examine any accessibility errors.

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

If you are using a story table with index variables or generic objects, you need to add some code to the interview file where you set your [`default screen parts` block](https://docassemble.org/docs/initial.html#default%20screen%20parts).

<!-- This has to be a bit farther up than the code. For some reason the header isn't taken into account when jumping here. -->
<a name="trigger_variable_code"></a>

Add exactly this code to your `default screen parts` block to insert an invisible element in all your screens:

```yml
default screen parts:
  # This HTML is for ALKiln automated tests
  post: |
    <div data-variable="${ encode_name(str( user_info().variable )) }" id="trigger" aria-hidden="true" style="display: none;"></div>
```

Use that HTML exactly. No customizations.

If you already have something in your `post:`, just copy the `<div>` and paste it in after the other code. Putting it at the end can avoid messing up other HTML.

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

We recommend keeping the API key a GitHub secret for security reasons, but the server url can be typed in plainly. For example `SERVER_URL: "https://apps-test.example.com"`.

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

### Triggering GitHub tests

By default, the ALKiln setup interview makes sure that the tests are triggered when someone pushes code the repository. For example, when they press the 'Commit' button in docassemble. It also makes sure the tests can be [triggered manually](https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow#running-a-workflow).

There is a file in your repository that GitHub uses to trigger this workflow. To see it:

1. Go to your GitHub repository.
1. Tap on the `.github` folder, then on `workflows`, then on the YAML file in there that runs the ALKiln tests.
1. You can [tap to edit the file](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) if you want.

The object in your workflow file that defines the triggers is named `on`. You can think of it in a sentence - "on `push`, run this workflow". It looks something like this:

```yml
on:
  push:
  workflow dispatch:
    inputs:
      tags:
        required: False
        description: 'Optional. Use a "tag expression" specify which tagged tests to run (https://cucumber.io/docs/cucumber/api/#tag-expressions)'
```

The keys that trigger the workflow (e.g. `push` and `workflow_dispatch`) can be in any order.

#### Scheduled tests

You can also run these tests on a schedule - daily, weekly, monthly, or on any other interval. To run the tests on a schedule, you must add `schedule` to the `on`  object in your workflow file and give it an "interval" value. For example:

```yml
on:
  push:
  schedule:
    - cron: '0 1 * * TUE'
  # other stuff
```

The GitHub docs can tell you more about [triggering workflows on a schedule](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#scheduled-events). If you want to change the interval, [these examples of cron syntax](https://crontab.guru/examples.html) can help a lot.

If you've run the Setup interview more recently, you will already have this code in your file, though it will be inactive. You just have to remove the comment symbols (`#`) from the lines of code.

#### Pull requests

You can also trigger tests to run when someone makes a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) in GitHub.

In the `on` object in your workflow file, add the `pull_request` trigger key. For example:

```yml
on:
  push:
  pull_request:
  # other stuff
```

#### All together

After adding all those, your whole `on` section might look something like this:

```yml
on:
  push:
  workflow dispatch:
    inputs:
      tags:
        required: False
        description: 'Optional. Use a "tag expression" specify which tagged tests to run (https://cucumber.io/docs/cucumber/api/#tag-expressions)'
  pull_request:
  schedule:
    - cron: '0 1 * * TUE'
```

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

After that, you can add a Story Table or other Steps that will test your code. Save the new files in your Playground's Packages page and commit them to GitHub. From then on, GitHub will run that tests whenever you commit, or push, to GitHub.

### How do I add a new test to an existing test file?

To add a new test to the existing file you need:

1. The keyword `Scenario:` with a description.
1. The step that loads the interview's page: `Given I start the interview at`. You must use it before you fill out any fields.

Example:

```
Scenario: I allow unsupervised visitation
  Given I start the interview at "restraining_order.yml"
```

After that, you can add the story table or other Steps that will test your interview.

Make sure to leave the `Feature:` line at the very top of the file. Avoid repeating the `Feature:` key anywhere else in the file.

### Why should I write a Scenario description?

`Scenario` descriptions affect the names of error screenshot files and report headings, so try to write something unique that you will recognize later. It will help you identify what happened with each test.

### When do tests run?

GitHub tests run when you commit your files to GitHub. That might be when you hit the 'Commit' button on the Packages page. It can also happen when you edit, add, or delete files in GitHub itself.

If you know how to use GitHub [actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity), you can also run the tests manually from GitHub actions with some more options.

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

## Feedback

Give us feedback and propose ideas by making issues at https://github.com/SuffolkLITLab/ALKiln/issues.

## Built with

Kiln uses cucumberjs, puppeteerjs, cheerio, and runs the assertions using mocha and chai libraries.

Even though this is built using [cucumberjs](https://cucumber.io/), this framework has a different, less lofty, purpose. cucumber focuses on BDD (behavior driven development). This framework mostly deals with regression testing and other conveniences.

## Repositories

- [ALKilnInThePlayground](https://github.com/SuffolkLITLab/docassemble-ALKilnInThePlayground) is the package that will let you run tests directly on your server
- [ALKiln's own repository](https://github.com/SuffolkLITLab/ALKiln)
- The [developer test setup interview's repo](https://github.com/SuffolkLITLab/docassemble-ALKilnSetup)
