"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3113],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const i={sidebar_label:"misc",title:"ALToolbox.misc"},l=void 0,r={unversionedId:"reference/ALToolbox/misc",id:"reference/ALToolbox/misc",title:"ALToolbox.misc",description:"thousands",source:"@site/docs/reference/ALToolbox/misc.md",sourceDirName:"reference/ALToolbox",slug:"/reference/ALToolbox/misc",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/misc",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/ALToolbox/misc.md",tags:[],version:"current",frontMatter:{sidebar_label:"misc",title:"ALToolbox.misc"},sidebar:"docs",previous:{title:"copy_button",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/copy_button"},next:{title:"save_input_data",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/save_input_data"}},s={},p=[{value:"thousands",id:"thousands",level:4},{value:"tel",id:"tel",level:4},{value:"fa_icon",id:"fa_icon",level:4},{value:"space",id:"space",level:4},{value:"yes_no_unknown",id:"yes_no_unknown",level:4},{value:"number_to_letter",id:"number_to_letter",level:4},{value:"collapse_template",id:"collapse_template",level:4},{value:"tabbed_templates_html",id:"tabbed_templates_html",level:4},{value:"review_widget",id:"review_widget",level:4},{value:"sum_if_defined",id:"sum_if_defined",level:4},{value:"add_records",id:"add_records",level:4},{value:"output_checkbox",id:"output_checkbox",level:4},{value:"nice_county_name",id:"nice_county_name",level:4},{value:"button_array",id:"button_array",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"thousands"},"thousands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def thousands(num: Union[float, str, Decimal], show_decimals=False) -> str\n")),(0,o.kt)("p",null,"Return a whole number formatted with thousands separator.\nOptionally, format with 2 decimal points (for a PDF form with the\ncurrency symbol already present in the form)"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"show_decimals"),", will call ",(0,o.kt)("inlineCode",{parentName:"p"},"int(num)"),", truncating the decimals instead of\nrounding to the closest int."),(0,o.kt)("h4",{id:"tel"},"tel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def tel(phone_number) -> str\n")),(0,o.kt)("p",null,"Format a phone number so you can click on it to open in your phone dialer"),(0,o.kt)("h4",{id:"fa_icon"},"fa","_","icon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def fa_icon(icon: str,\n            color: Optional[str] = "primary",\n            color_css: Optional[str] = None,\n            size: Optional[str] = "sm",\n            fa_class: str = "fa-solid",\n            aria_hidden: bool = True) -> str\n')),(0,o.kt)("p",null,"Display a fontawesome icon inline."),(0,o.kt)("p",null,"Docassemble allows you to display an icon from ",(0,o.kt)("a",{parentName:"p",href:"https://fontawesome.com"},"fontawesome"),",\nbut it does not provide control over the size or color of the icon. This function gives\nyou more control over the icon that is inserted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"icon")," - a string representing a fontawesome icon. The icon needs to be in the\n",(0,o.kt)("a",{parentName:"li",href:"https://fontawesome.com/search?o=r&m=free"},"free library"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color")," - can be any ",(0,o.kt)("a",{parentName:"li",href:"https://getbootstrapc.mo/docs/4.0/utilities/colors"},"Bootstrap color variable"),".\nFor example: ",(0,o.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"warning")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color_css")," - allows you to use a CSS code to represent the color, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"blue"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"fff")," for black"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," - used to control the ",(0,o.kt)("a",{parentName:"li",href:"https://fontawesome.com/v6.0/docs/web/style/size"},"fontawesome size"),"\n(without the ",(0,o.kt)("inlineCode",{parentName:"li"},"fa-")," prefix). Valid values include ",(0,o.kt)("inlineCode",{parentName:"li"},"2xs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"xs"),", the default of ",(0,o.kt)("inlineCode",{parentName:"li"},"sm"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"md"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"lg"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"xl"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"2x1"),", and the python ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),", which defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"md"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fa_class")," - let","'","s you specify the fontawesome class, needed for any icon that isn","'","t\nthe default class of ",(0,o.kt)("inlineCode",{parentName:"li"},"fa-solid"),", like ",(0,o.kt)("inlineCode",{parentName:"li"},"fa-brands"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"fa-regular")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"fa-light"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aria_hidden")," - if True, adds ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-hidden=&quot;true&quot;")," to the icon, which is the default")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,"  HTML for a font-awesome icon of the specified size and color."),(0,o.kt)("h4",{id:"space"},"space"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def space(var_name: str, prefix=" ", suffix="") -> str\n')),(0,o.kt)("p",null,"If the value as a string is defined, return it prefixed/suffixed. Defaults to prefix\nof a space. Helps build a sentence with less cruft. Equivalent to SPACE function in\nHotDocs."),(0,o.kt)("h4",{id:"yes_no_unknown"},"yes","_","no","_","unknown"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def yes_no_unknown(var_name: str,\n                   condition: Optional[bool],\n                   unknown="Unknown",\n                   placeholder=0)\n')),(0,o.kt)("p",null,"Return ","'","unknown","'"," if the value is None rather than False. Helper for PDF filling with\nyesnomaybe fields"),(0,o.kt)("h4",{id:"number_to_letter"},"number","_","to","_","letter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def number_to_letter(n: Optional[int]) -> str\n")),(0,o.kt)("p",null,"Returns a capital letter representing ordinal position. E.g., 1=A, 2=B, etc. Appends letters\nonce you reach 26 in a way compatible with Excel/Google Sheets column naming conventions. 27=AA, 28=AB..."),(0,o.kt)("h4",{id:"collapse_template"},"collapse","_","template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def collapse_template(template,\n                      classname=None,\n                      closed_icon="caret-right",\n                      open_icon="caret-down")\n')),(0,o.kt)("p",null,"Insert HTML for a Bootstrap ",'"',"collapse",'"'," div."),(0,o.kt)("p",null,"Optionally, you can specify a custom icon to override the defaults:"),(0,o.kt)("p",null,"The default icons are ",'"',"right caret",'"'," which displays when the text is collapsed (",(0,o.kt)("inlineCode",{parentName:"p"},"closed_icon"),") and\n",'"',"down caret",'"'," which displays when the text is open (",(0,o.kt)("inlineCode",{parentName:"p"},"open_icon"),")."),(0,o.kt)("h4",{id:"tabbed_templates_html"},"tabbed","_","templates","_","html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def tabbed_templates_html(tab_group_name: str, *pargs) -> str\n")),(0,o.kt)("p",null,"Provided a list of templates, create Bootstrap v 4.5 tabs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," as the tab label."),(0,o.kt)("h4",{id:"review_widget"},"review","_","widget"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def review_widget(\n        *,\n        up_action: str,\n        down_action: str,\n        review_action: Optional[str] = None,\n        thumbs_display: str = "Did we help you?",\n        review_display:\n    str = "Thank you for your feedback. Let us know what we could do better",\n        submit_review_button: str = "Add your review",\n        post_review_display: str = "Thank you for your review!") -> str\n')),(0,o.kt)("p",null,"A widget that allows people to give a quick review (thumbs up and down, with an optional text\ncomponent) in the middle of an interview without triggering a page reload."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"review_action")," is provided, once you press either of the thumbs, a text input screen with\na submit button appears, and once the text review is submitted (or after the thumbs, if no\n",(0,o.kt)("inlineCode",{parentName:"p"},"review_action")," was provided), a final ",'"',"thank you",'"'," message is displayed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"up_action")," - the variable name of an event to be executed on the server if the\nthumbs up is pressed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"down_action")," - the variable name of an event to be executed on the server if the\nthumbs down is pressed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"review_action")," - the variable name of an event to be execute on the\nserver when someone submits their text review"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"thumbs_display")," - text displayed to user describing the thumbs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"review_display")," - text displayed to user describing the text input"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"submit_review_button")," - text on the button to submit their text review"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"post_review_display")," - text displayed to user after review is submitted")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,"  the HTML string of the widget"),(0,o.kt)("h4",{id:"sum_if_defined"},"sum","_","if","_","defined"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def sum_if_defined(*pargs)\n")),(0,o.kt)("p",null,"Lets you add up the value of variables that are not in a list"),(0,o.kt)("h4",{id:"add_records"},"add","_","records"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def add_records(obj, labels)\n")),(0,o.kt)("p",null,"List demo interviews in the current package to be run from the landing page"),(0,o.kt)("h4",{id:"output_checkbox"},"output","_","checkbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def output_checkbox(value_to_check: bool,\n                    checked_value: str = "[X]",\n                    unchecked_value: str = "[  ]")\n')),(0,o.kt)("p",null,"Generate a conditional checkbox for docx templates"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checked_value")," - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"[X]")," but can be set to any string or even a ",(0,o.kt)("inlineCode",{parentName:"li"},"DAFile")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"DAStaticFile"),"\nwith the image of a checkbox"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unchecked_value")," - opposite meaning of ",(0,o.kt)("inlineCode",{parentName:"li"},"checked_value")," and defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"[  ]"))),(0,o.kt)("h4",{id:"nice_county_name"},"nice","_","county","_","name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def nice_county_name(address: Address) -> str\n")),(0,o.kt)("p",null,"If the county name contains the word ",'"',"County",'"',", which Google Address\nAutocomplete does by default, remove it."),(0,o.kt)("h4",{id:"button_array"},"button","_","array"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def button_array(buttons: List[ButtonDict],\n                 custom_container_class="",\n                 custom_link_class="") -> str\n')),(0,o.kt)("p",null,"Create a grid of da-buttons from a dictionary of links and icons"),(0,o.kt)("p",null,"This uses the same CSS classes to mimic the look and feel of Docassemble","'","s ",(0,o.kt)("inlineCode",{parentName:"p"},"buttons")," field type, but\ndoesn","'","t have the limits of that particular input method. This is meant to appear\non any page of an interview in the ",(0,o.kt)("inlineCode",{parentName:"p"},"subquestion")," area."),(0,o.kt)("p",null,"Optionally, you can limit access to paricular buttons by specifying a privilege or a list\nof privileges."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button_list")," - a dictionary of ButtonDicts (or plain dictionaries) with the following keys:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": the text to display on the button"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image"),": the name of a fontawesome icon to display on the button"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": the name of the page to link to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"privilege"),": optional, the name of a Docassemble privilege that the user must have to see the button. Can be a list or a single string."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom_container_class")," - optional, a string of additional CSS classes to add to the container div"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom_link_class")," - optional, a string of additional CSS classes to add to each link")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,"  HTML for a grid of buttons"))}d.isMDXComponent=!0}}]);