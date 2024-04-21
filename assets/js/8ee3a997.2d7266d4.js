"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9192],{3734:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=o(4848),i=o(8453);const t={id:"itemizedjobs",title:"Itemized Jobs: ALItemizedJob and ALItemizedJobList\n",sidebar_label:"Itemized Jobs\n",slug:"/alincome/itemizedjobs"},l=void 0,a={id:"alincome/itemizedjobs",title:"Itemized Jobs: ALItemizedJob and ALItemizedJobList\n",description:"Sometimes, you'll need detailed information about a person's",source:"@site/docs/alincome/itemizedjobs.md",sourceDirName:"alincome",slug:"/alincome/itemizedjobs",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/itemizedjobs",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alincome/itemizedjobs.md",tags:[],version:"current",frontMatter:{id:"itemizedjobs",title:"Itemized Jobs: ALItemizedJob and ALItemizedJobList\n",sidebar_label:"Itemized Jobs\n",slug:"/alincome/itemizedjobs"},sidebar:"docs",previous:{title:"Jobs\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"},next:{title:"business_days",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/business_days"}},r={},c=[{value:"ALItemizedJob",id:"alitemizedjob",level:2},{value:"ALItemizedJobList Tutorial",id:"alitemizedjoblist-tutorial",level:2},{value:"Before",id:"before",level:3},{value:"Writing the interview",id:"writing-the-interview",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sometimes, you'll need detailed information about a person's\nincome at the same job, including how much income comes from tips, or\nhow much is deducted from their paycheck for different reasons. ",(0,s.jsx)(n.code,{children:"ALItemizedJob"})," is custom built for this purpose."]}),"\n",(0,s.jsx)(n.h2,{id:"alitemizedjob",children:"ALItemizedJob"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to jump right in, check out a ",(0,s.jsx)(n.a,{href:"https://apps-test.suffolklitlab.org/start/ALToolbox/al_income_demo?use_feature=ALItemizedJob",children:"live demo of the ALItemizedJob feature"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Sometimes, courts will ask for specific pieces of information about a person's pay, such as how many tips they received, or how much is deducted from their pay for health insurance. To keep track of all of those pieces of information for several jobs, you, the interview author,\nwill want to use a job that can handle itemizing different types of incomes and deductions for the same type of job."}),"\n",(0,s.jsxs)(n.p,{children:["This is not the class that you should reach for first. You should\ncheck and see if the ",(0,s.jsx)(n.a,{href:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs",children:"ALJob"})," class satisfies your needs, since it asks the user far fewer questions than the ALItemizedJob."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to use it, a main benefit is the fact that the ALItemizedJobList\nwill do all of the calculations needed over multiple jobs to get a single answer for monthly pay, even if the jobs have different pay schedules, and have multiple incomes per job that come at different rates."}),"\n",(0,s.jsx)(n.h2,{id:"alitemizedjoblist-tutorial",children:"ALItemizedJobList Tutorial"}),"\n",(0,s.jsx)(n.h3,{id:"before",children:"Before"}),"\n",(0,s.jsx)(n.p,{children:"Before you start, we'll assume that you"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["have access to a ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1#before-you-get-started",children:"developer account on a docassemble server"})]}),"\n",(0,s.jsxs)(n.li,{children:["have the ",(0,s.jsxs)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#run-the-installation-script",children:[(0,s.jsx)(n.code,{children:"ALToolbox"})," package installed on your server"]})]}),"\n",(0,s.jsxs)(n.li,{children:["know ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#introduction-to-the-docassemble-playground",children:"what the playground is"})," and ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#hello-world",children:"how to use it to develop a docassemble interview"})]}),"\n",(0,s.jsxs)(n.li,{children:["know ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/yaml#documents",children:'what "blocks" are'})," in docassemble"]}),"\n",(0,s.jsxs)(n.li,{children:["have looked at the ",(0,s.jsxs)(n.a,{href:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs",children:["the ",(0,s.jsx)(n.code,{children:"ALJob"})," tutorial"]})," and decided you need to handle more complicated information"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"writing-the-interview",children:"Writing the interview"}),"\n",(0,s.jsxs)(n.p,{children:["First, include the ",(0,s.jsx)(n.code,{children:"al_income.yml"})," YAML file in your interview. This will let you use the al_income questions and python code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"include:\n  - docassemble.ALToolbox:al_income.yml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, create an ",(0,s.jsx)(n.code,{children:"ALItemizedJobList"})," using a ",(0,s.jsx)(n.code,{children:"objects"})," block."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"objects:\n  - jobs: ALItemizedJobList.using(complete_attribute='complete', ask_number=True)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, add a ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block",children:"interview order code block"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"mandatory: True\ncode: |\n  jobs.gather()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The interview will ask how many jobs the user has, and then for each job, will ask them:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"their job title. This is mostly for their benefit, and is the simplest way of asking for the information."}),"\n",(0,s.jsx)(n.li,{children:'information about their employer. They can mark if they are self-employed, and the module will mark the employers name as\n"self-employed".'}),"\n",(0,s.jsx)(n.li,{children:"if it's hourly, and how often the users receives payment"}),"\n",(0,s.jsxs)(n.li,{children:["Itemized information from their paystub (hence the name of the class!).\nBy default this includes gross wages, federal taxes, and insurance deductions.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"users can also enter different sources of income and deductions, that\ncan happen on different time periods from their standard pay period, like yearly bonuses or weekly tips."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can let the user review their answers with the following screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"id: job review\nquestion: |\n  Review your jobs\nsubquestion: |\n  Here is what you've told us about your jobs. You can add more or continue\n  to the next question.\n\n  ${ jobs.table }\n\n  ${ jobs.add_action() }\nfield: review_jobs\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Review screens",type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can also add the job list to a ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#review",children:"review screen"})," with the below code:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"review:\n  - Edit: jobs.revisit\n    button: |\n      **Jobs**:\n\n      % for job in jobs:\n      * ${ job.source } at ${ job.employer.name }\n      % endfor\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"Once you have this information, you have many different ways to display it."}),"\n",(0,s.jsx)(n.p,{children:"Let's add one last screen to display our information. We'll\ndescribe what each line of code is doing on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'event: final_screen\nquestion: Summary of your jobs\nsubquestion: |\n  All of itemized value names, which we call "sources": ${ jobs.sources() }\n\n  Itemized deduction names: ${ jobs.sources(which_side="deductions")}\n\n  Itemized income names: ${ jobs.sources(which_side="incomes") }\n\n  Annual gross income from all jobs: ${ currency(jobs.total()) }\n\n  Annual net income (gross - deductions) from all jobs: ${ currency(jobs.net_total()) }\n\n  Monthly gross income from all jobs: ${ currency(jobs.total(times_per_year=12)) }\n\n  Annual gross income from the first job listed: ${ currency(jobs[0].total()) }\n\n  Employer information from the first job: ${ jobs[0].employer_name_address_phone() }\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add the screens we just made to the mandatory code block above, so it looks like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"mandatory: True\ncode: |\n  jobs.gather()\n  review_jobs\n  final_screen\n"})}),"\n",(0,s.jsx)(n.p,{children:"And you can now run through the interview!"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Click this section to see the whole interview"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'---\ninclude:\n  - al_income.yml\n---\nobjects:\n  - jobs: ALItemizedJobList.using(complete_attribute=\'complete\', ask_number=True)\n---\nmandatory: True\ncode: |\n  jobs.gather()\n  review_jobs\n  final_screen\n---\nid: job review\nquestion: |\n  Review your jobs\nsubquestion: |\n  Here is what you\'ve told us about your jobs. You can add more or continue\n  to the next question.\n\n  ${ jobs.table }\n\n  ${ jobs.add_action() }\nfield: review_jobs\n---\nevent: final_screen\nquestion: Summary of your jobs\nsubquestion: |\n  All of itemized value names, which we call "sources": ${ jobs.sources() }\n\n  Itemized deduction names: ${ jobs.sources(which_side="deductions")}\n\n  Itemized income names: ${ jobs.sources(which_side="incomes") }\n\n  Annual gross income from all jobs: ${ currency(jobs.total()) }\n\n  Annual net income (gross - deductions) from all jobs: ${ currency(jobs.net_total()) }\n\n  Monthly gross income from all jobs: ${ currency(jobs.total(times_per_year=12)) }\n\n  Annual gross income from the first job listed: ${ currency(jobs[0].total()) }\n\n  Employer information from the first job: ${ jobs[0].employer_name_address_phone() }\n'})})]}),"\n",(0,s.jsxs)(n.p,{children:["You'll likely want to display this information in a PDF or word template as well. ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/generated_yaml#attachment-block",children:"This section describing the Attachment block"})," will help with displaying information in the PDF, and ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/docx",children:"this page about working with DOCX files"})," will help DOCX users."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var s=o(6540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);