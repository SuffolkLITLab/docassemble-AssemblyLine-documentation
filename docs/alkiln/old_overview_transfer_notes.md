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

<!--
**Your test's status:** If your test has a green circle with a checkmark, the test has passed. If it has a red circle with an 'x', something went wrong. If it has a yellow circle, the test is still running.

**Summary page:** You can tap on the name of a test to be taken to its summary page. At the bottom, there might be items for you to download as zip files. GitHub calls those "artifacts" and ALKiln can create a few different kinds. You can read about artifacts in [GitHub's own documentation about artifacts](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts). Read about our specific artifacts in the sections below.

**Jobs page:** GitHub also has a page where you can more details about what happened during the test.

To see more details about how the test steps ran on GitHub, go to the left column. Tap on the first item under "Jobs".
-->








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
