"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3989],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<l;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(4137)),s=["components"],r={id:"algeneral",title:"ALGeneral: Python Classes representing people\n",sidebar_label:"ALGeneral: Python Classes representing people\n",slug:"/framework/algeneral"},o=void 0,d={unversionedId:"framework/algeneral",id:"framework/algeneral",title:"ALGeneral: Python Classes representing people\n",description:"The functions and classes listed on this page are always available in Assembly",source:"@site/docs/framework/algeneral.md",sourceDirName:"framework",slug:"/framework/algeneral",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/algeneral",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/algeneral.md",tags:[],version:"current",frontMatter:{id:"algeneral",title:"ALGeneral: Python Classes representing people\n",sidebar_label:"ALGeneral: Python Classes representing people\n",slug:"/framework/algeneral"},sidebar:"someSidebar",previous:{title:"Special variables for Assembly Line interviews",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/magic_variables"},next:{title:"ALDocument: Python Classes to simplify working with multiple templates\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/aldocument"}},p={},m=[{value:"Python classes for representing people and addresses",id:"python-classes-for-representing-people-and-addresses",level:2},{value:"ALAddress and ALAddressList classes",id:"ALAddress",level:3},{value:"ALAddressList",id:"ALAddressList",level:4},{value:"ALIndividual and ALPeopleList classes",id:"ALIndividual",level:3},{value:"Relation to the <code>Individual</code> class",id:"relation-to-the-individual-class",level:5},{value:"ALPeopleList",id:"ALPeopleList",level:4},{value:"Relation to the <code>DAList</code> class",id:"relation-to-the-dalist-class",level:5},{value:"Classes for specific kinds of people",id:"other-people",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The functions and classes listed on this page are always available in Assembly\nLine interviews."),(0,l.kt)("h2",{id:"python-classes-for-representing-people-and-addresses"},"Python classes for representing people and addresses"),(0,l.kt)("h3",{id:"ALAddress"},"ALAddress and ALAddressList classes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddress")," class is an extension of the built-in Docassemble\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#Address"},(0,l.kt)("inlineCode",{parentName:"a"},"Address"))," class."),(0,l.kt)("p",null,"If an address is an ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddress"),", it has an ",(0,l.kt)("inlineCode",{parentName:"p"},"address_fields()")," method that can be used\ninside a ",(0,l.kt)("inlineCode",{parentName:"p"},"fields: code: |")," statement to insert a consistently formatted series of\naddress fields. ",(0,l.kt)("inlineCode",{parentName:"p"},"address_fields()")," will include an autocomplete method and is\ninternationalized."),(0,l.kt)("p",null,"Assembly Line question library questions use ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddress")," objects for both the\n",(0,l.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"mailing_address")," attributes of people."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nobjects:\n  - the_address: ALAddress\n---\nid: address question\nsets:\n  - the_address.address\n  - the_address.city\nquestion: |\n  What is the address?\nfields:\n  - code: |\n      the_address.address_fields()\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/question_library/addresses"},(0,l.kt)("inlineCode",{parentName:"a"},"Addresses"))," for more information and\nexamples."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You must use ",(0,l.kt)("inlineCode",{parentName:"p"},"sets")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"address_fields()")," method. Otherwise\nDocassemble will not be able to find the block to provide a definition\nof the address fields."))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"address_fields()")," method includes the following optional parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"country_code"),": if provided, will be used to control the list of states that\nis displayed as well as the default country in the ",(0,l.kt)("inlineCode",{parentName:"li"},"country")," drop down. In\nthe Assembly Line question library, ",(0,l.kt)("inlineCode",{parentName:"li"},"country_code")," typically defaults to the value of\n",(0,l.kt)("inlineCode",{parentName:"li"},"AL_DEFAULT_COUNTRY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_state"),": default state, province, or sublocality. In the Assembly Line\nquestion library, ",(0,l.kt)("inlineCode",{parentName:"li"},"default_state")," typically defaults to the value of\n",(0,l.kt)("inlineCode",{parentName:"li"},"AL_DEFAULT_STATE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"show_country"),": defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"False"),". If enabled, a country drop down menu will\nbe displayed.")),(0,l.kt)("h4",{id:"ALAddressList"},"ALAddressList"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddressList")," class is simply a collection of ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddress"),"es. It is used to\nallow you to collect multiple addresses in one go and otherwise works exactly\nlike the built-in Docassemble ",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#DAList"},(0,l.kt)("inlineCode",{parentName:"a"},"DAList"),"\nobject"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"__str__()")," method of an ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddressList")," has been modified so that using it\ndisplays a series of addresses on one line, separated by ",(0,l.kt)("inlineCode",{parentName:"p"},";"),". This is used\nany place that Docassemble treats the variable as text, such as in a\ntemplate, attachment block, or in a ",(0,l.kt)("inlineCode",{parentName:"p"},"question")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"subquestion")," field."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"${ person.previous_addresses }")," might display ",(0,l.kt)("inlineCode",{parentName:"p"},"123 Main St, Boston, MA; 456 Broadway, Cambridge, MA"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"previous_addresses")," attribute of an ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIndividual")," is an ",(0,l.kt)("inlineCode",{parentName:"p"},"ALAddressList"),"."),(0,l.kt)("h3",{id:"ALIndividual"},"ALIndividual and ALPeopleList classes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIndividual")," is an extension of the Docassemble\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#Individual"},(0,l.kt)("inlineCode",{parentName:"a"},"Individual"))," class. It\nshould be used to represent both natural people and businesses or other\nentitities."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ALIndividual")," objects include the following methods that are not in the stock\n",(0,l.kt)("inlineCode",{parentName:"p"},"Individual")," class:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signature_if_final(i)")," is meant to be used inside a template or attachment\nblock with the ",(0,l.kt)("inlineCode",{parentName:"li"},"ALDocument")," class. It displays the signature if and only if\n",(0,l.kt)("inlineCode",{parentName:"li"},"i")," == 'final'."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"phone_numbers()")," displays either ",(0,l.kt)("inlineCode",{parentName:"li"},"mobile_number"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"phone_number"),", or both if\nboth are present for use in a PDF form with only one space to list phone\nnumbers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contact_methods()"),' displays a list of the contact methods the user provided\nin the default question library "contact information" screen as a formatted\nstring. Specifically, it will display ',(0,l.kt)("inlineCode",{parentName:"li"},"mobile_number"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"phone_number"),",\n",(0,l.kt)("inlineCode",{parentName:"li"},"email"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"other_contact_method"),". This may be helpful in a formatted letter."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"age_in_years()")," returns the individual's age as an integer (whole number), calculated from the individual's ",(0,l.kt)("inlineCode",{parentName:"li"},"birthdate")," attribute."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"formatted_age()")," is like ",(0,l.kt)("inlineCode",{parentName:"li"},"age_in_years()")," but returns a formatted string with\n",(0,l.kt)("inlineCode",{parentName:"li"},"years"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"months"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"weeks"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"days")," included when relevant. The cutoff is 2\nweeks to display days, 2 years to display months, and anything over 2 years\ndisplays only years."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name_fields(person_or_business:str = 'person', show_suffix=True)")," is like\n",(0,l.kt)("inlineCode",{parentName:"li"},"address_fields()")," and is used to display a list of either 3 or 4 fields for a\nperson's name. See ",(0,l.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/question_library/names"},(0,l.kt)("inlineCode",{parentName:"a"},"Names"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address_fields()")," is a wrapper around the ",(0,l.kt)("inlineCode",{parentName:"li"},"address_fields()")," method of an\n",(0,l.kt)("inlineCode",{parentName:"li"},"ALAddress")," with the same parameters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_fields(show_help=False)")," is like the ",(0,l.kt)("inlineCode",{parentName:"li"},"address_fields()")," method but\ndisplays a list of vetted gender options. Read more about\n",(0,l.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/question_library/gender"},(0,l.kt)("inlineCode",{parentName:"a"},"gender"))," questions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"initials()")," is used to return a string with the 1, 2, or 3 initial letters of\na person's name. E.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"QKS")," for Quinten K Steenhuis."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language_fields(choices=List[Dict[str, str]])")," provides a language selector that sets the ",(0,l.kt)("inlineCode",{parentName:"li"},".language")," attribute of the user, together with an ",(0,l.kt)("inlineCode",{parentName:"li"},"other")," fill-in. This should be the two-letter ISO language code. We recommend defining and passing a dictionary named ",(0,l.kt)("inlineCode",{parentName:"li"},"al_language_user_choices")," which will also be used by built-in questions triggered from ",(0,l.kt)("inlineCode",{parentName:"li"},"ql_baseline.yml"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language_name()")," will return the language name in English. If there is a system-wide translation ",(0,l.kt)("inlineCode",{parentName:"li"},"words.yml")," translation file and the user's interface is in that language, the language name will be translated. If the user selected an ",(0,l.kt)("inlineCode",{parentName:"li"},"other")," option, the ",(0,l.kt)("inlineCode",{parentName:"li"},"other")," option will be returned.")),(0,l.kt)("p",null,"Read-only attributes:"),(0,l.kt)("p",null,"The following are all read-only attributes you can use with PDF checkbox fields.\nThey return ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," depending on the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"gender")," attribute."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_male")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_female")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_nonbinary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_other")," (True if and only if the ",(0,l.kt)("inlineCode",{parentName:"li"},"gender"),' attribute is not "female" or "male")'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_unknown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gender_self_described"))),(0,l.kt)("h5",{id:"relation-to-the-individual-class"},"Relation to the ",(0,l.kt)("inlineCode",{parentName:"h5"},"Individual")," class"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIndividual")," class inherits from Docassemble's ",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#Individual"},(0,l.kt)("inlineCode",{parentName:"a"},"Individual"))," class, and all other methods of ",(0,l.kt)("inlineCode",{parentName:"p"},"Individual")," work\nthe same way as they do in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Individual")," class."),(0,l.kt)("h4",{id:"ALPeopleList"},"ALPeopleList"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALPeopleList")," class is used to represent a group of people. Otherwise it\nworks exactly like the built-in Docassemble ",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#DAList"},(0,l.kt)("inlineCode",{parentName:"a"},"DAList"),"\nobject"),"."),(0,l.kt)("p",null,"It also has the following additional methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"familiar()")," returns a comma-separated list of just the first name of each\nmember of the list, with ",(0,l.kt)("inlineCode",{parentName:"li"},"and")," joining the last two items "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"familiar_or()")," returns a comma-separated list of just the first name of each\nmember of the list, with ",(0,l.kt)("inlineCode",{parentName:"li"},"or")," joining the last two items"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"short_list(limit:int, truncate_string:str=', et. al.')")," returns a list that\nwill be cut off at the ",(0,l.kt)("inlineCode",{parentName:"li"},"limit")," provided. By default, ",(0,l.kt)("inlineCode",{parentName:"li"},", et. al.")," is appended.\nThe text can be customized.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In the lists above, ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"or")," can be translated using\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html#words"},(0,l.kt)("inlineCode",{parentName:"a"},"words.yml")),")"))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"users.short_list(2)")," will display ",(0,l.kt)("inlineCode",{parentName:"p"},"John Smith and Jane Smith, et. al.")," if the\nlist contains John Smith, Jane Smith, and Jane Doe. ",(0,l.kt)("inlineCode",{parentName:"p"},"et al")," is not used if the\nlist is at or below the limit provided."),(0,l.kt)("h5",{id:"relation-to-the-dalist-class"},"Relation to the ",(0,l.kt)("inlineCode",{parentName:"h5"},"DAList")," class"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ALPeopleList")," inherits from Docassemble's\n",(0,l.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#DAList"},(0,l.kt)("inlineCode",{parentName:"a"},"DAList"))," class, and retains\nall methods and attributes of a ",(0,l.kt)("inlineCode",{parentName:"p"},"DAList"),"."),(0,l.kt)("p",null,"Specifically, the language methods, including the ",(0,l.kt)("inlineCode",{parentName:"p"},"pronoun()")," and related\nmethods, can be used to display the correct pronoun depending on the number and\ngender of the members of an ",(0,l.kt)("inlineCode",{parentName:"p"},"ALPeopleList"),". E.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"users.pronoun_possessive()"),"\nwill return ",(0,l.kt)("inlineCode",{parentName:"p"},"her")," if there is a single user with the ",(0,l.kt)("inlineCode",{parentName:"p"},"gender"),' attribute value\n"female", and ',(0,l.kt)("inlineCode",{parentName:"p"},"their")," if there are multiple members of the list."),(0,l.kt)("p",null,'These methods can be helpful inside single-language pleading templates but\nusually should not be used inside the interview itself, as they can make\ntranslation challenging. While there are language-specific versions of these\nmethods, they can lead to odd ungrammatical "fragments". As tedious as it may\nbe, the best practice for translation inside the interview is to use conditional\nlogic for full sentences matching each gender and number.'),(0,l.kt)("h3",{id:"other-people"},"Classes for specific kinds of people"),(0,l.kt)("p",null,"Currently, the Assembly Line interviews provide these classes that you can use\nto target questions to a specific type of person:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tenant")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HousingAuthority")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Applicant")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Abuser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Survivor"))),(0,l.kt)("p",null,"Each class subclasses ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIndividual")," and shares its methods and attributes.\nThere are no special attributes or methods of these classes. They are simply\nprovided for you to customize questions."))}c.isMDXComponent=!0}}]);