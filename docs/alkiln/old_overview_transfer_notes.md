This file is to keep track of the progress transferring content to the new docs


## Steps

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







## See GitHub test results

In GitHub, to see the list of previous tests or running tests, go to your repository's [GitHub Actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity).

One of the rows should have the text of the commit you just made. The test may have a yellow dot next to it. That means it's still running. When the dot has turned into a red 'x' or a green checkmark, tap on the name to go to the test's summary page.

To see the output text of the test run online, its logs, follow [these GitHub instructions](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs).

ALKiln also creates files and folders showing the output of the tests.
In GitHub, you can [download these GitHub "artifacts"](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts) at the bottom of the summary page for that run of tests.







## Your workflow file

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
