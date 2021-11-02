


## 4 Other Style Guides {#4-other-style-guides}

[Form controls | US Web Design System (USWDS)](https://designsystem.digital.gov/components/form-controls/) 


## 5 Coding Style Guide (Python and YAML) {#5-coding-style-guide-python-and-yaml}

[We can probably find existing samples to start with?]



*   [https://www.pullrequest.com/blog/create-a-programming-style-guide/](https://www.pullrequest.com/blog/create-a-programming-style-guide/)
*   [https://medium.com/level-up-web/what-is-a-programming-style-guide-and-why-should-you-care-9019e51bb7ad](https://medium.com/level-up-web/what-is-a-programming-style-guide-and-why-should-you-care-9019e51bb7ad)

Why do we want conventions and guidelines



*   We want to make it easy for anyone to pick up someone else’s code and to keep working on it
*   Help new coders who don’t have any way to code yet to choose a way. Reduce decision paralysis.

Overall goals: 



*   This is a document to help our team come to consensus so that we each teach people how to do things the same way.
*   This is a reference guide for coders when they are able to articulate specific questions about how to code.
*   This could be a starting guide for experienced coders who join the team so they can get up to speed. It should be readable for an experienced coder all at once, at least to skim.


### 5.1 Practices {#5-1-practices}

Include thoughts about why we reached decisions, not just the final decision.

Don’t limit to what makes new coders comfortable - we plan to have a pipeline.

Depends on who we expect to be doing what work. We should document the audience we are creating a guideline for. 

Break out into sections based on audience?



*   Are there topic headings that are only relevant to new coders, only experienced non-docassemble coders, experienced coders in docassemble?
*   Is there a task-oriented structure based on our assembly line roles?


### 5.2 Guiding principles {#5-2-guiding-principles}



*   Avoid complex coding tricks. Keep things simple and easy to understand. Remember: you need to be twice as smart to debug something as you do to write it. If you write the most complex code that you can, you have no hope of being able to debug it.
*   Keep names constant through the development process.
*   Have as few rules/deviations as possible - fewer things for people to keep in their heads.


### 5.3 What are specific challenges we have had? {#5-3-what-are-specific-challenges-we-have-had}

Order of priority:



*   ✅ Quick, High priority: File names
*   ✅ Quick, High priority: Variable names
*   ✅ Quick, High: Decision log. 
    *   How do we track decisions in the lifetime of a single form
*   Next: Slow, Medium: Order of blocks inside the YAML file
    *   Where the interview order block goes
    *   Where does the attachment block go?
    *   Where do code blocks that relate to a question go?
    *   Where does the review screen go?
*   Very slow, high: Flexibility of shared functionality (basic-questions, toolbox)
    *   When to use lists instead of objects/primitives
    *   When to generalize (generic object? Special list index i)
    *   When/how to allow question content customization while still providing useful/important features
    *   [Some thoughts](https://docs.google.com/document/d/1hxj2JtotdoUDFvJFQfV00XZYA-iAykWXhKzsMx7zVlg/edit#)
    *   Where do we define data structures (like interview metadata)?

Unordered:



*   Slow, Low: How many files do we use for each project. 
    *   What is the maximum number of lines that works best in a single file? Is that the best metric?
    *   Are there functional reasons to divide an interview into multiple files?
*   Very Slow, ??: What tasks should be performed at what layer. Model/view/controller
    *   Python Modules
    *   Template/attachment block
    *   YAML
*   How many intermediate steps should we take with variables and their definition?
    *   E.g., when do you take a repeated computation and turn it into an intermediate variable? 
        *   Why would you do this? Probably to make an attachment block easier to read. Or to reduce the number of times you do a repetitive computation/calculation.
    *   Can you use a module/method of an object to avoid 
*   Medium, Medium: Writing for translation
    *   When do you put literal text in code
    *   Ordinals, possessives, other DA built-ins
    *   [Some thoughts](#translation)
*   Slow, medium: Use of attributes vs top-level variables
*   Slow, medium: Use of classes, methods, and functions rather than code blocks
*   Very slow, medium: How do we use things like `user`? What can those objects do? What do they need to do? What defines them?
*   Medium, medium: What goes into the interview order block
    *   What can be “set” in the interview order block directly? 
    *   When do you use named blocks?
    *   When do you use docassemble’s implicit triggering of a variable to cause it to be defined? (probably most of the time when we can. When is it good to deviate?)
    *   Use of all variables in interview order instead of just a single one that leads to a question that has all the other values - discuss.
*   Very slow, high: When to customize - deviate from shared functionality
*   Modules vs template blocks
*   How/When to use umbrella interviews
    *   How to avoid naming conflicts? Dictionaries seem too cumbersome.


### 5.4 Variable Names {#5-4-variable-names}

Moved to docusuarus:


#### 5.4.1 Code variable names {#5-4-1-code-variable-names}

Priority 1: Descriptiveness/Specificity

Priority 2: Brevity 

snake_case for regular variables: lowercase with underscores between words

PascalCase for class names, but not objects or methods of classes: initial capitals and squished together words

No Hungarian notation -- that is, don’t annotate variable name with the type (like **is_parent_TF **or **is_parent_Bool**). Except the special exception of a date (**answer_date**). Variable names should read close to natural English out loud.

~~All caps for constants~~

For a boolean value, use a word or phrase that has the answer yes or no. Verb-noun pair. Has/Is being good ones if you’re unsure of which verb to use.

Plural vs. singular.


#### 5.4.2 PDF variable names {#5-4-2-pdf-variable-names}

[https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/variable_names.md](https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/variable_names.md) [https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/labeling-fields.md](https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/labeling-fields.md)

Is this sufficiently covered in new documentation var name docs?

We do have a fairly strong set of guidelines for PDF variables at the moment.

____ only when it’s the only differentiating feature of a field (like when a signature appears multiples times: `user_signature__1`, `user_signature__2`). Hungarian notation only when it’s the only differentiating feature of a field (like ‘is_parent_yes’ and ‘is_parent_no’). Reason: Sometimes in PDFs that is the only distinguishing feature.


### 5.6 Other Names {#5-6-other-names}

Packages: PascalCase alphanumeric, no leading digits (because of da and python requirements).

Project names: No one cares, but DA only allows alphanumeric with no leading digits, so PascalCase alphanumeric, no leading digits if guidance is needed.



### 5.7 Decision Logs {#5-7-decision-logs}

Narrative log of chronological events and progress that should have as many links and references in it as possible. At the top would include pointers to relevant things like the repos, issues, documents, commits, trello, tests and test folders.

To be assigned at the decision to include the form in the pipeline. We could also make the repository and trello card then. (TODO: Amend checklist for putting a form into the pipeline)

Location: Shared doc.

Decision: Not the README because it might contain private information, like contact information.

How much of this is being handled in Trello? What should be kept there and what to be brought here?


### 5.8 Tutorials/Documentation that need to be created (to move later) {#5-8-tutorials-documentation-that-need-to-be-created-to-move-later}



*   Deleting a zombie file
*   Start by creating a Project
*   Using github from the start
*   Sample interviews


### 5.9 TODO: Amend checklist {#5-9-todo-amend-checklist}



*   A practice of creating a new Playground Project for each interview
*   A practice of creating a decision log for each form



### 5.14 Proposal: process_action() and other one-use-per-interview functionalities {#5-14-proposal-process_action-and-other-one-use-per-interview-functionalities}

There is a list needed here, but some things should only be done once per interview. For those things we should implement a variable that is a flag for making sure they are only run once. Use would look like this:


```
if not did_this_thing:
  do_this_thing()
  did_this_thing = True
```


Proposal: we use `did_` at the beginning of every one of these flags.


<table>
  <tr>
   <td><strong>Functionality</strong>
   </td>
   <td><strong>Proposed flag variable</strong>
   </td>
  </tr>
  <tr>
   <td>process_action()
   </td>
   <td>did_process_action
   </td>
  </tr>
</table>



