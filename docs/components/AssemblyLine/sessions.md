---
sidebar_label: sessions
title: AssemblyLine.sessions
---

#### is\_file\_like

Return True if the object is a file-like object.

**Arguments**:

- `obj` _Any_ - The object to test
  

**Returns**:

- `bool` - True if the object is a file-like object.

#### set\_interview\_metadata

Add searchable interview metadata for the specified filename and session ID.
Intended to be used to add an interview title, etc.
Standardized metadata dictionary:
- title
- subtitle
- original_interview_filename
- variable_count

**Arguments**:

- `filename` _str_ - The filename of the interview to add metadata for
- `session_id` _str_ - The session ID of the interview to add metadata for
- `data` _Dict_ - The metadata to add
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.

#### get\_interview\_metadata

Retrieve the unencrypted metadata associated with an interview.
We implement this with the docassemble jsonstorage table and a dedicated `tag` which defaults to `metadata`.

**Arguments**:

- `filename` _str_ - The filename of the interview to retrieve metadata for
- `session_id` _str_ - The session ID of the interview to retrieve metadata for
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.
  

**Returns**:

  Dict[str, Any]: The metadata associated with the interview

#### get\_saved\_interview\_list

Get a list of saved sessions for the specified filename. If the save_interview_answers function was used
to add metadata, the result list will include columns containing the metadata.
If the user is a developer or administrator, setting user_id = None will list all interviews on the server. Otherwise,
the user is limited to their own sessions.

Setting `exclude_newly_started_sessions` to True will exclude any results from the list that are still on
&quot;step 1&quot;. Note that while this may be useful to filter out interviews that were accidentally started
and likely do not need to be resumed, it will also have the side effect of excluding all answer sets from the
results. Answer sets generally have exactly one &quot;step&quot;, which is the step where information was copied from
an existing interview to the answer set.

**Arguments**:

- `filename` _str, optional_ - The filename of the interview to retrieve sessions for. Defaults to al_session_store_default_filename.
- `user_id` _Union[int, str, None], optional_ - The user ID to retrieve sessions for. Defaults to None.
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.
- `limit` _int, optional_ - The maximum number of results to return. Defaults to 50.
- `offset` _int, optional_ - The offset to start returning results from. Defaults to 0.
- `filename_to_exclude` _str, optional_ - The filename to exclude from the results. Defaults to &quot;&quot;.
- `exclude_current_filename` _bool, optional_ - Whether to exclude the current filename from the results. Defaults to True.
- `exclude_filenames` _Optional[List[str]], optional_ - List of filenames to exclude. Defaults to None. If the `filename` does not contain a `:` it will be treated as a prefix, allowing you to filter out whole packages (e.g., any path starting with docassemble.ALDashboard or docassemble.playground)
- `exclude_newly_started_sessions` _bool, optional_ - Whether to exclude sessions that are still on &quot;step 1&quot;. Defaults to False.
  

**Returns**:

  List[Dict[str, Any]]: A list of saved sessions for the specified filename.

#### find\_matching\_sessions

Get a list of sessions where the metadata for the session matches the provided keyword search terms and metadata filters.
This function is designed to be used in a search interface where the user can search for sessions by keyword and specific metadata values.
The keyword search is case-insensitive and will match any part of the metadata column values.

**Arguments**:

