---
id: alkiln_advanced
title: ALKiln advanced topics
sidebar_label: Advanced
slug: /alkiln/advanced
---

🚧 This page is a stub and sections will be added as resources allow.

## Two ways to run ALKiln

You don't have to choose between running ALKiln on GitHub or in the Playground. You can do both. Here are some differences to help you use each more effectively.

### In the Playground

_Advantages of testing on your server._

- Running ALKiln on your server lets you loop through your development cycle faster - edit, test, edit, test. You don't have to go through committing your code to GitHub every time.
- You can see the output online right away, including images and documents. In GitHub, to see _all_ of the output files, you have to download a zip file. The only thing you can see online in GitHub is the summary report.
- You can more easily limit your tests to a specific set of tests using [tag expressions](https://www.cuketest.com/en/cucumber/tag-expressions). You can use tags on GitHub too, it just takes more steps.
- You can more often avoid the red "x" that appears next to failing tests on GitHub. The red "x" is a useful piece of information, but it can be uncomfortable.


### GitHub

_Advantages of testing in GitHub._

- ALKiln on GitHub will test any changes any team member commits. On your server, you only tests your changes.
- On GitHub, there are ways to schedule tests to run regularly - every week, every day, or whatever schedule you prefer. If packages you depend on change and break your code, those tests will let you know.
- If you've forgotten to add a file to the package that an interview depends on (like a missing template file), GitHub will catch that. It installs the file fresh in a new Project, so it only has the files that have been committed properly.
- You can continue editing any files in your Playground while the GitHub tests run because GitHub creates a whole new Project of its own. When running tests on your server, you must avoid editing the Project that ALKiln is testing.
- When your server reloads, tests in GitHub may fail, but they will recover better and be able to retry the tests that failed. That's because ALKiln is running on GitHub's servers. When running tests on your server, though, the ALKiln is affected directly by that reload. Your server reloads whenever anyone on the server saves a module, pulls a package that has a module, edits the server's config file, updates server packages, and so on.
- You can configure your GitHub "action" to create GitHub issues whenever tests fail.


### What's happening?

**What's happening when you run the tests in the Playground?**

- For each test (or Scenario), Alkiln pretends to be a human and goes to whatever interview you named in the test in the Project you chose.
- It tries to fill out the fields as the test has instructed, and to take the actions described in the test.
- If one of the Steps fails, ALKiln adds that to the test report and tries to take a picture of the page with the problem. It tries to avoid taking pictures of sensitive information.

When the tests are done, the output page will show you all the generated reports, images, and files. It will also give you a link to download all of that in a `.zip` file.

**What's happening in GitHub?**

Whenever you push (or commit) to GitHub, GitHub will run the tests automatically.

- ALKiln goes to the testing account on your server and creates a new Project.
- It pulls the relevant branch of your package into the Project.
- For each test (or Scenario), Alkiln pretends to be a human and goes to whatever interview you named in the test.
- It tries to fill out the fields as the test has instructed, and to take the actions described in the test.
- If one of the Steps fails, ALKiln adds that to the test report and tries to take a picture of the page with the problem. It tries to avoid taking pictures of sensitive information.
- When all the tests are done, ALKiln deletes the Project it created.

You can see the tests running on your repository's [GitHub Actions page](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity).

At the end, you can see a report and logs right in the [workflow's "job" page](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs) or [download a `.zip` file containing the results of the tests to your computer](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts). That `.zip` file is what GitHub calls an "artifact".
