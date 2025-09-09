# Table of Contents

* [formfyxer.docx\_wrangling](#formfyxer.docx_wrangling)
  * [update\_docx](#formfyxer.docx_wrangling.update_docx)
  * [get\_labeled\_docx\_runs](#formfyxer.docx_wrangling.get_labeled_docx_runs)
  * [modify\_docx\_with\_openai\_guesses](#formfyxer.docx_wrangling.modify_docx_with_openai_guesses)

pydoc-module-header.hbs<a id="formfyxer.docx_wrangling.update_docx"></a>

#### update\_docx(document: docx.Document, modified\_runs: Tuple[int,int,str,str,int])

```python
def update_docx(
        document: docx.Document, modified_runs: Tuple[int, int, str, str,
                                                      int]) -> docx.Document
```

Update the document with the modified runs.

**Arguments**:

- `document` - the docx.Document object
- `modified_runs` - a tuple of paragraph number, run number, the modified text, a question (not used), and whether a new paragraph should be inserted (for conditional text)
  

**Returns**:

  The modified document.

<a id="formfyxer.docx_wrangling.get_labeled_docx_runs"></a>

#### get\_labeled\_docx\_runs(docx\_path: str, custom\_people\_names: Optional[Tuple[str, str]] = None)

```python
def get_labeled_docx_runs(
    docx_path: str,
    custom_people_names: Optional[Tuple[str, str]] = None
) -> List[Tuple[int, int, str]]
```

Scan the DOCX and return a list of modified text with Jinja2 variable names inserted.

**Arguments**:

- `docx_path` - path to the DOCX file
- `custom_people_names` - a tuple of custom names and descriptions to use in addition to the default ones. Like: (&quot;clients&quot;, &quot;the person benefiting from the form&quot;)
  

**Returns**:

  A list of tuples, each containing a paragraph number, run number, and the modified text of the run.

<a id="formfyxer.docx_wrangling.modify_docx_with_openai_guesses"></a>

#### modify\_docx\_with\_openai\_guesses(docx\_path: str)

```python
def modify_docx_with_openai_guesses(docx_path: str) -> docx.Document
```

Uses OpenAI to guess the variable names for a document and then modifies the document with the guesses.

**Arguments**:

- `docx_path` _str_ - Path to the DOCX file to modify.
  

**Returns**:

- `docx.Document` - The modified document, ready to be saved to the same or a new path

