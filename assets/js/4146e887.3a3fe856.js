"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8617],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return a?r.createElement(f,s(s({ref:t},m),{},{components:a})):r.createElement(f,s({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),o=(a(7294),a(4137));const n={id:"al_project_architecture",title:"The Document Assembly Line Architecture",sidebar_label:"Project Architecture",slug:"/al_project_architecture"},s=void 0,i={unversionedId:"al_project_architecture",id:"al_project_architecture",title:"The Document Assembly Line Architecture",description:"This page provides a bird's-eye view of how various repositories of the Document AssemblyLine Project work together. This information is intended for those who want to take full advantage of the Project for their interviews, and for those who potentially want to adopt our Project for their own state or country.",source:"@site/docs/al_project_architecture.md",sourceDirName:".",slug:"/al_project_architecture",permalink:"/docassemble-AssemblyLine-documentation/docs/al_project_architecture",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/al_project_architecture.md",tags:[],version:"current",frontMatter:{id:"al_project_architecture",title:"The Document Assembly Line Architecture",sidebar_label:"Project Architecture",slug:"/al_project_architecture"},sidebar:"get_started",previous:{title:"Intro",permalink:"/docassemble-AssemblyLine-documentation/docs/intro"},next:{title:"Installation",permalink:"/docassemble-AssemblyLine-documentation/docs/installation"}},l={},c=[{value:"Overall architecture",id:"overall-architecture",level:2},{value:"Components",id:"components",level:2},{value:"GitHub Repositories for Projects",id:"github-repositories-for-projects",level:2},{value:"Massachusetts",id:"massachusetts",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page provides a bird's-eye view of how various repositories of the ",(0,o.kt)("strong",{parentName:"p"},"Document AssemblyLine Project")," work together. This information is intended for those who want to take full advantage of the Project for their interviews, and for those who potentially want to adopt our Project for their own state or country.  "),(0,o.kt)("p",null,"Below is a snapshot of the Project's overall architecture as of ",(0,o.kt)("strong",{parentName:"p"},"June 2022"),". We will periodically update this page, as the Project is still under active development to add new functionality and enhance the performance."),(0,o.kt)("h2",{id:"overall-architecture"},"Overall architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AL Project architecture graph",src:a(4661).Z,width:"1466",height:"751"})),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Component"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"GitHub Repository"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/suffolkLITLab/docassemble-AssemblyLine"},"AssemblyLine")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Utility library that makes it easier to use certain Docassemble features in an interview."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine"},"SuffolkLITLab/docassemble-AssemblyLine"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docassemble-AssemblyLine-documentation/docs/generating_code"},"ALWeaver")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Helps create a draft interviews from PDF and DOCX forms."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-ALWeaver"},"suffolkLITLab/docassemble-ALWeaver"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox"},"ALToolbox")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Utility functions and components that are used in AssemblyLine but that can be easily used by Docassemble developers who use other platforms."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox"},"SuffolkLITLab/docassemble-ALToolbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docassemble-AssemblyLine-documentation/docs/alkiln/intro"},"ALKiln")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Automated testing framework that acts like a user, following your instructions to do things like fill in fields, upload files, sign in, and check your PDFs for accuracy."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/ALKiln"},"SuffolkLITLab/ALKiln"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ALDashboard"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A collection of tools to help administer a Docassemble server and debug interviews."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-ALDashboard"},"SuffolkLITLab/docassemble-ALDashboard"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docassemble-AssemblyLine-documentation/docs/framework/alrecipes"},"ALRecipes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Examples for Document Assembly Line interviews, plus generic Docassemble examples addressing specific needs."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-ALRecipes"},"SuffolkLITLab/docassemble-ALRecipes"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-InterviewStats/"},"InterviewStats")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A docassemble interview that lets you view statistics from other saved interview responses."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-InterviewStats/"},"SuffolkLITLab/InterviewStats/docassemble-InterviewStats"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This website."),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation"},"SuffolkLITLab/docassemble-AssemblyLine-documentation"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"E-Filing Proxy Server"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/EfileProxyServer"},"SuffolkLITLab/EfileProxyServer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"E-Filing Integration"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/"},"SuffolkLITLab/docassemble-EFSPIntegration"))))),(0,o.kt)("h2",{id:"github-repositories-for-projects"},"GitHub Repositories for Projects"),(0,o.kt)("h3",{id:"massachusetts"},"Massachusetts"),(0,o.kt)("p",null,"Due to the LIT Lab's extensive work with the Massachusetts Appeals Court, these repositories help model court, venue, and jurisdiction information in Docassemble for Massachusetts and as a possible starting point in other jurisdictions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suffolkLITLab/docassemble-ALMassachusetts"},"ALMassachusetts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suffolkLITLab/docassemble-MassAccess"},"MassAccess")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GBLS/docassemble-MACourts"},"MACourts"))))}p.isMDXComponent=!0},4661:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/al_project_architecture-b9da4ae596ce343b08b164a739045580.png"}}]);