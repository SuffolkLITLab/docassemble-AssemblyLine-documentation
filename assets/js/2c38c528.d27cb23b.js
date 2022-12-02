"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[79],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),o=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,i),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),o=n(7294),l=n(6010),i=n(1048),r=n(3609),s=n(1943),p=n(2957),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,c=e.defaultValue,h=e.values,b=e.groupId,k=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),g=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,o.useState)(w),_=C[0],T=C[1],L=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var A=g[b];null!=A&&A!==_&&y.some((function(e){return e.value===A}))&&T(A)}var E=function(e){var t=e.currentTarget,n=L.indexOf(t),a=y[n].value;a!==_&&(D(t),T(a),null!=b&&x(b,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=L.indexOf(e.currentTarget)+1;n=null!=(a=L[o])?a:L[0];break;case"ArrowLeft":var l,i=L.indexOf(e.currentTarget)-1;n=null!=(l=L[i])?l:L[L.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return L.push(e)},onKeyDown:O,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},8938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var a=n(7462),o=n(3366),l=(n(7294),n(4137)),i=n(4259),r=n(425),s=["components"],p={id:"altoolbox",title:"ALToolbox functions and components\n",sidebar_label:"ALToolbox functions and components",slug:"/framework/altoolbox"},u=void 0,d={unversionedId:"framework/altoolbox",id:"framework/altoolbox",title:"ALToolbox functions and components\n",description:"",source:"@site/docs/framework/altoolbox.md",sourceDirName:"framework",slug:"/framework/altoolbox",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/altoolbox",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/altoolbox.md",tags:[],version:"current",frontMatter:{id:"altoolbox",title:"ALToolbox functions and components\n",sidebar_label:"ALToolbox functions and components",slug:"/framework/altoolbox"},sidebar:"someSidebar",previous:{title:"ALDocument: Python Classes to simplify working with multiple templates\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/aldocument"},next:{title:"ALRecipes",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/alrecipes"}},m={},c=[{value:"Live demos",id:"live-demos",level:2},{value:"Collapsible help text",id:"collapsible-help-text",level:2},{value:"Display markdown template with a scroll bar",id:"display-markdown-template-with-a-scroll-bar",level:2},{value:"Display a series of tabs",id:"display-a-series-of-tabs",level:2},{value:"Format telephone numbers as clickable links",id:"format-telephone-numbers-as-clickable-links",level:2},{value:"Shorten a URL",id:"shorten-a-url",level:2},{value:"Format numbers with a <code>thousands</code> separator",id:"format-numbers-with-a-thousands-separator",level:2},{value:"Display a fontawesome icon inline",id:"display-a-fontawesome-icon-inline",level:2},{value:"Total a list of values that may not be defined",id:"total-a-list-of-values-that-may-not-be-defined",level:2},{value:"Provide a button that allows a user to copy text to the clipboard",id:"provide-a-button-that-allows-a-user-to-copy-text-to-the-clipboard",level:2},{value:"Escape button",id:"escape-button",level:2},{value:"International phone number input validation",id:"international-phone-number-input-validation",level:2},{value:"BirthDate and ThreePartsDate custom data types",id:"birthdate-and-threepartsdate-custom-data-types",level:2},{value:"Shorthand function to display a checkbox in replace of a True/False boolean value in a DOCX template",id:"shorthand-function-to-display-a-checkbox-in-replace-of-a-truefalse-boolean-value-in-a-docx-template",level:2}],h={toc:c};function b(e){var t=e.components,p=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The functions and classes listed on this page can be used without the Assembly\nLine framework. Follow the instructions to include each component in your\ninterview, which may involve including a single YAML file or a module, CSS, and\nJavaScript file."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"ALToolbox"),' repo is constantly expanded to add new functions. As this page provides only some samples, see the "Live demos" section below if you want the latest and complete info.'),(0,l.kt)("h2",{id:"live-demos"},"Live demos"),(0,l.kt)("p",null,"To get a hands-on experience on any of these functions, you can go to ",(0,l.kt)("a",{parentName:"p",href:"https://apps-dev.suffolklitlab.org/start/ALToolbox/altoolbox_overview"},"ALToolbox's overview page")," to run the demo interview you are interested in."),(0,l.kt)("p",null,"The overview page also provides instructions for those who want to contribute to ALToolbox."),(0,l.kt)("h2",{id:"collapsible-help-text"},"Collapsible help text"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"collapse_template()")," to display an accordion-style information box that\nstarts out hidden but expands when the user clicks on it. The contents of the\ninformation box come from a Docassemble ",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#template"},(0,l.kt)("inlineCode",{parentName:"a"},"template"),"\nblock"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"subject")," will\ndisplay with an arrow, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," of the template will be shown when the\n",(0,l.kt)("inlineCode",{parentName:"p"},"subject")," is clicked on."),(0,l.kt)("p",null,"We ",(0,l.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/style_guide/question_help_your_user#provide-help-information-in-context"},"recommend using this for help\ntext")," in\nyour interviews."),(0,l.kt)("p",null,"It works a lot like this ",(0,l.kt)("inlineCode",{parentName:"p"},"details")," element:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Like this"),(0,l.kt)("p",null,"Context-specific help goes here.")),(0,l.kt)("p",null,"To include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n---\nfeatures:\n  css: docassemble.ALToolbox:collapse_template.css\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: example question\nquestion: |\n  What is your favorite fruit?\nsubquestion: |\n  ${ collapse_template(fruit_explanation) }\n---\ntemplate: fruit_explanation\nsubject: |\n  Like this\ncontent: |\n  Context-specific help goes here.\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/misc.py"},"Code for ",(0,l.kt)("inlineCode",{parentName:"a"},"collapse_template"))),(0,l.kt)("h2",{id:"display-markdown-template-with-a-scroll-bar"},"Display markdown template with a scroll bar"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"display_template()")," displays a Docassemble\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#template"},(0,l.kt)("inlineCode",{parentName:"a"},"template"))," with a scroll bar to save screen space if the content is long."),(0,l.kt)("p",null,"It also displays the subject line along with the content, and allows you to add styles to the display. You can turn the scroll bar on and off. "),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},'display_template(my_template, scrollable=True, class_name="my_color")'),"."),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ninclude:\n  - docassemble.ALToolbox.display_template.yml\n")),(0,l.kt)("h2",{id:"display-a-series-of-tabs"},"Display a series of tabs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tabbed_templates_html()")," displays a series of Docassemble\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#template"},(0,l.kt)("inlineCode",{parentName:"a"},"template"),"s")," with Bootstrap\ntabs."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"tabbed_templates_html('unique_name_of_tab_group', tab_template1, tab_template2)"),"."),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"format-telephone-numbers-as-clickable-links"},"Format telephone numbers as clickable links"),(0,l.kt)("p",null,"This ",(0,l.kt)("inlineCode",{parentName:"p"},"tel")," function just makes a string representing a telephone number\nclickable, which opens the dialer on mobile."),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"tel('617-555-5555')")),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"shorten-a-url"},"Shorten a URL"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"shorten_url")," function lets you use your Docassemble server as a URL\nshortener."),(0,l.kt)("p",null,"The function has one parameter: ",(0,l.kt)("inlineCode",{parentName:"p"},"original_url")," and can be called like this:\n",(0,l.kt)("inlineCode",{parentName:"p"},"shorten_url('https://www.example.com')"),"."),(0,l.kt)("p",null,"Links expire in 7 days, and can be to either internal or external content.\nThe URL will still display your server's domain name, and will look like this:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://my.docassemble-server.com/goto?c=aRjzWcNZyJGWnMQghHamcndEnVKfhNwo")),(0,l.kt)("p",null,"Include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"format-numbers-with-a-thousands-separator"},"Format numbers with a ",(0,l.kt)("inlineCode",{parentName:"h2"},"thousands")," separator"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"thousands()")," function to format a ",(0,l.kt)("inlineCode",{parentName:"p"},"currency")," value without adding a\ncurrency symbol but with ",(0,l.kt)("inlineCode",{parentName:"p"},",")," separating the thousands positions. The decimal\nportion is also rounded down. For example, for a PDF form that already includes\na ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," symbol. "),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"thousands(1870.22)")," will display as ",(0,l.kt)("inlineCode",{parentName:"p"},"1,870"),"."),(0,l.kt)("p",null,"To use, include this in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmodules:\n  - docassemble.ALToolbox.misc\n")),(0,l.kt)("h2",{id:"display-a-fontawesome-icon-inline"},"Display a fontawesome icon inline"),(0,l.kt)("p",null,"Docassemble allows you to display an icon from ",(0,l.kt)("a",{parentName:"p",href:"https://fontawesome.com/"},"fontawesome"),",\nbut it does not provide control over the size or color of the icon. Use\n",(0,l.kt)("inlineCode",{parentName:"p"},"fa_icon()")," to gain more control over the icon that is inserted."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"icon"),": a string representing a fontawesome icon. The icon needs to be in the free library."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," can be any ",(0,l.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/4.0/utilities/colors/"},"Bootstrap color variable"),". For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"warning")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color_css")," allows you to use a CSS hex code to represent the color, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"#fff")," for black."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size")," is used to control the ",(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/v6.0/docs/web/style/size"},"fontawesome size")," (without the ",(0,l.kt)("inlineCode",{parentName:"li"},"fa-")," prefix). Valid values include ",(0,l.kt)("inlineCode",{parentName:"li"},"2xs"),", the default of ",(0,l.kt)("inlineCode",{parentName:"li"},"sm")," all the way to ",(0,l.kt)("inlineCode",{parentName:"li"},"2xl"),".")),(0,l.kt)("h2",{id:"total-a-list-of-values-that-may-not-be-defined"},"Total a list of values that may not be defined"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined()")," returns the total of a list of values that may or may not be\ndefined. Each variable's name should be passed as a string as a separate\nparameter."),(0,l.kt)("p",null,"Use it like this:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined('value1', 'value2', 'value3')"),". Using ",(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined()")," will\nnot error if any of the values are undefined. If no value is defined,\n",(0,l.kt)("inlineCode",{parentName:"p"},"sum_if_defined()")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("p",null,"It is usually a better pattern to put the values into a list and use the\nbuilt-in Python function\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html#sum"},(0,l.kt)("inlineCode",{parentName:"a"},"sum")),", but this provides\nan alternative that may require less effort depending on how your form is\nlabeled."),(0,l.kt)("h2",{id:"provide-a-button-that-allows-a-user-to-copy-text-to-the-clipboard"},"Provide a button that allows a user to copy text to the clipboard"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"copy_button_html()")," to display an HTML input with a button\nthat allows the user to copy the text to their device's clipboard."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_to_copy"),": text you want the user to be able to copy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_before"),": the prompt that will appear to the left of the HTML input"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label"),': defaults to "Copy"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tooltip_inert_text"),': defaults to "Copy to clipboard" when hovered over'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tooltip_copied_text"),': defaults to "Copied!" when the text is placed on the clipboard')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"include:\n  - docassemble.ALToolbox:copy_button.yml\n")),(0,l.kt)("h2",{id:"escape-button"},"Escape button"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"escape_button.yml"),' file adds a red "Escape" button in the\ntop navigation area that takes you to ',(0,l.kt)("a",{parentName:"p",href:"https://google.com"},"https://google.com")," when you click\non it."),(0,l.kt)("p",null,"You may choose to use this if you have vulnerable clients, such as those living\nwith a domestic abuser."),(0,l.kt)("p",null,"To include in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ninclude:\n  - docassemble.ALToolbox:escape_button.yml\n")),(0,l.kt)("h2",{id:"international-phone-number-input-validation"},"International phone number input validation"),(0,l.kt)("p",null,"Use a custom datatype ",(0,l.kt)("inlineCode",{parentName:"p"},"phone")," field to define the phone number input, and it will validate the country code for you. Run the demo interview to see how it works and detailed implementation instruction."),(0,l.kt)("p",null,"To include in your interview:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ninclude:\n  - docassemble.ALToolbox:phone-number-validation.yml\n")),(0,l.kt)("h2",{id:"birthdate-and-threepartsdate-custom-data-types"},"BirthDate and ThreePartsDate custom data types"),(0,l.kt)("p",null,"Use the custom datatype ",(0,l.kt)("inlineCode",{parentName:"p"},"BirthDate")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"ThreePartsDate")," to ask the user\nto enter a date that might be very far in the past or in the future,\nwhere the standard calendar picker can slow the user down. This input\nwill display a separate month, day, and year input. The Month input will\nbe a dropdown menu with a list of months."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Preview",label:"Preview",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Preview of BirthDate selector with 3 separate inputs for month, day and year",src:n(8275).Z,width:"774",height:"761"}))),(0,l.kt)(r.Z,{value:"Code",label:"Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  When were you born?\nfields:\n  - no label: users[0].birthdate\n    datatype: BirthDate\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BirthDate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ThreePartsDate")," are exactly the same, except that a ",(0,l.kt)("inlineCode",{parentName:"p"},"BirthDate"),"\nis limited to a date in the past."),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"BirthDate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ThreePartsDate")," will be available for you to use in your\ninterview if the ",(0,l.kt)("inlineCode",{parentName:"p"},"docassemble-ALToolbox")," repository is installed on your server.\nYou do not need to explicitly include any code in your interview YAML file to\nuse them."),(0,l.kt)("h2",{id:"shorthand-function-to-display-a-checkbox-in-replace-of-a-truefalse-boolean-value-in-a-docx-template"},"Shorthand function to display a checkbox in replace of a True/False boolean value in a DOCX template"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"output_checkbox()")," function to display a checked or unchecked value in a DOCX template.\nIt can reduce the risk of typos and make your templates slightly easier to read."),(0,l.kt)("p",null,'By default, the "checkbox" will be the literal value ',(0,l.kt)("inlineCode",{parentName:"p"},"[  ]")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[X]")," rather than a Word form control."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  Do you live in Florida?\nyesno: user_lives_in_florida\n")),(0,l.kt)("p",null,"Then in the DOCX template, you could write\n",(0,l.kt)("inlineCode",{parentName:"p"},"{{ output_checkbox(user_lives_in_florida) }}")," instead of the messier\n",(0,l.kt)("inlineCode",{parentName:"p"},"{% if user_lives_in_florida %}[X]{% else %}[  ]{% endif %}"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"output_checkbox()")," has two optional keyword parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checked_value (str)"),": defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"[X]")," but can be set to any string or even\na ",(0,l.kt)("inlineCode",{parentName:"li"},"DAFile")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"DAStaticFile")," with the image of a checkbox"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unchecked_value (str)"),": opposite meaning of ",(0,l.kt)("inlineCode",{parentName:"li"},"checked_value")," and defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"[  ]"),".")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"output_checkbox()")," is contained in ",(0,l.kt)("inlineCode",{parentName:"p"},"misc.py")," which means it is already included\nif you use the AssemblyLine framework. If you do not use the AssemblyLine framework, you\ncan include it as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"modules:\n  - docassemble.ALToolbox.misc\n")))}b.isMDXComponent=!0},8275:function(e,t,n){t.Z=n.p+"assets/images/BirthDate-015daad309399400b3f6605426118ec9.png"}}]);