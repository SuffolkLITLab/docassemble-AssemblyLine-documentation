---
id: yaml_anatomy
title: |
  Appendix: Understanding the YAML code
sidebar_label: |
  Appendix: Understanding the YAML code
slug: generated_yaml
---

The [ALWeaver](https://apps-dev.suffolklitlab.org/start/ALWeaver/assembly_line/#/1&new_session=1) generates code that is a starting point. It uses the [labels and variables you added to your documents](doc_vars_reference.md) to make an interview that uses questions and features from the AssemblyLine library.

This page breaks down what each of these "blocks" (the sections of text that appear between `---`s)
do individually. You don't have to think about every block as you develop your interview, but as
you use more advanced features of [docassemble](https://docassemble.org/docs.html), knowing more about these blocks 
will help.

## Include

An include block incorporates content (code blocks, questions blocks, etc.) from other YAML files. When you run the interview, docassemble acts as if all of the content in the YAML files listed below was copied and pasted right in this exact spot. 
This is described in more detail in the [docassemble documentation](https://docassemble.org/docs/initial.html#include).

This `include` block includes the AssemblyLine package, giving you access to all of the pre-created questions in AssemblyLine. It also adds the jurisdiction and organization packages that you picked in the Weaver. By default, the jurisdiction package is ALMassachusetts, and the organization package is the MassAccess package.

```yml
include:
  - docassemble.AssemblyLine:al_package.yml
  - docassemble.ALMassachusetts:al_massachusetts.yml
  - docassemble.MassAccess:massaccess.yml
---
```

## Metadata

These [metadata block](https://docassemble.org/docs/initial.html#metadata) values control two things:

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

## Interview metadata and metadata for publishing on CourtFormsOnline

Current AssemblyLine interviews use an expanded [metadata block](https://docassemble.org/docs/initial.html#metadata) that includes additional fields beyond the basic `title` and `short title`. This expanded metadata helps organizations better categorize, describe, and manage their interviews.

:::info
The `interview_metadata` variable used in older AssemblyLine interviews is now deprecated. New interviews should include all metadata directly in the `metadata` block as shown below.
:::

```yml
metadata:
  title: |
    209a 258e motion for impoundment
  short title: |
    209a 258e motion for impoundment
  description: |
    This interview helps you fill out a form to ask the court to keep 
    certain information in your 209A or 258 personal protection order
    or restraining order case private (impounded).
  authors:
    - Jane Doe
    - Suffolk LIT Lab
  approved_by:
    - name: Suffolk LIT Lab
      url: https://suffolklitlab.org
      logo: https://suffolklitlab.org/assets/logo.png
    - name: Massachusetts Trial Court
      url: https://www.mass.gov/info-details/trial-court
      logo: https://www.mass.gov/files/styles/organization_logo/public/2025-08/Trial-Court-Seal-Final-color.png?itok=tQKsUwsu
  can_I_use_this_form: |
    You can use this form if you want to ask the court to keep some 
    information in your restraining order case private. This might include personal 
    information or details about your case.
  before_you_start: |
    Before you start, gather information about what specific details 
    you want the court to keep private and why this is necessary.
  when_you_are_finished: |
    When you are finished with this form, you need to download and file it with the
    court. The court will either let you know when you need to appear to argue
    your motion or they may decide based only on the paper that you file.
    Either way, you will wait about a week for a letter from the court.
  efiling_enabled: False
  integrated_efiling: False
  integrated_email_filing: False
  requires_notarization: False
  unlisted: False
  landing_page_url: https://courtformsonline.org/ma/forms/209a-258e-motion-for-impoundment
  maturity: production
  estimated_completion_minutes: 15
  estimated_completion_delta: 5
  languages:
    - en
  help_page_url: https://www.mass.gov/info-details/impoundment
  help_page_title: Information about Impoundment
  LIST_topics:
    - BE-04-00-00-00
  tags:
    - BE-04-00-00-00
  jurisdiction: NAM-US-US+MA
  original_form: https://www.mass.gov/forms/motion-for-impoundment
  original_form_published_on: 2021-01-01
  review_date: 2024-01-01
  form_titles:
    - Motion for Impoundment
  form_numbers:
    - MPC-123
  fees:
    - Filing fee: 0.00
  footer: |
    Created by Suffolk LIT Lab and community partners.
  update_notes: |
    Form created in 2021. Last reviewed 2024 with no changes needed.
---
```

### CourtFormsOnline metadata fields currently used

CourtFormsOnline currently reads and uses the following `metadata` keys from interview `/list?json=1` responses:

1. `title`
1. `short title`
1. `description`
1. `can_I_use_this_form`
1. `before_you_start`
1. `help_page_url`
1. `help_page_title`
1. `original_form`
1. `original_form_published_on`
1. `review_date`
1. `form_titles`
1. `form_numbers`
1. `fees`
1. `LIST_topics`
1. `jurisdiction`
1. `maturity`
1. `efiling_enabled`
1. `integrated_efiling`
1. `integrated_email_filing`
1. `requires_notarization`
1. `estimated_completion_minutes`
1. `estimated_completion_delta`
1. `languages`
1. `unlisted`
1. `footer`
1. `update_notes`

Newly supported metadata fields in CourtFormsOnline include:

1. `efiling_enabled`: Used for form status labels (for example, e-filing available).
1. `integrated_efiling`: Alternative key for e-filing availability; supported by CourtFormsOnline.
1. `integrated_email_filing`: Alternative key for email-filing availability; supported by CourtFormsOnline.
1. `requires_notarization`: Shows a notary warning and links to the jurisdiction-specific notary guide.
1. `unlisted`: Hides interviews from CourtFormsOnline listings.
1. `footer`: Reserved custom footer text (currently normalized and available to components).

### Expanded metadata fields

1. **Basic information fields:**
   - `title` and `short title`: Control the interview name in browser tabs and saved interview lists
   - `description`: A detailed explanation of what the interview does and helps accomplish
   - `can_I_use_this_form`: Helps users determine if this is the right form for their situation.
   - `before_you_start`: Information users should gather or consider before beginning
   - `when_you_are_finished`: Information users should know when they are finished. Optional; some generic information will be shown if omitted.
   - `authors`: A list of people who contributed to the interview. Will be shown in the "about" page of the interview when it runs.
   - `approved_by`: A list of organizations who officially approved the interview, will be shown with logo on the landing page to convey authority and promote trust.

2. **Technical and administrative fields:**
   - `maturity`: The development status (`production`, `development`, or `testing`)
   - `estimated_completion_minutes`: How long most users take to complete the interview
   - `estimated_completion_delta`: The typical variation in completion time (±)
   - `languages`: List of language codes for available translations (e.g., `en`, `es`)
   - `review_date`: When the interview should next be reviewed for updates
   - `efiling_enabled`: Whether e-filing is available (boolean or `"email"` for email filing workflows)
   - `integrated_efiling`: Alternative key for e-filing support; accepted by CourtFormsOnline
   - `integrated_email_filing`: Alternative key for email filing support; accepted by CourtFormsOnline
   - `requires_notarization`: Whether signing the completed form requires notarization
   - `unlisted`: If `true`, excludes the interview from CourtFormsOnline listings
   - `footer`: Optional custom footer content for downstream display/integrations

3. **Help and reference fields:**
   - `help_page_url`: Link to additional help resources
   - `help_page_title`: Display name for the help page link
   - `original_form`: URL to the original blank form being automated
   - `original_form_published_on`: Publication date of the original form
   - `landing_page_url`: URL to the landing page for the form, for help with back links. If it is not a subdomain of courtformsonline.org, the provided landing page will be used
      instead of generating a landing page in the CourtFormsOnline.org site.

4. **Classification and organization:**
   - `LIST_topics`: [LIST taxonomy](https://taxonomy.legal/) codes (preferred method)
   - `tags`: Fallback taxonomy codes if LIST_topics isn't available
   - `jurisdiction`: Geographic scope using SALI/FOLIO jurisdiction codes (see https://openlegalstandard.org/), like NAM-US-US+MA (Usually just need to adjust the last two letters). Can be a list, like `['NAM-US-US+MA', 'NAM-US']`
   - `form_titles`: Human-readable names of forms included
   - `form_numbers`: Official form numbers, if assigned
   - `fees`: Filing fees and other costs

5. **Maintenance and updates:**
   - `update_notes`: Record of changes and review history

### Syndication tips

If you would like your state's forms to be syndicated on CourtFormsOnline.org, you should include at least the following metadata:

1. `title`
1. `short title`
1. `description`
1. `LIST_topics`
1. `jurisdiction`
1. `landing_page_url`

When `landing_page_url` is provided, we will index your forms on the landing page, an `all forms` page for your jurisdiction,
and then link directly to your landing page from the individual form's card.

## Main intro page

Adds this text to the organization's intro page that appears at the beginning of every interview. This lets your user know right away that they have gotten to the right (or wrong) form. Note that this can (and should) be a more direct and detailed call to action, e.g. ("File a \_\_\_\_" or "Ask the court for \_\_\_\_"), rather than a simple short title, like the short title in the [metadata block](#metadata).

```yml
code: |
  interview_short_title = 'File a 209a 258e motion for impoundment'
---
```

## Case type questions

Changes the wording of AssemblyLine questions depending on its value. It can be either:

- a court-case type: 'starts_case', 'existing_case', or 'appeal'
- a letter: 'letter'
- other: 'other', 'other_form'

```yml
code: |
  al_form_type = 'existing_case'
---
```

## Navigation

[`navigation`](https://docassemble.org/docs/initial.html#navigation%20bar) and [`sections`](https://docassemble.org/docs/initial.html#sections) work with [`nav.set_section()`](https://docassemble.org/docs/functions.html#DANav.show_sections) to show the column on the left that lets your users jump to a screen that lets them edit their information in your interview. 
This helps users avoid using the 'Back' button which deletes their answers.

By default, there is a single "Review" section, that covers the whole interview. In longer interviews, adding more sections can show the user a road map of what they will have to do and where they are now.

```yml
sections:
  - review_a_258e_motion_for_impoundment: Review your answers
---
```

## Interview order

Controls the order in which your screens are shown.

The full interview order block will look something like this. We'll go over each line individually below.

```yml
id: interview_order_a_258e_motion_for_impoundment
code: |
  # Set the allowed courts for this interview (if needed)
  # allowed_courts = ["Probate and Family Court", "District Court"]
  nav.set_section("review_a_258e_motion_for_impoundment")
  user_role ="plaintiff"
  user_ask_role = "plaintiff"
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

1. `allowed_courts` allows the developer to limit which courts the person filling out the form can pick from, making it easier for them to pick the right court. This is now configured directly in the interview code as shown above, rather than using the deprecated `interview_metadata` approach. This is currently used only in Massachusetts court forms.
1. `nav.set_section()` comes after `al_intro_screen` and `a_258e_motion_for_impoundment_intro` so that the user can't click to edit their answers before they've actually been asked any questions.
1. `user_role` and `user_ask_role` tell AssemblyLine which questions to ask about the main party and opposing parties listed on the form. These should be the same as the `typical role`. However, if `typical role` is `unknown`, then the `user_ask_role` variable will be here instead, and will ask the user what role they have in the case.

Code for your custom questions comes next. All your questions should be triggered in here. You will probably make major edits to the code here, changing the order and adding branching logic.

1. `set_parts(subtitle=str(users))` adds to the information a logged in user will see for this interview in their list of interviews. For an attorney, they should see the name of their clients. For a self represented litigant, they should see their name. You can read more about `set_parts` in the [docassemble documentation](https://docassemble.org/docs/functions.html#set_parts).
1. `set_progress()` changes the progress bar shown to the person who's interacting with the form. When they are at the beginning of the form, it should be empty. When they are at the end, other code will make sure it is full. The [ALWeaver](https://apps-dev.suffolklitlab.org/start/ALWeaver/assembly_line/#/1&new_session=1) tries to handle intermediate values between those two places that will make sense to the user. The example interview is short, so intermediate progress is only set once.
1. The final variable in the block (`interview_order_a_258e_motion_for_impoundment` above) is customized for your interview. It lets you trigger all the code in this entire code block. In this generated code, the [main order block](#main-order) triggers it. 
If you are including this interview in another interview, remove the main order block. Then you can use this variable if you want to trigger this particular question order.

## Main Order

This block controls the order of things that do not need to be customized for your specific interview, like intro screens, signatures, etc. 
You shouldn't have to change that code unless you are 🚧 combining multiple interviews together 🚧.

```yml
mandatory: True
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

1. `signature_date` is the date that the user signed the form, and is needed on every form that has a signature.
1. `store_variables_snapshot()` lets you gather data about this interview session. _You should be very thoughtful about what you store, and care must be taken to anonymize it_. Just removing a name is not sufficient.
  
  If you want to avoid asking the user for their address, you will need to change the information you save here. This code forces the user's address to be asked.

1. `a_258e_motion_for_impoundment_preview_question` will trigger [the preview screen](#preview).
1. `basic_questions_signature_flow` allows the user to pick what device to sign on. This lets them send the form to a smartphone for signing.
1. `users[0].signature` shows the user the signature screen.

## Your screens

These `question` blocks control the screens your clients will see that are specific to your interview.

### Your interview's intro

```yml
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

Usually you need to make at least two different attachment blocks for a PDF: a preview without a signature and the final document with a signature. 
The ALDocument class takes care of that for you. It also contains some nice features like adding addenda if
an interviewee's answers are too long.

```yml
objects:
  - a_258e_motion_for_impoundment_attachment: ALDocument.using(title="209a 258e motion for impoundment", filename="209a_258e_motion_for_impoundment", enabled=True, has_addendum=False)
---
```

### ALDocumentBundle

Leave this block as it is if possible. Adds your file to two 'bundles' automatically - one for the user and one for the court.

The ALDocumentBundle class lets you combine files in different ways easily. For example, when sending a packet to the court you might want to add a cover page, but when sending one to the client you might want to include an instruction sheet instead. With the ALDocumentBundle class, this is as simple as adding the new attachment to the
`elements` parameter below.

```yml
objects:
  - al_user_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="209a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")
  - al_court_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="209a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")
---
```

### Attachment block

An [attachment block](https://docassemble.org/docs/documents.html#attachment) for a PDF. This is how you will put your user's answers into a PDF's fields. You will have one for every PDF in your form. Its name is based on your PDF file name.

[How to fill in your PDF fields with docassemble](https://docassemble.org/docs/documents.html#pdf%20template%20file).

```yml
attachment:
    name: 209a 258e motion for impoundment
    filename: a-258e-motion-for-impoundment
    variable name: a_258e_motion_for_impoundment_attachment[i]
    skip undefined: True
    pdf template file: 209a_258e_motion_for_impoundment.pdf
    fields: 
      - "signature_date": ${ signature_date }
      # It's a signature: test which file version this is; leave empty unless it's the final version
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

There might be additional blocks that start like `continue button field: users.revisit` or `table: users.table`.
These blocks are used by the review screen to display and edit multiple pieces of information, like plaintiffs 
and their contact information.
