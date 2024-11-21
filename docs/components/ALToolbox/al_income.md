---
sidebar_label: al_income
title: ALToolbox.al_income
---

#### times\_per\_year

Get the lower-case textual description that matches a time period contained
in a &quot;times per year&quot; list.

The goal of this function is to allow you to reflect the user&#x27;s selection
back to them, either on screen or in a document.

In `al_income.yml` there is a default `times_per_year_list`, but the list
that you use must be passed as a parameter as it&#x27;s common to want to
customize this for a given financial statement.

For example: if the `times_per_year` is 12, it will return &quot;monthly&quot; from
the default `times_per_year_list`.

If the times per year does not exist in the given list, it will return a
literal string like &quot;five times per year&quot;.

Fractional or floating point-based times_per_year are permissible in the
times_per_year_list, although they are not commonly used. E.g., `.5` would
represent &quot;every two years&quot;. Items not contained in the list (to provide a
specific lookup name) will have a string representation that is rounded to
the nearest whole integer.

#### recent\_years

Returns a list of the most recent past years, continuing into the future.
Defaults to most recent 15 years+1. Useful to populate a combobox of years
where the most recent ones are most likely. E.g. automobile years or
birthdate.

Keyword parameters:
* past \{float\} The number of past years to list, including the current year.
The default is 15
* order \{string\} &#x27;descending&#x27; or &#x27;ascending&#x27;. Default is `descending`.
* future (defaults to 1).

## ALPeriodicAmount Objects

```python
class ALPeriodicAmount(DAObject)
```

Represents an amount (could be an income or an expense depending on the context)
that reoccurs some times per year. E.g, to express a weekly period, use 52. The default
is 1 (a year).

**Attributes**:

  .value \{str | float | Decimal\} A number representing an amount of money accumulated during
  the `times_per_year` of this income.
  .times_per_year \{float | Decimal\} Represents a number of the annual frequency of
  the income. E.g. 12 for a monthly income.
  .source \{str\} (Optional) The &quot;source&quot; of the income, like a &quot;job&quot; or a &quot;house&quot;.
  .display_name \{str\} (Optional) If present, will have a translated string to show the
  user, as opposed to a raw english string from the program

#### \_\_str\_\_

Returns the income&#x27;s `.total()` as string, not its object name.

#### total

Returns the income over the specified times_per_year,

To calculate `.total()`, an ALPeriodicAmount must have a `.times_per_year` and `.value`.

## ALIncome Objects

```python
class ALIncome(ALPeriodicAmount)
```

Represents an income which may have an hourly rate or a salary. Hourly rate
incomes must include hours per period (times per year). Period is some
denominator of a year. E.g, to express a weekly period, use 52. The default
is 1 (a year).

**Attributes**:

  .value \{str | float | Decimal\} A number representing an amount of money accumulated during
  the `times_per_year` of this income.
  .times_per_year \{float | Decimal\} Represents a number of the annual frequency of
  the income. E.g. 12 for a monthly income.
  .is_hourly \{bool\} (Optional) True if the income is hourly.
  .hours_per_period \{float | Decimal\} (Optional) If the income is hourly, the number of
  hours during the annual frequency of this job. E.g. if the annual
  frequency is 52 (weekly), the hours per week might be 50. That is, 50
  hours per week. This attribute is required if `.is_hourly` is True.
  .source \{str\} (Optional) The &quot;source&quot; of the income, like a &quot;job&quot; or a &quot;house&quot;.
  .owner \{str\} (Optional) Full name of the income&#x27;s owner as a single string.

#### total

Returns the income over the specified times_per_year, taking into account
hours per period for hourly items. For example, for an hourly income of 10
an hour, 40 hours a week, `income.total(1)` would be 20,800, the yearly income,
and `income.total(52)` would be 400, the weekly income.

To calculate `.total()`, an ALIncome must have a `.times_per_year` and `.value`.
It can also have `.is_hourly` and `.hours_per_period`.

## ALExpense Objects

```python
class ALExpense(ALPeriodicAmount)
```

Not much changes from ALPeriodic Amount, just the generic object questions

## ALIncomeList Objects

```python
class ALIncomeList(DAList)
```

Represents a filterable DAList of incomes-type items. It can make
use of these attributes and methods in its items:

