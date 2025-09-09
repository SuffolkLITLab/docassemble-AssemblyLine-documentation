# Table of Contents

* [EFSPIntegration.efm\_client](#EFSPIntegration.efm_client)
  * [DALogger](#EFSPIntegration.efm_client.DALogger)
    * [log](#EFSPIntegration.efm_client.DALogger.log)
  * [ProxyConnection](#EFSPIntegration.efm_client.ProxyConnection)
    * [\_\_init\_\_](#EFSPIntegration.efm_client.ProxyConnection.__init__)
    * [authenticate\_user](#EFSPIntegration.efm_client.ProxyConnection.authenticate_user)
    * [register\_user](#EFSPIntegration.efm_client.ProxyConnection.register_user)
    * [get\_service\_types](#EFSPIntegration.efm_client.ProxyConnection.get_service_types)
  * [serialize\_person](#EFSPIntegration.efm_client.serialize_person)

---
sidebar_label: efm_client
title: EFSPIntegration.efm_client
---

<a id="EFSPIntegration.efm_client.DALogger"></a>

## DALogger Objects

```python
class DALogger(LoggerAdapter)
```

<a id="EFSPIntegration.efm_client.DALogger.log"></a>

#### log(level, msg, \*args, \*\*kwargs)

```python
def log(level, msg, *args, **kwargs)
```

Delegate a log call to Docassemble&#x27;s `log` function, after adding
contextual information from this adapter instance.

<a id="EFSPIntegration.efm_client.ProxyConnection"></a>

## ProxyConnection Objects

```python
class ProxyConnection(EfspConnection)
```

The main class you use to communicate with the E-file proxy server from docassemble.

Many methods are unchanged from the parent class, [EfspConnection](py_efsp_client#EfspConnection),
and are documented there.

<a id="EFSPIntegration.efm_client.ProxyConnection.__init__"></a>

#### \_\_init\_\_(\*, url: str = None, api\_key: str = None, credentials\_code\_block: str = "tyler\_login", default\_jurisdiction: str = None)

```python
def __init__(*,
             url: str = None,
             api_key: str = None,
             credentials_code_block: str = "tyler_login",
             default_jurisdiction: str = None)
```

Creates the connection. Tries to get params from docassemble&#x27;s config, but can
be overriden with parameters to __init__.

<a id="EFSPIntegration.efm_client.ProxyConnection.authenticate_user"></a>

#### authenticate\_user(tyler\_email: str = None, tyler\_password: str = None, jeffnet\_key: str = None, \*, jurisdiction: str = None)

```python
def authenticate_user(tyler_email: str = None,
                      tyler_password: str = None,
                      jeffnet_key: str = None,
                      *,
                      jurisdiction: str = None) -> ApiResponse
```

Params:
tyler_email (str)
tyler_password (str)
jeffnet_key (str)

<a id="EFSPIntegration.efm_client.ProxyConnection.register_user"></a>

#### register\_user(person: Union[Individual, dict], registration\_type: str, \*, password: str = None, firm\_name\_or\_id: str = None)

```python
def register_user(person: Union[Individual, dict],
                  registration_type: str,
                  *,
                  password: str = None,
                  firm_name_or_id: str = None) -> ApiResponse
```

registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.
If registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.
If it&#x27;s FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id

<a id="EFSPIntegration.efm_client.ProxyConnection.get_service_types"></a>

#### get\_service\_types(court\_id: str, court\_bundle: Union[ALDocumentBundle, dict] = None)

```python
def get_service_types(
        court_id: str,
        court_bundle: Union[ALDocumentBundle, dict] = None) -> ApiResponse
```

Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types

<a id="EFSPIntegration.efm_client.serialize_person"></a>

#### serialize\_person(person: Union[Person, Individual])

```python
def serialize_person(person: Union[Person, Individual]) -> Dict
```

Converts a Docassemble Person or Individual into a dictionary suitable for
json.dumps and in format expected by Tyler-specific endpoints on the EFSPProxy

