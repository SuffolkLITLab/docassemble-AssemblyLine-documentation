"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3304],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(r,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const s={id:"expenses",title:"Expenses: ALExpense and ALExpenseList\n",sidebar_label:"Expenses\n",slug:"/alincome/expenses"},i=void 0,l={unversionedId:"alincome/expenses",id:"alincome/expenses",title:"Expenses: ALExpense and ALExpenseList\n",description:"The ALExpenseList is a class that helps you ask a user about their different expenses.",source:"@site/docs/alincome/expenses.md",sourceDirName:"alincome",slug:"/alincome/expenses",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/expenses",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alincome/expenses.md",tags:[],version:"current",frontMatter:{id:"expenses",title:"Expenses: ALExpense and ALExpenseList\n",sidebar_label:"Expenses\n",slug:"/alincome/expenses"},sidebar:"docs",previous:{title:"al_income 02",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/overview"},next:{title:"Jobs\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"}},r={},p=[{value:"Guiding Philosophy",id:"guiding-philosophy",level:2},{value:"ALExpense",id:"alexpense",level:2},{value:"ALExpenseList Tutorial",id:"alexpenselist-tutorial",level:2},{value:"Before",id:"before",level:3},{value:"Writing the interview",id:"writing-the-interview",level:3}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ALExpenseList")," is a class that helps you ask a user about their different expenses."),(0,o.kt)("h2",{id:"guiding-philosophy"},"Guiding Philosophy"),(0,o.kt)("p",null,"Certain court forms ask for a person's expenses as a proof of hardship or burden.\nIn designing this feature, we tried to reduce the number of questions a user needs\nto answer while still asking for specific enough expenses. We don't want to burden the user, but also\ndon't want the user forget to list any significant expenses they would have\nthat could prove financial burden."),(0,o.kt)("p",null,'What expenses you want to initially ask about will depend on your community\'s needs.\nFor example, if your community lives in northern rural areas, they might have alternative\nheating needs, like wood or oil, and might not immediately associate those costs with\nstandard "utilities". If your community is in a flood plain, you might want to include flood\ninsurance as an option.'),(0,o.kt)("h2",{id:"alexpense"},"ALExpense"),(0,o.kt)("p",null,"If you want to jump right in, check out a ",(0,o.kt)("a",{parentName:"p",href:"https://apps-test.suffolklitlab.org/start/ALToolbox/al_income_demo?use_feature=ALExpense"},"live demo of the ALExpense feature"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ALExpense")," is a class that represents an amount that re-occurs periodically, like a monthly\nutility bill, or weekly grocery expenses. It has a few attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expense.value")," is the actual amount that is reoccurring. For example, someone's rental insurance\nmight always be $50 each month."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expense.times_per_year")," is the number of times each year that this amount occurs. If someone has to pay their landlord twice a month, ",(0,o.kt)("inlineCode",{parentName:"li"},"times_per_year")," would be 24. This value can also be fractional if need be; an expense that only needs to be paid once every two years would have a ",(0,o.kt)("inlineCode",{parentName:"li"},"times_per_year")," of 0.5."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expense.source")," is the source, or name, of the expense. Food expenses could have a source of ",(0,o.kt)("inlineCode",{parentName:"li"},'"food"'),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expense.display_name")," is the name of the source that you want to display to the user. This helps with multi-lingual interviews, where you can show the user the name of the expense, but your interview logic can still refer to a single canonical language name. It also helps add or change additional context to the name that you don't want to write out in your interview logic. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"expense.source")," could be ",(0,o.kt)("inlineCode",{parentName:"li"},'"medical insurance"'),", but ",(0,o.kt)("inlineCode",{parentName:"li"},"expense.display_name")," could be ",(0,o.kt)("inlineCode",{parentName:"li"},'"Medical Insurance (including health, dental, and vision)"'),".")))),(0,o.kt)("p",null,"You won't be using ",(0,o.kt)("inlineCode",{parentName:"p"},"ALExpense")," by itself often though; you'll need a list of expenses from the user, which we'll discuss next."),(0,o.kt)("h2",{id:"alexpenselist-tutorial"},"ALExpenseList Tutorial"),(0,o.kt)("p",null,"Let's make a short interview that just asks for someone's expenses. These some pieces\nof code can be used in longer interviews as well."),(0,o.kt)("h3",{id:"before"},"Before"),(0,o.kt)("p",null,"Before you start, we'll assume that you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"have access to a ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1#before-you-get-started"},"developer account on a docassemble server")),(0,o.kt)("li",{parentName:"ul"},"have the ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#run-the-installation-script"},(0,o.kt)("inlineCode",{parentName:"a"},"AssemblyLine")," package installed on your server"),", or have installed the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox"},(0,o.kt)("inlineCode",{parentName:"a"},"ALToolbox")," package")," separately."),(0,o.kt)("li",{parentName:"ul"},"know ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#introduction-to-the-docassemble-playground"},"what the playground is")," and ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#hello-world"},"how to use it to develop a docassemble interview")),(0,o.kt)("li",{parentName:"ul"},"know ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/yaml#documents"},'what "blocks" are')," in docassemble")),(0,o.kt)("h3",{id:"writing-the-interview"},"Writing the interview"),(0,o.kt)("p",null,"First, include the ",(0,o.kt)("inlineCode",{parentName:"p"},"al_income.yml")," YAML file in your interview. This will\nlet you use the al_income questions and python code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"include:\n  - docassemble.ALToolbox:al_income.yml\n")),(0,o.kt)("p",null,"Then, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALExpenseList")," using a ",(0,o.kt)("inlineCode",{parentName:"p"},"objects")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'objects:\n  - expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")\n')),(0,o.kt)("admonition",{title:"Other objects",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also associate these expenses with ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#how"},"another object"),", say the main user of a form, like ",(0,o.kt)("inlineCode",{parentName:"p"},"users[0]"),", depending on how you organize your interview."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'objects:\n  - users[0].expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")\n'))),(0,o.kt)("p",null,"Then to trigger gathering expenses, add the following ",(0,o.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block"},"interview order code block")," into your tutorial interview."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"mandatory: True\ncode: |\n  expenses.gathered\n")),(0,o.kt)("p",null,"This will ask the user a few questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, they will be asked what types of expenses they have. You can customize the options shown to the user by including\na definition of an ",(0,o.kt)("inlineCode",{parentName:"p"},"expense_terms")," variable in your interview. Since the default list is pretty long, we'll make it\nshorter in this tutorial by copying the below variable definition block:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# "!!omap" makes these terms ordered: \n# their order here will be their same order when shown to users.\nvariable name: expense_terms\ndata: !!omap\n  - rent: "Rent"\n  - mortgage: "Mortgage"\n  - food: "Food"\n  - utilities: "Utilities"\n  - clothing: "Clothing"\n  - credit cards: "Credit Card Payments"\n  - property tax: "Property Tax (State and Local)"\n  - other taxes: "Other taxes and fees related to your home"\n  - medical: "Medical costs (including insurance)"\n  - transportation: "Transportation costs"\n  - other: "Other"\n')),(0,o.kt)("p",{parentName:"li"},"Here is what this question screen will look like:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"A screenshot of a webpage. At the top, it asks &quot;What kind of expenses do you have?&quot; There is a checkbox next to each option, like &quot;rent&quot; and &quot;food&quot;. There is a continue button at the bottom",src:n(4435).Z,width:"650",height:"648"})),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"display_name")),(0,o.kt)("p",{parentName:"admonition"},"As mentioned in the previous section, ",(0,o.kt)("inlineCode",{parentName:"p"},"expense_terms")," provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALExpense")," objects in your ",(0,o.kt)("inlineCode",{parentName:"p"},"ALExpenseList")," with the values for ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and for ",(0,o.kt)("inlineCode",{parentName:"p"},"display_name"),"; everything to the left of the colon on each line is ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and everything to the right is the longer ",(0,o.kt)("inlineCode",{parentName:"p"},"display_name"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'For each expense that the user said they have, there will be one question screen,\nasking for how often they pay for that expense, and how much they pay. If they selected "other", they will also\nbe prompted to enter the name of that expense.'),(0,o.kt)("p",{parentName:"li"},"If you want to change the options for how often they pay the amount, you can define a ",(0,o.kt)("inlineCode",{parentName:"p"},"times_per_year_list"),",\nsimilarly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"expense_terms"),' above. By default, the list contains "weekly", "once every two weeks", "twice per month",\n"monthly", "once every 3 months", "once every 6 months", and "yearly". For this tutorial, let\'s make that list a little shorter.\nAdd the below block to your code:'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'variable name: times_per_year_list\ndata:\n  - [52, "Weekly"]\n  - [26, "Once every two weeks"]\n  - [24, "Twice per month"]\n  - [12, "Monthly"]\n  - [1, "Yearly"]\n')))),(0,o.kt)("p",null,"You can show let the user review the expenses they've entered\nwith the following question block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"id: expenses review\nquestion: |\n  Review your expenses\nsubquestion: |\n  Here is what you've told us about your monthly expenses. You can add more or continue\n  to the next question.\n\n  ${ expenses.table }\n\n  ${ expenses.add_action() }\nfield: review_expenses_screen\n")),(0,o.kt)("admonition",{title:"Review screens",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also add the expense list to a ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#review"},"review screen")," with the below code:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"review:\n  - Edit: expenses.revisit\n    button: |\n      **Expenses**:\n\n      % for item in expenses:\n      * ${ item.display_name }: ${ currency(item.value) }\n      % endfor\n"))),(0,o.kt)("p",null,"That's all you need to gather the information, but the ALExpenseList class also\ngives you many ways to display the info. This is the same way of displaying the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALIncomeList")," class, so if you've used ",(0,o.kt)("inlineCode",{parentName:"p"},"ALIncomeList")," before feel free to skim through this section."),(0,o.kt)("p",null,"Let's add one last screen to display our information. We'll\ndescribe what each line of code is doing on the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'event: final_screen\nquestion: Summary of your expenses\nsubquestion: |\n  All of the types of expenses, which we call "sources": ${ expenses.sources() }\n\n  Sum of all of the expenses (by default, this is annually): ${ currency(expenses.total()) }\n\n  Sum of all of the expenses over a month: ${ currency(expenses.total(times_per_year=12)) }\n\n  Value of expenses with the source "rent": ${ currency(expenses.total(source="rent")) }\n\n  Sum of just some expenses: ${ currency(expenses.total(source=["rent", "food", "mortgage"])) }\n\n  Sum of all expenses except a specific source: ${ currency(expenses.total(exclude_source="food")) }\n')),(0,o.kt)("p",null,"With that last screen, we can change our mandatory code block above to now be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"mandatory: True\ncode: |\n  expenses.gathered\n  review_expenses\n  final_screen\n")),(0,o.kt)("p",null,"Now you can run through the interview!"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click this section to see the whole interview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'include:\n  - docassemble.ALToolbox:al_income.yml\n---\nobjects:\n  - expenses: ALExpenseList.using(auto_gather=False, complete_attribute="exists")\n---\nvariable name: expense_terms\ndata: !!omap\n  - rent: "Rent"\n  - mortgage: "Mortgage"\n  - food: "Food"\n  - utilities: "Utilities"\n  - clothing: "Clothing"\n  - credit cards: "Credit Card Payments"\n  - property tax: "Property Tax (State and Local)"\n  - other taxes: "Other taxes and fees related to your home"\n  - medical: "Medical costs (including insurance)"\n  - transportation: "Transportation costs"\n  - other: "Other"\n---\nmandatory: True\ncode: |\n  expenses.gathered\n  review_expenses\n  final_screen\n---\nid: expenses review\nquestion: |\n  Review your expenses\nsubquestion: |\n  Here is what you\'ve told us about your monthly expenses. You can add more or continue\n  to the next question.\n\n  ${ expenses.table }\n\n  ${ expenses.add_action() }\nfield: review_expenses\n---\nevent: final_screen\nquestion: Last screen!\nsubquestion: |\n  All of the types of expenses, which we call "sources": ${ expenses.sources() }\n\n  Get the sum of all of the expenses (by default, this is annually): ${ currency(expenses.total()) }\n\n  Get the sum of all of the expenses over a month: ${ currency(expenses.total(times_per_year=12)) }\n\n  Get just the value of one expense: ${ currency(expenses.total(source="rent")) }\n\n  Get the sum of all of the expenses, of just some sources: ${ currency(expenses.total(source = ["rent", "food", "mortgage"])) }\n\n  Get the sum of all of the expenses, of everything but a specific source: ${ currency(expenses.total(exclude_source="food")) }\n'))),(0,o.kt)("p",null,"You'll likely want to display this information in a PDF or word template as well. ",(0,o.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/generated_yaml#attachment-block"},"This section describing the Attachment block")," will help with displaying information in the PDF, and ",(0,o.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/docx"},"this page about working with DOCX files")," will help DOCX users."))}u.isMDXComponent=!0},4435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alincome_expenses_checkboxes-580e071d980a32f9c8dadcbf02796006.jpg"}}]);