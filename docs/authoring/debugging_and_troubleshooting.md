---
id: debugging_and_troubleshooting
title: Debugging and troubleshooting your interview
sidebar_label: Debugging and troubleshooting
slug: debugging_and_troubleshooting
---

## Overview

When developing interviews with the Document Assembly Line, you'll inevitably encounter errors and unexpected behavior. This guide will help you understand how to debug your interviews effectively, read error messages, and use Docassemble's built-in debugging tools.

## Reading and understanding error messages

### Common error types

#### Undefined variable errors
The most common error you'll see is when Docassemble tries to access a variable that hasn't been defined yet:

```
NameError: name 'user_name' is not defined
```

**What it means:** Your interview is trying to use a variable (like `user_name`) before it has been set.

**How to fix it:** 
- Check that you've asked the user for this information in a question
- Verify the variable name is spelled correctly everywhere
- Make sure the question that sets this variable comes before it's used

#### Template errors
```
TemplateError: 'user_address' is undefined
```

**What it means:** A template (like a DOCX or PDF) is trying to use a variable that doesn't exist.

**How to fix it:**
- Check your document template for variable names
- Ensure all template variables are gathered in your interview
- Use the Document Variables Reference to match template and interview variables

#### YAML syntax errors
```
YAMLError: while parsing a block mapping
```

**What it means:** There's a formatting problem in your YAML file.

**How to fix it:**
- Check your indentation (use spaces, not tabs)
- Make sure colons have spaces after them
- Verify all quotes are properly closed
- Use a YAML validator online to check your syntax

## Using Docassemble's debugging tools

### The "Show variables and values" button

Docassemble provides a powerful debugging feature through the "Show variables and values" button that appears in the top-right corner of interview screens during development.

#### What it shows
- **All defined variables** and their current values
- **Variable types** (text, number, list, etc.)
- **Special Docassemble objects** like DAList, DADict, etc.
- **Session information** and metadata

#### What it doesn't show
- **Undefined variables** (variables that haven't been set yet)
- **Template variables** that exist in documents but not in the interview
- **Python code execution** (it shows results, not the process)

#### How to use it effectively
1. **Check variable names:** Verify spellings match between your questions and templates
2. **Inspect data types:** Make sure lists are actually lists, dates are date objects, etc.
3. **Track interview progress:** See which variables have been collected so far
4. **Debug conditional logic:** Check if conditions are evaluating as expected

### The playground features

#### Sources tab
- View your complete YAML file
- Check for syntax highlighting errors (red text usually indicates problems)
- Use the "Validate" button to check for YAML syntax errors

#### Variables tab  
- Similar to "Show variables and values" but in a more structured format
- Better for examining complex data structures
- Allows you to modify variables for testing

#### Logs tab
- View Python error messages and stack traces
- See detailed information about what went wrong
- Check for server-side errors that don't appear in the user interface

## Common troubleshooting steps

### 1. Start with the error message
- Read the complete error message carefully
- Look for variable names, line numbers, or specific error types
- Don't ignore the "stack trace" - it shows exactly where the error occurred

### 2. Check your variable names
- Verify spelling consistency between questions, logic, and templates
- Remember that variable names are case-sensitive
- Use the "Show variables and values" to see what's actually defined

### 3. Review your interview flow
- Make sure questions are asked in the right order
- Check that conditional logic (`if` statements) work as expected
- Verify that required variables are gathered before they're used

### 4. Test incrementally
- Comment out sections of your interview to isolate problems
- Test individual questions before combining them
- Use simple test cases before adding complex logic

### 5. Check your templates
- Open your DOCX/PDF template and verify variable names
- Make sure all `{{ variable_name }}` placeholders have corresponding interview questions
- Test templates with simple, known variable values first

## Advanced debugging techniques

### Using the Python debugger
For complex logic errors, you can add debugging code to your YAML:

```yaml
---
code: |
  log("Debug: user_age is " + str(user_age))
  log("Debug: condition result is " + str(user_age >= 18))
```

### Testing with known values
Set variables manually for testing:

```yaml
---
code: |
  # For testing only - remove in production
  user_name = "Test User"
  user_age = 25
```

### Validating user input
Add validation to catch problems early:

```yaml
---
question: What is your age?
fields:
  - Age: user_age
    datatype: integer
    min: 0
    max: 150
validation code: |
  if user_age < 0:
    validation_error("Age cannot be negative")
```

## External resources

### Suffolk LIT Lab Workshop
The Suffolk LIT Lab offers a comprehensive [workshop on troubleshooting Docassemble interview errors](https://suffolklitlab.org/troubleshooting-docassemble-interview-errors-workshop/) that covers:
- Live debugging demonstrations
- Common error patterns and solutions
- Best practices for error prevention

### Official Docassemble Documentation
The [Docassemble Debugging page](https://docassemble.org/docs/errors.html) provides detailed information about:
- Error handling in Docassemble
- Advanced debugging techniques
- Server configuration for better error reporting

### Assembly Line specific resources
- [Error pages configuration](../components/AssemblyLine/error_actions.md) - How to customize error pages for users
- [Customizing your interview](customizing_interview.md) - General editing and customization guidance
- [YAML structure guide](../coding_style/yaml_structure.md) - Best practices for organizing your code

## Getting help

When you encounter an error you can't solve:

1. **Check the error logs** in the playground
2. **Search the documentation** for similar error messages
3. **Ask for help** on the [Docassemble Slack](https://docassemble.org/docs/support.html#tocAnchor-1-1) or in community forums
4. **Share specific error messages** and the relevant code when asking for help
5. **Include context** about what you were trying to accomplish

Remember: debugging is a normal part of development. Every developer encounters these issues, and with practice, you'll get better at quickly identifying and fixing common problems.