.source
.owner
.times_per_year
.value
.total()

#### sources

Returns a set of the unique sources in the ALIncomeList.

#### matches

Returns an ALIncomeList consisting only of elements matching the specified
income source, assisting in filling PDFs with predefined spaces. `source`
may be a list.

#### total

Returns the total periodic value in the list, gathering the list items
if necessary. You can optionally filter by `source`. `source` can be a
string or a list. You can also filter by one `owner`.

To calculate `.total()` correctly, all items must have a `.total()` and
it should be a positive value. Job-type incomes should automatically
exclude deductions.

#### move\_checks\_to\_list

Gives a &#x27;gather by checklist&#x27; option.
If no selected_types param is passed, requires that a .selected_types
attribute be set by a `datatype: checkboxes` fields
If &quot;other&quot; is in the selected_types, the source will not be set directly

Sets the attribute &quot;moved&quot; to true, doesn&#x27;t set gathered, because this isn&#x27;t
idempotent, so trying to also gather all info about the checks in the list doesn&#x27;t
work well.

## ALJob Objects

```python
class ALJob(ALIncome)
```

Represents a single job that may be hourly or pay-period based.

The job can have a net and gross income figure, but it does not represent
individual items like wages, tips or deductions that may appear on a paycheck--the
user must enter the total amount for &quot;net&quot; and &quot;gross&quot; income for a given period.

Can be stored in an ALJobList.

**Attributes**:

  .value \{float | Decimal\} A number representing an amount of money accumulated during
  the `times_per_year` of this income.
  .times_per_year \{float\} Represents a number of the annual frequency of
  the value. E.g. 12 for a monthly value.
  .is_hourly \{bool\} (Optional): Whether the gross total should be calculated based on hours
  worked per week
  .hours_per_period \{float\} (Optional) The number of hours during the annual
  frequency of this job. E.g. if the annual frequency is 52 (weekly), the
  hours per week might be 50. That is, 50 hours per week.
  .deduction \{float\} (Optional) The amount of money deducted from the total value each period.
  If this job is hourly, deduction is still from each period, not each hour. Used to
  calculate the net income in `net_income()`.
  .employer \{Individual\} (Optional) A docassemble Individual object, employer.address is the address
  and employer.phone is the phone

#### gross\_total

Same as ALIncome total. Returns the income over the specified times_per_year,
representing the `.value` attribute of the item.

`times_per_year` is some denominator of a year. E.g. to express a weekly
period, use 52. The default is 1 (a year).

#### deductions

Returns the total deductions from someone&#x27;s pay over the specificed times_per_year
(not per hour if hourly).

`times_per_year` is some denominator of a year. E.g. to express a weekly
period, use 52. The default is 1 (a year).

#### net\_total

Returns the net income over a time period, found using
`self.value` and `self.deduction`.

`times_per_year` is some denominator of a year. E.g, to express a weekly
period, use 52. The default is 1 (a year).

`self.deduction` is the amount deducted from one&#x27;s pay over a period (not
per hour if hourly).

This will force the gathering of the ALJob&#x27;s `.value` and `.deduction` attributes.

#### employer\_name\_address\_phone

Returns name, address and phone number of employer as a string. Forces
gathering the `.employer`, `.employer_address`, and `.employer_phone`
attributes.

#### normalized\_hours

Returns the normalized number of hours worked in a given times_per_year,
based on the self.hours_per_period and self.times_per_year attributes.

For example, if the person works 10 hours a week, it will return
520 when the times_per_year parameter is 1.

`times_per_year` is some denominator of a year. E.g, to express a weekly
period, use 52. The default is 1 (a year).

This will force the gathering of the attributes `.hours_per_period` and
`.times_per_year`

## ALJobList Objects

```python
class ALJobList(ALIncomeList)
```

Represents a list of ALJobs. Adds the `.gross_total()` and
`.net_total()` methods to the ALIncomeList class. It&#x27;s a more common
way of reporting income than ALItemizedJobList.

#### total

Returns the sum of the gross incomes of its ALJobs divided by the time
times_per_year. You can filter the jobs by `source`. `source` can be a
string or a list.

`times_per_year` is some denominator of a year. E.g, to express a weekly
period, use 52. The default is 1 (a year).

#### gross\_total

