# Table of Contents

* [ALToolbox.test\_misc](#ALToolbox.test_misc)
  * [TestButtonArray](#ALToolbox.test_misc.TestButtonArray)
    * [test\_button\_array\_generates\_correct\_html](#ALToolbox.test_misc.TestButtonArray.test_button_array_generates_correct_html)
    * [test\_button\_array\_filters\_by\_privilege](#ALToolbox.test_misc.TestButtonArray.test_button_array_filters_by_privilege)

---
sidebar_label: test_misc
title: ALToolbox.test_misc
---

<a id="ALToolbox.test_misc.TestButtonArray"></a>

## TestButtonArray Objects

```python
class TestButtonArray(unittest.TestCase)
```

<a id="ALToolbox.test_misc.TestButtonArray.test_button_array_generates_correct_html"></a>

#### test\_button\_array\_generates\_correct\_html(mock\_privilege, mock\_privilege2)

```python
@patch("docassemble.ALToolbox.misc.user_has_privilege", return_value=False)
@patch("ALToolbox.misc.user_has_privilege", return_value=False)
def test_button_array_generates_correct_html(mock_privilege,
                                             mock_privilege2) -> None
```

Test button_array generates correct HTML

**Arguments**:

- `mock_privilege` - A mock object
- `mock_privilege2` - A mock object

<a id="ALToolbox.test_misc.TestButtonArray.test_button_array_filters_by_privilege"></a>

#### test\_button\_array\_filters\_by\_privilege(mock\_this\_thread, mock\_privilege, mock\_privilege2)

```python
@patch("docassemble.ALToolbox.misc.user_has_privilege", return_value=False)
@patch("ALToolbox.misc.user_has_privilege", return_value=False)
@patch("docassemble.base.functions.this_thread")
def test_button_array_filters_by_privilege(mock_this_thread, mock_privilege,
                                           mock_privilege2) -> None
```

Test button_array filters by privilege

**Arguments**:

- `mock_this_thread` - A mock object
- `mock_privilege` - A mock object
- `mock_privilege2` - A mock object

