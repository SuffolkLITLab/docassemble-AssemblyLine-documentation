"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9319],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const l={sidebar_label:"lit_explorer",title:"formfyxer.lit_explorer"},s=void 0,i={unversionedId:"reference/formfyxer/lit_explorer",id:"reference/formfyxer/lit_explorer",title:"formfyxer.lit_explorer",description:"recursive\\get\\id",source:"@site/docs/reference/formfyxer/lit_explorer.md",sourceDirName:"reference/formfyxer",slug:"/reference/formfyxer/lit_explorer",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/lit_explorer",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/formfyxer/lit_explorer.md",tags:[],version:"current",frontMatter:{sidebar_label:"lit_explorer",title:"formfyxer.lit_explorer"},sidebar:"docs",previous:{title:"InterviewStats",permalink:"/docassemble-AssemblyLine-documentation/docs/analytics/tracking_usage"},next:{title:"pdf_wrangling",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/pdf_wrangling"}},o={},p=[{value:"recursive_get_id",id:"recursive_get_id",level:4},{value:"spot",id:"spot",level:4},{value:"re_case",id:"re_case",level:4},{value:"regex_norm_field",id:"regex_norm_field",level:4},{value:"reformat_field",id:"reformat_field",level:4},{value:"norm",id:"norm",level:4},{value:"vectorize",id:"vectorize",level:4},{value:"normalize_name",id:"normalize_name",level:4},{value:"cluster_screens",id:"cluster_screens",level:4},{value:"InputType Objects",id:"inputtype-objects",level:2},{value:"field_types_and_sizes",id:"field_types_and_sizes",level:4},{value:"AnswerType Objects",id:"answertype-objects",level:2},{value:"classify_field",id:"classify_field",level:4},{value:"get_adjusted_character_count",id:"get_adjusted_character_count",level:4},{value:"time_to_answer_field",id:"time_to_answer_field",level:4},{value:"time_to_answer_form",id:"time_to_answer_form",level:4},{value:"cleanup_text",id:"cleanup_text",level:4},{value:"text_complete",id:"text_complete",level:4},{value:"complete_with_command",id:"complete_with_command",level:4},{value:"needs_calculations",id:"needs_calculations",level:4},{value:"get_passive_sentences",id:"get_passive_sentences",level:4},{value:"get_citations",id:"get_citations",level:4},{value:"substitute_phrases",id:"substitute_phrases",level:4},{value:"substitute_neutral_gender",id:"substitute_neutral_gender",level:4},{value:"substitute_plain_language",id:"substitute_plain_language",level:4},{value:"transformed_sentences",id:"transformed_sentences",level:4},{value:"parse_form",id:"parse_form",level:4},{value:"form_complexity",id:"form_complexity",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"recursive_get_id"},"recursive","_","get","_","id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def recursive_get_id(values_to_unpack: Union[dict, list],\n                     tmpl: Optional[set] = None)\n")),(0,r.kt)("p",null,"Pull ID values out of the LIST/NSMI results from Spot."),(0,r.kt)("h4",{id:"spot"},"spot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def spot(text: str,\n         lower: float = 0.25,\n         pred: float = 0.5,\n         upper: float = 0.6,\n         verbose: float = 0,\n         token: str = "")\n')),(0,r.kt)("p",null,"Call the Spot API (",(0,r.kt)("a",{parentName:"p",href:"https://spot.suffolklitlab.org"},"https://spot.suffolklitlab.org"),") to classify the text of a PDF using\nthe NSMIv2/LIST taxonomy (",(0,r.kt)("a",{parentName:"p",href:"https://taxonomy.legal/"},"https://taxonomy.legal/"),"), but returns only the IDs of issues found in the text."),(0,r.kt)("h4",{id:"re_case"},"re","_","case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def re_case(text: str) -> str\n")),(0,r.kt)("p",null,"Capture PascalCase, snake_case and kebab-case terms and add spaces to separate the joined words"),(0,r.kt)("h4",{id:"regex_norm_field"},"regex","_","norm","_","field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def regex_norm_field(text: str)\n")),(0,r.kt)("p",null,"Apply some heuristics to a field name to see if we can get it to match AssemblyLine conventions.\nSee: ",(0,r.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/document_variables"},"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/document_variables")),(0,r.kt)("h4",{id:"reformat_field"},"reformat","_","field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def reformat_field(text: str, max_length: int = 30, tools_token=None)\n")),(0,r.kt)("p",null,"Transforms a string of text into a snake_case variable close in length to ",(0,r.kt)("inlineCode",{parentName:"p"},"max_length")," name by\nsummarizing the string and stitching the summary together in snake_case.\nh/t ",(0,r.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/nlp-building-a-summariser-68e0c19e3a93"},"https://towardsdatascience.com/nlp-building-a-summariser-68e0c19e3a93")),(0,r.kt)("h4",{id:"norm"},"norm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def norm(row)\n")),(0,r.kt)("p",null,"Normalize a word vector."),(0,r.kt)("h4",{id:"vectorize"},"vectorize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def vectorize(text: Union[List[str], str], tools_token: Optional[str] = None)\n")),(0,r.kt)("p",null,"Vectorize a string of text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text")," - a string of multiple words to vectorize"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tools_token")," - the token to tools.suffolklitlab.org, used for micro-service\nto reduce the amount of memory you need on your machine. If\nnot passed, you need to have ",(0,r.kt)("inlineCode",{parentName:"li"},"en_core_web_lg")," installed")),(0,r.kt)("h4",{id:"normalize_name"},"normalize","_","name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def normalize_name(jur: str,\n                   group: str,\n                   n: int,\n                   per,\n                   last_field: str,\n                   this_field: str,\n                   tools_token: Optional[str] = None) -> Tuple[str, float]\n")),(0,r.kt)("p",null,"Normalize a field name, if possible to the Assembly Line conventions, and if\nnot, to a snake_case variable name of appropriate length."),(0,r.kt)("p",null,"HACK: temporarily all we do is re-case it and normalize it using regex rules.\nWill be replaced with call to LLM soon."),(0,r.kt)("h4",{id:"cluster_screens"},"cluster","_","screens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def cluster_screens(fields: List[str] = [],\n                    damping: float = 0.7,\n                    tools_token: Optional[str] = None) -> Dict[str, List[str]]\n")),(0,r.kt)("p",null,"Groups the given fields into screens based on how much they are related."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fields")," - a list of field names"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damping")," - a value ",">","= 0.5 and ","<"," 1. Tunes how related screens should be"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tools_token")," - the token to tools.suffolklitlab.org, needed of doing\nmicro-service vectorization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Returns")," - a suggested screen grouping, each screen name mapped to the list of fields on it")),(0,r.kt)("h2",{id:"inputtype-objects"},"InputType Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class InputType(Enum)\n")),(0,r.kt)("p",null,"Input type maps onto the type of input the PDF author chose for the field. We only\nhandle text, checkbox, and signature fields."),(0,r.kt)("h4",{id:"field_types_and_sizes"},"field","_","types","_","and","_","sizes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def field_types_and_sizes(\n        fields: Optional[Iterable[FormField]]) -> List[FieldInfo]\n")),(0,r.kt)("p",null,"Transform the fields provided by get_existing_pdf_fields into a summary format.\nResult will look like:\n","[\n{\n",'"',"var_name",'"',": var_name,\n",'"',"type",'"',": ",'"',"text | checkbox | signature",'"',",\n",'"',"max_length",'"',": n\n}\n]"),(0,r.kt)("h2",{id:"answertype-objects"},"AnswerType Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class AnswerType(Enum)\n")),(0,r.kt)("p",null,"Answer type describes the effort the user answering the form will require.\n",'"',"Slot-in",'"'," answers are a matter of almost instantaneous recall, e.g., name, address, etc.\n",'"',"Gathered",'"'," answers require looking around one","'","s desk, for e.g., a health insurance number.\n",'"',"Third party",'"'," answers require picking up the phone to call someone else who is the keeper\nof the information.\n",'"',"Created",'"'," answers don","'","t exist before the user is presented with the question. They may include\na choice, creating a narrative, or even applying legal reasoning. ",'"',"Affidavits",'"'," are a special\nform of created answers.\nSee Jarret and Gaffney, Forms That Work (2008)"),(0,r.kt)("h4",{id:"classify_field"},"classify","_","field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def classify_field(field: FieldInfo, new_name: str) -> AnswerType\n")),(0,r.kt)("p",null,"Apply heuristics to the field","'","s original and ",'"',"normalized",'"'," name to classify\nit as either a ",'"',"slot-in",'"',", ",'"',"gathered",'"',", ",'"',"third party",'"'," or ",'"',"created",'"'," field type."),(0,r.kt)("h4",{id:"get_adjusted_character_count"},"get","_","adjusted","_","character","_","count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_adjusted_character_count(field: FieldInfo) -> float\n")),(0,r.kt)("p",null,"Determines the bracketed length of an input field based on its max_length attribute,\nreturning a float representing the approximate length of the field content."),(0,r.kt)("p",null,"The function chunks the answers into 5 different lengths (checkboxes, 2 words, short, medium, and long)\ninstead of directly using the character count, as forms can allocate different spaces\nfor the same data without considering the space the user actually needs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field")," ",(0,r.kt)("em",{parentName:"li"},"FieldInfo")," - An object containing information about the input field,\nincluding the ",'"',"max_length",'"'," attribute.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float")," - The approximate length of the field content, categorized into checkboxes, 2 words, short,\nmedium, or long based on the max_length attribute.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("p",null,"  ",">",">",">"," get_adjusted_character_count({",'"',"type",'"',"}: InputType.CHECKBOX)\n4.7\n",">",">",">"," get_adjusted_character_count({",'"',"max_length",'"',": 100})\n9.4\n",">",">",">"," get_adjusted_character_count({",'"',"max_length",'"',": 300})\n230\n",">",">",">"," get_adjusted_character_count({",'"',"max_length",'"',": 600})\n115\n",">",">",">"," get_adjusted_character_count({",'"',"max_length",'"',": 1200})\n1150"),(0,r.kt)("h4",{id:"time_to_answer_field"},"time","_","to","_","answer","_","field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def time_to_answer_field(field: FieldInfo,\n                         new_name: str,\n                         cpm: int = 40,\n                         cpm_std_dev: int = 17) -> Callable[[int], np.ndarray]\n")),(0,r.kt)("p",null,"Apply a heuristic for the time it takes to answer the given field, in minutes.\nIt is hand-written for now.\nIt will factor in the input type, the answer type (slot in, gathered, third party or created), and the\namount of input text allowed in the field.\nThe return value is a function that can return N samples of how long it will take to answer the field (in minutes)"),(0,r.kt)("h4",{id:"time_to_answer_form"},"time","_","to","_","answer","_","form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def time_to_answer_form(processed_fields,\n                        normalized_fields) -> Tuple[float, float]\n")),(0,r.kt)("p",null,"Provide an estimate of how long it would take an average user to respond to the questions\non the provided form.\nWe use signals such as the field type, name, and space provided for the response to come up with a\nrough estimate, based on whether the field is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"fill in the blank"),(0,r.kt)("li",{parentName:"ol"},"gathered - e.g., an id number, case number, etc."),(0,r.kt)("li",{parentName:"ol"},"third party: need to actually ask someone the information - e.g., income of not the user, anything else?"),(0,r.kt)("li",{parentName:"ol"},"created:\na. short created (3 lines or so?)\nb. long created (anything over 3 lines)")),(0,r.kt)("h4",{id:"cleanup_text"},"cleanup","_","text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def cleanup_text(text: str, fields_to_sentences: bool = False) -> str\n")),(0,r.kt)("p",null,"Apply cleanup routines to text to provide more accurate readability statistics."),(0,r.kt)("h4",{id:"text_complete"},"text","_","complete"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def text_complete(prompt: str,\n                  max_tokens: int = 500,\n                  creds: Optional[OpenAiCreds] = None,\n                  temperature: float = 0) -> str\n")),(0,r.kt)("p",null,"Run a prompt via openAI","'","s API and return the result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prompt")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The prompt to send to the API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_tokens")," ",(0,r.kt)("em",{parentName:"li"},"int, optional")," - The number of tokens to generate. Defaults to 500."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"creds")," ",(0,r.kt)("em",{parentName:"li"},"Optional","[OpenAiCreds]",", optional")," - The credentials to use. Defaults to None."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"temperature")," ",(0,r.kt)("em",{parentName:"li"},"float, optional")," - The temperature to use. Defaults to 0.")),(0,r.kt)("h4",{id:"complete_with_command"},"complete","_","with","_","command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def complete_with_command(text,\n                          command,\n                          tokens,\n                          creds: Optional[OpenAiCreds] = None) -> str\n")),(0,r.kt)("p",null,"Combines some text with a command to send to open ai."),(0,r.kt)("h4",{id:"needs_calculations"},"needs","_","calculations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def needs_calculations(text: Union[str, Doc]) -> bool\n")),(0,r.kt)("p",null,"A conservative guess at if a given form needs the filler to make math calculations,\nsomething that should be avoided. If"),(0,r.kt)("h4",{id:"get_passive_sentences"},"get","_","passive","_","sentences"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_passive_sentences(\n        text: Union[List, str]) -> List[Tuple[str, List[Tuple[int, int]]]]\n")),(0,r.kt)("p",null,"Return a list of tuples, where each tuple represents a\nsentence in which passive voice was detected along with a list of the\nstarting and ending position of each fragment that is phrased in the passive voice.\nThe combination of the two can be used in the PDFStats frontend to highlight the\npassive text in an individual sentence."),(0,r.kt)("p",null,"Text can either be a string or a list of strings.\nIf provided a single string, it will be tokenized with NTLK and\nsentences containing fewer than 2 words will be ignored."),(0,r.kt)("h4",{id:"get_citations"},"get","_","citations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_citations(text: str, tokenized_sentences: List[str]) -> List[str]\n")),(0,r.kt)("p",null,"Get citations and some extra surrounding context (the full sentence), if the citation is\nfewer than 5 characters (often eyecite only captures a section symbol\nfor state-level short citation formats)"),(0,r.kt)("h4",{id:"substitute_phrases"},"substitute","_","phrases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def substitute_phrases(\n        input_string: str,\n        substitution_phrases: Dict[str,\n                                   str]) -> Tuple[str, List[Tuple[int, int]]]\n")),(0,r.kt)("p",null,"Substitute phrases in the input string and return the new string and positions of substituted phrases."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input_string")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The input string containing phrases to be replaced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"substitution_phrases")," ",(0,r.kt)("em",{parentName:"li"},"Dict","[str, str]")," - A dictionary mapping original phrases to their replacement phrases.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  Tuple[str, List[Tuple","[int, int]","]]: A tuple containing the new string with substituted phrases and a list of\ntuples, each containing the start and end positions of the substituted\nphrases in the new string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",null,"  ",">",">",">"," input_string = ",'"',"The quick brown fox jumped over the lazy dog.",'"',"\n",">",">",">"," substitution_phrases = {",'"',"quick brown",'"',": ",'"',"swift reddish",'"',", ",'"',"lazy dog",'"',": ",'"',"sleepy canine",'"',"}\n",">",">",">"," new_string, positions = substitute_phrases(input_string, substitution_phrases)\n",">",">",">"," print(new_string)\n",'"',"The swift reddish fox jumped over the sleepy canine.",'"',"\n",">",">",">"," print(positions)\n","[(4, 17), (35, 48)]"),(0,r.kt)("h4",{id:"substitute_neutral_gender"},"substitute","_","neutral","_","gender"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def substitute_neutral_gender(\n        input_string: str) -> Tuple[str, List[Tuple[int, int]]]\n")),(0,r.kt)("p",null,"Substitute gendered phrases with neutral phrases in the input string.\nPrimary source is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/inclusive-language"},"https://github.com/joelparkerhenderson/inclusive-language")),(0,r.kt)("h4",{id:"substitute_plain_language"},"substitute","_","plain","_","language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def substitute_plain_language(\n        input_string: str) -> Tuple[str, List[Tuple[int, int]]]\n")),(0,r.kt)("p",null,"Substitute complex phrases with simpler alternatives.\nSource of terms is drawn from ",(0,r.kt)("a",{parentName:"p",href:"https://www.plainlanguage.gov/guidelines/words/"},"https://www.plainlanguage.gov/guidelines/words/")),(0,r.kt)("h4",{id:"transformed_sentences"},"transformed","_","sentences"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def transformed_sentences(\n        sentence_list: List[str],\n        fun: Callable) -> List[Tuple[str, str, List[Tuple[int, int]]]]\n")),(0,r.kt)("p",null,"Apply a function to a list of sentences and return only the sentences with changed terms.\nThe result is a tuple of the original sentence, new sentence, and the starting and ending position\nof each changed fragment in the sentence."),(0,r.kt)("h4",{id:"parse_form"},"parse","_","form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def parse_form(in_file: str,\n               title: Optional[str] = None,\n               jur: Optional[str] = None,\n               cat: Optional[str] = None,\n               normalize: bool = True,\n               spot_token: Optional[str] = None,\n               tools_token: Optional[str] = None,\n               openai_creds: Optional[OpenAiCreds] = None,\n               rewrite: bool = False,\n               debug: bool = False)\n")),(0,r.kt)("p",null,"Read in a pdf, pull out basic stats, attempt to normalize its form fields, and re-write the\nin_file with the new fields (if ",(0,r.kt)("inlineCode",{parentName:"p"},"rewrite=1"),"). If you pass a spot token, we will guess the\nNSMI code. If you pass openai creds, we will give suggestions for the title and description."),(0,r.kt)("h4",{id:"form_complexity"},"form","_","complexity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def form_complexity(stats)\n")),(0,r.kt)("p",null,"Gets a single number of how hard the form is to complete. Higher is harder."))}d.isMDXComponent=!0}}]);