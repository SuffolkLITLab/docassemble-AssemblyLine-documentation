---
sidebar_label: efm_client
title: EFSPIntegration.efm_client
---

## ProxyConnection Objects

```python
class ProxyConnection(EfspConnection)
```

#### \_\_init\_\_

```python
def __init__(*,
             url: str = None,
             api_key: str = None,
             credentials_code_block: str = "tyler_login",
             default_jurisdiction: str = None)
```

Params:
url (str)
api_key (str)
credentials_code_block (str)
default_jurisdiction (str)

#### authenticate\_user

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

#### register\_user

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

#### get\_service\_types

```python
def get_service_types(
        court_id: str,
        court_bundle: Union[ALDocumentBundle, dict] = None) -> ApiResponse
```

Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types

#### serialize\_person

```python
def serialize_person(person: Union[Person, Individual]) -> Dict
```

Converts a Docassemble Person or Individual into a dictionary suitable for
json.dumps and in format expected by Tyler-specific endpoints on the EFSPProxy

