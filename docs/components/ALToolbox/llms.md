---
sidebar_label: llms
title: ALToolbox.llms
---

#### chat\_completion

A light wrapper on the OpenAI chat endpoint.

Includes support for token limits, minimal error handling, and moderation.

**Arguments**:

- `system_message` _str_ - The role the chat engine should play
- `user_message` _str_ - The message (data) from the user
- `openai_client` _Optional[OpenAI]_ - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable
- `openai_api` _Optional[str]_ - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created.
- `temperature` _float_ - The temperature to use for the GPT API
- `json_mode` _bool_ - Whether to use JSON mode for the GPT API. Requires the word `json` in the system message, but will add if you omit it.
- `model` _str_ - The model to use for the GPT API
- `messages` _Optional[List[Dict[str, str]]]_ - A list of messages to send to the chat engine. If provided, system_message and user_message will be ignored.
- `skip_moderation` _bool_ - Whether to skip the OpenAI moderation step, which may save seconds but risks banning your account. Only enable when you have full control over the inputs.
- `openai_base_url` _Optional[str]_ - The base URL for the OpenAI API. Defaults to value provided in the configuration or &quot;https://api.openai.com/v1/&quot;.
- `max_output_tokens` _Optional[int]_ - The maximum number of tokens to return from the API. Defaults to 16380.
- `max_input_tokens` _Optional[int]_ - The maximum number of tokens to send to the API. Defaults to 128000.
  

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

Reads a user&#x27;s message and determines whether it meets a set of goals, with the help of an LLM.

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

#### provide\_feedback

Returns feedback to the user based on the goals they satisfied.

## IntakeQuestion Objects

```python
class IntakeQuestion(DAObject)
```

A class to represent a question in an LLM-assisted intake questionnaire.

**Attributes**:

- `question` _str_ - The question to ask the user
- `response` _str_ - The user&#x27;s response to the question

## IntakeQuestionList Objects

```python
class IntakeQuestionList(DAList)
```

Class to help create an LLM-assisted intake questionnaire.

The LLM will be provided a free-form set of in/out criteria (like that
provided to a phone intake worker), an initial draft question from the user,
and then guide the user through a series of follow-up questions to gather only
enough information to determine if the user meets the criteria.

In/out criteria are often pretty short, so we do not make or support
embeddings at the moment.

**Attributes**:

- `criteria` _Dict[str, str]_ - A dictionary of criteria to match, indexed by problem type
- `problem_type_descriptions` _Dict[str, str]_ - A dictionary of descriptions of the problem types
- `problem_type` _str_ - The type of problem to match. E.g., a unit/department inside the law firm
- `initial_problem_description` _str_ - The initial description of the problem from the user
- `initial_question` _str_ - The original question posed in the interview
- `question_limit` _int_ - The maximum number of follow-up questions to ask the user. Defaults to 10.
- `model` _str_ - The model to use for the GPT API. Defaults to gpt-4.1.
- `max_output_tokens` _int_ - The maximum number of tokens to return from the API. Defaults to 4096
- `llm_role` _str_ - The role the LLM should play. Allows you to customize the script the LLM uses to guide the user.
  We have provided a default script that should work for most intake questionnaires.
- `llm_user_qualifies_prompt` _str_ - The prompt to use to determine if the user qualifies. We have provided a default prompt.
- `out_of_questions` _bool_ - Whether the user has run out of questions to answer
- `qualifies` _bool_ - Whether the user qualifies based on the criteria

#### need\_more\_questions

Returns True if the user needs to answer more questions, False otherwise.

Also has the side effect of checking the user&#x27;s most recent response to see if it satisfies the criteria
and updating both the next question to be asked and the current qualification status.

