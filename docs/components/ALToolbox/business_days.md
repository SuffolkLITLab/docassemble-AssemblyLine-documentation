---
sidebar_label: business_days
title: ALToolbox.business_days
---

#### standard\_holidays

Get all holidays in the specified year, country, and state (or other subdivision).
Note that this draws on the &quot;holidays&quot; package which may deviate slightly from
holidays observed by a local court, but should be very close to accurate.

Returns a dictionary like-object that you can treat like:

```
\{
    "2021-01-01": "New Year's Day",
    ...
    "2021-12-25": "Christmas Day",
\}
```

In place of a string, the object that is returned can also be treated as though
the keys are datetime.date objects.

**Arguments**:

- `year` - the year to get holidays for
- `country` - the country to use holidays from (default: &quot;US&quot;)
- `subdiv` - the subdivision (e.g. state or province) to use holidays from (default: &quot;MA&quot;)
- `add_holidays` - a dictionary from date strings (&quot;12-25&quot;) to the name of the holiday, to add custom holidays
- `remove_holidays` - a list of holiday name strings to remove from the standard holidays

**Examples**:

```python
# Get standard holidays for Massachusetts in 2023
ma_holidays = standard_holidays(2023)
print(ma_holidays[&quot;2023-07-04&quot;])  # Independence Day

# Get holidays for a different state
ca_holidays = standard_holidays(2023, country=&quot;US&quot;, subdiv=&quot;CA&quot;)

# Add custom holidays
custom_holidays = standard_holidays(
    2023, 
    add_holidays={&quot;03-17&quot;: &quot;Company Founding Day&quot;}
)
print(custom_holidays[&quot;2023-03-17&quot;])  # Company Founding Day

# Remove holidays that your court doesn't observe
court_holidays = standard_holidays(
    2023,
    remove_holidays=[&quot;Columbus Day&quot;, &quot;Veterans Day&quot;]
)
```

#### non\_business\_days

Get all non-business days (weekends and holidays) in the specified year, country, and state. 
This function returns a dictionary of all dates that are not business days, including 
both weekends (Saturdays and Sundays) and official holidays.

**Arguments**:

- `year` - the year to get non-business days for
- `country` - the country to use holidays from (default: &quot;US&quot;)
- `subdiv` - the subdivision (e.g. state or province) to use holidays from (default: &quot;MA&quot;)
- `add_holidays` - a dictionary from date strings (&quot;12-25&quot;) to the name of the holiday, to add custom holidays
- `remove_holidays` - a list of holiday name strings to remove from the standard holidays
- `first_n_dates` - if specified, only return the first N non-business days of the year
- `last_n_dates` - if specified, only return the last N non-business days of the year

