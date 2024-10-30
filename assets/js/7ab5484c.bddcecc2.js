"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8163],{8349:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var a=n(4848),r=n(8453),t=n(9489),i=n(7227);const d={id:"ql_addresses",title:"Addresses",sidebar_label:"Addresses",slug:"/question_library/addresses"},o=void 0,l={id:"question_library/ql_addresses",title:"Addresses",description:"What addresses are for",source:"@site/docs/question_library/addresses.md",sourceDirName:"question_library",slug:"/question_library/addresses",permalink:"/docs/question_library/addresses",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/question_library/addresses.md",tags:[],version:"current",frontMatter:{id:"ql_addresses",title:"Addresses",sidebar_label:"Addresses",slug:"/question_library/addresses"},sidebar:"docs",previous:{title:"Names",permalink:"/docs/question_library/names"},next:{title:"Gender",permalink:"/docs/question_library/gender"}},c={},u=[{value:"What addresses are for",id:"what-addresses-are-for",level:2},{value:"Ask for addresses in parts",id:"ask-for-addresses-in-parts",level:2},{value:"Allow user to specify country if appropriate",id:"allow-user-to-specify-country-if-appropriate",level:3},{value:"Allow the user to provide a separate mailing address",id:"allow-the-user-to-provide-a-separate-mailing-address",level:2},{value:"Getting the address of someone who is experiencing homelessness",id:"getting-the-address-of-someone-who-is-experiencing-homelessness",level:2},{value:"Determine the purpose of collecting the address",id:"determine-the-purpose-of-collecting-the-address",level:3},{value:"Ask for a city, state, and a written explanation",id:"ask-for-a-city-state-and-a-written-explanation",level:3},{value:"Use <code>person.address.has_no_address</code> as a trigger, not <code>person.address.address</code>",id:"use-personaddresshas_no_address-as-a-trigger-not-personaddressaddress",level:4},{value:"Come up with a strategy for placing the alternative address on the form",id:"come-up-with-a-strategy-for-placing-the-alternative-address-on-the-form",level:3},{value:"Handling international addresses",id:"handling-international-addresses",level:2},{value:"Consider a fall back of a completely open text field",id:"consider-a-fall-back-of-a-completely-open-text-field",level:3},{value:"Further reading",id:"further-reading",level:2},{value:"Collecting international addresses",id:"collecting-international-addresses",level:3},{value:"Collecting address of an unhoused person",id:"collecting-address-of-an-unhoused-person",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"what-addresses-are-for",children:"What addresses are for"}),"\n",(0,a.jsx)(s.p,{children:"Address information serves two unrelated purposes on most legal forms:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Providing a place to send official court notices and receive service of\nprocess"}),"\n",(0,a.jsx)(s.li,{children:"Determining eligibility and venue"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Determine which purpose is served by the address question on your form. In\nparticular, if you have both purposes, be aware that your users may have\ndifferent domiciles and mailing addresses."}),"\n",(0,a.jsx)(s.h2,{id:"ask-for-addresses-in-parts",children:"Ask for addresses in parts"}),"\n",(0,a.jsx)(s.p,{children:"Most PDF forms ask for an address in multiple labeled parts. Addresses are also\noften used to determine eligibility, which requires separating zip code or city\nname from the rest of the address. There is no 100% reliable programmatic way to\nbreak a single-line address field into parts, so best practice is to ask for the\naddress in parts in your interview."}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(i.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields()\n"})})}),(0,a.jsx)(i.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  Where do you live?\nfields:\n  - Street address: users[0].address.address\n    address autocomplete: True\n  - Unit: users[0].address.unit\n    required: False\n  - City: users[0].address.city\n  - State: users[0].address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: users[0].address.zip\n    required: False\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"allow-user-to-specify-country-if-appropriate",children:"Allow user to specify country if appropriate"}),"\n",(0,a.jsx)(s.p,{children:"If your users commonly may provide addresses from a different country,\nshow a country dropdown. Store the country with the ISO country code."}),"\n",(0,a.jsxs)(s.p,{children:["Ideally, update fields to match at least the most common countries, by\nupdating labels like ",(0,a.jsx)(s.code,{children:"Zip code"})," to ",(0,a.jsx)(s.code,{children:"Postal code"})," and replacing\n",(0,a.jsx)(s.code,{children:"State"})," with the appropriate label for that country."]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(i.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields(show_country=True, country_code=\"US\")\n"})})}),(0,a.jsx)(i.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  Where do you live?\nfields:\n  - Street address: person.address.address\n    address autocomplete: True\n  - Unit: person.address.unit\n    required: False\n  - City: person.address.city\n  - State: person.address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: person.address.zip\n    required: False\n  - Country: person.address.country\n    code: |\n      countries_list()\n"})})})]}),"\n",(0,a.jsx)(s.h2,{id:"allow-the-user-to-provide-a-separate-mailing-address",children:"Allow the user to provide a separate mailing address"}),"\n",(0,a.jsx)(s.p,{children:"If both residence and mailing address are important, make sure to ask for both,\nand ask a clear question that prompts the user for the correct information."}),"\n",(0,a.jsx)(s.p,{children:"It is appropriate to offer the user's home address as a default for their\nmailing address."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"ALIndividual"})," objects in the Assembly Line framework have a predefined\n",(0,a.jsx)(s.code,{children:"mailing_address"})," attribute."]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(i.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - My mailing address is: person.mailing_address\n    datatype: object_radio\n    choices:\n      - person.address\n    object labeler: |\n      lambda y: y.on_one_line()      \n    none of the above: |\n      Somewhere else\n    disable others: True  \n  - code: |\n      person.mailing_address.address_fields()\n"})})}),(0,a.jsx)(i.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"---\nobjects:\n  - person.mailing_address: Address\n---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  What address should the court use to mail papers to you?\nfields:\n  - My mailing address is: person.mailing_address\n    datatype: object_radio\n    choices:\n      - person.address\n    object labeler: |\n      lambda y: y.on_one_line()      \n    none of the above: |\n      Somewhere else\n    disable others: True\n  - Mailing address: users[0].mailing_address.address\n    address autocomplete: True\n  - Unit: users[0].mailing_address.unit\n    required: False\n  - City: users[0].mailing_address.city\n  - State: users[0].mailing_address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: users[0].mailing_address.zip\n    required: False\n"})})})]}),"\n",(0,a.jsx)(s.h2,{id:"getting-the-address-of-someone-who-is-experiencing-homelessness",children:"Getting the address of someone who is experiencing homelessness"}),"\n",(0,a.jsx)(s.p,{children:"Some users may be un-homed. Getting the address of a user who does not have a\ntraditional home can be tricky. Consider fallback solutions that gracefully\nhandle situations where an individual:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"lacks a permanent address"}),"\n",(0,a.jsx)(s.li,{children:'is "couch surfing" or staying with a friend'}),"\n",(0,a.jsx)(s.li,{children:"living in a homeless shelter"}),"\n",(0,a.jsx)(s.li,{children:"is sleeping outside"}),"\n",(0,a.jsx)(s.li,{children:"is otherwise experiencing homelessness"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Note that many unhoused people ",(0,a.jsx)(s.strong,{children:"do"})," have a place that they receive mail. It might\nbe:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"a friend or family member"}),"\n",(0,a.jsx)(s.li,{children:"a local homeless shelter"}),"\n",(0,a.jsx)(s.li,{children:"a PO Box or non-traditional box (such as at Mailboxes, Etc.)"}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://faq.usps.com/s/article/What-is-General-Delivery",children:"general delivery"})," at\nthe local post office"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"For people with these common solutions, the traditional address question above\nmay be sufficient."}),"\n",(0,a.jsx)(s.h3,{id:"determine-the-purpose-of-collecting-the-address",children:"Determine the purpose of collecting the address"}),"\n",(0,a.jsx)(s.p,{children:"When designing your address question, it is important to know whether the\naddress is being collected to provide a place to send official correspondence or\nto determine eligibility or venue."}),"\n",(0,a.jsxs)(s.p,{children:["For eligibility and venue, knowing the city and state is usually enough. People\nwithout a traditional home still stay in a city and state. ",(0,a.jsx)(s.strong,{children:"Note"}),": someone who\nis unhoused may be more likely to use a mailing address that is not in the same\nvenue as their physical location."]}),"\n",(0,a.jsxs)(s.p,{children:["There may be special circumstances where more information is required for\ndetermining venue or eligibility. For example, Dana Chisnell of the United\nStates Digital Service Agency\n",(0,a.jsx)(s.a,{href:"https://twitter.com/danachis/status/1557180760410492929",children:"reports"})," that they\nallow people without a traditional address to mark a map indicating the\nintersection where they can normally be found."]}),"\n",(0,a.jsx)(s.p,{children:"If the address is being used for official correspondence, decide how to handle\nthe fact that some users just will not have a traditional address to receive\ncorrespondence."}),"\n",(0,a.jsx)(s.h3,{id:"ask-for-a-city-state-and-a-written-explanation",children:"Ask for a city, state, and a written explanation"}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(i.A,{value:"Assembly Line Example",label:"Assembly Line Example",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"id: person's address\nsets:\n  - person.address.address\n  - person.address.city\nquestion: |\n  Person's Address\nfields:\n  - code: |\n      person.address_fields(allow_no_address=True)\n"})})}),(0,a.jsx)(i.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:'---\nid: your address\nquestion: |\n  What is your address?\nsubquestion: |\n  Write the address where you live.\nfields:\n  - I do not have an address: person.address.has_no_address\n    datatype: yesno\n  - Is there anything else you want to say about your living situation?: person.address.no_address_explanation\n    datatype: area\n    required: False\n    rows: 2\n    show if: person.address.has_no_address\n    help: |\n      Explain your address circumstances. Example: "I usually stay at the corner\n      of Fifth and Main St."\n  - Street address: person.address.address\n    address autocomplete: True\n    hide if: person.address.has_no_address\n  - Unit: person.address.unit\n    required: False\n    hide if: person.address.has_no_address\n  - City: person.address.city\n  - State: person.address.state\n    code: |\n      states_list()\n    default: MA      \n  - Zip: person.address.zip\n    required: False\n    hide if: person.address.has_no_address\n'})})})]}),"\n",(0,a.jsxs)(s.h4,{id:"use-personaddresshas_no_address-as-a-trigger-not-personaddressaddress",children:["Use ",(0,a.jsx)(s.code,{children:"person.address.has_no_address"})," as a trigger, not ",(0,a.jsx)(s.code,{children:"person.address.address"})]}),"\n",(0,a.jsxs)(s.p,{children:["If you need to accommodate users without a traditional address, use the variable\n",(0,a.jsx)(s.code,{children:"person.address.has_no_address"})," as a trigger in your interview order block,\ninstead of ",(0,a.jsx)(s.code,{children:"person.address.address"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"come-up-with-a-strategy-for-placing-the-alternative-address-on-the-form",children:"Come up with a strategy for placing the alternative address on the form"}),"\n",(0,a.jsx)(s.p,{children:"Most forms have two lines for an address--a line for apartment, street number and\nstreet name, and a separate line for the city, state, and zip code."}),"\n",(0,a.jsx)(s.p,{children:"If you use the 3-part input described above, you can put the explanation on line\n1 and fill in the city and state as normal, leaving the zip code blank."}),"\n",(0,a.jsx)(s.p,{children:"Make sure the user knows the character limit for this line on the form. Consider\nproviding an addendum."}),"\n",(0,a.jsx)(s.p,{children:'If you use the Assembly Line framework, the following methods are all "aware" of the\nvariation on an address that handle un-homed individuals, and you do not need\nany special logic in the template file or attachment block:'}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"address.block()"}),"\n",(0,a.jsx)(s.li,{children:"address_block()"}),"\n",(0,a.jsx)(s.li,{children:"address.on_one_line()"}),"\n",(0,a.jsx)(s.li,{children:"address.line_one()"}),"\n",(0,a.jsx)(s.li,{children:"address.line_two()"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"handling-international-addresses",children:"Handling international addresses"}),"\n",(0,a.jsx)(s.p,{children:"Court forms usually require that one or both litigants in the action reside in\nthe United States, but they may require you to provide the address of a\nnon-party to the case. That person may not live in the same country as the\njurisdiction of the form."}),"\n",(0,a.jsx)(s.p,{children:'International addresses are complicated. Divisions like "state" may have a\ndifferent name and may not be commonly used to address mail in some countries.\nThe order of fields like postal code and apartment number may be totally\ndifferent.'}),"\n",(0,a.jsx)(s.p,{children:"Ideally, your address fields should accommodate the order and presence of fields\nfor at least the most common countries that your users will provide addresses\nfrom."}),"\n",(0,a.jsx)(s.p,{children:'The most common field that will cause trouble is the drop-down menu for "state".\nYou may want to replace this with a free-text field and make it optional when an\ninternational address might be provided in your interview.'}),"\n",(0,a.jsx)(s.h3,{id:"consider-a-fall-back-of-a-completely-open-text-field",children:"Consider a fall back of a completely open text field"}),"\n",(0,a.jsx)(s.p,{children:"The most flexible input of all for an address is a wide-open text field. This\nmay be appropriate to show as an alternative, even if your user is able to\nselect the country, to handle countries with address formats that you may not\nknow in advance."}),"\n",(0,a.jsx)(s.p,{children:"Keep in mind that this may not be a very good user experience for most users.\nYour default address question should be more standardized."}),"\n",(0,a.jsx)(s.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsx)(s.h3,{id:"collecting-international-addresses",children:"Collecting international addresses"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php",children:"https://www.uxmatters.com/mt/archives/2008/06/international-address-fields-in-web-forms.php"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513",children:"https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513"})}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"collecting-address-of-an-unhoused-person",children:"Collecting address of an unhoused person"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://demo.getcalfresh.org/",children:"https://demo.getcalfresh.org/"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,s,n)=>{n.d(s,{A:()=>i});n(6540);var a=n(8215);const r={tabItem:"tabItem_Ymn6"};var t=n(4848);function i(e){let{children:s,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:s})}},9489:(e,s,n)=>{n.d(s,{A:()=>w});var a=n(6540),r=n(8215),t=n(4245),i=n(6347),d=n(6494),o=n(2814),l=n(5167),c=n(9900);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:r}}=e;return{value:s,label:n,attributes:a,default:r}}))}(n);return function(e){const s=(0,l.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const r=(0,i.W6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function f(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,t=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:t}))),[l,u]=m({queryString:n,groupId:r}),[f,y]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),b=(()=>{const e=l??f;return p({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,t]),tabValues:t}}var y=n(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:s,block:n,selectedValue:a,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.a_)(),c=e=>{const s=e.currentTarget,n=o.indexOf(s),r=d[n].value;r!==a&&(l(s),i(r))},u=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:d.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>o.push(e),onKeyDown:u,onClick:c,...t,className:(0,r.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function j(e){const s=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...s,...e}),(0,g.jsx)(v,{...s,...e})]})}function w(e){const s=(0,y.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var a=n(6540);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);