---
id: alkiln_security
title: Keeping ALKiln test secure
sidebar_label: Security
slug: /alkiln/security
---

This page will help you learn some steps you can take to protect yourself and your users as you develop tests with ALKiln. It will also talk about the security practices ALKiln uses.

Using a third-party library or package is always a risk. That said, we take measures to help secure our code, such as protecting our release branches and requiring reviews before merging any new code.

In addition, here are some actions you can take to manage the security of the tests, as well as general guidelines for server security.


## Use a separate server just for testing {#testing-server}

**This is for:** Everyone

Keep the testing server completely separate from production server so that the tests never show sensitive information to potential malicious actors.

You should:

- Avoid running tests on your production server, use the testing server's address in the `SERVER_URL` GitHub secret <!-- TODO: Add link to GitHub secrets for `SERVER_URL` -->
- Avoid installing ALKiln on your production server, avoid installing the ALKilnInThePlayground package on your production server
- Avoid using a link to a page on your production server in any of your tests

In addition, some general good practices for a testing server are:

- Never share API keys or passwords between servers
- Periodically clear out the testing server and start a new docker container from scratch
- Occasionally check the testing server to make sure it's not running resource stealing code (blockchain miners, etc.)

If you do this, [the tests will be unable to affect your production server](#production).


## Disable a single test or test file {#disable-test}

**This is for:** Everyone

To fully disable a test or test file - a file in your "Sources" ending in `.feature` - you must edit or delete that file.

You can comment out all the code in a test by editing it in your Playground or [editing it in GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) to add `#` at the start of every line of the test.

You can also comment out every line in a test file.

Alternatively, you can [delete a test file from your repository completely](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository). It is in your sources folder.

<!-- This should be in the tags section (when it exists) and we can put a link in here: If you want to avoid running one test, you can use tags (include link when ready) and a tag expression with "not" in it. For example: `not @test5`. You can do this in ALKilnInThePlayground or by running your tests manually in GitHub. You can also create a TAGS (TAG_EXPRESSION?) environment variable in your workflow file. -->


## Disable repository tests {#disable-repo}

**This is for any packages that:** have GitHub tests

If you become worried about the tests, there are different ways you can stop the tests from running.

In order to run, the test setup interview added a "workflow" file to your repository. GitHub sometimes calls that an "action". That's what starts the tests. You can manage that workflow, and your actions in general, in GitHub.

[GitHub lets you disable workflow files](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow) like the ones you have for running ALKiln tests in your `.github/workflows` repository directory.

Another option is to disable or limit all tests, or all actions, in your repository. You can read [GitHub's documentation for managing repository actions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository) for more information.

You can also [delete the workflow file from your repository completely](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository). If you go to the front page of your repository in GitHub, the file is in the `workflows` folder of the `.github` folder. It is often called `run_form_tests.yml`.


## Disabling tests for the whole organization {#disable-org}

**This is for any packages that:** have GitHub tests

You can disable ALKiln tests, or any workflows (actions), for a whole organization. GitHub's documentation for managing organization actions is at https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization.


## Use GitHub's recommended workflow practices {#workflow}

**This is for any packages that:** have a repository in GitHub

GitHub has documentation about [keeping your GitHub workflows secure](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions). We cover some of that content in here, but you can read that documentation for more.

You can specifically look at [GitHub's recommendations for using third-party actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions), like the ALKiln actions.


## Protect your default branch {#default-branch}

**This is for any packages that:** have a repository in GitHub

**To do this you MUST be:**

- Either the GitHub repository admin or
- the GitHub organization admin

You can protect your packages from unintended changes or changes by new collaborators by protecting your default branch.

Your default branch is usually called "main". That branch usually has the code that you run on your server and that other packages use. For that reason, many packages [protect their default branch from unexpected changes](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

For example, you can require that:

- Contributors make new branches when they edit code
- Contributors make a pull request before new code can be added to the main branch
- Administrators have to approve the pull request before that code can be merged

You can allow administrators to skip these restrictions if you want.


## Avoid sensitive information in package files {#sensitive-info-general}

**This is for any packages that:** have files that can be seen by the public

Avoid putting secure information in files that others can see.

If you have a repository on GitHub, avoid putting sensitive information in any of your files, including your test files. Those are the files in your Sources folder that end in `.feature`. Also avoid putting sensitive information in your workflow files. Anyone who can see your GitHub repository can see those files and the information in them.

If you need to use sensitive information in your tests:

- For tests running in GitHub, [add a GitHub secret](#sensitive-info-github)
- For ALKilnInThePlayground tests, [add a variable in your docassemble configuration file](#sensitive-info-playground)


## Use sensitive information in GitHub tests {#sensitive-info-github}

**This is for any packages that:** have GitHub tests

**To do this you MUST be:**

- Either the GitHub repository admin or
- the GitHub organization admin

These are the only people that can create GitHub secrets

**To do this it helps to know about:**

- GitHub secrets
- Workflow environment variables
- [Editing GitHub files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)

<!-- TODO: Rearrange - Maybe use this section to refer to another section that is more focused on setting arbitrary environment variables in general -->

Sometimes authors do need to pass sensitive information to their tests. For example, some tests require the "user" to log in, so the tests need to know the email and password for that user. In GitHub, you can do this securely by using [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) and adding environment variables to your repository's GitHub workflow file. You can also read about [how to use sensitive information with ALKilnInThePlayground tests](#sensitive-info-playground).

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
      ALKILN_USER_PASSWORD: "${{ secrets.ALKILN_USER_PASSWORD }}"
```

`ALKILN_USER_PASSWORD` is just a placeholder in our example. You can name your secrets whatever you want to. Make sure the name here matches your GitHub secret name.

5. Write your Step and use the names of these secrets as the values. For example:

```gherkin
    And I set the variable "very_secure_password" to "ALKILN_USER_PASSWORD"
```

<!-- TODO: put this in an appropriate place
If you're not worried about keeping the information secure, you don't have to use a GitHub secret - you can just put the value straight into your workflow file like this:

```yml
  ALKILN_MAX_SECONDS_FOR_SERVER_RELOAD: "300"
```

ALKiln will still avoid printing this value and avoid taking screenshots when it is used. There is no way ALKiln can tell which environment variables have sensitive information and which ones are safe.
 -->

Your workflow file code will end up including something like the below:

```yml
# Other workflow code

jobs:
  alkiln-tests:
    runs-on: ubuntu-latest
    name: Run ALKiln tests
    env:
      ALKILN_USER_PASSWORD: "${{ secrets.ALKILN_USER_PASSWORD }}"

# Other workflow code
```

We recommend that you start your environment variable names with "ALKILN_". That will help avoid conflicting with the environment variables of your operating system.

ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables. ALKiln avoids printing the value of an environment variable anywhere in the report or in the console.

Right now Story Tables are unable to use environment variables to set variables.

:::danger
Avoid manually taking pictures of pages with sensitive information. It is probably possible to trigger those pictures in Steps you write yourself, but we highly recommend against that for security reasons.
:::

[^org_secrets] [GitHub organization secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-an-organization) can be useful if an organization wants to create a variable that all of its repositories will be able to use and avoid creating that secret in every individual repository.


## Freeze the ALKiln framework version {#freeze-framework}

**This is for any packages that:** have GitHub tests

**To do this it helps to know about:**

- [Editing GitHub files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- GitHub workflow files
- GitHub action inputs
- [node versions](https://docs.npmjs.com/about-semantic-versioning)

The ALKiln framework lets you control the robot that goes through your interview answering questions. This is different from the ALKiln actions, which trigger GitHub to start your tests.

The workflow file we first create for you in the ALKiln setup interview always uses the latest major version[^versions] of the ALKiln framework. That major version is based on when you used the setup interview. As of March 2024, ALKiln is on major version 5. Tests that authors set up now will use the latest version 5 code. For example, version `5.10.1` as of March 12, 2024.

This means that the ALKiln framework you are using has all the latest bug fixes and new features. That can be a good thing, but it also means you might not be sure of exactly what code runs your tests.

[ALKiln itself already uses practices that protect you from malicious actors](#alkilns-precautions). There is a way to make sure to always use an exact version of the ALKiln framework, though, if you want. You can use a version that has code and behavior that you are familiar with and feel comfortable with.

To "freeze" your ALKiln framework version in this way, you can reference a [specific ALKiln package version](https://www.npmjs.com/package/@suffolklitlab/alkiln?activeTab=versions) in your workflow <!-- TODO: add link --> file. Go to the code in your workflow file that looks similar to the below and add the `ALKILN_VERSION` input variable that you see here:

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
This is different than [the ALKiln action versions](#freeze-actions). The ALKiln actions let you start your tests on GitHub. You do usually need to make sure these match, though, as they work together. When you update one, you should also update the other.
:::

[^versions] ALKiln does its best to use [semantic versioning](https://semver.org/spec/v2.0.0.html).


## Freeze an ALKiln action version {#freeze-actions}

**This is for any packages that:** have GitHub tests

**To do this it helps to know about:**

- [Editing GitHub files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- GitHub workflow files
- [Git commit ids](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits#about-commits) (usually called the commit sha or hash)

ALKiln's actions let your workflow file <!-- TODO: add link --> trigger GitHub to start your tests. This is different from the actual ALKiln framework, which lets you control the robot that goes through your interview answering questions.

The workflow file we first create for you in the ALKiln setup interview always uses the latest ALKiln action code. As of March 2024, the setup interview uses the latest code of a branch on ALKiln called "v5" for its actions.

This means that your ALKiln action has all the latest bug fixes and new features to the actions. That can be a good thing, but it also means you might not be sure of exactly what code starts your tests.

[ALKiln itself already uses practices that protect you from malicious actors](#alkilns-precautions). There is a way to make sure to always use an exact version of ALKiln's actions, though, if you want. You can use a version that has code and behavior that you are familiar with and feel comfortable with.

To "freeze" your ALKiln action version in this way, you can reference a specific ALKiln git commit sha in your workflow file. When you want to update to a new version of the action code, you can check all the new changes to the code to make sure you feel comfortable with them before updating to a new commit sha.

1. Go to [ALKiln's repository](https://github.com/SuffolkLITLab/ALKiln). For example, for the v4 branch, you can go to https://github.com/SuffolkLITLab/ALKiln/commits/releases/v5.
2. Find the sha of a commit you need. You need the full commit sha. To do that, go to the main page of [ALKiln's GitHub repo](https://github.com/SuffolkLITLab/ALKiln). Pick the branch of ALKiln that is relevant to you. Near the top, click on “commits". Find the commit that you want. On the right-hand side of that row will be the shortened version of the commit sha. To the right of that is the “copy” button. Click that to copy the full commit sha.
3. In your repository's directory, go to .github/workflows and find the file that starts the tests. There's a line in there that look's something like this:

```yml
uses: suffolkLITLab/ALKiln@releases/v5
```

4. Change the text "releases/v5" to the commit sha.

When you want to update to a new version of an ALKiln action, update that sha manually.

:::tip
This is different than the [ALKiln framework version](#freeze-framework). The framework does more than just start your tests. It is the code that lets you control the robot that goes through your interview answering questions. You do usually need to make sure these match, though, as they work together. When you update one, you should also update the other.
:::


## Isolated server tests {#isolated-server}

**This is for any packages that:** have isolated server tests that run in GitHub

[Isolated server tests](setup#isolated-server-how) are useful for security if you use them correctly.

For example, you have to avoid using hard-coded urls that are on your server. That is, avoid using `https://my-server.com` and interviews or other pages there. That will send the tests to your server, which goes around all these precautions and makes them less secure again.


## Use sensitive information in Playground tests {#sensitive-info-playground}

**This is for any packages that:** you test with ALKilnInThePlayground

**To do this you MUST be able to:**

- Edit your server's config file

Sometimes authors do need to pass sensitive information to their tests. For example, some tests require the "user" to log in, so the tests need to know the email and password for that user. You can do this securely in your ALKilnInThePlayground tests by adding this information to your docassemble server configuration file. ALKiln will use these as environment variables for your tests.

You can also read about [how to use sensitive information in GitHub tests](#sensitive-info-github).

To do this, [edit your docassemble server's configuration file](https://docassemble.org/docs/config.html#edit) to add your environment variables under the `alkiln` key. For example:

```yml
# Other config values
alkiln:
  ALKILN_USER_PASSWORD: 123password
```

The use that environment variable name in your test. For example:

```gherkin
    And I set the variable "very_secure_password" to "ALKILN_USER_PASSWORD"
```

We recommend that you start your environment variable names with "ALKILN_". That will help avoid conflicting with the environment variables of your operating system.

ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables. ALKiln avoids printing the value of an environment variable anywhere in the report or in the console.

Right now Story Tables are unable to use environment variables to set variables.

:::danger
Avoid manually taking pictures of pages with sensitive information. It is probably possible to trigger those pictures in Steps you write yourself, but we highly recommend against that for security reasons.
:::


## Things to worry about less

There are some security protections that you have automatically.


### Worry less: Your production server {#production}

**This is for:** Everyone

As long as you ensure you [only test on your testing server](#testing-server), ALKiln cannot affect your production server.

- The `.feature` files that you have in your "Sources" folder do nothing by themselves. They are as safe as text files.
- The GitHub workflow files can only run on GitHub.


### Worry less: GitHub logs and artifacts {#github-output}

**This is for any packages that:** have GitHub tests

There are some parts of testing that might look less secure than they are.

When you run the tests in GitHub, you can see the logs of the test action's job and you can download the results of the test, or "artifacts". That may seem very exposed, but only people who have permissions on the repository, like administrators, collaborators, or moderators, can see or download that information.

If you are still worried about the logs and artifacts in GitHub, [you can delete the logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#deleting-logs) and [you can delete the artifacts](https://docs.github.com/en/actions/managing-workflow-runs/removing-workflow-artifacts).

We still recommend that you avoid manually telling ALKiln tests to take pictures or screenshots of pages with sensitive information.


### Worry less: Pull request triggers {#pull-requests}

**This is for any packages that:** have GitHub tests

By default, the ALKiln setup interview writes your GitHub workflow file so that your tests will get triggered when you commit to GitHub. You can also add code <!-- Add link to description of that code --> to trigger tests when someone makes a pull request on GitHub.

Some people worry that strangers will then be able to trigger workflows that have malicious code. GitHub has default settings that prevent that from happening. They require you to [approve workflow runs](https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks) triggered by pull requests from first-time contributors. You can read more about these settings [for public repositories](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#controlling-changes-from-forks-to-workflows-in-public-repositories) and [for organizations](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks). The same is true of private repositories. Note that approving workflow runs from first-time contributors to private repositories [is a bit different](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-forks-of-private-repositories).


### Worry less: GitHub redacts secrets {#github-redacts-secrets}

**This is for any packages that:** have GitHub tests

In your GitHub [workflow run console](https://docs.github.com/en/actions/using-workflows/about-workflows?learn=getting_started#viewing-the-activity-for-a-workflow-run), GitHub redacts any text that matches the values of any of your GitHub secrets. It replaces that text with "\*\*\*". It must be an exact match. GitHub is unable to recognize partial matches.


### Worry less: ALKilnInThePlayground already freezes your ALKiln version {#playground-version}

**This is for any packages that:** you test with ALKilnInThePlayground

The ALKiln framework lets you control the robot that goes through your interview answering questions. This documentation has already discussed how [you can freeze your ALKiln framework version on GitHub](#freeze-framework).

[ALKiln itself already uses practices that protect you from malicious actors](#alkilns-precautions). If you want to take extra precautions, though, freezing the version you are using with ALKilnInThePlayground tests does give you more control over what code you are installing on your server and using to run your tests.

The first page of the ALKilnInThePlayground lets you choose <!-- link to description of that --> the exact version of ALKiln that runs your tests. You can upgrade or downgrade at any time.


## ALKiln protects you too {#alkilns-precautions}

Out team takes special precautions with ALKiln's code to ensure you are as safe as we can make you. We are always looking for more ways to increase our security.


### Report an ALKiln security vulnerability {#report}

**This is for:** Everyone

If you find an ALKiln security vulnerability, you can [report it to us privately](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability#privately-reporting-a-security-vulnerability).


### ALKiln avoids printing sensitive information {#alkiln-env-vars}

**This is for:** Everyone

Since [environment variables might contain sensitive information](#sensitive-info-playground), ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables. ALKiln avoids printing the value of an environment variable anywhere in the report or in the console.

There are probably ways for you to get around this restriction, but you should avoid that to keep your tests more secure.


### ALKiln freezes the versions of its dependencies {#alkiln-freezes-dependencies}

**This is for:** Everyone

Just like you can freeze the versions of the [ALKiln framework](#freeze-framework) and [ALKiln actions](#freeze-actions), ALKiln freezes the versions of its own dependencies - the libraries it uses. When we update our dependencies to their latest versions, we check the updates and do our best to make sure that we are comfortable with the changes.


### ALKiln protects its major branches {#alkiln-branches}

**This is for:** Everyone

ALKiln protects itself from unintended changes or changes by new collaborators. ALKiln has gotten many volunteer contributions over time and we want to make sure we check that code carefully before we release it to you.

As our documentation described, [you can protect your default branch from changes](#default-branch). ALKiln has multiple branches that users depend on - one branch for every major version. For example, v3, v4, and v5. It protects all those branches in various ways. For example, we:

- Require contributors to make new branches when they edit code
- Require contributors to make a pull request before new code can be added to the main branch
- Require administrators to approve a pull request before that code can be merged so that we have a chance to review it.

Our administrators can get past these restrictions. We keep tight control of who our administrators are.


### ALKiln uses good action file practices {#alkiln-action-files}

**This is for any packages that:** have GitHub tests

ALKiln's action files are very similar to workflow files, like yours. As such, they use the same [GitHub-recommended practices](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions) that your workflows can use.
