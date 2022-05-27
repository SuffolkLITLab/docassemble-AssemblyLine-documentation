---
id: efiling_through_docassemble
title: |
  E-filing through Docassemble
sidebar_label: Integrating Docassemble interviews with e-filing
slug: /efiling/docassemble
---

This is a guide to get from a working Assembly Line Interview to an interview that can e-file through our EFSP to the Tyler EFM system.

:::caution
This e-filing functionality is being updated often, so this documentation might be out of date.
If anything is incorrect or doesn't work as expected, feel free to email us at
[massaccess@suffolk.edu](mailto:massaccess@suffolk.edu).
:::

This example interview will be simple; it will make an initial filing into a new case. While our API is flexible enough to
let you add capabilities and features to your interview, it's also complex, and some of that complexity will need
to be embedded into your interview.

## Before starting

Before starting this guide, you should have:

* a working docassemble interview, preferably using the AssemblyLine.
  * If you don't have one yet, follow [these steps to author your interview](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/planning).
* contacted us for access to the EFSP server. We aren't yet making access publicly available, but will include an interest form here when we do.

## Steps

### Server Setup

To start, you'll need to setup the server.

First, install the [docassemble.EFSPIntegration](https://github.com/SuffolkLITLab/docassemble-EFSPIntegration) package on your server in docassemble's [Package Management menu](https://docassemble.org/docs/packages.html#installing).

Then, set your docassemble server's [configuration](https://docassemble.org/docs/config.html).
In the configuration file, add the below section, replacing each value on the right with the information that we provide to you.

```yaml
efile proxy:
  api key: abcDEFghiJKL123456789
  url: https://efile.serverurl.com:9000
  jeffnet api token: ABCDEF123  # only required if your interview operates is Louisiana
  global waiver: 123a4567-b89c-1234-abcd-123456789000
  global server admins:
    - your_email@example.com
```

### Including the EFSP Library

Start by making a blank YAML file in a [playground project](https://docassemble.org/docs/playground.html#interview_files).

Next, add our EFSP library to your interview, as well as the AssemblyLine library (so we can use the ALDocument class).

```yaml
include:
  - docassemble.AssemblyLine:assembly_line.yml
  - docassemble.EFSPIntegration:efiling_integration.yml
  - docassemble.EFSPIntegration:login_qs.yml
  - docassemble.EFSPIntegration:codes_helper.yml
```

Next, create a connection to our EFSP server. This allows your interview to communicate with our EFSP server.

```yaml
code: |
  proxy_conn = ProxyConnection(credentials_code_block='tyler_login', default_jurisdiction='illinois')
```

The `credentials_code_block` is a YAML code block that triggers asking the user questions to login to the Tyler system.
We provide a code block that additionally handles password resets and incorrect logins. It defines `tyler_login` at the end, which is why we pass `tyler_login` to the connection object. If you want to have different login screens, you can define your own code block, as long as it sets the trigger variable to
`True` only if `proxy_conn.authenticate_user(...).is_ok().`.

The `default_jurisdiction` is the jurisdiction that you are filing in. Currently, we only support `illinois`, and `louisiana` (with `massachusetts` coming soon).

### Get the information needed to file

As mentioned previously, this interview will create a new case with the court, aka an initial filing.
To keep it simple, the interview will only file one type of case; this lets us hardcode a few pieces of information in our interview.

We'll first need to find the right "codes" for our interview. Tyler's E-filing system defines specific codes for many different
parts of the filing process, include the over-arching category of the case, the more specific case type, and even things like whether or not
the filed document should be confidential or not.

To find the right codes, navigate through the URLs provided by visiting <https://efile.suffolklitlab.org:9000/jurisdictions/illinois/codes>.
Firefox will display clickable links that you can use to browse the different codes.

For example, say we want to write an Adoption interview. The codes in Illinois are split by courts, so to see the case categories available to
one particular court, say Adams, we can go to
<https://efile.suffolklitlab.org:9000/jurisdictions/illinois/codes/courts/adams/categories>, and scroll through the responses until we find the "Adoption" entry,
code 7306. We would then see the case types for Adoption cases in adams at
<https://efile.suffolklitlab.org:9000/jurisdictions/illinois/codes/courts/adams/case_types?category_id=7306&timing=Initial>, which is 25361.

The endpoints should say when they need parameters, like we provided with `category_id=7306&timing=Initial` above.

We are currently working on a better interface for finding and handling these codes at runtime based on our experiences in Illinois and Massachusetts. Stay tuned.

For this guide, we'll stick with a single court, to make things simple to understand. We'll use the following codes:

variable name | purpose | example value | example meaning
---------|-----------|-----------|-------------
`tyler_case_category` | the over arching category of the case | `"7306"` | Adoption
`tyler_case_type` | the specific type of case | `"25361"` | Adoption
`case_subtype` | optional, if there needs to be more specific case types | N/A | N/A
`party_type` | what the role of an individual or party is in the case | `"7067"` or `"20640"` | Adoptive parent or child
`tyler_filing_type` | what the filing actually is, usually the name of the document | `"29730"` | Application
`document_type` | If the document is confidential or not | `"5766"` | Non-confidential
`filing_component` | If this is the lead document or if it's an attachment | `"332"` | Lead document

### Give all of the info that the EFSP needs to file your doc

Now that we have all of the codes that we want, we need to define the right variables, setting their values to the codes we found above.

Your interview must define the list of `ALIndividual`, `users` and `other_parties`. Each individual should have at least a first name. Note that if only a first name is provided, then the person is assumed to be a business. `users[0]` is almost always the person completing the interview, or at least who the form is being completed on behalf of.

For each object in `users` and in `other_parties`, your interview needs to define the following attributes:

* `party_type`: this should be the Tyler party type code of that user
* `is_new`: if you are filing into an existing case and are adding additional participants to the case, this should be true. They aren't necessary since this interview is making an initial case (where all parties are implicitly new).
* `users[0].email` must be defined. Email is not required for any other parties.

```yaml
code: |
  trial_court = 'adams`
  tyler_case_category = '7306'
  tyler_case_type= '25361'
---
code: |
  users[i].name.first
  if i == 0:
    users[i].email
  users[i].party_type = '7067' # adoptive parent
  users[i].completed = True
---
code: |
  other_parties[i].name.first
  other_parties[i].party_type = '20640' # adoptive child
  other_parties[i].completed = True
```

The following variables must also be defined:

* `user_started_case`: an Assembly Line variable determining if the `users` are plaintiffs/petitioners.
* `lead_contact`: this is the person who will be contacted about the status of this filing, and can just be set to `users[0]`.
* `tyler_payment_id`: This is the payment information that Tyler needs to collect payment for the filing. It is the string of the payment method ID. We'll deal more with this in the advanced guide (coming soon), but  for now, we'll assume that the filer qualifies for a fee waiver, and can use the global waiver payment account, "global" meaning that any filer can use when filing. You can get this waiver payment account from the config: `get_config('efile proxy', {}).get('global waiver', '')`.
* `al_court_bundle` should be an ALDocumentBundle, containing all of the documents that you want to file. Each top level ALDocument or ALDocumentBundle in `al_court_bundle` will be treated as a separate filing, and each filing needs the following attributes:
  * `filing_component` and `tyler_filing_type`
  * `filename`: this will be defined by default when declaring the ALDocument
  * `filing_parties`: these are the parties that are initiating the filing. When the party that's filing is also being added in that filing, the value is the `instanceName` of docassemble var representing that individual. Usually this will be `"users[0]"`.
  * `filing_action`: for us, this will be `"efile"`

```yaml
---
code: |
  main_document.document_type = '5766'
  main_document.filing_component = '332'
  main_document.tyler_filing_type = '29730'
  main_document.filing_parties = ['users[0]']
  main_document.filing_action = 'efile'
  main_document.completed = True
```

## Interview Logic and Question Screens

Now that all of the information is defined, we just need to specify the interview order logic. Notably, you can use the variable `can_check_efile` to
ask the user if they want to efile their documents, or if they'd rather print them out themselves. You can then define the variables `ready_to_efile` and `efile` to trigger actual document to e-file.

```yaml
mandatory: True
id: main interview order block
code: |
  user_ask_role = 'plaintiff'
  users.gather(complete_attribute='completed')
  other_parties.gather(complete_attribute='completed')
  if can_check_efile:
    tyler_login
    lead_contact = users[0]
    main_document.completed
    tyler_payment_id = get_config('efile proxy', {}).get('global waiver', '')
    ready_to_efile
    efile
    ending_screen
  else:
    cannot_efile # triggers the kickout event screen
```

The full minimal interview file can be found [in the EFSPIntegration github](https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/minimal_interview.yml).
