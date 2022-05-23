---
id: efiling_through_docassemble
title: |
  E-filing through Docassemble
sidebar_label: Filing + Docassemble
slug: /efiling/docassemble
---

A guide to get from a working Assembly Line Interview to an e-fileable interview to the Tyler EFM system.

Things you should already have:

* a working docassemble interview, preferably using the AssemblyLine
* contacted us (bwilley@suffolk.edu) for access to the EFSP server

Things you need to do:

* set the server configuration (at least once)

```yaml
efile proxy:
  api key: abcDEFghiJKL123456789
  url: https://efile.serverurl.com:9000
  jeffnet api token: ABCDEF123
  global waiver: 123a4567-b89c-1234-abcd-123456789000
  global server admins:
    - your_email@example.com
```

* add our docassemble EFSP library to your interview

```yaml
---
include:
  - docassemble.EFSPIntegration:efiling_integration.yml
  - docassemble.EFSPIntegration:login_qs.yml
  - docassemble.EFSPIntegration:case_search.yml
---
```

Case search is optional, and only needed if you are filing into existing cases (which we'll do in a different guide).

```yaml
code: |
  proxy_conn = ProxyConnection(credentials_code_block='tyler_login', default_jurisdiction='illinois')
```

The `credentials_code_block` is a YAML code block that handles the screens shown to the user to login to the Tyler system.
We provide a code block, one that sets `tyler_login` at the end, and shows the appropriate screens for logging in (also handling
password resets and incorrect logins). You can define your own code block as well, as long as if sets the trigger variable to
`True` only if `proxy_conn.authenticate_user(...).is_ok().`.

The `default_jurisdiction` is the jurisdiction that you are filing in. Currently, we only support `illinois`, `louisiana`, and `massachusetts`.

## Get the information that you need to file the doc

We're going to start with the simpler to implement situation: when some one is starting a specific type of a new case with the court, aka an initial filing.

Since we're only filing one type of case, we can hardcode a few pieces of information in our interview:

* the `case_category`
* the `case_type`
* the `case_subtype` (if necessary)

To find the right codes, you can navigate through the URLs provided by visiting <https://efile.suffolklitlab.org:9000/jurisdictions/illinois/codes>.
Firefox will display clickable links that you can use to browse the different codes.

For example, say we want to write an Adoption interview. The codes in Illinois are split by courts, so to see the case categories available to
one particular court, say Adams, we can go to
<https://efile.suffolklitlab.org:9000/jurisdictions/illinois/codes/courts/adams/categories>, and scroll through the responses until we find the "Adoption" entry,
code 7306. We would then see the case types for Adoption cases in adams at
<https://efile.suffolklitlab.org:9000/jurisdictions/illinois/codes/courts/adams/case_types?category_id=7306&timing=Initial>, which is 25361.

The endpoints should say when they need parameters, like we provided with `category_id=7306&timing=Initial` above.

If you are expecting to file into different courts, a potential complication is that some courts have different codes for the same cases.
For example, Peoria county's Adoption code is 7405, and the Adoption case type is 5892.
This should be exception, but our EFSP will prevent you from filing into courts with the wrong codes.
The good news is that most case categories and case types have the same name. You can hardcode the expected name of the case category / type with
the following code block:

```python
# court_id can be any IL court, like "adams" or "peoria".
categories = proxy_conn.get_case_categories(court_id, fileable_only=True, timing='Initial')
for category in categories:
  if category['name'] == 'Adoption':
    tyler_category = category['code']
```

We are currently working on a better interface for finding and handling these codes at runtime based on our experiences in Illinois and Massachusetts. Stay tuned.

## Give all of the info that the EFSP needs to file your doc

You should have a `users` and a `other_parties` list of individual. At the very least, each of these individuals should have a first name. Note that if only a first name is provided, then the person is assumed to be a business.

For each object in `users` and in `other_parties`, you need to set the following attributes:

* `party_type`: this should be the Tyler party type code of that user
* `is_new`: if you are filing into an existing case and are adding additional participants to the case, this should be true.

Additionally, we need the following attributes.

* `users[0].email` should be set
* `user_started_case` should be set
* `lead_contact` can just be set to `users[0]`.
* `al_court_bundle` should be an ALDocumentBundle, containing all of the documents that you want to file. Each top level ALDocument or ALDocumentBundle in `al_court_bundle` will be treated as a separate filing, and each filing needs the following attributes:
  * `filename`
  * 

* change your interview logic and question screens to reflect the E-filing process