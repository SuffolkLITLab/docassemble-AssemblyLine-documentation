---
sidebar_label: conversions
title: EFSPIntegration.conversions
---

Functions that help convert the JSON-ized XML from the proxy server into usable information.

#### choices\_and\_map

```python
def choices_and_map(codes_list: List,
                    display: str = None,
                    backing: str = None) -> Tuple[List[Any], Dict]
```

Takes the responses from the &#x27;codes&#x27; service and make a DA ready list of choices and a map back
to the full code object

#### pretty\_display

```python
def pretty_display(data, tab_depth=0, skip_xml=True, item_name=None) -> str
```

Given an arbitrarily nested JSON structure, print it nicely.
Recursive, for subsequent calls `tab_depth` increases.

#### debug\_display

```python
def debug_display(resp: ApiResponse) -> str
```

Returns a string with either the error of the response,
or it&#x27;s data run through pretty_display

#### tyler\_daterep\_to\_datetime

```python
def tyler_daterep_to_datetime(tyler_daterep: Mapping) -> DADateTime
```

Takes an jsonized-XML object of &quot;{http://niem.gov/niem/niem-core/2.0}ActivityDate,
returns the datetime it repsents.

#### tyler\_timestamp\_to\_datetime

```python
def tyler_timestamp_to_datetime(timestamp_ms: int) -> DADateTime
```

Given a timestamp in milliseconds from epoch (in UTC), make a datetime from it

#### validate\_tyler\_regex

```python
def validate_tyler_regex(data_field: Mapping) -> Callable
```

Return a function that validates a given input with the provided regex,
suitable for use with Docassemble&#x27;s `validate:` question modifier

#### parse\_service\_contacts

```python
def parse_service_contacts(service_list)
```

We&#x27;ll take both Tyler service contact lists and Niem service contact lists.
Tyler&#x27;s are just `{&quot;firstName&quot;: &quot;Bob&quot;, &quot;middleName&quot;: &quot;P&quot;, ..., &quot;serviceContactId&quot;: &quot;abcrunh-13...&quot;
Niem&#x27;s are more complicated

#### fetch\_case\_info

```python
def fetch_case_info(proxy_conn: ProxyConnection,
                    new_case: DAObject,
                    roles: dict = None)
```

Fills in these attributes with the full case details:
* attorneys
* party_to_attorneys
* case_details_worked
* case_details
* case_type
* title
* date
* participants

#### filter\_payment\_accounts

```python
def filter_payment_accounts(account_list, allowable_card_types) -> List
```

Gets a list of all payment accounts and filters them by if the card is
accepted at a particular court

#### get\_tyler\_roles

```python
def get_tyler_roles(proxy_conn: ProxyConnection,
                    login_data: Mapping) -> Tuple[bool, bool]
```

Gets whether or not the user of this interview is a Tyler Admin, and a &#x27;global&#x27; admin.
The global admin means that they are allowed to change specific Global payment methods,
and can be listed under the &#x27;global server admins&#x27; section of the &#x27;efile proxy&#x27; settings in the
DAConfig

