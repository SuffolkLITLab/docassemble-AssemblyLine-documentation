# Table of Contents

* [formfyxer.lit\_explorer](#formfyxer.lit_explorer)
  * [recursive\_get\_id](#formfyxer.lit_explorer.recursive_get_id)
  * [spot](#formfyxer.lit_explorer.spot)
  * [re\_case](#formfyxer.lit_explorer.re_case)
  * [regex\_norm\_field](#formfyxer.lit_explorer.regex_norm_field)
  * [reformat\_field](#formfyxer.lit_explorer.reformat_field)
  * [norm](#formfyxer.lit_explorer.norm)
  * [vectorize](#formfyxer.lit_explorer.vectorize)
  * [normalize\_name](#formfyxer.lit_explorer.normalize_name)
  * [cluster\_screens](#formfyxer.lit_explorer.cluster_screens)
  * [InputType](#formfyxer.lit_explorer.InputType)
  * [field\_types\_and\_sizes](#formfyxer.lit_explorer.field_types_and_sizes)
  * [AnswerType](#formfyxer.lit_explorer.AnswerType)
  * [classify\_field](#formfyxer.lit_explorer.classify_field)
  * [get\_adjusted\_character\_count](#formfyxer.lit_explorer.get_adjusted_character_count)
  * [time\_to\_answer\_field](#formfyxer.lit_explorer.time_to_answer_field)
  * [time\_to\_answer\_form](#formfyxer.lit_explorer.time_to_answer_form)
  * [cleanup\_text](#formfyxer.lit_explorer.cleanup_text)
  * [complete\_with\_command](#formfyxer.lit_explorer.complete_with_command)
  * [needs\_calculations](#formfyxer.lit_explorer.needs_calculations)
  * [get\_passive\_sentences](#formfyxer.lit_explorer.get_passive_sentences)
  * [get\_citations](#formfyxer.lit_explorer.get_citations)
  * [substitute\_phrases](#formfyxer.lit_explorer.substitute_phrases)
  * [substitute\_neutral\_gender](#formfyxer.lit_explorer.substitute_neutral_gender)
  * [substitute\_plain\_language](#formfyxer.lit_explorer.substitute_plain_language)
  * [transformed\_sentences](#formfyxer.lit_explorer.transformed_sentences)
  * [parse\_form](#formfyxer.lit_explorer.parse_form)
  * [form\_complexity](#formfyxer.lit_explorer.form_complexity)

pydoc-module-header.hbs<a id="formfyxer.lit_explorer.recursive_get_id"></a>

#### recursive\_get\_id(values\_to\_unpack: Union[dict, list], tmpl: Optional[set] = None)

```python
def recursive_get_id(values_to_unpack: Union[dict, list],
                     tmpl: Optional[set] = None)
```

Pull ID values out of the LIST/NSMI results from Spot.

<a id="formfyxer.lit_explorer.spot"></a>

#### spot(text: str, lower: float = 0.25, pred: float = 0.5, upper: float = 0.6, verbose: float = 0, token: str = "")

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

<a id="formfyxer.lit_explorer.re_case"></a>

#### re\_case(text: str)

```python
def re_case(text: str) -> str
```

Capture PascalCase, snake_case and kebab-case terms and add spaces to separate the joined words

<a id="formfyxer.lit_explorer.regex_norm_field"></a>

#### regex\_norm\_field(text: str)

```python
def regex_norm_field(text: str)
```

Apply some heuristics to a field name to see if we can get it to match AssemblyLine conventions.
See: https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/document_variables

<a id="formfyxer.lit_explorer.reformat_field"></a>

#### reformat\_field(text: str, max\_length: int = 30, tools\_token=None)

```python
def reformat_field(text: str, max_length: int = 30, tools_token=None)
```

Transforms a string of text into a snake_case variable close in length to `max_length` name by
summarizing the string and stitching the summary together in snake_case.
h/t https://towardsdatascience.com/nlp-building-a-summariser-68e0c19e3a93

<a id="formfyxer.lit_explorer.norm"></a>

#### norm(row)

```python
def norm(row)
```

Normalize a word vector.

<a id="formfyxer.lit_explorer.vectorize"></a>

#### vectorize(text: Union[List[str], str], tools\_token: Optional[str] = None)

```python
def vectorize(text: Union[List[str], str], tools_token: Optional[str] = None)
```

Vectorize a string of text.

**Arguments**:

- `text` - a string of multiple words to vectorize
- `tools_token` - the token to tools.suffolklitlab.org, used for micro-service
  to reduce the amount of memory you need on your machine. If
  not passed, you need to have `en_core_web_lg` installed

<a id="formfyxer.lit_explorer.normalize_name"></a>

#### normalize\_name(jur: str, group: str, n: int, per, last\_field: str, this\_field: str, tools\_token: Optional[str] = None)

```python
def normalize_name(jur: str,
                   group: str,
                   n: int,
                   per,
                   last_field: str,
                   this_field: str,
                   tools_token: Optional[str] = None) -> Tuple[str, float]
```

Normalize a field name, if possible to the Assembly Line conventions, and if
not, to a snake_case variable name of appropriate length.

HACK: temporarily all we do is re-case it and normalize it using regex rules.
Will be replaced with call to LLM soon.

<a id="formfyxer.lit_explorer.cluster_screens"></a>

#### cluster\_screens(fields: List[str] = [], damping: float = 0.7, tools\_token: Optional[str] = None)

```python
def cluster_screens(fields: List[str] = [],
                    damping: float = 0.7,
                    tools_token: Optional[str] = None) -> Dict[str, List[str]]
```

Groups the given fields into screens based on how much they are related.

**Arguments**:

- `fields` - a list of field names
- `damping` - a value &gt;= 0.5 and &lt; 1. Tunes how related screens should be
- `tools_token` - the token to tools.suffolklitlab.org, needed of doing
  micro-service vectorization
  
- `Returns` - a suggested screen grouping, each screen name mapped to the list of fields on it

<a id="formfyxer.lit_explorer.InputType"></a>

## InputType Objects

```python
class InputType(Enum)
```

Input type maps onto the type of input the PDF author chose for the field. We only
handle text, checkbox, and signature fields.

<a id="formfyxer.lit_explorer.field_types_and_sizes"></a>

#### field\_types\_and\_sizes(fields: Optional[Iterable[FormField]])

```python
def field_types_and_sizes(
        fields: Optional[Iterable[FormField]]) -> List[FieldInfo]
```

Transform the fields provided by get_existing_pdf_fields into a summary format.
Result will look like:
[
\{
&quot;var_name&quot;: var_name,
&quot;type&quot;: &quot;text | checkbox | signature&quot;,
&quot;max_length&quot;: n
\}
]

<a id="formfyxer.lit_explorer.AnswerType"></a>

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
See Jarret and Gaffney, Forms That Work (2008)

<a id="formfyxer.lit_explorer.classify_field"></a>

#### classify\_field(field: FieldInfo, new\_name: str)

```python
def classify_field(field: FieldInfo, new_name: str) -> AnswerType
```

Apply heuristics to the field&#x27;s original and &quot;normalized&quot; name to classify
it as either a &quot;slot-in&quot;, &quot;gathered&quot;, &quot;third party&quot; or &quot;created&quot; field type.

<a id="formfyxer.lit_explorer.get_adjusted_character_count"></a>

#### get\_adjusted\_character\_count(field: FieldInfo)

```python
def get_adjusted_character_count(field: FieldInfo) -> float
```

Determines the bracketed length of an input field based on its max_length attribute,
returning a float representing the approximate length of the field content.

The function chunks the answers into 5 different lengths (checkboxes, 2 words, short, medium, and long)
instead of directly using the character count, as forms can allocate different spaces
for the same data without considering the space the user actually needs.

**Arguments**:

- `field` _FieldInfo_ - An object containing information about the input field,
  including the &quot;max_length&quot; attribute.
  

**Returns**:

- `float` - The approximate length of the field content, categorized into checkboxes, 2 words, short,
  medium, or long based on the max_length attribute.
  

**Examples**:

  &gt;&gt;&gt; get_adjusted_character_count(\{&quot;type&quot;\}: InputType.CHECKBOX)
  4.7
  &gt;&gt;&gt; get_adjusted_character_count(\{&quot;max_length&quot;: 100\})
  9.4
  &gt;&gt;&gt; get_adjusted_character_count(\{&quot;max_length&quot;: 300\})
  230
  &gt;&gt;&gt; get_adjusted_character_count(\{&quot;max_length&quot;: 600\})
  115
  &gt;&gt;&gt; get_adjusted_character_count(\{&quot;max_length&quot;: 1200\})
  1150

<a id="formfyxer.lit_explorer.time_to_answer_field"></a>

#### time\_to\_answer\_field(field: FieldInfo, new\_name: str, cpm: int = 40, cpm\_std\_dev: int = 17)

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

<a id="formfyxer.lit_explorer.time_to_answer_form"></a>

#### time\_to\_answer\_form(processed\_fields, normalized\_fields)

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

<a id="formfyxer.lit_explorer.cleanup_text"></a>

#### cleanup\_text(text: str, fields\_to\_sentences: bool = False)

```python
def cleanup_text(text: str, fields_to_sentences: bool = False) -> str
```

Apply cleanup routines to text to provide more accurate readability statistics.

<a id="formfyxer.lit_explorer.complete_with_command"></a>

#### complete\_with\_command(text, command, tokens, creds: Optional[OpenAiCreds] = None)

```python
def complete_with_command(text,
                          command,
                          tokens,
                          creds: Optional[OpenAiCreds] = None) -> str
```

Combines some text with a command to send to open ai.

<a id="formfyxer.lit_explorer.needs_calculations"></a>

#### needs\_calculations(text: Union[str, Doc])

```python
def needs_calculations(text: Union[str, Doc]) -> bool
```

A conservative guess at if a given form needs the filler to make math calculations,
something that should be avoided. If

<a id="formfyxer.lit_explorer.get_passive_sentences"></a>

#### get\_passive\_sentences(text: Union[List, str])

```python
def get_passive_sentences(
        text: Union[List, str]) -> List[Tuple[str, List[Tuple[int, int]]]]
```

Return a list of tuples, where each tuple represents a
sentence in which passive voice was detected along with a list of the
starting and ending position of each fragment that is phrased in the passive voice.
The combination of the two can be used in the PDFStats frontend to highlight the
passive text in an individual sentence.

Text can either be a string or a list of strings.
If provided a single string, it will be tokenized with NTLK and
sentences containing fewer than 2 words will be ignored.

<a id="formfyxer.lit_explorer.get_citations"></a>

#### get\_citations(text: str, tokenized\_sentences: List[str])

```python
def get_citations(text: str, tokenized_sentences: List[str]) -> List[str]
```

Get citations and some extra surrounding context (the full sentence), if the citation is
fewer than 5 characters (often eyecite only captures a section symbol
for state-level short citation formats)

<a id="formfyxer.lit_explorer.substitute_phrases"></a>

#### substitute\_phrases(input\_string: str, substitution\_phrases: Dict[str, str])

```python
def substitute_phrases(
        input_string: str,
        substitution_phrases: Dict[str,
                                   str]) -> Tuple[str, List[Tuple[int, int]]]
```

Substitute phrases in the input string and return the new string and positions of substituted phrases.

**Arguments**:

- `input_string` _str_ - The input string containing phrases to be replaced.
- `substitution_phrases` _Dict[str, str]_ - A dictionary mapping original phrases to their replacement phrases.
  

**Returns**:

  Tuple[str, List[Tuple[int, int]]]: A tuple containing the new string with substituted phrases and a list of
  tuples, each containing the start and end positions of the substituted
  phrases in the new string.
  

**Example**:

  &gt;&gt;&gt; input_string = &quot;The quick brown fox jumped over the lazy dog.&quot;
  &gt;&gt;&gt; substitution_phrases = \{&quot;quick brown&quot;: &quot;swift reddish&quot;, &quot;lazy dog&quot;: &quot;sleepy canine&quot;\}
  &gt;&gt;&gt; new_string, positions = substitute_phrases(input_string, substitution_phrases)
  &gt;&gt;&gt; print(new_string)
  &quot;The swift reddish fox jumped over the sleepy canine.&quot;
  &gt;&gt;&gt; print(positions)
  [(4, 17), (35, 48)]

<a id="formfyxer.lit_explorer.substitute_neutral_gender"></a>

#### substitute\_neutral\_gender(input\_string: str)

```python
def substitute_neutral_gender(
        input_string: str) -> Tuple[str, List[Tuple[int, int]]]
```

Substitute gendered phrases with neutral phrases in the input string.
Primary source is https://github.com/joelparkerhenderson/inclusive-language

<a id="formfyxer.lit_explorer.substitute_plain_language"></a>

#### substitute\_plain\_language(input\_string: str)

```python
def substitute_plain_language(
        input_string: str) -> Tuple[str, List[Tuple[int, int]]]
```

Substitute complex phrases with simpler alternatives.
Source of terms is drawn from https://www.plainlanguage.gov/guidelines/words/

<a id="formfyxer.lit_explorer.transformed_sentences"></a>

#### transformed\_sentences(sentence\_list: List[str], fun: Callable)

```python
def transformed_sentences(
        sentence_list: List[str],
        fun: Callable) -> List[Tuple[str, str, List[Tuple[int, int]]]]
```

Apply a function to a list of sentences and return only the sentences with changed terms.
The result is a tuple of the original sentence, new sentence, and the starting and ending position
of each changed fragment in the sentence.

<a id="formfyxer.lit_explorer.parse_form"></a>

#### parse\_form(in\_file: str, title: Optional[str] = None, jur: Optional[str] = None, cat: Optional[str] = None, normalize: bool = True, spot\_token: Optional[str] = None, tools\_token: Optional[str] = None, openai\_creds: Optional[OpenAiCreds] = None, rewrite: bool = False, debug: bool = False)

```python
def parse_form(in_file: str,
               title: Optional[str] = None,
               jur: Optional[str] = None,
               cat: Optional[str] = None,
               normalize: bool = True,
               spot_token: Optional[str] = None,
               tools_token: Optional[str] = None,
               openai_creds: Optional[OpenAiCreds] = None,
               rewrite: bool = False,
               debug: bool = False)
```

Read in a pdf, pull out basic stats, attempt to normalize its form fields, and re-write the
in_file with the new fields (if `rewrite=1`). If you pass a spot token, we will guess the
NSMI code. If you pass openai creds, we will give suggestions for the title and description.

<a id="formfyxer.lit_explorer.form_complexity"></a>

#### form\_complexity(stats)

```python
def form_complexity(stats)
```

Gets a single number of how hard the form is to complete. Higher is harder.

