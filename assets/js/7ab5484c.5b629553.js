"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[1645],{4137:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?t.createElement(h,o(o({ref:a},u),{},{components:n})):t.createElement(h,o({ref:a},u))}));function m(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),s=n(6010),r="tabItem_Ymn6";function o(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,o),hidden:n},a)}},4259:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(7462),s=n(7294),r=n(6010),o=n(1048),i=n(3609),l=n(1943),d=n(2957),u="tabList__CuJ",p="tabItem_LNqP";function c(e){var a,n,o=e.lazy,c=e.block,m=e.defaultValue,h=e.values,f=e.groupId,y=e.className,b=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),g=(0,i.l)(v,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(a=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?a:b[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),_=w.tabGroupChoices,N=w.setTabGroupChoices,x=(0,s.useState)(k),T=x[0],q=x[1],A=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=_[f];null!=E&&E!==T&&v.some((function(e){return e.value===E}))&&q(E)}var I=function(e){var a=e.currentTarget,n=A.indexOf(a),t=v[n].value;t!==T&&(C(a),q(t),null!=f&&N(f,String(t)))},O=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t,s=A.indexOf(e.currentTarget)+1;n=null!=(t=A[s])?t:A[0];break;case"ArrowLeft":var r,o=A.indexOf(e.currentTarget)-1;n=null!=(r=A[o])?r:A[A.length-1]}null==(a=n)||a.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},v.map((function(e){var a=e.value,n=e.label,o=e.attributes;return s.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return A.push(e)},onKeyDown:O,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===a})}),null!=n?n:a)}))),o?(0,s.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map((function(e,a){return(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function m(e){var a=(0,o.Z)();return s.createElement(c,(0,t.Z)({key:String(a)},e))}},387:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var t=n(7462),s=n(3366),r=(n(7294),n(4137)),o=n(4259),i=n(425),l=["components"],d={id:"ql_addresses",title:"Addresses",sidebar_label:"Addresses",slug:"/question_library/addresses"},u=void 0,p={unversionedId:"question_library/ql_addresses",id:"question_library/ql_addresses",title:"Addresses",description:"What addresses are for",source:"@site/docs/question_library/addresses.md",sourceDirName:"question_library",slug:"/question_library/addresses",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/addresses",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/addresses.md",tags:[],version:"current",frontMatter:{id:"ql_addresses",title:"Addresses",sidebar_label:"Addresses",slug:"/question_library/addresses"},sidebar:"someSidebar",previous:{title:"Names",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/names"},next:{title:"Gender",permalink:"/docassemble-AssemblyLine-documentation/docs/question_library/gender"}},c={},m=[{value:"What addresses are for",id:"what-addresses-are-for",level:2},{value:"Ask for addresses in parts",id:"ask-for-addresses-in-parts",level:2},{value:"Allow user to specify country if appropriate",id:"allow-user-to-specify-country-if-appropriate",level:3},{value:"Allow the user to provide a separate mailing address",id:"allow-the-user-to-provide-a-separate-mailing-address",level:2},{value:"Getting the address of someone who is experiencing homelessness",id:"getting-the-address-of-someone-who-is-experiencing-homelessness",level:2},{value:"Determine the purpose of collecting the address",id:"determine-the-purpose-of-collecting-the-address",level:3},{value:"Ask for a city, state, and a written explanation",id:"ask-for-a-city-state-and-a-written-explanation",level:3},{value:"Use <code>person.address.has_no_address</code> as a trigger, not <code>person.address.address</code>",id:"use-personaddresshas_no_address-as-a-trigger-not-personaddressaddress",level:4},{value:"Come up with a strategy for placing the alternative address on the form",id:"come-up-with-a-strategy-for-placing-the-alternative-address-on-the-form",level:3},{value:"Handling international addresses",id:"handling-international-addresses",level:2},{value:"Consider a fall back of a completely open text field",id:"consider-a-fall-back-of-a-completely-open-text-field",level:3},{value:"Further reading",id:"further-reading",level:2},{value:"Collecting international addresses",id:"collecting-international-addresses",level:3},{value:"Collecting address of an unhoused person",id:"collecting-address-of-an-unhoused-person",level:3}],h={toc:m};function f(e){var a=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-addresses-are-for"},"What addresses are for"),(0,r.kt)("p",null,"Address information serves two unrelated purposes on most legal forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Providing a place to send official court notices and receive service of\nprocess"),(0,r.kt)("li",{parentName:"ul"},"Determining eligibility and venue")),(0,r.kt)("p",null,"Determine which purpose is served by the address question on your form. In\nparticular, if you have both purposes, be aware that your users may have\ndifferent domiciles and mailing addresses."),(0,r.kt)("h2",{id:"ask-for-addresses-in-parts"},"Ask for addresses in parts"),(0,r.kt)("p",null,"Most PDF forms ask for an address in multiple labeled parts. Addresses are also\noften used to determine eligibility, which requires separating zip code or city\nname from the rest of the address. There is no 100% reliable programmatic way to\nbreak a single-line address field into parts, so best practice is to ask for the\naddress in parts in your interview."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields()\n"))),(0,r.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  Where do you live?\nfields:\n  - Street address: users[0].address.address\n    address autocomplete: True\n  - Unit: users[0].address.unit\n    required: False\n  - City: users[0].address.city\n  - State: users[0].address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: users[0].address.zip\n    required: False\n")))),(0,r.kt)("h3",{id:"allow-user-to-specify-country-if-appropriate"},"Allow user to specify country if appropriate"),(0,r.kt)("p",null,"If your users commonly may provide addresses from a different country,\nshow a country dropdown. Store the country with the ISO country code."),(0,r.kt)("p",null,"Ideally, update fields to match at least the most common countries, by\nupdating labels like ",(0,r.kt)("inlineCode",{parentName:"p"},"Zip code")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Postal code")," and replacing\n",(0,r.kt)("inlineCode",{parentName:"p"},"State")," with the appropriate label for that country."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields(show_country=True, country_code=\"US\")\n"))),(0,r.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  Where do you live?\nfields:\n  - Street address: person.address.address\n    address autocomplete: True\n  - Unit: person.address.unit\n    required: False\n  - City: person.address.city\n  - State: person.address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: person.address.zip\n    required: False\n  - Country: person.address.country\n    code: |\n      countries_list()\n")))),(0,r.kt)("h2",{id:"allow-the-user-to-provide-a-separate-mailing-address"},"Allow the user to provide a separate mailing address"),(0,r.kt)("p",null,"If both residence and mailing address are important, make sure to ask for both,\nand ask a clear question that prompts the user for the correct information."),(0,r.kt)("p",null,"It is appropriate to offer the user's home address as a default for their\nmailing address."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ALIndividual")," objects in the Assembly Line framework have a predefined\n",(0,r.kt)("inlineCode",{parentName:"p"},"mailing_address")," attribute."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - My mailing address is: person.mailing_address\n    datatype: object_radio\n    choices:\n      - person.address\n    object labeler: |\n      lambda y: y.on_one_line()      \n    none of the above: |\n      Somewhere else\n    disable others: True  \n  - code: |\n      person.mailing_address.address_fields()\n"))),(0,r.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nobjects:\n  - person.mailing_address: Address\n---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  What address should the court use to mail papers to you?\nfields:\n  - My mailing address is: person.mailing_address\n    datatype: object_radio\n    choices:\n      - person.address\n    object labeler: |\n      lambda y: y.on_one_line()      \n    none of the above: |\n      Somewhere else\n    disable others: True\n  - Street address: users[0].mailing_address.address\n    address autocomplete: True\n  - Unit: users[0].mailing_address.unit\n    required: False\n  - City: users[0].mailing_address.city\n  - State: users[0].mailing_address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: users[0].mailing_address.zip\n    required: False\n")))),(0,r.kt)("h2",{id:"getting-the-address-of-someone-who-is-experiencing-homelessness"},"Getting the address of someone who is experiencing homelessness"),(0,r.kt)("p",null,"Some users may be unhomed. Getting the address of a user who does not have a\ntraditional home can be tricky. Consider fallback solutions that gracefully\nhandle situations where an individual:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lacks a permanent address"),(0,r.kt)("li",{parentName:"ul"},'is "couch surfing" or staying with a friend'),(0,r.kt)("li",{parentName:"ul"},"living in a homeless shelter"),(0,r.kt)("li",{parentName:"ul"},"is sleeping outside"),(0,r.kt)("li",{parentName:"ul"},"is otherwise experiencing homelessness")),(0,r.kt)("p",null,"Note that many unhoused people ",(0,r.kt)("strong",{parentName:"p"},"do")," have a place that they receive mail. It might\nbe:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a friend or family member"),(0,r.kt)("li",{parentName:"ul"},"a local homeless shelter "),(0,r.kt)("li",{parentName:"ul"},"a PO Box or non-traditional box (such as at Mailboxes, Etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://faq.usps.com/s/article/What-is-General-Delivery"},"general delivery")," at\nthe local post office")),(0,r.kt)("p",null,"For people with these common solutions, the traditional address question above\nmay be sufficient."),(0,r.kt)("h3",{id:"determine-the-purpose-of-collecting-the-address"},"Determine the purpose of collecting the address"),(0,r.kt)("p",null,"When designing your address question, it is important to know whether the\naddress is being collected to provide a place to send official correspondence or\nto determine eligibility or venue."),(0,r.kt)("p",null,"For eligibility and venue, knowing the city and state is usually enough. People\nwithout a traditional home still stay in a city and state. ",(0,r.kt)("strong",{parentName:"p"},"Note"),": someone who\nis unhoused may be more likely to use a mailing address that is not in the same\nvenue as their physical location."),(0,r.kt)("p",null,"There may be special circumstances where more information is required for\ndetermining venue or eligibility. For example, Dana Chisnell of the United\nStates Digital Service Agency\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/danachis/status/1557180760410492929"},"reports")," that they\nallow people without a traditional address to mark a map indicating the\nintersection where they can normally be found."),(0,r.kt)("p",null,"If the address is being used for official correspondence, decide how to handle\nthe fact that some users just will not have a traditional address to receive\ncorrespondence."),(0,r.kt)("h3",{id:"ask-for-a-city-state-and-a-written-explanation"},"Ask for a city, state, and a written explanation"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Assembly Line Example",label:"Assembly Line Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields(allow_no_address=True)\n"))),(0,r.kt)(i.Z,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  Write the address where you live.\nfields:\n  - I do not have an address: person.address.has_no_address\n    datatype: yesno\n  - Is there anything else you want to say about your living situation?: person.address.no_address_explanation\n    datatype: area\n    required: False\n    rows: 2\n    show if: person.address.has_no_address\n    help: |\n      Explain your address circumstances. Example: "I usually stay at the corner\n      of Fifth and Main St."\n  - Street address: person.address.address\n    address autocomplete: True\n    hide if: person.address.has_no_address\n  - Unit: person.address.unit\n    required: False\n    hide if: person.address.has_no_address\n  - City: person.address.city\n  - State: person.address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: person.address.zip\n    required: False\n    hide if: person.address.has_no_address\n')))),(0,r.kt)("h4",{id:"use-personaddresshas_no_address-as-a-trigger-not-personaddressaddress"},"Use ",(0,r.kt)("inlineCode",{parentName:"h4"},"person.address.has_no_address")," as a trigger, not ",(0,r.kt)("inlineCode",{parentName:"h4"},"person.address.address")),(0,r.kt)("p",null,"If you need to accommodate users without a traditional address, use the variable\n",(0,r.kt)("inlineCode",{parentName:"p"},"person.address.has_no_address")," as a trigger in your interview order block,\ninstead of ",(0,r.kt)("inlineCode",{parentName:"p"},"person.address.address"),"."),(0,r.kt)("h3",{id:"come-up-with-a-strategy-for-placing-the-alternative-address-on-the-form"},"Come up with a strategy for placing the alternative address on the form"),(0,r.kt)("p",null,"Most forms have two lines for an address--a line for apartment, street number and\nstreet name, and a separate line for the city, state, and zip code."),(0,r.kt)("p",null,"If you use the 3-part input described above, you can put the explanation on line\n1 and fill in the city and state as normal, leaving the zip code blank."),(0,r.kt)("p",null,"Make sure the user knows the character limit for this line on the form. Consider\nproviding an addendum."),(0,r.kt)("p",null,'If you use the Assembly Line framework, the following methods are all "aware" of the\nvariation on an address that handle unhomed individuals, and you do not need\nany special logic in the template file or attachment block:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adddress.block()"),(0,r.kt)("li",{parentName:"ul"},"address_block()"),(0,r.kt)("li",{parentName:"ul"},"address.on_one_line()"),(0,r.kt)("li",{parentName:"ul"},"address.line_one()"),(0,r.kt)("li",{parentName:"ul"},"address.line_two()")),(0,r.kt)("h2",{id:"handling-international-addresses"},"Handling international addresses"),(0,r.kt)("p",null,"Court forms usually require that one or both litigants in the action reside in\nthe United States, but they may require you to provide the address of a\nnon-party to the case. That person may not live in the same country as the\njurisdiction of the form."),(0,r.kt)("p",null,'International addresses are complicated. Divisions like "state" may have a\ndifferent name and may not be commonly used to address mail in some countries.\nThe order of fields like postal code and apartment number may be totally\ndifferent.'),(0,r.kt)("p",null,"Ideally, your address fields should accommodate the order and presence of fields\nfor at least the most common countries that your users will provide addresses\nfrom."),(0,r.kt)("p",null,'The most common field that will cause trouble is the drop-down menu for "state".\nYou may want to replace this with a free-text field and make it optional when an\ninternational address might be provided in your interview.'),(0,r.kt)("h3",{id:"consider-a-fall-back-of-a-completely-open-text-field"},"Consider a fall back of a completely open text field"),(0,r.kt)("p",null,"The most flexible input of all for an address is a wide-open text field. This\nmay be appropriate to show as an alternative, even if your user is able to\nselect the country, to handle countries with address formats that you may not\nknow in advance."),(0,r.kt)("p",null,"Keep in mind that this may not be a very good user experience for most users.\nYour default address question should be more standardized."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("h3",{id:"collecting-international-addresses"},"Collecting international addresses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php"},"https://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513"},"https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513"))),(0,r.kt)("h3",{id:"collecting-address-of-an-unhoused-person"},"Collecting address of an unhoused person"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.getcalfresh.org/"},"https://demo.getcalfresh.org/"))))}f.isMDXComponent=!0}}]);