Returns the sum of the gross incomes of its ALJobs divided by the time
times_per_year. You can filter the jobs by `source`. `source` can be a
string or a list.

`times_per_year` is some denominator of a year. E.g, to express a weekly
period, use 52. The default is 1 (a year).

#### net\_total

Returns the sum of the net incomes of its ALJobs divided by the time
times_per_year. You can filter the jobs by `source`. `source` can be a
string or a list. Leaving out `source` will use all sources.

If the job is hourly, the `net_total()` may not be comparable to the
`gross_total()`.

`times_per_year` is some denominator of a year. E.g, to express a weekly
period, use 52. The default is 1 (a year).

#### deductions

Returns the sum of the deductions of its ALJobs divided by the time
times_per_year. You can filter the jobs by `source`. Leaving out `source`
will use all sources.

## ALExpenseList Objects

```python
class ALExpenseList(ALIncomeList)
```

A list of expenses

* each element has a:
* value
* source
* display name

## ALAsset Objects

```python
class ALAsset(ALIncome)
```

An ALAsset represents an asset that has a market value, an optional income
that the asset earns, and an optional balance which may be helpful if the
asset represents a financial account rather than a physical asset.

Can be stored in an ALAssetList.

**Attributes**:

  .market_value \{float | Decimal\} Market value of the asset.
  .balance \{float | Decimal \} Current balance of the account, e.g., like
  the balance in a checking account, but could also represent a loan
  amount.
  .value \{float | Decimal\} (Optional) Represents the income the asset earns
  for a given `times_per_year`, such as interest earned in a checking
  account. If not defined, the income will be set to 0, to simplify
  representing the many common assets that do not earn any income.
  .times_per_year \{float\} (Optional) Number of times per year the asset
  earns the income listed in the `value` attribute.
  .owner \{str\} (Optional) Full name of the asset owner as a single string.
  .source \{str\} (Optional) The &quot;source&quot; of the asset, like &quot;vase&quot;.

#### total

Returns the .value attribute divided by the times per year you want to calculate. The value defaults to 0.

`times_per_year` is some denominator of a year. E.g, to express a weekly period, use 52. The default is 1 (a year).

**Arguments**:

- `times_per_year` _float, optional_ - The number of times per year to calculate. Defaults to 1.
  

**Returns**:

- `Decimal` - The .value attribute divided by the times per year.

#### equity

Returns the total equity in the asset (e.g., market value minus balance).

**Arguments**:

- `loan_attribute` _str, optional_ - The attribute of the asset to use as the loan value. Defaults to &quot;balance&quot;.
  

**Returns**:

- `Decimal` - The total equity in the asset.

## ALAssetList Objects

```python
class ALAssetList(ALIncomeList)
```

A list of ALAssets. The `total()` of the list will be the total income
earned, which may not be what you want for a list of assets. To get the
total value of all assets, use the `market_value()` method.

**Attributes**:

- `market_value` _float | Decimal_ - Market value of the asset.
- `balance` _float | Decimal_ - Current balance of the account, e.g., like
  the balance in a checking account, but could also represent a loan
  amount.
- `value` _float | Decimal, optional_ - Represents the income the asset earns
  for a given `times_per_year`, such as interest earned in a checking
  account. If not defined, the income will be set to 0, to simplify
  representing the many common assets that do not earn any income.
- `times_per_year` _float, optional_ - Number of times per year the asset
  earns the income listed in the `value` attribute.
- `owner` _str, optional_ - Full name of the asset owner as a single string.
- `source` _str, optional_ - The &quot;source&quot; of the asset, like &quot;vase&quot;.

#### market\_value

Returns the total `.market_value` of assets in the list.

You can filter the assets by `source`. `source` can be a string or a list.

**Arguments**:

- `source` _Optional[SourceType]_ - The source of the assets to include in the calculation.
  If None, all sources are included. Can be a string or a list.
- `exclude_source` _Optional[SourceType]_ - The source of the assets to exclude from the calculation.
  If None, no sources are excluded.
  

**Returns**:

- `Decimal` - The total market value of the assets.

#### balance

Returns the total `.balance` of assets in the list, which typically corresponds to the available funds in a financial account.

You can filter the assets by `source`. `source` can be a string or a list.

**Arguments**:

