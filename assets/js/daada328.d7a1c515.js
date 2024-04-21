"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[6503],{2102:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(4848),o=i(8453);const a={id:"alweaver_overview",title:'"Weaving" your form into a draft interview\n',sidebar_label:'"Weaving" your form into a draft interview\n',slug:"/generating_code"},s=void 0,r={id:"alweaver_overview",title:'"Weaving" your form into a draft interview\n',description:"After your document is fully labeled, the next step is",source:"@site/docs/weaver_overview.md",sourceDirName:".",slug:"/generating_code",permalink:"/docassemble-AssemblyLine-documentation/docs/generating_code",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/weaver_overview.md",tags:[],version:"current",frontMatter:{id:"alweaver_overview",title:'"Weaving" your form into a draft interview\n',sidebar_label:'"Weaving" your form into a draft interview\n',slug:"/generating_code"},sidebar:"docs",previous:{title:"Field labels to use in template files",permalink:"/docassemble-AssemblyLine-documentation/docs/label_variables"},next:{title:"Editing your interview",permalink:"/docassemble-AssemblyLine-documentation/docs/customizing_interview"}},l={},d=[{value:"Philosophy",id:"philosophy",level:2},{value:"Limits of the Weaver",id:"limits-of-the-weaver",level:3},{value:"Before you use the Weaver",id:"before-you-use-the-weaver",level:2},{value:"What the Weaver does",id:"what-the-weaver-does",level:2},{value:"Information you will be asked",id:"information-you-will-be-asked",level:2},{value:"Download your interview at the end",id:"download-your-interview-at-the-end",level:2},{value:"Example of a page in a Docassemble interview",id:"example-of-a-page-in-a-docassemble-interview",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["After your document is fully ",(0,t.jsx)(n.a,{href:"/docassemble-AssemblyLine-documentation/docs/label_variables",children:"labeled"}),", the next step is\nto automate a draft in the ",(0,t.jsx)(n.a,{href:"https://apps-dev.suffolklitlab.org/start/ALWeaver/assembly_line?new_session=1",children:"Document Assembly Line\nWeaver"}),"\n(ALWeaver)."]}),"\n",(0,t.jsx)(n.h2,{id:"philosophy",children:"Philosophy"}),"\n",(0,t.jsx)(n.p,{children:"The Assembly Line Weaver is a tool that helps you create a draft of a guided\ninterview. You should not spend very much of your time at this stage."}),"\n",(0,t.jsx)(n.p,{children:"Use the Weaver to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"make sure you are using Assembly Line conventions"}),"\n",(0,t.jsx)(n.li,{children:"get draft text in the right place, so you can easily find and edit it later"}),"\n",(0,t.jsx)(n.li,{children:"get a runnable prototype so that you can start getting expert feedback"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We designed the Weaver to produce clean, maintainable code. We do not\nintend it to work the way that fully no-code solutions work, which often\nare easy to use for simple features but produce code that is challenging\nto edit manually."}),"\n",(0,t.jsx)(n.h3,{id:"limits-of-the-weaver",children:"Limits of the Weaver"}),"\n",(0,t.jsxs)(n.p,{children:["The Assembly Line Weaver does allow you to reorder screens. However:\nyou will not be able to add ",(0,t.jsx)(n.strong,{children:"any"})," logic in the Weaver process."]}),"\n",(0,t.jsx)(n.p,{children:"This is by design. We want you to quickly get to the Docassemble playground\nto continue editing your code."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-use-the-weaver",children:"Before you use the Weaver"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Make sure you got the ",(0,t.jsx)(n.a,{href:"label_variables",children:"field labels"})," (variable names) right:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the Assembly Line variable names for things like ",(0,t.jsx)(n.code,{children:"users"})," and ",(0,t.jsx)(n.code,{children:"other_parties"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:['Double-check the order of word "suffixes" like ',(0,t.jsx)(n.code,{children:"name_first"})," and ",(0,t.jsx)(n.code,{children:"address_unit"})," (they go big to small)."]}),"\n",(0,t.jsxs)(n.li,{children:["In PDFs, make sure you used ",(0,t.jsx)(n.code,{children:"__1"}),", ",(0,t.jsx)(n.code,{children:"__2"})," etc at the end of a variable name if you had to repeat it in the same document."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Rename the document to remove any extra "stuff", like -01, _final, _labeled, etc. The filename will get reused throughout your project.'}),"\n",(0,t.jsx)(n.li,{children:"Plan to finish using the Weaver in one sitting, most of the time. It is easier to customize in the playground, and harder to go\nback to your older Weaver session."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-the-weaver-does",children:"What the Weaver does"}),"\n",(0,t.jsx)(n.p,{children:"The steps that the Weaver will walk you through are as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"validate the labels and your template file"}),"\n",(0,t.jsxs)(n.li,{children:["add some basic information about your form (follow the ",(0,t.jsx)(n.a,{href:"/docassemble-AssemblyLine-documentation/docs/planning",children:"planning your interview"})," to get this ready)"]}),"\n",(0,t.jsx)(n.li,{children:"add on-screen prompts for each labeled field"}),"\n",(0,t.jsx)(n.li,{children:"choose a datatype for each labeled field (for example: text, number, date)"}),"\n",(0,t.jsx)(n.li,{children:"organize the fields onto individual screens with headings and optional additional text"}),"\n",(0,t.jsx)(n.li,{children:"download a completed, runnable draft interview"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://apps-dev.suffolklitlab.org/start/ALWeaver/assembly_line?new_session=1",children:"Launch the Assembly Line Weaver"})}),"\n",(0,t.jsx)(n.h2,{id:"information-you-will-be-asked",children:"Information you will be asked"}),"\n",(0,t.jsx)(n.p,{children:"To prepare to run your form through the Weaver, think about how you will answer\nthe questions listed below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a short label for your form that is used to build unique variable names, like:\n",(0,t.jsx)(n.code,{children:"restraining_order_209A"})]}),"\n",(0,t.jsx)(n.li,{children:"a title for your interview"}),"\n",(0,t.jsx)(n.li,{children:"a short description"}),"\n",(0,t.jsx)(n.li,{children:"draft text that orients your user to what they need before they start working\non your form"}),"\n",(0,t.jsx)(n.li,{children:"whether the user is usually the plaintiff, defendant or could play either role"}),"\n",(0,t.jsx)(n.li,{children:"the names of authors of your interview (usually, just you!)"}),"\n",(0,t.jsx)(n.li,{children:"the country and state the form is from"}),"\n",(0,t.jsx)(n.li,{children:"the category for your form"}),"\n",(0,t.jsx)(n.li,{children:"the step in a court process that your form is filed: e.g., starting a case,\nfiled as an appeal"}),"\n",(0,t.jsx)(n.li,{children:"the list of courts your form can be filed in"}),"\n",(0,t.jsx)(n.li,{children:'the total number of each kind of "person" that can appear on the form. e.g.,\ncan multiple plaintiffs file at once, or just one?'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"New features are regularly added to the Weaver, so the exact list of questions\nyou will be asked may change."}),"\n",(0,t.jsx)(n.h2,{id:"download-your-interview-at-the-end",children:"Download your interview at the end"}),"\n",(0,t.jsx)(n.p,{children:"When you have finished using the Weaver, download your package. This will put a\n.zip file in the Downloads folder on your computer."}),"\n",(0,t.jsxs)(n.p,{children:["Next, upload this file to the Docassemble playground's ",(0,t.jsx)(n.code,{children:"Packages"})," folder."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Folders | Packages ",src:i(2937).A+"",width:"804",height:"437"})}),"\n",(0,t.jsxs)(n.admonition,{title:"If you are using Safari on a Mac OS computer",type:"warning",children:[(0,t.jsx)(n.p,{children:"Safari, by default, will turn your downloaded package into\na folder on your PC."}),(0,t.jsx)(n.p,{children:"Before downloading the package, turn off that behavior:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"open Safari"}),"\n",(0,t.jsx)(n.li,{children:"click Preferences"}),"\n",(0,t.jsxs)(n.li,{children:["under the General tab, uncheck the option ",(0,t.jsx)(n.strong,{children:"Open 'safe' files after downloading"})]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"example-of-a-page-in-a-docassemble-interview",children:"Example of a page in a Docassemble interview"}),"\n",(0,t.jsx)(n.p,{children:"A page might look like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"One page of an interview made up of a heading, explanatory text, and the fields",src:i(1358).A+"",width:"1314",height:"902"})}),"\n",(0,t.jsxs)(n.p,{children:["You can see ",(0,t.jsx)(n.a,{href:"https://github.com/suffolkLITLab/docassemble-ALWeaver",children:"the ALWeaver docassemble package on GitHub"})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1358:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/interview_screen_or_page-28b4b81db6ab77818cab3e487bf6b599.png"},2937:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/playground_packages_menu-363077419ec2987bdfbdfb80533c9b9b.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);