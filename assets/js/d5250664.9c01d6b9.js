"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5529],{7962:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(4848),o=s(8453);const i={id:"expenses",title:"Expenses: ALExpense and ALExpenseList\n",sidebar_label:"Expenses\n",slug:"/alincome/expenses"},l=void 0,a={id:"alincome/expenses",title:"Expenses: ALExpense and ALExpenseList\n",description:"The ALExpenseList is a class that helps you ask a user about their different expenses.",source:"@site/docs/alincome/expenses.md",sourceDirName:"alincome",slug:"/alincome/expenses",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/expenses",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alincome/expenses.md",tags:[],version:"current",frontMatter:{id:"expenses",title:"Expenses: ALExpense and ALExpenseList\n",sidebar_label:"Expenses\n",slug:"/alincome/expenses"},sidebar:"docs",previous:{title:"al_income 02",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/overview"},next:{title:"Jobs\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"}},r={},c=[{value:"Guiding Philosophy",id:"guiding-philosophy",level:2},{value:"ALExpense",id:"alexpense",level:2},{value:"ALExpenseList Tutorial",id:"alexpenselist-tutorial",level:2},{value:"Before",id:"before",level:3},{value:"Writing the interview",id:"writing-the-interview",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ALExpenseList"})," is a class that helps you ask a user about their different expenses."]}),"\n",(0,t.jsx)(n.h2,{id:"guiding-philosophy",children:"Guiding Philosophy"}),"\n",(0,t.jsx)(n.p,{children:"Certain court forms ask for a person's expenses as a proof of hardship or burden.\nIn designing this feature, we tried to reduce the number of questions a user needs\nto answer while still asking for specific enough expenses. We don't want to burden the user, but also\ndon't want the user forget to list any significant expenses they would have\nthat could prove financial burden."}),"\n",(0,t.jsx)(n.p,{children:'What expenses you want to initially ask about will depend on your community\'s needs.\nFor example, if your community lives in northern rural areas, they might have alternative\nheating needs, like wood or oil, and might not immediately associate those costs with\nstandard "utilities". If your community is in a flood plain, you might want to include flood\ninsurance as an option.'}),"\n",(0,t.jsx)(n.h2,{id:"alexpense",children:"ALExpense"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to jump right in, check out a ",(0,t.jsx)(n.a,{href:"https://apps-test.suffolklitlab.org/start/ALToolbox/al_income_demo?use_feature=ALExpense",children:"live demo of the ALExpense feature"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALExpense"})," is a class that represents an amount that re-occurs periodically, like a monthly\nutility bill, or weekly grocery expenses. It has a few attributes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expense.value"})," is the actual amount that is reoccurring. For example, someone's rental insurance\nmight always be $50 each month."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expense.times_per_year"})," is the number of times each year that this amount occurs. If someone has to pay their landlord twice a month, ",(0,t.jsx)(n.code,{children:"times_per_year"})," would be 24. This value can also be fractional if need be; an expense that only needs to be paid once every two years would have a ",(0,t.jsx)(n.code,{children:"times_per_year"})," of 0.5."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expense.source"})," is the source, or name, of the expense. Food expenses could have a source of ",(0,t.jsx)(n.code,{children:'"food"'}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expense.display_name"})," is the name of the source that you want to display to the user. This helps with multi-lingual interviews, where you can show the user the name of the expense, but your interview logic can still refer to a single canonical language name. It also helps add or change additional context to the name that you don't want to write out in your interview logic. For example, ",(0,t.jsx)(n.code,{children:"expense.source"})," could be ",(0,t.jsx)(n.code,{children:'"medical insurance"'}),", but ",(0,t.jsx)(n.code,{children:"expense.display_name"})," could be ",(0,t.jsx)(n.code,{children:'"Medical Insurance (including health, dental, and vision)"'}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You won't be using ",(0,t.jsx)(n.code,{children:"ALExpense"})," by itself often though; you'll need a list of expenses from the user, which we'll discuss next."]}),"\n",(0,t.jsx)(n.h2,{id:"alexpenselist-tutorial",children:"ALExpenseList Tutorial"}),"\n",(0,t.jsx)(n.p,{children:"Let's make a short interview that just asks for someone's expenses. These some pieces\nof code can be used in longer interviews as well."}),"\n",(0,t.jsx)(n.h3,{id:"before",children:"Before"}),"\n",(0,t.jsx)(n.p,{children:"Before you start, we'll assume that you:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["have access to a ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1#before-you-get-started",children:"developer account on a docassemble server"})]}),"\n",(0,t.jsxs)(n.li,{children:["have the ",(0,t.jsxs)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#run-the-installation-script",children:[(0,t.jsx)(n.code,{children:"AssemblyLine"})," package installed on your server"]}),", or have installed the ",(0,t.jsxs)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox",children:[(0,t.jsx)(n.code,{children:"ALToolbox"})," package"]})," separately."]}),"\n",(0,t.jsxs)(n.li,{children:["know ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#introduction-to-the-docassemble-playground",children:"what the playground is"})," and ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#hello-world",children:"how to use it to develop a docassemble interview"})]}),"\n",(0,t.jsxs)(n.li,{children:["know ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/yaml#documents",children:'what "blocks" are'})," in docassemble"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"writing-the-interview",children:"Writing the interview"}),"\n",(0,t.jsxs)(n.p,{children:["First, include the ",(0,t.jsx)(n.code,{children:"al_income.yml"})," YAML file in your interview. This will\nlet you use the al_income questions and python code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"include:\n  - docassemble.ALToolbox:al_income.yml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, create an ",(0,t.jsx)(n.code,{children:"ALExpenseList"})," using a ",(0,t.jsx)(n.code,{children:"objects"})," block."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'objects:\n  - expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")\n'})}),"\n",(0,t.jsxs)(n.admonition,{title:"Other objects",type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can also associate these expenses with ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#how",children:"another object"}),", say the main user of a form, like ",(0,t.jsx)(n.code,{children:"users[0]"}),", depending on how you organize your interview."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'objects:\n  - users[0].expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["Then to trigger gathering expenses, add the following ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block",children:"interview order code block"})," into your tutorial interview."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"mandatory: True\ncode: |\n  expenses.gathered\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will ask the user a few questions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["First, they will be asked what types of expenses they have. You can customize the options shown to the user by including\na definition of an ",(0,t.jsx)(n.code,{children:"expense_terms"})," variable in your interview. Since the default list is pretty long, we'll make it\nshorter in this tutorial by copying the below variable definition block:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# "!!omap" makes these terms ordered: \n# their order here will be their same order when shown to users.\nvariable name: expense_terms\ndata: !!omap\n  - rent: "Rent"\n  - mortgage: "Mortgage"\n  - food: "Food"\n  - utilities: "Utilities"\n  - clothing: "Clothing"\n  - credit cards: "Credit Card Payments"\n  - property tax: "Property Tax (State and Local)"\n  - other taxes: "Other taxes and fees related to your home"\n  - medical: "Medical costs (including insurance)"\n  - transportation: "Transportation costs"\n  - other: "Other"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here is what this question screen will look like:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"A screenshot of a webpage. At the top, it asks &quot;What kind of expenses do you have?&quot; There is a checkbox next to each option, like &quot;rent&quot; and &quot;food&quot;. There is a continue button at the bottom",src:s(6362).A+"",width:"650",height:"648"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"display_name"})}),(0,t.jsxs)(n.p,{children:["As mentioned in the previous section, ",(0,t.jsx)(n.code,{children:"expense_terms"})," provides the ",(0,t.jsx)(n.code,{children:"ALExpense"})," objects in your ",(0,t.jsx)(n.code,{children:"ALExpenseList"})," with the values for ",(0,t.jsx)(n.code,{children:"source"})," and for ",(0,t.jsx)(n.code,{children:"display_name"}),"; everything to the left of the colon on each line is ",(0,t.jsx)(n.code,{children:"source"})," and everything to the right is the longer ",(0,t.jsx)(n.code,{children:"display_name"}),"."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'For each expense that the user said they have, there will be one question screen,\nasking for how often they pay for that expense, and how much they pay. If they selected "other", they will also\nbe prompted to enter the name of that expense.'}),"\n",(0,t.jsxs)(n.p,{children:["If you want to change the options for how often they pay the amount, you can define a ",(0,t.jsx)(n.code,{children:"times_per_year_list"}),",\nsimilarly to the ",(0,t.jsx)(n.code,{children:"expense_terms"}),' above. By default, the list contains "weekly", "once every two weeks", "twice per month",\n"monthly", "once every 3 months", "once every 6 months", and "yearly". For this tutorial, let\'s make that list a little shorter.\nAdd the below block to your code:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'variable name: times_per_year_list\ndata:\n  - [52, "Weekly"]\n  - [26, "Once every two weeks"]\n  - [24, "Twice per month"]\n  - [12, "Monthly"]\n  - [1, "Yearly"]\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can show let the user review the expenses they've entered\nwith the following question block:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"id: expenses review\nquestion: |\n  Review your expenses\nsubquestion: |\n  Here is what you've told us about your monthly expenses. You can add more or continue\n  to the next question.\n\n  ${ expenses.table }\n\n  ${ expenses.add_action() }\nfield: review_expenses_screen\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Review screens",type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can also add the expense list to a ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#review",children:"review screen"})," with the below code:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"review:\n  - Edit: expenses.revisit\n    button: |\n      **Expenses**:\n\n      % for item in expenses:\n      * ${ item.display_name }: ${ currency(item.value) }\n      % endfor\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["That's all you need to gather the information, but the ALExpenseList class also\ngives you many ways to display the info. This is the same way of displaying the ",(0,t.jsx)(n.code,{children:"ALIncomeList"})," class, so if you've used ",(0,t.jsx)(n.code,{children:"ALIncomeList"})," before feel free to skim through this section."]}),"\n",(0,t.jsx)(n.p,{children:"Let's add one last screen to display our information. We'll\ndescribe what each line of code is doing on the screen."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'event: final_screen\nquestion: Summary of your expenses\nsubquestion: |\n  All of the types of expenses, which we call "sources": ${ expenses.sources() }\n\n  Sum of all of the expenses (by default, this is annually): ${ currency(expenses.total()) }\n\n  Sum of all of the expenses over a month: ${ currency(expenses.total(times_per_year=12)) }\n\n  Value of expenses with the source "rent": ${ currency(expenses.total(source="rent")) }\n\n  Sum of just some expenses: ${ currency(expenses.total(source=["rent", "food", "mortgage"])) }\n\n  Sum of all expenses except a specific source: ${ currency(expenses.total(exclude_source="food")) }\n'})}),"\n",(0,t.jsx)(n.p,{children:"With that last screen, we can change our mandatory code block above to now be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"mandatory: True\ncode: |\n  expenses.gathered\n  review_expenses\n  final_screen\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you can run through the interview!"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Click this section to see the whole interview"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'include:\n  - docassemble.ALToolbox:al_income.yml\n---\nobjects:\n  - expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")\n---\nvariable name: expense_terms\ndata: !!omap\n  - rent: "Rent"\n  - mortgage: "Mortgage"\n  - food: "Food"\n  - utilities: "Utilities"\n  - clothing: "Clothing"\n  - credit cards: "Credit Card Payments"\n  - property tax: "Property Tax (State and Local)"\n  - other taxes: "Other taxes and fees related to your home"\n  - medical: "Medical costs (including insurance)"\n  - transportation: "Transportation costs"\n  - other: "Other"\n---\nmandatory: True\ncode: |\n  expenses.gathered\n  review_expenses\n  final_screen\n---\nid: expenses review\nquestion: |\n  Review your expenses\nsubquestion: |\n  Here is what you\'ve told us about your monthly expenses. You can add more or continue\n  to the next question.\n\n  ${ expenses.table }\n\n  ${ expenses.add_action() }\nfield: review_expenses\n---\nevent: final_screen\nquestion: Last screen!\nsubquestion: |\n  All of the types of expenses, which we call "sources": ${ expenses.sources() }\n\n  Get the sum of all of the expenses (by default, this is annually): ${ currency(expenses.total()) }\n\n  Get the sum of all of the expenses over a month: ${ currency(expenses.total(times_per_year=12)) }\n\n  Get just the value of one expense: ${ currency(expenses.total(source="rent")) }\n\n  Get the sum of all of the expenses, of just some sources: ${ currency(expenses.total(source = ["rent", "food", "mortgage"])) }\n\n  Get the sum of all of the expenses, of everything but a specific source: ${ currency(expenses.total(exclude_source="food")) }\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["You'll likely want to display this information in a PDF or word template as well. ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/generated_yaml#attachment-block",children:"This section describing the Attachment block"})," will help with displaying information in the PDF, and ",(0,t.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/docx",children:"this page about working with DOCX files"})," will help DOCX users."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6362:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/alincome_expenses_checkboxes-580e071d980a32f9c8dadcbf02796006.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);