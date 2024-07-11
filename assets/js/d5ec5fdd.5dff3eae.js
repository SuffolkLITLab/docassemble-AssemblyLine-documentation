"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5243],{2710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>_,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(4848),s=n(8453);const r={sidebar_label:"py_efsp_client",title:"EFSPIntegration.py_efsp_client"},o=void 0,l={id:"reference/EFSPIntegration/py_efsp_client",title:"EFSPIntegration.py_efsp_client",description:"The base python client used to communicate with the E-file proxy server.",source:"@site/docs/reference/EFSPIntegration/py_efsp_client.md",sourceDirName:"reference/EFSPIntegration",slug:"/reference/EFSPIntegration/py_efsp_client",permalink:"/docs/reference/EFSPIntegration/py_efsp_client",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/EFSPIntegration/py_efsp_client.md",tags:[],version:"current",frontMatter:{sidebar_label:"py_efsp_client",title:"EFSPIntegration.py_efsp_client"}},c={},a=[{value:"EfspConnection Objects",id:"efspconnection-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"authenticate_user",id:"authenticate_user",level:4},{value:"register_user",id:"register_user",level:4},{value:"get_password_rules",id:"get_password_rules",level:4},{value:"get_notification_options",id:"get_notification_options",level:4},{value:"get_firm",id:"get_firm",level:4},{value:"update_firm",id:"update_firm",level:4},{value:"get_courts",id:"get_courts",level:4},{value:"get_court",id:"get_court",level:4},{value:"get_court_list",id:"get_court_list",level:4},{value:"get_filing_list",id:"get_filing_list",level:4},{value:"get_service_types",id:"get_service_types",level:4},{value:"get_cases_raw",id:"get_cases_raw",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The base python client used to communicate with the E-file proxy server."}),"\n",(0,i.jsx)(t.p,{children:"Doesn't include anything from docassemble, and can be used without having it installed."}),"\n",(0,i.jsx)(t.h2,{id:"efspconnection-objects",children:"EfspConnection Objects"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class EfspConnection()\n"})}),"\n",(0,i.jsx)(t.p,{children:"A python client that communicates with the E-file proxy server."}),"\n",(0,i.jsx)(t.h4,{id:"__init__",children:"__init__"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"url (str)\napi_key (str)\ndefault_jurisdiction (str)"}),"\n",(0,i.jsx)(t.h4,{id:"authenticate_user",children:"authenticate_user"}),"\n",(0,i.jsx)(t.p,{children:"Authenticates the user with the EFM server (not the E-file proxy)."}),"\n",(0,i.jsx)(t.h4,{id:"register_user",children:"register_user"}),"\n",(0,i.jsx)(t.p,{children:"registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.\nIf registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.\nIf it's FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id"}),"\n",(0,i.jsx)(t.h4,{id:"get_password_rules",children:"get_password_rules"}),"\n",(0,i.jsx)(t.p,{children:"Password rules are stored in the global court, id 0."}),"\n",(0,i.jsx)(t.p,{children:"TODO: They're in other courts too, including 1. Could they ever be different?"}),"\n",(0,i.jsx)(t.h4,{id:"get_notification_options",children:"get_notification_options"}),"\n",(0,i.jsx)(t.p,{children:"AKA NotificationPreferencesList"}),"\n",(0,i.jsx)(t.h4,{id:"get_firm",children:"get_firm"}),"\n",(0,i.jsx)(t.p,{children:'Gets info about the "firm" for an associated user. If a user is a pro-se, this\ncontains their address information.'}),"\n",(0,i.jsx)(t.h4,{id:"update_firm",children:"update_firm"}),"\n",(0,i.jsx)(t.p,{children:"firm should have the below keys:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"firstName, middleName, lastName if it's a person"}),"\n",(0,i.jsx)(t.li,{children:"firmName if it's a business"}),"\n",(0,i.jsx)(t.li,{children:"address (a dict), with keys addressLine1 addressLine2, city, state, zipCode, country"}),"\n",(0,i.jsx)(t.li,{children:"phoneNumber"}),"\n",(0,i.jsx)(t.li,{children:"email"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"get_courts",children:"get_courts"}),"\n",(0,i.jsx)(t.p,{children:"Gets the list of courts."}),"\n",(0,i.jsx)(t.h4,{id:"get_court",children:"get_court"}),"\n",(0,i.jsx)(t.p,{children:"Gets codes for a specific court"}),"\n",(0,i.jsx)(t.h4,{id:"get_court_list",children:"get_court_list"}),"\n",(0,i.jsxs)(t.p,{children:["Gets a list of all of the courts that you can file into. Slightly more limited than\n",(0,i.jsx)(t.a,{href:"#get_courts",children:"get_courts"})]}),"\n",(0,i.jsx)(t.h4,{id:"get_filing_list",children:"get_filing_list"}),"\n",(0,i.jsx)(t.p,{children:"Returns a list of filings that a particular user has made with a court."}),"\n",(0,i.jsx)(t.h4,{id:"get_service_types",children:"get_service_types"}),"\n",(0,i.jsx)(t.p,{children:"Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types"}),"\n",(0,i.jsx)(t.h4,{id:"get_cases_raw",children:"get_cases_raw"}),"\n",(0,i.jsx)(t.p,{children:"Finds existing cases at a particular court. Only one of person_name, business_name, or docket_number should be\nprovided at a time.\nParams:\ncourt_id (str)\nperson_name (dict)\nbuisness_name (str)\ndocket_number (str)"})]})}function _(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);