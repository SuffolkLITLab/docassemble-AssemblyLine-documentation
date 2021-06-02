---
sidebar_label: al_courts
title: al_courts
---

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
 | short_label() -> str
```

Returns a string that represents a nice, disambiguated label for the court.
This may not match the court&#x27;s name. If the name omits city, we
append city name to the court name. This is good for a drop-down selection
list.

#### short\_label\_and\_address

```python
 | short_label_and_address() -> str
```

Returns a markdown formatted string with the name and address of the court.
More concise version without description; suitable for a responsive case.

#### short\_description

```python
 | short_description() -> str
```

Returns a Markdown formatted string that includes the disambiguated name and 
the description of the court, for inclusion in the results page with radio
buttons.

#### from\_row

```python
 | from_row(df_row, ensure_lat_long=True) -> None
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

#### filter\_courts

```python
 | filter_courts(court_types: list, column='department') -> list
```

Return a subset of courts, only the name column and index. 

If you do not want the list to be filtered, set court_types to None (or falsy value)

#### as\_court

```python
 | as_court(intrinsicName, index, ensure_lat_long=True)
```

Return the court at the specified index as an ALCourt object