- `keyword` _str_ - The keyword to search for in the metadata
- `metadata_column_names` _List[str], optional_ - The names of the metadata columns to search. If not provided, defaults to [&quot;title&quot;, &quot;auto_title&quot;, &quot;description&quot;].
- `filenames` _List[str], optional_ - The filename or filenames of the interviews to retrieve sessions for.
- `user_id` _Union[int, str, None], optional_ - The user ID to retrieve sessions for. Defaults to current user. Specify &quot;all&quot; if you want and have the necessary privileges to search all sessions.
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.
- `limit` _int, optional_ - The maximum number of results to return. Defaults to 50.
- `offset` _int, optional_ - The offset to start returning results from. Defaults to 0.
- `filename_to_exclude` _str, optional_ - The filename to exclude from the results. Defaults to &quot;&quot;.
- `exclude_current_filename` _bool, optional_ - Whether to exclude the current filename from the results. Defaults to True.
- `exclude_filenames` _Optional[List[str]], optional_ - A list of filenames to exclude from the results. Defaults to None.
- `exclude_newly_started_sessions` _bool, optional_ - Whether to exclude sessions that are still on &quot;step 1&quot;. Defaults to False.
- `global_search_allowed_roles` _Union[Set[str],List[str]], optional_ - A list or set of roles that are allowed to search all sessions. Defaults to \{&#x27;admin&#x27;,&#x27;developer&#x27;, &#x27;advocate&#x27;\}. &#x27;admin&#x27; and &#x27;developer&#x27; are always allowed to search all sessions.
- `metadata_filters` _Optional[Dict[str, Tuple[Any, str, Optional[str]]]], optional_ - A dictionary of metadata column names and their corresponding filter tuples.
  Each tuple should contain (value, operator, cast_type).
  - value: The value to compare against
  - operator: One of &#x27;=&#x27;, &#x27;!=&#x27;, &#x27;&lt;&#x27;, &#x27;&lt;=&#x27;, &#x27;&gt;&#x27;, &#x27;&gt;=&#x27;, &#x27;LIKE&#x27;, &#x27;ILIKE&#x27;
  - cast_type: Optional. One of &#x27;int&#x27;, &#x27;float&#x27;, or None for string (default)
  

**Returns**:

  List[Dict[str, Any]]: A list of saved sessions for the specified filename that match the search keyword and metadata filters
  

**Example**:

  matching_sessions = find_matching_sessions(
  &quot;smith&quot;,
  user_id=&quot;all&quot;,
  filenames=[f&quot;\{current_context().package\}:intake.yml&quot;, &quot;docassemble.MyPackage:intake.yml&quot;],
  metadata_filters=\{
- `"owner"` - (&quot;samantha&quot;, &quot;ILIKE&quot;, None),
- `"age"` - (30, &quot;&gt;=&quot;, &quot;int&quot;),
- `"status"` - (&quot;%complete%&quot;, &quot;LIKE&quot;, None)
  \}
  )
  

**Example**:

- `\{"owner"` - (&quot;samantha&quot;, &quot;ILIKE&quot;, None), &quot;age&quot;: (30, &quot;&gt;=&quot;, &quot;int&quot;), &quot;status&quot;: (&quot;%complete%&quot;, &quot;LIKE&quot;, None)\}

#### delete\_interview\_sessions

Delete all sessions for the specified user, excluding the current filename
and by default, the intentionally saved &quot;answer sets&quot;. Created because
interview_list(action=&quot;delete_all&quot;) is both quite slow and because it deletes answer sets.

**Arguments**:

- `user_id` _Optional[int], optional_ - The user ID to delete sessions for. Defaults to None.
- `filename_to_exclude` _str, optional_ - The filename to exclude from the results. Defaults to al_session_store_default_filename.
- `exclude_current_filename` _bool, optional_ - Whether to exclude the current filename from the results. Defaults to True.

#### interview\_list\_html

Return a string containing an HTML-formatted table with the list of saved answers
associated with the specified filename.

Designed to return a list of &quot;answer sets&quot; and by default clicking a title will
trigger an action to load the answers into the current session. This only works as
designed when inside an AssemblyLine line interview.

`exclude_newly_started_sessions` should almost always be set to False, because most answer sets
are on &quot;page 1&quot; (exactly 1 step was taken to copy the answers and the user isn&#x27;t able to interact with the answer set
itself in a way that adds additional steps)

**Arguments**:

