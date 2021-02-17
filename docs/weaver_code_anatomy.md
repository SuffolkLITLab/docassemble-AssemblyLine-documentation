---
id: yaml_anatomy
title: The parts of an ALWeaver generated YAML file
sidebar_label: View the generated code
slug: /generated_yaml
---

🚧 This page is very much under construction as of 02/17/2021 as we develop the weaver's capabilities. 🚧

The code [ALWeaver](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) generates is just a starting point. It uses the [labels and variables you added to your documents](doc_vars_reference.md) to make an interview that uses the AssemblyLine library.

Through that code, you can also see examples of [docassemble](https://docassemble.org) features you can use other places.

## Include
Imports the AssemblyLine package and, for now, the MassAccess package too. Gives access to the variables in the packages.

```yml
include:
  - docassemble.AssemblyLine:al_package.yml
  - docassemble.MassAccess:massaccess.yml
---
```

## Metadata
As the comment says, these [metadata block](https://docassemble.org/docs/initial.html#metadata) values do two things:
1. Control the text in the browser tab of the interview
1. Control the name of the interview on a user's list of saved interviews if they're logged in

```yml
comment: |
  The metadata section controls the tab title and saved interview title. You can delete this section if you include this YAML file in another YAML file.
metadata:
  title: |
    209a 258e motion for impoundment
  short title: |
    209a 258e motion for impoundment
---
```


## AssemblyLine metadata
<!-- This might not get done in time, so better to have nothing than something confusing. -->

<!-- Leave this block as it is if possible. This code block always gets run. The values of these variables affect how your code will work. -->

<!-- Some of these variables be used in the future to help with stuff. Some are used by your code or the AssemblyLine code. -->

1. `title`, `short title`, `description`, `original_form`, and `categories` allow your organization's site to show more information about your form and to organize your forms more easily.
1. `allowed courts`: Currently used by MassAccess, we may develop this further. It can allow your code to decide which courts to let the user pick from when they need to pick their court.


<!-- 1. `typical role`: controls which questions the user gets asked. -->
<!-- 1. `logic block variable`: Used to trigger the main interview order block that tries to control the order in which questions are asked. -->
<!-- 1. `attachment block variable`:  -->

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
      'Guardianship',
    ],
    'logic block variable': 'a_258e_motion_for_impoundment',
    'attachment block variable': 'a_258e_motion_for_impoundment_attachment',
    'typical role': 'plaintiff',
  })
---
```

## Main intro page
Adds this text to the organization's intro page that appears at the beginning of every interview. This lets your user know right away that they have gotten to the right form (or the wrong one).

```yml
code: |
  interview_short_title = 'File a 209a 258e motion for impoundment'
---
```

## Case type questions
Triggers specific AssemblyLine questions depending on its value.

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

There is some AssemblyLine code that comes before your own custom interview order code. You will probably leave this code alone:

1. `nav.set_section()` comes after `al_intro_screen` and `a_258e_motion_for_impoundment_intro` so that the user can't click to edit their answers before they've actually been asked any questions.
1. `allowed_courts` is currently connected to MassAccess, but it will be expanded in the future. It allows the developer to limit which courts the person filling out the form can pick from. That makes it easier for them to pick the right court.
1. `user_role` tells AssemblyLine which questions to ask about the main party listed on the form.

Code for your pages comes next. All your questions should be triggered in here. You will probably make major edits to the code here, changing the order and adding branching logic.

<!-- TODO: Why is `allowed_courts` set lower down as opposed to before all questions or in some separate block? -->
<!-- TODO: Should `nav.set_section()` come after the first actual question is asked if that's really the purpose? -->

```yml
id: interview_order_a_258e_motion_for_impoundment
code: |
  # This is a placeholder to control logic flow in this interview
  # Intro screen/splash screen
  al_intro_screen
  a_258e_motion_for_impoundment_intro
  # Set the allowed courts for this interview
  allowed_courts = interview_metadata["a_258e_motion_for_impoundment"]["allowed courts"]
  nav.set_section('review_a_258e_motion_for_impoundment')
  user_role = 'plaintiff'
  one_of_your_custom_questions
  another_of_your_custom_questions
  # Set the answer file name.
  set_parts(subtitle=str(users))
  set_progress(16.67)
  signature_date
  # Save (anonymized) interview statistics.
  store_variables_snapshot(data={'zip': users[0].address.zip})
  a_258e_motion_for_impoundment_preview_question # Pre-canned preview screen
  basic_questions_signature_flow
  users[0].signature
  a_258e_motion_for_impoundment = True
---
```

There is some AssemblyLine code that comes after your own custom interview order code. You will probably leave this code alone as well:

1. `set_parts(subtitle=str(users))` adds to the information a logged in user will listed for this interview in their list of interviews. For an attorney, they should see the name of their clients. For a self representant litigant, they should see their name.
1. `set_progress()` changes the progress bar shown to the person who's interacting with the form. When they are at the beginning of the form, it should be empty. When they are at the end, other code will make sure it is full. The [ALWeaver](https://apps-test.suffolklitlab.org/start/assemblylinewizard/assembly_line/#/1&new_session=1) tries to handle intermediate values between those two places that will make sense to the user. The example interview is short, so intermediate progress is only set once.
1. `signature_date` is needed on every form that we know of.
1. You should be very thoughtful when you use `store_variables_snapshot()`. It lets you gather data about how your form is being used. Care must be taken to anonymize it. Just removing a name is not sufficient.
1. `a_258e_motion_for_impoundment_preview_question` will trigger [the preview screen](#preview).
1. `basic_questions_signature_flow` allows the user to pick what device to sign on. This lets them send the form to a smartphone for signing.
1. `users[0].signature` shows the user the signature screen.
1. This final variable is customized for your interview. It lets you trigger all the code in this entire code block. If you are including this interview in another interview, you can use this variable to trigger this particular question order.


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
