"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7865],{2672:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=n(4848),r=n(8453);const t={sidebar_label:"project_maintenance",title:"AssemblyLine.project_maintenance"},c=void 0,o={id:"reference/AssemblyLine/project_maintenance",title:"AssemblyLine.project_maintenance",description:"get\\package\\names",source:"@site/docs/reference/AssemblyLine/project_maintenance.md",sourceDirName:"reference/AssemblyLine",slug:"/reference/AssemblyLine/project_maintenance",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/project_maintenance",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/AssemblyLine/project_maintenance.md",tags:[],version:"current",frontMatter:{sidebar_label:"project_maintenance",title:"AssemblyLine.project_maintenance"}},d={},l=[{value:"get_package_names",id:"get_package_names",level:4},{value:"add_tag_to_repos",id:"add_tag_to_repos",level:4},{value:"process_packages_and_add_tag",id:"process_packages_and_add_tag",level:4},{value:"get_project_by_name",id:"get_project_by_name",level:4},{value:"get_repos_by_topic",id:"get_repos_by_topic",level:4},{value:"add_issues_and_create_cards",id:"add_issues_and_create_cards",level:4},{value:"find_issues_by_title",id:"find_issues_by_title",level:4},{value:"add_issue_to_project",id:"add_issue_to_project",level:4},{value:"link_issue_title_to_project",id:"link_issue_title_to_project",level:4}];function a(e){const s={code:"code",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h4,{id:"get_package_names",children:"get_package_names"}),"\n",(0,i.jsx)(s.p,{children:"Fetches the JSON file from the given Docassemble server and extracts package names."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"server_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name or IP address of the Docassemble server."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"List[str]"})," - List of package names."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"add_tag_to_repos",children:"add_tag_to_repos"}),"\n",(0,i.jsx)(s.p,{children:"Adds a specific tag to each repository in the given list."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token (PAT) with appropriate permissions."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"repo_names"})," ",(0,i.jsx)(s.em,{children:"List[str]"})," - List of repository names to which the tag will be added."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"tag"})," ",(0,i.jsx)(s.em,{children:"str"})," - The tag to be added to the repositories."]}),"\n",(0,i.jsx)(s.p,{children:"This function iterates through each repository in the provided list, fetching the\ncurrent topics (tags) of the repository. If the specified tag is not already present,\nit adds the tag to the repository. The function includes error handling to catch and\nprint any errors that occur while processing each repository."}),"\n",(0,i.jsx)(s.p,{children:'Example usage:\npersonal_access_token = "YOUR_PERSONAL_ACCESS_TOKEN"\norganization_name = "YourOrgName"\nrepositories = ["repo1", "repo2", "repo3"]\ntag_to_add = "your-tag"'}),"\n",(0,i.jsx)(s.p,{children:"add_tag_to_repos(personal_access_token, organization_name, repositories, tag_to_add)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"process_packages_and_add_tag",children:"process_packages_and_add_tag"}),"\n",(0,i.jsx)(s.p,{children:"Fetches package names from a Docassemble server, transforms them into repository names,\nand adds a specified tag to each repository."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"server_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name or IP address of the Docassemble server."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"tag"})," ",(0,i.jsx)(s.em,{children:"str"})," - Tag to be added to each repository."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"get_project_by_name",children:"get_project_by_name"}),"\n",(0,i.jsx)(s.p,{children:"Finds a GitHub Next-Generation project by its name within an organization using GraphQL API."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"project_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub project."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"dict"})," - The GitHub project object, or None if not found."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"get_repos_by_topic",children:"get_repos_by_topic"}),"\n",(0,i.jsx)(s.p,{children:"Fetches repositories in an organization that have a specific topic."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"topic"})," ",(0,i.jsx)(s.em,{children:"str"})," - The GitHub topic to filter repositories by."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"List[Repository]"})," - A list of repository objects that have the specified topic."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"add_issues_and_create_cards",children:"add_issues_and_create_cards"}),"\n",(0,i.jsx)(s.p,{children:"Adds an issue to each repository with a specific topic and creates a card for each issue in a Next-Generation GitHub project."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"project_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub project."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"topic"})," ",(0,i.jsx)(s.em,{children:"str"})," - The GitHub topic to filter repositories by."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"issue_title"})," ",(0,i.jsx)(s.em,{children:"str"})," - Title of the issue."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"issue_body"})," ",(0,i.jsx)(s.em,{children:"str"})," - Body of the issue."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"find_issues_by_title",children:"find_issues_by_title"}),"\n",(0,i.jsx)(s.p,{children:"Finds issues in a list of repositories with a specific title."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"repo_names"})," ",(0,i.jsx)(s.em,{children:"list"})," - List of repository names."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"issue_title"})," ",(0,i.jsx)(s.em,{children:"str"})," - Title of the issue to be found."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"list"})," - A list of issue node IDs."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"add_issue_to_project",children:"add_issue_to_project"}),"\n",(0,i.jsx)(s.p,{children:"Adds an issue to a Next-Generation GitHub project."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"project_id"})," ",(0,i.jsx)(s.em,{children:"str"})," - Node ID of the GitHub project."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"issue_node_id"})," ",(0,i.jsx)(s.em,{children:"str"})," - Node ID of the GitHub issue."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"link_issue_title_to_project",children:"link_issue_title_to_project"}),"\n",(0,i.jsx)(s.p,{children:"Links issues with a specific title in repositories with a certain topic to a Next-Generation project."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"token"})," ",(0,i.jsx)(s.em,{children:"str"})," - GitHub Personal Access Token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"org_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub organization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"project_name"})," ",(0,i.jsx)(s.em,{children:"str"})," - Name of the GitHub project."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"topic"})," ",(0,i.jsx)(s.em,{children:"str"})," - The GitHub topic to filter repositories by."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"issue_title"})," ",(0,i.jsx)(s.em,{children:"str"})," - Title of the issue to link."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(6540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);