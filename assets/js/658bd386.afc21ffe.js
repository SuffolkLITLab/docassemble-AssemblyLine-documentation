"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[6095],{9952:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=i(4848),t=i(8453);const s={id:"monitoring",title:"Monitoring your e-filing operations\n",sidebar_label:"Monitoring",slug:"/efiling/monitoring"},r=void 0,l={id:"efiling/monitoring",title:"Monitoring your e-filing operations\n",description:"Monitoring",source:"@site/docs/efiling/efiling_monitoring.md",sourceDirName:"efiling",slug:"/efiling/monitoring",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/efiling/efiling_monitoring.md",tags:[],version:"current",frontMatter:{id:"monitoring",title:"Monitoring your e-filing operations\n",sidebar_label:"Monitoring",slug:"/efiling/monitoring"},sidebar:"docs",previous:{title:"Case Search",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/case_search"},next:{title:"WIP Intro",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/intro"}},a={},c=[{value:"Monitoring",id:"monitoring",level:2},{value:"Accessing E-filing Proxy Logs",id:"accessing-e-filing-proxy-logs",level:3},{value:"Keeping track of Court Codes",id:"keeping-track-of-court-codes",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,o.jsx)(n.p,{children:"Once you have developed and deployed your e-filing application, you will\nhave to monitor it to ensure it is functioning properly. This page has some\ntips and tools that you can use to help you monitor your application."}),"\n",(0,o.jsx)(n.h3,{id:"accessing-e-filing-proxy-logs",children:"Accessing E-filing Proxy Logs"}),"\n",(0,o.jsxs)(n.p,{children:["While you can add logs to your docassemble interview, you also might need\nto access logs from the e-filing proxy to have a better idea of what is\nhappening during the e-filing process. If you are a server administrator, you can access these e-filing logs by using the E-filing logs interview, which you can access at ",(0,o.jsx)(n.code,{children:"https://yourservername.com/start/EFSPIntegration/logs_interview"}),". This\nwill use the e-filing proxy credentials stored on your docassemble server to download all the logs from traffic from your server."]}),"\n",(0,o.jsx)(n.p,{children:"This interview also includes a filter for filing review comments, which is useful during a pilot launch and in making sure that your application isn't generating filings incorrectly."}),"\n",(0,o.jsx)(n.h3,{id:"keeping-track-of-court-codes",children:"Keeping track of Court Codes"}),"\n",(0,o.jsxs)(n.p,{children:["When making your interview, the court codes used might change. You should\ncontinually run ",(0,o.jsx)(n.a,{href:"/docassemble-AssemblyLine-documentation/docs/alkiln",children:"automated testing"})," against your\ninterview to ensure that the codes still exist as your program expects them to."]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var o=i(6540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);