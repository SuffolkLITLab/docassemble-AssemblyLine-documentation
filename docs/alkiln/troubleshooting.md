---
id: alkiln_troubleshooting
title: ALKiln troubleshooting and errors
sidebar_label: WIP Troubleshooting & errors
slug: /alkiln/trouble
---

:::warning
WIP
:::

This page will try to help you figure out what is going wrong when you have errors or other problems with your ALKiln tests.

<!--
## The variable could not be looked up

> There was a reference to a variable ‘some_var’ that could not be looked up in the question file (for language ‘en’) or in any of the files incorporated by reference into the question file.
 -->

## Everything works fine when I run the test manually {#manual-works}

Or "It works when I run the interview manually" or "The tests pass when I run them with ALKilnInThePlayground".

### File not found {#file-not-found}

<!-- Find that error -->

This might mean that you have a file in your Playground Project, but that you still have to save it on the Project's Packages page and commit that to GitHub. Your tests will pass for that Project in your Playground, but your interview will break when you or others install it from GitHub.

### Reference error {#reference-not-found}

> There was a reference to a variable ‘some_var’ that could not be looked up in the question file (for language ‘en’) or in any of the files incorporated by reference into the question file.

If running the test manually seems to work fine, but running the automated tests gets a reference error, the test probably either has an incorrect variable name or an incorrect value for a variable. Check for:

- [Incorrectly setting checkbox values](writing_tests#faq-checkbox-values)
- Typos in variable names
- Typos in the value for radio button options or similar fields

It is hard to do, but if you run it by hand carefully step by step and examine each page's docassemble code and its HTML to check the values of everything and answer _exactly_ as the test would answer, you can usually track down the problem.

1. For every single page (even if you think this page has nothing to do with the problem), go to that page.
1. Click on the `<\/>` in the nav bar to see the source of the page.
1. For every field in the page:
    1. If a field is created with code, like an `object_checkbox` field or a `code:` field:
        1. Open the browser development tools.
        1. Examine the DOM of a field to find the encoded name of the variable.
        1. Use `atob('the encoded name or id')` with the encoded name or id to fully decode every part of the variable name. You may have to decode multiple times. This is complex and I suggest asking for help.
        1. Put together the variable name that you need to use.
    1. Copy the variable name and use your editor's search functionality to look for that exact variable name in your test file.
    1. If the field is a radio button field or something similar, copy the value's name and use your editor's search functionality to look for that exact variable name in your test file. Make sure it appears right next to the correct field name.
    1. Set the value exactly as the test would have set it.
1. Go on to the next page till you reach the end of your interview.
