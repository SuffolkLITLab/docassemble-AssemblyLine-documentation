---
sidebar_label: efm_client
title: EFSPIntegration.efm_client
---

## DALogger Objects

```python
class DALogger(LoggerAdapter)
```

#### log

Delegate a log call to Docassemble&#x27;s `log` function, after adding
contextual information from this adapter instance.

## ProxyConnection Objects

```python
class ProxyConnection(EfspConnection)
```

The main class you use to communicate with the E-file proxy server from docassemble.

Many methods are unchanged from the parent class, [EfspConnection](py_efsp_client#EfspConnection),
and are documented there.

#### \_\_init\_\_

Creates the connection. Tries to get params from docassemble&#x27;s config, but can
be overriden with parameters to __init__.

#### authenticate\_user

Params:
tyler_email (str)
tyler_password (str)
jeffnet_key (str)

#### register\_user

registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.
If registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.
If it&#x27;s FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id

#### get\_service\_types

Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types

#### serialize\_person

Converts a Docassemble Person or Individual into a dictionary suitable for
json.dumps and in format expected by Tyler-specific endpoints on the EFSPProxy