- `source` _Optional[SourceType]_ - The source of the assets to include in the calculation.
  If None, all sources are included. Can be a string or a list.
- `exclude_source` _Optional[SourceType]_ - The source of the assets to exclude from the calculation.
  If None, no sources are excluded.
  

**Returns**:

- `Decimal` - The total balance of the assets.

#### equity

Calculates and returns the total equity in the assets.

This method triggers the gathering of assets, then iterates over each asset. If a source or exclude_source is not
specified, or if the asset&#x27;s source satisfies the source criteria, the equity of the asset is added to the total.

**Arguments**:

- `source` _Optional[SourceType]_ - The source of the assets to include in the calculation. If None, all sources are included.
- `exclude_source` _Optional[SourceType]_ - The source of the assets to exclude from the calculation. If None, no sources are excluded.
- `loan_attribute` _str, optional_ - The attribute of the asset to use as the loan value. Defaults to &quot;balance&quot;.
  

**Returns**:

- `Decimal` - The total equity in the assets.

#### owners

Returns a set of the unique owners of the assets.

You can filter the assets by `source`. `source` can be a string or a list.

**Arguments**:

- `source` _Optional[SourceType]_ - The source of the assets to include in the calculation.
  If None, all sources are included. Can be a string or a list.
- `exclude_source` _Optional[SourceType]_ - The source of the assets to exclude from the calculation.
  If None, no sources are excluded.
  

**Returns**:

- `Set[str]` - A set of the unique owners of the assets.

## ALVehicle Objects

```python
class ALVehicle(ALAsset)
```

Represents a vehicle as a specialized type of ALAsset.

This subclass of ALAsset adds specific attributes relevant to vehicles,
such as year, make, and model, and includes methods for representing
these attributes in a standardized format, as often required on financial
statement forms.

**Attributes**:

- `year` _str_ - The model year of the vehicle, e.g., &#x27;2022&#x27;.
- `make` _str_ - The make of the vehicle, e.g., &#x27;Honda&#x27;.
- `model` _str_ - The model of the vehicle, e.g., &#x27;Accord&#x27;.
- `market_value` _float or Decimal_ - Market value of the vehicle.
- `balance` _float or Decimal_ - Balance of the loan on the vehicle.
- `value` _float or Decimal, optional_ - Income earned by the vehicle, typically 0.
- `times_per_year` _int_ - The frequency over which the `value` is earned annually.
- `owner` _str_ - Full name of the vehicle owner.
- `source` _str, optional_ - The source of the asset, defaults to &#x27;vehicle&#x27;.

#### year\_make\_model

Returns a string of the format year/make/model of the vehicle. Triggers
gathering those attributes.

**Arguments**:

  separator \{str\} (Optional) The separator between the year, make and model.
  

**Returns**:

  A string of the format year/make/model of the vehicle.

## ALVehicleList Objects

```python
class ALVehicleList(ALAssetList)
```

List of ALVehicles. Extends ALAssetList.

## ALSimpleValue Objects

```python
class ALSimpleValue(DAObject)
```

Represents a currency value. It&#x27;s meant to be stored in a list. Can be an
item in an ALSimpleValueList.

**Attributes**:

  .value \{str | float \} The monetary value of the item.
  .transaction_type \{str\} (Optional) Can be &quot;expense&quot;, which will give a
  negative value to the total of the item.
  .source \{str\} (Optional) The &quot;source&quot; of the item, like &quot;vase&quot;.

#### total

If desired, to use as a ledger, values can be signed (mixed positive and
negative). Setting transaction_type = &#x27;expense&#x27; makes the value negative.
Use min=0 in that case.

If you use signed values, be careful when placing in an ALIncomeList
object. The `total()` method may return unexpected results in that case.

#### \_\_str\_\_

Returns the total as a formatted string

## ALSimpleValueList Objects

```python
class ALSimpleValueList(DAList)
```

Represents a filterable DAList of ALSimpleValues.

#### sources

Returns a set of the unique sources of values stored in the list.

#### total

Returns the total value in the list, gathering the list items if
necessary. You can filter the values by `source`. `source` can be a
string or a list.

## ALItemizedValue Objects

```python
class ALItemizedValue(DAObject)
```

