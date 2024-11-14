---
sidebar_label: test_conversions
title: EFSPIntegration.test.test_conversions
---

## TestConversions Objects

```python
class TestConversions(unittest.TestCase)
```

Tests conversions.py on the &quot;vars.json&quot; file

#### test\_parse\_case\_info

```python
def test_parse_case_info()
```

Makes sure that participants of the case are parsed fully, needed

## TestNoneResp Objects

```python
class TestNoneResp(unittest.TestCase)
```

Tests with none responses conversions.py on the &quot;vars.json&quot; file

#### test\_none

```python
def test_none()
```

Makes sure that participants of the case are parsed fully, needed

## TestCourtSwitching Objects

```python
class TestCourtSwitching(unittest.TestCase)
```

Tests that if we search a case in a grouped court (say peoria) and
get back a court from a sub court (peariacr), that the
court_id from the found case reflects the sub court.

This is necessary, as filings can&#x27;t be accepted to the grouped court.

#### test\_switched\_court

```python
def test_switched_court()
```

Makes sure that participants of the case are parsed fully, needed

## TestConversionIgnoreAttorneys Objects

```python
class TestConversionIgnoreAttorneys(unittest.TestCase)
```

#### test\_ignore\_attorneys

```python
def test_ignore_attorneys()
```

Attorneys are just stuck in the middle with normal case participants. You can&#x27;t attach service contacts to them, so