- `filename` _str, optional_ - Name of the file. Defaults to `al_session_store_default_filename`.
- `user_id` _Union[int, str, None], optional_ - User&#x27;s ID. Defaults to None.
- `metadata_key_name` _str, optional_ - Name of the metadata key. Defaults to &quot;metadata&quot;.
- `exclude_newly_started_sessions` _bool, optional_ - If True, newly started sessions are excluded. Defaults to False.
- `date_label` _str, optional_ - Label for the date column. Defaults to translated word &quot;Date&quot;.
- `details_label` _str, optional_ - Label for the details column. Defaults to translated word &quot;Details&quot;.
- `actions_label` _str, optional_ - Label for the actions column. Defaults to translated word &quot;Actions&quot;.
- `delete_label` _str, optional_ - Label for the delete action. Defaults to translated word &quot;Delete&quot;.
- `view_label` _str, optional_ - Label for the view action. Defaults to translated word &quot;View&quot;.
- `load_action` _str, optional_ - Name of the load action. Defaults to &quot;al_sessions_fast_forward_session&quot;.
- `delete_action` _str, optional_ - Name of the delete action. Defaults to &quot;al_sessions_delete_session&quot;.
- `view_only` _bool, optional_ - If True, only view is allowed. Defaults to False.
- `limit` _int, optional_ - Limit for the number of sessions returned. Defaults to 50.
- `offset` _int, optional_ - Offset for the session list. Defaults to 0.
- `display_interview_title` _bool, optional_ - If True, displays the title of the interview. Defaults to True.
- `show_view_button` _bool, optional_ - If True, shows the view button. Defaults to True.
- `answers` _Optional[List[Dict[str, Any]]], optional_ - A list of answers to format and display. Defaults to showing all sessions for the current user.
  

**Returns**:

- `str` - HTML-formatted table containing the list of saved answers.

#### nice\_interview\_title

Return a human readable version of the interview name. Will try several strategies
in descending priority order.
1. Try looking up the interview title from the `dispatch` directive
1. Try removing the package and path from the filename and replace _ with spaces.
4. Finally, return &quot;Untitled interview&quot; or translated phrase from system-wide words.yml

**Arguments**:

- `answer` _Dict[str, str]_ - The answer dictionary to get the interview title from
  

**Returns**:

- `str` - The human readable interview title

#### pascal\_to\_zwspace

Insert a zero-width space into words that are PascalCased to help
with word breaks on small viewports.

**Arguments**:

- `text` _str_ - The text to insert zero-width spaces into
  

**Returns**:

- `str` - The text with zero-width spaces inserted

#### nice\_interview\_subtitle

Return first defined of the &quot;title&quot; metadata, the &quot;auto_title&quot; metadata, or empty string.

If exclude_identical, return empty string when title is the same as the subtitle.

**Arguments**:

- `answer` _Dict[str, str]_ - The answer dictionary to get the interview subtitle from
- `exclude_identical` _bool, optional_ - If True, excludes the subtitle if it is identical to the title. Defaults to True.
  

**Returns**:

- `str` - The human readable interview subtitle

#### radial\_progress

Return HTML for a radial progress bar, or the number of steps if progress isn&#x27;t available in the metadata.

**Arguments**:

- `answer` _Dict[str, Union[str, int]]_ - The answer dictionary to get the interview progress from
  

**Returns**:

- `str` - the HTML as a string

#### local\_date

Return a localized date from a UTC string.

**Arguments**:

- `utcstring` _Optional[str]_ - The UTC string to convert to a localized date
  

**Returns**:

- `DADateTime` - The localized date

#### session\_list\_html

Return a string containing an HTML-formatted table with the list of user sessions.
While interview_list_html() is for answer sets, this feature is for standard
user sessions. The results exclude the answer set filename by default.

**Arguments**:

