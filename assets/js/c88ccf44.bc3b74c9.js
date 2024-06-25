"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8582],{9669:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(4848),t=s(8453);const o={id:"defense",title:'"Safe" coding\n',sidebar_label:'"Safe" coding\n',slug:"/coding_style_guide/defense"},r=void 0,a={id:"coding_style/defense",title:'"Safe" coding\n',description:"Use Docassemble lists, dictionaries, and sets, or subclasses",source:"@site/docs/coding_style/defense.md",sourceDirName:"coding_style",slug:"/coding_style_guide/defense",permalink:"/docs/coding_style_guide/defense",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/defense.md",tags:[],version:"current",frontMatter:{id:"defense",title:'"Safe" coding\n',sidebar_label:'"Safe" coding\n',slug:"/coding_style_guide/defense"},sidebar:"docs",previous:{title:"Planning for translation",permalink:"/docs/coding_style_guide/yaml_translation"},next:{title:"Interview accessibility",permalink:"/docs/coding_style_guide/accessibility"}},l={},c=[{value:"Use Docassemble lists, dictionaries, and sets, or subclasses",id:"use-docassemble-lists-dictionaries-and-sets-or-subclasses",level:2},{value:"Look before you leap",id:"look-before-you-leap",level:2},{value:"Use <code>skip undefined</code> on attachment blocks",id:"use-skip-undefined-on-attachment-blocks",level:2},{value:"Use Python 3.8&#39;s <code>f</code> strings when composing strings",id:"use-python-38s-f-strings-when-composing-strings",level:2},{value:"Convert types or use more abstract interfaces",id:"convert-types-or-use-more-abstract-interfaces",level:2},{value:"Check for None",id:"check-for-none",level:2},{value:"Handle API error states",id:"handle-api-error-states",level:2},{value:"Further reading and sources",id:"further-reading-and-sources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"use-docassemble-lists-dictionaries-and-sets-or-subclasses",children:"Use Docassemble lists, dictionaries, and sets, or subclasses"}),"\n",(0,i.jsxs)(n.p,{children:["Docassemble relies heavily on exceptions for its declarative logic\nsystem. Those work better with the DAObject class and classes that\ninherit from it. Docassemble's DAObject class adds an ",(0,i.jsx)(n.code,{children:"intrinsicName"}),"\nattribute to every object that helps Docassemble track down a question\nthat is able to define a variable."]}),"\n",(0,i.jsx)(n.p,{children:"Where you make uses of lists, dictionaries, or sets, you should\ndefault to using either a DAList, DADict, or DASet, or a class that\ninherits from one of those classes."}),"\n",(0,i.jsx)(n.h2,{id:"look-before-you-leap",children:"Look before you leap"}),"\n",(0,i.jsx)(n.p,{children:"Check for existence if an attribute or object may not be defined:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["use ",(0,i.jsx)(n.code,{children:"hasattr"})," to check if an optional attribute is defined"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["use ",(0,i.jsx)(n.code,{children:"defined()"})," (sparingly) to check if an object or variable has been\ndefined (note there are significant performance implications with ",(0,i.jsx)(n.code,{children:"defined()"}),"\nso it should be used carefully)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["use ",(0,i.jsx)(n.code,{children:".get()"})," with all dictionary lookups. Include a default value of the\ncorrect type, especially for nested lookups in API results.\ne.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"my_dict.get('key1',{}).get('key2','')\n# NOT\n# my_dict['key1']['key2']\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["check list length before using a list index, or if you are using a DAList,\nuse the ",(0,i.jsx)(n.code,{children:".item()"})," method."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"next(iter(some_list), default_value)"})," pattern when trying to gather\nthe first item in a list that may be empty."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"use-skip-undefined-on-attachment-blocks",children:["Use ",(0,i.jsx)(n.code,{children:"skip undefined"})," on attachment blocks"]}),"\n",(0,i.jsxs)(n.p,{children:["When assembling documents, use the ",(0,i.jsx)(n.code,{children:"skip undefined"})," modifier in production.\n",(0,i.jsx)(n.code,{children:"skip undefined"})," should be used carefully as a safety measure, but not\nto replace spelled-out logic in your interview. It leaves undefined fields\nblank rather than triggering an exception."]}),"\n",(0,i.jsxs)(n.p,{children:["When you use ",(0,i.jsx)(n.code,{children:"skip undefined"})," it is important that you trigger all required\nvariables in your interview order block."]}),"\n",(0,i.jsxs)(n.h2,{id:"use-python-38s-f-strings-when-composing-strings",children:["Use Python 3.8's ",(0,i.jsx)(n.code,{children:"f"})," strings when composing strings"]}),"\n",(0,i.jsxs)(n.p,{children:["A common runtime bug is attempting to concatenate a string with a non-string\nvalue, such as ",(0,i.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can easily avoid these runtime errors by casting values to ",(0,i.jsx)(n.code,{children:"str"})," explicitly.\nThe most elegant current solution is to use ",(0,i.jsx)(n.code,{children:"f"})," strings."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'some_new_string = f"I like {fruit} the best"\n# NOT \n# some_new_string = "I like" + fruit + " the best"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In addition to handling converting the value ",(0,i.jsx)(n.code,{children:"fruit"})," to string, the ",(0,i.jsx)(n.code,{children:"f"})," string\nexample is often clearer and easier to read, with less punctuation."]}),"\n",(0,i.jsx)(n.h2,{id:"convert-types-or-use-more-abstract-interfaces",children:"Convert types or use more abstract interfaces"}),"\n",(0,i.jsx)(n.p,{children:"Does your function return a list, a set, or a tuple? Be careful when working\nwith collections that you know which data structure you are using."}),"\n",(0,i.jsxs)(n.p,{children:["When you create a function that accepts a list, you may want to explicitly\nconvert to a list before working with it in case a developer passes in a ",(0,i.jsx)(n.code,{children:"set"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"check-for-none",children:"Check for None"}),"\n",(0,i.jsxs)(n.p,{children:["It is common for Python functions to return ",(0,i.jsx)(n.code,{children:"None"})," in certain error\nconditions. Make sure that you handle that possibility."]}),"\n",(0,i.jsx)(n.h2,{id:"handle-api-error-states",children:"Handle API error states"}),"\n",(0,i.jsx)(n.p,{children:"When working with APIs, be careful to handle possible failures. Decide what the\nfailure state should be for your end user. Ordinarily, API integrations in\nDocassemble are for convenience and your user should be able to continue in some\nfashion. You should never drop down to a Docassemble error screen when an\nexternal dependency fails or is unavailable."}),"\n",(0,i.jsx)(n.h2,{id:"further-reading-and-sources",children:"Further reading and sources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Defensive_programming",children:"Defensive Programming"}),", Wikipedia"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);