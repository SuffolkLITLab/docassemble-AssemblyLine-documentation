---
id: reserved_keywords
title: |
    Reserved variable names you cannot use in Assembly Line interviews
sidebar_label: Reserved variable names that you cannot use
slug: /framework/reserved_keywords
---

## What is a "reserved" name?

A reserved variable name is a variable name that already has a
predefined meaning. Using a reserved variable name can lead to unexpected
results or a hard to understand error in your interview.

In the AssemblyLine framework, we have tried to choose variable names that you
are unlikely to use by accident. However, some very common English-language
terms are reserved because they are used in Python, Docassemble, or the
AssemblyLine framework. Use the list of terms below as a guide.

## Full list of reserved variable names

```
ALAddendumField
ALAddendumFieldDict
ALAddress
ALAddressList
ALDocument
ALDocumentBundle
ALDocumentUpload
ALExhibit
ALExhibitDocument
ALExhibitList
ALIndividual
ALPeopleList
ALStaticDocument
ALTableDocument
ALUntransformedDocument
Abuser
Address
AddressList
Applicant
Asset
ChildList
City
DA
DABreadCrumbs
DACloudStorage
DAContext
DADict
DAEmail
DAEmailRecipient
DAEmailRecipientList
DAEmpty
DAFile
DAFileCollection
DAFileList
DAGlobal
DAGoogleAPI
DALink
DAList
DAOAuth
DAObject
DAOrderedDict
DARedis
DASet
DAStaticFile
DAStore
DATemplate
DAValidationError
DAWeb
DAWebError
Event
Expense
False
FinancialList
HousingAuthority
Income
Individual
IndividualName
Landlord
LatitudeLongitude
MachineLearningEntry
Name
None
OfficeList
Organization
PeopleList
PeriodicFinancialList
PeriodicValue
Person
RandomForestMachineLearner
RelationshipTree
RoleChangeTracker
STOP_RENDERING
SVMMachineLearner
SimpleTextMachineLearner
Survivor
Tenant
Thing
True
VCIndividual
Value
__class__
__contains__
__delattr__
__delitem__
__dir__
__doc__
__eq__
__format__
__ge__
__getattribute__
__getitem__
__gt__
__hash__
__init__
__init_subclass__
__iter__
__le__
__len__
__lt__
__ne__
__new__
__reduce__
__reduce_ex__
__repr__
__reversed__
__setattr__
__setitem__
__sizeof__
__str__
__subclasshook__
_attachment_email_address
_attachment_include_editable
_back_one
_checkboxes
_datatypes
_email_attachments
_files
_internal
_question_name
_question_number
_save_as
_success
_the_image
_track_location
_tracker
_varnames
action_argument
action_arguments
action_button_html
action_menu_item
add_records
add_separators
all_variables
allow_cron
alpha
and
as
as_datetime
assemble_docx
assert
async
await
background_action
background_error_action
background_response
background_response_action
bold
break
caller
capitalize
chain
chat_partners_available
class
clear
clear_explanations
collapse_template
comma_and_list
comma_list
command
continue
copy
countries_list
country_name
create_session
create_user
cron_daily
cron_hourly
cron_monthly
cron_weekly
currency
currency_symbol
current_datetime
date_difference
date_interval
day_of
decode_name
def
define
defined
del
delete_interview_sessions
delete_record
device
device_local
dispatch
docx_concatenate
dow_of
elif
else
encode_name
except
explain
export_interview_variables
fa_icon
finally
fix_punctuation
for
force_ask
force_gather
forget_result_of
format_date
format_datetime
format_time
from
from_b64_json
fromkeys
get
get_chat_log
get_config
get_country
get_default_timezone
get_dialect
get_emails
get_filtered_session_variables
get_filtered_session_variables_string
get_info
get_interview_metadata
get_language
get_language_list
get_language_list_item
get_locale
get_progress
get_question_data
get_saved_interview_list
get_session_variables
get_sms_session
get_status
get_tuples
get_user_info
get_user_list
get_user_secret
github_modified_date
global
go_back_in_session
i
if
import
in
include_docx_template
incoming_email
indefinite_article
indent
initiate_sms_session
interface
interview_email
interview_list
interview_list_html
interview_menu
interview_url
interview_url_action
interview_url_action_as_qr
interview_url_as_qr
invalidate
is
is_file_like
is_phone_or_email
is_valid_json
iso_country
italic
item_label
items
j
json
json_response
k
key
keys
l
label
lambda
language_from_browser
language_name
last_access_days
last_access_delta
last_access_hours
last_access_minutes
last_access_time
load_interview_answers
load_interview_json
location_known
location_returned
log
logic_explanation
loop
m
manage_privileges
map_of
mark_task_as_performed
menu_items
message
month_of
multi_user
n
name_suffix
nav
need
nice_number
nonlocal
not
noun_plural
noun_singular
noyes
number_to_letter
objects_from_file
ocr_file
ocr_file_in_background
or
ordinal
ordinal_number
output_checkbox
overlay_pdf
pass
path_and_mimetype
pdf_concatenate
period_list
phone_number_formatted
phone_number_in_e164
phone_number_is_valid
phone_number_part
plain
pop
popitem
prevent_going_back
process_action
qr_code
quantity_noun
quote_paragraphs
raise
raw
re
re_run_logic
read_qr
read_records
reconsider
redact
referring_url
rename_interview_answers
response
retrieve_stashed_data
return
returning_user
role
role_event
role_needed
roman
row_index
row_item
run_action_in_session
run_python_module
safe_subdivision_type
safeattr
save_interview_answers
section_links
selections
self
send_email
send_fax
send_sms
server_capabilities
session_list_html
session_local
session_tags
set_country
set_info
set_interview_metadata
set_language
set_live_help_status
set_locale
set_parts
set_progress
set_save_status
set_session_variables
set_status
set_task_counter
set_title
set_user_info
set_variables
setdefault
shortenMe
showif
showifdef
single_paragraph
single_to_double_newlines
space
space_to_underscore
speak_text
split
start_time
stash_data
state_name
states_list
static_image
store_variables_snapshot
subdivision_type
sum_if_defined
tabbed_templates_html
task_not_yet_performed
task_performed
tel
terminate_sms_session
thousands
times_task_performed
timezone_list
title_case
today
track_location
try
undefine
unpack_dafilelist
update
update_terms
url_action
url_args
url_ask
url_of
us
user_dict
user_has_privilege
user_info
user_lat_lon
user_local
user_logged_in
user_privileges
validation_error
value
values
variables_as_json
verb_past
verb_present
verbatim
while
will_send_to_real_court
with
word
write_record
x
year_of
yes_no_unknown
yesno
yield
zip_file
```

## Further reference

- [List of Python keywords](https://docs.python.org/3.10/reference/lexical_analysis.html#keywords)
- [List of Python builtins](https://docs.python.org/3/library/functions.html)
- [List of Docassemble reserved names](https://docassemble.org/docs/special.html#reserved)