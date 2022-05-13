"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[2993],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(4137)),i=["components"],o={sidebar_label:"example_google",title:"example_google"},p=void 0,s={unversionedId:"reference/example_google",id:"reference/example_google",title:"example_google",description:"Example Google style docstrings.",source:"@site/docs/reference/example_google.md",sourceDirName:"reference",slug:"/reference/example_google",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/example_google",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/example_google.md",tags:[],version:"current",frontMatter:{sidebar_label:"example_google",title:"example_google"},sidebar:"someSidebar",previous:{title:"al_courts",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/al_courts"},next:{title:"al_document",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/al_document"}},m={},u=[{value:"module_level_variable2",id:"module_level_variable2",level:4},{value:"function_with_types_in_docstring",id:"function_with_types_in_docstring",level:4},{value:"function_with_pep484_type_annotations",id:"function_with_pep484_type_annotations",level:4},{value:"module_level_function",id:"module_level_function",level:4},{value:"example_generator",id:"example_generator",level:4},{value:"ExampleError Objects",id:"exampleerror-objects",level:2},{value:"ExampleClass Objects",id:"exampleclass-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"readonly_property",id:"readonly_property",level:4},{value:"readwrite_property",id:"readwrite_property",level:4},{value:"example_method",id:"example_method",level:4},{value:"__special__",id:"__special__",level:4}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Example Google style docstrings."),(0,r.kt)("p",null,"This module demonstrates documentation as specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Google Python\nStyle Guide"),"_. Docstrings may extend over multiple lines. Sections are created\nwith a section header and a colon followed by a block of indented text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",null,"  Examples can be given using either the ",(0,r.kt)("inlineCode",{parentName:"p"},"Example")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Examples"),"\nsections. Sections support any reStructuredText formatting, including\nliteral blocks::"),(0,r.kt)("p",null,"  $ python example_google.py"),(0,r.kt)("p",null,"  Section breaks are created by resuming unindented text. Section breaks\nare also implicitly created anytime a new section starts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"module_level_variable1")," ",(0,r.kt)("em",{parentName:"p"},"int")," - Module level variables may be documented in\neither the ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," section of the module docstring, or in an\ninline docstring immediately following the variable."),(0,r.kt)("p",{parentName:"li"},"Either form is acceptable, but the two should not be mixed. Choose\none convention to document module level variables and be consistent\nwith it."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Todo"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For module TODOs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have to also use ",(0,r.kt)("inlineCode",{parentName:"p"},"sphinx.ext.todo")," extension"),(0,r.kt)("p",{parentName:"li"},".. _Google Python Style Guide:\n",(0,r.kt)("a",{parentName:"p",href:"http://google.github.io/styleguide/pyguide.html"},"http://google.github.io/styleguide/pyguide.html")))),(0,r.kt)("h4",{id:"module_level_variable2"},"module","_","level","_","variable2"),(0,r.kt)("p",null,"int: Module level variable documented inline."),(0,r.kt)("p",null,"The docstring may span multiple lines. The type may optionally be specified\non the first line, separated by a colon."),(0,r.kt)("h4",{id:"function_with_types_in_docstring"},"function","_","with","_","types","_","in","_","docstring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"function_with_types_in_docstring(param1, param2)\n")),(0,r.kt)("p",null,"Example function with types documented in the docstring."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PEP 484"),(0,r.kt)("em",{parentName:"p"}," type annotations are supported. If attribute, parameter, and\nreturn types are annotated according to ",(0,r.kt)("inlineCode",{parentName:"em"},"PEP 484")),", they do not need to be\nincluded in the docstring:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param1")," ",(0,r.kt)("em",{parentName:"li"},"int")," - The first parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param2")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The second parameter.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bool")," - The return value. True for success, False otherwise."),(0,r.kt)("p",{parentName:"li"},".. _PEP 484:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0484/"},"https://www.python.org/dev/peps/pep-0484/")))),(0,r.kt)("h4",{id:"function_with_pep484_type_annotations"},"function","_","with","_","pep484","_","type","_","annotations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"function_with_pep484_type_annotations(param1: int, param2: str) -> bool\n")),(0,r.kt)("p",null,"Example function with PEP 484 type annotations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param1")," - The first parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param2")," - The second parameter.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  The return value. True for success, False otherwise."),(0,r.kt)("h4",{id:"module_level_function"},"module","_","level","_","function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"module_level_function(param1, param2=None, *args, **kwargs)\n")),(0,r.kt)("p",null,"This is an example of a module level function."),(0,r.kt)("p",null,"Function parameters should be documented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," section. The name\nof each parameter is required. The type and description of each parameter\nis optional, but should be included if not obvious."),(0,r.kt)("p",null,"If ","*","args or ","*","*","kwargs are accepted,\nthey should be listed as ",(0,r.kt)("inlineCode",{parentName:"p"},"*args")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"**kwargs"),"."),(0,r.kt)("p",null,"The format for a parameter is::"),(0,r.kt)("p",null,"name (type): description\nThe description may span multiple lines. Following\nlines should be indented. The ",'"',"(type)",'"'," is optional."),(0,r.kt)("p",null,"Multiple paragraphs are supported in parameter\ndescriptions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param1")," ",(0,r.kt)("em",{parentName:"li"},"int")," - The first parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param2")," ",(0,r.kt)("em",{parentName:"li"},":obj:",(0,r.kt)("inlineCode",{parentName:"em"},"str"),", optional")," - The second parameter. Defaults to None.\nSecond line of description should be indented."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*args")," - Variable length argument list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Arbitrary keyword arguments.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bool")," - True if successful, False otherwise."),(0,r.kt)("p",{parentName:"li"},"The return type is optional and may be specified at the beginning of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Returns")," section followed by a colon."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Returns")," section may span multiple lines and paragraphs.\nFollowing lines should be indented to match the first line."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Returns")," section supports any reStructuredText formatting,\nincluding literal blocks::"),(0,r.kt)("p",{parentName:"li"},"{")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"&#x27;param1&#x27;")," - param1,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"&#x27;param2&#x27;")," - param2\n}"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AttributeError")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"Raises")," section is a list of all exceptions\nthat are relevant to the interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ValueError")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"param2")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"param1"),".")),(0,r.kt)("h4",{id:"example_generator"},"example","_","generator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"example_generator(n)\n")),(0,r.kt)("p",null,"Generators have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Yields")," section instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Returns")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," ",(0,r.kt)("em",{parentName:"li"},"int")," - The upper limit of the range to generate, from 0 to ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," - 1.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yields"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")," - The next number in the range of 0 to ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," - 1.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("p",null,"  Examples should be written in doctest format, and should illustrate how\nto use the function."),(0,r.kt)("p",null,"  ",">",">",">"," print(","[i for i in example_generator(4)]",")\n","[0, 1, 2, 3]"),(0,r.kt)("h2",{id:"exampleerror-objects"},"ExampleError Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ExampleError(Exception)\n")),(0,r.kt)("p",null,"Exceptions are documented in the same way as classes."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"init")," method may be documented in either the class level\ndocstring, or as a docstring on the ",(0,r.kt)("strong",{parentName:"p"},"init")," method itself."),(0,r.kt)("p",null,"Either form is acceptable, but the two should not be mixed. Choose one\nconvention to document the ",(0,r.kt)("strong",{parentName:"p"},"init")," method and be consistent with it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("p",null,"  Do not include the ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg")," ",(0,r.kt)("em",{parentName:"li"},"str")," - Human readable string describing the exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")," ",(0,r.kt)("em",{parentName:"li"},":obj:",(0,r.kt)("inlineCode",{parentName:"em"},"int"),", optional")," - Error code.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg")," ",(0,r.kt)("em",{parentName:"li"},"str")," - Human readable string describing the exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")," ",(0,r.kt)("em",{parentName:"li"},"int")," - Exception error code.")),(0,r.kt)("h2",{id:"exampleclass-objects"},"ExampleClass Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ExampleClass(object)\n")),(0,r.kt)("p",null,"The summary line for a class docstring should fit on one line."),(0,r.kt)("p",null,"If the class has public attributes, they may be documented here\nin an ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," section and follow the same formatting as a\nfunction","'","s ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," section. Alternatively, attributes may be documented\ninline with the attribute","'","s declaration (see ",(0,r.kt)("strong",{parentName:"p"},"init")," method below)."),(0,r.kt)("p",null,"Properties created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@property")," decorator should be documented\nin the property","'","s getter method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attr1")," ",(0,r.kt)("em",{parentName:"li"},"str")," - Description of ",(0,r.kt)("inlineCode",{parentName:"li"},"attr1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attr2")," ",(0,r.kt)("em",{parentName:"li"},":obj:",(0,r.kt)("inlineCode",{parentName:"em"},"int"),", optional")," - Description of ",(0,r.kt)("inlineCode",{parentName:"li"},"attr2"),".")),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | __init__(param1, param2, param3)\n")),(0,r.kt)("p",null,"Example of docstring on the ",(0,r.kt)("strong",{parentName:"p"},"init")," method."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"init")," method may be documented in either the class level\ndocstring, or as a docstring on the ",(0,r.kt)("strong",{parentName:"p"},"init")," method itself."),(0,r.kt)("p",null,"Either form is acceptable, but the two should not be mixed. Choose one\nconvention to document the ",(0,r.kt)("strong",{parentName:"p"},"init")," method and be consistent with it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("p",null,"  Do not include the ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param1")," ",(0,r.kt)("em",{parentName:"li"},"str")," - Description of ",(0,r.kt)("inlineCode",{parentName:"li"},"param1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param2")," ",(0,r.kt)("em",{parentName:"li"},":obj:",(0,r.kt)("inlineCode",{parentName:"em"},"int"),", optional")," - Description of ",(0,r.kt)("inlineCode",{parentName:"li"},"param2"),". Multiple\nlines are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param3")," ",(0,r.kt)("em",{parentName:"li"},":obj:",(0,r.kt)("inlineCode",{parentName:"em"},"list")," of :obj:",(0,r.kt)("inlineCode",{parentName:"em"},"str"))," - Description of ",(0,r.kt)("inlineCode",{parentName:"li"},"param3"),".")),(0,r.kt)("h4",{id:"readonly_property"},"readonly","_","property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | readonly_property()\n")),(0,r.kt)("p",null,"str: Properties should be documented in their getter method."),(0,r.kt)("h4",{id:"readwrite_property"},"readwrite","_","property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | readwrite_property()\n")),(0,r.kt)("p",null,":obj:",(0,r.kt)("inlineCode",{parentName:"p"},"list")," of :obj:",(0,r.kt)("inlineCode",{parentName:"p"},"str"),": Properties with both a getter and setter\nshould only be documented in their getter method."),(0,r.kt)("p",null,"If the setter method contains notable behavior, it should be\nmentioned here."),(0,r.kt)("h4",{id:"example_method"},"example","_","method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | example_method(param1, param2)\n")),(0,r.kt)("p",null,"Class methods are similar to regular functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("p",null,"  Do not include the ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param1")," - The first parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param2")," - The second parameter.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  True if successful, False otherwise."),(0,r.kt)("h4",{id:"__special__"},"_","_","special","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | __special__()\n")),(0,r.kt)("p",null,"By default special members with docstrings are not included."),(0,r.kt)("p",null,"Special members are any methods or attributes that start with and\nend with a double underscore. Any special member with a docstring\nwill be included in the output, if\n",(0,r.kt)("inlineCode",{parentName:"p"},"napoleon_include_special_with_doc")," is set to True."),(0,r.kt)("p",null,"This behavior can be enabled by changing the following setting in\nSphinx","'","s conf.py::"),(0,r.kt)("p",null,"napoleon_include_special_with_doc = True"))}c.isMDXComponent=!0}}]);