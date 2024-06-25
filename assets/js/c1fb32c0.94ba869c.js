"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7513],{4374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(4848),s=n(8453);const r={sidebar_label:"conversions",title:"EFSPIntegration.conversions"},l=void 0,o={id:"reference/EFSPIntegration/conversions",title:"EFSPIntegration.conversions",description:"Functions that help convert the JSON-ized XML from the proxy server into usable information.",source:"@site/docs/reference/EFSPIntegration/conversions.md",sourceDirName:"reference/EFSPIntegration",slug:"/reference/EFSPIntegration/conversions",permalink:"/docs/reference/EFSPIntegration/conversions",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/EFSPIntegration/conversions.md",tags:[],version:"current",frontMatter:{sidebar_label:"conversions",title:"EFSPIntegration.conversions"}},a={},c=[{value:"error_notification",id:"error_notification",level:4},{value:"log_error_and_notify",id:"log_error_and_notify",level:4},{value:"convert_court_to_id",id:"convert_court_to_id",level:4},{value:"choices_and_map",id:"choices_and_map",level:4},{value:"pretty_display",id:"pretty_display",level:4},{value:"debug_display",id:"debug_display",level:4},{value:"tyler_daterep_to_datetime",id:"tyler_daterep_to_datetime",level:4},{value:"tyler_timestamp_to_datetime",id:"tyler_timestamp_to_datetime",level:4},{value:"validate_tyler_regex",id:"validate_tyler_regex",level:4},{value:"parse_service_contacts",id:"parse_service_contacts",level:4},{value:"parse_case_info",id:"parse_case_info",level:4},{value:"fetch_case_info",id:"fetch_case_info",level:4},{value:"filter_payment_accounts",id:"filter_payment_accounts",level:4},{value:"payment_account_labels",id:"payment_account_labels",level:4},{value:"filing_id_and_label",id:"filing_id_and_label",level:4},{value:"get_tyler_roles",id:"get_tyler_roles",level:4}];function d(e){const t={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Functions that help convert the JSON-ized XML from the proxy server into usable information."}),"\n",(0,i.jsx)(t.h4,{id:"error_notification",children:"error_notification"}),"\n",(0,i.jsx)(t.p,{children:"Copied from docassemble.webapp.server.error_notification, since:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"things from webapp.* are unstable"}),"\n",(0,i.jsx)(t.li,{children:"it breaks the unit tests and the mypy"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Some slight modifications to work without server backends"}),"\n",(0,i.jsx)(t.h4,{id:"log_error_and_notify",children:"log_error_and_notify"}),"\n",(0,i.jsxs)(t.p,{children:["Similar to docassemble.webapp.server.error_notification, which will send an email to\nthe ",(0,i.jsx)(t.code,{children:"error_notification_email"})," in the config."]}),"\n",(0,i.jsx)(t.h4,{id:"convert_court_to_id",children:"convert_court_to_id"}),"\n",(0,i.jsx)(t.p,{children:"Converts a court type to the specific id string expected by Tyler."}),"\n",(0,i.jsx)(t.p,{children:'A fairly ad-hoc function; it will check if the object has several attributes\n("tyler_court_code", "tyler_code", or "name"), or if it\'s already a string, it\ntries to just make a lower case on the string. We strongly recommend that\nyour court object use the "tyler_court_code" attribute though.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"trial_court"})," - the court object"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["the string that should be the Tyler EFM court id, i.e. ",(0,i.jsx)(t.code,{children:"adams"})," or ",(0,i.jsx)(t.code,{children:"peoria:cr"})]}),"\n",(0,i.jsx)(t.h4,{id:"choices_and_map",children:"choices_and_map"}),"\n",(0,i.jsx)(t.p,{children:"Takes the responses from the 'codes' service and make a DA ready list of choices and a map back\nto the full code object"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"codes_list"})," - should be the direct response from a 'codes' service, i.e. ",(0,i.jsx)(t.code,{children:"proxy_conn.get_case_categories(court_id).data"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"display"}),' - a python format string, where the input variables are the keys of the individual code elements. By\ndefault, it\'s "{name}", but could be something else like "{name} ({code})"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"backing"}),' - the key to each dict element in the codes_list that you want to use as the "canonical" representation\nof the code, i.e. each is unique, and there aren\'t conflicts']}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["a tuple; first, a list of the codes that can be used at the ",(0,i.jsx)(t.code,{children:"choices"})," in a docassemble field,\nsecond, a map of each code, from the backing key to the full code element. Useful for getting\nall of the information about a code after a user has selected it."]}),"\n",(0,i.jsx)(t.h4,{id:"pretty_display",children:"pretty_display"}),"\n",(0,i.jsxs)(t.p,{children:["Given an arbitrarily nested JSON structure, print it nicely as markdown.\nRecursive, for subsequent calls ",(0,i.jsx)(t.code,{children:"tab_depth"})," increases."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"data"})," - the JSON structure (python dicts, lists, strings and ints) to print"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tab_depth"})," - how many spaces to add before each new line, to make the markdown correct"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"skip_xml"})," - this function is mostly for printing responses from the EfileProxyServer, which\nlazily returns XML as JSON. If this is true, we won't show the useless XML cruft"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"item_name"})," - when recursing, will show the parent's name when showing elements in a list"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"The string of markdown text that displays info about the given JSON structure"}),"\n",(0,i.jsx)(t.h4,{id:"debug_display",children:"debug_display"}),"\n",(0,i.jsxs)(t.p,{children:["Returns a string with either the error of the response,\nor it's data run through ",(0,i.jsx)(t.a,{href:"#pretty_display",children:"pretty_display"})]}),"\n",(0,i.jsx)(t.h4,{id:"tyler_daterep_to_datetime",children:"tyler_daterep_to_datetime"}),"\n",(0,i.jsxs)(t.p,{children:['Takes an jsonized-XML object of "{',(0,i.jsx)(t.a,{href:"http://niem.gov/niem/niem-core/2.0%5C%7DActivityDate",children:"http://niem.gov/niem/niem-core/2.0\\}ActivityDate"}),",\nreturns the datetime it repsents."]}),"\n",(0,i.jsx)(t.h4,{id:"tyler_timestamp_to_datetime",children:"tyler_timestamp_to_datetime"}),"\n",(0,i.jsx)(t.p,{children:"Given a timestamp in milliseconds from epoch (in UTC), make a datetime from it"}),"\n",(0,i.jsx)(t.h4,{id:"validate_tyler_regex",children:"validate_tyler_regex"}),"\n",(0,i.jsxs)(t.p,{children:["Return a function that validates a given input with the provided regex,\nsuitable for use with Docassemble's ",(0,i.jsx)(t.code,{children:"validate:"})," question modifier"]}),"\n",(0,i.jsx)(t.h4,{id:"parse_service_contacts",children:"parse_service_contacts"}),"\n",(0,i.jsx)(t.p,{children:'We\'ll take both Tyler service contact lists and Niem service contact lists.\nTyler\'s are just `{"firstName": "Bob", "middleName": "P", ..., "serviceContactId": "abcrunh-13..."\nNiem\'s are more complicated'}),"\n",(0,i.jsx)(t.h4,{id:"parse_case_info",children:"parse_case_info"}),"\n",(0,i.jsx)(t.p,{children:"Given sparse information about a case, gets the full details about it"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"proxy_conn"})," - the connection to the EFileProxyServer"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"new_case"})," - the object to hold all of the information about the case"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"entry"})," - the information we have about the case, usually from a call to ",(0,i.jsx)(t.code,{children:"get_cases"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"court_id"})," - the id of the court that we searched in to get this info"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"fetch"})," - if true, will fetch more detailed information about the case,\ninclude the case title"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"roles"})," - a dictionary of the party type codes to the party type name.\nUsed so we can filter and sort participants later"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"fetch_case_info",children:"fetch_case_info"}),"\n",(0,i.jsx)(t.p,{children:"Fills in these attributes with the full case details:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"attorneys"}),"\n",(0,i.jsx)(t.li,{children:"party_to_attorneys"}),"\n",(0,i.jsx)(t.li,{children:"case_details_worked"}),"\n",(0,i.jsx)(t.li,{children:"case_details"}),"\n",(0,i.jsx)(t.li,{children:"case_type"}),"\n",(0,i.jsx)(t.li,{children:"title"}),"\n",(0,i.jsx)(t.li,{children:"date"}),"\n",(0,i.jsx)(t.li,{children:"participants"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"filter_payment_accounts",children:"filter_payment_accounts"}),"\n",(0,i.jsx)(t.p,{children:"Gets a list of all payment accounts and filters them by if the card is\naccepted at a particular court."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"account_list:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"allowable_card_types"})," - a list of the accepted card types at a court, usually\nfrom the 'allowablecardtypes' dict entry in\n",(0,i.jsx)(t.a,{href:"interview_logic#get_full_court_info",children:"get_full_court_info"}),"'s response"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"the list of payment account choices that are valid for a particular court"}),"\n",(0,i.jsx)(t.h4,{id:"payment_account_labels",children:"payment_account_labels"}),"\n",(0,i.jsx)(t.p,{children:"Returns all payment accounts as choices, without filters."}),"\n",(0,i.jsx)(t.h4,{id:"filing_id_and_label",children:"filing_id_and_label"}),"\n",(0,i.jsxs)(t.p,{children:["Converts a raw case information from ",(0,i.jsx)(t.a,{href:"py_efsp_client#get_filing_list",children:"proxy_conn.get_filing_list()"}),"\ninto a key-value pair, where the key is the filing id and the value is the user-facing label\nfor that filing."]}),"\n",(0,i.jsx)(t.h4,{id:"get_tyler_roles",children:"get_tyler_roles"}),"\n",(0,i.jsx)(t.p,{children:"Gets whether or not the user of this interview is a Tyler Admin, and a 'global' admin.\nThe global admin means that they are allowed to change specific Global payment methods,\nand can be listed under the 'global server admins' section of the 'efile proxy' settings in the\nDAConfig"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);