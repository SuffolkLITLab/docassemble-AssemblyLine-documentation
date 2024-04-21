"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3750],{3450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),a=t(8453);const o={id:"yaml_translation",title:"Planning for translation and flexible updates",sidebar_label:"Planning for translation",slug:"/coding_style_guide/yaml_translation"},s=void 0,l={id:"coding_style/yaml_translation",title:"Planning for translation and flexible updates",description:"Use labeled options with the choices modifier",source:"@site/docs/coding_style/yaml_translation.md",sourceDirName:"coding_style",slug:"/coding_style_guide/yaml_translation",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_translation",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml_translation.md",tags:[],version:"current",frontMatter:{id:"yaml_translation",title:"Planning for translation and flexible updates",sidebar_label:"Planning for translation",slug:"/coding_style_guide/yaml_translation"},sidebar:"docs",previous:{title:"Choosing interface options",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_interface"},next:{title:'"Safe" coding\n',permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/defense"}},d={},c=[{value:"Use labeled options with the <code>choices</code> modifier",id:"use-labeled-options-with-the-choices-modifier",level:3},{value:"Avoid hardcoded string in code - use templates instead",id:"avoid-hardcoded-string-in-code---use-templates-instead",level:3},{value:"Do not add a language modifier to blocks in the default language",id:"do-not-add-a-language-modifier-to-blocks-in-the-default-language",level:3},{value:"Avoid using the language functions from <code>pattern.en</code> in your interview",id:"avoid-using-the-language-functions-from-patternen-in-your-interview",level:3}];function r(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h3,{id:"use-labeled-options-with-the-choices-modifier",children:["Use labeled options with the ",(0,i.jsx)(n.code,{children:"choices"})," modifier"]}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"choices"})," field modifier, always provide both\na display label and a value."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"fields: \n  - Pick a card, any card: which_card\n    choices:\n      - Ace: ace\n      - Queen: queen\n      - 3: three\n      - 1: one\n"})}),"\n",(0,i.jsx)(n.p,{children:"The value will remain stable for translation and any language changes that will\nbe made during the course of the project, allowing you to avoid updating your\nlogic with minor language tweaks."}),"\n",(0,i.jsxs)(n.p,{children:["It may be helpful to use ",(0,i.jsx)(n.code,{children:"snake_case"})," for ",(0,i.jsx)(n.code,{children:"choices"})," values. This will help\nsignal that they are static terms that will not change when other interview\nlanguage changes."]}),"\n",(0,i.jsx)(n.h3,{id:"avoid-hardcoded-string-in-code---use-templates-instead",children:"Avoid hardcoded string in code - use templates instead"}),"\n",(0,i.jsxs)(n.p,{children:["Avoid placing literal English text inside code blocks, functions and methods. Instead,\nuse Docassemble ",(0,i.jsx)(n.code,{children:"template"})," blocks. You should use an ",(0,i.jsx)(n.code,{children:"f"})," string or explicitly\nconvert ",(0,i.jsx)(n.code,{children:"template"}),"s to ",(0,i.jsx)(n.code,{children:"str"})," to avoid certain Docassemble bugs."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\ntemplate: my_text_template\ncontent: |\n  Hello, World\n---\ncode: |\n  list_options = [{'option1': str(my_text_template)}]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Template blocks will become part of the Docassemble XLSX or XLIFF translation\nfile, which makes them the most convenient way to handle text that must be\ntranslated."}),"\n",(0,i.jsx)(n.h3,{id:"do-not-add-a-language-modifier-to-blocks-in-the-default-language",children:"Do not add a language modifier to blocks in the default language"}),"\n",(0,i.jsxs)(n.p,{children:["For certain kinds of metadata, such as navigation sections, the only way to make\nthem change when the interview language changes is to add a ",(0,i.jsx)(n.code,{children:"language:"})," modifier."]}),"\n",(0,i.jsxs)(n.p,{children:["Leave the default language with no modifier. E.g., if your interview is written\nin English, do not add a ",(0,i.jsx)(n.code,{children:"language: en"})," modifier. Instead, add the modifier\nto each new language as you go."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# English\nsections: \n  - Section 1\n  - Section 2\n---\nlanguage: es\nsections:\n  - Secci\xf3n 1\n  - Secci\xf3n 2\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"avoid-using-the-language-functions-from-patternen-in-your-interview",children:["Avoid using the language functions from ",(0,i.jsx)(n.code,{children:"pattern.en"})," in your interview"]}),"\n",(0,i.jsxs)(n.p,{children:["Docassemble includes very useful features to conjugate verbs, match gender, and\nmore that are drawn from ",(0,i.jsx)(n.code,{children:"pattern.en"}),", such as the ",(0,i.jsx)(n.code,{children:"does_verb"})," method of a\nDAList. These are safe to use inside a language-specific template, such as a\ncourt form that will always be filed in English. Never use these inside a\n",(0,i.jsx)(n.code,{children:"question"})," block:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["using ",(0,i.jsx)(n.code,{children:"does_verb"}),' and its cousins inside a question block leads to question\n"fragments" that may not be grammatical in another language']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"does_verb"})," may not be available in a language that you decide to translate\nyour interview to in the future."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Similarly, do not use sentence fragments to update text that will change if:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"the number of people in a list is either 1 or more"}),"\n",(0,i.jsx)(n.li,{children:"the user is answering the question on their own behalf or for someone else"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Instead: use a Mako ",(0,i.jsx)(n.code,{children:"if"})," statement on the whole sentence."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\nid: agree overpaid\nquestion: |\n  % if client_is_overpaid_person:\n  Do you agree that you got too much money from Social Security?\n  % else:\n  Do you agree that ${ recorded_person } got too much money from Social Security?\n  % endif\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);