**Returns**: A dictionary where keys are date strings (&quot;YYYY-MM-DD&quot;) and values are the name of the non-business day (e.g., &quot;Saturday&quot;, &quot;New Year&#x27;s Day&quot;).

**Examples**:

```python
# Get all non-business days for 2023
all_non_business = non_business_days(2023)
print(len(all_non_business))  # Shows total count of non-business days

# Get just the first 10 non-business days of the year
first_ten = non_business_days(2023, first_n_dates=10)

# Get the last 5 non-business days of the year  
last_five = non_business_days(2023, last_n_dates=5)

# Get non-business days with custom holidays
custom_non_business = non_business_days(
    2023,
    add_holidays={&quot;03-17&quot;: &quot;Company Founding Day&quot;}
)
```

#### is\_business\_day

Returns true if and only if the specified date is a business day (i.e., not a holiday)
in the specified jurisdiction. Business days are considered to be:
1. weekdays other than Saturday and Sunday and
1. days that are not a federal or state-observed holiday

**Arguments**:

- `date` - the date to check. Can be a date-formatted string (i.e. &quot;2023-03-26&quot;, or &quot;3-26-2023&quot;) or a DADateTime object
- `country` - the country to use holidays from (default: &quot;US&quot;)
- `subdiv` - the subdivision (e.g. state or province) to use holidays from (default: &quot;MA&quot;)
- `add_holidays` - a dictionary from date strings (&quot;12-25&quot;) to the name of the holiday, to add custom holidays
- `remove_holidays` - a list of holiday name strings to remove from the standard holidays

**Examples**:

```python
# Check if a specific date is a business day
assert(is_business_day(&quot;2023-03-26&quot;) == False)  # Sunday

# Check a weekday that's not a holiday
assert(is_business_day(&quot;2023-03-27&quot;) == True)  # Monday

# Check a holiday
assert(is_business_day(&quot;2023-07-04&quot;) == False)  # Independence Day

# Check with custom holidays
is_company_day = is_business_day(
    &quot;2023-03-17&quot;,
    add_holidays={&quot;03-17&quot;: &quot;Company Founding Day&quot;}
)
assert(is_company_day == False)  # Custom holiday

# Check for different jurisdiction
is_business_uk = is_business_day(&quot;2023-12-26&quot;, country=&quot;UK&quot;)  # Boxing Day
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

- `start_date` - the date to start with. Can be a date-formatted string (i.e. &quot;2023-03-26&quot;, or
  &quot;3-26-2023&quot;) or a DADateTime object
- `wait_n_days` - the number of days to find the find the date after. If 0, it returns the given
  date if it&#x27;s a business day. (default: 1)
- `country` - the country to use business days from (default: &quot;US&quot;)
- `subdiv` - the subdivision (e.g. state or province) to use business days from (default: &quot;MA&quot;)
- `add_holidays` - a dictionary from date strings (&quot;12-25&quot;) to the name of the holiday,
  to add custom holidays to be considered
- `remove_holidays` - a list of holiday name strings of dates that are no longer holidays

**Examples**:

```python
# Get the next business day after a Friday
next_day = get_next_business_day(&quot;2023-03-24&quot;)  # Friday
print(next_day)  # 2023-03-27 (Monday)

# Get the first business day at least 5 days later
later_day = get_next_business_day(&quot;2023-03-20&quot;, wait_n_days=5)
print(later_day)  # First business day at least 5 days after March 20

# Handle holidays - if the calculated day falls on a holiday, 
# it will automatically find the next business day
holiday_next = get_next_business_day(&quot;2023-07-03&quot;)  # Day before July 4th
print(holiday_next)  # 2023-07-05 (skips July 4th holiday)

# With custom holidays
custom_next = get_next_business_day(
    &quot;2023-03-16&quot;,
    add_holidays={&quot;03-17&quot;: &quot;Company Founding Day&quot;}
)
# Will skip March 17th as it's now considered a holiday
```

#### get\_date\_after\_n\_business\_days

Returns a time period which contains a minimum of `n` business days.

**Arguments**:

- `start_date` - the date to start with. Can be a date-formatted string (i.e. &quot;2023-03-26&quot;, or
  &quot;3-26-2023&quot;) or a DADateTime object
- `wait_n_days` - the number of businesses days to wait for. For example, `start_date` is a
  Friday, and `wait_n_days` is 2, then the date returned will be the next Tuesday. (default: 1)
- `country` - the country to use business days from (default: &quot;US&quot;)
- `subdiv` - the subdivision (e.g. state or province) to use business days from (default: &quot;MA&quot;)
- `add_holidays` - a dictionary from date strings (&quot;12-25&quot;) to the name of the holiday,
  to add custom holidays to be considered
- `remove_holidays` - a list of holiday name strings of dates that are no longer holidays

**Examples**:

```python
# Get the date after exactly 5 business days
start_date = &quot;2023-03-20&quot;  # Monday
result_date = get_date_after_n_business_days(start_date, wait_n_days=5)
print(result_date)  # 2023-03-27 (Monday of next week)

# Starting on a Friday, get date after 2 business days
friday_start = &quot;2023-03-24&quot;  # Friday
two_days_later = get_date_after_n_business_days(friday_start, wait_n_days=2)
print(two_days_later)  # 2023-03-28 (Tuesday, skipping weekend)

# Handle holidays automatically
before_holiday = &quot;2023-07-03&quot;  # Monday before July 4th
after_three_days = get_date_after_n_business_days(before_holiday, wait_n_days=3)
print(after_three_days)  # 2023-07-07 (Friday, skipping July 4th holiday)

# With custom holidays
custom_result = get_date_after_n_business_days(
    &quot;2023-03-15&quot;,
    wait_n_days=3,
    add_holidays={&quot;03-17&quot;: &quot;Company Founding Day&quot;}
)
# Will count 3 business days, skipping weekends and custom holiday
```

