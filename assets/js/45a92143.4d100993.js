"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[2895],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),_=i,f=u["".concat(l,".").concat(_)]||u[_]||d[_]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const o={sidebar_label:"efm_client",title:"EFSPIntegration.efm_client"},a=void 0,s={unversionedId:"reference/EFSPIntegration/efm_client",id:"reference/EFSPIntegration/efm_client",title:"EFSPIntegration.efm_client",description:"ProxyConnection Objects",source:"@site/docs/reference/EFSPIntegration/efm_client.md",sourceDirName:"reference/EFSPIntegration",slug:"/reference/EFSPIntegration/efm_client",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/EFSPIntegration/efm_client",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/EFSPIntegration/efm_client.md",tags:[],version:"current",frontMatter:{sidebar_label:"efm_client",title:"EFSPIntegration.efm_client"},sidebar:"someSidebar",previous:{title:"conversions",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/EFSPIntegration/conversions"},next:{title:"interview_logic",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/EFSPIntegration/interview_logic"}},l={},c=[{value:"ProxyConnection Objects",id:"proxyconnection-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"authenticate_user",id:"authenticate_user",level:4},{value:"register_user",id:"register_user",level:4},{value:"get_service_types",id:"get_service_types",level:4},{value:"serialize_person",id:"serialize_person",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"proxyconnection-objects"},"ProxyConnection Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class ProxyConnection(EfspConnection)\n")),(0,i.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(*,\n             url: str = None,\n             api_key: str = None,\n             credentials_code_block: str = "tyler_login",\n             default_jurisdiction: str = None)\n')),(0,i.kt)("p",null,"Params:\nurl (str)\napi_key (str)\ncredentials_code_block (str)\ndefault_jurisdiction (str)"),(0,i.kt)("h4",{id:"authenticate_user"},"authenticate","_","user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def authenticate_user(tyler_email: str = None,\n                      tyler_password: str = None,\n                      jeffnet_key: str = None,\n                      *,\n                      jurisdiction: str = None) -> ApiResponse\n")),(0,i.kt)("p",null,"Params:\ntyler_email (str)\ntyler_password (str)\njeffnet_key (str)"),(0,i.kt)("h4",{id:"register_user"},"register","_","user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def register_user(person: Union[Individual, dict],\n                  registration_type: str,\n                  *,\n                  password: str = None,\n                  firm_name_or_id: str = None) -> ApiResponse\n")),(0,i.kt)("p",null,"registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.\nIf registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.\nIf it","'","s FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id"),(0,i.kt)("h4",{id:"get_service_types"},"get","_","service","_","types"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_service_types(\n        court_id: str,\n        court_bundle: Union[ALDocumentBundle, dict] = None) -> ApiResponse\n")),(0,i.kt)("p",null,"Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types"),(0,i.kt)("h4",{id:"serialize_person"},"serialize","_","person"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def serialize_person(person: Union[Person, Individual]) -> Dict\n")),(0,i.kt)("p",null,"Converts a Docassemble Person or Individual into a dictionary suitable for\njson.dumps and in format expected by Tyler-specific endpoints on the EFSPProxy"))}u.isMDXComponent=!0}}]);