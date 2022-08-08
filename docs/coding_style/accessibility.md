---
id: accessibility
title: Making your interview accessible 
sidebar_label: Interview accessibility
slug: /coding_style_guide/accessibility
---

**Web Accessibility** is the practice of making your website useable by many different users, such as those who use keyboard controls to navigate a page or use screen readers to read the contents of the page.

Much of web accessibility is making your guided interviews easy to use by adding clear, helpful instructions to each question. Making your interview overall easier to understand and complete helps everyone!

Other parts of web accessibility involve writing the interview in a way that the user's browser can understand and forward to other accessibility technologies (like screen readers). The majority of these things docassemble handles for you, but there are some things that you'll have to adjust in your interview.

To help you find accessibility problems in your interview you can use the [WAVE browser extension](https://wave.webaim.org/extension/), or if you want to check accessibility of your interview automatically, you can use the [ALKiln testing framework](../automated_testing.md#accessibility).

## Use colors that contrast strongly with their backgrounds

One thing that you have control over in your interviews is your interview "branding", including fonts, styles, and importantly, colors. Making sure that the colors you choose for text and it's background has high enough contrast is important to all of your users. Web accessibility standards like WCAG 2 define the **minimum** proper color contrast between an element and it's background color as 4.5:1. For larger text like headings, the minimum is 3:1.

You can check that the colors you are using in your interview's branding have proper contrast with the following tools:

* [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/)
* [Accessible Web's contrast checker](https://accessibleweb.com/color-contrast-checker/)

## Use alt-text with images

To describe images in webpages, screen readers read out author-provided descriptions called alt-text. Without alt-text, people visiting your page with screen readers won't get any of the benefits of the graphic.

In docassemble, you should [set the `alt_text` attribute of a DAFile](https://docassemble.org/docs/objects.html#DAFile), or use [the `set_alt_text()` function](https://docassemble.org/docs/objects.html#DAFile.set_alt_text). If you are writing HTML directly, you can add an `alt` property to any `img` tags you use (see below).

```html
<img src="my_image.png" alt="A drawing of a flowchart: the question is 'do you have any children?', the option 'yes' leads to 'scenario 1', and the option 'no' leads to 'scenario 2'."/>
```

### Logos

You should add alt-text to your organizations logo. This alt-text can be simple, such as "Organization A's logo", but it should be present.

## Maintain consistent header increments

If you use headers in your question markdown, make sure that you always increment you header levels one at a time, i.e. always go from header level 2 to 3, and not 2 to 4. This is important as in order to take in the page and navigate quickly, screen reader users can read just the text in headers to the user, and skipping header levels can disorient those users.

### Don't use `h1` in subquestions

There should only ever be one `h1` header on a page, and in docassemble, that header is the `question` attribute. Because of that, you shouldn't use a `#` header (or if you use HTML, a `<h1>` tag) in a subquestion.

### Header sizes

You might notice that the question header in Docassemble looks smaller than headers in the subquestion. This is because docassemble manually styles the question to
look like an `h3` header, even though it is really a `h1` header. If you want the headers in your subquestion you can manually use HTML and style them as such:

```yaml
subquestion: |
  <h2 class="h4">Main Description</h2>

  ...

  <h3 class="h5">More Details</h3>

  ...

```

## Avoid comboboxes

Comboboxes, as implemented in docassemble, have [several usability problems](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/issues/548), especially with screen readers. We recommend that you don't use comboboxes in new interviews, instead using one of the below alternatives:

* split out the combo box into two fields: a dropdown with the same fields and an additional "other" option, and a field (that is hidden if the dropdown is not "other") where the user can type in their "other" input.

  ```yaml
  fields:
    - What is your role?: role_name
      choices:
        - employee
        - manager
        - other
    - Please enter your role: role_other
      show if:
        variable: role_name
        is: other
  ```

* if the combo box suggestions are validated by the interview, add some some of those suggestions into examples on the page (which makes them easier to discover for some users) and turn the field into a text input where the validation errors are descriptive.
