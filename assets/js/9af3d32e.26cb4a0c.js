"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[1531],{4137:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||l;return o?n.createElement(d,a(a({ref:t},s),{},{components:o})):n.createElement(d,a({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1185:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=o(7462),r=(o(7294),o(4137));const l={sidebar_label:"copy_button",title:"ALToolbox.copy_button"},a=void 0,i={unversionedId:"reference/ALToolbox/copy_button",id:"reference/ALToolbox/copy_button",title:"ALToolbox.copy_button",description:"copy\\button\\html",source:"@site/docs/reference/ALToolbox/copy_button.md",sourceDirName:"reference/ALToolbox",slug:"/reference/ALToolbox/copy_button",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/copy_button",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/ALToolbox/copy_button.md",tags:[],version:"current",frontMatter:{sidebar_label:"copy_button",title:"ALToolbox.copy_button"},sidebar:"someSidebar",previous:{title:"business_days",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/business_days"},next:{title:"misc",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/misc"}},c={},p=[{value:"copy_button_html",id:"copy_button_html",level:4}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"copy_button_html"},"copy","_","button","_","html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def copy_button_html(text_to_copy: str,\n                     text_before: str = "",\n                     label: str = "Copy",\n                     tooltip_inert_text: str = "Copy to clipboard",\n                     tooltip_copied_text: str = "Copied!",\n                     copy_template_block: bool = False,\n                     scroll_class: str = "",\n                     style_class: str = "",\n                     adjust_height: str = "") -> str\n')),(0,r.kt)("p",null,"Return the html for a button that will let a user copy the given text"),(0,r.kt)("p",null,"To use, include ",(0,r.kt)("inlineCode",{parentName:"p"},"docassemble.ALToolbox:copy_button.yml")," in your DA interview."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text_to_copy")," - text you want the user to be able to copy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text_before")," - the prompt that will appear to the left of the HTML input"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label")," - the label of the Button"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tooltip_inert_text")," - text shown when the button is hovered over, before it","'","s clicked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tooltip_copied_text")," - text shown when the button is hovered over, after the text is placed on the clipboard")))}u.isMDXComponent=!0}}]);