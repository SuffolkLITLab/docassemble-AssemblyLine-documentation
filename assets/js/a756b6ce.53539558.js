"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9887],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>c});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,c=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return o?a.createElement(c,r(r({ref:t},p),{},{components:o})):a.createElement(c,r({ref:t},p))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7364:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=o(7462),n=(o(7294),o(4137));const i={toc:[]};function r(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://apps-dev.suffolklitlab.org/start/test-setup"},"ALKiln's test setup interview")," to add ALKiln to your repository. You must run this setup interview for every package you want to test on GitHub."),(0,n.kt)("admonition",{title:"TODO: add link for adding tests later",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"When you set up, you can choose to create your ",(0,n.kt)("a",{parentName:"p",href:"#first-test"},"first test"),". We recommend that you do this. Either way, you can add more tests later.")),(0,n.kt)("p",null,"This setup interview can take over 30 minutes, especially if you're unfamiliar with GitHub or with docassemble API keys. To summarize, the instructions in the interview will help you:"))}r.isMDXComponent=!0;const s={id:"alkiln_setup",title:"Set up ALKiln tests",sidebar_label:"WIP Setup/Installation",slug:"/alkiln/setup"},l=void 0,u={unversionedId:"alkiln/alkiln_setup",id:"alkiln/alkiln_setup",title:"Set up ALKiln tests",description:"WIP (Work in progress)",source:"@site/docs/alkiln/setup.mdx",sourceDirName:"alkiln",slug:"/alkiln/setup",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/setup",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alkiln/setup.mdx",tags:[],version:"current",frontMatter:{id:"alkiln_setup",title:"Set up ALKiln tests",sidebar_label:"WIP Setup/Installation",slug:"/alkiln/setup"},sidebar:"mainSidebar",previous:{title:"Advanced",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/advanced"},next:{title:"WIP Writing tests",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/writing"}},p={},d=[{value:"Do <em>I</em> need to read this?",id:"who",level:2},{value:"Recommended setup: GitHub tests that run on your server",id:"recommended-setup",level:2},{value:"First test",id:"first-test",level:2},{value:"Test in your Playground",id:"playground-how-to",level:2},{value:"Isolated server tests (advanced)",id:"isolated-server-how-to",level:2},{value:"GitHub test details",id:"github-details",level:2},{value:"What is ALKiln doing?",id:"github-how",level:3},{value:"Pros",id:"github-pros",level:3},{value:"Cons",id:"github-cons",level:3},{value:"Playground test details",id:"playground-details",level:2},{value:"What is ALKiln doing?",id:"playground-how",level:3},{value:"Pros",id:"playground-pros",level:3},{value:"Cons",id:"playground-cons",level:3},{value:"Isolated server test details",id:"isolated-server-details",level:2},{value:"What is ALKiln doing?",id:"isolated-server-how",level:3},{value:"Pros",id:"isolated-server-pros",level:3},{value:"Cons",id:"isolated-server-cons",level:3}],h={toc:d};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"WIP (Work in progress)")),(0,n.kt)("p",null,"This page will tell you about the different ways to set up and run your ALKiln tests. You can install and run ALKiln in different ways and in different environments. You can use as many of these methods as you want. They each have their advantages and disadvantages."),(0,n.kt)("h2",{id:"who"},"Do ",(0,n.kt)("em",{parentName:"h2"},"I")," need to read this?"),(0,n.kt)("p",null,"Maybe not. People just writing tests can skip this page. Also, if your package's repository already has a ",(0,n.kt)("inlineCode",{parentName:"p"},".github")," folder with workflow files you can probably skip this page."),(0,n.kt)("p",null,"On the other hand, people helping manage GitHub repositories or organizations and people helping manage docassemble servers might find this page useful."),(0,n.kt)("h2",{id:"recommended-setup"},"Recommended setup: GitHub tests that run on your server"),(0,n.kt)("p",null,"This is the way we recommend setting up ALKiln tests for a repository for the first time. You are least likely to run into setup problems with this method. Every repository that needs to use this kind of test must go through this setup process."),(0,n.kt)("p",null,"The tests run whenever you commit any code to any branch on GitHub. You can read more ",(0,n.kt)("a",{parentName:"p",href:"#github-details"},"details and the pros and cons of GitHub tests")," below."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You need:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A developer or admin account on your docassemble server."),(0,n.kt)("li",{parentName:"ul"},"A package with a repository on GitHub."),(0,n.kt)("li",{parentName:"ul"},"A collaborator or admin account on your package's GitHub repository",(0,n.kt)("sup",{parentName:"li",id:"fnref-edit"},(0,n.kt)("a",{parentName:"sup",href:"#fn-edit",className:"footnote-ref"},"edit")),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"It could help to know about:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docassemble API keys"),(0,n.kt)("li",{parentName:"ul"},"GitHub secrets"),(0,n.kt)("li",{parentName:"ul"},"GitHub workflows"),(0,n.kt)("li",{parentName:"ul"},"GitHub pull requests (PRs)"),(0,n.kt)("li",{parentName:"ul"},"GitHub personal authorization tokens (PATs)")),(0,n.kt)(r,{mdxType:"GitHubSetup"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add GitHub secrets to your repository (or organization",(0,n.kt)("sup",{parentName:"li",id:"fnref-org"},(0,n.kt)("a",{parentName:"sup",href:"#fn-org",className:"footnote-ref"},"org")),")"),(0,n.kt)("li",{parentName:"ol"},"Make a new branch in your repository"),(0,n.kt)("li",{parentName:"ol"},'Add new code to that branch, including a new "workflow" file at the very least'),(0,n.kt)("li",{parentName:"ol"},"Make a pull request with that branch")),(0,n.kt)("p",null,"To run tests:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pull the new code to your Playground"),(0,n.kt)("li",{parentName:"ol"},"Make a change in one of your files"),(0,n.kt)("li",{parentName:"ol"},'On your Project\'s "Packages" page, write a commit message and tap to ',(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/development.html#versioncontrol"},"commit the changes to GitHub")),(0,n.kt)("li",{parentName:"ol"},'Go to the repository in GitHub and tap on the "Actions" tab to see the tests running')),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},'Add link to going to GitHub "Actions" tab')),(0,n.kt)("p",null,"You can also run the tests by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow#running-a-workflow"},"triggering your workflow manually"),"."),(0,n.kt)("h2",{id:"first-test"},"First test"),(0,n.kt)("p",null,"You can add a short test right away that just makes sure your YAML file runs. If you run the setup interview you can choose to create this test at that time and we recommend you do that. If you set up your tests manually instead:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'In the Playground of your Project, go to the "Sources" folder.'),(0,n.kt)("li",{parentName:"ol"},"Add an file that ends in ",(0,n.kt)("inlineCode",{parentName:"li"},".feature"),". For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"interviews_load.feature"),"."),(0,n.kt)("li",{parentName:"ol"},"In that file, write ",(0,n.kt)("inlineCode",{parentName:"li"},"Feature:")," at the top, with a description of the general category of tests that will be in that file."),(0,n.kt)("li",{parentName:"ol"},"Add a ",(0,n.kt)("inlineCode",{parentName:"li"},"Scenario:")," for each interview you want to test. The file should look similar to this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Feature: Interviews load\n\n  Scenario: The 209A loads\n    Given I start the interview at "ma_209a_package.yml"\n\n  Scenario: The Plaintiff\'s Motion to Modify loads\n    Given I start the interview at "plaintiffs_motion_to_modify_209a.yml"\n')),(0,n.kt)("p",null,'You can wait to write more complex tests till your code is more stable. "Stable" means that your question block variable names and values should be staying pretty much the same.'),(0,n.kt)("admonition",{title:"TODO: add link",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"You can read more about test files in other documentation.")),(0,n.kt)("h2",{id:"playground-how-to"},"Test in your Playground"),(0,n.kt)("p",null,"If you set up tests for the Playground, any developer can run tests on any of their Projects when they are logged into the docassemble server. You can read more details and the ",(0,n.kt)("a",{parentName:"p",href:"#playground-details"},"pros and cons of Playground tests")," below."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You need:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A developer or admin account on your docassemble server."),(0,n.kt)("li",{parentName:"ul"},"A Project with at least one ALKiln test in it. It can just be that ",(0,n.kt)("a",{parentName:"li",href:"#first-test"},"first test"),".")),(0,n.kt)("admonition",{title:"TODO:",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add a link to adding a test to a project")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"It helps to know about:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Installing GitHub packages on your docassemble server"),(0,n.kt)("li",{parentName:"ul"},"Adding interviews to your docassemble server's configuration's dispatch list")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure you are logged into your docassemble server."),(0,n.kt)("li",{parentName:"ol"},"Go to your server's ",(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/packages.html#installing"},'"Package Management" page'),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/packages.html#github_install"},"Use GitHub to install")," the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-ALKilnInThePlayground"},"ALKilnInThePlayground package")," from its ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," branch."),(0,n.kt)("li",{parentName:"ol"},"Follow ",(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/config.html#dispatch"},"docassemble's instructions")," to add it to the ",(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/config.html#dispatch"},"dispatch list"),". This will add it to the server's list of interviews. It may look something like this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"dispatch:\n  alkiln: docassemble.ALKilnInThePlayground:data/questions/run_alkiln_tests.yml\n  # Your other server interviews\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Go to your server's list of ",(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/admin.html#available%20interviews"},'"Available interviews"'),". ALKiln's package should now be listed there."),(0,n.kt)("li",{parentName:"ol"},"Run that interview."),(0,n.kt)("li",{parentName:"ol"},"On the first page of that interview, choose to install the latest version of ALKiln by picking the top item in the list. You can choose to do this whenever we make a new version of ALKiln. Tap to continue.")),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add images of picking new version\nAdd section in reminders about updating docassemble server (InPlayground) to new version of ALKiln")),(0,n.kt)("p",null,"To run the tests:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure you are logged into your docassemble server."),(0,n.kt)("li",{parentName:"ol"},"Run the ALKiln interview from your server's list of available interviews."),(0,n.kt)("li",{parentName:"ol"},"Skip the first page by just tapping to continue."),(0,n.kt)("li",{parentName:"ol"},"From the list of projects, pick a Project that already has tests in its Sources folder. If it has no tests, read how to add tests in our documentation then start with step number 1 again."),(0,n.kt)("li",{parentName:"ol"},"Run the tests and see the output.")),(0,n.kt)("admonition",{title:"TODO:",type:"warning"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Above, add link to how to make test files"),(0,n.kt)("li",{parentName:"ul"},"Above, add link to info about test output"),(0,n.kt)("li",{parentName:"ul"},"Figure out where to add details, like tags, etc."))),(0,n.kt)("h2",{id:"isolated-server-how-to"},"Isolated server tests (advanced)"),(0,n.kt)("p",null,"Isolated server tests are the most secure because they never interact with your server. ALKiln makes a server on GitHub itself and runs the tests there."),(0,n.kt)("p",null,"Every repository that needs to use this kind of test must go through this setup process."),(0,n.kt)("p",null,"This is an advanced method and may not work for everyone. We are happy to help you with it."),(0,n.kt)("p",null,"The tests run whenever you commit any code to any branch on GitHub. You can read more details and the ",(0,n.kt)("a",{parentName:"p",href:"#isolated-server-details"},"pros and cons of isolated server tests")," below."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You need:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A package with a repository on GitHub."),(0,n.kt)("li",{parentName:"ul"},"A collaborator or admin account on your package's GitHub repository",(0,n.kt)("sup",{parentName:"li",id:"fnref-edit"},(0,n.kt)("a",{parentName:"sup",href:"#fn-edit",className:"footnote-ref"},"edit")),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"It helps to know about:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Editing files on GitHub"),(0,n.kt)("li",{parentName:"ul"},"GitHub workflows"),(0,n.kt)("li",{parentName:"ul"},"GitHub pull requests (PRs)")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sign in to the package's GitHub repository."),(0,n.kt)("li",{parentName:"ol"},"Make a new branch. The name doesn't matter. We often call it ",(0,n.kt)("inlineCode",{parentName:"li"},"alkiln_tests"),"."),(0,n.kt)("li",{parentName:"ol"},"Tap the choice to add a new file to the repository. You can do this on GitHub or on your own computer."),(0,n.kt)("li",{parentName:"ol"},"In the field for the file's name, enter this text: ",(0,n.kt)("inlineCode",{parentName:"li"},".github/workflows/alkiln_isolated_github_tests.yml"),". You can give the file whatever name you want as long as it's in those folders and ends with ",(0,n.kt)("inlineCode",{parentName:"li"},".yml"),"."),(0,n.kt)("li",{parentName:"ol"},"This is your workflow file. Copy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/ALKiln/blob/v5/.github/workflows/github_server.yml"},"ALKiln's own workflow file"),". Read the notes in that file to see what you need to change. You should pay attention to the notes that start with ",(0,n.kt)("inlineCode",{parentName:"li"},"#### Developer note")," and follow those instructions."),(0,n.kt)("li",{parentName:"ol"},"Commit this file to GitHub."),(0,n.kt)("li",{parentName:"ol"},'In the same branch, navigate to your package\'s "sources" folder. These are the folders to get there: ',(0,n.kt)("inlineCode",{parentName:"li"},"docassemble/<YourPackageName>/data/sources"),"."),(0,n.kt)("li",{parentName:"ol"},"Add a new file here too. This will be your first test. You might call it ",(0,n.kt)("inlineCode",{parentName:"li"},"interviews_load.feature"),", but it can be anything that ends in ",(0,n.kt)("inlineCode",{parentName:"li"},".feature"),"."),(0,n.kt)("li",{parentName:"ol"},"Copy our example of a ",(0,n.kt)("a",{parentName:"li",href:"#first-test"},"first test")," into that file."),(0,n.kt)("li",{parentName:"ol"},"Commit that file."),(0,n.kt)("li",{parentName:"ol"},"Go to the repository's ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity"},"Actions page to see the test running"),"."),(0,n.kt)("li",{parentName:"ol"},"If the tests pass, make a pull request with that branch. If not, troubleshoot the tests.")),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},'Add link for creating new files and folders in a repo on GitHub\nAdd pic of GitHub path to example "sources" folder\nAdd link to troubleshooting page')),(0,n.kt)("p",null,"To run tests:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pull the repository's new code to your Playground"),(0,n.kt)("li",{parentName:"ol"},"Make a change in one of your files"),(0,n.kt)("li",{parentName:"ol"},'On your Project\'s "Packages" page, write a commit message and tap to ',(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/development.html#versioncontrol"},"commit the changes to GitHub")),(0,n.kt)("li",{parentName:"ol"},"Go to that package's repository in GitHub and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity"},'go to the "Actions" page')," to see the tests running")),(0,n.kt)("p",null,"You can also run the tests by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow#running-a-workflow"},"triggering your workflow manually"),"."),(0,n.kt)("h2",{id:"github-details"},"GitHub test details"),(0,n.kt)("p",null,"These tests run on GitHub, but they still interact with a Project they create on your server. Whenever you push (or commit) to GitHub, GitHub will run the tests automatically. You can also ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow"},"trigger them manually"),"."),(0,n.kt)("h3",{id:"github-how"},"What is ALKiln doing?"),(0,n.kt)("p",null,"When you run GitHub tests, ALKiln does the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ALKiln goes to the testing account you set up on your server and creates a new Project. If you log into that account, you'll be able to see the new Project in the list of projects."),(0,n.kt)("li",{parentName:"ol"},"It uploads the relevant branch of your package into the Project."),(0,n.kt)("li",{parentName:"ol"},"For each "," test, ALKiln pretends to be a human and goes to the url of that Project's interview (whatever interview you named in the test)."),(0,n.kt)("li",{parentName:"ol"},"It tries to fill out the fields as the test has instructed, and to take the actions described in the test."),(0,n.kt)("li",{parentName:"ol"},"When all the tests are done, ALKiln deletes the Project it created.")),(0,n.kt)("p",null,"You can see the tests running on your repository's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity"},"GitHub Actions page"),"."),(0,n.kt)("p",null,"When the tests are done, you can see a report and logs right in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs"},'workflow\'s "job" page on GitHub'),". You can also ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"download a ",(0,n.kt)("inlineCode",{parentName:"a"},".zip")," file on GitHub")," containing all the results of the tests to your computer."),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add link to section on test results")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration"},"GitHub quota limits")," probably will not be a problem, especially not for public repos."),(0,n.kt)("h3",{id:"github-pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ALKiln on GitHub will test any changes any team member commits. On your server, you only tests your changes."),(0,n.kt)("li",{parentName:"ul"},"On GitHub, there are ways to schedule tests to run regularly - every week, every day, or whatever schedule you prefer. If packages you depend on change and break your code, those tests will let you know."),(0,n.kt)("li",{parentName:"ul"},"If you've forgotten to add a file to the package that an interview depends on (like a missing template file), GitHub will catch that. It installs the file fresh in a new Project, so it only has the files that have been committed properly."),(0,n.kt)("li",{parentName:"ul"},"You can continue editing files in your Playground other than python files while the GitHub tests run because GitHub creates a whole new Project of its own."),(0,n.kt)("li",{parentName:"ul"},'You can configure your GitHub "action" to do other things, like create GitHub issues whenever tests fail.')),(0,n.kt)("h3",{id:"github-cons"},"Cons"),(0,n.kt)("p",null,"For everyone:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setting this test up in more reliable, but also more complex than the other methods. Setting them up on your own requires admin access to the repository and the docassemble server and an understanding of the correct files and of GitHub secrets. The ",(0,n.kt)("a",{parentName:"li",href:"https://apps-dev.suffolklitlab.org/start/test-setup"},"ALKiln test setup interview")," tries to help with that and even people with developer access can do it, but it is complex in its own ways."),(0,n.kt)("li",{parentName:"ul"},"Your tests might be more flaky. That means they may fail for reasons that don't have to do with the interviews. For example, if your tests are running while your server is reloading, ALKiln will keep running, so other tests will still have an opportunity to continue, but individual tests may fail even if your code is correct. Your server can reload for many reasons - updating your config, installing a new package, etc. When tests fail meaninglessly, it slows down your development cycle and sometimes people end up turning off the tests instead of dealing with the complexity.")),(0,n.kt)("p",null,"For some people:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you have ",(0,n.kt)("inlineCode",{parentName:"li"},"restrict input variables")," set to ",(0,n.kt)("inlineCode",{parentName:"li"},"True")," in your server's config and have signature screens in the interview you are testing, you ",(0,n.kt)("em",{parentName:"li"},"must")," have the trigger variable HTML in your interview for signatures.")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add links to docs about the trigger var")),(0,n.kt)("h2",{id:"playground-details"},"Playground test details"),(0,n.kt)("p",null,"You run these tests yourself from an ALKiln interview you install on your own docassemble development server or test server."),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add link to security section about not testing on production.")),(0,n.kt)("h3",{id:"playground-how"},"What is ALKiln doing?"),(0,n.kt)("p",null,"When you run Playground tests, ALKiln does the following:"),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add link to running the tests")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"For each "," test, ALKiln pretends to be a human and goes to the url of the Project and interview you specified."),(0,n.kt)("li",{parentName:"ol"},"It tries to fill out the fields as the test has instructed, and to take the actions described in the test.")),(0,n.kt)("p",null,"When the tests are done, you will see a page with the output of the tests which you will also be able to download."),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Link to description of results/output")),(0,n.kt)("h3",{id:"playground-pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can skip putting your package on GitHub."),(0,n.kt)("li",{parentName:"ul"},"Running ALKiln on your server lets you loop through your development cycle faster - edit, test, edit, test. You don't have to go through committing your code to GitHub every time."),(0,n.kt)("li",{parentName:"ul"},"You can more easily limit your tests to a specific set of tests using ",(0,n.kt)("a",{parentName:"li",href:"https://www.cuketest.com/en/cucumber/tag-expressions"},"tag expressions"),". You can use tags on GitHub too, it just takes more steps."),(0,n.kt)("li",{parentName:"ul"},"The full report output is easier to get right away."),(0,n.kt)("li",{parentName:"ul"},'If you also have GitHub tests, these tests can often help you avoid the red "x" that appears next to failing tests on GitHub. The red "x" is a useful piece of information, but it can be uncomfortable.')),(0,n.kt)("h3",{id:"playground-cons"},"Cons"),(0,n.kt)("p",null,"For everyone:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You cannot edit the Project that the test is testing."),(0,n.kt)("li",{parentName:"ul"},"You will miss catching some kinds of mistakes. ",(0,n.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/alkiln/trouble#file-not-found"},'"File not found" errors')," can come up because of this."),(0,n.kt)("li",{parentName:"ul"},"Your tests can be more flaky. For example, if your server reloads while the tests are running, the tests may get unexpected results. You may have to start the tests all over again.")),(0,n.kt)("p",null,"For some people:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are using a docassemble Docker image created before April 9th, 2023, you will have to do a ",(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/docker.html#upgrading"},'"system upgrade"')," to update your server to a newer docassemble Docker image. Any version of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jhpyle/docassemble-os"},"https://github.com/jhpyle/docassemble-os")," that is older than 1.0.8 uses versions of ",(0,n.kt)("inlineCode",{parentName:"li"},"node")," that are too old for ALKiln. As of February 11th, 2024, ALKiln is using node version 18. A lot of people have upgraded already and it is a very good idea to do that, for security at the very least. If you do need to upgrade, though, you need to back up all your data, delete your old image and container, get the new image, create a new container, and restore your data. It may sound simple, but it is a tricky process."),(0,n.kt)("li",{parentName:"ul"},"If you have ",(0,n.kt)("inlineCode",{parentName:"li"},"restrict input variables")," set to ",(0,n.kt)("inlineCode",{parentName:"li"},"True")," in your server's config and have signature screens in the interview you are testing, you ",(0,n.kt)("em",{parentName:"li"},"must")," have the trigger variable HTML in your interview for signatures.")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add links to docs about the trigger var")),(0,n.kt)("h2",{id:"isolated-server-details"},"Isolated server test details"),(0,n.kt)("p",null,"Isolated server tests are the most secure because they never interact with your server and they are temporary. Unfortunately, the also have more complications."),(0,n.kt)("p",null,"These tests actually run on GitHub too, we just have not yet found better names for the different test types."),(0,n.kt)("h3",{id:"isolated-server-how"},"What is ALKiln doing?"),(0,n.kt)("p",null,"When you run isolated server tests, ALKiln does the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ALKiln creates a server on GitHub itself."),(0,n.kt)("li",{parentName:"ol"},"It installs the relevant branch of your package on that server."),(0,n.kt)("li",{parentName:"ol"},"For each "," test, ALKiln pretends to be a human and goes to the url of the interview named in the test."),(0,n.kt)("li",{parentName:"ol"},"It tries to fill out the fields as the test has instructed, and to take the actions described in the test."),(0,n.kt)("li",{parentName:"ol"},"When all the tests are done, the GitHub server gets deleted.")),(0,n.kt)("p",null,"You can see the tests running on your repository's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity"},"GitHub Actions page"),"."),(0,n.kt)("p",null,"When the tests are done, you can see a report and logs right in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs"},'workflow\'s "job" page')," or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"download a ",(0,n.kt)("inlineCode",{parentName:"a"},".zip")," file")," containing all the results of the tests to your computer."),(0,n.kt)("admonition",{title:"TODO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Add link to section on test results")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration"},"GitHub quota limits")," probably will not be a problem, especially not for public repos."),(0,n.kt)("h3",{id:"isolated-server-pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All the ",(0,n.kt)("a",{parentName:"li",href:"#github-pros"},"same advantages as regular GitHub tests")," as well as some additional ones."),(0,n.kt)("li",{parentName:"ul"},"This is the most secure of all the methods. The tests don't interact with your server at all."),(0,n.kt)("li",{parentName:"ul"},"You can edit whatever files you want on your own server."),(0,n.kt)("li",{parentName:"ul"},"In some cases, no GitHub secrets are necessary."),(0,n.kt)("li",{parentName:"ul"},"Your tests will generally be less flaky. When a test fails it's more likely to be a problem with your code instead of a problem with the server, giving you better information. That's because the server is isolated on GitHub and no one is going to make that isolated server reload in the middle of the tests."),(0,n.kt)("li",{parentName:"ul"},"You don't have to set up or update any docassemble API keys or GitHub tokens."),(0,n.kt)("li",{parentName:"ul"},"I might be useful to test ",(0,n.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#custom%20datatype"},"Custom data types")," on an isolated server. A docassemble CustomDatatype affects a whole server. Testing it on an isolated server means it cannot affect the CustomDatatypes that are already on your server.")),(0,n.kt)("h3",{id:"isolated-server-cons"},"Cons"),(0,n.kt)("p",null,"For everyone:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tests take about 5-10 minutes longer since they have to do things like create a docker container and start a server."),(0,n.kt)("li",{parentName:"ul"},"The GitHub server installs the latest version of docassemble, which might be a different version than the one you use on your production server. Any server other than your production server will be different in some ways, though, and you should never run these tests on your production server."),(0,n.kt)("li",{parentName:"ul"},"In most cases, you should avoid hard-coded urls that go to your server. That is, avoid using ",(0,n.kt)("inlineCode",{parentName:"li"},"https://my-server.com")," and interviews or other pages there. That will send the tests to your server, which makes them less secure again.")),(0,n.kt)("p",null,"For some people:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At this time, isolated server tests are unable to handle data stored externally. For example, data stored in an S3 bucket."),(0,n.kt)("li",{parentName:"ul"},"You ",(0,n.kt)("strong",{parentName:"li"},"must"),' make sure you have properly required all your "Dependencies" on your Packages page. That is the only way the isolated server can know to download them.'),(0,n.kt)("li",{parentName:"ul"},"All your package's dependencies ",(0,n.kt)("strong",{parentName:"li"},"must")," be published on pypi. That is the only place that the isolated server can get them.")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-edit"},"That is, you need to have the ability to edit the code in your package's GitHub repository. If you own the repository or organization you are an admin and have the correct access level. If someone else is the owner and you are unsure of your access level, ask an admin what permission level you have for the repository. They can check ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#filtering-the-list-of-teams-and-people"},"the repository's collaborators settings"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-edit",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-org"},"If the repositories you want to test belong to one GitHub organization, get one of the organization's admins to run the ALKiln test setup interview and create organization secrets. They can also ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-an-organization"},"create them manually"),". Each repository the organization has will use those secrets so you don't have to bother adding them to every repository. Otherwise, you have to create the same secrets for each repository and if one of the values changes, you will have to update it in every repository.",(0,n.kt)("a",{parentName:"li",href:"#fnref-org",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);