An item in an ALItemizedValueDict (a line item like wages, tips or union dues).
Should be a positive number, even if it will later be subtracted from the
job&#x27;s net total.

WARNING: This item&#x27;s period-based value can&#x27;t be calculated correctly
outside of an ALItemizedJob. Its value should only be accessed through the
filtering methods of the ALItemizedJob that contains it.

**Attributes**:

  .value \{float | Decimal\} A number representing an amount of money accumulated
  during the `times_per_year` of this item or this item&#x27;s job.
  .is_hourly \{bool\} Whether this particular item is calculated hourly.
  .times_per_year \{ float\} A denominator of a year representing the annual
  frequency of the job. E.g. 12 for monthly.
  .exists \{bool\} (Optional) Allows an interview author to pre-define some common
  descriptors, like &quot;wages&quot; or &quot;union dues&quot; without requiring the user to
  provide a value for each item.
  
  If the &quot;.exists&quot; attribute is False or undefined, the item will not be used
  when calculating totals.

#### income\_fields

Returns a YAML structure representing the list of fields for an itemized value,
to be passed to a `code` attribute of a question&#x27;s fields

#### \_\_str\_\_

Returns a string of the value of the item with two decimal places.

## ALItemizedValueDict Objects

```python
class ALItemizedValueDict(DAOrderedDict)
```

Dictionary that can contain ALItemizedValues (e.g. line items) for an
ALItemizedJob. E.g., wages, tips and deductions being the most common.

An ALItemizedJob will have two ALItemizedValueDicts, one for income
and one for deductions.

WARNING: Should only be accessed through an ALItemizedJob. Otherwise
you may get unexpected results.

#### hook\_after\_gather

Update item lists after they&#x27;ve been gathered or edited to remove non-existent
items. Will still allow the developer to set `auto_gather=False` if they
want without affecting this functionality.
See https://docassemble.org/docs/objects.html#DAList.hook_after_gather.

If a developer wants to remove these items _before_ gathering is finished,
they can use similar code in their question&#x27;s `validation code:`

#### \_\_str\_\_

Returns a string of the dictionary&#x27;s key/value pairs as two-element lists in a list.
E.g. &#x27;[[&quot;federal_taxes&quot;, &quot;2500.00&quot;], [&quot;wages&quot;, &quot;15.50&quot;]]&#x27;

## ALItemizedJob Objects

```python
class ALItemizedJob(DAObject)
```

An &quot;Itemized&quot; job is a job which allows the user to report very specific,
granular details about the money that they earn in that job and any
deductions that they have on their paycheck. This detailed accounting of
money for each job is required on some financial statements, although in
many financial statements, just reporting gross and net income is sufficient.

For example, an ALItemizedJob can let the user report:
- Wages at one hourly rate
- Overtime at a second hourly rate
- Tips earned during that time period
- A fixed salary earned for that pay period
- Union Dues
- Insurance
- Taxes

If the financial statement only requires &quot;gross&quot; and &quot;net&quot; income, the
ALJobList has a simpler API and may be the preferred way to represent the
income in code.

**Attributes**:

  .to_add \{ALItemizedValueDict\} Dict of ALItemizedValues that would be added
  to a job&#x27;s net total, like wages and tips.
  .to_subtract \{ALItemizedValueDict\} Dict of ALItemizedValues that would be
  subtracted from a net total, like union dues or insurance premiums.
  .times_per_year \{float\} A denominator of a year, like 12 for monthly, that
  represents how frequently the income is earned
  .is_hourly \{bool\} (Optional) Whether the value represents a figure that the
  user earns on an hourly basis, rather than for the full time period
  .hours_per_period \{int\} (Optional) If the job is hourly, how many hours the
  user works per period.
  .employer \{Individual\} (Optional) Individual assumed to have a name and,
  optionally, an address and phone.
  .source \{str\} (Optional) The category of this item, like &quot;public service&quot;.
  Defaults to &quot;job&quot;.
  
- `WARNING` - Individual items in `.to_add` and `.to_subtract` should not be used
  directly. They should only be accessed through the filtering methods of
  this job.
  
  Fulfills these requirements:
  - A job can be hourly. Its wages will be calculated with that in mind.
  - Despite an hourly job, some individual items must be calculated using the
  job&#x27;s whole period.
  - Some items will have their own periods.
  - In a list of jobs, a developer may need to access full time and part time
  jobs separately.
  - In a list of jobs, a developer may need to sum all items from one source,
  such as tips or taxes.
  - The developer needs access to total money coming in, total money going out,
  and the total of money going in and money coming out.
  - A user must be able to add their own arbitrary items.

