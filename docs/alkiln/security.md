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


## Use a separate server just for testing {#testing-server}

**This is for:** Everyone

Keep the testing server completely separate from production server so that the tests never show sensitive information to potential malicious actors. To avoid running tests on your production server, use the testing server's address in the `SERVER_URL` GitHub secret.

In addition, some general good practices for a testing server are:

* Never share API keys or passwords between servers
* Periodically clear out the testing server and start a new docker container from scratch
* Occasionally check the testing server to make sure it's not running resource stealing code (blockchain miners, etc.)
* Avoid using a link to a page on your production server in any of your tests

<!-- TODO: Add link to GitHub secrets for `SERVER_URL` -->


## Avoid sensitive information in test files {#sensitive-info-general}

**This is for:** Any packages that have a repository in GitHub

Avoid putting sensitive information in the test files. Those are the files in your Sources folder that end in `.feature`. Anyone who can see your GitHub repository can see those files and the information in them.

If you need to use sensitive information in your tests:

- For tests running in GitHub, add a GitHub secret
- For ALKilnInThePlayground tests, add a variable in your docassemble configuration

(Want to add content or links to help this section? [Edit this file on GitHub](#:~:text=Edit%20this%20page).)

<!-- TODO: Add a link to arbitrary GitHub secrets for test value -->
<!-- TODO: Add a link to arbitrary config variables for test values -->


## GitHub secrets {#sensitive-info-github}

**This is for:** Any tests that run in GitHub

**To do this you MUST be:**

- Either the GitHub repository admin or
- the GitHub organization admin

These are the only people that can create GitHub secrets

**To do this it helps to know about:**

- GitHub secrets
- Workflow environment variables
- [Editing GitHub files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)

<!-- TODO: Rearrange - Maybe use this section to refer to another section that is more focused on setting arbitrary environment variables in general -->

Sometimes authors do need to pass sensitive information to their tests. For example, some tests require the "user" to log in, so the tests need to know the email and password for that user. You can do this securely by using [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) and adding environment variables to your repository's GitHub workflow file.

ALKiln will avoid taking error pictures or downloading the HTML of pages with that use these environment variables. The value of an environment variable will not appear anywhere in the report or in the console.

Right now Story Tables are unable to use GitHub secrets to set variables.

:::danger
Avoid manually taking pictures of pages with sensitive information. It is possible to trigger those pictures in Steps you write yourself, but we highly recommend against that for security reasons.
:::

1. Follow the [GitHub instructions](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to set one or more GitHub secrets. You can add these to one repository's secrets or you can add these to your organization's secrets[^org_secrets], whichever is right for you.

2. Go to the home page of your repository. Tap on the `.github` folder, then on `workflows` folder, then on the YAML file in there that runs the ALKiln tests.

3. It should include a line that looks similar to this:

```yml
jobs:
  interview-testing:
    runs-on: ubuntu-latest
    name: Run end-to-end tests
```

If this is the first environment variable you're adding, right below that last line add a new line like this:

```yml
    env:
```

4. Whenever you want to add a secret, add a new line under `env:` indented from `env:`:

```yml
      USER_PASSWORD: "${{ secrets.USER_PASSWORD }}"
```

`USER_PASSWORD` is just a placeholder in our example. You can name your secrets whatever you want to. Make sure the name here matches your GitHub secret name.

5. Write your Step and use the names of these secrets as the values.

<!-- TODO: put this in an appropriate place
If you're not worried about keeping the information secure, you don't have to use a GitHub secret - you can just put the value straight into your workflow file like this:

```yml
  MAX_SECONDS_FOR_SERVER_RELOAD: "300"
```

ALKiln will still avoid printing this value and avoid taking screenshots when it is used. There is no way ALKiln can tell which environment variables have sensitive information and which ones are safe.
 -->

Your code will end up looking something like the below:

```yml
# Other workflow code

jobs:
  alkiln-tests:
    runs-on: ubuntu-latest
    name: Run ALKiln tests
    env:
      USER_PASSWORD: "${{ secrets.USER_PASSWORD }}"

# Other workflow code
```

[^org_secrets] [GitHub organization secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-an-organization) can be useful if an organization wants to create a variable that all of its repositories will be able to use and avoid creating that secret in every individual repository.


## Disable repository tests {#disable-repo}

**This is for:** Any tests that run in GitHub

If you become worried about the tests, there are different ways you can stop the tests from running.

In order to run, the test setup interview added a "workflow" file to your repository. GitHub sometimes calls that an "action". That's what triggers the tests. You can manage that workflow, and your actions in general, in GitHub.

[GitHub lets you disable workflow files](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow) like the ones you have for running ALKiln tests in your `.github/workflows` repository directory.

Another option is to disable or limit all tests, all actions, in your repository. GitHub's documentation for managing repository actions is at https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository.

You can also [delete the file from your repository completely](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository). If you go to the front page of your repository in GitHub, the file is in the `workflows` folder of the `.github` folder. It is often called `run_form_tests.yml`.

Alternatively, you can comment out all the code in that file by [editing it](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) to add `#` at the start of every line.


## Disabling tests for the whole organization {#disable-org}

**This is for:** Any tests that run in GitHub

You can disable these tests, or any workflows (actions), for a whole organization. GitHub's documentation for managing organization actions is at https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization.


## Freeze the ALKiln framework version {#freeze-framework}

**This is for:** Any tests that run in GitHub

**To do this it helps to know about:**

- [Editing GitHub files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- GitHub workflow files
- GitHub action inputs
- [node versions](https://docs.npmjs.com/about-semantic-versioning)

The ALKiln framework lets you control the robot that goes through your interview answering questions. This is different from the ALKiln actions, which trigger GitHub to start your tests.

The workflow file we first create for you in the ALKiln setup interview always uses the latest major version[^versions] of the ALKiln framework. That major version is based on when you used the setup interview. As of March 2024, ALKiln is on major version 5. Tests that authors set up now will use the latest version 5 code. For example, version `5.10.1` as of March 12, 2024.

This means that the ALKiln framework you are using has all the latest bug fixes and new features. That can be a good thing, but it also means you might not be sure of exactly what code is running your tests.

There is a way to make sure to always use an exact version of the ALKiln framework, a version that has code and behavior that you are familiar with and feel comfortable with.

To "freeze" your ALKiln framework version in this way, you can instead reference a [specific ALKiln package version](https://www.npmjs.com/package/@suffolklitlab/alkiln?activeTab=versions) in your workflow <!-- TODO: add link --> file. Go to the code in your workflow file that looks similar to the below and add the `ALKILN_VERSION` input variable that you see here:

```yml
        uses: SuffolkLITLab/ALKiln@v5
        with:
          SERVER_URL: "${{ secrets.SERVER_URL }}"
          DOCASSEMBLE_DEVELOPER_API_KEY: "${{ secrets.DOCASSEMBLE_DEVELOPER_API_KEY }}"
          ALKILN_VERSION: "5.9.0"
```

Instead of "5.9.0", write the version you want to use.

When you want to update to a new version of the framework, you can check all the new changes to the code to make sure you feel comfortable with them before updating to a new node version.

:::tip
This is different than [the ALKiln action versions](#freeze-action). The ALKiln actions let you start your tests on GitHub.
:::

[^versions] ALKiln does its best to use [semantic versioning](https://semver.org/spec/v2.0.0.html).


## Freeze an ALKiln action version {#freeze-action}

**This is for:** Any tests that run in GitHub

**To do this it helps to know about:**

- [Editing GitHub files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- GitHub workflow files
- Git commit hash (sha)

ALKiln's actions let your workflow file <!-- TODO: add link --> trigger GitHub to start your tests. This is different from the actual ALKiln framework, which lets you control the robot that goes through your interview answering questions.

The workflow file we first create for you in the ALKiln setup interview always uses the latest ALKiln action code. As of March 2024, the setup interview uses the latest code of a branch on ALKiln called "v5" for its actions.

This means that your ALKiln action has all the latest bug fixes and new features to the actions. That can be a good thing, but it also means you might not be sure of exactly what code is starting your tests.

There is a way to make sure to always use an exact version of ALKiln's actions, a version that has code and behavior that you are familiar with and feel comfortable with.

To "freeze" your ALKiln action version in this way, you can instead reference a specific ALKiln git commit sha in your workflow file. When you want to update to a new version of the action code, you can check all the new changes to the code to make sure you feel comfortable with them before updating to a new commit sha.

1. Go to [ALKiln's repository](https://github.com/SuffolkLITLab/ALKiln). For example, for the v4 branch, you can go to https://github.com/SuffolkLITLab/ALKiln/commits/releases/v5.
2. Find the sha of a commit you need. <!-- Link to finding the commit sha or a description of such -->
3. In your repository's directory, go to .github/workflows and find the file running the tests. There's a line in there that look's something like this:

```yml
uses: suffolkLITLab/ALKiln@releases/v5
```

4. Change the text "releases/v5" to the commit sha.

When you want to update to a new version of an ALKiln action, update that sha manually.

:::tip
This is different than the [ALKiln framework version](#freeze-framework). The framework does more than just start your tests. It is the code that lets you control the robot that goes through your interview answering questions.
:::


## Isolated server tests {#isolated-server}

**This is for:** Isolated server tests that run in GitHub

[Isolated server tests](alkiln/setup#isolated-server-how) are useful for security if you use them correctly.

For example, you have to avoid using hard-coded urls that are on your server. That is, avoid using `https://my-server.com` and interviews or other pages there. That will send the tests to your server, which goes around all these precautions and makes them less secure again.


## See GitHub's security docs {#workflow}

GitHub has [documentation on some best practices for your workflow/action file](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions.


<!-- TODO:
## Docassemble server config variables {#sensitive-info-playground}

**This is for:** Tests running with ALKilnInThePlayground on your docassemble server

what you need
- ability to edit your server's config file

it would help to know
- Editing your server's config file

Add info to config file under `alkiln` key. e.g.

```yml
# Other config values
alkiln:
  USER_PASSWORD: 123password
```

Use that same name in your test.
ALKiln will log these anywhere.
ALKiln will not take pics of pages that use these.
You might be able to take pics yourself in some cases. Please don't do that.
 -->


## Things to worry about less

**This is for:** Any tests that run in GitHub

There are some parts of testing that might look less secure than they are.

When you run the tests in GitHub, you can see the logs of the test action's job and you can download the results of the test, or "artifacts". That may seem very exposed, but only people who have permissions on the repository, like administrators, collaborators, or moderators, can see or download that information.

If you are still worried about the logs and artifacts in GitHub, [you can delete the logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#deleting-logs) and [you can delete the artifacts](https://docs.github.com/en/actions/managing-workflow-runs/removing-workflow-artifacts).

