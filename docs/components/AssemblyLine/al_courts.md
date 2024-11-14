---
sidebar_label: al_courts
title: AssemblyLine.al_courts
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

Returns a string that represents a nice, disambiguated label for the court.
This may not match the court&#x27;s name. If the name omits city, we
append city name to the court name. This is good for a drop-down selection
list.

**Returns**:

- `str` - string representing the court&#x27;s name, with city if needed to disambiguate

#### short\_label\_and\_address

Returns a markdown formatted string with the name and address of the court.
More concise version without description; suitable for a responsive case.

**Returns**:

- `str` - string representing the court&#x27;s name and address

#### short\_description

Returns a Markdown formatted string that includes the disambiguated name and
the description of the court, for inclusion in the results page with radio
buttons.

**Returns**:

- `str` - string representing the court&#x27;s name and description

#### from\_row

Loads data from a single Pandas Dataframe into the current court object.
Note: It will try to convert column names that don&#x27;t make valid
attributes. Best practice is to use good attribute names (no spaces) that don&#x27;t interfere
with existing attributes or methods of DAObject

**Arguments**:

- `df_row` - Pandas Series object
- `ensure_lat_long` - bool, whether to use Google Maps to geocode the address if we don&#x27;t have coordinates

#### geolocate

Use Google Maps to geocode the court&#x27;s address and store the result in the location attribute.

Deprecated: use geocode() instead.

#### geocode

Use Google Maps to geocode the court&#x27;s address and store the result in the location attribute.

## ALCourtLoader Objects

```python
class ALCourtLoader(DAObject)
```

Object to hold some methods surrounding loading/filtering courts.

Built around Pandas dataframe.

**Attributes**:

- `filename` _str_ - Path to the file containing court information.

#### all\_courts

Return a list of all courts in the spreadsheet.

**Returns**:

  List[Dict[int, str]]: List of all ALCourt instances without filtering.

#### unique\_column\_values

Retrieve a set of unique values present in a specified dataframe column.

**Arguments**:

- `column_name` _str_ - The name of the column in the dataframe.
  

**Returns**:

- `Set[str]` - A set containing unique values from the specified column.
  Returns an empty set if an error occurs.

#### county\_list

Get a set of all unique names for the specified column in the given spreadsheet.
Typically used to get a list of all possible counties that have a court.

**Arguments**:

- `column_name` _str_ - The name of the column in the dataframe.
  

**Returns**:

- `Set[str]` - A list of all unique values in the specified row in the given spreadsheet

#### county\_has\_one\_court

Returns True if there is only one court associated with the specified county
in the spreadsheet. Returns False otherwise.

**Arguments**:

- `county_name` _str_ - The name of the county to check.
- `county_column` _str_ - The name of the column in the dataframe that contains the county names.
  Defaults to &quot;address_county&quot;.
  

**Returns**:

- `bool` - True if there is only one court associated with the specified county in the spreadsheet.

#### county\_court

Return the first court matching the county name. Should only be used
when you know there is exactly one match

**Arguments**:

- `intrinsicName` _str_ - The intrinsic name you want the newly returned object to have (used for DA namespace searching).
- `county_name` _str_ - The name of the county to check.
- `county_column` _str_ - The name of the column in the dataframe that contains the county names.
  Defaults to &quot;address_county&quot;.
  

**Returns**:

- `ALCourt` - The first court matching the county name.

#### matching\_courts\_in\_county

Retrieve a list of all courts in the specified county.

This function fetches courts suitable for displaying as a drop-down or radio button list
in Docassemble. The results are dictionaries where the key is the index in the dataframe,
useful for retrieving the court&#x27;s full details later using the as_court() method.

**Arguments**:

- `county_name` _str_ - Name of the county.
- `county_column` _str, optional_ - Column heading which contains county name. Defaults to &quot;address_county&quot;.
- `display_column` _str, optional_ - Column heading used for display in the drop-down. Defaults to &quot;name&quot;.
- `search_string` _Optional[str], optional_ - A keyword to filter the list of results. Defaults to None.
- `search_columns` _Optional[Union[List[str], str]], optional_ - Columns to aggregate and search across with
  the search_string in a case-insensitive manner. Defaults to None.
  

**Returns**:

  List[Dict[int, str]]: List of dictionaries representing matching courts.

#### filter\_courts

Return a filtered subset of courts represented as a list of dictionaries.

Each dictionary has the format \{index: name\}, where &quot;index&quot; refers to the dataframe index and &quot;name&quot;
is determined by the `display_column`.

**Arguments**:

- `court_types` _Optional[Union[List[str], str]]_ - Exact string match or matches used to filter results
  (inclusive). Examples include &quot;District&quot; or [&quot;Municipal&quot;,&quot;Superior&quot;].
- `column` _str, optional_ - Column heading to search. Defaults to &quot;department&quot;.
- `display_column` _str, optional_ - Column heading used for display in the drop-down. Defaults to &quot;name&quot;.
- `search_string` _Optional[str], optional_ - A keyword to filter the list of results. Defaults to None.
- `search_columns` _Optional[Union[List[str], str]], optional_ - Columns to aggregate and search across with
  the search_string in a case-insensitive manner. Defaults to None.
  

**Returns**:

  List[Dict[int, str]]: List of dictionaries representing filtered courts.

#### as\_court

Retrieve the court at the specified index as an ALCourt object.

**Arguments**:

- `intrinsicName` _str_ - The intrinsic name you want to assign to the returned object (used for DA namespace searching).
- `index` _Union[int, str]_ - The index position of the court in the dataframe.
- `ensure_lat_long` _bool, optional_ - Whether to ensure the presence of latitude and longitude data. Defaults to True.
  

**Returns**:

- `ALCourt` - An ALCourt object initialized with data from the specified index.

