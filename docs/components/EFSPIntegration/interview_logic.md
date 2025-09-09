# Table of Contents

* [EFSPIntegration.interview\_logic](#EFSPIntegration.interview_logic)
  * [EFCaseSearch](#EFSPIntegration.interview_logic.EFCaseSearch)
    * [search\_went\_wrong](#EFSPIntegration.interview_logic.EFCaseSearch.search_went_wrong)
    * [get\_lookup\_choices](#EFSPIntegration.interview_logic.EFCaseSearch.get_lookup_choices)
  * [num\_case\_choices](#EFSPIntegration.interview_logic.num_case_choices)
  * [search\_case\_by\_name](#EFSPIntegration.interview_logic.search_case_by_name)
  * [shift\_case\_select\_window](#EFSPIntegration.interview_logic.shift_case_select_window)
  * [get\_full\_court\_info](#EFSPIntegration.interview_logic.get_full_court_info)
  * [get\_max\_allowed\_sizes](#EFSPIntegration.interview_logic.get_max_allowed_sizes)
  * [make\_filter](#EFSPIntegration.interview_logic.make_filter)
  * [filter\_codes](#EFSPIntegration.interview_logic.filter_codes)
  * [get\_available\_efile\_courts](#EFSPIntegration.interview_logic.get_available_efile_courts)

pydoc-module-header.hbsA group of methods that were code blocks in various parts of the EFSP
package, but for better python tooling support, were moved here.

<a id="EFSPIntegration.interview_logic.EFCaseSearch"></a>

## EFCaseSearch Objects

```python
class EFCaseSearch(DAObject)
```

A data-class that has holds all of the information and state for a single case search

<a id="EFSPIntegration.interview_logic.EFCaseSearch.search_went_wrong"></a>

#### search\_went\_wrong()

```python
def search_went_wrong() -> bool
```

Returns true if something errored during the case search process

<a id="EFSPIntegration.interview_logic.EFCaseSearch.get_lookup_choices"></a>

#### get\_lookup\_choices(can\_file\_non\_indexed\_case: bool)

```python
def get_lookup_choices(
        can_file_non_indexed_case: bool) -> List[Dict[str, str]]
```

Returns the DA choice list of what ways you are allowed to search for a case;
By default, this is &quot;party_search&quot;, and &quot;docket_lookup&quot;, and depending on the
court, it could also include &quot;non_indexed_case&quot;.

Not passed as direct arguments, but the object attributes `party_search_choice`,
`docket_lookup_choice`, and `non_indexed_choice` are the user-facing labels
for each choice.

<a id="EFSPIntegration.interview_logic.num_case_choices"></a>

#### num\_case\_choices()

```python
def num_case_choices() -> int
```

The number of cases that someone should have to choose between if there are too many.
Mostly to limit the amount of up-front waiting someone will have to do.

<a id="EFSPIntegration.interview_logic.search_case_by_name"></a>

#### search\_case\_by\_name(\*, proxy\_conn, var\_name: str = None, court\_id: str, somebody, filter\_fn: Callable[[Any], bool], roles=None)

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

<a id="EFSPIntegration.interview_logic.shift_case_select_window"></a>

#### shift\_case\_select\_window(proxy\_conn, found\_cases: DAList, \*, direction: str, start\_idx: int, end\_idx: int, roles: dict = None)

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

<a id="EFSPIntegration.interview_logic.get_full_court_info"></a>

#### get\_full\_court\_info(proxy\_conn, court\_id: str)

```python
def get_full_court_info(proxy_conn, court_id: str) -> Dict
```

Gets all of the information about the court from the id

<a id="EFSPIntegration.interview_logic.get_max_allowed_sizes"></a>

#### get\_max\_allowed\_sizes(proxy\_conn, court\_id: str)

```python
def get_max_allowed_sizes(proxy_conn,
                          court_id: str) -> Optional[Tuple[int, int]]
```

Returns attachment max size, then message max size

<a id="EFSPIntegration.interview_logic.make_filter"></a>

#### make\_filter(search: Union[Callable[..., bool], SearchType, None])

```python
def make_filter(
    search: Union[Callable[..., bool], SearchType,
                  None]) -> Callable[..., bool]
```

Makes a &#x27;filter&#x27; function from some simple type.

Necessary because docassemble doesn&#x27;t store lambdas and functions well in
interview dicts, so the filters need to be set as primitive types and kept
that way until the search actually happens (in filter_codes).

<a id="EFSPIntegration.interview_logic.filter_codes"></a>

#### filter\_codes(options: Iterable, filters: Iterable[Union[Callable[..., bool], SearchType]], default: str, exclude: Union[Callable[..., bool], SearchType, None] = None)

```python
def filter_codes(
    options: Iterable,
    filters: Iterable[Union[Callable[..., bool], SearchType]],
    default: str,
    exclude: Union[Callable[..., bool], SearchType, None] = None
) -> Tuple[List[Any], Optional[str]]
```

Given a list of filter functions from most specific to least specific,
(if true, use that code), filters a total list of codes. If any codes match the exclude filter, won&#x27;t use them.

<a id="EFSPIntegration.interview_logic.get_available_efile_courts"></a>

#### get\_available\_efile\_courts(proxy\_conn)

```python
def get_available_efile_courts(proxy_conn) -> list
```

Gets the list of efilable courts, if it can

