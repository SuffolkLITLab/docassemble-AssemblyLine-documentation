"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9068],{6949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(4848),i=t(8453);const s={sidebar_label:"docx_wrangling",title:"formfyxer.docx_wrangling"},o=void 0,d={id:"reference/formfyxer/docx_wrangling",title:"formfyxer.docx_wrangling",description:"update\\_docx",source:"@site/docs/reference/formfyxer/docx_wrangling.md",sourceDirName:"reference/formfyxer",slug:"/reference/formfyxer/docx_wrangling",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/docx_wrangling",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/formfyxer/docx_wrangling.md",tags:[],version:"current",frontMatter:{sidebar_label:"docx_wrangling",title:"formfyxer.docx_wrangling"}},a={},l=[{value:"update_docx",id:"update_docx",level:4},{value:"get_docx_repr",id:"get_docx_repr",level:4},{value:"get_labeled_docx_runs",id:"get_labeled_docx_runs",level:4},{value:"get_modified_docx_runs",id:"get_modified_docx_runs",level:4},{value:"make_docx_plain_language",id:"make_docx_plain_language",level:4},{value:"modify_docx_with_openai_guesses",id:"modify_docx_with_openai_guesses",level:4}];function c(e){const n={code:"code",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"update_docx",children:"update_docx"}),"\n",(0,r.jsx)(n.p,{children:"Update the document with the modified runs."}),"\n",(0,r.jsx)(n.p,{children:"Note: OpenAI is probabilistic, so the modified run indices may not be correct.\nWhen the index of a run or paragraph is out of range, a new paragraph\nwill be inserted at the end of the document or a new run at the end of the\nparagraph's runs."}),"\n",(0,r.jsx)(n.p,{children:"Take a careful look at the output document to make sure it is still correct."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"document"})," - the docx.Document object, or the path to the DOCX file"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modified_runs"})," - a tuple of paragraph number, run number, the modified text, a question (not used), and whether a new paragraph should be inserted (for conditional text)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"The modified document."}),"\n",(0,r.jsx)(n.h4,{id:"get_docx_repr",children:"get_docx_repr"}),"\n",(0,r.jsx)(n.p,{children:"Return a JSON representation of the paragraphs and runs in the DOCX file."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx_path"})," - path to the DOCX file"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"A JSON representation of the paragraphs and runs in the DOCX file."}),"\n",(0,r.jsx)(n.h4,{id:"get_labeled_docx_runs",children:"get_labeled_docx_runs"}),"\n",(0,r.jsx)(n.p,{children:"Scan the DOCX and return a list of modified text with Jinja2 variable names inserted."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx_path"})," - path to the DOCX file"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx_repr"})," - a string representation of the paragraphs and runs in the DOCX file, if docx_path is not provided. This might be useful if you want"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"custom_people_names"}),' - a tuple of custom names and descriptions to use in addition to the default ones. Like: ("clients", "the person benefiting from the form")']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"A list of tuples, each containing a paragraph number, run number, and the modified text of the run."}),"\n",(0,r.jsx)(n.h4,{id:"get_modified_docx_runs",children:"get_modified_docx_runs"}),"\n",(0,r.jsx)(n.p,{children:"Use GPT to rewrite the contents of a DOCX file paragraph by paragraph. Does not handle tables, footers, or\nother structures yet."}),"\n",(0,r.jsx)(n.p,{children:"This is a light wrapper that provides the structure of DOCX paragraphs and runs to your prompt\nto OpenAI to facilitate the rewriting of the document without disrupting formatting."}),"\n",(0,r.jsx)(n.p,{children:"For example, this could be used to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Remove any passive voice"}),"\n",(0,r.jsx)(n.li,{children:"Replace placeholder text with variable names"}),"\n",(0,r.jsx)(n.li,{children:"Rewrite to a 6th grade reading level"}),"\n",(0,r.jsx)(n.li,{children:"Do an advanced search and replace, without requiring you to use a regex"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, the example prompt includes a sample like this:"}),"\n",(0,r.jsx)(n.p,{children:'[\n[0, 0, "Dear "],\n[0, 1, "John Smith:"],\n[1, 0, "I hope this letter finds you well."],\n]'}),"\n",(0,r.jsx)(n.p,{children:"Your custom instructions should include an example of how the sample will be modified, like the one below:"}),"\n",(0,r.jsx)(n.p,{children:"Example reply, indicating paragraph, run, the new text, and a number indicating if this changes the\ncurrent paragraph, adds one before, or adds one after (-1, 0, 1):"}),"\n",(0,r.jsx)(n.p,{children:'{"results":\n[\n[0, 1, "Dear {{ other_parties[0] }}:", 0],\n[2, 0, "{%p if is_tenant %}", -1],\n[3, 0, "{%p endif %}", 1],\n]\n}'}),"\n",(0,r.jsx)(n.p,{children:"You may also want to customize the input example to better match your use case."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx_path"})," ",(0,r.jsx)(n.em,{children:"str"})," - path to the DOCX file"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx_repr"})," ",(0,r.jsx)(n.em,{children:"str"})," - a string representation of the paragraphs and runs in the DOCX file, if docx_path is not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"custom_example"})," ",(0,r.jsx)(n.em,{children:"Optional[str]"})," - a string containing the purpose and overview of the task\ninstructions (str) a string containing specific instructions for the task"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"openai_client"})," ",(0,r.jsx)(n.em,{children:"Optional[OpenAI]"})," - an OpenAI client object. If not provided a new one will be created."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api_key"})," ",(0,r.jsx)(n.em,{children:"Optional[str]"})," - an OpenAI API key. If not provided, it will be obtained from the environment"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"temperature"})," ",(0,r.jsx)(n.em,{children:"float"})," - the temperature to use when generating text. Lower temperatures are more conservative."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"A list of tuples, each containing a paragraph number, run number, and the modified text of the run."}),"\n",(0,r.jsx)(n.h4,{id:"make_docx_plain_language",children:"make_docx_plain_language"}),"\n",(0,r.jsx)(n.p,{children:"Convert a DOCX file to plain language with the help of OpenAI."}),"\n",(0,r.jsx)(n.h4,{id:"modify_docx_with_openai_guesses",children:"modify_docx_with_openai_guesses"}),"\n",(0,r.jsx)(n.p,{children:"Uses OpenAI to guess the variable names for a document and then modifies the document with the guesses."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx_path"})," ",(0,r.jsx)(n.em,{children:"str"})," - Path to the DOCX file to modify."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docx.Document"})," - The modified document, ready to be saved to the same or a new path"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);