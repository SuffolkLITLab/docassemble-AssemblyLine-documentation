---
id: automated_testing
title: Automated Integrated Testing
sidebar_label: Automated Testing
slug: /automated_integrated_testing
---

<!-- original: https://docs.google.com/document/d/1hkNr78mrU3Ha98tPUL4OKWi3eNnt-1Sba7L8470u06g/edit# -->

## (Pilot project) Automated/Integrated test running with the Assembly Line project


[TOC]





## What does this look like right now? {#what-does-this-look-like-right-now}

Updated 2021/01/13

The developer will write/edit tests in Github. The developer can run tests manually when they want with extra settings. These types of actions will trigger a test:



*   When a developer hits ‘Commit’ in docassemble
*   When a developer pushes new code
*   When a developer edits any code in Github and commits. This includes editing test files.

The current repository: [https://github.com/plocket/docassemble-cucumber](https://github.com/plocket/docassemble-cucumber)


## Status {#status}

Updated 2021/01/13

While automated testing is important, we still have to figure out:



1. What does test-writing need to look like for developers to actually write and update tests? Is it even a possibility?
2. What kinds of testing functionality will be most commonly needed?




## Quick reference {#quick-reference}

Updated 2021/01/16

What do you need to write for each kind of field that the user will see?


### Example code {#example-code}


```
Feature: Health check
Scenario: User is a bit strange
  Given I start the interview at "my_interview_YAML_file_name"
  And the user gets to the question id "admit_to_ward" with the data:
    | var | choice | value |
    | fav_flav || Mint mango |
    | fav_flav || mint_mango |
  And I download "admit.pdf"
```



### **Required** information for each type of field {#required-information-for-each-type-of-field}

With examples of a sentence you might write for each of those fields (if/when you’re not using the ‘story’ table). Case of letters (uppercase or lowercase) is important (though we can improve that if this framework really gets used).

Sentences that include multiple options separated by a slash (/) like~~ stuff like~~ "True/False" just mean that those are the only choices you can put in that place in that sentence.


<table>
  <tr>
   <th>Field type</th>
   <th>Variable name</th>
   <th>Choice name</th>
   <th>Value to set</th>
   <th>Sentence-type example</th>
   <th>Story table</th>
  </tr>
  <tr>
   <td>Text (any)</td>
   <td>yes</td>
   <td>no</td>
   <td>yes</td>
   <td>When I set the var "fav_flav" to "Mint mango"</td>
   <td><code>| fav_flav || Mint mango |</code></td>
  </tr>
  <tr>
   <td>Dropdown</td>
   <td>yes</td>
   <td>no</td>
   <td>yes</td>
   <td>When I set the var “fav_flav” to “Mint mango”</td>
   <td><code>| fav_flav || mint_mango |</code></td>
  </tr>
  <tr>
   <td>Radio (yes/no)</td>
   <td>yes</td>
   <td>yes</td>
   <td>(for consistency)</td>
   <td>When I set the "True/False" choice of var "has_ears" to "true"</td>
   <td><code>| False | has_ears | true |</code></td>
  </tr>
  <tr>
   <td>Radio (other)</td>
   <td>yes</td>
   <td>yes</td>
   <td>(for consistency)</td>
   <td>When I set the "blue" choice of var "hair_color" to "true"</td>
   <td><code>| hair_color | blue | true |</code></td>
  </tr>
  <tr>
   <td>Checkbox (none of)</td>
   <td>yes</td>
   <td>(for clarity)</td>
   <td>yes</td>
   <td>When I set the "None of the above" choice of var "foot_types" to "true/false"</td>
   <td><code>| foot_types | None | true |</code></td>
  </tr>
  <tr>
   <td>Checkbox (yes/no)</td>
   <td>yes</td>
   <td>no</td>
   <td>yes</td>
   <td>When I set the var "elephants_have_ears" to "true/false"</td>
   <td><code>| elephants_have_ears || false |</code></td>
  </tr>
  <tr>
   <td>Checkbox (other)</td>
   <td>yes</td>
   <td>yes</td>
   <td>yes</td>
   <td>When I set the "kittens" choice of var "favorite_things" to "true/false"</td>
   <td><code>| favorite_things | kittens | false |</code></td>
  </tr>
  <tr>
   <td>Buttons (yes/no) (unsure of this one)</td>
   <td>yes</td>
   <td>yes</td>
   <td>(for consistency)</td>
   <td>When I set the "True/False/None" choice of var "agrees" to "true"</td>
   <td><code>| agrees | False | true |</code></td>
  </tr>
  <tr>
   <td>Buttons (continue)</td>
   <td>yes</td>
   <td>yes</td>
   <td>(for consistency)</td>
   <td>When I set the "True" choice of var "asks_questions" to "true"</td>
   <td><code>| asks_questions | True | true |</code></td>
  </tr>
  <tr>
   <td>Buttons (other)</td>
   <td>yes</td>
   <td>no</td>
   <td>yes</td>
   <td>When I set the var "person_type" to "tenant"</td>
   <td><code>| person_type || tenant |</code></td>
  </tr>
</table>



#### Story Table (variable table) example by itself {#story-table-variable-table-example-by-itself}

All the same fields as the requirements table above and in the same order:


```
Feature: Health check
Scenario: User is a bit strange
  Given I start the interview at "my_interview_YAML_file_name"
  And the user gets to the question id "admit_to_ward" with the data:
    | var | choice | value |
    | fav_flav || Mint mango |
    | fav_flav || mint_mango |
    | False | has_ears | true |
    | hair_color | blue | true |
    | foot_types | None of the above | true |
    | elephants_have_ears || false |
    | favorite_things | kittens | false |
    | agrees | False | true |
    | asks_questions | True | true |
    | person_type || tenant |
```


Don’t worry if you accidentally put an extra value in a column that is not a required column for that field-type. It should work just fine. It might be a little confusing for you to look at later when you don’t remember what you were doing, though.

Extra variables in the table also are not a problem. You can have as many extra rows as you want and it won’t get in the way of testing with stories/tables.


### Special story table rows {#special-story-table-rows}


```
WARNING: As of 2021/01/17 these tests can only handle ONE SIGNATURE ROW per 'story' table. Sorry about that, folks. See Github issue.
```



#### Signing {#signing}

For a signature page, use a signature row:


```
    ||| /sign |
```


Signing cannot be set for any specific variable or in any particular order. After running into a signature page, a signature row will be used up. If your interview has 3 signatures, you need 3 signature rows.


```
Feature: Signatures all the way down
Scenario: This interview only has signatures, but it has three of them.
  Given I start the interview at "my_interview_YAML_file_name"
  And the user gets to the question id "admit_to_ward" with the data:
    | var | choice | value |
    ||| /sign |
    ||| /sign |
    ||| /sign |
```



### Other **Steps** you can use {#other-steps-you-can-use}

**Steps** here can work in multiple languages unless there’s a note that says they can’t. Stuff in double quotes can be whatever you want it to be.


#### General-use sentences {#general-use-sentences}


<table>
  <tr>
   <td><strong>Step sentence</strong></td>
   <td><strong>More info</strong></td>
  </tr>
  <tr>
   <td><code>Given I start the interview at "z"</code></td>
   <td>"z" is the name of the YAML file you run when you start the interview.</td>
  </tr>
  <tr>
   <td><code>And I take a screenshot named "z"</code></td>
<p>
<code>Or</code>
<p>
<code>And I take a screenshot</code></td>
   <td>A way to try to troubleshoot. Images created like this will be in the <a href="https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts">Github ‘artifacts’</a> of the <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity">action</a> after the tests finish. This testing framework gives each screenshot a unique name, so you can take as many as you want.</td>
  </tr>
  <tr>
   <td><code>And I wait 2 seconds</code></td>
   <td>"2" can be any number under 120. You can use it to give something time to load. If you want to wait longer, you can add two or three of these <strong>Steps</strong> in a row. It only works in between other <strong>Steps</strong> as a separate <strong>Step</strong> - it is unable to extend a previous <strong>Step</strong>. We’re working on how to let the developer add extra-long wait times to some <strong>Steps</strong>.</td>
  </tr>
  <tr>
   <td><code>I download "z.zip"</code></td>
   <td>“z.zip” can be any file name with any extension. It should be a page element that the user can click on to download something. Files created like this will be in the <a href="https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts">Github test ‘artifacts’</a> of the <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity">action</a> after the tests finish. It should not take more than 2 minutes to download. We plan to make that more flexible later if this framework seems useful to people.</td>
  </tr>
  <tr>
   <td><code>Then I will be told an answer is invalid</code></td>
   <td>Checks that some kind of message is visible on the page telling the user that their answer was invalid.</td>
  </tr>
  <tr>
   <td><code>Then the "z.com" link opens a working page</code></td>
   <td>"z.com" can be any address. Checks that the link is on the page and that it leads to a working page. This can be a way to check that something like an ‘Escape’ link is working.</td>
  </tr>
  <tr>
   <td><code>And I am using a mobile/pc</code></td>
   <td>Not as fancy as you think. There are some features that simulate a phone, but we think it is not fully featured. For headers used, see the <a href="#bookmark=id.9wdh1mwnt9uu">Specs section</a>. Yeah, this says ‘I’ instead of ‘user’. We’re not paragons of consistency… yet…</td>
  </tr>
</table>



#### Very controlled test **Steps** {#very-controlled-test-steps}

These are usually not useful, but might help if you need to get very fine-grained with the behavior of the test. Some of them are very limited in their use.


<table>
  <tr>
   <td><strong>Step sentence</strong></td>
   <td><strong>More info</strong></td>
  </tr>
  <tr>
   <td><code>When I tap to continue</code></td>
   <td>For ‘continue’ buttons that don’t have a variable name</td>
  </tr>
  <tr>
   <td><code>Then the question id should be "z"</code></td>
   <td>"z" is the id of the question. This can help print useful errors to the console when something goes wrong and helps keep track in your code.</td>
  </tr>
  <tr>
   <td><code>Then I arrive at the next page</code></td>
   <td>Checks the url of the page has changed. For example, the user was able to continue.</td>
  </tr>
  <tr>
   <td><code>Then I can't continue</code></td>
   <td>Checks that the url is the same since the last <strong>Step</strong>. You can test whether the interview correctly stopped a user from going on when they hadn’t filled in enough information and other such things.</td>
  </tr>
  <tr>
   <td><code>Then I SHOULD see the phrase "z"</code></td>
   <td>ONLY WORKS IN ONE LANGUAGE. Will not work to test translations.</td>
  </tr>
  <tr>
   <td><code>Then I should NOT see the phrase "z"</code></td>
   <td>ONLY WORKS IN ONE LANGUAGE. Will not work to test translations.</td>
  </tr>
  <tr>
   <td><code>And I set the name of "users[0]" to "Uli Ula Ulther III"</code></td>
   <td>For the variable name given, this fills in an AssemblyLine 4-field name question with the 4-part name given. The name suffixes are limited to certain choices. See AssemblyLine files.</td>
  </tr>
  <tr>
   <td><code>And I set the address of the var "tenant" to "112 Southampton St., Unit 1, Boston, MA 02118"</code></td>
   <td>For the variable name given, this fills in an AssemblyLine 5-field address question with the 5-part address given. It can be any address you want that matches the format shown, commas and all. See AssemblyLine files.</td>
  </tr>
</table>



### Specs {#specs}

Updated 2021/01/13


#### Devices {#devices}

Not as fancy as you might want. Uses some features, but we’re not sure how fully featured it is.

**mobile:** Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36

**pc:** Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36




## Set up testing for your repo (todo) {#set-up-testing-for-your-repo-todo}



1. Add [SECRETS](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) based on an account that is on the server you will be testing. Copy then **Name** exactly as you see it here:

<table>
  <tr>
   <td>
<strong>Name</strong></td>
   <td><strong>Value</strong></td>
  </tr>
  <tr>
   <td>PLAYGROUND_EMAIL</td>
   <td>email used to log into that account</td>
  </tr>
  <tr>
   <td>PLAYGROUND_PASSWORD</td>
   <td>password used to log into that account</td>
  </tr>
  <tr>
   <td>PLAYGROUND_ID</td>
   <td>To see this, log into that account and run an interview in the playground. Look at the URL. It will have this anatomy:
<p>
<a href="https://some-server.org/interview?i=docassemble.playground1234ProjectName%3Afile_name.yml">https://some-server.org/interview?i=docassemble.playground1234ProjectName%3Afile_name.yml</a>
<p>
“1234” is the spot where you will find your id. See what number yours is and type that as the value.</td>
  </tr>
</table>




2. Contact someone from the [testing repo](https://github.com/plocket/docassemble-cucumber). Either:
    1. Give them permissions to push to a new branch on your repository or
    2. Make a new branch on your repo for adding this testing framework. Copy the files you are told to. Edit the file in the way you are told. Commit those files. You should end up with these additional files and folders:
        1. testing/features/example.feature
        2. .github/workflow/run_form_tests.yml
        3. package.json
        4. .gitignore
3. Merge that branch into your default branch (usually main or master)
4. [You can now see the tests running](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity).

If you’re only editing in GitHub you can start writing your tests and committing them to see how they go.

If you’re writing your tests locally, you will need to make a .env file that will have those same environment variables in them. Your .env file should look like this:


## Create a test {#create-a-test}


### Create a test file {#create-a-test-file}



1. Either [in GitHub](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository) or in your own editor, open the folder ‘tests/features’
2. Make a new file.
3. Add this code:

    ```
Feature: Feature description

To add:
[ ] Child HAS a guardian ad litem
[ ] Child does NOT have a guardian ad litem


```


4. Replace ‘Feature description’ with a description of the purpose of the tests in this file.
5. Delete the text under that or replace it with notes you have. The example shows how you can add a checklist of situations you might want to remember to cover in here.
6. Name the file. Example: 1_child.feature
    1. Always end the file with ‘.feature’.
    2. Use a descriptive name.
7. Add **Scenarios**/**Examples** to the file (see how you can [generate an interview Scenario from a completed interview](#bookmark=id.8qqq5w9ws641) below)
8. [Save/commit the file with a commit message](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository). Something like ‘Add examples for a parent with one child’
9. [Check to see if your code passes or not](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity).


### Generate code from an interview {#generate-code-from-an-interview}

Updated 2021/01/17

Generate one ‘story table’ in an **Example**/**Scenario**: [https://repl.it/@plocket/generatetestsfromobj#index.js](https://repl.it/@plocket/generatetestsfromobj#index.js)


#### Generate the code {#generate-the-code}



1. Decide on the values and branching path that you want to be able to automatically test in the future.
2. Go through your interview following that path and with those values all the way to the page you want to end on.
3. Take note of the question **id** on the final page.
4. Tap the ‘Sources’ link in the header of that final page.
5. Tap on the ‘Show all variables and values’ link just under the ‘Readability’ chart.
6. Select and copy all the contents on that page
    1. Mac: `cmd + a` then` cmd + c`
    2. PC: `ctrl + a` then `ctrl + c`
7. [Tap this link](https://repl.it/@plocket/generatetestsfromobj#da_data.json)
8. WARNING: IF YOU LEAVE THIS PAGE your changes will not be saved.
9. After the next step, a popup will appear. Just hit the ‘x’ in the circle outside the box on the top right.
10. Select all the text on that page and then paste what you copied from the variables and values page.
    3. Mac: `cmd + a` then` cmd + v`
    4. PC: `ctrl + a` then `ctrl + v`
11. You’ll see the pop up asking you to join. Just close it by hitting the ‘x’ in the circle outside the box on the top right.
12. In the left column, click on ‘index.js’
13. In the header, click on the ‘Run’ button. It should be near the center.
14. Copy the output that will show up in the ‘output’ column on the right.
15. Paste that text into your test file somewhere under the **Feature:** description.
16. Change the fake description of the **Scenario** to describe what will be specifically covered by this story.
17. Change the fake question id to be the real question id of that final page.
18. Change the fake YAML file name to be the actual name of the YAML file that starts your interview.
19. [Save/commit the file](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository).
20. [Check to see if your code passes or not](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity).


#### Generating data again using the same repl.it page {#generating-data-again-using-the-same-repl-it-page}

If you already ran the code once and there is still output text in the column on the right, make sure you hit the hard-to-see gray ‘delete’ or ‘x’ button in the top right of the ‘output’ column on the right.


#### Make new tests from that code {#make-new-tests-from-that-code}



1. Copy the code of the **Scenario**/**Example**.
2. Move to above that **Scenario**/**Example** or below the bottom of the whole **Scenario**/**Example**.
3. Delete the **Scenario**/**Example** description.
4. Add ‘TODO: ‘ to the description, then the text that describes what you will test.
5. Change the values of the variables that need changing.
6. When you’re done, remove the ‘TODO: ‘ from the **Scenario**/**Example** description.
7. [Save/commit the file](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository).
8. [Check to see if your code passes or not](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity).




## Failing tests {#failing-tests}

Updated 2021/01/13

Look at the [results of your tests](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity). Some of the error messages may tell you more. Also download the [Github test ‘artifacts’](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts) and see if any of those files give you a clue.


### The tests fail at the very first Step {#the-tests-fail-at-the-very-first-step}



1. Check the ‘Run npm run setup’ line right above the failed tests. Click to expand it and make sure that setting up the interview didn’t fail. If it did, try running it again.
2. Manually [make a new Project](https://docs.google.com/document/d/1pj1DFIhzzwB6raeCytnmPSR41WfNvG-T9GYPsf1wOsA/edit#heading=h.8yw6hi5hgw1d) on the server and [pull the code](https://docs.google.com/document/d/1pj1DFIhzzwB6raeCytnmPSR41WfNvG-T9GYPsf1wOsA/edit#heading=h.yve8jwod1owz) from the exact same branch into that Project. Manually run the file that is named in your test and double check that it is working the way you expect it to.
3. Make sure that the file you named in your `Given` **Step** is the right file.
4. Have you changed the server where you were running your code? Check your repository’s code in the .github/workflows/run_form_tests.yml file. Make sure the `BASE_URL` in there is the correct one for your server. [Edit it](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository) if it is the wrong one.
5. Contact someone who might know more.


### Two tests on the same branch failed at the same time {#two-tests-on-the-same-branch-failed-at-the-same-time}

IF YOU TRIGGER TWO TESTS ON THE SAME BRANCH VERY CLOSE TOGETHER, both tests might fail. You’ll have to rerun the tests. When you’ve pushed/committed, try to wait until one test has finished running before pushing/committing again. You can see [when a test has finished running on the actions page](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity). You can also[ cancel a test](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/canceling-a-workflow).

If we see that people are finding this framework useful, we can improve on that.


### The test failed on or after ‘upload error artifacts’ {#the-test-failed-on-or-after-‘upload-error-artifacts’}

Something probably went wrong with Github. Or maybe they have a maximum amount that they can download that we haven’t yet dug up in their documentation. Try rerunning the tests and, if it fails the same way a second time, get in touch with us.


### The error says it “timed out“ {#the-error-says-it-“timed-out“}

That’s a stock system error. Some **Step** took too long to finish in a way for which we have not yet created a custom error message or cannot detect. It is often a page that took too long to load. It sometimes happens when the Project got deleted in the middle of the test, or when the [`Run npm run setup` phase doesn’t work correctly](#bookmark=id.y1ibk27fo4jy).


### Some other mysterious error {#some-other-mysterious-error}



1. You can rerun the test
2. Try to search for the text of the error online (don’t spend more than 20 min on this, though)
3. Ask one of us. Remember that this framework is under development. Something might be wrong with our code.




## Cucumber keywords we use {#cucumber-keywords-we-use}

Updated 2021/01/16

We are using a library called cucumber. It is based on a library called gherkin.


### We are doing it wrong. On purpose. {#we-are-doing-it-wrong-on-purpose}

We are NOT using cucumber as intended. We do some things a little differently. We will try to let you know which ones.

Cucumber’s main purpose is to make it easier to discuss the behavior of a tool with non-coders so everyone can understand what is supposed to happen. Cucumber specifications are supposed to show the big picture. They are supposed to be written for one specific project. Usually, the coders would write complex and specific code so that the specifications (**Steps**) that people read can give a really quick, clear picture of what is going on.

Usually the **code is specific and the Steps are general.**

For example, they might want to be able to write this sentence:


```
  When a mother with three children wants her address impounded
```


We are not writing specifications for a single interview, though. We also are not writing specifications that show the big picture.

We are writing a _testing_ framework that can be used with every docassemble interview. We flip things a bit.

For us our **code has to be general and the Steps are specific.**


```
  When I tap to continue
```



### `Feature` {#`feature`}

It is generally best to use documentation that a library creates for itself so that it stays up-to-date: [https://cucumber.io/docs/gherkin/reference/#feature](https://cucumber.io/docs/gherkin/reference/#feature). Let us know if we should add more information.


### `Scenario`/`Example` {#`scenario`-`example`}

It is generally best to use documentation that a library creates for itself so that it stays up-to-date: [https://cucumber.io/docs/gherkin/reference/#example](https://cucumber.io/docs/gherkin/reference/#example). Let us know if we should add more information.

What we do differently:

We often use many more than 3 to 5 **Steps** in a **Scenario** or **Example**. [Like we said before](#bookmark=id.lm0ajwvdd3es), because we’re building a testing framework, our **Steps** are much more specific.


### `Step` keywords {#`step`-keywords}

We use these **Step** keywords: ‘Given’, ‘And’, ‘When’, and ‘Then’.

It is generally best to use documentation that a library creates for itself so that it stays up-to-date: [https://cucumber.io/docs/gherkin/reference/#steps](https://cucumber.io/docs/gherkin/reference/#steps). Let us know if we should add more information.

What we do differently:

You can repeat **Steps** any time during a **Scenario**. Just write what the test should do. Something like this will work just fine:


```
  And I wait 30 seconds
  And I wait 10 seconds
```





## Types of tests {#types-of-tests}


### Make sure user cannot continue (story tables) {#make-sure-user-cannot-continue-story-tables}

A story table won’t work 




## Story Tables (todo) {#story-tables-todo}

More details about what ‘story tables’ are and how they work




## **Steps** {#steps}

A **Step** is one instruction that you can give to the test. Each of these steps is something we’ve programmed specifically for docassemble tests.

It is generally best to use documentation that a library creates for itself so that it stays up-to-date: [https://cucumber.io/docs/gherkin/reference/#steps](https://cucumber.io/docs/gherkin/reference/#steps). Let us know if we should add more information.


### What a **Step** looks like {#what-a-step-looks-like}

Step syntax.

**Steps** come after their **Scenario:** row and are indented one level more than their **Scenario:** row. You have to start each **Step** with ‘Given’, ‘And’, ‘When’, or ‘Then’. Those words are interchangeable - you can use whichever one you want. 

Each **Step** is a sentence. Sometimes a **Step** has more information right under it, like with our story tables. That information is still part of the same step. In this example there are three steps and the indentation for each **Step** has been highlighted in green:


```
Feature: A description of the purpose of the tests in this file.
Scenario: A description of what's being specifically tested in this example.
  Given I start the interview at "my_interview_YAML_file_name"
  And the user gets to the question id "admit_to_ward" with the data:
    | var | choice | value |
    | False | has_ears | true |
    | hair_color | blue | true |
    | foot_types | None of the above | true |
    ||| /sign |
  When I download "my_zip.zip"
```


The **Steps** are:



1. The line that starts with ‘Given’
2. The line that starts with ‘And’ which has a table in it
3. The line that starts with ‘When’

**Steps** CANNOT BE MIXED with each other. That is, an error will be caused if a story table **Step** has another **Step** inside it. This will cause an error:


```
Feature: A description of the purpose of this file.
Scenario: A description of what's being specifically tested in this example.
  Given I start the interview at "my_interview_YAML_file_name"
  And the user gets to the question id "page_4_id" with the data:
    | var | choice | value |
    | False | has_ears | true |
    | hair_color | blue | true |
  And I wait 20 seconds
    | foot_types | None of the above | true |
  When I download "my_zip.zip"
```


_(Why `page_id_4?` Because you started on page 1, you went up to page 3, then the ALKiln automatically tapped to continue. We can consider changing it if it becomes a common problem.)_

You might be able to do something like this instead:


```
Feature: A description of the purpose of this file.
Scenario: A description of what's being specifically tested in this example.
  Given I start the interview at "my_interview_YAML_file_name"
  And the user gets to the question id "page_2_id" with the data:
    | var | choice | value |
    | False | has_ears | true |
  When I set the "blue" choice of var "hair_color" to "true"
  And I tap to continue
  And I wait 20 seconds
  And the user gets to the question id "page_4_id" with the data:
    | foot_types | None of the above | true |
  When I download "my_zip.zip"
```





## Translation testing {#translation-testing}

A lot of **Steps** are language agnostic. That is, they don’t care about the language in your interview.


### WATCH OUT! {#watch-out}

Always give your `choices` values that are separate from their labels.

In docassemble, you can write `choices` a couple of different ways.

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


If your field is like the Bad example, the label of a choice is also its value and the translations will break the tests. This is because the label will be translated. Since the label is also the value, the value in the translated version of the interview will be different than the value you wrote in for your test.

If your field is like the Good example, the value of the choice should never get translated so it should always be the same and the tests will be happy.


### How to know if a **Step** is language agnostic {#how-to-know-if-a-step-is-language-agnostic}

A **Step** can work for any language as long as it does not depend on a word that will be translated. For example, if it:



1. Uses a variable name to set the value. Watch out for [special cases](#bookmark=id.3b9fid1tlalm).
2. Does not use a word on the screen at all. Example: And I wait for 1 second
3. Is only dependant on a word that is inside an element and never gets translated, like a link address or file name: And I download “my_file.zip”