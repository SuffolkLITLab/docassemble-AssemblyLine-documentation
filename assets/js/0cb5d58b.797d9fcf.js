"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5836],{1218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(4848),o=t(8453);const s={id:"yaml_anatomy",title:"Appendix: Understanding the YAML code\n",sidebar_label:"Appendix: Understanding the YAML code\n",slug:"/generated_yaml"},a=void 0,r={id:"yaml_anatomy",title:"Appendix: Understanding the YAML code\n",description:"This page is very much under construction as we develop the Weaver's capabilities. These \ud83d\udea7 emoji notes features that are being actively developed in the Weaver and thus might change",source:"@site/docs/weaver_code_anatomy.md",sourceDirName:".",slug:"/generated_yaml",permalink:"/docassemble-AssemblyLine-documentation/docs/generated_yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/weaver_code_anatomy.md",tags:[],version:"current",frontMatter:{id:"yaml_anatomy",title:"Appendix: Understanding the YAML code\n",sidebar_label:"Appendix: Understanding the YAML code\n",slug:"/generated_yaml"},sidebar:"docs",previous:{title:"Review Screen\n",permalink:"/docassemble-AssemblyLine-documentation/docs/review_screen"},next:{title:"GitHub tutorials",permalink:"/docassemble-AssemblyLine-documentation/docs/github"}},l={},d=[{value:"Include",id:"include",level:2},{value:"Metadata",id:"metadata",level:2},{value:"AssemblyLine metadata",id:"assemblyline-metadata",level:2},{value:"Main intro page",id:"main-intro-page",level:2},{value:"Case type questions",id:"case-type-questions",level:2},{value:"Navigation",id:"navigation",level:2},{value:"Interview order",id:"interview-order",level:2},{value:"Main Order",id:"main-order",level:2},{value:"Your screens",id:"your-screens",level:2},{value:"Your interview&#39;s intro",id:"your-interviews-intro",level:3},{value:"Preview",id:"preview",level:3},{value:"Your questions",id:"your-questions",level:2},{value:"Download",id:"download",level:2},{value:"Attachments",id:"attachments",level:2},{value:"ALDocument",id:"aldocument",level:3},{value:"ALDocumentBundle",id:"aldocumentbundle",level:3},{value:"Attachment block",id:"attachment-block",level:3},{value:"Review screen",id:"review-screen",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This page is very much under construction as we develop the Weaver's capabilities. These \ud83d\udea7 emoji notes features that are being actively developed in the Weaver and thus might change"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://apps-test.suffolklitlab.org/start/ALWeaver/assembly_line/#/1&new_session=1",children:"ALWeaver"})," generates code that is a starting point. It uses the ",(0,i.jsx)(n.a,{href:"/docassemble-AssemblyLine-documentation/docs/label_variables",children:"labels and variables you added to your documents"})," to make an interview that uses questions and features from the AssemblyLine library."]}),"\n",(0,i.jsxs)(n.p,{children:['This page breaks down what each of these "blocks" (the sections of text that appear between ',(0,i.jsx)(n.code,{children:"---"}),"s)\ndo individually. You don't have to think about every block as you develop your interview, but as\nyou use more advanced features of ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs.html",children:"docassemble"}),", knowing more about these blocks\nwill help."]}),"\n",(0,i.jsx)(n.h2,{id:"include",children:"Include"}),"\n",(0,i.jsxs)(n.p,{children:["An include block incorporates content (code blocks, questions blocks, etc.) from other YAML files. When you run the interview, docassemble acts as if all of the content in the YAML files listed below was copied and pasted right in this exact spot.\nThis is described in more detail in the ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#include",children:"docassemble documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"include"})," block includes the AssemblyLine package, giving you access to all of the pre-created questions in AssemblyLine. It also adds the jurisdiction and organization packages that you picked in the Weaver. By default, the jurisdiction package is ALMassachusetts, and the organization package is the MassAccess package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"include:\n  - docassemble.AssemblyLine:al_package.yml\n  - docassemble.ALMassachusetts:al_massachusetts.yml\n  - docassemble.MassAccess:massaccess.yml\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsxs)(n.p,{children:["These ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#metadata",children:"metadata block"})," values control two things:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"the text in this interview's browser tab"}),"\n",(0,i.jsx)(n.li,{children:"the name of the interview on a user's list of saved interviews if they're logged in"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can explore some other settings that you can define here in the ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#metadata",children:"docassemble documentation"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"metadata:\n  title: |\n    209a 258e motion for impoundment\n  short title: |\n    209a 258e motion for impoundment\n  tags:\n    - BE-04-00-00-00\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"assemblyline-metadata",children:"AssemblyLine metadata"}),"\n",(0,i.jsxs)(n.p,{children:["The AssemblyLine metadata block has different, AssemblyLine specific metadata that doesn't fit in the normal ",(0,i.jsx)(n.a,{href:"#metadata",children:"metadata block"}),". Additionally, data in this block isn't overwritten if it's included in another interview."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'mandatory: True\ncode: |\n  interview_metadata # make sure we initialize the object\n  if not defined("interview_metadata[\'a_258e_motion_for_impoundment\']"):\n    interview_metadata.initializeObject(\'a_258e_motion_for_impoundment\')\n  interview_metadata[\'a_258e_motion_for_impoundment\'].update({\n    "al_weaver_version": "0.82",\n    "generated on": "2021-05-28",\n    "title": "209a 258e motion for impoundment",\n    "short title": "209a 258e motion for impoundment",\n    "description": "209a 258e motion for impoundment",\n    "original_form": "",\n    "allowed courts": [\n      "Land Court",\n    ],\n    "categories": [\n      "BE-04-00-00-00",\n    ],\n    "logic block variable": "a_258e_motion_for_impoundment",\n    "attachment block variable": "a_258e_motion_for_impoundment_attachment",\n    "typical role": "plaintiff",\n  })\n---\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title"}),", ",(0,i.jsx)(n.code,{children:"short title"}),", and ",(0,i.jsx)(n.code,{children:"description"})," allow your organization's site to show more information about your form and to organize your forms more easily."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"original_form"})," is a link to the original, fillable PDF form that this interview is automating, if it exists."]}),"\n",(0,i.jsxs)(n.li,{children:["\ud83d\udea7 ",(0,i.jsx)(n.code,{children:"allowed courts"})," allows your code to decide which courts to let the user pick from when they need to pick their court, usually used in conjunction with ",(0,i.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALThemeTemplate",children:"ALThemeTemplate"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"categories"})," is the ",(0,i.jsx)(n.a,{href:"https://taxonomy.legal/",children:"LIST taxonomy"})," code for this interview, which can be used by your organization to organize your interviews."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"attachment block variable"})," used to be used in the code that sends documents to courts, but now the ",(0,i.jsx)(n.a,{href:"#aldocument-object-block",children:"ALDocument object block"})," is used instead."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"logic block variable"})," should also no longer be used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"typical role"}),": controls which questions the user gets asked about themselves and other parties."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"main-intro-page",children:"Main intro page"}),"\n",(0,i.jsxs)(n.p,{children:['Adds this text to the organization\'s intro page that appears at the beginning of every interview. This lets your user know right away that they have gotten to the right (or wrong) form. Note that this can (and should) be a more direct and detailed call to action, e.g. ("File a ____" or "Ask the court for ____"), rather than a simple short title, like the short title in the ',(0,i.jsx)(n.a,{href:"#metadata",children:"metadata block"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"code: |\n  interview_short_title = 'File a 209a 258e motion for impoundment'\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"case-type-questions",children:"Case type questions"}),"\n",(0,i.jsx)(n.p,{children:"Changes the wording of AssemblyLine questions depending on it's value. It can be either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a court-case type: 'starts_case', 'existing_case', or 'appeal'"}),"\n",(0,i.jsx)(n.li,{children:"a letter: 'letter'"}),"\n",(0,i.jsx)(n.li,{children:"other: 'other', 'other_form'"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"code: |\n  al_form_type = 'existing_case'\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"navigation",children:"Navigation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#navigation%20bar",children:(0,i.jsx)(n.code,{children:"navigation"})})," and ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#sections",children:(0,i.jsx)(n.code,{children:"sections"})})," work with ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/functions.html#DANav.show_sections",children:(0,i.jsx)(n.code,{children:"nav.set_section()"})})," to show the column on the left that lets your users jump to a screen that lets them edit their information in your interview.\nThis helps users avoid using the 'Back' button which deletes their answers."]}),"\n",(0,i.jsx)(n.p,{children:'By default, there is a single "Review" section, that covers the whole interview. In longer interviews, adding more sections can show the user a road map of what they will have to do and where they are now.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"sections:\n  - review_a_258e_motion_for_impoundment: Review your answers\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interview-order",children:"Interview order"}),"\n",(0,i.jsx)(n.p,{children:"Controls the order in which your screens are shown."}),"\n",(0,i.jsx)(n.p,{children:"The full interview order block will look something like this. We'll go over each line individually below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'id: interview_order_a_258e_motion_for_impoundment\ncode: |\n  # Set the allowed courts for this interview\n  allowed_courts = interview_metadata["a_258e_motion_for_impoundment"]["allowed courts"]\n  nav.set_section("review_a_258e_motion_for_impoundment")\n  user_role ="plaintiff"\n  user_ask_role = "plaintiff"\n  one_of_your_custom_questions\n  users[0].phone_number\n  another_of_your_custom_questions\n  # Set the answer file name.\n  set_parts(subtitle=str(users))\n  set_progress(16.67)\n  trial_court.division\n  interview_order_a_258e_motion_for_impoundment = True\n---\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"allowed_courts"})," allows the developer to limit which courts the person filling out the form can pick from, making it easier for them to pick the right court. By default, it's using the same values that are in the ",(0,i.jsx)(n.a,{href:"#assemblyline-metadata",children:"metadata block"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nav.set_section()"})," comes after ",(0,i.jsx)(n.code,{children:"al_intro_screen"})," and ",(0,i.jsx)(n.code,{children:"a_258e_motion_for_impoundment_intro"})," so that the user can't click to edit their answers before they've actually been asked any questions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user_role"})," and ",(0,i.jsx)(n.code,{children:"user_ask_role"})," tell AssemblyLine which questions to ask about the main party and opposing parties listed on the form. These should be the same as the ",(0,i.jsx)(n.code,{children:"typical role"}),". However, if ",(0,i.jsx)(n.code,{children:"typical role"})," is ",(0,i.jsx)(n.code,{children:"unknown"}),", then the ",(0,i.jsx)(n.code,{children:"user_ask_role"})," variable will be here instead, and will ask the user what role they have in the case."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Code for your custom questions comes next. All your questions should be triggered in here. You will probably make major edits to the code here, changing the order and adding branching logic."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"set_parts(subtitle=str(users))"})," adds to the information a logged in user will see for this interview in their list of interviews. For an attorney, they should see the name of their clients. For a self represented litigant, they should see their name. You can read more about ",(0,i.jsx)(n.code,{children:"set_parts"})," in the ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/functions.html#set_parts",children:"docassemble documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"set_progress()"})," changes the progress bar shown to the person who's interacting with the form. When they are at the beginning of the form, it should be empty. When they are at the end, other code will make sure it is full. The ",(0,i.jsx)(n.a,{href:"https://apps-test.suffolklitlab.org/start/ALWeaver/assembly_line/#/1&new_session=1",children:"ALWeaver"})," tries to handle intermediate values between those two places that will make sense to the user. The example interview is short, so intermediate progress is only set once."]}),"\n",(0,i.jsxs)(n.li,{children:["The final variable in the block (",(0,i.jsx)(n.code,{children:"interview_order_a_258e_motion_for_impoundment"})," above) is customized for your interview. It lets you trigger all the code in this entire code block. In this generated code, the ",(0,i.jsx)(n.a,{href:"#main-order",children:"main order block"})," triggers it.\nIf you are including this interview in another interview, remove the main order block. Then you can use this variable if you want to trigger this particular question order."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"main-order",children:"Main Order"}),"\n",(0,i.jsx)(n.p,{children:"This block controls the order of things that do not need to be customized for your specific interview, like intro screens, signatures, etc.\nYou shouldn't have to change that code unless you are \ud83d\udea7 combining multiple interviews together \ud83d\udea7."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"mandatory: True\nid: main_order_a_258e_motion_for_impoundment\ncode: |\n  al_intro_screen\n  a_258e_motion_for_impoundment_intro\n  # Interview order block has form-specific logic controlling order/branching\n  interview_order_a_258e_motion_for_impoundment_intro\n  signature_date\n  # Save (anonymized) interview statistics.\n  store_variables_snapshot(data={'zip': users[0].address.zip})\n  a_258e_motion_for_impoundment_preview_question  # Pre-canned preview screen\n  basic_questions_signature_flow\n  users[0].signature\n  a_258e_motion_for_impoundment_download\n---\n"})}),"\n",(0,i.jsx)(n.p,{children:"There is some AssemblyLine code that comes after your own custom interview order code. You will probably leave this code alone as well:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"signature_date"})," is the date that the user signed the form, and is needed on every form that has a signature."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"store_variables_snapshot()"})," lets you gather data about this interview session. ",(0,i.jsx)(n.em,{children:"You should be very thoughtful about what you store, and care must be taken to anonymize it"}),". Just removing a name is not sufficient."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you want to avoid asking the user for their address, you will need to change the information you save here. This code forces the user's address to be asked."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_258e_motion_for_impoundment_preview_question"})," will trigger ",(0,i.jsx)(n.a,{href:"#preview",children:"the preview screen"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"basic_questions_signature_flow"})," allows the user to pick what device to sign on. This lets them send the form to a smartphone for signing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"users[0].signature"})," shows the user the signature screen."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"your-screens",children:"Your screens"}),"\n",(0,i.jsxs)(n.p,{children:["These ",(0,i.jsx)(n.code,{children:"question"})," blocks control the screens your clients will see that are specific to your interview."]}),"\n",(0,i.jsx)(n.h3,{id:"your-interviews-intro",children:"Your interview's intro"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"id: 209a 258e motion for impoundment\ncontinue button field: a_258e_motion_for_impoundment_intro\nquestion: |\n  209a 258e motion for impoundment\nsubquestion: |\n  209a 258e motion for impoundment\n---\n"})}),"\n",(0,i.jsx)(n.h3,{id:"preview",children:"Preview"}),"\n",(0,i.jsx)(n.p,{children:"Users can see the final form that they will then be signing before they sign it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"id: Review your form before you sign it\ncontinue button field: a_258e_motion_for_impoundment_preview_question\nquestion: |\n  Review your form before you sign it\nsubquestion: |\n  Here is a preview of the form you'll sign on the next page. \n  \n   ${ al_user_bundle.as_pdf() }\n  \n  Remember to come back to this window to continue and sign your form.\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"your-questions",children:"Your questions"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/questions.html",children:"Question blocks"})," will show screens with information and questions. You will probably edit these blocks as you identify your needs and the needs of the people using your tools."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"id: information to be impounded\nquestion: |\n  Information to be impounded\nsubquestion: |\n  Information that you impound will be kept private from... TODO: add explanation.\nfields:\n  - 'Impound personal information': impound_personal_information\n    datatype: yesno\n  - 'Impound case record information': impound_case_record_information\n    datatype: yesno\n  - 'Case record information to be impounded': case_record_information_to_be_impounded\n    maxlength: 340\n  - 'Impound information ex parte': impound_information_ex_parte\n    datatype: yesno\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,i.jsx)(n.p,{children:"Users will be able to download or email the form. They may sometimes be able to submit it to the court."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"progress: 100\nmandatory: True\nid: download\nquestion: |\n  Your form is ready to download and file\nsubquestion: |\n  Thank you ${users}. Your form is ready to download and deliver.\n  \n  Below is a preview of your form.\n  \n  ${ al_user_bundle.download_list_html() }\nneed: a_258e_motion_for_impoundment\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"attachments",children:"Attachments"}),"\n",(0,i.jsx)(n.h3,{id:"aldocument",children:"ALDocument"}),"\n",(0,i.jsxs)(n.p,{children:["Leave this block as it is if possible. Prepares to use this document in the ",(0,i.jsx)(n.code,{children:"ALDocumentBundle"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Usually you need to make at least two different attachment blocks for a PDF: a preview without a signature and the final document with a signature.\nThe ALDocument class takes care of that for you. It also contains some nice features like adding addenda if\nan interviewee's answers are too long."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'objects:\n  - a_258e_motion_for_impoundment_attachment: ALDocument.using(title="209a 258e motion for impoundment", filename="209a_258e_motion_for_impoundment", enabled=True, has_addendum=False)\n---\n'})}),"\n",(0,i.jsx)(n.h3,{id:"aldocumentbundle",children:"ALDocumentBundle"}),"\n",(0,i.jsx)(n.p,{children:"Leave this block as it is if possible. Adds your file to two 'bundles' automatically - one for the user and one for the court."}),"\n",(0,i.jsxs)(n.p,{children:["The ALDocumentBundle class lets you combine files in different ways easily. For example, when sending a packet to the court you might want to add a cover page, but when sending one to the client you might want to include an instruction sheet instead. With the ALDocumentBundle class, this is as simple as adding the new attachment to the\n",(0,i.jsx)(n.code,{children:"elements"})," parameter below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'objects:\n  - al_user_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="209a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")\n  - al_court_bundle: ALDocumentBundle.using(elements=[a_258e_motion_for_impoundment_attachment], filename="209a_258e_motion_for_impoundment.pdf", title="All forms to download for your records")\n---\n'})}),"\n",(0,i.jsx)(n.h3,{id:"attachment-block",children:"Attachment block"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#attachment",children:"attachment block"})," for a PDF. This is how you will put your user's answers into a PDF's fields. You will have one for every PDF in your form. Its name is based on your PDF file name."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#pdf%20template%20file",children:"How to fill in your PDF fields with docassemble"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'attachment:\n    name: 209a 258e motion for impoundment\n    filename: a-258e-motion-for-impoundment\n    variable name: a_258e_motion_for_impoundment_attachment[i]\n    skip undefined: True\n    pdf template file: 209a_258e_motion_for_impoundment.pdf\n    fields: \n      - "signature_date": ${ signature_date }\n      # It\'s a signature: test which file version this is; leave empty unless it\'s the final version\n      - "user_signature": ${ users[0].signature if i == \'final\' else \'\' }\n      - "impound_personal_information": ${ impound_personal_information }\n      - "impound_case_record_information": ${ impound_case_record_information }\n      - "case_record_information_to_be_impounded": ${ case_record_information_to_be_impounded }\n      - "impound_information_ex_parte": ${ impound_information_ex_parte }\n      - "request_based_on": ${ request_based_on }\n      - "attach_additional_pages": ${ attach_additional_pages }\n      - "motion_allowed_ex_parte": ${ motion_allowed_ex_parte }\n      - "motion_allowed_after_hearing": ${ motion_allowed_after_hearing }\n      - "motion_denied": ${ motion_denied }\n---\n'})}),"\n",(0,i.jsx)(n.h2,{id:"review-screen",children:"Review screen"}),"\n",(0,i.jsx)(n.p,{children:"The 'Back' button deletes answers as the user goes farther back. When they press to continue, they will have to fill in their answers again. The review screen lets them edit their answers without deleting any of them."}),"\n",(0,i.jsx)(n.p,{children:"The code generated for this section is just a starting point. You will probably have to make changes to get what you need."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"id: a_258e_motion_for_impoundment review screen\nevent: review_a_258e_motion_for_impoundment\nquestion: |\n  Review Screen\nsubquestion: |\n  Edit your answers below\nreview: \n  - Edit: impound_personal_information\n    button: |\n      **Impound personal information**:\n      ${ word(yesno(impound_personal_information)) }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There might be additional blocks that start like ",(0,i.jsx)(n.code,{children:"continue button field: users.revisit"})," or ",(0,i.jsx)(n.code,{children:"table: users.table"}),".\nThese blocks are used by the review screen to display and edit multiple pieces of information, like plaintiffs\nand their contact information."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);