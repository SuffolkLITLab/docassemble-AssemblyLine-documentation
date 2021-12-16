---
id: customization_overview
title: Customization and theming
sidebar_label: Customization and theming
slug: /customization/overview
---

## Visual customization

You can customize Docassemble, and Assembly Line interviews, with a Bootstrap 5 theme.

If you want to build a custom theme, you can:

1. build one from Bootstrap 5 source
1. start with a theme generator tool like [bootstrap.build](https://bootstrap.build/)
  and in some cases, add some custom CSS to make it work with Docassemble.

### Starting with bootstrap.build

1. Visit the [bootstrap.build](https://bootstrap.build/) website.
1. Click the button to open the Builder
1. Customize the options that you want to customize. Typically those will include:
    * Under color system, the $gray/$blue/etc. colors, if you use a matching color in your theme
    * Under color system, almost always the variables `primary`, `secondary`, `success`, `info`, `warning`, `danger`,
      `light` and `dark`
    * Under Typography, customize any fonts that you wish to use
    * Under forms, you may want to customize button size and rounded edges
1. Click the "export theme" button (it may be hidden behind a banner at the top of the page) and choose the 
  "bootstrap.min.css" option. Rename this theme to be more specific. Optionally, download the `_variables.scss` file
  so that you can easily load and adjust your settings in future.

Add this theme to your Docassemble playground using the Folders | Static menu.

Next, you will need to make a small adjustment to the theme generated by bootstrap.build.
Copy and paste the code below into the `bootstrap.min.css` file (or your new file name).

```css
.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
  
.bg-dark {
  background-color: #1a73e8!important;  /* replace with your desired nav bar color */
}
```
