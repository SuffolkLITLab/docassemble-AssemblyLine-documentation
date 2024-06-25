"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8056],{1286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const l={id:"yaml",title:"Interview files",sidebar_label:"Interview files",slug:"/coding_style_guide/yaml"},a=void 0,o={id:"coding_style/yaml",title:"Interview files",description:"Docassemble interviews are written in",source:"@site/docs/coding_style/yaml.md",sourceDirName:"coding_style",slug:"/coding_style_guide/yaml",permalink:"/docs/coding_style_guide/yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml.md",tags:[],version:"current",frontMatter:{id:"yaml",title:"Interview files",sidebar_label:"Interview files",slug:"/coding_style_guide/yaml"},sidebar:"docs",previous:{title:"Python",permalink:"/docs/coding_style_guide/python"},next:{title:"Structuring your interview",permalink:"/docs/coding_style_guide/yaml_structure"}},r={},d=[{value:"Use Python conventions for variable names and Python code in your YAML files",id:"use-python-conventions-for-variable-names-and-python-code-in-your-yaml-files",level:2},{value:"Organize and name your files",id:"organize-and-name-your-files",level:2},{value:"Use descriptive package names; include state and forum identifiers",id:"use-descriptive-package-names-include-state-and-forum-identifiers",level:3},{value:"Avoid spaces in file names; use lowercase letters",id:"avoid-spaces-in-file-names-use-lowercase-letters",level:3},{value:"Avoid using leading numbers in file names",id:"avoid-using-leading-numbers-in-file-names",level:3},{value:"Use descriptive names for YAML files",id:"use-descriptive-names-for-yaml-files",level:3},{value:"Use a small number of YAML files for each project",id:"use-a-small-number-of-yaml-files-for-each-project",level:3},{value:"Use clear filenames for modular interview files",id:"use-clear-filenames-for-modular-interview-files",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Docassemble interviews are written in\n",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/yaml",children:"YAML"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"They may also contain:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"template files (e.g., DOCX, PDF, or Markdown (.md) files)"}),"\n",(0,s.jsx)(n.li,{children:"images"}),"\n",(0,s.jsx)(n.li,{children:"css"}),"\n",(0,s.jsx)(n.li,{children:"javascript"}),"\n",(0,s.jsx)(n.li,{children:"data sources in CSV, XLSX, or JSON format"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Keeping your files neat and organized can help other developers understand\nyour code."}),"\n",(0,s.jsx)(n.h2,{id:"use-python-conventions-for-variable-names-and-python-code-in-your-yaml-files",children:"Use Python conventions for variable names and Python code in your YAML files"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/coding_style_guide/python",children:"Python style guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"organize-and-name-your-files",children:"Organize and name your files"}),"\n",(0,s.jsx)(n.h3,{id:"use-descriptive-package-names-include-state-and-forum-identifiers",children:"Use descriptive package names; include state and forum identifiers"}),"\n",(0,s.jsx)(n.p,{children:"For the Docassemble package, use names that help someone understand at a glance\nwhat your form does and where it can be used:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["include the form ",(0,s.jsx)(n.strong,{children:"function"})," and subject area. E.g., ",(0,s.jsx)(n.code,{children:"EvictionStay"})," not\njust ",(0,s.jsx)(n.code,{children:"Stay"})," or ",(0,s.jsx)(n.code,{children:"Motion"})]}),"\n",(0,s.jsxs)(n.li,{children:["include the state abbreviation if it is state-specific. E.g., ",(0,s.jsx)(n.code,{children:"MAEvictionStay"})]}),"\n",(0,s.jsxs)(n.li,{children:["include a forum abbreviation if a form with a similar name exists in a more\ncommon forum. E.g., ",(0,s.jsx)(n.code,{children:"MAAppealsEvictionStay"})," if you can request a stay in the\nAppeals and the trial courts. But: you likely don't need to specify\n",(0,s.jsx)(n.code,{children:"MATrialEvictionStay"})," if most of your forms are designed for the trial level."]}),"\n",(0,s.jsx)(n.li,{children:"unless you have a good reason, avoid internal court form reference numbers in\npackage names (you may want one interview to handle multiple forms in the\nfuture)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Descriptive names will help you and external parties looking for examples in the\nfuture locate your package on GitHub."}),"\n",(0,s.jsx)(n.h3,{id:"avoid-spaces-in-file-names-use-lowercase-letters",children:"Avoid spaces in file names; use lowercase letters"}),"\n",(0,s.jsxs)(n.p,{children:["Files in your Docassemble package, including YAML files, Python modules, and any\nstatic resource files or data sources, should all be be named without spaces.\nYou may choose to use ",(0,s.jsx)(n.code,{children:"snake_case"})," (underscores separating words) or ",(0,s.jsx)(n.code,{children:"kebab-case"}),"\n(hyphens separating words). Using snake case avoids problems with some\ncommand-line tools, as well as being more consistent with Python file name\nconventions, but one challenge is that ",(0,s.jsx)(n.code,{children:"snake_case"})," underscores can be hard to see\nin a file browser window."]}),"\n",(0,s.jsx)(n.p,{children:"Use lowercase letters in file names. Some file systems (Unix and Linux) are\ncase sensitive. Using a consistent case can reduce problems. Lower case is\nthe most commonly used convention."}),"\n",(0,s.jsx)(n.h3,{id:"avoid-using-leading-numbers-in-file-names",children:"Avoid using leading numbers in file names"}),"\n",(0,s.jsx)(n.p,{children:"Where possible, avoid using leading digits in file names. Leading digits\nare not valid in Python variable names, and it is often convenient to have\nvariable names and file names have matching prefixes."}),"\n",(0,s.jsx)(n.h3,{id:"use-descriptive-names-for-yaml-files",children:"Use descriptive names for YAML files"}),"\n",(0,s.jsx)(n.p,{children:'When you are editing a file, the context sometimes is missing in places that the\nfile name is displayed. Therefore, you should prefer using file names like\n"eviction_interview.yml" to just "interview.yml". Have the name describe the\nfunction of the file, and give it a name that might be meaningful and build\ntrust with your end user.'}),"\n",(0,s.jsxs)(n.p,{children:['Avoid using numbers, underscores, and other markers to indicate that you have a\n"final", "draft", etc. interview even during the editing process, as these have\na chance of getting leaked to the public. Instead, use ',(0,s.jsx)(n.a,{href:"/docs/github",children:"version\ncontrol"})," to track the history of your files as your project develops."]}),"\n",(0,s.jsx)(n.h3,{id:"use-a-small-number-of-yaml-files-for-each-project",children:"Use a small number of YAML files for each project"}),"\n",(0,s.jsx)(n.p,{children:'It can be a frustrating game of "which file is that in, again?" if you have too\nmany YAML files. Start out with just one YAML file for your interview. Start\nadding additional files when:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"you want to use an interview like a module inside another interview"}),"\n",(0,s.jsx)(n.li,{children:'your YAML file is thousands of lines long and you have clear functional\nseparation between each file. For example: code, style, questions; or\nmaybe "eviction", "appeals", "bad_housing_conditions".'}),"\n",(0,s.jsx)(n.li,{children:"you need to split work between multiple developers and you are running into\nchallenges with overwriting each others' work"}),"\n",(0,s.jsx)(n.li,{children:"you need non-technical members of your team to be able to make changes with\nconfidence. You might choose to separate code from question language, in that\ncase."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"use-clear-filenames-for-modular-interview-files",children:"Use clear filenames for modular interview files"}),"\n",(0,s.jsx)(n.p,{children:"Docassemble allows you to include one interview into another interview file.\nIf you want to design a file to be re-used:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"avoid putting any mandatory blocks in the file"}),"\n",(0,s.jsxs)(n.li,{children:["use the ",(0,s.jsxs)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#triggering-code-and-then-continuing-using-named-blocks",children:[(0,s.jsx)(n.code,{children:"named block"})," pattern"]})," for the ",(0,s.jsx)(n.code,{children:"interview order"})," block"]}),"\n",(0,s.jsxs)(n.li,{children:["reference your ",(0,s.jsx)(n.code,{children:"named block"})," in the file users will run"]}),"\n",(0,s.jsx)(n.li,{children:"describe the function of each file in the name"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We recommend the annotations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to_include"})," for the file with the interview logic, attachment block, and questions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"standalone"})," for a file that includes and then runs just one ",(0,s.jsx)(n.code,{children:"to_include"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"umbrella"})," for a file that generates multiple templates"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Filename"}),(0,s.jsx)(n.th,{children:"Purpose"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eviction_to_include.yml"}),(0,s.jsx)(n.td,{children:"The interview order block, questions, and content for one interview that cannot be run from this file."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eviction_standalone.yml"}),(0,s.jsx)(n.td,{children:"Include and run just one interview about evictions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eviction_umbrella.yml"}),(0,s.jsx)(n.td,{children:"Include and run multiple interviews related to eviction"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);