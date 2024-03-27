"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[991],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(p,s(s({ref:t},u),{},{components:n})):a.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(7462),i=(n(7294),n(4137));const o={id:"efiling_case_search",title:"E-filing: Case Search\n",sidebar_label:"Case Search",slug:"/efiling/case_search"},s=void 0,r={unversionedId:"efiling/efiling_case_search",id:"efiling/efiling_case_search",title:"E-filing: Case Search\n",description:"This guide will help you integrate a case search feature into",source:"@site/docs/efiling/case_search.md",sourceDirName:"efiling",slug:"/efiling/case_search",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/case_search",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/efiling/case_search.md",tags:[],version:"current",frontMatter:{id:"efiling_case_search",title:"E-filing: Case Search\n",sidebar_label:"Case Search",slug:"/efiling/case_search"},sidebar:"docs",previous:{title:"Integrating Docassemble interviews with e-filing",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/docassemble"},next:{title:"Monitoring",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/monitoring"}},l={},c=[{value:"Before starting",id:"before-starting",level:2},{value:"Steps",id:"steps",level:2},{value:"Creating a interview",id:"creating-a-interview",level:3},{value:"Using case search data in your Assembly Line interview",id:"using-case-search-data-in-your-assembly-line-interview",level:3}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you integrate a case search feature into\nyour interview, helping your users find their cases in their\ncourt's e-filing system."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This e-filing functionality is being updated often, so this documentation might be out of date.\nIf anything is incorrect or doesn't work as expected, feel free to email us at\n",(0,i.kt)("a",{parentName:"p",href:"mailto:massaccess@suffolk.edu"},"massaccess@suffolk.edu"),".")),(0,i.kt)("p",null,"This example interview will be straight-forward; it will allow users\nto search for a case, and will display all of the available information\nabout the found case. You will want to use that data to automatically\nfill in information for the user in your interview later, but that won't be covered here."),(0,i.kt)("h2",{id:"before-starting"},"Before starting"),(0,i.kt)("p",null,"Before staring this guide you should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"have access to a docassemble server for developing docassemble interviews",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration"},"EFSPIntegration package")," should be installed on the server"))),(0,i.kt)("li",{parentName:"ul"},"have setup your server to be able to e-file",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"first, you can contact us for access to the EFSP server.\nWe aren't yet making access publicly available, but\nwill include an interest form here when we do."),(0,i.kt)("li",{parentName:"ul"},"second, you can follow the instructions in ",(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/efiling/docassemble#server-setup"},'"Server Setup"')," to setup your server's\nconfiguration."))),(0,i.kt)("li",{parentName:"ul"},"know about ",(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/efiling/tyler-codes"},"Tyler e-filing codes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note: this tutorial is only partially written, but it will be completed soon!")))),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"creating-a-interview"},"Creating a interview"),(0,i.kt)("p",null,"Let's first start out with the simplest possible interview:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'include:\n  - docassemble.AssemblyLine:assembly_line.yml\n  - docassemble.EFSPIntegration:case_search.yml\n---\nobjects:\n  - case_search:  EFCaseSearch.using(court_id="adams")\n---\ncode: |\n  jurisdiction_id = \'illinois\'\n  trial_court = "Adams"\n---\nevent: show_all_info\nquestion: The found case\nsubquestion: |\n  ${ pretty_display(case_search.found_caseas_serializable()) }\n---\nmandatory: True\ncode: |\n  tyler_login\n  case_search.case_was_found\n  show_all_info\n')),(0,i.kt)("p",null,"Start off by hard coding a few pieces of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use the `illinois' jurisdiction. Currently, the E-file proxy server is only running in production in Illinois, but we have access to the staging servers in Massachusetts and Texas."),(0,i.kt)("li",{parentName:"ul"},"file in the \"adams\" county court in Illinois. Handling court\nhierarchies is a complicated task, and something that the AssemblyLine can't do for you. You'll need to make your own way to let users select what court they want to file in depending on your jurisdiction. See ",(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_courts"},"our documentation for ",(0,i.kt)("inlineCode",{parentName:"a"},"al_courts"))," for some possible ideas.")),(0,i.kt)("p",null,"You should be able to run the interview now. If this is the first time you're running the interview on the server, you will be asked to log in to eFileIL. If you don't yet have an account, you should be able to make a new pro-se user account with eFileIL by following the links to make a new account on the page. Once you've logged in on the server, subsequent runs of the interview won't ask you to log in, until the eFileIL token expires and you have to log in again, in about 1-2 hours."),(0,i.kt)("p",null,"The next page will ask if you want to search by party name or by case number."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A screenshot of the case search screen. The title says &quot;Find your case in Adams&quot;, followed by the question &quot;How do you want to find your case?&quot; and the options &quot;Party name&quot; and &quot;Case number&quot;.",src:n(7798).Z,width:"328",height:"300"})),(0,i.kt)("p",null,'For now, let\'s search by case number. If you select "case number", and then enter the case number "2022SC9",\nyou should find a case, John Smith vs. Bob Doe, a small claims case.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'This case search worked at the time of writing (February 28th, 2023). However,\ncourts have removed older cases from their staging servers before, and it is\npossible that this search won\'t work in the future. You can try searching\ncommon names like "John Brown" or "John Smith", or you could ask a court\nofficial if they are able to provide you with some testing case numbers from\ntheir staging server.'),(0,i.kt)("p",{parentName:"admonition"},"We recommend that you build a working relationship with your local courts so\nthey can help you with details like this.")),(0,i.kt)("p",null,'You can also go back and search by "Party name" instead. You can enter the name "John Smith",\npress continue, and wait. Searching by party name takes longer on eFileIL\'s server, especially on the staging server, you might have to wait around 30 seconds. Once the search completes, you\nwill see that there are many cases involving John Smith. For speed purposes, the EFSP library\nonly gets information about the first 8, and let\'s you click the next button to see the next 8.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A screenshot of the &quot;case search results&quot; page. At the top it says &quot;We found 25 cases. Here are 1 to 8:&quot;, with a &quot;next&quot; button below it. There is a bulleted list showing 8 cases involving John Smith and various other parties.",src:n(167).Z,width:"667",height:"554"})),(0,i.kt)("p",null,"If you select the John Smith vs. Bob Doe case, you then see the last page in the interview YAML; ",(0,i.kt)("inlineCode",{parentName:"p"},"show_all_info"),". This page shows all of the information that you, the interview author, can use\nfrom the ",(0,i.kt)("inlineCode",{parentName:"p"},"case_search.found_case"),", the variable for the found case. The ",(0,i.kt)("inlineCode",{parentName:"p"},"details")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"case_details")," attributes aren't stable APIs, but you might find the following attributes useful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"court_id"),', the court that this case came from. Some courts have sub-courts that handle\nspecific case types, so even though you searched for cases in the "adams" court, you\nshould use this value for the rest of the interview.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"participants"),", an ALPeopleList object that has all of the participants in the case on both sides.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"each participant has a ",(0,i.kt)("inlineCode",{parentName:"li"},"party_type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"party_type_name"),", i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"participants[0].party_type_name"),' might be "Plaintiff/Petitioner". These values are ',(0,i.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/efiling/tyler-codes"},"Tyler e-filing codes")," that are set by the court."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attorneys")," is a dictionary that contains any attorneys that are a part of the case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"efile_case_type")," is the Tyler e-filing code for the type of case. This is useful if your interview\nis only relevant for certain case types. If users don't or can't fill out your form for their case, you can send users to a page that says they don't need this form and why."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docket_number"),' has the case number of the court. "Docket number" is the term that Massachusetts\nuses for a unique number assigned to each case by the court. You might know it as "case number".\nYou might see it by either name in the ',(0,i.kt)("inlineCode",{parentName:"li"},"EFSPIntegration")," package.")),(0,i.kt)("h3",{id:"using-case-search-data-in-your-assembly-line-interview"},"Using case search data in your Assembly Line interview"),(0,i.kt)("p",null,"You are likely using the ",(0,i.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/generating_code"},"ALWeaver")," and the rest of the Assembly Line framework\nin your docassemble interview, and you will want to put this information from the case search into\nvariables that your interview knows about, like ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"other_parties"),". To do this, we can add\nsome more code to the above example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncode: |\n  target_case = case_search\n---\nevent: show_user_info\nquestion: The found participants\nsubquestion: |\n  Users: ${ users }\n\n  Other parties: ${ other_parties }\n---\n")),(0,i.kt)("p",null,"You can then change the mandatory block to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"mandatory: True\ncode: |\n  tyler_login\n  case_search.case_was_found\n  show_all_info\n  add_existing_users\n  show_user_info\n")),(0,i.kt)("p",null,"Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"target_case")," variable lets the system know that this case search is the one you want to use to fill in ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"other_parties")," (in an appeals court, you could be searching in a lower court, or searching for existing appeals\ncourt cases). Including the ",(0,i.kt)("inlineCode",{parentName:"p"},"add_existing_users")," line triggers code in the EFSPIntegration package that asks the user which participant they are in the case,\nand then fills in ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"other_parties")," based on that information."),(0,i.kt)("p",null,'If your form generally deals with party types other than "defendant" and "plaintiff", you will likely want to look at the ',(0,i.kt)("inlineCode",{parentName:"p"},"is_defendant_filters")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"is_plaintiff_filters")," variables in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/case_search.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"docassemble-EFSPIntegration:case_search.yml")),"\nwhich you can override to sort participants by their codes from a case into your typical\nALPeopleLists in your form."))}h.isMDXComponent=!0},167:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/case_search_results-48d7aef85d6c642a3d21e6b8995caefa.png"},7798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/case_search_start-de2d77f70c63e079bc42f03eac260b8d.png"}}]);