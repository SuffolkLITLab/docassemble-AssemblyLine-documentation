---
sidebar_label: py_efsp_client
title: EFSPIntegration.py_efsp_client
---

The base python client used to communicate with the E-file proxy server.

Doesn&#x27;t include anything from docassemble, and can be used without having it installed.

#### CORR\_ID\_HEADER

TODO(brycew): Figure out how to add

## LoggerWithContext Objects

```python
class LoggerWithContext(LoggerAdapter)
```

Acts like the `merge_extra` feature from LoggerAdapter (python 3.13) is always on.

See https://github.com/python/cpython/pull/107292/files.

## EfspConnection Objects

```python
class EfspConnection()
```

A python client that communicates with the E-file proxy server.

#### \_\_init\_\_

**Arguments**:

  url (str)
  api_key (str)
  default_jurisdiction (str)

#### authenticate\_user

Authenticates the user with the EFM server (not the E-file proxy).

#### register\_user

registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.
If registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.
If it&#x27;s FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id

#### get\_password\_rules

Password rules are stored in the global court, id 0.

TODO: They&#x27;re in other courts too, including 1. Could they ever be different?

#### get\_notification\_options

AKA NotificationPreferencesList

#### get\_firm

Gets info about the &quot;firm&quot; for an associated user. If a user is a pro-se, this
contains their address information.

#### update\_firm

firm should have the below keys:
* firstName, middleName, lastName if it&#x27;s a person
* firmName if it&#x27;s a business
* address (a dict), with keys addressLine1 addressLine2, city, state, zipCode, country
* phoneNumber
* email

#### get\_courts

Gets the list of courts.

#### get\_court

Gets codes for a specific court

#### get\_court\_list

Gets a list of all of the courts that you can file into. Slightly more limited than
[get_courts](#get_courts)

#### get\_filing\_list

Returns a list of filings that a particular user has made with a court.

#### get\_service\_types

Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types

#### get\_cases\_raw

Finds existing cases at a particular court. Only one of person_name, business_name, or docket_number should be
provided at a time.
Params:
court_id (str)
person_name (dict)
business_name (str)
docket_number (str)

