---
sidebar_label: interview_logic
title: EFSPIntegration.interview_logic
---

A group of methods that were code blocks in various parts of the EFSP
package, but for better python tooling support, were moved here.

#### num\_case\_choices

```python
def num_case_choices() -> int
```

The number of cases that someone should have to choose between if there are too many.
Mostly to limit the amount of up-front waiting someone will have to do.

#### search\_case\_by\_name

```python
def search_case_by_name(*,
                        proxy_conn,
                        var_name: str = None,
                        court_id: str,
                        somebody,
                        filter_fn: Callable[[Any], bool],
                        roles=None) -> Tuple[bool, DAList]
```

Searches for cases by party name. If there are more than 10 cases found, we don&#x27;t
add all of the detailed information about the case, just for the first few cases

#### shift\_case\_select\_window

```python
def shift_case_select_window(proxy_conn,
                             found_cases: DAList,
                             *,
                             direction: str,
                             start_idx: int,
                             end_idx: int,
                             roles: dict = None) -> Tuple[int, int]
```

Specifically used in case_search.yml, with an action to only fetch a detailed information
for a few cases at a time

#### get\_full\_court\_info

```python
def get_full_court_info(proxy_conn, court_id: str) -> Dict
```

Gets all of the information about the court from the id

#### get\_max\_allowed\_sizes

```python
def get_max_allowed_sizes(proxy_conn,
                          court_id: str) -> Optional[Tuple[int, int]]
```

Returns attachment max size, then message max size

#### filter\_codes

```python
def filter_codes(options: Iterable, filters: Iterable,
                 default: str) -> Tuple[List[Any], Optional[str]]
```

Given a list of filter functions from most specific to least specific,
(if true, use that code), filters a total list of codes

#### get\_available\_efile\_courts

```python
def get_available_efile_courts(proxy_conn) -> list
```

Gets the list of efilable courts, if it can

