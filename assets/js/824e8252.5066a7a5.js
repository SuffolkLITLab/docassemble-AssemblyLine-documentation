"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[391],{4730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(4848),a=n(8453);const i={id:"tracking_usage",title:"InterviewStats: Tracking usage of Assembly Line interviews",sidebar_label:"InterviewStats",slug:"/analytics/tracking_usage"},o=void 0,r={id:"analytics/tracking_usage",title:"InterviewStats: Tracking usage of Assembly Line interviews",description:"Overview",source:"@site/docs/analytics/tracking_usage.md",sourceDirName:"analytics",slug:"/analytics/tracking_usage",permalink:"/docs/analytics/tracking_usage",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/analytics/tracking_usage.md",tags:[],version:"current",frontMatter:{id:"tracking_usage",title:"InterviewStats: Tracking usage of Assembly Line interviews",sidebar_label:"InterviewStats",slug:"/analytics/tracking_usage"},sidebar:"docs",previous:{title:"Feedback",permalink:"/docs/framework/github_feedback"},next:{title:"lit_explorer",permalink:"/docs/reference/formfyxer/lit_explorer"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Collecting anonymous analytics with Google or Segment",id:"collecting-anonymous-analytics-with-google-or-segment",level:2},{value:"Collecting information with <code>store_variables_snapshot()</code>",id:"collecting-information-with-store_variables_snapshot",level:2},{value:"Viewing information stored by <code>store_variables_snapshot()</code>",id:"viewing-information-stored-by-store_variables_snapshot",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Docassemble is designed to protect the privacy of interview users. However, you may\nhave very good reasons to collect usage information:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Your users might all be inside a single organization rather than consumers"}),"\n",(0,s.jsx)(t.li,{children:"You may need to collect anonymous statistics to report to a funder"}),"\n",(0,s.jsx)(t.li,{children:"You may be an entity like a court or tribunal and need the information for a\nlegitimate purpose, to serve the user or litigant's needs"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"collecting-anonymous-analytics-with-google-or-segment",children:"Collecting anonymous analytics with Google or Segment"}),"\n",(0,s.jsxs)(t.p,{children:["Docassemble has a native integration with both ",(0,s.jsx)(t.a,{href:"https://docassemble.org/docs/config.html#google%20analytics",children:"Google\nAnalytics"})," and\n",(0,s.jsx)(t.a,{href:"https://docassemble.org/docs/config.html#segment%20id",children:"Segment"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Google is widely used and free, but usage is reported to Google and used for\npurposes of selling advertisements. Segment is a commercial analytics tool with\na paid tier."}),"\n",(0,s.jsx)(t.p,{children:"An advantage of Google Analytics and Segment is that the data will be stored for\nthe long term and you do not need to worry about persisting it between server\noutages or upgrades, nor about retaining information long term on your server. A\ndisadvantage is that they rely on well-known user tracking tools that may be\nblocked by ad-blocking or other security software, so the usage statistics may\nnot be completely accurate."}),"\n",(0,s.jsx)(t.p,{children:"To use this integration:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure each question in your interview has an ",(0,s.jsx)(t.code,{children:"id"}),". The ",(0,s.jsx)(t.code,{children:"id"})," specifier\nwill be added automatically to interviews created with the Assembly Line Weaver."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"id: this is the google or segment analytics id\nquestion: |\n  What is your name\nfields:\n  - Name: user_name\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Sign up for Google Analytics or Segment, and follow the ",(0,s.jsx)(t.a,{href:"https://docassemble.org/docs/config.html#google%20analytics",children:"Docassemble\ndocumentation"})," to\nenable tracking with the system of your choice."]}),"\n",(0,s.jsxs)(t.p,{children:["This integration allows for very basic tracking. You can identify popular\ninterviews, screens, and dropoff points. Perhaps the most important thing to\ntrack is to assign an id named ",(0,s.jsx)(t.code,{children:"download"}),' to your download screen. Then, inside\nGoogle Analytics, you can search for the keyword "download" under Behavior |\nSite Content | All pages.']}),"\n",(0,s.jsx)(t.p,{children:'Note that the "page url" in Google Analytics will have the name of the package\nand YAML file inserted into the URL. This means you do not need to worry about\nprefixing the page IDs in order to uniquely track the usage of different\ninterviews installed on your server.'}),"\n",(0,s.jsxs)(t.h2,{id:"collecting-information-with-store_variables_snapshot",children:["Collecting information with ",(0,s.jsx)(t.code,{children:"store_variables_snapshot()"})]}),"\n",(0,s.jsxs)(t.p,{children:["By default, every interview created by the Weaver includes this line in a\nmandatory ",(0,s.jsx)(t.code,{children:"code"})," block:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'store_variables_snapshot({"zip": users[0].address.zip})\n'})}),"\n",(0,s.jsx)(t.p,{children:"This code runs immediately before the download screen, providing a good proxy of\ncompleted interviews. It stores the user's zip code in the Docassemble\ndatatabase, and can be used to run reports about anonymous usage."}),"\n",(0,s.jsxs)(t.p,{children:["You can choose to narrow or expand the data that is captured with this tool. The\ndefault stores only the zip code, but if you remove all parameters, the user's\nfull interview session will be captured in a simplified state. You can also\nmanually add additional interview variables that you want to store. For example,\nif you wanted to store the user's city and the list of options they chose for a\ncheckbox variable named ",(0,s.jsx)(t.code,{children:"user_preference"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'store_variables_snapshot({\n    "zip": users[0].address.zip,\n    "city": users[0].address.city,\n    "user_preference": user_preference.true_values()\n    })\n'})}),"\n",(0,s.jsx)(t.p,{children:'Docassemble interviews can store complex nested objects that don\'t fit neatly in\na spreadsheet. If you want to manipulate the data later, you may want to\n"flatten" the data so that it is a neat linear list of fields. That will make\nlater analysis easier.'}),"\n",(0,s.jsxs)(t.p,{children:["You may also want to adjust the time that the data is stored. If you add the\nparameter ",(0,s.jsx)(t.code,{children:"persistent=True"}),", the data will persist even if the user's session is deleted,\nwhich may happen every 90 days in a default Docassemble server environment."]}),"\n",(0,s.jsxs)(t.p,{children:["Full documentation for\n",(0,s.jsx)(t.a,{href:"https://docassemble.org/docs/functions.html#store_variables_snapshot",children:(0,s.jsx)(t.code,{children:"store_variables_snapshot()"})}),"\ncan be found on the Docassemble website."]}),"\n",(0,s.jsxs)(t.h3,{id:"viewing-information-stored-by-store_variables_snapshot",children:["Viewing information stored by ",(0,s.jsx)(t.code,{children:"store_variables_snapshot()"})]}),"\n",(0,s.jsxs)(t.p,{children:["You can use the Assembly Line\n",(0,s.jsx)(t.a,{href:"https://github.com/suffolklitlab/docassemble-InterviewStats",children:(0,s.jsx)(t.code,{children:"InterviewStats"})})," package to\nview statistics that are captured with ",(0,s.jsx)(t.code,{children:"store_variables_snapshot()"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"InterviewStats"})," can be installed with the ",(0,s.jsx)(t.code,{children:"ALDashboard"})," installation wizard.\nOnce it is installed, visit\n",(0,s.jsx)(t.code,{children:"https://docassemble.example.com/start/InterviewStats/stats"})," (replace\ndocassemble.example.com with the correct address for your docassemble server)."]}),"\n",(0,s.jsxs)(t.p,{children:["You will see a selection of interviews to choose from. This list is taken from\nthe list of interviews that you have set up in the ",(0,s.jsxs)(t.a,{href:"https://docassemble.org/docs/config.html#dispatch",children:[(0,s.jsx)(t.code,{children:"dispatch"}),"\ndirective"]})," in your\ndocassemble configuration file."]}),"\n",(0,s.jsx)(t.p,{children:"Once you select an interview, you will be able browse and view basic summary information about it.\nYou will also see a link to download the full data as an Excel spreadsheet."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);