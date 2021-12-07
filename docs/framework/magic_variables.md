---
id: magic_variables
title: |
    Special variables for Assembly Line interviews
sidebar_label: Special variables for Assembly Line interviews
slug: /framework/magic_variables
---

## Global configuration options

These variables are recommended to be set in a package that all of your
interviews include. Usually, they are the same for all interviews created by one
organization or for one jurisdiction.

They can be set in a code block like this:

```yaml
code: |
  SOME_OPTION = "some value"
```

Docassemble will use the code block that is "latest" (closest to the bottom) of
your main interview file. This way, you can include a default in a global file
and then override it as needed in an individual interview.


### `AL_ORGANIZATION_TITLE`

Used to set the organization title (which appears above the form title) in the
navigation bar.

By default, this variable is set to the value of
[`appname`](https://docassemble.org/docs/config.html#appname) in the system-wide
configuration.

```yaml
code: |
  AL_ORGANIZATION_TITLE = "CourtFormsOnline"
```

### `AL_ORGANIZATION_HOMEPAGE`

Used to set the `exit url` and the url that you will be taken to if you click
the title in the navigation bar.

### `al_logo`

Used to set a small icon (ideally 40px high, max) that will be displayed next to
the form title and brand name in the navigation bar.

Example:

```yaml
---
objects:
  - al_logo: DAStaticFile.using(filename="lit_logo_light.png")
```

If your logo is taller than 40px, you can add a CSS rule to limit the maximum
height, like this:

```css
.al-logo img {
  max-height: 40px;
}
```

Add this to a CSS file in your `data/static` folder that you then include in
your interviews directly or via a shared YAML file.
### Localization and translation variables
      
* `AL_DEFAULT_COUNTRY`: [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) 2
  letter code representing the default country of the interview user for address
  questions. E.g., `US` for United States of America, `UK` for United Kingdom of
  Great Britain and Northern Ireland.
* `AL_DEFAULT_STATE`: [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)
  (usually 2 or 3 letter) code representing the abbreviation for the state,
  territory, or sublocality, used in address questions
* `AL_DEFAULT_LANGUAGE`: [ISO
  639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 2 letter code
  (or alternative, such as ISO-639-3) that matches a language for which you have
  either a `words.yml` translation file, a translation `XLSX` or `XLIFF` file,
  or both and is mentioned in a `language` block in your interview. Used to
  specify the default language of your interview.


## Interview-specific options

### `interview_metadata`

`interview_metadata` is a
[`DADict`](https://docassemble.org/docs/objects.html#DADict). Each key in
`interview_metadata` is itself a `DADict` and should be used for a specific
interview. This allows you to combine interviews into one "umbrella" interview
and still look up information that applies to just one interview. E.g., one
"child" interview might be available in English and Spanish, and a second only
in English.

Because the "umbrella" pattern is not widely used on CourtFormsOnline, this
block is not widely used at runtime. It is essentially optional although it is
produced in all interviews that are run through the Weaver. It is most useful as
a record of what the author intended when the form was run through the Weaver,
and is also available for you to make use of in more complex "umbrella"
interviews of your own. Keep in mind that you may need to make an upstream fix
to an interview to fix the `interview_metadata` because it is not likely the
upstream author kept this up to date with later changes to the interview.

Example:

```python
interview_metadata['my_interview']['al_weaver_version'] = "0.82.1"
interview_metadata['interview_i_included_in_this_umbrella_file']['al_weaver_version'] = "1.6.11"
```

Common keys:

Key                  |            Purpose     |     Example
---------------------|------------------------|----------------------
`al_weaver_version`  | documents the version of the Weaver the form was created with | 0.82
`generated on` |  documents the date the interview was created with the Weaver | 2021-05-28
`title` | The title of the form | 209a 258e motion for impoundment
`short title` | A shorter version of the title, appropriate for smaller windows | Impoundment motion
`description` | Narrative description | Use this motion for impoundment in a 209A or 258E restraining order case when you need to keep information on the form private.
`original_form` | Link to the original PDF/DOCX form, unfilled (not commonly used) | https://mass.gov/my_pdf.pdf
`allowed courts` |  A list of the courts the case may be filed in. Mostly relevant in Massachusetts; doesn't make sense in other states. | ["Superior Court", "Probate and Family"]
`categories` | Taxonomy classifiers that explain the type of form this is (usually from the LIST taxonomy at taxonomy.legal) | ["BE-04-00-00-00"]
`logic block variable`| Name of the interview order block | a_258e_motion_for_impoundment
`attachment block variable`| Name of the attachment block variable | a_258e_motion_for_impoundment_attachment
`typical role`| Common role that the form user has in the case | plaintiff

Some of these values are checked for emailed and e-filed pleadings.

### `AL_DEFAULT_OVERFLOW_MESSAGE`

Used to control the text displayed in an input box when text is too long to fit on a PDF.
The default is `...` if not specified.

### `addresses_to_search`

`addresses_to_search` should contain a list of `Address` or `ALAddress` objects that will
be used to locate the correct court for the user to file in.

By default, this will be a list of the addresses of each member of the `users` list.

### `al_intro_screen`

`al_intro_screen` should be a `continue button field` on your organization's
standard intro screen. We use this screen to help orient people who arrive at
the interview directly from a deep link and to briefly explain what
CourtFormsOnline.org is.

### `allowed_courts`

This is mostly relevant in Massachusetts. It should be a list of the names of
the Trial Court departments that accept this kind of pleading. It is used to
display the list of courts in interviews that use the court question contained
in the `docassemble.MassAccess` package.

Example:

```yaml
code: |
  allowed_courts = [
    "Housing Court",
    "Superior Court"
  ]
```

Massachusetts has a unified court system, with jurisdiction depending on the
court department. In other states, there may be a single court per county of
general jurisdiction, with adhoc assignment of case types to different branches
of the court in that county. Because of this, it's not likely that filtering
courts this way makes sense in other states.

### `al_form_type`

`al_form_type` is used to control some dynamic questions to give more specific
help information and to give some variables, like `user_role`, a smart default.

Valid values:

- Starts a new court case: `'starts_case'`
- Filed in or responding to an existing court case: `'existing_case'`
- Part of an appeal of a court case: `'appeal'`
- Form that is not filed in a court: `'other_form'`
- Letter: `'letter'`
- Other: `'other'`

## Run-time options

These options are ones that you can sometimes configure when you author the
interview, but they can also depend on questions that are asked during the
course of the interview.


### `al_user_bundle` and `al_court_bundle`

If your interview will be electronically filed or email filed, it should also define
2 `ALDocumentBundle` objects: `al_user_bundle` and `al_court_bundle`.

Use these exact names for the bundles, which are also created for you by the
Weaver. The e-filing code expects to see the `al_court_bundle` object defined.
The `al_user_bundle` object is used on error handling screens.

### `signature_fields`

`signature_fields` should be a list with the name of each signature field
that you want the interview to trigger in the signature flow as a string.

You can use a `code` block to define this in a way that reflects the user's
choices.

Example:

```yaml
code: |
  if has_attorney:
    signature_fields = ["users[0].signature", "attorneys[0].signature"]
  else:
    signature_fields = ["users[0].signature"]
```

### `trial_court`

`trial_court` should be an `MACourt` or `ALCourt` object representing the
court that the user has chosen to file the case in. This may be used
in some automatically gathered statistics as well as in e-filing code.

### `user_role`

Several questions depend on the value of `user_role` directly to address the
`user` correctly as either the party initiating or responding to a case.

`user_role` should be exactly one of "plaintiff" or "defendant". Use "plaintiff"
when you mean "petitioner", and use "defendant" even if you mean "respondent". This
is just the internal shorthand for starting or responding to the case.

This is commonly but not always set in a code block.

### `user_ask_role`

`user_ask_role` is used for the same purpose (and will define the value of)
`user_role`. It can also contain exactly 1 of 2 values: "plaintiff" or "defendant".
The difference is that `user_ask_role` is expected to be set by asking a question.

### `user_started_case`

`user_started_case` is not intended to be defined directly. It is created based
on the value of `al_form_type` and if that doesn't provide enough information,
the value of `user_ask_role` is checked.

It is then used to make the question about `other_parties` dynamic.

### `users` and `other_parties`

The variables `users` and `other_parties` can be used directly in your template,
but they also have a special meaning in Assembly Line interviews.

The variable `users` should always contain the name of the party who the form
is for. Do not use it to store the name of an advocate or attorney, unless the
advocate or attorney is filing something on their own behalf, like an appearance.

The variable `other_parties` is reserved to represent the name of the opposing party
in the lawsuit. Not all forms contain a second party, so this variable is optional.

The Assembly Line runtime packages will assign the value of `users` or `other_parties`
to `plaintiffs`, `petitioners`,  `defendants`, and `respondents` dynamically.
