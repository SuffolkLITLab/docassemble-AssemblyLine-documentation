"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7932],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,d=p["".concat(l,".").concat(b)]||p[b]||u[b]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={id:"framework_overview",title:"Feature documentation: using Assembly Line modules in your interview\n",sidebar_label:"Feature Documentation",slug:"/framework/overview"},l=void 0,c={unversionedId:"framework/framework_overview",id:"framework/framework_overview",title:"Feature documentation: using Assembly Line modules in your interview\n",description:"The Assembly Line code is organized into a few different packages and modules:",source:"@site/docs/framework/framework_overview.md",sourceDirName:"framework",slug:"/framework/overview",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/overview",editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/framework_overview.md",tags:[],version:"current",frontMatter:{id:"framework_overview",title:"Feature documentation: using Assembly Line modules in your interview\n",sidebar_label:"Feature Documentation",slug:"/framework/overview"},sidebar:"someSidebar",previous:{title:"Appendix: Adding content to this documentation site\n",permalink:"/docassemble-AssemblyLine-documentation/docs/documentation_style_guide"},next:{title:"Special variables for Assembly Line interviews",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/magic_variables"}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Assembly Line code is organized into a few different packages and modules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox"},"ALToolbox"),", which\nhas small utility functions and components that are used in AssemblyLine but\nthat can be easily used by Docassemble developers who use other platforms."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALDashboard"},"ALDashboard"),",\nwhich is a collection of tools to help administer a Docassemble server and debug interviews.   "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/al_general.py"},"al_general.py"),",\nwhich contains Python classes that help developers represent people in Docassemble."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/al_document.py"},"al_document.py"),",\nwhich helps simplify the use of complex nested and contingent templates in\nDocassemble, including handling PDF overflow text."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/language.py"},"language.py"),",\nwhich has some small helper functions to make it simpler to author\nmultilingual interviews"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GBLS/docassemble-MACourts"},"MACourts")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/language.py"},"al_courts.py"),",\nwhich help model court, venue, and jurisdiction information in Docassemble for Massachusetts and as a possible starting point in\nother jurisdictions.")))}p.isMDXComponent=!0}}]);