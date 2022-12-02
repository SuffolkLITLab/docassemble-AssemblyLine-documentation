"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3306],{4137:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return d}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(o,".").concat(d)]||c[d]||p[d]||s;return a?t.createElement(f,l(l({ref:n},m),{},{components:a})):t.createElement(f,l({ref:n},m))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},425:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(7294),r=a(6010),s="tabItem_Ymn6";function l(e){var n=e.children,a=e.hidden,l=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},n)}},4259:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(7462),r=a(7294),s=a(6010),l=a(1048),i=a(3609),o=a(1943),u=a(2957),m="tabList__CuJ",p="tabItem_LNqP";function c(e){var n,a,l=e.lazy,c=e.block,d=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.l)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?n:y[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),_=x.tabGroupChoices,w=x.setTabGroupChoices,T=(0,r.useState)(g),N=T[0],q=T[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var Z=_[b];null!=Z&&Z!==N&&k.some((function(e){return e.value===Z}))&&q(Z)}var P=function(e){var n=e.currentTarget,a=O.indexOf(n),t=k[a].value;t!==N&&(E(n),q(t),null!=b&&w(b,String(t)))},D=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=O.indexOf(e.currentTarget)+1;a=null!=(t=O[r])?t:O[0];break;case"ArrowLeft":var s,l=O.indexOf(e.currentTarget)-1;a=null!=(s=O[l])?s:O[O.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},v)},k.map((function(e){var n=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=a?a:n)}))),l?(0,r.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,l.Z)();return r.createElement(c,(0,t.Z)({key:String(n)},e))}},2225:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var t=a(7462),r=a(3366),s=(a(7294),a(4137)),l=a(4259),i=a(425),o=["components"],u={id:"ql_names",title:"Names",sidebar_label:"Names",slug:"/question_library/names"},m=void 0,p={unversionedId:"question_library/ql_names",id:"question_library/ql_names",title:"Names",description:"Ask for names in parts",source:"@site/docs/question_library/names.md",sourceDirName:"question_library",slug:"/question_library/names",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/names",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/names.md",tags:[],version:"current",frontMatter:{id:"ql_names",title:"Names",sidebar_label:"Names",slug:"/question_library/names"},sidebar:"someSidebar",previous:{title:"Use input validation carefully",permalink:"/docassemble-AssemblyLine-documentation/docs/style_guide/question_style_validation"},next:{title:"Addresses",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/addresses"}},c={},d=[{value:"Ask for names in parts",id:"ask-for-names-in-parts",level:2},{value:"Optional: omit suffix",id:"optional-omit-suffix",level:3},{value:"Use a single field to get the name of a business",id:"use-a-single-field-to-get-the-name-of-a-business",level:3}],f={toc:d};function b(e){var n=e.components,u=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},f,u,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ask-for-names-in-parts"},"Ask for names in parts"),(0,s.kt)("p",null,"We recognize that ",(0,s.kt)("a",{parentName:"p",href:"https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/"},'"names are\nhard"'),"."),(0,s.kt)("p",null,"However, in our experience, forms still expect that litigants will provide names\nin at least 2 parts: a last name (surname) and a first name (given name)."),(0,s.kt)("p",null,"We settled on using 4 standard name parts:"),(0,s.kt)("p",null,'Model "name" question:'),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"What is your name?"),(0,s.kt)("p",{parentName:"blockquote"},"First name: "),(0,s.kt)("p",{parentName:"blockquote"},"Middle name (optional): "),(0,s.kt)("p",{parentName:"blockquote"},"Last name: "),(0,s.kt)("p",{parentName:"blockquote"},"Suffix: ","[Dropdown menu]","  ")),(0,s.kt)("p",null,"In some countries, names also commonly have a prefix. Add a prefix if needed in\nyour country or culture."),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: person's name\nsets:\n  - person.name.first\n  - person.name.last\nquestion: |\n  Person's name\nfields:\n  - code: |\n      person.name_fields()\n"))),(0,s.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: person's name\nquestion: |\n  Person's name\nfields:\n  - First name: person.name.first\n  - Middle name: person.name.middle\n    required: False\n  - Last name: person.name.last\n  - Suffix: person.name.suffix\n    code: |\n      name_suffix()\n    required: False\n"))),(0,s.kt)(i.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,s.kt)("p",null,"  ",(0,s.kt)("img",{src:a(1727).Z,width:"740",height:"721"})))),(0,s.kt)("h3",{id:"optional-omit-suffix"},"Optional: omit suffix"),(0,s.kt)("p",null,"You may choose to omit the ",(0,s.kt)("inlineCode",{parentName:"p"},"suffix")," field:"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: person's name\nsets:\n  - person.name.first\n  - person.name.last\nquestion: |\n  Person's name\nfields:\n  - code: |\n      person.name_fields(show_suffix=False)\n"))),(0,s.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: person's name\nquestion: |\n  Person's name\nfields:\n  - First: person.name.first\n  - Middle: person.name.middle\n    required: False\n  - Last: person.name.last\n")))),(0,s.kt)("h3",{id:"use-a-single-field-to-get-the-name-of-a-business"},"Use a single field to get the name of a business"),(0,s.kt)("p",null,"If the entity is a business, multiple name fields should\nbe replaced with one name field."),(0,s.kt)("p",null,"Make the question dynamic if you are not sure."),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: person's name\nsets:\n  - person.name.first\n  - person.name.last\nquestion: |\n  Person's name\nfields:\n  - code: |\n      person.name_fields(person_or_business=\"unsure\")\n"))),(0,s.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: person\'s name\nquestion: |\n  Person\'s name\nfields:\n  - Is this a person or business?: person.person_type\n    input type: radio\n    choices:\n      - Business or organization: business\n      - Person: individual\n  - First name: person.name.first\n    show if:\n      variable: person.person_type\n      is: "individual"\n  - Last name: person.name.last\n    show if:\n      variable: person.person_type      \n      is: "individual"\n  - Suffix: person.name.suffix\n    code: |\n      name_suffix()\n    show if:\n      variable: person.person_type      \n      is: "individual"\n    required: False      \n  - Name of business or organization: person.name.first\n    show if:\n      variable: person.person_type\n      is: business\n')))))}b.isMDXComponent=!0},1727:function(e,n,a){n.Z=a.p+"assets/images/alindividual_name_fields-f5c76b28cf4d47caed264e5d7ab44c20.png"}}]);