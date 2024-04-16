"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8106],{4137:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>d});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},m=function(e){var o=c(e.components);return n.createElement(s.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},b=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,d=u["".concat(s,".").concat(b)]||u[b]||p[b]||l;return t?n.createElement(d,r(r({ref:o},m),{},{components:t})):n.createElement(d,r({ref:o},m))}));function d(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=b;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3954:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(4137));const l={id:"overview",title:"al_income: Python classes to gather financial information",sidebar_label:"al_income 02",slug:"/alincome/overview"},r=void 0,i={unversionedId:"alincome/overview",id:"alincome/overview",title:"al_income: Python classes to gather financial information",description:"Overview",source:"@site/docs/alincome/overview.md",sourceDirName:"alincome",slug:"/alincome/overview",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/overview",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alincome/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"al_income: Python classes to gather financial information",sidebar_label:"al_income 02",slug:"/alincome/overview"},sidebar:"docs",previous:{title:"al_income",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/al_income"},next:{title:"Expenses\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/expenses"}},s={},c=[{value:"Overview",id:"overview",level:2}],m={toc:c};function u(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Gathering detailed financial information about a person can be complicated. They could have\nmultiple jobs, each with a different pay period, and you might need to report their pay\nfrom all of those jobs monthly or annually. You might also need to ask about expenses,\ndebts, and then allow users to review and add or change that information."),(0,a.kt)("p",null,"The ALIncome module and associated YAML files were made to handle all of these complicated\ncases, so you can focus on the details specific to your clients."),(0,a.kt)("p",null,"If you want to jump right into the demo interview, you can visit out the live demo at ",(0,a.kt)("a",{parentName:"p",href:"https://apps-test.suffolklitlab.org/start/ALToolbox/al_income_demo"},"Suffolk's test server"),".\nYou can also install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox"},"ALToolbox package"),"\non your server, and run the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/data/questions/al_income_demo.yml"},"al_income_demo interview"),', by going to "',(0,a.kt)("a",{parentName:"p",href:"https://yourserverurl.com/start/ALToolbox/al_income_demo%22"},'https://yourserverurl.com/start/ALToolbox/al_income_demo"'),"."),(0,a.kt)("p",null,"Once you have a broad idea of what each class is about, you can choose from one of the more in-depth tutorials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/alincome/expenses"},"Expenses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"},"Jobs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/alincome/itemizedjobs"},"Itemized Jobs"))),(0,a.kt)("admonition",{title:"Work in progress",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The following classes don't yet have tutorials that you can follow, but you can follow\nhow they are used in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blobl/main/docassemble/ALToolbox/data/questions/al_income_demo.yml"},"al_income_demo interview"),", and by checking out their source code below.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L712"},"ALSimpleValue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L152"},"ALIncome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L558"},"ALAsset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py#L672"},"ALVehicle"))))}u.isMDXComponent=!0}}]);