---
sidebar_label: business_days
title: ALToolbox.business_days
---

#### standard\_holidays

Get all holidays in the specified year, country, and state (or other subdivision).
Note that this draws on the &quot;holidays&quot; package which may deviate slightly from
holidays observed by a local court, but should be very close to accurate.

add_holidays should be a dictionary from dates (&quot;12-15&quot;) to the name of the holiday.

Returns a dictionary like-object that you can treat like:


In place of a string, the object that is returned can also be treated as though
the keys are datetime.date objects.
```
\{
    "2021-01-01": "New Year's Day",
    ...
    "2021-12-25": "Christmas Day",
\}
```

#### is\_business\_day

Returns true if and only if the specified date is a business day (i.e., not a holiday)
in the specified jurisdiction. Business days are considered to be:
1. weekdays other than Saturday and Sunday and
1. days that are not a federal or state-observed holiday

**Example**:

```
assert(is_business_day("2023-03-26") == False)
```

#### get\_next\_business\_day

Returns the first day AFTER the specified start date that is
not a federal or state holiday, Saturday or Sunday. Optionally,
specify the parameter `wait_n_days` to get the first business day after
at least, e.g., 10 days.

Relies on the Python holidays package, which has fairly good support for
holidays around the world and in various states and provinces, but local
court rules may differ. You can see what holidays are used at
https://github.com/dr-prodigy/python-holidays/tree/master/holidays/countries

**Arguments**:

- `start_date` - the date to start with. Can be a date-formatted string (i.e. &quot;2023-03-37&quot;, or
  &quot;3-27-2023&quot;) or a DADateTime object
- `wait_n_days` - the number of days to find the find the date after. If 0, it returns the given
  date if it&#x27;s a business day.
- `country` - the county to use business days from
- `subdiv` - the subdivision (e.g. state or province) to use business days from
- `add_holidays` - a dictionary from the date string (&quot;12/25&quot;) to the name of the holiday,
  will add those holidays to be considered
- `remove_holidays` - the list of date strings (&quot;12/25&quot;) of dates that are no longer holidays

#### get\_date\_after\_n\_business\_days

Returns a time period which contains a minimum of `n` business days.

**Arguments**:

- `start_date` - the date to start with. Can be a date-formatted string (i.e. &quot;2023-03-37&quot;, or
  &quot;3-27-2023&quot;) or a DADateTime object
- `wait_n_days` - the number of businesses days to wait for. For example, `start_date` is a
  Friday, and `wait_n_days` is 2, then the date returned will be the next Tuesday.
- `country` - the county to use business days from
- `subdiv` - the subdivision (e.g. state or province) to use business days from
- `add_holidays` - a dictionary from the date string (&quot;12/25&quot;) to the name of the holiday,
  will add those holidays to be considered
- `remove_holidays` - the list of date strings (&quot;12/25&quot;) of dates that are no longer holidays

