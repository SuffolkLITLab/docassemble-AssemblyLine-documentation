"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9271],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(4137)),r=["components"],l={id:"customizing_interview",title:"Customing your interview",sidebar_label:"Customizing your interview",slug:"/customizing_interview"},s=void 0,u={unversionedId:"customizing_interview",id:"customizing_interview",title:"Customing your interview",description:"Getting the draft into your playground",source:"@site/docs/customizing_interview.md",sourceDirName:".",slug:"/customizing_interview",permalink:"/docassemble-AssemblyLine-documentation/docs/customizing_interview",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/customizing_interview.md",tags:[],version:"current",frontMatter:{id:"customizing_interview",title:"Customing your interview",sidebar_label:"Customizing your interview",slug:"/customizing_interview"},sidebar:"someSidebar",previous:{title:'"Weaving" your form into a draft interview\n',permalink:"/docassemble-AssemblyLine-documentation/docs/generating_code"},next:{title:"Appendix: Understanding the YAML code\n",permalink:"/docassemble-AssemblyLine-documentation/docs/generated_yaml"}},d={},c=[{value:"Getting the draft into your playground",id:"getting-the-draft-into-your-playground",level:2},{value:"How to edit your interview",id:"how-to-edit-your-interview",level:2},{value:"Changing the order of screens",id:"changing-the-order-of-screens",level:2},{value:"Adding conditional logic to the screen order",id:"adding-conditional-logic-to-the-screen-order",level:2},{value:"Adding conditional logic on an individual screen",id:"adding-conditional-logic-on-an-individual-screen",level:2},{value:"Questions that you will not see in the Playground",id:"questions-that-you-will-not-see-in-the-playground",level:2},{value:"Customizing settings that you overlooked in the Weaver",id:"customizing-settings-that-you-overlooked-in-the-weaver",level:2},{value:"Setting the form type",id:"setting-the-form-type",level:3},{value:"Setting the number of people in a group, such as the number of <code>users</code>",id:"setting-the-number-of-people-in-a-group-such-as-the-number-of-users",level:3},{value:"How to make changes safely",id:"how-to-make-changes-safely",level:2}],p={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-the-draft-into-your-playground"},"Getting the draft into your playground"),(0,i.kt)("p",null,"When you have finished using the Weaver, download your package. This will put a\n.zip file in the Downloads folder on your computer."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"If you are using Safari on a Mac OS computer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Safari, by default, will turn your downloaded package into\na folder on your PC."),(0,i.kt)("p",{parentName:"div"},"Before downloading the package, turn off that behavior:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"open Safari "),(0,i.kt)("li",{parentName:"ol"},"click Preferences"),(0,i.kt)("li",{parentName:"ol"},"under the General tab, uncheck the option ",(0,i.kt)("strong",{parentName:"li"},"Open 'safe' files after downloading"))))),(0,i.kt)("p",null,'First, create a new "Project" in your playground. Using projects will\nhelp you keep your Docassemble code organized.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"playground | projects ",src:n(7466).Z,width:"486",height:"237"})),(0,i.kt)("p",null,"Next, upload this file to the Docassemble playground's ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages")," folder."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Folders | Packages ",src:n(17).Z,width:"804",height:"437"})),(0,i.kt)("h2",{id:"how-to-edit-your-interview"},"How to edit your interview"),(0,i.kt)("p",null,"Navigate back to the main Playground window. You should see the YAML file\nwith your interview's draft code."),(0,i.kt)("p",null,"Scroll through and take a look at the code. You will see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"code blocks setting defaults for your interview"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"main order")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"interview order")," block which list some of the variables\nthat your interview uses, in order."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"question:")," blocks that contain the text of questions and the list of fields\nthat are asked on each screen")),(0,i.kt)("p",null,"You do not need to understand all of the code. Absorb what you can, and feel free\nto experiment. Save your code often, preferably to a ",(0,i.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/github"},"GitHub")," repository."),(0,i.kt)("p",null,'You will likely start by clicking the "Save and Run" button to try running your\ninterview through to the end. Note any awkward wording or changes you want to make.'),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," that is on the top of each screen to find the screen that you want to change.\nThen, simply change the text that you want to change, or change the order of fields."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"id: request a guardianship",src:n(1246).Z,width:"1418",height:"534"})),(0,i.kt)("p",null,"Below we describe some of the most common starting customizations you will make,\nespecially changes that interact with an Assembly Line convention.\nYou can use any ",(0,i.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html"},"Docassemble feature"),"\nin your interview."),(0,i.kt)("h2",{id:"changing-the-order-of-screens"},"Changing the order of screens"),(0,i.kt)("p",null,"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"interview_order")," block in your YAML file.\nMove the variable name that you want to ask earlier in your interview to\nthe place you want it to be asked."),(0,i.kt)("h2",{id:"adding-conditional-logic-to-the-screen-order"},"Adding conditional logic to the screen order"),(0,i.kt)("p",null,"If a screen is conditional, you can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement so that it only\nappears when the condition is satisfied."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"id: interview_order_Guardianship_Assistant\ncode: |\n  users[0].name.first\n  users.gather()\n  if has_copetitioner:\n    users[1].address.address\n  else:\n    users[0].address.city\n")),(0,i.kt)("h2",{id:"adding-conditional-logic-on-an-individual-screen"},"Adding conditional logic on an individual screen"),(0,i.kt)("p",null,"To make a single field show or disappear on a screen that asks for\nsome optional information, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"show if")," modifier."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: Tell me more about Respondent\nquestion: |\n  Tell me more about the ${ other_parties[0] }.\nfields:\n  - Date of Birth: other_parties[0].birthdate\n    datatype: date        \n  - Primary Language: primary_language\n    choices:\n      - English\n      - Spanish\n      - Other\n  - Other language: primary_language_other\n    show if:\n      variable: primary_language\n      is: Other\n")),(0,i.kt)("h2",{id:"questions-that-you-will-not-see-in-the-playground"},"Questions that you will not see in the Playground"),(0,i.kt)("p",null,'You will not see any questions that come from our "question library". The\n"question library" is used to standardize questions for things like selecting a\ncourt, asking for an address, or asking someone\'s name. However, you may want to\ncustomize those questions.'),(0,i.kt)("p",null,'One way to customize the question is to click the "source" button. This will show you\nthe YAML code that is used to ask the question.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"source button",src:n(6920).Z,width:"1317",height:"481"})),(0,i.kt)("p",null,"Scroll down until you see the question text. Copy it into your own YAML file\nand make the changes that you want. You will need to type the ",(0,i.kt)("inlineCode",{parentName:"p"},"---")," separator.\nPaste it into a logical place, such as near other questions that are asked at about\nthe same time in your YAML file."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About the variable ",(0,i.kt)("inlineCode",{parentName:"h5"},"x"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the question you want to customize uses the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"generic object"),",\ndelete that line from the question. Also replace the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," with\na specific variable name, like ",(0,i.kt)("inlineCode",{parentName:"p"},"users[0]"),"."))),(0,i.kt)("p",null,"A second way to customize the question is to look to see if it is listed as one\nof the playground Example blocks."),(0,i.kt)("p",null,'In the Playground, scroll down until you see the heading "Example blocks".'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Expand the menu labeled "Suffolk LIT Lab Assemble Line" and look to see if\nthe block you want is listed. '),(0,i.kt)("li",{parentName:"ol"},'Click the green "insert" button to insert it at the position of your cursor\nin the Docassemble playground.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"playground example blocks",src:n(227).Z,width:"856",height:"507"})),(0,i.kt)("p",null,"Replace any variable names to match the variable name you want to customize.\nFor example: replace ",(0,i.kt)("inlineCode",{parentName:"p"},"person")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"users[0]"),". You may or may not want to delete\nany ",(0,i.kt)("inlineCode",{parentName:"p"},"objects")," block that comes along with the custom question."),(0,i.kt)("h2",{id:"customizing-settings-that-you-overlooked-in-the-weaver"},"Customizing settings that you overlooked in the Weaver"),(0,i.kt)("h3",{id:"setting-the-form-type"},"Setting the form type"),(0,i.kt)("p",null,"If you are prompted to specify if the user is the plaintiff or defendant but\nthe user ",(0,i.kt)("strong",{parentName:"p"},"always")," is starting a new action, customize the value of\n",(0,i.kt)("inlineCode",{parentName:"p"},"al_form_type"),"."),(0,i.kt)("p",null,"Look in your interview for a code block that sets the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"al_form_type"),".\nIf you do not see it, copy and modify the block below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncode: |\n  al_form_type = 'starts_case'\n")),(0,i.kt)("p",null,"The valid values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Starts a new court case: ",(0,i.kt)("inlineCode",{parentName:"li"},"'starts_case'")),(0,i.kt)("li",{parentName:"ul"},"Filed in or responding to an existing court case: ",(0,i.kt)("inlineCode",{parentName:"li"},"'existing_case'")),(0,i.kt)("li",{parentName:"ul"},"Part of an appeal of a court case: ",(0,i.kt)("inlineCode",{parentName:"li"},"'appeal'")),(0,i.kt)("li",{parentName:"ul"},"Form that is not filed in a court: ",(0,i.kt)("inlineCode",{parentName:"li"},"'other_form'")),(0,i.kt)("li",{parentName:"ul"},"Letter: ",(0,i.kt)("inlineCode",{parentName:"li"},"'letter'")),(0,i.kt)("li",{parentName:"ul"},"Other: ",(0,i.kt)("inlineCode",{parentName:"li"},"'other'"))),(0,i.kt)("p",null,'If the "form type" is not ',(0,i.kt)("inlineCode",{parentName:"p"},"starts_case")," but the party using the form\nis always the plaintiff or defendant, you can also set that directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"code: |\n  user_ask_role = 'plaintiff'\n")),(0,i.kt)("p",null,"Valid values are either ",(0,i.kt)("inlineCode",{parentName:"p"},'"plaintiff"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"defendant"'),'. Use these exact values\neven if the form user is called "petitioner" or "respondent".'),(0,i.kt)("h3",{id:"setting-the-number-of-people-in-a-group-such-as-the-number-of-users"},"Setting the number of people in a group, such as the number of ",(0,i.kt)("inlineCode",{parentName:"h3"},"users")),(0,i.kt)("p",null,"If you are prompted to specify whether there is another user or opposing party\nin a case but your form ",(0,i.kt)("strong",{parentName:"p"},"always")," allows only one user or other party,\ncustomize the definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"other_parties")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"objects")," block."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nobjects:\n  - users: ALPeopleList.using(there_are_any=True) # Will prompt one at a time\n  - other_parties: ALPeopleList.using(ask_number=True, target_number=1) # Tells Docassemble there is exactly one other_party\n")),(0,i.kt)("h2",{id:"how-to-make-changes-safely"},"How to make changes safely"),(0,i.kt)("p",null,"You can always:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"change question and subquestion text"),(0,i.kt)("li",{parentName:"ol"},"change the order of fields and questions"),(0,i.kt)("li",{parentName:"ol"},"change any of the settings called out above")),(0,i.kt)("p",null,"Avoid:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"changing the name of variables until you know what you are doing"),(0,i.kt)("li",{parentName:"ol"},"deleting code until you have first tried commenting it out")),(0,i.kt)("p",null,'"Comment out" code by adding a single ',(0,i.kt)("inlineCode",{parentName:"p"},"# ")," at the beginning of each line, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# question: |\n#  I don't think this question is used any more\n# fields:\n#  - Field 1: variable_1\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To comment out many lines at once, hold the ALT key and click and drag a line\nwith your mouse. If you do it correctly you will see a long blinking cursor.\nNow you can type on multiple lines at once. Type a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," and a space to comment out the lines\nwith the blinking cursor."))),(0,i.kt)("p",null,"If you want to discard your changes and start over, simply upload the package .ZIP file\nto your playground again. This will wipe out all of your changes."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/github"},"GitHub")," regularly to let you restore your work from a point in time."))}m.isMDXComponent=!0},227:function(e,t,n){t.Z=n.p+"assets/images/playground_example_blocks-b8f1aacf86d38352858476222a42f077.png"},1246:function(e,t,n){t.Z=n.p+"assets/images/playground_id-4184890648959724d0bce0f3fa200125.png"},17:function(e,t,n){t.Z=n.p+"assets/images/playground_packages_menu-363077419ec2987bdfbdfb80533c9b9b.png"},7466:function(e,t,n){t.Z=n.p+"assets/images/playground_projects-8cd090f5870664bb98b8d58d02aacc2f.png"},6920:function(e,t,n){t.Z=n.p+"assets/images/playground_source_button-1fa7fdaf9954dbd46f0de121d321f7df.png"}}]);