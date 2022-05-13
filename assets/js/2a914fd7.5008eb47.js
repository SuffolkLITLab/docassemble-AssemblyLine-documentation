"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3225],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?i.createElement(h,l(l({ref:n},c),{},{components:t})):i.createElement(h,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7157:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var i=t(7462),a=t(3366),o=(t(7294),t(4137)),l=["components"],r={id:"coding_style_yaml_dynamic",title:"Making your interview dynamic",sidebar_label:"Making your interview dynamic",slug:"/coding_style_guide/yaml_dynamic"},s=void 0,d={unversionedId:"coding_style_yaml_dynamic",id:"coding_style_yaml_dynamic",title:"Making your interview dynamic",description:"Use the depends on modifier when setting values with code",source:"@site/docs/coding_style_yaml_dynamic.md",sourceDirName:".",slug:"/coding_style_guide/yaml_dynamic",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_dynamic",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style_yaml_dynamic.md",tags:[],version:"current",frontMatter:{id:"coding_style_yaml_dynamic",title:"Making your interview dynamic",sidebar_label:"Making your interview dynamic",slug:"/coding_style_guide/yaml_dynamic"},sidebar:"someSidebar",previous:{title:"Structuring your interview",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_structure"},next:{title:"Choosing interface options",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_interface"}},c={},p=[{value:"Use the <code>depends on</code> modifier when setting values with code",id:"use-the-depends-on-modifier-when-setting-values-with-code",level:3},{value:"Use the attachment block or template file for display-only logic",id:"use-the-attachment-block-or-template-file-for-display-only-logic",level:3},{value:"Use Python classes in module files to keep complex logic readable",id:"use-python-classes-in-module-files-to-keep-complex-logic-readable",level:3},{value:"Use the &quot;named block&quot; pattern sparingly",id:"use-the-named-block-pattern-sparingly",level:3},{value:"Avoid <code>needs</code>, <code>sets</code>, <code>force_ask</code> and other logic &quot;hacks&quot;",id:"avoid-needs-sets-force_ask-and-other-logic-hacks",level:3},{value:"Use <code>validation code</code> carefully",id:"use-validation-code-carefully",level:3},{value:"Use <code>show if</code> with extra caution",id:"use-show-if-with-extra-caution",level:3}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"use-the-depends-on-modifier-when-setting-values-with-code"},"Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"depends on")," modifier when setting values with code"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/logic.html#depends%20on"},(0,o.kt)("inlineCode",{parentName:"a"},"depends on"))," keeps\nthe value of your variables fresh, while also keeping your YAML file easy to\nread and performant."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: client_is_overpaid_person\nquestion: |\n  ${ client.familiar() }, are you filing for yourself or someone else?\nfields:\n  - no label: filing_for\n    datatype: radio\n    choices:\n      - Myself: self\n      - Someone else: someone_else  \n---\ndepends on:\n  - filing_for\ncode: |\n  client_is_overpaid_person = filing_for == 'self'\n")),(0,o.kt)("p",null,"The snippet above will recalculate the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"client_is_overpaid_person")," if\nthe user ever changes the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"filing_for"),"."),(0,o.kt)("h3",{id:"use-the-attachment-block-or-template-file-for-display-only-logic"},"Use the attachment block or template file for display-only logic"),(0,o.kt)("p",null,"When the output document or form has responses that should sometimes be hidden,\nit is better to keep your variables general and use short logical statements\ninside the ",(0,o.kt)("inlineCode",{parentName:"p"},"attachment")," ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," block (or inside the DOCX template's Jinja2\ncode) to control when the variables are displayed or hidden."),(0,o.kt)("p",null,"Use the multi-line ",(0,o.kt)("inlineCode",{parentName:"p"},"mako")," ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement rather than a one-line ",(0,o.kt)("inlineCode",{parentName:"p"},"ternary")," ",(0,o.kt)("inlineCode",{parentName:"p"},"if"),"\nstatement. The preferred option is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"attachment:\n  pdf template file: my_template.pdf\n  fields:\n      - \"client_relationship_other\": |\n          % if not client_is_overpaid_person:\n          ${ relationship_to_user['other'] }\n          % endif\n      - \"client_relationship_other_explanation\": |\n          % if not client_is_overpaid_person and relationship_to_user['other']:\n          ${ client_relationship_other_explanation }\n          % endif\n")),(0,o.kt)("p",null,"The advantage of this is keeping your variable name space neat and completely\nsemantic. It reduces the need for adding ",(0,o.kt)("inlineCode",{parentName:"p"},"depends on")," modifiers."),(0,o.kt)("p",null,"When your logic starts to become nested several levels deep or you have very\ncomplex calculations, abandon this rule."),(0,o.kt)("h3",{id:"use-python-classes-in-module-files-to-keep-complex-logic-readable"},"Use Python classes in module files to keep complex logic readable"),(0,o.kt)("p",null,"When you have very complex business rules that are reflected in the template\nfile, it is appropriate to move away from small ",(0,o.kt)("inlineCode",{parentName:"p"},"mako")," blocks inside the\ntemplate or attachment block. However, replacing complex logic with long ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"\nblocks is not always clear and easy to read."),(0,o.kt)("p",null,"It is better to encapsulate that logic inside a Python class."),(0,o.kt)("p",null,"Use logical method names to encapsulate such logic. For example:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ALIndividual")," class has a ",(0,o.kt)("inlineCode",{parentName:"p"},"gender_female()")," method that helps\nfill in checkboxes. It returns ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," depending on\nwhether the user specifies that ",(0,o.kt)("inlineCode",{parentName:"p"},"the_individual.gender == 'female'"),".\nThere is also a matching ",(0,o.kt)("inlineCode",{parentName:"p"},"gender_male")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gender_other")," method."),(0,o.kt)("p",null,"Small helper methods like this can make your attachment block or\nDOCX template easier to read. They can also reduce errors caused by\ncopying and pasting code."),(0,o.kt)("h3",{id:"use-the-named-block-pattern-sparingly"},'Use the "named block" pattern sparingly'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#triggering-code-and-then-continuing-using-named-blocks"},(0,o.kt)("inlineCode",{parentName:"a"},"named block"),"\npattern"),'\nshould not be overused. Most often, it is appropriate to just use a standard\ncode block that defines a variable without giving it a "name".'),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"named blocks")," when performing a calculation that should only need to be\nperformed once, such as sending an email or e-filing a form."),(0,o.kt)("h3",{id:"avoid-needs-sets-force_ask-and-other-logic-hacks"},"Avoid ",(0,o.kt)("inlineCode",{parentName:"h3"},"needs"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"sets"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"force_ask"),' and other logic "hacks"'),(0,o.kt)("p",null,"Avoid the use of question modifiers that make your logic harder to follow, such\nas ",(0,o.kt)("inlineCode",{parentName:"p"},"needs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sets"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"force_ask()")," and the like. Instead, be explicit with your\ninterview logic and place most logic directly in the ",(0,o.kt)("inlineCode",{parentName:"p"},"interview order")," block."),(0,o.kt)("p",null,"However, there are common exceptions to this rule:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"needs")," on review screens and other blocks that do not automatically\ntrigger referenced variables to trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"template:")," blocks and the like"),(0,o.kt)("li",{parentName:"ol"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"sets")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"ALIndividual")," blocks that rely on ",(0,o.kt)("inlineCode",{parentName:"li"},"name_fields()")," and\nsimilar fields, where needed for Docassemble to locate the question")),(0,o.kt)("h3",{id:"use-validation-code-carefully"},"Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"validation code")," carefully"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"validation code"),' is powerful, but can will cause a visible error when a\nvariable that is not already defined is mentioned. This may lead to bugs that\nshow up as pop-up "toast" notifications. This can be a poor user experience.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#validation%20code"},(0,o.kt)("inlineCode",{parentName:"a"},"validation\ncode"))," only for\nvalidation, not to set variable values."),(0,o.kt)("li",{parentName:"ol"},"Always use the ",(0,o.kt)("inlineCode",{parentName:"li"},"field")," parameter when using ",(0,o.kt)("inlineCode",{parentName:"li"},"validation_error()")," inside a\n",(0,o.kt)("inlineCode",{parentName:"li"},"validation code")," modifier to ensure that errors are raised in context.")),(0,o.kt)("h3",{id:"use-show-if-with-extra-caution"},"Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"show if")," with extra caution"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#show%20if"},(0,o.kt)("inlineCode",{parentName:"a"},"show if"))," can be used\nto make question screens dynamic and usable. Still, be cautious when using\nit: if your ",(0,o.kt)("inlineCode",{parentName:"p"},"show if")," logic hides a variable that is referenced in a ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory"),"\nblock somewhere else in the interview, your user can be stuck on a screen\nwithout being able to continue."),(0,o.kt)("p",null,"To reduce this risk:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"unless it is necessary, use only one level deep of ",(0,o.kt)("inlineCode",{parentName:"li"},"show if")),(0,o.kt)("li",{parentName:"ol"},"always implement the logic on your screen that uses ",(0,o.kt)("inlineCode",{parentName:"li"},"show if")," in the template\nor attachment block at the same time you implement it in the question block"),(0,o.kt)("li",{parentName:"ol"},"always test your interview with answers that leave ",(0,o.kt)("inlineCode",{parentName:"li"},"show if")," fields hidden"),(0,o.kt)("li",{parentName:"ol"},"actively search your code for ",(0,o.kt)("inlineCode",{parentName:"li"},"show if")," and confirm that hidden variables are\nonly referenced with matching logic as a final step before release")))}u.isMDXComponent=!0}}]);