#### total

Alias for ALItemizedJob.gross_total to integrate with ALIncomeList math.

#### gross\_total

Returns the sum of positive values (payments) for a given times_per_year.
You can filter the items by `source`. `source` can be a string or a list.
If you use sources from deductions, they will be ignored.

**Arguments**:

- `kwarg` - times_per_year \{float\} (Optional) Number of times per year you
  want to calculate. E.g, to express a weekly period, use 52. Default is 1.
- `kwarg` - source \{str | [str]\} (Optional) Source or list of sources of desired
  item(s).

#### deduction\_total

Returns the sum of money going out (normally, deductions like union
dues) divided by a pay times_per_year as a positive value. You can
filter the items by `source`. `source` can be a string or a list.

**Arguments**:

- `kwarg` - times_per_year \{float\} (Optional) Number of times per year you
  want to calculate. E.g, to express a weekly period, use 52. Default is 1.
- `kwarg` - source \{str | List[str]\} (Optional) Source or list of sources of desired
  item(s).

#### net\_total

Returns the net (gross minus deductions) value of the job divided by
`times_per_year`. You can filter the items by `source`. `source` can be a
string or a list. E.g. &quot;full time&quot; or [&quot;full time&quot;, &quot;union dues&quot;]

**Arguments**:

- `kwarg` - times_per_year \{float\} (Optional) Number of times per year you
  want to calculate. E.g, to express a weekly period, use 52. Default is 1.
- `kwarg` - source \{str | List[str]\} (Optional) Source or list of sources of desired
  item(s).

#### employer\_name\_address\_phone

Returns concatenation of employer name and, if they exist, employer
address and phone number.

#### normalized\_hours

Returns the normalized number of hours worked in a given times_per_year,
based on the self.hours_per_period and self.times_per_year attributes.

For example, if the person works 10 hours a week, it will return
520 when the times_per_year parameter is 1.

## ALItemizedJobList Objects

```python
class ALItemizedJobList(DAList)
```

Represents a list of ALItemizedJobs that can have both payments and money
out. This is a less common way of reporting income.

#### sources

Returns a set of the unique sources in all of the jobs.
By default gets from both sides, if which_side is &quot;deductions&quot;, only gets from deductions.

#### total

Alias for ALItemizedJobList.gross_total to integrate with
ALIncomeList math.

#### gross\_total

Returns the sum of the gross incomes of the list&#x27;s jobs divided by the
times_per_year. You can filter the items by `source`. `source` can be a
string or a list.

**Arguments**:

- `kwarg` - source \{str | [str]\} - (Optional) Source or list of sources of
  desired job items to sum from every itemized job.
  E.g. [&#x27;tips&#x27;, &#x27;commissions&#x27;]
- `kwarg` - times_per_year \{float\} (Optional) Number of times per year you
  want to calculate. E.g, to express a weekly period, use 52. Default is 1.

#### deduction\_total

Returns the sum of the deductions of the list&#x27;s jobs divided by the
times_per_year. You can filter the items by `source`. `source` can be a
string or a list.

**Arguments**:

- `kwarg` - source \{str | [str]\} - (Optional) Source or list of sources of
  desired job items to sum from every itemized job.
  E.g. [&#x27;taxes&#x27;, &#x27;dues&#x27;]
- `kwarg` - times_per_year \{float\} (Optional) Number of times per year you
  want to calculate. E.g, to express a weekly period, use 52. Default is 1.

#### net\_total

Returns the net of the list&#x27;s jobs (money in minus money out) divided by
the times_per_year. You can filter the items by `source`. `source` can be a
string or a list.

**Arguments**:

- `kwarg` - source \{str | List[str]\} - (Optional) Source or list of sources of
  desired job items to sum from every itemized job.
  E.g. [&#x27;tips&#x27;, &#x27;taxes&#x27;]
- `kwarg` - times_per_year \{float\} (Optional) Number of times per year you
  want to calculate. E.g, to express a weekly period, use 52. Default is 1.

