---
sidebar_label: sessions
title: sessions
---

#### set\_interview\_metadata

```python
def set_interview_metadata(filename: str,
                           session_id: int,
                           data: Dict,
                           metadata_key_name="metadata") -> None
```

Add searchable interview metadata for the specified filename and session ID.
Intended to be used to add an interview title, etc.
Standardized metadata dictionary:
- title
- subtitle
- original_interview_filename
- variable_count

#### get\_interview\_metadata

```python
def get_interview_metadata(filename: str,
                           session_id: int,
                           metadata_key_name: str = "metadata") -> Dict
```

Retrieve the unencrypted metadata associated with an interview.
We implement this with the docassemble jsonstorage table and a dedicated `tag` which defaults to `metadata`.

#### get\_saved\_interview\_list

```python
def get_saved_interview_list(
        filename: Optional[str] = al_session_store_default_filename,
        user_id: Union[int, str, None] = None,
        metadata_key_name: str = "metadata",
        limit: int = 50,
        offset: int = 0,
        filename_to_exclude: str = "",
        exclude_current_filename: bool = True,
        exclude_filenames: Optional[List[str]] = None,
        exclude_newly_started_sessions: bool = False) -> List[Dict]
```

Get a list of saved sessions for the specified filename. If the save_interview_answers function was used
to add metadata, the result list will include columns containing the metadata.
If the user is a developer or administrator, setting user_id = None will list all interviews on the server. Otherwise,
the user is limited to their own sessions.

Setting `exclude_newly_started_sessions` to True will exclude any results from the list that are still on
&quot;step 1&quot;. Note that while this may be useful to filter out interviews that were accidentally started
and likely do not need to be resumed, it will also have the side effect of excluding all answer sets from the
results. Answer sets generally have exactly one &quot;step&quot;, which is the step where information was copied from
an existing interview to the answer set.

#### delete\_interview\_sessions

```python
def delete_interview_sessions(
        user_id: Optional[int] = None,
        filename_to_exclude: str = al_session_store_default_filename,
        exclude_current_filename: bool = True) -> None
```

Delete all sessions for the specified user, excluding the current filename
and by default, the intentionally saved &quot;answer sets&quot;. Created because
interview_list(action=&quot;delete_all&quot;) is both quite slow and because it deletes answer sets.

#### interview\_list\_html

```python
def interview_list_html(filename: str = al_session_store_default_filename,
                        user_id: Union[int, str, None] = None,
                        metadata_key_name: str = "metadata",
                        exclude_newly_started_sessions=False,
                        date_label: str = word("Date"),
                        details_label: str = word("Details"),
                        actions_label: str = word("Actions"),
                        delete_label: str = word("Delete"),
                        view_label: str = word("View"),
                        load_action: str = "al_sessions_fast_forward_session",
                        delete_action: str = "al_sessions_delete_session",
                        view_only: bool = False,
                        limit: int = 50,
                        offset: int = 0) -> str
```

Return a string containing an HTML-formatted table with the list of saved answers
associated with the specified filename.

Designed to return a list of &quot;answer sets&quot; and by default clicking a title will
trigger an action to load the answers into the current session. This only works as
designed when inside an AssemblyLine line interview.

`exclude_newly_started_sessions` should almost always be set to False, because most answer sets
are on &quot;page 1&quot; (exactly 1 step was taken to copy the answers and the user isn&#x27;t able to interact with the answer set
itself in a way that adds additional steps)

#### nice\_interview\_title

```python
def nice_interview_title(answer: Dict[str, str]) -> str
```

Return a human readable version of the interview name. Will try several strategies
in descending priority order.
1. Try looking up the interview title from the `dispatch` directive
1. Try removing the package and path from the filename and replace _ with spaces.
4. Finally, return &quot;Untitled interview&quot; or translated phrase from system-wide words.yml

#### pascal\_to\_zwspace

```python
def pascal_to_zwspace(text: str) -> str
```

Insert a zero-width space into words that are PascalCased to help
with word breaks on small viewports.

#### nice\_interview\_subtitle

```python
def nice_interview_subtitle(answer: Dict[str, str], exclude_identical=True)
```

Return first defined of the &quot;title&quot; metadata, the &quot;auto_title&quot; metadata, or empty string.

If exclude_identical, return empty string when title is the same as the subtitle.

#### radial\_progress

```python
def radial_progress(answer: Dict[str, Union[str, int]])
```

Return HTML for a radial progress bar, or the number of steps if progress isn&#x27;t available in the metadata.

#### session\_list\_html