- `filename` _Optional[str], optional_ - Name of the file. Defaults to None.
- `user_id` _Union[int, str, None], optional_ - User&#x27;s ID. Defaults to None.
- `metadata_key_name` _str, optional_ - Name of the metadata key. Defaults to &quot;metadata&quot;.
- `filename_to_exclude` _str, optional_ - Name of the file to exclude. Defaults to `al_session_store_default_filename`.
- `exclude_current_filename` _bool, optional_ - If True, excludes the current filename. Defaults to True.
- `exclude_filenames` _Optional[List[str]], optional_ - List of filenames to exclude. Defaults to None. If the `filename` does not contain a `:` it will be treated as a prefix, allowing you to filter out whole packages (e.g., any path starting with docassemble.ALDashboard or docassemble.playground)
- `exclude_newly_started_sessions` _bool, optional_ - If True, excludes newly started sessions. Defaults to False.
- `name_label` _str, optional_ - Label for the session name/title. Defaults to translated word &quot;Title&quot;.
- `date_label` _str, optional_ - Label for the date column. Defaults to translated word &quot;Date modified&quot;.
- `details_label` _str, optional_ - Label describing the progress of the session. Defaults to translated word &quot;Progress&quot;.
- `actions_label` _str, optional_ - Label for actions applicable to the session. Defaults to translated word &quot;Actions&quot;.
- `delete_label` _str, optional_ - Label for the delete action. Defaults to translated word &quot;Delete&quot;.
- `rename_label` _str, optional_ - Label for the rename action. Defaults to translated word &quot;Rename&quot;.
- `rename_action` _str, optional_ - Name of the rename action. Defaults to &quot;interview_list_rename_action&quot;.
- `delete_action` _str, optional_ - Name of the delete action. Defaults to &quot;interview_list_delete_session&quot;.
- `copy_action` _str, optional_ - Name of the copy action. Defaults to &quot;interview_list_copy_action&quot;.
- `clone_label` _str, optional_ - Label for the action to copy as an answer set. Defaults to translated word &quot;Copy as answer set&quot;.
- `show_title` _bool, optional_ - If True, shows the title of the session. Defaults to True.
- `show_copy_button` _bool, optional_ - If True, show a copy button for answer sets. Defaults to True.
- `limit` _int, optional_ - Limit for the number of sessions returned. Defaults to 50.
- `offset` _int, optional_ - Offset for the session list. Defaults to 0.
- `answers` _Optional[List[Dict[str, Any]], optional_ - A list of answers to format and display. Defaults to showing all sessions for the current user.
  
  

**Returns**:

- `str` - HTML-formatted table containing the list of user sessions.

#### rename\_interview\_answers

Update the &#x27;title&#x27; metadata of an interview, as stored in the dedicated `metadata` column, without touching other
metadata that may be present.

**Arguments**:

- `filename` _str_ - The filename of the interview to rename
- `session_id` _str_ - The session ID of the interview to rename
- `new_name` _str_ - The new name to set for the interview
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.
  
  If exception is raised in set_session_variables, this will silently fail but log the error.

#### set\_current\_session\_metadata

Set metadata for the current session, such as the title, in an unencrypted database entry.

**Arguments**:

- `data` _Dict[str, Any]_ - The metadata to set
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.

#### rename\_current\_session

Update the &quot;title&quot; metadata entry for the current session without changing any other
metadata that might be present.

**Arguments**:

- `new_name` _str_ - The new name to set for the interview
- `metadata_key_name` _str, optional_ - The name of the metadata key. Defaults to &quot;metadata&quot;.

#### save\_interview\_answers

Copies the answers from a given session into a new session with a specified interview filename.

**Arguments**:

- `filename` _str, optional_ - The desired filename for the new session. Defaults to `al_session_store_default_filename`.
- `variables_to_filter` _Union[Set[str], List[str], None], optional_ - The &quot;base&quot; list or set of variables to filter out. Defaults to `al_sessions_variables_to_remove`. There&#x27;s usually no reason to change this and changing it might break sessions.
- `metadata` _Optional[Dict], optional_ - Dictionary containing metadata. Defaults to an empty dictionary.
- `metadata_key_name` _str, optional_ - Key name for metadata storage. Defaults to &quot;metadata&quot;.
- `original_interview_filename` _str, optional_ - Original filename of the interview. Defaults to None.
- `source_filename` _str, optional_ - Source filename to get session variables from. Defaults to None.
- `source_session` _str, optional_ - Session ID of the source file. Defaults to None.
- `additional_variables_to_filter` _Union[Set[str], List[str], None], optional_ - List or set of variables to filter out. Defaults to None.
  

**Returns**:

- `str` - ID of the new session.

#### get\_filtered\_session\_variables

Retrieves a filtered subset of variables from a specified interview and session.
If no filename and session ID are given, it will return a filtered list of variables
from the current interview.

**Arguments**:

- `filename` _Optional[str], optional_ - Filename of the session. Defaults to None.
- `session_id` _Optional[int], optional_ - Session ID to retrieve variables from. Defaults to None.
- `variables_to_filter` _Union[Set[str], List[str], None], optional_ - List or set of variables to exclude. Defaults to `al_sessions_variables_to_remove`.
- `additional_variables_to_filter` _Union[Set[str], List[str], None], optional_ - List or set of additional variables to exclude. Defaults to None.
  

**Returns**:

  Dict[str, Any]: A dictionary of filtered session variables.

#### get\_filtered\_session\_variables\_string

Returns a JSON string that represents the filtered contents of a specified filename and session ID.
If no filename and session ID are provided, the current session&#x27;s variables will be used.

**Arguments**:

- `filename` _Optional[str], optional_ - Filename of the session. Defaults to None.
- `session_id` _Optional[int], optional_ - Session ID to retrieve variables from. Defaults to None.
- `variables_to_filter` _Union[Set[str], List[str], None], optional_ - List or set of variables to exclude. Defaults to `al_sessions_variables_to_remove`.
- `additional_variables_to_filter` _Union[Set[str], List[str], None], optional_ - List or set of additional variables to exclude. Defaults to None.
- `indent` _int, optional_ - Number of spaces to indent the JSON string. Defaults to 4.
  

**Returns**:

- `str` - A JSON-formatted string of filtered session variables.

#### load\_interview\_answers

Loads answers from a specified session. If the parameter `new_session` is set to True, it will create
a new session with the provided or current interview filename. Otherwise, it will load the answers into
the active session. This function is primarily used for migrating answers between sessions.

**Arguments**:

- `old_interview_filename` _str_ - Filename of the old interview.
- `old_session_id` _str_ - Session ID of the old interview.
- `new_session` _bool, optional_ - Determines whether to create a new session. Defaults to False.
- `new_interview_filename` _Optional[str], optional_ - Filename for the new session. Defaults to None.
- `variables_to_filter` _Optional[List[str]], optional_ - List of variables to exclude. Defaults to None.
- `additional_variables_to_filter` _Optional[List[str]], optional_ - List of additional variables to exclude. Defaults to None.
  

**Returns**:

  Optional[Union[int, bool]]: ID of the newly created session if `new_session` is True, otherwise True or False based on success.

#### load\_interview\_json

Given a JSON string, this function loads the specified variables into a Docassemble session.
JSON strings containing annotated class names will be transformed into Docassemble objects.
If the `new_session` argument is not set, the JSON answers will be loaded into the current interview.

**Arguments**:

- `json_string` _str_ - A JSON-formatted string containing session variables.
- `new_session` _bool, optional_ - Specifies whether to create a new session or load into the current one. Defaults to False.
- `new_interview_filename` _Optional[str], optional_ - Filename for the new session. Defaults to None.
- `variables_to_filter` _Optional[List[str]], optional_ - List of variables to exclude. Defaults to None.
  

**Returns**:

  Optional[Union[int, bool]]: ID of the newly created session if `new_session` is True, otherwise True or False based on success.

#### export\_interview\_variables

Generates a DAFile containing a JSON representation of a specified session&#x27;s interview answers.
The resultant output is compatible with `set_session_variables(process_objects=True)` and
`set_variables(process_objects=True)` methods.

**Arguments**:

- `filename` _Optional[str], optional_ - Filename of the session. Defaults to None.
- `session_id` _Optional[int], optional_ - Session ID to retrieve variables from. Defaults to None.
- `variables_to_filter` _Union[Set, List[str], None], optional_ - List or set of variables to exclude. Defaults to None.
- `output` _DAFile, optional_ - DAFile to write the JSON output to. If None, a new DAFile is created.
- `additional_variables_to_filter` _Union[Set, List[str], None], optional_ - List or set of additional variables to exclude. Defaults to None.
  

**Returns**:

- `DAFile` - DAFile with a JSON representation of the answers

#### is\_valid\_json

Checks if the provided string is a valid JSON-formatted string.

**Arguments**:

- `json_string` _str_ - The string to be checked for JSON validity.
  

**Returns**:

- `bool` - True if the string is a valid JSON, otherwise it raises a validation error and returns False.

#### config\_with\_language\_fallback

Returns the value of a config key under `assembly line` `interview list` with options to fallback
to an alternative key at the top level of the global configuration.

Used in interview_list.yml to allow overriding some of the labels in the interview list
with options specified in the global configuration. top_level_config should be reserved
to handle backwards compatibility (e.g., changed location of some configuration keys)

Example configuration, showing both the single-string and language-specific string options:
assembly line:
interview list:
title:
en: In progress forms
es: Formularios en progreso
short title: My forms

**Arguments**:

- `config_key` _str_ - The config key to look up. The config can be a single string or a dictionary with language keys.
- `top_level_config_key` _str, optional_ - Optional, alternative top-level config key to look up. Defaults to None.
  

**Returns**:

- `str` - The value of the config key, or the alternative key, or None.

#### get\_filenames\_having\_sessions

Get a list of all filenames that have sessions saved for a given user, in order
to help show the user a good list of interviews to filter search results.

**Arguments**:

- `user_id` _Optional[Union[int, str]], optional_ - User ID to get the list of filenames for. Defaults to current logged-in user. Use &quot;all&quot; to get all filenames.
- `global_search_allowed_roles` _Optional[Union[Set[str], List[str]]], optional_ - Roles that are allowed to search for all sessions. Defaults to admin, developer, and advocate.
  

**Returns**:

- `List[str]` - List of filenames that have sessions saved for the user.

#### get\_combined\_filename\_list

Get a list of all filenames that have sessions saved for a given user. If it is possible
to show a descriptive name for the filename (from the main dispatch area of the configuration),
it will show that instead of the filename.

The results will be in the form of [\{filename: Descriptive name\}], which is what the Docassemble
radio button and dropdown list expect.

**Arguments**:

- `user_id` _Optional[Union[int, str]], optional_ - User ID to get the list of filenames for. Defaults to current logged in user. Use &quot;all&quot; to get all filenames.
- `global_search_allowed_roles` _Optional[Union[Set[str], List[str]]], optional_ - Roles that are allowed to search for all sessions. Defaults to admin, developer, and advocate.
  

**Returns**:

  List[Dict[str, str]]: List of filenames that have sessions saved for the user.

#### update\_session\_metadata

Upsert session metadata into jsonstorage using a PostgreSQL advisory lock
(two-int form) to serialize concurrent upserts on the same (session_id,filename,tags) key.

**Arguments**:

- `filename` - The filename of the interview session to update.
- `session_id` - The ID of the session to update.
- `data` - A dict of metadata to add or update.
- `metadata_key_name` - The tag for the metadata in jsonstorage. Defaults to &quot;metadata&quot;.

#### update\_current\_session\_metadata

Updates metadata for the current session without retrieving the data first.

This is a wrapper for update_session_metadata() that uses the
current interview&#x27;s filename and session ID from current_context().

**Arguments**:

- `data` _Dict[str, Any]_ - A dictionary of metadata to add or update.
- `metadata_key_name` _str, optional_ - The tag for the metadata in the
  jsonstorage table. Defaults to &quot;metadata&quot;.

