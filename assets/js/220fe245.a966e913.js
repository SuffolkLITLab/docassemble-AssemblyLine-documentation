"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[409],{7921:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=s(4848),r=s(8453),t=s(9489),l=s(7227);const i={id:"ql_names",title:"Names",sidebar_label:"Names",slug:"/question_library/names"},o=void 0,u={id:"question_library/ql_names",title:"Names",description:"Ask for names in parts",source:"@site/docs/question_library/names.md",sourceDirName:"question_library",slug:"/question_library/names",permalink:"/docs/question_library/names",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/names.md",tags:[],version:"current",frontMatter:{id:"ql_names",title:"Names",sidebar_label:"Names",slug:"/question_library/names"},sidebar:"docs",previous:{title:"Use input validation carefully",permalink:"/docs/style_guide/question_style_validation"},next:{title:"Addresses",permalink:"/docs/question_library/addresses"}},c={},d=[{value:"Ask for names in parts",id:"ask-for-names-in-parts",level:2},{value:"Optional: omit suffix",id:"optional-omit-suffix",level:3},{value:"Use a single field to get the name of a business",id:"use-a-single-field-to-get-the-name-of-a-business",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"ask-for-names-in-parts",children:"Ask for names in parts"}),"\n",(0,a.jsxs)(n.p,{children:["We recognize that ",(0,a.jsx)(n.a,{href:"https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/",children:'"names are\nhard"'}),"."]}),"\n",(0,a.jsx)(n.p,{children:"However, in our experience, forms still expect that litigants will provide names\nin at least 2 parts: a last name (surname) and a first name (given name)."}),"\n",(0,a.jsx)(n.p,{children:"We settled on using 4 standard name parts:"}),"\n",(0,a.jsx)(n.p,{children:'Model "name" question:'}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"What is your name?"}),"\n",(0,a.jsx)(n.p,{children:"First name:"}),"\n",(0,a.jsx)(n.p,{children:"Middle name (optional):"}),"\n",(0,a.jsx)(n.p,{children:"Last name:"}),"\n",(0,a.jsx)(n.p,{children:"Suffix: [Dropdown menu]"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In some countries, names also commonly have a prefix. Add a prefix if needed in\nyour country or culture."}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nid: person's name\nsets:\n  - person.name.first\n  - person.name.last\nquestion: |\n  Person's name\nfields:\n  - code: |\n      person.name_fields()\n"})})}),(0,a.jsx)(l.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nid: person's name\nquestion: |\n  Person's name\nfields:\n  - First name: person.name.first\n  - Middle name: person.name.middle\n    required: False\n  - Last name: person.name.last\n  - Suffix: person.name.suffix\n    code: |\n      name_suffix()\n    required: False\n"})})}),(0,a.jsx)(l.A,{value:"preview",label:"Preview",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(4831).A+"",width:"740",height:"721"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"optional-omit-suffix",children:"Optional: omit suffix"}),"\n",(0,a.jsxs)(n.p,{children:["You may choose to omit the ",(0,a.jsx)(n.code,{children:"suffix"})," field:"]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nid: person's name\nsets:\n  - person.name.first\n  - person.name.last\nquestion: |\n  Person's name\nfields:\n  - code: |\n      person.name_fields(show_suffix=False)\n"})})}),(0,a.jsx)(l.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nid: person's name\nquestion: |\n  Person's name\nfields:\n  - First: person.name.first\n  - Middle: person.name.middle\n    required: False\n  - Last: person.name.last\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"use-a-single-field-to-get-the-name-of-a-business",children:"Use a single field to get the name of a business"}),"\n",(0,a.jsx)(n.p,{children:"If the entity is a business, multiple name fields should\nbe replaced with one name field."}),"\n",(0,a.jsx)(n.p,{children:"Make the question dynamic if you are not sure."}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nid: person's name\nsets:\n  - person.name.first\n  - person.name.last\nquestion: |\n  Person's name\nfields:\n  - code: |\n      person.name_fields(person_or_business=\"unsure\")\n"})})}),(0,a.jsx)(l.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'---\nid: person\'s name\nquestion: |\n  Person\'s name\nfields:\n  - Is this a person or business?: person.person_type\n    input type: radio\n    choices:\n      - Business or organization: business\n      - Person: individual\n  - First name: person.name.first\n    show if:\n      variable: person.person_type\n      is: "individual"\n  - Last name: person.name.last\n    show if:\n      variable: person.person_type      \n      is: "individual"\n  - Suffix: person.name.suffix\n    code: |\n      name_suffix()\n    show if:\n      variable: person.person_type      \n      is: "individual"\n    required: False      \n  - Name of business or organization: person.name.first\n    show if:\n      variable: person.person_type\n      is: business\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},7227:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);var a=s(8215);const r={tabItem:"tabItem_Ymn6"};var t=s(4848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:s,children:n})}},9489:(e,n,s)=>{s.d(n,{A:()=>_});var a=s(6540),r=s(8215),t=s(4245),l=s(6347),i=s(6494),o=s(2814),u=s(5167),c=s(9900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function h(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[u,d]=f({queryString:s,groupId:r}),[h,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,c.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),x=(()=>{const e=u??h;return p({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=s(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(4848);function g(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,t.a_)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),r=i[s].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...t,className:(0,r.A)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function _(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},4831:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/alindividual_name_fields-f5c76b28cf4d47caed264e5d7ab44c20.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var a=s(6540);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);