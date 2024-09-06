"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[4210],{808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(4848),a=t(8453);const i={id:"answer_set_intakes",title:"Using Answer Sets to capture and re-use client information\n",sidebar_label:"Using Answer Sets to capture and re-use client information\n",slug:"/framework/answer_set_intakes"},l=void 0,r={id:"framework/answer_set_intakes",title:"Using Answer Sets to capture and re-use client information\n",description:"Overview",source:"@site/docs/framework/answer_set_intakes.md",sourceDirName:"framework",slug:"/framework/answer_set_intakes",permalink:"/docs/framework/answer_set_intakes",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/answer_set_intakes.md",tags:[],version:"current",frontMatter:{id:"answer_set_intakes",title:"Using Answer Sets to capture and re-use client information\n",sidebar_label:"Using Answer Sets to capture and re-use client information\n",slug:"/framework/answer_set_intakes"},sidebar:"docs",previous:{title:"Answer Sets: save and reuse answers across interviews\n",permalink:"/docs/framework/answer_sets"},next:{title:"Dynamic navigation sections",permalink:"/docs/framework/navigation"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating the intake interview",id:"creating-the-intake-interview",level:2},{value:"Making use of the saved answers",id:"making-use-of-the-saved-answers",level:2},{value:"Download the example",id:"download-the-example",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"You can use the Answer Set feature to set up a simple client intake workflow.\nWhen a client uses the intake interview, you can save their answers. Then you can\nsetup a second interview that retrieves the same answers and reuses them in new template."}),"\n",(0,s.jsxs)(n.p,{children:["You can combine this with Docassemble's ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#catchall",children:(0,s.jsx)(n.code,{children:"DACatchAll"})}),"\nfeature to create a general purpose system that allows you to use client information in\none-off letters and simple documents."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-the-intake-interview",children:"Creating the intake interview"}),"\n",(0,s.jsx)(n.p,{children:"The interview below leverages the Assembly Line shared question library to create a\nvery simple new client questionnaire:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'---\ninclude:\n  - docassemble.AssemblyLine:assembly_line.yml\n---\nmetadata:\n  title: |\n    New client questionnaire\n---\nmandatory: True\ncode: |\n  why_want_to_meet\n  users[0].name.first\n  users[0].address.address\n  children.gather()\n  answers_saved\n  outro_message\n---\ncode: |\n  # The user\'s answers are saved to the "saved session" area\n  save_interview_answers(filename="docassemble.AssemblyLine:al_saved_sessions_store.yml", metadata = {"title": str(users) } )\n  answers_saved = True\n---\nid: welcome\nquestion: |\n  New client questionnaire\nsubquestion: |\n  Tell us a little about yourself before our first meeting.\nfields:\n  - What do you want to meet with us about?: why_want_to_meet\n    datatype: area\n---\nevent: outro_message\nquestion: |\n  Thanks, we will be in touch!\n'})}),"\n",(0,s.jsx)(n.p,{children:"At line 20, the interview answers are saved to the system-wide location for\nanswer sets. You may want to customize this location if you have several\ninterviews on your server."}),"\n",(0,s.jsx)(n.h2,{id:"making-use-of-the-saved-answers",children:"Making use of the saved answers"}),"\n",(0,s.jsx)(n.p,{children:"The interview below allows a user to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Upload a template that uses Jinja2 syntax"}),"\n",(0,s.jsx)(n.li,{children:"Select from a list of answer sets on the server"}),"\n",(0,s.jsx)(n.li,{children:"Fills in any answers that are contained in the answer set"}),"\n",(0,s.jsx)(n.li,{children:"Lets the interview user answer any questions that still remain."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'---\ninclude:\n  - docassemble.AssemblyLine:assembly_line.yml\n---\nmetadata:\n  title: |\n    Fill in the blanks\n---\nfeatures:\n  use catchall: True\n---\nmandatory: True\ncode: |\n  template_to_fill  \n  if not start_fresh:\n    load_existing_answers\n  download_template\n---\nid: upload template\nquestion: |\n  Upload a template to fill in\nsubquestion: |\n  You can select an existing set of answers, like from an intake interview, to use \n  to complete the template. If you add new fields to the template,\n  you will get a very basic chance to provide an answer to the new field.\nfields:\n  - Upload a DOCX template file: template_to_fill\n    datatype: file\n    accept: |\n      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"\n---\nid: choose an answer set\nquestion: |\n  Choose an answer set\nfields:\n  - Start fresh: start_fresh\n    datatype: yesno\n    disable others: True\n  - Select one: selected_answers\n    datatype: combobox\n    code: |\n      [{idx: answer["title"]} for idx, answer in enumerate(all_answer_sets)]\n    required: False      \n---\nid: download template\nevent: download_template\nquestion: |\n  Your template is ready\nattachment: \n  docx template file:\n    code: |\n      template_to_fill[0]\n---\ncode: |\n  if user_has_privilege([\'developer\', \'admin\']):\n    all_answer_sets = get_saved_interview_list(filename="docassemble.AssemblyLine:al_saved_sessions_store.yml", user_id="all", exclude_newly_started_sessions=False)\n  else:\n    all_answer_sets = get_saved_interview_list(filename="docassemble.AssemblyLine:al_saved_sessions_store.yml", exclude_newly_started_sessions=False)\n---\ncode: |\n  load_interview_answers(all_answer_sets[int(selected_answers)]["filename"], all_answer_sets[int(selected_answers)]["key"])\n  load_existing_answers = True\n---\n###################### Catchall questions ###########################################\n---\ngeneric object: DACatchAll\nquestion: |\n  What is ${ x.object_name() }?\nfields:\n  - no label: x.value\nvalidation code: |\n  define(x.instanceName, x.value)\n---\nif: |\n  x.context == \'float\'\ngeneric object: DACatchAll\nquestion: |\n  How much is ${ x.object_name() }?\nfields:\n  - Amount: x.value\n    datatype: currency\nvalidation code: |\n  define(x.instanceName, x.value)\n---\nif: |\n  x.data_type_guess() == \'bool\'\ngeneric object: DACatchAll\nquestion: |\n  ${x.object_name()}?\nyesno: x.value\nvalidation code: |\n  define(x.instanceName, x.value)\n---\nif: |\n  x.object_name().endswith(\'date\')\ngeneric object: DACatchAll\nquestion: |\n  ${x.object_name()}?\nfields:\n  - Date: x.value\n    datatype: date\nvalidation code: |\n  define(x.instanceName, x.value)\n'})}),"\n",(0,s.jsx)(n.p,{children:"At line 56, the interview gets a list of all answer sets on the server.\nIf the user is an administrator or developer, it includes all answer sets.\nIf the user is not privileged, it will only include answer sets created by the\ninterview's user."}),"\n",(0,s.jsx)(n.p,{children:"At line 61, the selected answers are actually loaded into the interview."}),"\n",(0,s.jsx)(n.h2,{id:"download-the-example",children:"Download the example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LemmaLegalConsulting/docassemble-IntakeAndReuse",children:"Demonstration repository"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);