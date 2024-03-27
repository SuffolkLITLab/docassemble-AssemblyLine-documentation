"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5940],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const o={id:"alkiln_deprecated",title:"Documentation for older versions of ALKiln",sidebar_label:"WIP Older versions",slug:"/alkiln/old"},i=void 0,l={unversionedId:"alkiln/alkiln_deprecated",id:"alkiln/alkiln_deprecated",title:"Documentation for older versions of ALKiln",description:"WIP (Work in progress)",source:"@site/docs/alkiln/older_versions.mdx",sourceDirName:"alkiln",slug:"/alkiln/old",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/old",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alkiln/older_versions.mdx",tags:[],version:"current",frontMatter:{id:"alkiln_deprecated",title:"Documentation for older versions of ALKiln",sidebar_label:"WIP Older versions",slug:"/alkiln/old"},sidebar:"docs",previous:{title:"WIP Security",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/security"}},s={},p=[{value:"Story Table Step before ALKiln v5.9.0",id:"story-table-step-before-alkiln-v590",level:2},{value:"Trigger variable",id:"trigger_variable_code",level:3},{value:"Writing the Story Table Step",id:"writing-the-story-table-step",level:3},{value:"Generate a Story Table",id:"generate-a-story-table",level:3},{value:"Step command",id:"step-command",level:3},{value:"Rows",id:"rows",level:3},{value:"var",id:"var",level:3},{value:"value",id:"value",level:3},{value:"trigger",id:"trigger",level:3},{value:"Story Table examples",id:"story-table-examples",level:3},{value:"<code>.there_is_another</code> loop",id:"there_is_another-loop",level:3},{value:"Story Table signature",id:"story-table-signature",level:3},{value:"Other story table notes",id:"other-story-table-notes",level:3},{value:"Error: missing trigger variable",id:"error-missing-trigger-variable",level:3}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"WIP (Work in progress)")),(0,r.kt)("p",null,"This page has documentation for old versions of Steps and such."),(0,r.kt)("p",null,"or"),(0,r.kt)("p",null,"This page links to old versions of the documentation."),(0,r.kt)("h2",{id:"story-table-step-before-alkiln-v590"},"Story Table Step before ALKiln v5.9.0"),(0,r.kt)("p",null,"After ALKiln v5.9.0, we're using a 2-column Story Table layout. This is documentation for the old 3-column format."),(0,r.kt)("h3",{id:"trigger_variable_code"},"Trigger variable"),(0,r.kt)("p",null,"First, if your package is not importing specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"al_package.yml")," from the styled Assembly Line package, make sure to add the trigger variable code to your interview. Add exactly this code to your ",(0,r.kt)("inlineCode",{parentName:"p"},"default screen parts")," block to insert an invisible element in all your screens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'default screen parts:\n  # This HTML is for ALKiln automated tests\n  post: |\n    <div data-variable="${ encode_name(str( user_info().variable )) }" id="trigger" aria-hidden="true" style="display: none;"></div>\n')),(0,r.kt)("p",null,"Use that HTML exactly. No customization."),(0,r.kt)("p",null,"If you already have something in your ",(0,r.kt)("inlineCode",{parentName:"p"},"post:"),", just copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," and paste it in after the other code. Putting it at the end can avoid messing up other HTML."),(0,r.kt)("h3",{id:"writing-the-story-table-step"},"Writing the Story Table Step"),(0,r.kt)("p",null,"In your Scenario, you will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a Step to go to the interview"),(0,r.kt)("li",{parentName:"ol"},"Add any other Steps you need"),(0,r.kt)("li",{parentName:"ol"},"Choose what page your Story Table should get you to"),(0,r.kt)("li",{parentName:"ol"},"Add the Story Table Step command that includes that page's id"),(0,r.kt)("li",{parentName:"ol"},"Add the Story Table header row"),(0,r.kt)("li",{parentName:"ol"},"Add a row for each variable"),(0,r.kt)("li",{parentName:"ol"},"Add whatever other Steps you need")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Story Table")," Steps, in our opinion, are the most effective and flexible way to fill in fields in most cases. The items in the table are a snapshot of the user who is filling out the form for that test."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    And I get to the question id "has sink" with this data:\n      | var | value | trigger |\n      | last_haircut_date | today - 730 | last_haircut_date |\n      | wants_virtual_haircut | True | last_haircut_date |\n      | user_name | Beth | user_name |\n      | intro_screen_accepts_terms | True | intro_screen_accepts_terms |\n')),(0,r.kt)("p",null,"The row with ",(0,r.kt)("inlineCode",{parentName:"p"},"| var | value | trigger |")," is required."),(0,r.kt)("p",null,"How it works: You tell the Story Table Step what ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," you want to get to. You also make a table of the variables and values the test will need to fill in on its way to that page. Whenever the test gets to a page, it checks your Story Table for any variable names in the table that match a variable name on the page. When the test finds a match, it sets the field to the corresponding value. When the test is done filling in fields on a page, it continues to the next page and repeats until it reaches that ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," id you gave."),(0,r.kt)("p",null,"As you can see in the example, the order of the items doesn't matter. The test will fill in the fields no matter what order they come in. You will be able to make simple edits to the interview without needing to update your tests. For example, you can move pages around or even move fields to different pages."),(0,r.kt)("p",null,"It also doesn't matter if you include extra items accidentally, though you might want to check the test reports to make sure no necessary fields went unused."),(0,r.kt)("p",null,"You can write a Story Table that goes all the way through your interview, or a Story Table that only goes part way. You can have multiple Story Tables in one Scenario and you can put other Steps between tables."),(0,r.kt)("p",null,"Right now, Story Tables are unable to use GitHub secrets to set variables."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A Story Table Step ",(0,r.kt)("strong",{parentName:"p"},"must not")," be the first step in your Scenario. The ",(0,r.kt)("a",{parentName:"p",href:"#starting-steps"},(0,r.kt)("inlineCode",{parentName:"a"},"interview")," Step")," ",(0,r.kt)("strong",{parentName:"p"},"must")," come before it.")),(0,r.kt)("h3",{id:"generate-a-story-table"},"Generate a Story Table"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://plocket.github.io/alkiln_story/"},"story table generator")," to generate a Scenario draft. Depending on your interview's code you might need to edit the table for it to work properly, but it can give you a good start."),(0,r.kt)("p",null,"Follow these instructions to use the generator:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you don't have one already, ",(0,r.kt)("a",{parentName:"li",href:"#how-do-i-add-a-new-test-file"},"add a new test file"),". You can leave out the Scenario."),(0,r.kt)("li",{parentName:"ol"},"Ensure your server config is set up to ",(0,r.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/config.html#debug"},"show debug info"),"."),(0,r.kt)("li",{parentName:"ol"},"Run your interview manually until you reach the page you want the story table to get to."),(0,r.kt)("li",{parentName:"ol"},'Open the "source" display of the interview. Currently, that looks like angle brackets, ',(0,r.kt)("inlineCode",{parentName:"li"},"</>"),", in the header of the page."),(0,r.kt)("li",{parentName:"ol"},"Note the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the page."),(0,r.kt)("li",{parentName:"ol"},'Tap the "Show variables and values" button. It will open a new tab showing a big JSON object.'),(0,r.kt)("li",{parentName:"ol"},"Copy all the text on that page."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://plocket.github.io/alkiln_story/"},"story table generator"),"."),(0,r.kt)("li",{parentName:"ol"},"Paste the JSON into the text area there, as instructed."),(0,r.kt)("li",{parentName:"ol"},"Use the other input fields to help finalize your Scenario, including the page ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy the Scenario that has been generated for you."),(0,r.kt)("li",{parentName:"ol"},"Paste that into the already prepared test file.")),(0,r.kt)("p",null,"This works best with interviews that don't need ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#index%20variables"},"index variables")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#generic"},"generic objects"),"."),(0,r.kt)("h3",{id:"step-command"},"Step command"),(0,r.kt)("p",null,"The Step that triggers a story table is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    And I get to the question id "some id!" with this data:\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"question id:")," The story table needs to know the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the page this story table should get to. You can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," block in the YAML in the Playground."),(0,r.kt)("h3",{id:"rows"},"Rows"),(0,r.kt)("p",null,"Indented under the command, put the header row of the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | var | value | trigger |\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var")," lists the variable the field sets exactly as it appears in the code of the question."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," is the value you want the test to fill in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trigger")," lists the variable that triggers that variable's page.")),(0,r.kt)("p",null,"Under that, add a blank row for a field that you want the test to interact with during the interview:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      |  |  |  |\n")),(0,r.kt)("h3",{id:"var"},"var"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," column, write the name of the variable that a field sets ",(0,r.kt)("strong",{parentName:"p"},"exactly as it appears in the ",(0,r.kt)("inlineCode",{parentName:"strong"},"question")," block"),". Most times you can see that name in the YAML ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," block. If ",(0,r.kt)("inlineCode",{parentName:"p"},"code:")," is used to create the field's variable name, you may have to talk to the developers who wrote that code to find out the name or names of the variable or variables it generates."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"court_date\nusers[0].name.first\nusers[i].children[j].benefits['SSI']\nx.favorite_color\n")),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," column, write what you want the field to be set to. For checkboxes, ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," means 'checked' and ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," means 'unchecked'."),(0,r.kt)("p",null,"One special value you can include is ",(0,r.kt)("inlineCode",{parentName:"p"},"today"),". That will insert the date on which the test is being run. You can also subtract from, or add days to, ",(0,r.kt)("inlineCode",{parentName:"p"},"today"),". Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | signature_date | today |  |\n      | court_date | today + 20 |  |\n      | minors_birth_date | today - 3650 |  |\n")),(0,r.kt)("p",null,"The last example makes sure that the date is 10 years in the past, ensuring that a minor always stays a minor for that test."),(0,r.kt)("h3",{id:"trigger"},"trigger"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," is an optional value in most cases. It is only mandatory for rows that use ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#index%20variables"},"index variables"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"j"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#generic"},"generic objects")," (",(0,r.kt)("inlineCode",{parentName:"p"},"x"),")."),(0,r.kt)("p",null,"Your interview ",(0,r.kt)("strong",{parentName:"p"},"must always")," include ",(0,r.kt)("a",{parentName:"p",href:"#trigger_variable_code"},"some special HTML shown here")," to let the trigger variable work properly. You will get an annoying warning in the report if you leave that out."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," column, write the name of the variable that triggers the ",(0,r.kt)("strong",{parentName:"p"},"page")," on which the field appears. Note that especially - the variable that triggers the ",(0,r.kt)("strong",{parentName:"p"},"page"),". If you have 10 different variables on one page, they will all have the same text in their ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," column."),(0,r.kt)("p",null,"For the below, the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"users[0].hair.how_much"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nid: interview order\nmandatory: True\ncode: |\n  users[0].hair.how_much\n---\nid: hair\nquestion: |\n  Tell us about your hair\nfields:\n  - How much hair do you have?: users[i].hair.how_much\n  - What color is your hair?: users[i].hair.color\n")),(0,r.kt)("p",null,"Your story table rows to set those values would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | var | value | trigger |\n      | users[i].hair.how_much | Enough | users[0].hair.how_much |\n      | users[i].hair.color | Sea green | users[0].hair.how_much |\n")),(0,r.kt)("p",null,"Even though the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," columns are different, both ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," columns have ",(0,r.kt)("inlineCode",{parentName:"p"},"users[0].hair.how_much"),". That's because the trigger is for the ",(0,r.kt)("strong",{parentName:"p"},"page"),", not for the fields. Both fields are on that same page - a page triggered by ",(0,r.kt)("inlineCode",{parentName:"p"},"users[0].hair.how_much"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Never")," use docassemble's ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[i]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[j]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[k]"),", etc. in the trigger column."),(0,r.kt)("p",null,"There are some rare cases where no ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," exists. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," blocks with the ",(0,r.kt)("inlineCode",{parentName:"p"},"mandatory")," specifier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mandatory: True\nquestion: |\n  Do you like mandatory questions?\nyesno: likes_mandatory_questions\n")),(0,r.kt)("p",null,"In those cases, leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," column empty."),(0,r.kt)("h3",{id:"story-table-examples"},"Story Table examples"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Simple field types with their values.")),(0,r.kt)("p",null,"The 'yes' choice of ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#yesno"},(0,r.kt)("inlineCode",{parentName:"a"},"yesno")," buttons")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#fields%20yesno"},(0,r.kt)("inlineCode",{parentName:"a"},"yesno")," fields")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"yesno")," checkboxes and ",(0,r.kt)("inlineCode",{parentName:"p"},"yesnoradio"),"s."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | has_hair | True | has_hair |\n")),(0,r.kt)("p",null,"The 'maybe' choice in ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#yesnomaybe"},"yesnomaybe buttons")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#fields%20yesno"},"datatype: yesnomaybe")," fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | has_hair | None | has_hair |\n")),(0,r.kt)("p",null,"Checkboxes with multiple choices. The value 'True' means to check the checkbox and 'False' means to uncheck it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | benefits['SSI'] | True | benefits |\n")),(0,r.kt)("p",null,"Radio or dropdown choices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | favorite_color | green | favorite_color |\n")),(0,r.kt)("p",null,"Text field or textarea. Even if the answer has multiple lines, you can only use one line. When a new line is supposed to appear, instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),". See below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | favorite_color | Blue.\\nNo, green!\\nAah... | favorite_color |\n")),(0,r.kt)("p",null,"A generic object with an index variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | x[i].name.first | Umi | users[1].name.first |\n")),(0,r.kt)("h3",{id:"there_is_another-loop"},(0,r.kt)("inlineCode",{parentName:"h3"},".there_is_another")," loop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".there_is_another")," loop in a story table is more complicated than you might expect."),(0,r.kt)("p",null,"The story table must handle setting the ",(0,r.kt)("inlineCode",{parentName:"p"},".there_is_another")," attribute automatically. You, as the developer, must pretend to use the ",(0,r.kt)("inlineCode",{parentName:"p"},".target_number")," attribute instead, whether you actually use it or not."),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," column, replace any ",(0,r.kt)("inlineCode",{parentName:"p"},".there_is_another")," rows for a particular variable with with one ",(0,r.kt)("inlineCode",{parentName:"p"},".target_number")," row. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," column, put the number of items of the appropriate type."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," column should have the name of the page's trigger variable, as usual. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | x[i].name.first | Jose | users[0].name.first |\n      | x[i].name.first | Sam | users[1].name.first |\n      | x[i].name.first | Umi | users[2].name.first |\n      | x.target_number | 3 | users.there_is_another |\n")),(0,r.kt)("h3",{id:"story-table-signature"},"Story Table signature"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," for a row setting a signature doesn't matter. All signatures will be a single dot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      | user.signature |  | user.signature |\n")),(0,r.kt)("h3",{id:"other-story-table-notes"},"Other story table notes"),(0,r.kt)("p",null,"Don't worry about accidentally including variables that won't show up during the test. Extra rows will be ignored."),(0,r.kt)("h3",{id:"error-missing-trigger-variable"},"Error: missing trigger variable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This warning only matters for story tables that use index variables or generic objects.")," That warning is deliberate, but if the above doesn't apply to you, you can ignore it."),(0,r.kt)("p",null,"You can get rid of this warning by adding ",(0,r.kt)("a",{parentName:"p",href:"#trigger_variable_code"},"some HTML code")," to the interview file where you set your ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#default%20screen%20parts"},(0,r.kt)("inlineCode",{parentName:"a"},"default screen parts")," block"),"."),(0,r.kt)("p",null,"If you want to see some very technical details about why we need this in the first place, you can go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/ALKiln/issues/256"},"https://github.com/SuffolkLITLab/ALKiln/issues/256"),", where we've tried to summarize the problem this is solving. Unfortunately, we haven't found another way to solve this particular problem."))}h.isMDXComponent=!0}}]);