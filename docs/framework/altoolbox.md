---
id: altoolbox
title: |
    ALToolbox utility components
sidebar_label: ALToolbox
slug: /framework/altoolbox
---

## Collapsible help text

`collapse_template` combines [Bootstrap v5's
collapse](https://getbootstrap.com/docs/5.0/components/collapse/) component with
a Docassemble [`template`
block](https://docassemble.org/docs/initial.html#template).

We [recommend using this for help
text](question_style_help_your_user.md#provide-help-information-in-context) in
your interviews.

It works a lot like this `details` element:

<details><summary>Like this</summary>
<p>
Context-specific help goes here.
</p>
</details>

Including this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
---
features:
  css: docassemble.ALToolbox:collapse_template.css
```  

[Code for `collapse_template`](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/misc.py)

## Format telephone numbers as clickable links

This `tel` function just makes a string representing a telephone number
clickable, which opens the dialer on mobile.

For example: `tel('617-555-5555')`

Include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
```

## Shorten a URL

The `shorten_url` function lets you use your Docassemble server as a URL
shortener.

The function has one parameter: `original_url` and can be called like this:
`shorten_url('https://www.example.com')`.

Links expire in 7 days, and can be to either internal or external content.
The URL will still display your server's domain name, and will look like this:

`https://my.docassemble-server.com/goto?c=aRjzWcNZyJGWnMQghHamcndEnVKfhNwo`

Include this in your interview:

```yaml
---
modules:
  - docassemble.ALToolbox.misc
```
