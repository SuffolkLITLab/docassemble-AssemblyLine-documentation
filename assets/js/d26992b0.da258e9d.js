"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3929],{5253:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=n(4848),i=n(8453);const d={sidebar_label:"business_days",title:"ALToolbox.business_days"},a=void 0,o={id:"reference/ALToolbox/business_days",title:"ALToolbox.business_days",description:"standard\\_holidays",source:"@site/docs/reference/ALToolbox/business_days.md",sourceDirName:"reference/ALToolbox",slug:"/reference/ALToolbox/business_days",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/business_days",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/ALToolbox/business_days.md",tags:[],version:"current",frontMatter:{sidebar_label:"business_days",title:"ALToolbox.business_days"},sidebar:"docs",previous:{title:"Itemized Jobs\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/itemizedjobs"},next:{title:"copy_button",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/copy_button"}},r={},l=[{value:"standard_holidays",id:"standard_holidays",level:4},{value:"is_business_day",id:"is_business_day",level:4},{value:"get_next_business_day",id:"get_next_business_day",level:4},{value:"get_date_after_n_business_days",id:"get_date_after_n_business_days",level:4}];function c(e){const s={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h4,{id:"standard_holidays",children:"standard_holidays"}),"\n",(0,t.jsx)(s.p,{children:'Get all holidays in the specified year, country, and state (or other subdivision).\nNote that this draws on the "holidays" package which may deviate slightly from\nholidays observed by a local court, but should be very close to accurate.'}),"\n",(0,t.jsx)(s.p,{children:'add_holidays should be a dictionary from dates ("12-15") to the name of the holiday.'}),"\n",(0,t.jsx)(s.p,{children:"Returns a dictionary like-object that you can treat like:"}),"\n",(0,t.jsx)(s.p,{children:"In place of a string, the object that is returned can also be treated as though\nthe keys are datetime.date objects."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'\\{\n    "2021-01-01": "New Year\'s Day",\n    ...\n    "2021-12-25": "Christmas Day",\n\\}\n'})}),"\n",(0,t.jsx)(s.h4,{id:"is_business_day",children:"is_business_day"}),"\n",(0,t.jsx)(s.p,{children:"Returns true if and only if the specified date is a business day (i.e., not a holiday)\nin the specified jurisdiction. Business days are considered to be:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"weekdays other than Saturday and Sunday and"}),"\n",(0,t.jsx)(s.li,{children:"days that are not a federal or state-observed holiday"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'assert(is_business_day("2023-03-26") == False)\n'})}),"\n",(0,t.jsx)(s.h4,{id:"get_next_business_day",children:"get_next_business_day"}),"\n",(0,t.jsxs)(s.p,{children:["Returns the first day AFTER the specified start date that is\nnot a federal or state holiday, Saturday or Sunday. Optionally,\nspecify the parameter ",(0,t.jsx)(s.code,{children:"wait_n_days"})," to get the first business day after\nat least, e.g., 10 days."]}),"\n",(0,t.jsxs)(s.p,{children:["Relies on the Python holidays package, which has fairly good support for\nholidays around the world and in various states and provinces, but local\ncourt rules may differ. You can see what holidays are used at\n",(0,t.jsx)(s.a,{href:"https://github.com/dr-prodigy/python-holidays/tree/master/holidays/countries",children:"https://github.com/dr-prodigy/python-holidays/tree/master/holidays/countries"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"start_date"}),' - the date to start with. Can be a date-formatted string (i.e. "2023-03-37", or\n"3-27-2023") or a DADateTime object']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"wait_n_days"})," - the number of days to find the find the date after. If 0, it returns the given\ndate if it's a business day."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"country"})," - the county to use business days from"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"subdiv"})," - the subdivision (e.g. state or province) to use business days from"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"add_holidays"}),' - a dictionary from the date string ("12/25") to the name of the holiday,\nwill add those holidays to be considered']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"remove_holidays"}),' - the list of date strings ("12/25") of dates that are no longer holidays']}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"get_date_after_n_business_days",children:"get_date_after_n_business_days"}),"\n",(0,t.jsxs)(s.p,{children:["Returns a time period which contains a minimum of ",(0,t.jsx)(s.code,{children:"n"})," business days."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"start_date"}),' - the date to start with. Can be a date-formatted string (i.e. "2023-03-37", or\n"3-27-2023") or a DADateTime object']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"wait_n_days"})," - the number of businesses days to wait for. For example, ",(0,t.jsx)(s.code,{children:"start_date"})," is a\nFriday, and ",(0,t.jsx)(s.code,{children:"wait_n_days"})," is 2, then the date returned will be the next Tuesday."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"country"})," - the county to use business days from"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"subdiv"})," - the subdivision (e.g. state or province) to use business days from"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"add_holidays"}),' - a dictionary from the date string ("12/25") to the name of the holiday,\nwill add those holidays to be considered']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"remove_holidays"}),' - the list of date strings ("12/25") of dates that are no longer holidays']}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(6540);const i={},d=t.createContext(i);function a(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);