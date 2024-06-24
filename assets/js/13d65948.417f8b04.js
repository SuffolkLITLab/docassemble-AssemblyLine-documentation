"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9547],{7854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const r={sidebar_label:"lit_explorer",title:"formfyxer.lit_explorer"},l=void 0,a={id:"reference/formfyxer/lit_explorer",title:"formfyxer.lit_explorer",description:"recursive\\get\\id",source:"@site/docs/reference/formfyxer/lit_explorer.md",sourceDirName:"reference/formfyxer",slug:"/reference/formfyxer/lit_explorer",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/lit_explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/formfyxer/lit_explorer.md",tags:[],version:"current",frontMatter:{sidebar_label:"lit_explorer",title:"formfyxer.lit_explorer"},sidebar:"docs",previous:{title:"InterviewStats",permalink:"/docassemble-AssemblyLine-documentation/docs/analytics/tracking_usage"},next:{title:"pdf_wrangling",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/pdf_wrangling"}},o={},d=[{value:"recursive_get_id",id:"recursive_get_id",level:4},{value:"spot",id:"spot",level:4},{value:"re_case",id:"re_case",level:4},{value:"regex_norm_field",id:"regex_norm_field",level:4},{value:"reformat_field",id:"reformat_field",level:4},{value:"norm",id:"norm",level:4},{value:"vectorize",id:"vectorize",level:4},{value:"normalize_name",id:"normalize_name",level:4},{value:"cluster_screens",id:"cluster_screens",level:4},{value:"InputType Objects",id:"inputtype-objects",level:2},{value:"field_types_and_sizes",id:"field_types_and_sizes",level:4},{value:"AnswerType Objects",id:"answertype-objects",level:2},{value:"classify_field",id:"classify_field",level:4},{value:"get_adjusted_character_count",id:"get_adjusted_character_count",level:4},{value:"time_to_answer_field",id:"time_to_answer_field",level:4},{value:"time_to_answer_form",id:"time_to_answer_form",level:4},{value:"cleanup_text",id:"cleanup_text",level:4},{value:"text_complete",id:"text_complete",level:4},{value:"complete_with_command",id:"complete_with_command",level:4},{value:"needs_calculations",id:"needs_calculations",level:4},{value:"get_passive_sentences",id:"get_passive_sentences",level:4},{value:"get_citations",id:"get_citations",level:4},{value:"get_sensitive_data_types",id:"get_sensitive_data_types",level:4},{value:"substitute_phrases",id:"substitute_phrases",level:4},{value:"substitute_neutral_gender",id:"substitute_neutral_gender",level:4},{value:"substitute_plain_language",id:"substitute_plain_language",level:4},{value:"transformed_sentences",id:"transformed_sentences",level:4},{value:"parse_form",id:"parse_form",level:4},{value:"form_complexity",id:"form_complexity",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"recursive_get_id",children:"recursive_get_id"}),"\n",(0,s.jsx)(n.p,{children:"Pull ID values out of the LIST/NSMI results from Spot."}),"\n",(0,s.jsx)(n.h4,{id:"spot",children:"spot"}),"\n",(0,s.jsxs)(n.p,{children:["Call the Spot API (",(0,s.jsx)(n.a,{href:"https://spot.suffolklitlab.org",children:"https://spot.suffolklitlab.org"}),") to classify the text of a PDF using\nthe NSMIv2/LIST taxonomy (",(0,s.jsx)(n.a,{href:"https://taxonomy.legal/",children:"https://taxonomy.legal/"}),"), but returns only the IDs of issues found in the text."]}),"\n",(0,s.jsx)(n.h4,{id:"re_case",children:"re_case"}),"\n",(0,s.jsx)(n.p,{children:"Capture PascalCase, snake_case and kebab-case terms and add spaces to separate the joined words"}),"\n",(0,s.jsx)(n.h4,{id:"regex_norm_field",children:"regex_norm_field"}),"\n",(0,s.jsxs)(n.p,{children:["Apply some heuristics to a field name to see if we can get it to match AssemblyLine conventions.\nSee: ",(0,s.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/document_variables",children:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/document_variables"})]}),"\n",(0,s.jsx)(n.h4,{id:"reformat_field",children:"reformat_field"}),"\n",(0,s.jsxs)(n.p,{children:["Transforms a string of text into a snake_case variable close in length to ",(0,s.jsx)(n.code,{children:"max_length"})," name by\nsummarizing the string and stitching the summary together in snake_case.\nh/t ",(0,s.jsx)(n.a,{href:"https://towardsdatascience.com/nlp-building-a-summariser-68e0c19e3a93",children:"https://towardsdatascience.com/nlp-building-a-summariser-68e0c19e3a93"})]}),"\n",(0,s.jsx)(n.h4,{id:"norm",children:"norm"}),"\n",(0,s.jsx)(n.p,{children:"Normalize a word vector."}),"\n",(0,s.jsx)(n.h4,{id:"vectorize",children:"vectorize"}),"\n",(0,s.jsx)(n.p,{children:"Vectorize a string of text."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," - a string of multiple words to vectorize"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tools_token"})," - the token to tools.suffolklitlab.org, used for micro-service\nto reduce the amount of memory you need on your machine. If\nnot passed, you need to have ",(0,s.jsx)(n.code,{children:"en_core_web_lg"})," installed"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"normalize_name",children:"normalize_name"}),"\n",(0,s.jsx)(n.p,{children:"Normalize a field name, if possible to the Assembly Line conventions, and if\nnot, to a snake_case variable name of appropriate length."}),"\n",(0,s.jsx)(n.p,{children:"HACK: temporarily all we do is re-case it and normalize it using regex rules.\nWill be replaced with call to LLM soon."}),"\n",(0,s.jsx)(n.h4,{id:"cluster_screens",children:"cluster_screens"}),"\n",(0,s.jsx)(n.p,{children:"Groups the given fields into screens based on how much they are related."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fields"})," - a list of field names"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"damping"})," - a value >= 0.5 and < 1. Tunes how related screens should be"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools_token"})," - the token to tools.suffolklitlab.org, needed of doing\nmicro-service vectorization"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Returns"})," - a suggested screen grouping, each screen name mapped to the list of fields on it"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"inputtype-objects",children:"InputType Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class InputType(Enum)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Input type maps onto the type of input the PDF author chose for the field. We only\nhandle text, checkbox, and signature fields."}),"\n",(0,s.jsx)(n.h4,{id:"field_types_and_sizes",children:"field_types_and_sizes"}),"\n",(0,s.jsx)(n.p,{children:'Transform the fields provided by get_existing_pdf_fields into a summary format.\nResult will look like:\n[\n{\n"var_name": var_name,\n"type": "text | checkbox | signature",\n"max_length": n\n}\n]'}),"\n",(0,s.jsx)(n.h2,{id:"answertype-objects",children:"AnswerType Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AnswerType(Enum)\n"})}),"\n",(0,s.jsx)(n.p,{children:'Answer type describes the effort the user answering the form will require.\n"Slot-in" answers are a matter of almost instantaneous recall, e.g., name, address, etc.\n"Gathered" answers require looking around one\'s desk, for e.g., a health insurance number.\n"Third party" answers require picking up the phone to call someone else who is the keeper\nof the information.\n"Created" answers don\'t exist before the user is presented with the question. They may include\na choice, creating a narrative, or even applying legal reasoning. "Affidavits" are a special\nform of created answers.\nSee Jarret and Gaffney, Forms That Work (2008)'}),"\n",(0,s.jsx)(n.h4,{id:"classify_field",children:"classify_field"}),"\n",(0,s.jsx)(n.p,{children:'Apply heuristics to the field\'s original and "normalized" name to classify\nit as either a "slot-in", "gathered", "third party" or "created" field type.'}),"\n",(0,s.jsx)(n.h4,{id:"get_adjusted_character_count",children:"get_adjusted_character_count"}),"\n",(0,s.jsx)(n.p,{children:"Determines the bracketed length of an input field based on its max_length attribute,\nreturning a float representing the approximate length of the field content."}),"\n",(0,s.jsx)(n.p,{children:"The function chunks the answers into 5 different lengths (checkboxes, 2 words, short, medium, and long)\ninstead of directly using the character count, as forms can allocate different spaces\nfor the same data without considering the space the user actually needs."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"field"})," ",(0,s.jsx)(n.em,{children:"FieldInfo"}),' - An object containing information about the input field,\nincluding the "max_length" attribute.']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"float"})," - The approximate length of the field content, categorized into checkboxes, 2 words, short,\nmedium, or long based on the max_length attribute."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,s.jsx)(n.p,{children:'>>> get_adjusted_character_count({"type"}: InputType.CHECKBOX)\n4.7\n>>> get_adjusted_character_count({"max_length": 100})\n9.4\n>>> get_adjusted_character_count({"max_length": 300})\n230\n>>> get_adjusted_character_count({"max_length": 600})\n115\n>>> get_adjusted_character_count({"max_length": 1200})\n1150'}),"\n",(0,s.jsx)(n.h4,{id:"time_to_answer_field",children:"time_to_answer_field"}),"\n",(0,s.jsx)(n.p,{children:"Apply a heuristic for the time it takes to answer the given field, in minutes.\nIt is hand-written for now.\nIt will factor in the input type, the answer type (slot in, gathered, third party or created), and the\namount of input text allowed in the field.\nThe return value is a function that can return N samples of how long it will take to answer the field (in minutes)"}),"\n",(0,s.jsx)(n.h4,{id:"time_to_answer_form",children:"time_to_answer_form"}),"\n",(0,s.jsx)(n.p,{children:"Provide an estimate of how long it would take an average user to respond to the questions\non the provided form.\nWe use signals such as the field type, name, and space provided for the response to come up with a\nrough estimate, based on whether the field is:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"fill in the blank"}),"\n",(0,s.jsx)(n.li,{children:"gathered - e.g., an id number, case number, etc."}),"\n",(0,s.jsx)(n.li,{children:"third party: need to actually ask someone the information - e.g., income of not the user, anything else?"}),"\n",(0,s.jsx)(n.li,{children:"created:\na. short created (3 lines or so?)\nb. long created (anything over 3 lines)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"cleanup_text",children:"cleanup_text"}),"\n",(0,s.jsx)(n.p,{children:"Apply cleanup routines to text to provide more accurate readability statistics."}),"\n",(0,s.jsx)(n.h4,{id:"text_complete",children:"text_complete"}),"\n",(0,s.jsx)(n.p,{children:"Run a prompt via openAI's API and return the result."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt"})," ",(0,s.jsx)(n.em,{children:"str"})," - The prompt to send to the API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_tokens"})," ",(0,s.jsx)(n.em,{children:"int, optional"})," - The number of tokens to generate. Defaults to 500."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"creds"})," ",(0,s.jsx)(n.em,{children:"Optional[OpenAiCreds], optional"})," - The credentials to use. Defaults to None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"temperature"})," ",(0,s.jsx)(n.em,{children:"float, optional"})," - The temperature to use. Defaults to 0."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"complete_with_command",children:"complete_with_command"}),"\n",(0,s.jsx)(n.p,{children:"Combines some text with a command to send to open ai."}),"\n",(0,s.jsx)(n.h4,{id:"needs_calculations",children:"needs_calculations"}),"\n",(0,s.jsx)(n.p,{children:"A conservative guess at if a given form needs the filler to make math calculations,\nsomething that should be avoided. If"}),"\n",(0,s.jsx)(n.h4,{id:"get_passive_sentences",children:"get_passive_sentences"}),"\n",(0,s.jsx)(n.p,{children:"Return a list of tuples, where each tuple represents a\nsentence in which passive voice was detected along with a list of the\nstarting and ending position of each fragment that is phrased in the passive voice.\nThe combination of the two can be used in the PDFStats frontend to highlight the\npassive text in an individual sentence."}),"\n",(0,s.jsx)(n.p,{children:"Text can either be a string or a list of strings.\nIf provided a single string, it will be tokenized with NTLK and\nsentences containing fewer than 2 words will be ignored."}),"\n",(0,s.jsx)(n.h4,{id:"get_citations",children:"get_citations"}),"\n",(0,s.jsx)(n.p,{children:"Get citations and some extra surrounding context (the full sentence), if the citation is\nfewer than 5 characters (often eyecite only captures a section symbol\nfor state-level short citation formats)"}),"\n",(0,s.jsx)(n.h4,{id:"get_sensitive_data_types",children:"get_sensitive_data_types"}),"\n",(0,s.jsx)(n.p,{children:"Given a list of fields, identify those related to sensitive information and return a dictionary with the sensitive\nfields grouped by type. A list of the old field names can also be provided. These fields should be in the same\norder. Passing the old field names allows the sensitive field algorithm to match more accurately. The return value\nwill not contain the old field name, only the corresponding field name from the first parameter."}),"\n",(0,s.jsx)(n.p,{children:"The sensitive data types are: Bank Account Number, Credit Card Number, Driver's License Number, and Social Security\nNumber."}),"\n",(0,s.jsx)(n.h4,{id:"substitute_phrases",children:"substitute_phrases"}),"\n",(0,s.jsx)(n.p,{children:"Substitute phrases in the input string and return the new string and positions of substituted phrases."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input_string"})," ",(0,s.jsx)(n.em,{children:"str"})," - The input string containing phrases to be replaced."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"substitution_phrases"})," ",(0,s.jsx)(n.em,{children:"Dict[str, str]"})," - A dictionary mapping original phrases to their replacement phrases."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Tuple[str, List[Tuple[int, int]]]: A tuple containing the new string with substituted phrases and a list of\ntuples, each containing the start and end positions of the substituted\nphrases in the new string."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.p,{children:'>>> input_string = "The quick brown fox jumped over the lazy dog."\n>>> substitution_phrases = {"quick brown": "swift reddish", "lazy dog": "sleepy canine"}\n>>> new_string, positions = substitute_phrases(input_string, substitution_phrases)\n>>> print(new_string)\n"The swift reddish fox jumped over the sleepy canine."\n>>> print(positions)\n[(4, 17), (35, 48)]'}),"\n",(0,s.jsx)(n.h4,{id:"substitute_neutral_gender",children:"substitute_neutral_gender"}),"\n",(0,s.jsxs)(n.p,{children:["Substitute gendered phrases with neutral phrases in the input string.\nPrimary source is ",(0,s.jsx)(n.a,{href:"https://github.com/joelparkerhenderson/inclusive-language",children:"https://github.com/joelparkerhenderson/inclusive-language"})]}),"\n",(0,s.jsx)(n.h4,{id:"substitute_plain_language",children:"substitute_plain_language"}),"\n",(0,s.jsxs)(n.p,{children:["Substitute complex phrases with simpler alternatives.\nSource of terms is drawn from ",(0,s.jsx)(n.a,{href:"https://www.plainlanguage.gov/guidelines/words/",children:"https://www.plainlanguage.gov/guidelines/words/"})]}),"\n",(0,s.jsx)(n.h4,{id:"transformed_sentences",children:"transformed_sentences"}),"\n",(0,s.jsx)(n.p,{children:"Apply a function to a list of sentences and return only the sentences with changed terms.\nThe result is a tuple of the original sentence, new sentence, and the starting and ending position\nof each changed fragment in the sentence."}),"\n",(0,s.jsx)(n.h4,{id:"parse_form",children:"parse_form"}),"\n",(0,s.jsxs)(n.p,{children:["Read in a pdf, pull out basic stats, attempt to normalize its form fields, and re-write the\nin_file with the new fields (if ",(0,s.jsx)(n.code,{children:"rewrite=1"}),"). If you pass a spot token, we will guess the\nNSMI code. If you pass openai creds, we will give suggestions for the title and description."]}),"\n",(0,s.jsx)(n.h4,{id:"form_complexity",children:"form_complexity"}),"\n",(0,s.jsx)(n.p,{children:"Gets a single number of how hard the form is to complete. Higher is harder."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);