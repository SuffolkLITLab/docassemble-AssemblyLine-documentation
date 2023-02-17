---
sidebar_label: py_efsp_client
title: EFSPIntegration.py_efsp_client
---

## EfspConnection Objects

```python
class EfspConnection()
```

#### \_\_init\_\_

```python
def __init__(*, url: str, api_key: str, default_jurisdiction: str = None)
```

Params:
url (str)
api_key (str)
default_jurisdiction (str)

#### authenticate\_user

```python
def authenticate_user(*,
                      tyler_email: Optional[str] = None,
                      tyler_password: Optional[str] = None,
                      jeffnet_key: Optional[str] = None,
                      jurisdiction: str = None) -> ApiResponse
```

Params:
tyler_email (str)
tyler_password (str)
jeffnet_key (str)

#### register\_user

```python
def register_user(person: dict,
                  registration_type: str,
                  *,
                  password: str = None,
                  firm_name_or_id: str = None) -> ApiResponse
```

registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.
If registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.
If it&#x27;s FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id

#### get\_password\_rules

```python
def get_password_rules() -> ApiResponse
```

Password rules are stored in the global court, id 1.

#### get\_notification\_options

```python
def get_notification_options() -> ApiResponse
```

AKA NotificationPreferencesList

#### update\_firm

```python
def update_firm(firm: dict) -> ApiResponse
```

firm should have the below keys:
* firstName, middleName, lastName if it&#x27;s a person
* firmName if it&#x27;s a business
* address (a dict), with keys addressLine1 addressLine2, city, state, zipCode, country
* phoneNumber
* email

#### get\_service\_types

```python
def get_service_types(court_id: str, all_vars: dict = None) -> ApiResponse
```

Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types

#### get\_cases\_raw

```python
def get_cases_raw(court_id: str,
                  *,
                  person_name: dict = None,
                  business_name: str = None,
                  docket_number: str = None) -> ApiResponse
```

Finds existing cases at a particular court. Only one of person_name, business_name, or docket_number should be
provided at a time.
Params:
court_id (str)
person_name (dict)
buisness_name (str)
docket_number (str)

