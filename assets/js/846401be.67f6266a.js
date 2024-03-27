"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5464],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),d=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},_=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=d(n),_=a,c=f["".concat(r,".").concat(_)]||f[_]||u[_]||l;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=_;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[f]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}_.displayName="MDXCreateElement"},9185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(4137));const l={sidebar_label:"pdf_wrangling",title:"formfyxer.pdf_wrangling"},o=void 0,s={unversionedId:"reference/formfyxer/pdf_wrangling",id:"reference/formfyxer/pdf_wrangling",title:"formfyxer.pdf_wrangling",description:"FormField Objects",source:"@site/docs/reference/formfyxer/pdf_wrangling.md",sourceDirName:"reference/formfyxer",slug:"/reference/formfyxer/pdf_wrangling",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/pdf_wrangling",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/formfyxer/pdf_wrangling.md",tags:[],version:"current",frontMatter:{sidebar_label:"pdf_wrangling",title:"formfyxer.pdf_wrangling"},sidebar:"docs",previous:{title:"lit_explorer",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/formfyxer/lit_explorer"},next:{title:"Overview",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/overview"}},r={},d=[{value:"FormField Objects",id:"formfield-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"set_fields",id:"set_fields",level:4},{value:"rename_pdf_fields",id:"rename_pdf_fields",level:4},{value:"has_fields",id:"has_fields",level:4},{value:"get_existing_pdf_fields",id:"get_existing_pdf_fields",level:4},{value:"swap_pdf_page",id:"swap_pdf_page",level:4},{value:"copy_pdf_fields",id:"copy_pdf_fields",level:4},{value:"get_textboxes_in_pdf",id:"get_textboxes_in_pdf",level:4},{value:"get_bracket_chars_in_pdf",id:"get_bracket_chars_in_pdf",level:4},{value:"intersect_bbox",id:"intersect_bbox",level:4},{value:"intersect_bboxs",id:"intersect_bboxs",level:4},{value:"contain_boxes",id:"contain_boxes",level:4},{value:"get_dist_sq",id:"get_dist_sq",level:4},{value:"get_dist",id:"get_dist",level:4},{value:"get_connected_edges",id:"get_connected_edges",level:4},{value:"bbox_distance",id:"bbox_distance",level:4},{value:"get_possible_fields",id:"get_possible_fields",level:4},{value:"get_possible_checkboxes",id:"get_possible_checkboxes",level:4},{value:"get_possible_radios",id:"get_possible_radios",level:4},{value:"get_possible_text_fields",id:"get_possible_text_fields",level:4},{value:"auto_add_fields",id:"auto_add_fields",level:4},{value:"is_tagged",id:"is_tagged",level:4}],p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"formfield-objects"},"FormField Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class FormField()\n")),(0,a.kt)("p",null,"A data holding class, used to easily specify how a PDF form field should be created."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(field_name: str,\n             type_name: Union[FieldType, str],\n             x: int,\n             y: int,\n             font_size: Optional[int] = None,\n             tooltip: str = "",\n             configs: Optional[Dict[str, Any]] = None)\n')),(0,a.kt)("p",null,"Constructor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," - the x position of the lower left corner of the field. Should be in X,Y coordinates,\nwhere (0, 0) is the lower left of the page, x goes to the right, and units are in\npoints (1/72th of an inch)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")," - the y position of the lower left corner of the field. Should be in X,Y coordinates,\nwhere (0, 0) is the lower left of the page, y goes up, and units are in points\n(1/72th of an inch)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," - a dictionary containing any keyword argument to the reportlab field functions,\nwhich will vary depending on what type of field this is. See section 4.7 of the\n",(0,a.kt)("a",{parentName:"li",href:"https://www.reportlab.com/docs/reportlab-userguide.pdf"},"reportlab User Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"field_name")," - the name of the field, exposed to via most APIs. Not the tooltip, but ",(0,a.kt)("inlineCode",{parentName:"li"},"users1_name__0"))),(0,a.kt)("h4",{id:"set_fields"},"set","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def set_fields(in_file: Union[str, Path, BinaryIO],\n               out_file: Union[str, Path, BinaryIO],\n               fields_per_page: Iterable[Iterable[FormField]],\n               *,\n               overwrite=False)\n")),(0,a.kt)("p",null,"Adds fields per page to the in_file PDF, writing the new PDF to a new file."),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"set_fields(&#x27;no_fields.pdf&#x27;, &#x27;four_fields_on_second_page.pdf&#x27;,\n  [\n    [],  # nothing on the first page\n    [ # Second page\n      FormField(&#x27;new_field&#x27;, &#x27;text&#x27;, 110, 105, configs={&#x27;width&#x27;: 200, &#x27;height&#x27;: 30}),\n      # Choice needs value to be one of the possible options, and options to be a list of strings or tuples\n      FormField(&#x27;new_choices&#x27;, &#x27;choice&#x27;, 110, 400, configs={&#x27;value&#x27;: &#x27;Option 1&#x27;, &#x27;options&#x27;: [&#x27;Option 1&#x27;, &#x27;Option 2&#x27;]}),\n      # Radios need to have the same name, with different values\n      FormField(&#x27;new_radio1&#x27;, &#x27;radio&#x27;, 110, 600, configs={&#x27;value&#x27;: &#x27;option a&#x27;}),\n      FormField(&#x27;new_radio1&#x27;, &#x27;radio&#x27;, 110, 500, configs={&#x27;value&#x27;: &#x27;option b&#x27;})\n    ]\n  ]\n)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in_file")," - the input file name or path of a PDF that we","'","re adding the fields to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"out_file")," - the output file name or path where the new version of in_file will\nbe written. Doesn","'","t need to exist."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fields_per_page")," - for each page, a series of fields that should be added to that\npage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owerwrite")," - if the input file already some fields (AcroForm fields specifically)\nand this value is true, it will erase those existing fields and just add\n",(0,a.kt)("inlineCode",{parentName:"li"},"fields_per_page"),". If not true and the input file has fields, this won","'","t generate\na PDF, since there isn","'","t currently a way to merge AcroForm fields from\ndifferent PDFs.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  Nothing."),(0,a.kt)("h4",{id:"rename_pdf_fields"},"rename","_","pdf","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def rename_pdf_fields(in_file: Union[str, Path, BinaryIO],\n                      out_file: Union[str, Path, BinaryIO],\n                      mapping: Mapping[str, str]) -> None\n")),(0,a.kt)("p",null,"Given a dictionary that maps old to new field names, rename the AcroForm\nfield with a matching key to the specified value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"rename_pdf_fields(&#x27;current.pdf&#x27;, &#x27;new_field_names.pdf&#x27;,\n    {&#x27;abc123&#x27;: &#x27;user1_name&#x27;, &#x27;abc124&#x27;, &#x27;user1_address_city&#x27;})\n\nArgs:\n  in_file: the filename of an input file\n  out_file: the filename of the output file. Doesn&#x27;t need to exist,\n      will be overwritten if it does exist.\n  mapping: the python dict that maps from a current field name to the desired name\n\nReturns:\n  Nothing\n\n#### unlock\\_pdf\\_in\\_place\n\n```python\ndef unlock_pdf_in_place(in_file: Union[str, Path, BinaryIO]) -> None\n")),(0,a.kt)("p",null,"Try using pikePDF to unlock the PDF it it is locked. This won","'","t work if it has a non-zero length password."),(0,a.kt)("h4",{id:"has_fields"},"has","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def has_fields(pdf_file: str) -> bool\n")),(0,a.kt)("p",null,"Check if a PDF has at least one form field using PikePDF."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pdf_file")," ",(0,a.kt)("em",{parentName:"li"},"str")," - The path to the PDF file.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool")," - True if the PDF has at least one form field, False otherwise.")),(0,a.kt)("h4",{id:"get_existing_pdf_fields"},"get","_","existing","_","pdf","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_existing_pdf_fields(\n        in_file: Union[str, Path, BinaryIO, Pdf]) -> List[List[FormField]]\n")),(0,a.kt)("p",null,"Use PikePDF to get fields from the PDF"),(0,a.kt)("h4",{id:"swap_pdf_page"},"swap","_","pdf","_","page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def swap_pdf_page(*,\n                  source_pdf: Union[str, Path, Pdf],\n                  destination_pdf: Union[str, Path, Pdf],\n                  source_offset: int = 0,\n                  destination_offset: int = 0,\n                  append_fields: bool = False) -> Pdf\n")),(0,a.kt)("p",null,"(DEPRECATED: use copy_pdf_fields) Copies the AcroForm fields from one PDF to another blank PDF form. Optionally, choose a starting page for both\nthe source and destination PDFs. By default, it will remove any existing annotations (which include form fields)\nin the destination PDF. If you wish to append annotations instead, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"append_fields = True")),(0,a.kt)("h4",{id:"copy_pdf_fields"},"copy","_","pdf","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def copy_pdf_fields(*,\n                    source_pdf: Union[str, Path, Pdf],\n                    destination_pdf: Union[str, Path, Pdf],\n                    source_offset: int = 0,\n                    destination_offset: int = 0,\n                    append_fields: bool = False) -> Pdf\n")),(0,a.kt)("p",null,"Copies the AcroForm fields from one PDF to another blank PDF form (without AcroForm fields).\nUseful for getting started with an updated PDF form, where the old fields are pretty close to where\nthey should go on the new document."),(0,a.kt)("p",null,"Optionally, you can choose a starting page for both\nthe source and destination PDFs. By default, it will remove any existing annotations (which include form fields)\nin the destination PDF. If you wish to append annotations instead, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"append_fields = True")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"new_pdf_with_fields = copy_pdf_fields(\n    source_pdf=&quot;old_pdf.pdf&quot;,\n    destination_pdf=&quot;new_pdf_with_no_fields.pdf&quot;)\nnew_pdf_with_fields.save(&quot;new_pdf_with_fields.pdf&quot;)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_pdf")," - a file name or path to a PDF that has AcroForm fields"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"destination_pdf")," - a file name or path to a PDF without AcroForm fields. Existing fields will be removed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_offset")," - the starting page that fields will be copied from. Defaults to 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"destination_offset")," - the starting page that fields will be copied to. Defaults to 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"append_annotations")," - controls whether formfyxer will try to append form fields instead of\noverwriting. Defaults to false; when enabled may lead to undefined behavior.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  A pikepdf.Pdf object with new fields. If ",(0,a.kt)("inlineCode",{parentName:"p"},"blank_pdf")," was a pikepdf.Pdf object, the\nsame object is returned."),(0,a.kt)("h4",{id:"get_textboxes_in_pdf"},"get","_","textboxes","_","in","_","pdf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_textboxes_in_pdf(in_file: Union[str, Path, BinaryIO],\n                         line_margin=0.02,\n                         char_margin=2.0) -> List[List[Textbox]]\n")),(0,a.kt)("p",null,"Gets all of the text boxes found by pdfminer in a PDF, as well as their bounding boxes"),(0,a.kt)("h4",{id:"get_bracket_chars_in_pdf"},"get","_","bracket","_","chars","_","in","_","pdf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_bracket_chars_in_pdf(in_file: Union[str, Path, BinaryIO],\n                             line_margin=0.02,\n                             char_margin=0.0) -> List\n")),(0,a.kt)("p",null,"Gets all of the bracket characters (","'","['"," and ","']","'",") found by pdfminer in a PDF, as well as their bounding boxes\nTODO: Will eventually be used to find ","[ ]"," as checkboxes, but right now we can","'","t tell the difference between ","[ ]"," and ","[i]",".\nThis simply gets all of the brackets, and the characters of ","[hi]"," in a PDF and ","[ ]"," are the exact same distance apart.\nCurrently going with just ",'"',"[hi]",'"'," doesn","'","t happen, let","'","s hope that assumption holds."),(0,a.kt)("h4",{id:"intersect_bbox"},"intersect","_","bbox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def intersect_bbox(bbox_a, bbox_b, vert_dilation=2, horiz_dilation=2) -> bool\n")),(0,a.kt)("p",null,"bboxes are ","[left edge, bottom edge, horizontal length, vertical length]"),(0,a.kt)("h4",{id:"intersect_bboxs"},"intersect","_","bboxs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def intersect_bboxs(bbox_a,\n                    bboxes,\n                    vert_dilation=2,\n                    horiz_dilation=2) -> Iterable[bool]\n")),(0,a.kt)("p",null,"Returns an iterable of booleans, one of each of the input bboxes, true if it collides with bbox_a"),(0,a.kt)("h4",{id:"contain_boxes"},"contain","_","boxes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def contain_boxes(bbox_a: BoundingBoxF, bbox_b: BoundingBoxF) -> BoundingBoxF\n")),(0,a.kt)("p",null,"Given two bounding boxes, return a single bounding box that contains both of them."),(0,a.kt)("h4",{id:"get_dist_sq"},"get","_","dist","_","sq"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_dist_sq(point_a: XYPair, point_b: XYPair) -> float\n")),(0,a.kt)("p",null,"returns the distance squared between two points. Faster than the true euclidean dist"),(0,a.kt)("h4",{id:"get_dist"},"get","_","dist"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_dist(point_a: XYPair, point_b: XYPair) -> float\n")),(0,a.kt)("p",null,"euclidean (L^2 norm) distance between two points"),(0,a.kt)("h4",{id:"get_connected_edges"},"get","_","connected","_","edges"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_connected_edges(point: XYPair, point_list: Sequence)\n")),(0,a.kt)("p",null,"point list is always ordered clockwise from the bottom left,\ni.e. bottom left, top left, top right, bottom right"),(0,a.kt)("h4",{id:"bbox_distance"},"bbox","_","distance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def bbox_distance(\n    bbox_a: BoundingBoxF, bbox_b: BoundingBoxF\n) -> Tuple[float, Tuple[XYPair, XYPair], Tuple[XYPair, XYPair]]\n")),(0,a.kt)("p",null,"Gets our specific ",'"',"distance measure",'"'," between two different bounding boxes.\nThis distance is roughly the sum of the horizontal and vertical difference in alignment of\nthe closest shared field-bounding box edge. We are trying to find which, given a list of text boxes\naround a field, is the most likely to be the actual text label for the PDF field."),(0,a.kt)("p",null,"bboxes are 4 floats, x, y, width and height"),(0,a.kt)("h4",{id:"get_possible_fields"},"get","_","possible","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_fields(\n        in_pdf_file: Union[str, Path],\n        textboxes: Optional[List[List[Textbox]]] = None\n) -> List[List[FormField]]\n")),(0,a.kt)("p",null,"Given an input PDF, runs a series of heuristics to predict where there\nmight be places for user enterable information (i.e. PDF fields), and returns\nthose predictions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"fields = get_possible_fields(&#x27;no_field.pdf&#x27;)\nprint(fields[0][0])\n# Type: FieldType.TEXT, Name: name, User name: , X: 67.68, Y: 666.0, Configs: {&#x27;fieldFlags&#x27;: &#x27;doNotScroll&#x27;, &#x27;width&#x27;: 239.4, &#x27;height&#x27;: 16}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in_pdf_file")," - the input PDF"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"textboxes")," ",(0,a.kt)("em",{parentName:"li"},"optional")," - the location of various lines of text in the PDF.\nIf not given, will be calculated automatically. This allows us to\npass through expensive info to calculate through several functions.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  For each page in the input PDF, a list of predicted form fields"),(0,a.kt)("h4",{id:"get_possible_checkboxes"},"get","_","possible","_","checkboxes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_checkboxes(img: Union[str, cv2.Mat],\n                            find_small=False) -> Union[np.ndarray, List]\n")),(0,a.kt)("p",null,"Uses boxdetect library to determine if there are checkboxes on an image of a PDF page.\nAssumes the checkbox is square."),(0,a.kt)("p",null,"find_small: if true, finds smaller checkboxes. Sometimes will ",'"',"find",'"'," a checkbox in letters,\nlike O and D, if the font is too small"),(0,a.kt)("h4",{id:"get_possible_radios"},"get","_","possible","_","radios"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_radios(img: Union[str, BinaryIO, cv2.Mat])\n")),(0,a.kt)("p",null,"Even though it","'","s called ",'"',"radios",'"',", it just gets things shaped like circles, not\ndoing any semantic analysis yet."),(0,a.kt)("h4",{id:"get_possible_text_fields"},"get","_","possible","_","text","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_possible_text_fields(\n        img: Union[str, BinaryIO, cv2.Mat],\n        text_lines: List[Textbox],\n        default_line_height: int = 44) -> List[Tuple[BoundingBox, int]]\n")),(0,a.kt)("p",null,"Uses openCV to attempt to find places where a PDF could expect an input text field."),(0,a.kt)("p",null,"Caveats so far: only considers straight, normal horizonal lines that don","'","t touch any vertical lines as fields\nWon","'","t find field inputs as boxes"),(0,a.kt)("p",null,"default_line_height: the default height (16 pt), in pixels (at 200 dpi), which is 45"),(0,a.kt)("h4",{id:"auto_add_fields"},"auto","_","add","_","fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def auto_add_fields(in_pdf_file: Union[str, Path], out_pdf_file: Union[str,\n                                                                       Path])\n")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"#formfyxer.pdf_wrangling.get_possible_fields"},"get_possible_fields")," and\n",(0,a.kt)("a",{parentName:"p",href:"#formfyxer.pdf_wrangling.set_fields"},"set_fields")," to automatically add new detected fields\nto an input PDF."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"auto_add_fields(&#x27;no_fields.pdf&#x27;, &#x27;newly_added_fields.pdf&#x27;)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in_pdf_file")," - the input file name or path of the PDF where we","'","ll try to find possible fields"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"out_pdf_file")," - the output file name or path of the PDF where a new version of ",(0,a.kt)("inlineCode",{parentName:"li"},"in_pdf_file")," will\nbe stored, with the new fields. Doesn","'","t need to existing, but if a file does exist at that\nfilename, it will be overwritten.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  Nothing"),(0,a.kt)("h4",{id:"is_tagged"},"is","_","tagged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def is_tagged(in_pdf_file: Union[str, Path, pikepdf.Pdf]) -> bool\n")),(0,a.kt)("p",null,"Determines if the input PDF file is tagged for accessibility."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in_pdf_file")," ",(0,a.kt)("em",{parentName:"li"},"Union","[str, Path]")," - The path to the PDF file, as a string or a Path object.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool")," - True if the PDF is tagged, False otherwise.")))}f.isMDXComponent=!0}}]);