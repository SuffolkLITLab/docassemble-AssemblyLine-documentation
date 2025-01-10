"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[931],{3902:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=i(4848),s=i(8453);const l={sidebar_label:"pdf_wrangling",title:"formfyxer.pdf_wrangling"},o=void 0,d={id:"components/FormFyxer/pdf_wrangling",title:"formfyxer.pdf_wrangling",description:"FieldType Objects",source:"@site/docs/components/FormFyxer/pdf_wrangling.md",sourceDirName:"components/FormFyxer",slug:"/components/FormFyxer/pdf_wrangling",permalink:"/docs/components/FormFyxer/pdf_wrangling",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/FormFyxer/pdf_wrangling.md",tags:[],version:"current",frontMatter:{sidebar_label:"pdf_wrangling",title:"formfyxer.pdf_wrangling"},sidebar:"docs",previous:{title:"docx_wrangling",permalink:"/docs/components/FormFyxer/docx_wrangling"},next:{title:"EFSP overview",permalink:"/docs/components/EFSPIntegration/overview"}},r={},a=[{value:"FieldType Objects",id:"fieldtype-objects",level:2},{value:"TEXT",id:"text",level:4},{value:"AREA",id:"area",level:4},{value:"LIST_BOX",id:"list_box",level:4},{value:"CHOICE",id:"choice",level:4},{value:"FormField Objects",id:"formfield-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"set_fields",id:"set_fields",level:4},{value:"rename_pdf_fields",id:"rename_pdf_fields",level:4},{value:"get_original_text_with_fields",id:"get_original_text_with_fields",level:4},{value:"get_textboxes_in_pdf",id:"get_textboxes_in_pdf",level:4},{value:"get_bracket_chars_in_pdf",id:"get_bracket_chars_in_pdf",level:4},{value:"intersect_bbox",id:"intersect_bbox",level:4},{value:"intersect_bboxs",id:"intersect_bboxs",level:4},{value:"contain_boxes",id:"contain_boxes",level:4},{value:"get_dist_sq",id:"get_dist_sq",level:4},{value:"get_dist",id:"get_dist",level:4},{value:"get_connected_edges",id:"get_connected_edges",level:4},{value:"bbox_distance",id:"bbox_distance",level:4},{value:"get_possible_fields",id:"get_possible_fields",level:4},{value:"LowestVertVisitor Objects",id:"lowestvertvisitor-objects",level:2},{value:"replace_in_original",id:"replace_in_original",level:4},{value:"get_possible_checkboxes",id:"get_possible_checkboxes",level:4},{value:"get_possible_radios",id:"get_possible_radios",level:4},{value:"get_possible_text_fields",id:"get_possible_text_fields",level:4},{value:"auto_add_fields",id:"auto_add_fields",level:4},{value:"is_tagged",id:"is_tagged",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"fieldtype-objects",children:"FieldType Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class FieldType(Enum)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"text",children:"TEXT"}),"\n",(0,t.jsx)(n.p,{children:"Text input Field"}),"\n",(0,t.jsx)(n.h4,{id:"area",children:"AREA"}),"\n",(0,t.jsx)(n.p,{children:"Text input Field, but an area"}),"\n",(0,t.jsx)(n.h4,{id:"list_box",children:"LIST_BOX"}),"\n",(0,t.jsx)(n.p,{children:"allows multiple selection"}),"\n",(0,t.jsx)(n.h4,{id:"choice",children:"CHOICE"}),"\n",(0,t.jsx)(n.p,{children:"allows only one selection"}),"\n",(0,t.jsx)(n.h2,{id:"formfield-objects",children:"FormField Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class FormField()\n"})}),"\n",(0,t.jsx)(n.p,{children:"A data holding class, used to easily specify how a PDF form field should be created."}),"\n",(0,t.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(n.p,{children:"Constructor"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x"})," - the x position of the lower left corner of the field. Should be in X,Y coordinates,\nwhere (0, 0) is the lower left of the page, x goes to the right, and units are in\npoints (1/72th of an inch)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"})," - the y position of the lower left corner of the field. Should be in X,Y coordinates,\nwhere (0, 0) is the lower left of the page, y goes up, and units are in points\n(1/72th of an inch)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config"})," - a dictionary containing any keyword argument to the reportlab field functions,\nwhich will vary depending on what type of field this is. See section 4.7 of the\n",(0,t.jsx)(n.a,{href:"https://www.reportlab.com/docs/reportlab-userguide.pdf",children:"reportlab User Guide"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"field_name"})," - the name of the field, exposed to via most APIs. Not the tooltip, but ",(0,t.jsx)(n.code,{children:"users1_name__0"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"set_fields",children:"set_fields"}),"\n",(0,t.jsx)(n.p,{children:"Adds fields per page to the in_file PDF, writing the new PDF to a new file."}),"\n",(0,t.jsx)(n.p,{children:"Example usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"set_fields('no_fields.pdf', 'four_fields_on_second_page.pdf',\n  [\n    [],  # nothing on the first page\n    [ # Second page\n      FormField('new_field', 'text', 110, 105, configs=\\{'width': 200, 'height': 30\\}),\n      # Choice needs value to be one of the possible options, and options to be a list of strings or tuples\n      FormField('new_choices', 'choice', 110, 400, configs=\\{'value': 'Option 1', 'options': ['Option 1', 'Option 2']\\}),\n      # Radios need to have the same name, with different values\n      FormField('new_radio1', 'radio', 110, 600, configs=\\{'value': 'option a'\\}),\n      FormField('new_radio1', 'radio', 110, 500, configs=\\{'value': 'option b'\\})\n    ]\n  ]\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"in_file"})," - the input file name or path of a PDF that we're adding the fields to"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"out_file"})," - the output file name or path where the new version of in_file will\nbe written. Doesn't need to exist."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fields_per_page"})," - for each page, a series of fields that should be added to that\npage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"owerwrite"})," - if the input file already some fields (AcroForm fields specifically)\nand this value is true, it will erase those existing fields and just add\n",(0,t.jsx)(n.code,{children:"fields_per_page"}),". If not true and the input file has fields, this won't generate\na PDF, since there isn't currently a way to merge AcroForm fields from\ndifferent PDFs."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Nothing."}),"\n",(0,t.jsx)(n.h4,{id:"rename_pdf_fields",children:"rename_pdf_fields"}),"\n",(0,t.jsx)(n.p,{children:"Given a dictionary that maps old to new field names, rename the AcroForm\nfield with a matching key to the specified value."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'rename_pdf_fields(&#x27;current.pdf&#x27;, &#x27;new_field_names.pdf&#x27;,\n    \\{&#x27;abc123&#x27;: &#x27;user1_name&#x27;, &#x27;abc124&#x27;, &#x27;user1_address_city&#x27;\\})\n\nArgs:\n  in_file: the filename of an input file\n  out_file: the filename of the output file. Doesn&#x27;t need to exist,\n      will be overwritten if it does exist.\n  mapping: the python dict that maps from a current field name to the desired name\n\nReturns:\n  Nothing\n\n#### unlock\\_pdf\\_in\\_place\n\nTry using pikePDF to unlock the PDF it it is locked. This won&#x27;t work if it has a non-zero length password.\n\n#### has\\_fields\n\nCheck if a PDF has at least one form field using PikePDF.\n\n**Arguments**:\n\n- `pdf_file` _str_ - The path to the PDF file.\n  \n\n**Returns**:\n\n- `bool` - True if the PDF has at least one form field, False otherwise.\n\n#### get\\_existing\\_pdf\\_fields\n\nUse PikePDF to get fields from the PDF\n\n#### swap\\_pdf\\_page\n\n(DEPRECATED: use copy_pdf_fields) Copies the AcroForm fields from one PDF to another blank PDF form. Optionally, choose a starting page for both\nthe source and destination PDFs. By default, it will remove any existing annotations (which include form fields)\nin the destination PDF. If you wish to append annotations instead, specify `append_fields = True`\n\n#### copy\\_pdf\\_fields\n\nCopies the AcroForm fields from one PDF to another blank PDF form (without AcroForm fields).\nUseful for getting started with an updated PDF form, where the old fields are pretty close to where\nthey should go on the new document.\n\nOptionally, you can choose a starting page for both\nthe source and destination PDFs. By default, it will remove any existing annotations (which include form fields)\nin the destination PDF. If you wish to append annotations instead, specify `append_fields = True`\n\n**Example**:\n\n```python\nnew_pdf_with_fields = copy_pdf_fields(\n    source_pdf="old_pdf.pdf",\n    destination_pdf="new_pdf_with_no_fields.pdf")\nnew_pdf_with_fields.save("new_pdf_with_fields.pdf")\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source_pdf"})," - a file name or path to a PDF that has AcroForm fields"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"destination_pdf"})," - a file name or path to a PDF without AcroForm fields. Existing fields will be removed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source_offset"})," - the starting page that fields will be copied from. Defaults to 0."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"destination_offset"})," - the starting page that fields will be copied to. Defaults to 0."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"append_annotations"})," - controls whether formfyxer will try to append form fields instead of\noverwriting. Defaults to false; when enabled may lead to undefined behavior."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["A pikepdf.Pdf object with new fields. If ",(0,t.jsx)(n.code,{children:"blank_pdf"})," was a pikepdf.Pdf object, the\nsame object is returned."]}),"\n",(0,t.jsx)(n.h4,{id:"get_original_text_with_fields",children:"get_original_text_with_fields"}),"\n",(0,t.jsx)(n.p,{children:"Gets the original text of the document, with the names of the fields in jinja format ({{field_name}})"}),"\n",(0,t.jsx)(n.h4,{id:"get_textboxes_in_pdf",children:"get_textboxes_in_pdf"}),"\n",(0,t.jsx)(n.p,{children:"Gets all of the text boxes found by pdfminer in a PDF, as well as their bounding boxes"}),"\n",(0,t.jsx)(n.h4,{id:"get_bracket_chars_in_pdf",children:"get_bracket_chars_in_pdf"}),"\n",(0,t.jsx)(n.p,{children:"Gets all of the bracket characters ('[' and ']') found by pdfminer in a PDF, as well as their bounding boxes\nTODO: Will eventually be used to find [ ] as checkboxes, but right now we can't tell the difference between [ ] and [i].\nThis simply gets all of the brackets, and the characters of [hi] in a PDF and [ ] are the exact same distance apart.\nCurrently going with just \"[hi]\" doesn't happen, let's hope that assumption holds."}),"\n",(0,t.jsx)(n.h4,{id:"intersect_bbox",children:"intersect_bbox"}),"\n",(0,t.jsx)(n.p,{children:"bboxes are [left edge, bottom edge, horizontal length, vertical length]"}),"\n",(0,t.jsx)(n.h4,{id:"intersect_bboxs",children:"intersect_bboxs"}),"\n",(0,t.jsx)(n.p,{children:"Returns an iterable of booleans, one of each of the input bboxes, true if it collides with bbox_a"}),"\n",(0,t.jsx)(n.h4,{id:"contain_boxes",children:"contain_boxes"}),"\n",(0,t.jsx)(n.p,{children:"Given two bounding boxes, return a single bounding box that contains both of them."}),"\n",(0,t.jsx)(n.h4,{id:"get_dist_sq",children:"get_dist_sq"}),"\n",(0,t.jsx)(n.p,{children:"returns the distance squared between two points. Faster than the true euclidean dist"}),"\n",(0,t.jsx)(n.h4,{id:"get_dist",children:"get_dist"}),"\n",(0,t.jsx)(n.p,{children:"euclidean (L^2 norm) distance between two points"}),"\n",(0,t.jsx)(n.h4,{id:"get_connected_edges",children:"get_connected_edges"}),"\n",(0,t.jsx)(n.p,{children:"point list is always ordered clockwise from the bottom left,\ni.e. bottom left, top left, top right, bottom right"}),"\n",(0,t.jsx)(n.h4,{id:"bbox_distance",children:"bbox_distance"}),"\n",(0,t.jsx)(n.p,{children:'Gets our specific "distance measure" between two different bounding boxes.\nThis distance is roughly the sum of the horizontal and vertical difference in alignment of\nthe closest shared field-bounding box edge. We are trying to find which, given a list of text boxes\naround a field, is the most likely to be the actual text label for the PDF field.'}),"\n",(0,t.jsx)(n.p,{children:"bboxes are 4 floats, x, y, width and height"}),"\n",(0,t.jsx)(n.h4,{id:"get_possible_fields",children:"get_possible_fields"}),"\n",(0,t.jsx)(n.p,{children:"Given an input PDF, runs a series of heuristics to predict where there\nmight be places for user enterable information (i.e. PDF fields), and returns\nthose predictions."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"fields = get_possible_fields('no_field.pdf')\nprint(fields[0][0])\n# Type: FieldType.TEXT, Name: name, User name: , X: 67.68, Y: 666.0, Configs: \\{'fieldFlags': 'doNotScroll', 'width': 239.4, 'height': 16\\}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"in_pdf_file"})," - the input PDF"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"textboxes"})," ",(0,t.jsx)(n.em,{children:"optional"})," - the location of various lines of text in the PDF.\nIf not given, will be calculated automatically. This allows us to\npass through expensive info to calculate through several functions."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"For each page in the input PDF, a list of predicted form fields"}),"\n",(0,t.jsx)(n.h2,{id:"lowestvertvisitor-objects",children:"LowestVertVisitor Objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class LowestVertVisitor()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Gets just the closest text to the field, and returns that"}),"\n",(0,t.jsx)(n.h4,{id:"replace_in_original",children:"replace_in_original"}),"\n",(0,t.jsx)(n.p,{children:"Given the original text of a PDF (extract_text(...)), adds the field's names in their best places.\nDoesn't always work, especially with duplicate text."}),"\n",(0,t.jsx)(n.h4,{id:"get_possible_checkboxes",children:"get_possible_checkboxes"}),"\n",(0,t.jsx)(n.p,{children:"Uses boxdetect library to determine if there are checkboxes on an image of a PDF page.\nAssumes the checkbox is square."}),"\n",(0,t.jsx)(n.p,{children:'find_small: if true, finds smaller checkboxes. Sometimes will "find" a checkbox in letters,\nlike O and D, if the font is too small'}),"\n",(0,t.jsx)(n.h4,{id:"get_possible_radios",children:"get_possible_radios"}),"\n",(0,t.jsx)(n.p,{children:'Even though it\'s called "radios", it just gets things shaped like circles, not\ndoing any semantic analysis yet.'}),"\n",(0,t.jsx)(n.h4,{id:"get_possible_text_fields",children:"get_possible_text_fields"}),"\n",(0,t.jsx)(n.p,{children:"Uses openCV to attempt to find places where a PDF could expect an input text field."}),"\n",(0,t.jsx)(n.p,{children:"Caveats so far: only considers straight, normal horizonal lines that don't touch any vertical lines as fields\nWon't find field inputs as boxes"}),"\n",(0,t.jsx)(n.p,{children:"default_line_height: the default height (16 pt), in pixels (at 200 dpi), which is 45"}),"\n",(0,t.jsx)(n.h4,{id:"auto_add_fields",children:"auto_add_fields"}),"\n",(0,t.jsxs)(n.p,{children:["Uses ",(0,t.jsx)(n.a,{href:"#get_possible_fields",children:"get_possible_fields"})," and\n",(0,t.jsx)(n.a,{href:"#set_fields",children:"set_fields"})," to automatically add new detected fields\nto an input PDF."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"auto_add_fields('no_fields.pdf', 'newly_added_fields.pdf')\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"in_pdf_file"})," - the input file name or path of the PDF where we'll try to find possible fields"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"out_pdf_file"})," - the output file name or path of the PDF where a new version of ",(0,t.jsx)(n.code,{children:"in_pdf_file"})," will\nbe stored, with the new fields. Doesn't need to existing, but if a file does exist at that\nfilename, it will be overwritten."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Nothing"}),"\n",(0,t.jsx)(n.h4,{id:"is_tagged",children:"is_tagged"}),"\n",(0,t.jsx)(n.p,{children:"Determines if the input PDF file is tagged for accessibility."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"in_pdf_file"})," ",(0,t.jsx)(n.em,{children:"Union[str, Path]"})," - The path to the PDF file, as a string or a Path object."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bool"})," - True if the PDF is tagged, False otherwise."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(6540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);