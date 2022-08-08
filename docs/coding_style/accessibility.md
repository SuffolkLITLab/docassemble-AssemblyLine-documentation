---
id: accessibility
title: Making your interview accessible
sidebar_label: Interview accessibility
slug: /coding_style_guide/accessibility
---

**Web Accessibility** is the practice of making your website usable by many different users, such as those who use keyboard controls or screen readers.

Making your guided interviews accessible is first and foremost about making them easy to understand and use. Following [our advice about writing good questions](../style_guide/question_overview) can make your interview overall easier to understand and complete, which helps everyone!

Other parts of web accessibility involve writing the interview in a way that the user's browser and other accessibility tools (like screen readers) can understand. Docassemble [handles many of these things](https://docassemble.org/docs/accessibility.html) for you, but there are some parts that you'll have to address when writing your interview.

To help you find accessibility problems in your interview you can use the [WAVE browser extension](https://wave.webaim.org/extension/), or if you want to check accessibility of your interview automatically, you can use the [ALKiln testing framework](../automated_testing.md#accessibility).

## Use colors that contrast strongly with their backgrounds

One thing that you have control over in your interviews is your interview "branding", including fonts, styles, and importantly, colors. Making sure the text colors and background colors that you choose have high enough contrast is important to both low-vision and sighted users. Web accessibility standards like WCAG 2 define the **minimum** proper color contrast between an element and it's background color as 4.5:1. For larger text like headings, the minimum is 3:1.

You can check that the colors you are using in your interview's branding have proper contrast with the following tools:

* [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/)
* [Accessible Web's contrast checker](https://accessibleweb.com/color-contrast-checker/)

## Use alt-text with images

To describe images in webpages, screen readers read out author-provided descriptions called alt-text. Without alt-text, people visiting your page with screen readers won't get any of the benefits of the graphic. The W3 WAI group has [a good decision tree on how to write alt-text](https://www.w3.org/WAI/tutorials/images/decision-tree/).

In docassemble, you should [set the `alt_text` attribute of a DAFile](https://docassemble.org/docs/objects.html#DAFile), or use [the `set_alt_text()` function](https://docassemble.org/docs/objects.html#DAFile.set_alt_text). If you are writing HTML directly, you can add an `alt` property to any `img` tags you use (see below).

```html
<img src="my_image.png" alt="A drawing of a flowchart: the question is 'do you have any children?',
    the option 'yes' leads to 'scenario 1', and the option 'no' leads to 'scenario 2'."/>
```

### Logos

You should add alt-text to your organizations logo. This alt-text can be simple, such as "Organization A's logo", but it should be present.

## Maintain consistent header increments

If you use headers in your question markdown, make sure that you always increment your header levels by one. For examples, always go from header level 2 to 3, and not 2 to 4. Screen readers have special features that let users navigate between different headers in order to navigate quickly, and skipped header levels can disorient users.

### Don't use `h1` in subquestions

There should only ever be one `h1` header on a page, and in docassemble, that header is the `question` attribute. Because of that, you shouldn't use a `#` header (or if you use HTML, an `<h1>` tag) in a subquestion.

### Header sizes

You might notice that the question header in Docassemble looks smaller than headers in the subquestion. This is because docassemble manually styles the question to
look like an `h3` header, even though it is really a `h1` header. If you want the headers in your subquestion, don't skip header levels until they "look right". Instead, you can manually use HTML and style them as such:

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
