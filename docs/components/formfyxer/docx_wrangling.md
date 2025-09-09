---
sidebar_label: docx_wrangling
title: formfyxer.docx_wrangling
---

#### update\_docx

Update the document with the modified runs.

Note: OpenAI is probabilistic, so the modified run indices may not be correct.
When the index of a run or paragraph is out of range, a new paragraph
will be inserted at the end of the document or a new run at the end of the
paragraph&#x27;s runs.

Take a careful look at the output document to make sure it is still correct.

**Arguments**:

- `document` - the docx.Document object, or the path to the DOCX file
- `modified_runs` - a tuple of paragraph number, run number, the modified text, a question (not used), and whether a new paragraph should be inserted (for conditional text)
  

**Returns**:

  The modified document.

#### get\_docx\_repr

Return a JSON representation of the paragraphs and runs in the DOCX file.

**Arguments**:

- `docx_path` - path to the DOCX file
  

**Returns**:

  A JSON representation of the paragraphs and runs in the DOCX file.

#### get\_labeled\_docx\_runs

Scan the DOCX and return a list of modified text with Jinja2 variable names inserted.

**Arguments**:

- `docx_path` - path to the DOCX file
- `docx_repr` - a string representation of the paragraphs and runs in the DOCX file, if docx_path is not provided. This might be useful if you want
- `custom_people_names` - a tuple of custom names and descriptions to use in addition to the default ones. Like: (&quot;clients&quot;, &quot;the person benefiting from the form&quot;)
  

**Returns**:

  A list of tuples, each containing a paragraph number, run number, and the modified text of the run.

#### get\_modified\_docx\_runs

Use GPT to rewrite the contents of a DOCX file paragraph by paragraph. Does not handle tables, footers, or
other structures yet.

This is a light wrapper that provides the structure of DOCX paragraphs and runs to your prompt
to OpenAI to facilitate the rewriting of the document without disrupting formatting.

For example, this could be used to:
* Remove any passive voice
* Replace placeholder text with variable names
* Rewrite to a 6th grade reading level
* Do an advanced search and replace, without requiring you to use a regex

By default, the example prompt includes a sample like this:

[
[0, 0, &quot;Dear &quot;],
[0, 1, &quot;John Smith:&quot;],
[1, 0, &quot;I hope this letter finds you well.&quot;],
]

Your custom instructions should include an example of how the sample will be modified, like the one below:

Example reply, indicating paragraph, run, the new text, and a number indicating if this changes the
current paragraph, adds one before, or adds one after (-1, 0, 1):

\{&quot;results&quot;:
[
[0, 1, &quot;Dear \{\{ other_parties[0] \}\}:&quot;, 0],
[2, 0, &quot;\{%p if is_tenant %\}&quot;, -1],
[3, 0, &quot;\{%p endif %\}&quot;, 1],
]
\}

You may also want to customize the input example to better match your use case.

**Arguments**:

- `docx_path` _str_ - path to the DOCX file
- `docx_repr` _str_ - a string representation of the paragraphs and runs in the DOCX file, if docx_path is not provided.
- `custom_example` _Optional[str]_ - a string containing the purpose and overview of the task
  instructions (str) a string containing specific instructions for the task
- `openai_client` _Optional[OpenAI]_ - an OpenAI client object. If not provided a new one will be created.
- `api_key` _Optional[str]_ - an OpenAI API key. If not provided, it will be obtained from the environment
- `temperature` _float_ - the temperature to use when generating text. Lower temperatures are more conservative.
  

**Returns**:

  A list of tuples, each containing a paragraph number, run number, and the modified text of the run.

#### make\_docx\_plain\_language

Convert a DOCX file to plain language with the help of OpenAI.

#### modify\_docx\_with\_openai\_guesses

Uses OpenAI to guess the variable names for a document and then modifies the document with the guesses.

**Arguments**:

- `docx_path` _str_ - Path to the DOCX file to modify.
  

**Returns**:

- `docx.Document` - The modified document, ready to be saved to the same or a new path