```python
def session_list_html(
        filename: Optional[str] = None,
        user_id: Union[int, str, None] = None,
        metadata_key_name: str = "metadata",
        filename_to_exclude: str = al_session_store_default_filename,
        exclude_current_filename: bool = True,
        exclude_filenames: Optional[List[str]] = None,
        exclude_newly_started_sessions: bool = False,
        name_label: str = word("Title"),
        date_label: str = word("Date modified"),
        details_label: str = word("Progress"),
        actions_label: str = word("Actions"),
        delete_label: str = word("Delete"),
        rename_label: str = word("Rename"),
        rename_action: str = "interview_list_rename_action",
        delete_action: str = "interview_list_delete_session",
        copy_action: str = "interview_list_copy_action",
        clone_label: str = word("Copy as answer set"),
        show_title: bool = True,
        limit: int = 50,
        offset: int = 0) -> str
```

Return a string containing an HTML-formatted table with the list of user sessions.
While interview_list_html() is for answer sets, this feature is for standard
user sessions. The results exclude the answer set filename by default.

#### rename\_interview\_answers

```python
def rename_interview_answers(filename: str,
                             session_id: int,
                             new_name: str,
                             metadata_key_name: str = "metadata") -> None
```

Update the &#x27;title&#x27; metadata of an interview, as stored in the dedicated `metadata` column, without touching other
metadata that may be present.

#### set\_current\_session\_metadata

```python
def set_current_session_metadata(data: Dict[str, Any],
                                 metadata_key_name: str = "metadata") -> None
```

Set metadata for the current session, such as the title, in an unencrypted database entry.
This may be helpful for faster SQL queries and reports, such as listing interview answers.

#### rename\_current\_session

```python
def rename_current_session(new_name: str,
                           metadata_key_name: str = "metadata") -> None
```

Update the &quot;title&quot; metadata entry for the current session without changing any other
metadata that might be present.

#### save\_interview\_answers

```python
def save_interview_answers(filename: str = al_session_store_default_filename,
                           variables_to_filter: Union[Set[str], List[str],
                                                      None] = None,
                           metadata: Optional[Dict] = None,
                           metadata_key_name: str = "metadata",
                           original_interview_filename=None,
                           source_filename=None,
                           source_session=None) -> str
```

Copy the answers from the specified session into a new session with the given
interview filename. Typically used to create an answer set.

#### get\_filtered\_session\_variables

```python
def get_filtered_session_variables(
    filename: Optional[str] = None,
    session_id: Optional[int] = None,
    variables_to_filter: Union[Set[str], List[str], None] = None
) -> Dict[str, Any]
```

Get a filtered subset of the variables from the specified interview filename and session.

If no filename and session ID are specified, return filtered list of variables from the current interview.

#### get\_filtered\_session\_variables\_string

```python
def get_filtered_session_variables_string(
        filename: Optional[str] = None,
        session_id: Optional[int] = None,
        variables_to_filter: Union[Set[str], List[str], None] = None) -> str
```

Get a JSON string representing the filtered contents of the specified filename and session_id. If no filename and session_id
are provided, the output will contain the variables from the current session.

#### load\_interview\_answers

```python
def load_interview_answers(
        old_interview_filename: str,
        old_session_id: int,
        new_session: bool = False,
        new_interview_filename: Optional[str] = None,
        variables_to_filter: Optional[List[str]] = None) -> Optional[int]
```

Load answers from the specified session. If the parameter new_session = True, create a new session of
the specified or current interview filename. Otherwise, load the answers into the active session.
Returns the ID of the newly created session
Create a new session with the variables from the specified session ID. Returns the ID of the newly
created and &quot;filled&quot; session.

#### load\_interview\_json

```python
def load_interview_json(
        json_string: str,
        new_session: bool = False,
        new_interview_filename: Optional[str] = None,
        variables_to_filter: Optional[List[str]] = None) -> Optional[int]
```

Provided a JSON string, load the specified variables into a Docassemble session. JSON with annotated class names
will be processed into Docassemble objects.

If new_session is not provided, the JSON answers will be loaded into the current interview.

#### export\_interview\_variables

```python
def export_interview_variables(filename: Optional[str] = None,
                               session_id: Optional[int] = None,
                               variables_to_filter: Union[Set, List[str],
                                                          None] = None,
                               output: DAFile = None) -> DAFile
```

Get a DAFile with the JSON representation of the specified session&#x27;s interview answers. The output is compatible with
set_session_variables(process_objects=True) and set_variables(process_objects=True)

