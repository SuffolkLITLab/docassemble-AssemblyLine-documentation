---
id: yaml_anatomy
title: The parts of an ALWeaver generated YAML file
sidebar_label: View the generated code
slug: /generated_yaml
---

:::warning
This page is very much under construction as we develop the weaver's capabilities. These 🚧 emoji notes features that are being actively developed in the Weaver and thus might change
:::

The code [ALWeaver](https://apps-test.suffolklitlab.org/start/ALWeaver/assembly_line/#/1&new_session=1) generates is just a starting point. It uses the [labels and variables you added to your documents](doc_vars_reference.md) to make an interview that uses questions and features from the AssemblyLine library.

This page breaks down what each of these "blocks" (the sections of text that appear between `---`s)
do individually. You shouldn't have to think about every block as you develop your interview, but as
you use more advanced features of [docassemble](https://docassemble.org), knowing what these blocks do
will help.

## Include
Imports the AssemblyLine package and, 🚧 for now 🚧, the MassAccess package too. As described in the [docassemble documentation](https://docassemble.org/docs/initial.html#include), this incorporates the questions in these two YAML files, as if the contents of those files were copy pasted right in this block. This gives you
access to all of the pre-created questions in AssemblyLine.

```yml
include:
  - docassemble.AssemblyLine:al_package.yml
  - docassemble.MassAccess:massaccess.yml
---
```

## Metadata
As the comment says, these [metadata block](https://docassemble.org/docs/initial.html#metadata) values control two things:

1. the text in this interview's browser tab
1. the name of the interview on a user's list of saved interviews if they're logged in

You can explore some other settings that you can define here in the [docassemble documentation](https://docassemble.org/docs/initial.html#metadata).

```yml
metadata:
  title: |
    209a 258e motion for impoundment
  short title: |
    209a 258e motion for impoundment
  tags:
    - BE-04-00-00-00
---
```

## AssemblyLine metadata

```yml
comment: |
  This section is used by MAVirtualCourts to control how some of the questions work.
mandatory: True
code: |
  interview_metadata # make sure we initialize the object
  if not defined("interview_metadata['a_258e_motion_for_impoundment']"):
    interview_metadata.initializeObject('a_258e_motion_for_impoundment')
  interview_metadata['a_258e_motion_for_impoundment'].update({
    'title': '209a 258e motion for impoundment',
    'short title': '209a 258e motion for impoundment',
    'description': '209a 258e motion for impoundment',
    'original_form': '',
    'allowed courts': [
      'Land Court',
    ],
    'categories': [
      'BE-04-00-00-00',
    ],
    'logic block variable': 'a_258e_motion_for_impoundment',
    'attachment block variable': 'a_258e_motion_for_impoundment_attachment',
    'typical role': 'plaintiff',
  })
---
```

1. `title`, `short title`, and `description` allow your organization's site to show more information about your form and to organize your forms more easily.
1. `original_form` is simply a link to the original, fillable PDF form that this interview is automating, if it exists.
1. 🚧 `allowed courts` allows your code to decide which courts to let the user pick from when they need to pick their court, usually used in conjunction with [AL Generic Jurisdiction](https://github.com/SuffolkLITLab/docassemble-ALGenericJurisdiction).
1. `categories` is the [LIST taxonomy](https://taxonomy.legal/) code for this interview, which can be used by your organization to organize your interviews.

1. `attachment block variable` used to be used in the code that sends documents to courts. It's now deprecated in favor of the [ALDocument object block](#aldocument-object-block)
1. `logic block variable` is also deprecated
1. `typical role`: controls which questions the user gets asked, and serves the same purpose as the code in the [interview order block](#interview-order)

## Main intro page
Adds this text to the organization's intro page that appears at the beginning of every interview. This lets your user know right away that they have gotten to the right form (or the wrong one). Note that this can (and maybe should) be different from the short title in the [metadata block](#metadata)

```yml
code: |
  interview_short_title = 'File a 209a 258e motion for impoundment'
---
```

## Case type questions
Changes the wording of AssemblyLine questions depending on it's value. It can be either:

- a court-case type: 'starts_case', 'existing_case', or 'appeal'
- a letter: 'letter'
- other: 'other', 'other_form'

```yml
code: |
  al_form_type = 'existing_case'
---
```

## Navigation
[`navigation`](https://docassemble.org/docs/initial.html#navigation%20bar) and [`sections`](https://docassemble.org/docs/initial.html#sections) work with [`nav.set_section()`](https://docassemble.org/docs/functions.html#DANav.show_sections) to show the column on the left that lets your users jump to a screen that lets them edit their information in your interview. Avoids using the 'Back' button which deletes answers.

```yml
features:
  navigation: True
---
sections:
  - review_a_258e_motion_for_impoundment: Review your answers
---
```

## Interview order
Controls the order in which your screens are shown.

There is a block with the id of `main_order_<name-of-your-interview-here>` that is directly after this block. You shouldn't have to change this code unless you are 🚧 combining multiple interviews together 🚧.

The full interview order block will look something like this. We'll go over each line individually below.

```yml
id: interview_order_a_258e_motion_for_impoundment
code: |
  # Set the allowed courts for this interview
  allowed_courts = interview_metadata["a_258e_motion_for_impoundment"]["allowed courts"]
  nav.set_section('review_a_258e_motion_for_impoundment')
  user_role = 'plaintiff'
  one_of_your_custom_questions
  users[0].phone_number
  another_of_your_custom_questions
  # Set the answer file name.
  set_parts(subtitle=str(users))
  set_progress(16.67)
  trial_court.division
  interview_order_a_258e_motion_for_impoundment = True
---
```

1. `allowed_courts` allows the developer to limit which courts the person filling out the form can pick from, making it easier for them to pick the right court. By default, it's using the same values that are in the [metadata block](#assemblyline-metadata).
1. `nav.set_section()` comes after `al_intro_screen` and `a_258e_motion_for_impoundment_intro` so that the user can't click to edit their answers before they've actually been asked any questions.
1. `user_role` tells AssemblyLine which questions to ask about the main party listed on the form.

Code for your pages comes next. All your questions should be triggered in here. You will probably make major edits to the code here, changing the order and adding branching logic.

1. `set_parts(subtitle=str(users))` adds to the information a logged in user will listed for this interview in their list of interviews. For an attorney, they should see the name of their clients. For a self represented litigant, they should see their name.
1. `set_progress()` changes the progress bar shown to the person who's interacting with the form. When they are at the beginning of the form, it should be empty. When they are at the end, other code will make sure it is full. The [ALWeaver](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) tries to handle intermediate values between those two places that will make sense to the user. The example interview is short, so intermediate progress is only set once.
1. This final variable is customized for your interview. It lets you trigger all the code in this entire code block. If you are including this interview in another interview, you can use this variable to trigger this particular question order. It is also triggered in the [main order block](#main-order)

## Main Order

```yml
mandatory: True
comment: |
  This block includes the logic for standalone interviews.
  Delete mandatory: True to include in another interview
id: main_order_a_258e_motion_for_impoundment
code: |
  al_intro_screen
  a_258e_motion_for_impoundment_intro
  # Interview order block has form-specific logic controlling order/branching
  interview_order_a_258e_motion_for_impoundment_intro
  signature_date
  # Save (anonymized) interview statistics.
  store_variables_snapshot(data={'zip': users[0].address.zip})
  a_258e_motion_for_impoundment_preview_question  # Pre-canned preview screen
  basic_questions_signature_flow
  users[0].signature
  a_258e_motion_for_impoundment_download
---
```

There is some AssemblyLine code that comes after your own custom interview order code. You will probably leave this code alone as well:

1. `set_parts(subtitle=str(users))` adds to the information a logged in user will listed for this interview in their list of interviews. For an attorney, they should see the name of their clients. For a self represented litigant, they should see their name.
1. `set_progress()` changes the progress bar shown to the person who's interacting with the form. When they are at the beginning of the form, it should be empty. When they are at the end, other code will make sure it is full. The [ALWeaver](https://apps-test.suffolklitlab.org/start/ALWeaver/assembly_line/#/1&new_session=1) tries to handle intermediate values between those two places that will make sense to the user. The example interview is short, so intermediate progress is only set once.
1. `signature_date` is needed on every form that has a signature (it holds the date that the user is signing the form).
1. You should be very thoughtful when you use `store_variables_snapshot()`. It lets you gather data about how your form is being used. Care must be taken to anonymize it. Just removing a name is not sufficient.
1. `a_258e_motion_for_impoundment_preview_question` will trigger [the preview screen](#preview).
1. `basic_questions_signature_flow` allows the user to pick what device to sign on. This lets them send the form to a smartphone for signing.
1. `users[0].signature` shows the user the signature screen.

## Your screens
These `question` blocks control the screens your clients will see that are specific to your interview.

### Your interview's intro

```yml
comment: |
  This question is used to introduce your interview. Please customize
id: 209a 258e motion for impoundment
continue button field: a_258e_motion_for_impoundment_intro
question: |
  209a 258e motion for impoundment
subquestion: |
  209a 258e motion for impoundment
---
```

### Preview
Users can see the final form that they will then be signing before they sign it.

```yml
id: Review your form before you sign it
continue button field: a_258e_motion_for_impoundment_preview_question
question: |
  Review your form before you sign it
subquestion: |
  Here is a preview of the form you'll sign on the next page. 
  
   ${ al_user_bundle.as_pdf() }
  
  Remember to come back to this window to continue and sign your form.
---
```

## Your questions
[Question blocks](https://docassemble.org/docs/questions.html) will show screens with information and questions. You will probably edit these blocks as you identify your needs and the needs of the people using your tools.

```yml
id: information to be impounded
question: |
  Information to be impounded
subquestion: |
  Information that you impound will be kept private from... TODO: add explanation.
fields:
  - 'Impound personal information': impound_personal_information
    datatype: yesno
  - 'Impound case record information': impound_case_record_information
    datatype: yesno
  - 'Case record information to be impounded': case_record_information_to_be_impounded
    maxlength: 340
  - 'Impound information ex parte': impound_information_ex_parte
    datatype: yesno
---
```

## Download
Users will be able to download or email the form. They may sometimes be able to submit it to the court.

```yml
progress: 100
mandatory: True
id: download
question: |
  Your form is ready to download and file
subquestion: |
  Thank you ${users}. Your form is ready to download and deliver.
  
  Below is a preview of your form.
  
  ${ al_user_bundle.download_list_html() }
need: a_258e_motion_for_impoundment
---
```

## Attachments

### ALDocument

Leave this block as it is if possible. Prepares to use this document in the `ALDocumentBundle`.

:::info
What ALDocument does:

1. Usually you need to attachment blocks for a PDF - a preview without a signature and the final document with a signature. ALDocument takes care of that for you.
1. It lets you combine files in different ways easily. For example, when sending a packet to the court you might want to add a cover page, but when sending one to the client you might want to include an instruction sheet instead.
:::

<!-- 
1. AssemblyLine is working on ways to help the final download screen present those documents to the user more clearly with less work from the developer.
 -->

```yml
objects:
  - a_258e_motion_for_impoundment_attachment: ALDocument.using(title="209a 258e motion for impoundment", filename="209a_258e_motion_for_impoundment", enabled=True, has_addendum=False)
---
```

### ALDocumentBundle

Leave this block as it is if possible. Adds your file to two 'bundles' automatically - one for the user and one for the court.

```yml
objects:
  - al_user_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="209a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")
  - al_court_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="209a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")
---
```

### Attachment block

[How to fill in your PDF fields with docassemble](https://docassemble.org/docs/documents.html#pdf%20template%20file).

```yml
attachment:
    variable name: a_258e_motion_for_impoundment_attachment[i]
    name: 209a 258e motion for impoundment
    filename: a_258e_motion_for_impoundment
    skip undefined: True
    pdf template file: 209a_258e_motion_for_impoundment.pdf
    fields: 
      - "signature_date": ${ signature_date }
      # If it is a signature, test which file version we're expecting. leave it empty unless it's the final attachment version
      - "user_signature": ${ users[0].signature if i == 'final' else '' }
      - "impound_personal_information": ${ impound_personal_information }
      - "impound_case_record_information": ${ impound_case_record_information }
      - "case_record_information_to_be_impounded": ${ case_record_information_to_be_impounded }
      - "impound_information_ex_parte": ${ impound_information_ex_parte }
      - "request_based_on": ${ request_based_on }
      - "attach_additional_pages": ${ attach_additional_pages }
      - "motion_allowed_ex_parte": ${ motion_allowed_ex_parte }
      - "motion_allowed_after_hearing": ${ motion_allowed_after_hearing }
      - "motion_denied": ${ motion_denied }
---
```

An [attachment block](https://docassemble.org/docs/documents.html#attachment) for a PDF. This is how you will put your user's answers into a PDF's fields. You will have one for every PDF in your form. Its name is based on your PDF file name.

<!-- 
```yml
filename: a_258e_motion_for_impoundment
```
This is the filename the user will see. Underscores are hard to see in filenames sometimes. You might change this to something like `a-258e-motion-for-impoundment`.
 -->

## ALDocument Object Block

<!-- TODO(brycew): flesh this out more -->

```yml
objects:
  - a_258e_motion_for_impoundment_attachment: ALDocument.using(title="258e Motion for Impoundment", filename="a_258e_motion_for_impoundment", enabled=True, has_addendum=False)
---
objects:
  - al_user_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")
  - al_court_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")
---
```

## Review screen
The 'Back' button deletes answers as the user goes farther back. When they press to continue, they will have to fill in their answers again. The review screen lets them edit their answers without deleting any of them.

The code generated for this section is just a starting point. You will probably have to make changes to get what you need.

```yml
id: a_258e_motion_for_impoundment review screen
event: review_a_258e_motion_for_impoundment
question: |
  Review Screen
subquestion: |
  Edit your answers below
review: 
  - Edit: impound_personal_information
    button: |
      **Impound personal information**:
      ${ word(yesno(impound_personal_information)) }
```
