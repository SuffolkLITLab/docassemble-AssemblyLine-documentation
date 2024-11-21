---
sidebar_label: llms
title: ALToolbox.llms
---

#### chat\_completion

A light wrapper on the OpenAI chat endpoint.

Includes support for token limits, error handling, and moderation queue.

It is also possible to specify an alternative model, and we support GPT-4-turbo&#x27;s JSON
mode.

As of today (1/2/2024) JSON mode requires the model to be set to &quot;gpt-4-1106-preview&quot; or &quot;gpt-3.5-turbo-1106&quot;

**Arguments**:

- `system_message` _str_ - The role the chat engine should play
- `user_message` _str_ - The message (data) from the user
- `openai_client` _Optional[OpenAI]_ - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable
- `openai_api` _Optional[str]_ - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created.
- `temperature` _float_ - The temperature to use for the GPT-4-turbo API
- `json_mode` _bool_ - Whether to use JSON mode for the GPT-4-turbo API
  

**Returns**:

  A string with the response from the API endpoint or JSON data if json_mode is True

#### extract\_fields\_from\_text

Extracts fields from text.

**Arguments**:

- `text` _str_ - The text to extract fields from
- `field_list` _Dict[str,str]_ - A list of fields to extract, with the key being the field name and the value being a description of the field
  

**Returns**:

  A dictionary of fields extracted from the text

#### match\_goals\_from\_text

Read&#x27;s a user&#x27;s message and determines whether it meets a set of goals, with the help of an LLM.

**Arguments**:

- `text` _str_ - The text to extract goals from
- `field_list` _Dict[str,str]_ - A list of goals to extract, with the key being the goal name and the value being a description of the goal
  

**Returns**:

  A dictionary of fields extracted from the text

#### classify\_text

Given a text, classify it into one of the provided choices with the assistance of a large language model.

**Arguments**:

- `text` _str_ - The text to classify
- `choices` _Dict[str,str]_ - A list of choices to classify the text into, with the key being the choice name and the value being a description of the choice
- `openai_client` _Optional[OpenAI]_ - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable
- `openai_api` _Optional[str]_ - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created.
- `temperature` _float_ - The temperature to use for GPT. Defaults to 0.
- `model` _str_ - The model to use for the GPT API

#### synthesize\_user\_responses

Given a first draft and a series of follow-up questions and answers, use an LLM to synthesize the user&#x27;s responses
into a single, coherent reply.

**Arguments**:

- `custom_instructions` _str_ - Custom instructions for the LLM to follow in constructing the synthesized response
- `initial_draft` _str_ - The initial draft of the response from the user
- `messages` _List[Dict[str, str]]_ - A list of questions from the LLM and responses from the user
- `openai_client` _Optional[OpenAI]_ - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable
- `openai_api` _Optional[str]_ - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created.
- `temperature` _float_ - The temperature to use for GPT. Defaults to 0.
- `model` _str_ - The model to use for the GPT API

#### define\_fields\_from\_dict

Assigns the values in a dictionary of fields to the corresponding fields in a Docassemble interview.

Docassemble and built-in keywords are never defined by this function. If fields_to_ignore is provided, those fields will also be ignored.

**Arguments**:

- `field_dict` _Dict[str, Any]_ - A dictionary of fields to define, with the key being the field name and the value
  presumably taken from the output of extract_fields_from_text.
- `fields_to_ignore` _Optional[List]_ - A list of fields to ignore. Defaults to None. Should be used to ensure
  safety when defining fields from untrusted sources. E.g., [&quot;user_is_logged_in&quot;]
  

**Returns**:

  None

## Goal Objects

```python
class Goal(DAObject)
```

A class to represent a goal.

**Attributes**:

- `name` _str_ - The name of the goal
- `description` _str_ - A description of the goal
- `satisfied` _bool_ - Whether the goal is satisfied

#### response\_satisfies\_me\_or\_follow\_up

Returns the text of the next question to ask the user or the string &quot;satisfied&quot;
if the user&#x27;s response satisfies the goal.

**Arguments**:

- `response` _str_ - The response to check
  

**Returns**:

  True if the response satisfies the goal, False otherwise

#### get\_next\_question

Returns the text of the next question to ask the user.

## GoalDict Objects

```python
class GoalDict(DADict)
```

A class to represent a DADict of Goals.

#### satisfied

Returns True if all goals are satisfied, False otherwise.

## GoalQuestion Objects

```python
class GoalQuestion(DAObject)
```

A class to represent a question about a goal.

**Attributes**:

- `goal` _Goal_ - The goal the question is about
- `question` _str_ - The question to ask the user
- `response` _str_ - The user&#x27;s response to the question

## GoalSatisfactionList Objects

```python
class GoalSatisfactionList(DAList)
```

A class to help ask the user questions until all goals are satisfied.

Uses an LLM to prompt the user with follow-up questions if the initial response isn&#x27;t complete.
By default, the number of follow-up questions is limited to 10.

This can consume a lot of tokens, as each follow-up has a chance to send the whole conversation
thread to the LLM.

By default, this will use the OpenAI API key defined in the global configuration under this path:


You can specify the path to an alternative configuration by setting the `openai_configuration_path` attribute.

This object does NOT accept the key as a direct parameter, as that will be leaked in the user&#x27;s answers.

```
open ai:
    key: sk-...
```

**Attributes**:

- `goals` _List[Goal]_ - The goals in the list, provided as a dictionary
- `goal_list` _GoalList_ - The list of Goals
- `question_limit` _int_ - The maximum number of follow-up questions to ask the user
- `question_per_goal_limit` _int_ - The maximum number of follow-up questions to ask the user per goal
- `initial_draft` _str_ - The initial draft of the user&#x27;s response
- `initial_question` _str_ - The original question posed in the interview

#### mark\_satisfied\_goals

Marks goals as satisfied if the user&#x27;s response satisfies the goal.
This should be used as soon as the user gives their initial reply.

**Returns**:

  None

#### keep\_going

Returns True if there is at least one unsatisfied goal and if the number of follow-up questions asked is less than the question limit, False otherwise.

#### need\_more\_questions

Returns True if there is at least one unsatisfied goal, False otherwise.

Also has the side effect of checking the user&#x27;s most recent response to see if it satisfies the goal
and updating the next question to be asked.

#### satisfied

Returns True if all goals are satisfied, False otherwise.

#### get\_next\_goal\_and\_question

Returns the next unsatisfied goal, along with a follow-up question to ask the user, if relevant.

**Returns**:

  A tuple of (Goal, str) where the first item is the next unsatisfied goal and the second item is the next question to ask the user, if relevant.
  If the user&#x27;s response to the last question satisfied the goal, returns (None, None).

#### synthesize\_draft\_response

Returns a draft response that synthesizes the user&#x27;s responses to the questions.

