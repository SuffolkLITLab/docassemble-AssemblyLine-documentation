---
id: alkiln_security
title: ALKiln test security and saftey
sidebar_label: WIP Security
slug: /alkiln/security
---


:::warning
WIP
:::

This page will help you learn some steps you can take to protect yourself and your users as you develop tests with ALKiln. It will also talk about the security practices ALKiln uses.

Using a third-party library or package is always a risk. That said, we take measures to help secure our code, such as protecting our release branches and requiring reviews before merging any new code.

In addition, here are some actions you can take to manage the security of the tests, as well as general guidelines for server security.


## Disable repository tests {#disable-repo}

If you become worried about the tests, there are different ways you can stop the tests from running.

In order to run, the test setup interview added a "workflow" file to your repository. GitHub sometimes calls that an "action". That's what triggers the tests. You can manage that workflow, and your actions in general, in GitHub.

[GitHub lets you disable workflow files](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow) like the ones you have for running ALKiln tests in your `.github/workflows` repository directory.

Another option is to disable or limit all tests, all actions, in your repository. GitHub's documentation for managing repository actions is at https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository.

You can also [delete the file from your repository completely](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository). If you go to the front page of your repository in GitHub, the file is in the `workflows` folder of the `.github` folder. It is often called `run_form_tests.yml`.

Alternatively, you can comment out all the code in that file by [editing it](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) to add `#` at the start of every line.


## Disabling tests for the whole organization {#disable-org}

You can disable these tests, or any workflows (actions), for a whole organization. GitHub's documentation for managing organization actions is at https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization.


## Use a separate server just for testing

Keep the testing server completely separate from production server so that the tests never show sensitive information to potential malicious actors. To avoid running tests on your production server, use the testing server's address in the `SERVER_URL` GitHub secret.

In addition, some general good practices for a testing server are:

* Never share API keys or passwords between servers
* Periodically clear out the testing server and start a new docker container from scratch
* Occasionally check the testing server to make sure it's not running resource stealing code (blockchain miners, etc.)
* Avoid using a link to a page on your production server in any of your tests

<!-- TODO: Add link to GitHub secrets for `SERVER_URL` -->


## Avoid sensitive information in test files

Avoid putting sensitive information in the test files. Those are the files in your Sources folder that end in `.feature`. Anyone who can see your GitHub repository can see those files and the information in them. If you need to use sensitive information in your tests, use a GitHub secret.

<!-- TODO: Add a link to arbitrary GitHub secrets for tests -->


## Isolated server tests {#isolated-server}

[Isolated server tests](alkiln/setup#isolated-server-how) are useful for security if you use them correctly.

For example, you have to avoid using hard-coded urls that are on your server. That is, avoid using `https://my-server.com` and interviews or other pages there. That will send the tests to your server, which goes around all these precautions and makes them less secure again.


