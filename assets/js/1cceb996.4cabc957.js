"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5617],{2373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(4848),s=t(8453);const o={sidebar_label:"misc",title:"ALToolbox.misc"},l=void 0,c={id:"reference/ALToolbox/misc",title:"ALToolbox.misc",description:"thousands",source:"@site/docs/reference/ALToolbox/misc.md",sourceDirName:"reference/ALToolbox",slug:"/reference/ALToolbox/misc",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/misc",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/ALToolbox/misc.md",tags:[],version:"current",frontMatter:{sidebar_label:"misc",title:"ALToolbox.misc"},sidebar:"docs",previous:{title:"copy_button",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/copy_button"},next:{title:"save_input_data",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/save_input_data"}},r={},d=[{value:"thousands",id:"thousands",level:4},{value:"tel",id:"tel",level:4},{value:"fa_icon",id:"fa_icon",level:4},{value:"space",id:"space",level:4},{value:"yes_no_unknown",id:"yes_no_unknown",level:4},{value:"number_to_letter",id:"number_to_letter",level:4},{value:"collapse_template",id:"collapse_template",level:4},{value:"tabbed_templates_html",id:"tabbed_templates_html",level:4},{value:"review_widget",id:"review_widget",level:4},{value:"sum_if_defined",id:"sum_if_defined",level:4},{value:"add_records",id:"add_records",level:4},{value:"output_checkbox",id:"output_checkbox",level:4},{value:"nice_county_name",id:"nice_county_name",level:4},{value:"button_array",id:"button_array",level:4}];function a(e){const n={a:"a",code:"code",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h4,{id:"thousands",children:"thousands"}),"\n",(0,i.jsx)(n.p,{children:"Return a whole number formatted with thousands separator.\nOptionally, format with 2 decimal points (for a PDF form with the\ncurrency symbol already present in the form)"}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"show_decimals"}),", will call ",(0,i.jsx)(n.code,{children:"int(num)"}),", truncating the decimals instead of\nrounding to the closest int."]}),"\n",(0,i.jsx)(n.h4,{id:"tel",children:"tel"}),"\n",(0,i.jsx)(n.p,{children:"Format a phone number so you can click on it to open in your phone dialer"}),"\n",(0,i.jsx)(n.h4,{id:"fa_icon",children:"fa_icon"}),"\n",(0,i.jsx)(n.p,{children:"Display a fontawesome icon inline."}),"\n",(0,i.jsxs)(n.p,{children:["Docassemble allows you to display an icon from ",(0,i.jsx)(n.a,{href:"https://fontawesome.com",children:"fontawesome"}),",\nbut it does not provide control over the size or color of the icon. This function gives\nyou more control over the icon that is inserted."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"icon"})," - a string representing a fontawesome icon. The icon needs to be in the\n",(0,i.jsx)(n.a,{href:"https://fontawesome.com/search?o=r&m=free",children:"free library"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"color"})," - can be any ",(0,i.jsx)(n.a,{href:"https://getbootstrapc.mo/docs/4.0/utilities/colors",children:"Bootstrap color variable"}),".\nFor example: ",(0,i.jsx)(n.code,{children:"primary"}),", ",(0,i.jsx)(n.code,{children:"secondary"}),", ",(0,i.jsx)(n.code,{children:"warning"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"color_css"})," - allows you to use a CSS code to represent the color, e.g., ",(0,i.jsx)(n.code,{children:"blue"}),", or ",(0,i.jsx)(n.code,{children:"fff"})," for black"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"})," - used to control the ",(0,i.jsx)(n.a,{href:"https://fontawesome.com/v6.0/docs/web/style/size",children:"fontawesome size"}),"\n(without the ",(0,i.jsx)(n.code,{children:"fa-"})," prefix). Valid values include ",(0,i.jsx)(n.code,{children:"2xs"}),", ",(0,i.jsx)(n.code,{children:"xs"}),", the default of ",(0,i.jsx)(n.code,{children:"sm"}),",\n",(0,i.jsx)(n.code,{children:"md"}),", ",(0,i.jsx)(n.code,{children:"lg"}),", ",(0,i.jsx)(n.code,{children:"xl"}),", ",(0,i.jsx)(n.code,{children:"2x1"}),", and the python ",(0,i.jsx)(n.code,{children:"None"}),", which defaults to ",(0,i.jsx)(n.code,{children:"md"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fa_class"})," - let's you specify the fontawesome class, needed for any icon that isn't\nthe default class of ",(0,i.jsx)(n.code,{children:"fa-solid"}),", like ",(0,i.jsx)(n.code,{children:"fa-brands"}),", or ",(0,i.jsx)(n.code,{children:"fa-regular"})," and ",(0,i.jsx)(n.code,{children:"fa-light"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aria_hidden"})," - if True, adds ",(0,i.jsx)(n.code,{children:'aria-hidden="true"'})," to the icon, which is the default"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"HTML for a font-awesome icon of the specified size and color."}),"\n",(0,i.jsx)(n.h4,{id:"space",children:"space"}),"\n",(0,i.jsx)(n.p,{children:"If the value as a string is defined, return it prefixed/suffixed. Defaults to prefix\nof a space. Helps build a sentence with less cruft. Equivalent to SPACE function in\nHotDocs."}),"\n",(0,i.jsx)(n.h4,{id:"yes_no_unknown",children:"yes_no_unknown"}),"\n",(0,i.jsx)(n.p,{children:"Return 'unknown' if the value is None rather than False. Helper for PDF filling with\nyesnomaybe fields"}),"\n",(0,i.jsx)(n.h4,{id:"number_to_letter",children:"number_to_letter"}),"\n",(0,i.jsx)(n.p,{children:"Returns a capital letter representing ordinal position. E.g., 1=A, 2=B, etc. Appends letters\nonce you reach 26 in a way compatible with Excel/Google Sheets column naming conventions. 27=AA, 28=AB..."}),"\n",(0,i.jsx)(n.h4,{id:"collapse_template",children:"collapse_template"}),"\n",(0,i.jsx)(n.p,{children:'Insert HTML for a Bootstrap "collapse" div.'}),"\n",(0,i.jsx)(n.p,{children:"Optionally, you can specify a custom icon to override the defaults:"}),"\n",(0,i.jsxs)(n.p,{children:['The default icons are "right caret" which displays when the text is collapsed (',(0,i.jsx)(n.code,{children:"closed_icon"}),') and\n"down caret" which displays when the text is open (',(0,i.jsx)(n.code,{children:"open_icon"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbed_templates_html",children:"tabbed_templates_html"}),"\n",(0,i.jsxs)(n.p,{children:["Provided a list of templates, create Bootstrap v 4.5 tabs with the ",(0,i.jsx)(n.code,{children:"subject"})," as the tab label."]}),"\n",(0,i.jsx)(n.h4,{id:"review_widget",children:"review_widget"}),"\n",(0,i.jsx)(n.p,{children:"A widget that allows people to give a quick review (thumbs up and down, with an optional text\ncomponent) in the middle of an interview without triggering a page reload."}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"review_action"})," is provided, once you press either of the thumbs, a text input screen with\na submit button appears, and once the text review is submitted (or after the thumbs, if no\n",(0,i.jsx)(n.code,{children:"review_action"}),' was provided), a final "thank you" message is displayed.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"up_action"})," - the variable name of an event to be executed on the server if the\nthumbs up is pressed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"down_action"})," - the variable name of an event to be executed on the server if the\nthumbs down is pressed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"review_action"})," - the variable name of an event to be execute on the\nserver when someone submits their text review"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"thumbs_display"})," - text displayed to user describing the thumbs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"review_display"})," - text displayed to user describing the text input"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"submit_review_button"})," - text on the button to submit their text review"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"post_review_display"})," - text displayed to user after review is submitted"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"the HTML string of the widget"}),"\n",(0,i.jsx)(n.h4,{id:"sum_if_defined",children:"sum_if_defined"}),"\n",(0,i.jsx)(n.p,{children:"Lets you add up the value of variables that are not in a list"}),"\n",(0,i.jsx)(n.h4,{id:"add_records",children:"add_records"}),"\n",(0,i.jsx)(n.p,{children:"List demo interviews in the current package to be run from the landing page"}),"\n",(0,i.jsx)(n.h4,{id:"output_checkbox",children:"output_checkbox"}),"\n",(0,i.jsx)(n.p,{children:"Generate a conditional checkbox for docx templates"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"checked_value"})," - defaults to ",(0,i.jsx)(n.code,{children:"[X]"})," but can be set to any string or even a ",(0,i.jsx)(n.code,{children:"DAFile"})," or ",(0,i.jsx)(n.code,{children:"DAStaticFile"}),"\nwith the image of a checkbox"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"unchecked_value"})," - opposite meaning of ",(0,i.jsx)(n.code,{children:"checked_value"})," and defaults to ",(0,i.jsx)(n.code,{children:"[  ]"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"nice_county_name",children:"nice_county_name"}),"\n",(0,i.jsx)(n.p,{children:'If the county name contains the word "County", which Google Address\nAutocomplete does by default, remove it.'}),"\n",(0,i.jsx)(n.h4,{id:"button_array",children:"button_array"}),"\n",(0,i.jsx)(n.p,{children:"Create a grid of da-buttons from a dictionary of links and icons"}),"\n",(0,i.jsxs)(n.p,{children:["This uses the same CSS classes to mimic the look and feel of Docassemble's ",(0,i.jsx)(n.code,{children:"buttons"})," field type, but\ndoesn't have the limits of that particular input method. This is meant to appear\non any page of an interview in the ",(0,i.jsx)(n.code,{children:"subquestion"})," area."]}),"\n",(0,i.jsx)(n.p,{children:"Optionally, you can limit access to paricular buttons by specifying a privilege or a list\nof privileges."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"button_list"})," - a dictionary of ButtonDicts (or plain dictionaries) with the following keys:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": the text to display on the button"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"}),": the name of a fontawesome icon to display on the button"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"}),": the name of the page to link to"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"privilege"}),": optional, the name of a Docassemble privilege that the user must have to see the button. Can be a list or a single string."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"custom_container_class"})," - optional, a string of additional CSS classes to add to the container div"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"custom_link_class"})," - optional, a string of additional CSS classes to add to each link"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"HTML for a grid of buttons"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);