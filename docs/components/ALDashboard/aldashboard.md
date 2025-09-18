# Table of Contents

* [ALDashboard.aldashboard](#ALDashboard.aldashboard)
  * [speedy\_get\_users](#ALDashboard.aldashboard.speedy_get_users)
  * [speedy\_get\_sessions](#ALDashboard.aldashboard.speedy_get_sessions)
  * [dashboard\_get\_session\_variables](#ALDashboard.aldashboard.dashboard_get_session_variables)
  * [ALPackageInstaller](#ALDashboard.aldashboard.ALPackageInstaller)
    * [get\_validated\_github\_username](#ALDashboard.aldashboard.ALPackageInstaller.get_validated_github_username)
  * [ErrorList](#ALDashboard.aldashboard.ErrorList)
  * [ErrorLikeObject](#ALDashboard.aldashboard.ErrorLikeObject)
  * [install\_fonts](#ALDashboard.aldashboard.install_fonts)
  * [list\_installed\_fonts](#ALDashboard.aldashboard.list_installed_fonts)
  * [nicer\_interview\_filename](#ALDashboard.aldashboard.nicer_interview_filename)
  * [list\_question\_files\_in\_package](#ALDashboard.aldashboard.list_question_files_in_package)
  * [list\_question\_files\_in\_docassemble\_packages](#ALDashboard.aldashboard.list_question_files_in_docassemble_packages)

---
sidebar_label: aldashboard
title: ALDashboard.aldashboard
---

<a id="ALDashboard.aldashboard.speedy_get_users"></a>

#### speedy\_get\_users()

```python
def speedy_get_users() -> List[Dict[int, str]]
```

Return a list of all users in the database. Possibly faster than get_user_list().

<a id="ALDashboard.aldashboard.speedy_get_sessions"></a>

#### speedy\_get\_sessions(user\_id: Optional[int] = None, filename: Optional[str] = None, filter\_step1: bool = True, metadata\_key\_name: str = "metadata")

```python
def speedy_get_sessions(user_id: Optional[int] = None,
                        filename: Optional[str] = None,
                        filter_step1: bool = True,
                        metadata_key_name: str = "metadata") -> List[Tuple]
```

Return a list of the most recent 500 sessions, optionally tied to a specific user ID.

Each session is a tuple with named columns:
filename,
user_id,
modtime,
key

<a id="ALDashboard.aldashboard.dashboard_get_session_variables"></a>

#### dashboard\_get\_session\_variables(session\_id: str, filename: str)

```python
def dashboard_get_session_variables(session_id: str, filename: str)
```

Return the variables and steps for a given session ID and YAML filename in serializable dictionary format.

<a id="ALDashboard.aldashboard.ALPackageInstaller"></a>

## ALPackageInstaller Objects

```python
class ALPackageInstaller(DAObject)
```

Methods and state for installing AssemblyLine.

<a id="ALDashboard.aldashboard.ALPackageInstaller.get_validated_github_username"></a>

#### get\_validated\_github\_username(access\_token: str)

```python
def get_validated_github_username(access_token: str)
```

Given a valid GitHub `access_token`, returns the username associated with it.
Otherwise, adds one or more errors to the installer.

<a id="ALDashboard.aldashboard.ErrorList"></a>

## ErrorList Objects

```python
class ErrorList(DAList)
```

Contains `ErrorLikeObject`s so they can be recognized by docassemble.

<a id="ALDashboard.aldashboard.ErrorLikeObject"></a>

## ErrorLikeObject Objects

```python
class ErrorLikeObject(DAObject)
```

An object with a `template_name` that identifies the DALazyTemplate that will
show its error. It can contain any other attributes so its template can access them
as needed. DAObject doesn&#x27;t seem to be enough to allow template definition.

<a id="ALDashboard.aldashboard.install_fonts"></a>

#### install\_fonts(the\_font\_files: DAFileList)

```python
def install_fonts(the_font_files: DAFileList)
```

Install fonts to the server and restart both supervisor and unoconv.

<a id="ALDashboard.aldashboard.list_installed_fonts"></a>

#### list\_installed\_fonts()

```python
def list_installed_fonts()
```

List the fonts installed on the server.

<a id="ALDashboard.aldashboard.nicer_interview_filename"></a>

#### nicer\_interview\_filename(filename: str)

```python
def nicer_interview_filename(filename: str) -> str
```

Given a filename like docassemble.playground10ALWeaver:data/questions/assembly_line.yml,
return a less cluttered name like: playground10ALWeaver:assembly_line

<a id="ALDashboard.aldashboard.list_question_files_in_package"></a>

#### list\_question\_files\_in\_package(package\_name: str)

```python
def list_question_files_in_package(package_name: str) -> Optional[List[str]]
```

List all the files in the &#x27;data/questions&#x27; directory of a package.

**Arguments**:

- `package_name` _str_ - The name of the package to list files from.
  

**Returns**:

- `List[str]` - A list of filenames in the &#x27;data/questions&#x27; directory of the package.

<a id="ALDashboard.aldashboard.list_question_files_in_docassemble_packages"></a>

#### list\_question\_files\_in\_docassemble\_packages()

```python
def list_question_files_in_docassemble_packages()
```

List all the files in the &#x27;data/questions&#x27; directory of all docassemble packages.

**Returns**:

  Dict[str, List[str]]: A dictionary where the keys are package names and the values are lists of filenames in the &#x27;data/questions&#x27; directory of the package.

