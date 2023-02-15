---
sidebar_label: business_days
title: ALToolbox.business_days
---

#### standard\_holidays

```python
def standard_holidays(
        year,
        country="US",
        subdiv="MA",
        add_holidays: Optional[Mapping] = None,
        remove_holidays: Optional[Iterable[str]] = None
) -> holidays.HolidayBase
```

Get all holidays in the specified year, country, and state (or other subdivision).
Note that this draws on the &quot;holidays&quot; package which may deviate slightly from
holidays observed by a local court, but should be very close to accurate.

add_holidays should be a dictionary from dates (&quot;12-15&quot;) to the name of the holiday.

Returns a dictionary like-object that you can treat like:
{
&quot;2021-01-01&quot;: &quot;New Year&#x27;s Day&quot;,
...
&quot;2021-12-25&quot;: &quot;Christmas Day&quot;,
}

In place of a string, the object that is returned can also be treated as though
the keys are datetime.date objects.

#### is\_business\_day

```python
def is_business_day(date: Union[str, DADateTime],
                    country="US",
                    subdiv="MA",
                    add_holidays: Optional[Mapping] = None,
                    remove_holidays: Optional[Iterable[str]] = None) -> bool
```

Returns true iff the specified date is a business day (i.e., not a holiday)
in the specified jurisdiction. Business days are considered to be:
1. weekdays other than Saturday and Sunday and
1. days that are not a federal or state-observed holiday

#### get\_next\_business\_day

```python
def get_next_business_day(
        start_date: Union[str, DADateTime],
        wait_n_days=1,
        country="US",
        subdiv="MA",
        add_holidays: Optional[Mapping] = None,
        remove_holidays: Optional[Iterable[str]] = None) -> DADateTime
```

Returns the first day AFTER the specified start date that is
not a federal or state holiday, Saturday or Sunday. Optionally,
specify the parameter `wait_n_days` to get the first business day after
at least, e.g., 10 days.

Relies on the Python holidays package, which has fairly good support for
holidays around the world and in various states and provinces, but local
court rules may differ.

#### get\_date\_after\_n\_business\_days

```python
def get_date_after_n_business_days(
        start_date: Union[str, DADateTime],
        wait_n_days=1,
        country="US",
        subdiv="MA",
        add_holidays: Optional[Mapping] = None,
        remove_holidays: Optional[Iterable[str]] = None) -> DADateTime
```

Returns a time period which contains a minimum of `n` business days.

