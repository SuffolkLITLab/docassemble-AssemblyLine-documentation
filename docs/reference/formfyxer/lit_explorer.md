---
sidebar_label: lit_explorer
title: formfyxer.lit_explorer
---

#### recursive\_get\_id

```python
def recursive_get_id(values_to_unpack: Union[dict, list],
                     tmpl: Optional[set] = None)
```

Pull ID values out of the LIST/NSMI results from Spot.

#### spot

```python
def spot(text: str,
         lower: float = 0.25,
         pred: float = 0.5,
         upper: float = 0.6,
         verbose: float = 0,
         token: str = "")
```

Call the Spot API (https://spot.suffolklitlab.org) to classify the text of a PDF using
the NSMIv2/LIST taxonomy (https://taxonomy.legal/), but returns only the IDs of issues found in the text.

#### re\_case

```python
def re_case(text: str) -> str
```

Capture PascalCase, snake_case and kebab-case terms and add spaces to separate the joined words

#### regex\_norm\_field

```python
def regex_norm_field(text: str)
```

Apply some heuristics to a field name to see if we can get it to match AssemblyLine conventions.
See: https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/document_variables

#### reformat\_field

```python
def reformat_field(text: str, max_length: int = 30)
```

Transforms a string of text into a snake_case variable close in length to `max_length` name by
summarizing the string and stitching the summary together in snake_case.
h/t https://towardsdatascience.com/nlp-building-a-summariser-68e0c19e3a93

#### norm

```python
def norm(row)
```

Normalize a word vector.

#### vectorize

```python
def vectorize(text: str, normalize: bool = True)
```

Vectorize a string of text.

#### normalize\_name

```python
def normalize_name(jur: str, group: str, n: int, per, last_field: str,
                   this_field: str) -> Tuple[str, float]
```

Add hard coded conversions maybe by calling a function
if returns 0 then fail over to ML or other way around poor prob -&gt; check hard-coded.
Retuns the new name and a confidence value between 0 and 1

#### cluster\_screens

```python
def cluster_screens(fields: List[str] = [], damping: float = 0.7)
```

Takes in a list (fields) and returns a suggested screen grouping
Set damping to value &gt;= 0.5 or &lt; 1 to tune how related screens should be

## InputType Objects

```python
class InputType(Enum)
```

Input type maps onto the type of input the PDF author chose for the field. We only
handle text, checkbox, and signature fields.

#### field\_types\_and\_sizes

```python
def field_types_and_sizes(
        fields: Optional[Iterable[FormField]]) -> List[FieldInfo]
```

Transform the fields provided by get_existing_pdf_fields into a summary format.
Result will look like:
[
{
&quot;var_name&quot;: var_name,
&quot;type&quot;: &quot;text | checkbox | signature&quot;,
&quot;max_length&quot;: n
}
]

## AnswerType Objects

```python
class AnswerType(Enum)
```

Answer type describes the effort the user answering the form will require.
&quot;Slot-in&quot; answers are a matter of almost instantaneous recall, e.g., name, address, etc.
&quot;Gathered&quot; answers require looking around one&#x27;s desk, for e.g., a health insurance number.
&quot;Third party&quot; answers require picking up the phone to call someone else who is the keeper
of the information.
&quot;Created&quot; answers don&#x27;t exist before the user is presented with the question. They may include
a choice, creating a narrative, or even applying legal reasoning. &quot;Affidavits&quot; are a special
form of created answers.
See Jarrett and Gaffney, Forms That Work (2008)

#### classify\_field

```python
def classify_field(field: FieldInfo, new_name: str) -> AnswerType
```

Apply heuristics to the field&#x27;s original and &quot;normalized&quot; name to classify
it as either a &quot;slot-in&quot;, &quot;gathered&quot;, &quot;third party&quot; or &quot;created&quot; field type.

#### time\_to\_answer\_field

```python
def time_to_answer_field(field: FieldInfo,
                         new_name: str,
                         cpm: int = 40,
                         cpm_std_dev: int = 17) -> Callable[[int], np.ndarray]
```

Apply a heuristic for the time it takes to answer the given field, in minutes.
It is hand-written for now.
It will factor in the input type, the answer type (slot in, gathered, third party or created), and the
amount of input text allowed in the field.
The return value is a function that can return N samples of how long it will take to answer the field (in minutes)

#### time\_to\_answer\_form

```python
def time_to_answer_form(processed_fields,
                        normalized_fields) -> Tuple[float, float]
```

Provide an estimate of how long it would take an average user to respond to the questions
on the provided form.
We use signals such as the field type, name, and space provided for the response to come up with a
rough estimate, based on whether the field is:
1. fill in the blank
2. gathered - e.g., an id number, case number, etc.
3. third party: need to actually ask someone the information - e.g., income of not the user, anything else?
4. created:
a. short created (3 lines or so?)
b. long created (anything over 3 lines)

#### cleanup\_text

```python
def cleanup_text(text: str, fields_to_sentences: bool = False) -> str
```

Apply cleanup routines to text to provide more accurate readability statistics.

#### complete\_with\_command

```python
def complete_with_command(text,
                          command,
                          tokens,
                          creds: Optional[OpenAiCreds] = None) -> str
```

Combines some text with a command to send to open ai.

#### needs\_calculations

```python
def needs_calculations(text: Union[str, Doc]) -> bool
```

A conservative guess at if a given form needs the filler to make math calculations,
something that should be avoided. If

#### get\_passive\_sentences

```python
def get_passive_sentences(
        text: Union[List, str]) -> List[Tuple[str, List[str]]]
```

Return a list of tuples, where each tuple represents a
sentence in which passive voice was detected along with a list of each
fragment that is phrased in the passive voice. The combination of the two
can be used in the PDFStats frontend to highlight the passive text in an
individual sentence.

Text can either be a string or a list of strings.
If provided a single string, it will be tokenized with NTLK and
sentences containing fewer than 2 words will be ignored.

#### get\_citations

```python
def get_citations(text: str, tokenized_sentences: List[str]) -> List[str]
```

Get citations and some extra surrounding context (the full sentence), if the citation is
fewer than 5 characters (often eyecite only captures a section symbol
for state-level short citation formats)

#### parse\_form

```python
def parse_form(in_file: str,
               title: Optional[str] = None,
               jur: Optional[str] = None,
               cat: Optional[str] = None,
               normalize: bool = True,
               spot_token: Optional[str] = None,
               openai_creds: Optional[OpenAiCreds] = None,
               rewrite: bool = False,
               debug: bool = False)
```

Read in a pdf, pull out basic stats, attempt to normalize its form fields, and re-write the
in_file with the new fields (if `rewrite=1`). If you pass a spot token, we will guess the
NSMI code. If you pass openai creds, we will give suggestions for the title and description.

#### form\_complexity

```python
def form_complexity(stats)
```

Gets a single number of how hard the form is to complete. Higher is harder.

