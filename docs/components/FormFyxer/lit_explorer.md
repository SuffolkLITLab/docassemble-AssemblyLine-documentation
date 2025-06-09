---
sidebar_label: lit_explorer
title: formfyxer.lit_explorer
---

#### recursive\_get\_id

Pull ID values out of the LIST/NSMI results from Spot.

#### spot

Call the Spot API (https://spot.suffolklitlab.org) to classify the text of a PDF using
the NSMIv2/LIST taxonomy (https://taxonomy.legal/), but returns only the IDs of issues found in the text.

#### re\_case

Capture PascalCase, snake_case and kebab-case terms and add spaces to separate the joined words

#### regex\_norm\_field

Apply some heuristics to a field name to see if we can get it to match AssemblyLine conventions.
See: https://assemblyline.suffolklitlab.org/docs/document_variables

#### reformat\_field

Transforms a string of text into a snake_case variable close in length to `max_length` name by
summarizing the string and stitching the summary together in snake_case.
h/t https://medium.com/data-science/nlp-building-a-summariser-68e0c19e3a93

#### norm

Normalize a word vector.

#### vectorize

Vectorize a string of text.

**Arguments**:

- `text` - a string of multiple words to vectorize
- `tools_token` - the token to tools.suffolklitlab.org, used for micro-service
  to reduce the amount of memory you need on your machine. If
  not passed, you need to have `en_core_web_lg` installed

#### normalize\_name

Normalize a field name, if possible to the Assembly Line conventions, and if
not, to a snake_case variable name of appropriate length.

HACK: temporarily all we do is re-case it and normalize it using regex rules.
Will be replaced with call to LLM soon.

#### cluster\_screens

Groups the given fields into screens based on how much they are related.

**Arguments**:

- `fields` - a list of field names
- `damping` - a value &gt;= 0.5 and &lt; 1. Tunes how related screens should be
- `tools_token` - the token to tools.suffolklitlab.org, needed of doing
  micro-service vectorization
  
- `Returns` - a suggested screen grouping, each screen name mapped to the list of fields on it

## InputType Objects

```python
class InputType(Enum)
```

Input type maps onto the type of input the PDF author chose for the field. We only
handle text, checkbox, and signature fields.

#### field\_types\_and\_sizes

Transform the fields provided by get_existing_pdf_fields into a summary format.
Result will look like:
[
\{
&quot;var_name&quot;: var_name,
&quot;type&quot;: &quot;text | checkbox | signature&quot;,
&quot;max_length&quot;: n
\}
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
See Jarret and Gaffney, Forms That Work (2008)

#### classify\_field

Apply heuristics to the field&#x27;s original and &quot;normalized&quot; name to classify
it as either a &quot;slot-in&quot;, &quot;gathered&quot;, &quot;third party&quot; or &quot;created&quot; field type.

#### get\_adjusted\_character\_count

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

#### time\_to\_answer\_field

Apply a heuristic for the time it takes to answer the given field, in minutes.
It is hand-written for now.
It will factor in the input type, the answer type (slot in, gathered, third party or created), and the
amount of input text allowed in the field.
The return value is a function that can return N samples of how long it will take to answer the field (in minutes)

#### time\_to\_answer\_form

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

Apply cleanup routines to text to provide more accurate readability statistics.

#### text\_complete

Run a prompt via openAI&#x27;s API and return the result.

**Arguments**:

- `prompt` _str_ - The prompt to send to the API.
- `max_tokens` _int, optional_ - The number of tokens to generate. Defaults to 500.
- `creds` _Optional[OpenAiCreds], optional_ - The credentials to use. Defaults to None.
- `temperature` _float, optional_ - The temperature to use. Defaults to 0.

#### complete\_with\_command

Combines some text with a command to send to open ai.

#### needs\_calculations

A conservative guess at if a given form needs the filler to make math calculations,
something that should be avoided. If

#### get\_passive\_sentences

Return a list of tuples, where each tuple represents a
sentence in which passive voice was detected along with a list of the
starting and ending position of each fragment that is phrased in the passive voice.
The combination of the two can be used in the PDFStats frontend to highlight the
passive text in an individual sentence.

Text can either be a string or a list of strings.
If provided a single string, it will be tokenized with NTLK and
sentences containing fewer than 2 words will be ignored.

#### get\_citations

Get citations and some extra surrounding context (the full sentence), if the citation is
fewer than 5 characters (often eyecite only captures a section symbol
for state-level short citation formats)

#### substitute\_phrases

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

#### substitute\_neutral\_gender

Substitute gendered phrases with neutral phrases in the input string.
Primary source is https://github.com/joelparkerhenderson/inclusive-language

#### substitute\_plain\_language

Substitute complex phrases with simpler alternatives.
Source of terms is drawn from https://www.plainlanguage.gov/guidelines/words/

#### transformed\_sentences

Apply a function to a list of sentences and return only the sentences with changed terms.
The result is a tuple of the original sentence, new sentence, and the starting and ending position
of each changed fragment in the sentence.

#### parse\_form

Read in a pdf, pull out basic stats, attempt to normalize its form fields, and re-write the
in_file with the new fields (if `rewrite=1`). If you pass a spot token, we will guess the
NSMI code. If you pass openai creds, we will give suggestions for the title and description.

#### form\_complexity

Gets a single number of how hard the form is to complete. Higher is harder.

