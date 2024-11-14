---
id: translation 
title: Translating your interview
sidebar_label: Translating your interview
slug: /translation
---

The Assembly Line has several tools that build on Docassemble's native translation system
to help you offer your interview in multiple languages:

1. Widgets that you can display to allow the user to switch languages
1. A tool to generate blank translation XLSX files and a tool to help get translation quotes
1. Special variables to turn translation on and off and make it more convenient to list the available languages
   in your interview.

## Core concepts

### XLSX File format
Docassemble interviews can be translated by adding a special Excel spreadsheet (XLSX format)
in the `sources` folder of your package. Docassemble's translation system 
works without requiring you to maintain multiple YAML files. The translated phrases are loaded
"live" when you run your interview.

In the XLSX file, the translator sees two columns: one with English (or your source language)
phrases, and an empty column where they can write the translated phrases.

### What the translator sees

Any mako tags that you used, for example, `${ variable }`, will be visible in the English
version of the cell, but will be highlighted in a distinct color. Similarly, HTML will also
be highlighted.

### Text that isn't translated using the XLSX translation system

Some parts of the interview require special handling:

* Buttons and system phrases need to be translated in a `words.yml` file.
* Blocks that do not use Mako, like the `sections` block, need to be translated
  in-place with the `language` modifier.

## Making a translation file

Use the ALDashboard's "Prepare Translation Files" menu item to make a new translation file,
ready to send to your translator.

The tool also will calculate how many words in the given language need to be translated,
without counting Mako and HTML code. The number it provides is suitable for you to share
with a translation vendor.

## Variables used in translated interviews

* `enable_al_language`: defaults to True, turning it off can partially ensure the language system in AssemblyLine doesn't interfere with existing language systems. It should be relatively easy for authors to migrate to this new system though.
* `al_user_default_language`: can be controlled by interview author, this determines the language when the user makes no selection of their own. Defaults to "en".
* `al_interview_languages`: a list of language codes, presumably ISO-639-1 (Alpha-2), like ["en","es"] etc. They should exist in the languages.yml file if you would like to display in the native language. The author can provide their own languages.yml file.
* `al_user_language`: normally set via a dropdown menu or passed as a URL argument, this stores the user's current selected language

## Make the translation file available in your interview

1. Add the new XLSX file into `sources` folder in your package.
2. Add a `translations` block

```yaml
translations:
  - MyPackage.xlsx
```

:::caution Add the translation block up top

Because of the way translations are loaded, 
you need to add the translations block **before**
any other questions or includes in your interview.

If you have the `translations` block later in your
file, it won't have any effect on questions defined
closer to the top of the file.
:::

## Methods to change interview language

### Drop-down menu selector with `get_language_list_dropdown()`
When `al_interview_languages` is defined (which is the default) and has at least 2 items, 
the Assembly Line will add a drop-down menu item in the top right that allows the user
to switch languages at any time.

You can customize this drop-down menu with a block like this:

```yaml
---
default screen parts:
  navigation bar html: |
    % if enable_al_language and len(al_interview_languages) > 1:
    ${ get_language_list_dropdown(al_interview_languages,current=al_user_language, extra_class="text-dark", icon="fa-solid fa-language fa-xl" ) }
    % endif
```

By using your own `navigation bar html` block, you can customize the `icon` and `extra_class` parameters.
Use `extra_class` `text-dark` if your navigation bar is light, rather than the default dark navigation bar
color. This class applies to the `anchor` tag that surrounds the icon.

By default the icon is the [FontAwesome `language` icon](https://fontawesome.com/search?q=language&o=r)
at size `xl` (extra large). You can customize the `icon` parameter with a unique icon name and any other 
FontAwesome custom [styling options](https://docs.fontawesome.com/web/style/styling).

### In-line language list with `get_language_list`

On the first screen of the interview, you may want to just show the user a list of the languages directly in the `subquestion` area, where it is more visible,
rather than directing them to the dropdown menu.

You can call `get_language_list()` to achieve this.

Example:

```yaml
subquestion: |
  ${ get_language_list(lang_codes=al_interview_languages, current=al_user_language) }
```

### Ask the user a question

If you want to be absolutely sure that the user encounters the language
question, you can directly ask the user a question:

```yaml
id: language
question: |
    What language / que idioma?
fields:
    - Language/idioma: al_interview_languages
      datatype: radio
      choices:
        - English: en
        - Español: es
```

### Switching language on the fly

Make sure that expert users of your tool, like advocates
shadowing or looking over the shoulder of an unrepresented
litigant, know that they can use the dropdown menu to switch
language "live." 

For example, the SRL can work through the interview on their own
until a point at which they get stuck. Then the helper can change 
to English to understand what is happening on the screen, and speak
with an interpreter to give the SRL instructions.

This can be helpful for bilingual assistance
settings.

### Pre-launch in a specific language with special url parameter `lang`

If you would like to share the interview in a bilingual landing
page rather than forcing the user to change the language 
dynamically, use the `lang=CODE` URL argument.

E.g.,

https://apps.suffolklitlab.org/start/uptocode/?lang=es

The interview will launch in the language specified by
the language code (if it is translated into that language)

:::note
If the URL already has a `?` in it, replace the `?` with an `&`.

(this is a standard part of URL arguments).
:::

## A complete example

```yaml
---
translations:
  - my_interview_es.xlsx # The translation file list should be the first section of the interview
---
include:
  - docassemble.AssemblyLine:assembly_line.yml
---
metadata:
  title: My interview
---
code: |
  al_interview_languages = ["en", "es"]  # List each available language, including English, using the ISO code
---
default screen parts:
  # Customizing this section isn't required. Here
  navigation bar html: |
    % if enable_al_language and len(al_interview_languages) > 1:
    ${ get_language_list_dropdown(al_interview_languages,current=al_user_language, extra_class="text-dark", icon="fa-solid fa-language fa-xl" ) }
    % endif
---
sections:
  - section_intro: Getting started
  - section_you: About you
  - section_case: About your court case
  - section_defenses: Claims and defenses
  - review_eviction_answer: Review your answers
  - section_download: Download, print, deliver, and file
---
language: es # The sections block is NOT in the interview translation XLSX file
sections:
  - section_intro: Empezar
  - section_you: Sobre usted
  - section_case: Sobre su caso judicial
  - section_defenses: Reclamaciones y defensas
  - review_eviction_answer: Revisar sus respuestas
  - section_download: Descargar, imprimir, entregar y presentar  
---
id: intro
question: |
  File a My Interview document
subquestion: |
  Use this interview to file a "MyInterview" document in 3 steps:

  1. ...
  2. ...
  3. ...
pre: |
  ${ get_language_list(lang_codes=al_interview_languages, current=al_user_language) }
```

## Read more

You can read more about the stock language features in the official Docassemble [language features documentation](https://docassemble.org/docs/language.html).

Also, see the documentation for the [AL language module](/docs/reference/AssemblyLine/language)