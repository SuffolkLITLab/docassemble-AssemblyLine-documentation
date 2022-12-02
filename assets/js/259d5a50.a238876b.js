"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[4222],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4474:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),i=["components"],l={id:"error_actions",title:"Helping users recover from developer errors\n",sidebar_label:"Helping users recover from developer errors\n",slug:"/framework/error_actions"},s=void 0,u={unversionedId:"framework/error_actions",id:"framework/error_actions",title:"Helping users recover from developer errors\n",description:"Overview",source:"@site/docs/framework/error_actions.md",sourceDirName:"framework",slug:"/framework/error_actions",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/error_actions",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/error_actions.md",tags:[],version:"current",frontMatter:{id:"error_actions",title:"Helping users recover from developer errors\n",sidebar_label:"Helping users recover from developer errors\n",slug:"/framework/error_actions"},sidebar:"someSidebar",previous:{title:"Using Answer Sets to capture and re-use client information\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/answer_set_intakes"},next:{title:"Reserved variable names that you cannot use",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/reserved_keywords"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Turning custom error pages on or off",id:"turning-custom-error-pages-on-or-off",level:2},{value:"Replacing the Assembly Line error page",id:"replacing-the-assembly-line-error-page",level:2},{value:"Customizing the Assembly Line error page",id:"customizing-the-assembly-line-error-page",level:2},{value:"Downloading incomplete documents",id:"downloading-incomplete-documents",level:3},{value:"Problem with earlier version of the Weaver",id:"problem-with-earlier-version-of-the-weaver",level:4}],m={toc:d};function p(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"If you would like to replace the stock Docassemble error page,\nwhich is a bit unfriendly, you can configure that both system-wide\nand on an interview-by-interview basis with the Assembly Line framework."),(0,a.kt)("h2",{id:"turning-custom-error-pages-on-or-off"},"Turning custom error pages on or off"),(0,a.kt)("p",null,"The default Assembly Line configuration turns on a custom error handling page as of version\n",(0,a.kt)("inlineCode",{parentName:"p"},"2.20.0"),"."),(0,a.kt)("p",null,"If you would like to turn the custom error page off, you can disable it like\nthis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmetadata:\n  error action: None\n")),(0,a.kt)("h2",{id:"replacing-the-assembly-line-error-page"},"Replacing the Assembly Line error page"),(0,a.kt)("p",null,"You can override the custom error page by adding an event with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"al_custom_error_action"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#metadata"},"https://docassemble.org/docs/initial.html#metadata")," to read the docassemble documentation about\nwhat this event can do."),(0,a.kt)("h2",{id:"customizing-the-assembly-line-error-page"},"Customizing the Assembly Line error page"),(0,a.kt)("p",null,"By default the Assembly Line error page looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2437).Z,width:"1058",height:"998"})),(0,a.kt)("p",null,"It always includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The instruction to try clicking "back" and trying again'),(0,a.kt)("li",{parentName:"ul"},"A link to the page defined as ",(0,a.kt)("inlineCode",{parentName:"li"},"AL_ORGANIZATION_HOMEPAGE")),(0,a.kt)("li",{parentName:"ul"},"Technical information (the exact Python error) in an expandable element")),(0,a.kt)("p",null,"If it is defined, it will include a link to download the original blank form as specified in  ",(0,a.kt)("inlineCode",{parentName:"p"},'interview_metadata[]["original_form"]'),' (it will look in the "main_interview_key" if defined, and fall back to the first key in ',(0,a.kt)("inlineCode",{parentName:"p"},"interview_metadata")," otherwise). This metadata key will be treated as a URL."),(0,a.kt)("p",null,"You can customize these optional links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A link to download the in-progress forms"),(0,a.kt)("li",{parentName:"ul"},"A link to email the server administrator"),(0,a.kt)("li",{parentName:"ul"},"A link to submit feedback using the GitHub feedback form"),(0,a.kt)("li",{parentName:"ul"},"A list of additional instructions.")),(0,a.kt)("p",null,"The optional links have a two-step configuration. You can turn them\non or off globally in the system-wide configuration, or override the\nsystem-wide configuration on a per-interview basis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"assembly line:\n  enable incomplete downloads: True\n  show email to user on errors: True\n  enable error action feedback link: True\n  custom error actions:\n    - Call the trial court help line at 833-91COURT\n")),(0,a.kt)("p",null,"Note that these settings all default to ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," if you have not added this section to\nyour global configuration."),(0,a.kt)("p",null,"Or configure at the interview level like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ncode: |\n  al_show_email_to_user_on_errors = False\n---\ncode: |\n  al_enable_incomplete_downloads = False\n---\ncode: |\n  al_enable_error_action_feedback_link = False\n---\ncode: |\n  al_custom_error_options = [\n    "Send an email to [the helpline](mailto:help@example.com),\n    "Call us at 1-800-GET-HELP",\n  ]\n')),(0,a.kt)("p",null,"The custom error options can include Markdown-formatted text or HTML, like the links in the example."),(0,a.kt)("h3",{id:"downloading-incomplete-documents"},"Downloading incomplete documents"),(0,a.kt)("p",null,"The custom error page will allow downloading of incomplete documents if\nthe global configuration option ",(0,a.kt)("inlineCode",{parentName:"p"},"assembly line: enable incomplete downloads")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,a.kt)("p",null,"Turning this setting on will also add a menu item in the interview that allows the user\nto download the incomplete document at any time."),(0,a.kt)("p",null,"This feature relies on the setting ",(0,a.kt)("inlineCode",{parentName:"p"},"skip undefined: True")," in your document's attachment blocks.\nIt also depends on the documents being part of a bundle named ",(0,a.kt)("inlineCode",{parentName:"p"},"al_user_bundle"),"."),(0,a.kt)("p",null,"The download page may sometimes trigger additional screens if the ",(0,a.kt)("inlineCode",{parentName:"p"},"skip undefined")," setting is not\nturned on for your attachment block, and it currently doesn't have any special error handling\nother than the safety provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"skip undefined"),". That means on occasion, the custom error\ndownload screen may timeout. You may want to customize this page further on your own by creating\na custom event named ",(0,a.kt)("inlineCode",{parentName:"p"},"al_error_action_download_screen"),"."),(0,a.kt)("p",null,"This is what the page may look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1059).Z,width:"1046",height:"901"})),(0,a.kt)("p",null,"It includes this text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Warning: these documents may not be complete. Look each document over carefully and enter any information that is missing once you have downloaded the documents.\n\nIt is possible that the missing information may make this document unenforceable.\n\nHere is your current progress on the \u201cFax cover sheet\u201d documents you started:\n")),(0,a.kt)("p",null,"As well as a link to download the draft version of each document in ",(0,a.kt)("inlineCode",{parentName:"p"},"al_user_bundle"),',\na "Leave" button which takes the user to ',(0,a.kt)("inlineCode",{parentName:"p"},"AL_ORGANIZATION_HOMEPAGE"),' and a "Start over"\nbutton which starts the interview from the beginning.'),(0,a.kt)("h4",{id:"problem-with-earlier-version-of-the-weaver"},"Problem with earlier version of the Weaver"),(0,a.kt)("p",null,"Early versions of the Weaver that include user instructions may place the instructions attachment\nin the same attachment block as the primary documents of the interview. But the instructions\ndo not have ",(0,a.kt)("inlineCode",{parentName:"p"},"skip undefined")," turned on."),(0,a.kt)("p",null,"You should ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"skip undefined")," option is turned on for all attachments in your\ninterview if you want the full benefit of the custom error action page."))}p.isMDXComponent=!0},1059:function(e,n,t){n.Z=t.p+"assets/images/error_action_download_screen-1e0d6effbcc5ed7f4efd49e4e6c4c6ea.png"},2437:function(e,n,t){n.Z=t.p+"assets/images/error_action_example-5c89894a578a0efec8df6ea9ee519669.png"}}]);