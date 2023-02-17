---
sidebar_label: al_courts
title: al_courts
---

Package for a very simple / MVP list of courts that is mostly signature compatible w/ MACourts for now

## ALCourt Objects

```python
class ALCourt(Court)
```

Object representing a court in Massachusetts.
TODO: it could be interesting to store a jurisdiction on a court. But this is non-trivial. Should it be geo boundaries?
A list of cities? A list of counties? Instead, we use a function on the CourtList object that filters courts by
address and can use any of those three features of the court to do the filtering.

#### short\_label

```python
def short_label() -> str
```

Returns a string that represents a nice, disambiguated label for the court.
This may not match the court&#x27;s name. If the name omits city, we
append city name to the court name. This is good for a drop-down selection
list.

#### short\_label\_and\_address

```python
def short_label_and_address() -> str
```

Returns a markdown formatted string with the name and address of the court.
More concise version without description; suitable for a responsive case.

#### short\_description

```python
def short_description() -> str
```

Returns a Markdown formatted string that includes the disambiguated name and
the description of the court, for inclusion in the results page with radio
buttons.

#### from\_row

```python
def from_row(df_row, ensure_lat_long=True) -> None
```

Loads data from a single Pandas Dataframe into a court object.
Note: It will try to convert column names that don&#x27;t make valid
attributes. Best practice is to use good attribute names (no spaces) that don&#x27;t interfere
with existing attributes or methods of DAObject

## ALCourtLoader Objects

```python
class ALCourtLoader(DAObject)
```

Object to hold some methods surrounding loading/filtering courts.

Built around Pandas dataframe.

#### all\_courts

```python
def all_courts() -> list
```

Return all courts without any filtering

#### unique\_column\_values

```python
def unique_column_values(column_name) -> Set[str]
```

get a list of all unique values in the given column

#### county\_list

```python
def county_list(column_name: str = "address_county")
```

Get a list of all unique county names in the given spreadsheet

#### county\_has\_one\_court

```python
def county_has_one_court(county_name: str,
                         county_column: str = "address_county") -> bool
```

Returns True if there is only one court associated with the specified county

#### county\_court

```python
def county_court(intrinsicName: str,
                 county_name: str,
                 county_column: str = "address_county") -> ALCourt
```

Return the first court matching the county name. Should only be used
when you know there is exactly one match

#### matching\_courts\_in\_county

```python
def matching_courts_in_county(
        county_name: str,
        county_column: str = "address_county",
        display_column: str = "name",
        search_string: Optional[str] = None,
        search_columns: Optional[Union[List[str], str]] = None) -> List[dict]
```

Get a list of all courts in the provided county, suitable for displaying
as a drop-down or radio button list in Docassemble. The results will be a
dictionary where the key is the index in the dataframe, to be used to
retrieve the court&#x27;s full details later with the as_court() method.

:param county_name: str name of a county
:param county_column: str column heading which contains county name. Defaults to &quot;address_county&quot;
:param display_column: str column heading which will be used for display in drop down
:param search_string: str, optional a keyword that will be checked in the filtered list of results
:param search_columns: str or List[str], optional columns to aggregate and then do case-insensitive search across with the search_string

#### filter\_courts

```python
def filter_courts(
        court_types: Optional[Union[List[str], str]],
        column: str = "department",
        display_column: str = "name",
        search_string: Optional[str] = None,
        search_columns: Optional[Union[List[str], str]] = None) -> List[dict]
```

Return a subset of courts as a list of dictionaries, like:
index: name

:param court_types: List[str] or str, exact string match[es] you want to use to filter results (inclusive). E.g., &quot;District&quot; or [&quot;Municipal&quot;,&quot;Superior&quot;]
:param column: str column heading which you want to search. Defaults to &quot;department&quot;
:param display_column: str column heading which will be used for display in drop down
:param search_string: str, optional a keyword that will be checked in the filtered list of results
:param search_columns: str or List[str], optional columns to aggregate and then do case-insensitive search across with the search_string

#### as\_court

```python
def as_court(intrinsicName, index, ensure_lat_long=True)
```

Return the court at the specified index as an ALCourt object

