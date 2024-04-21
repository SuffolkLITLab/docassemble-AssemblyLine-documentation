"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[973],{9394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var o=n(4848),i=n(8453);const s={id:"efiling_codes",title:"E-filing: Tyler codes\n",sidebar_label:"E-filing codes",slug:"/efiling/tyler-codes"},a=void 0,c={id:"efiling/efiling_codes",title:"E-filing: Tyler codes\n",description:"Codes are how Tyler Technologies handles the complexity of case categories,",source:"@site/docs/efiling/efiling_codes.md",sourceDirName:"efiling",slug:"/efiling/tyler-codes",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/tyler-codes",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/efiling/efiling_codes.md",tags:[],version:"current",frontMatter:{id:"efiling_codes",title:"E-filing: Tyler codes\n",sidebar_label:"E-filing codes",slug:"/efiling/tyler-codes"}},l={},r=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'Codes are how Tyler Technologies handles the complexity of case categories,\ncase types, filing types, and party types. Each code is a number along with\na human readable name, like "210" and "Family" for the family case category.'}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["This e-filing functionality is being updated often, so this documentation might be out of date.\nIf anything is incorrect or doesn't work as expected, feel free to email us at\n",(0,o.jsx)(t.a,{href:"mailto:massaccess@suffolk.edu",children:"massaccess@suffolk.edu"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"If you are expecting to file into different courts, a potential complication is that some courts have different codes for the same cases.\nFor example, Peoria county's Adoption code is 7405, and the Adoption case type is 5892.\nThe good news is that most case categories and case types have the same name. You can hardcode the expected name of the case category or case type with\nthe following code block:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"# court_id can be any IL court, like \"adams\" or \"peoria\".\ncategories = proxy_conn.get_case_categories(court_id, fileable_only=True, timing='Initial')\nfor category in categories:\n  if category['name'] == 'Adoption':\n    tyler_category = category['code']\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For things like party types, you'll want to ask the AL questions about roles first, i.e. ",(0,o.jsx)(t.code,{children:"user_ask_role"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"You can't anticipate all of the different situations that could happen when going through the interview. For some cases, you may have to fall back and let the litigant select the codes themselves."})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);