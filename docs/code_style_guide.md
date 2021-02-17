


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


### 5.5 File Names {#5-5-file-names}

**Generally, snake_case (lowercase with underscores) for everything.** Reason: match variable names, fewer rules to remember. This counts for:

YAML

Python

JS

Image files/Static files

Source files

GitHub branch names

PDFs:

Main purpose: A name that’s not confusing to lawyers, but can be used as a variable name.

Mostly lowercase with underscores. Include the common name (for attorneys) of the form. Always include at least one descriptive term. E.g., protective_order_209A, even if people always call it 209A. No leading digits. Generally don’t use the section numbers of the law unless they’re the conventional name of the form. 

Other cases:

~~File that exports one class: PascalCase of the class name~~ That’s not a python convention and it’s not one that these authors have found useful.


### 5.6 Other Names {#5-6-other-names}

Packages: PascalCase alphanumeric, no leading digits (because of da and python requirements).

Project names: No one cares, but DA only allows alphanumeric with no leading digits, so PascalCase alphanumeric, no leading digits if guidance is needed.


### Proposed: Evaluate in-place wherever possible {#proposed-evaluate-in-place-wherever-possible}

This also means creating as few intermediate variables as possible.

A block counts as one ‘place’ as far as in-place goes.

Docassemble doesn’t automatically update variable values. That means that intermediate variables get out of date very quickly. Evaluating in-place avoids having tangled dependencies and relying on things like `reconsider:`, `depends on:`, etc.

This is especially useful for attachments and review screens.


### Proposed: When setting variables, do it in a new block if possible {#proposed-when-setting-variables-do-it-in-a-new-block-if-possible}


### Proposed: Avoid setting variables in the interview order block {#proposed-avoid-setting-variables-in-the-interview-order-block}


### Proposed: Have an interview order block {#proposed-have-an-interview-order-block}


### Proposed: (not da-specific) Use a verb/noun pair for True/False values {#proposed-not-da-specific-use-a-verb-noun-pair-for-true-false-values}

Or functions/methods that return a True/False (boolean) value. Examples:

has_children

Is_dependant


### Proposed: (AL core) Tend towards lists (bears much discussion) {#proposed-al-core-tend-towards-lists-bears-much-discussion}

This is one that’s hard to articulate.


### Proposed: Always give a stable value to a `choice` {#proposed-always-give-a-stable-value-to-a-`choice`}

fields: 

  - Pick a card, any card: which_card

    choices:

      - Ace: **ace**

      - Queen: **queen**

      - 3: **three**

      - 1: **one**

The variable name is the part that comes to the right of the colon.

This lets you have automated integrated tests that can work in any language.


### Proposed: Always give `question:` blocks an `id:` {#proposed-always-give-`question-`-blocks-an-`id-`}

Helps with testing, feedback, and general discussion during development.


### Translation {#translation}

Docassemble has several useful language functions. For example: functions to conjugate verbs, pluralize adjectives, etc. Unfortunately they do not work in every language, and in some languages, using these functions can result in ungrammatical translations.


#### 2.1 Use conditional sentences rather than conditional sentence fragments {#2-1-use-conditional-sentences-rather-than-conditional-sentence-fragments}

It’s better to leave a whole sentence in an `if` statement than an isolated fragment to address multiple/single items (e.g., child vs children). This will allow the translator to translate with matching gender, plural, etc. For example:

**Example 1**

**Better**:

% if len(children) == 1:

Do you want to include your child?

% else:

Which children do you want to include?

% endif

**Worse:**

Do you want to include your

% if len(children) == 1:

child

% else:

children

% endif

?

**Example 2**

**Better:**


```
% if num_children > 1:
Do your children like board games?
% else if num_children == 1:
Does your child like board games?
% endif
```


**Worse:**


```
${ 'Do' if num_children > 1 else 'Does' } your ${ 'children' if num_children > 1 else 'child' }like board games?
```


**Even worse:**


```
${ children_do_verb } your ${ child_or_children } like board games?
```



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


### 5.10 Indentation {#5-10-indentation}

Use two spaces for each indentation level. Never use tabs; tabs violate the YAML specification. In most editors, tabs are automatically replaced with spaces. This is the default in both Code Mirror (the Playground editor) and VS Code.


### 5.11 Structure and order of blocks inside of the YAML file {#5-11-structure-and-order-of-blocks-inside-of-the-yaml-file}

An indication of the basic order of the blocks if you have all of them:


```
---
include:
  - docassemble.MAVirtualCourt:basic-questions.yml
---
# The wizard-generated metadata block
---
objects:
  - custom_object_you_need: SomeClass
---
id: interview order
mandatory: True
code: |
  # The generated code and some of your own code
---
# Other custom code and question blocks you need, ideally in a somewhat sensical order. 
---
# preview screen question
---
# download screen question
---
# attachment block
---
# review screen
---
```



### 5.12 Limit number of steps between variables and question or template {#5-12-limit-number-of-steps-between-variables-and-question-or-template}

It’s difficult to trace cross references to variable names in the current Docassemble editor.


### 5.13 Use standalone code blocks as much as possible. You can use “named blocks” to make mandatory code blocks easier to read or when you want a forced execution order to happen exactly once.  {#5-13-use-standalone-code-blocks-as-much-as-possible-you-can-use-“named-blocks”-to-make-mandatory-code-blocks-easier-to-read-or-when-you-want-a-forced-execution-order-to-happen-exactly-once}

A “named block” is one way to tell docassemble to run a series of steps once, like this:


```
---
code: |
  some_thing = 1
  did_some_thing = True
```


You can refer to **did_some_thing** in your interview order block. The steps in the block defining **did_some_thing** will happen only one time. This style of coding is primarily imperative. You control the exact order and the exact code block or question that is used to define a variable. Only a mandatory block will trigger your **did_some_thing** block to run (like the interview order block).

Docassemble tends to be a declarative coding platform. It will trigger the definition of variables as the need for them arises. As much as possible, you should code your interview to take advantage of that. E.g., if your interview order block just referenced **some_thing**, it would be easier to read than referencing **did_some_thing**.

Named blocks can make sense to group related tasks--like setting all of the background variables you need, or gathering all of the fields in a structured order for one particular form you are including in your parent file.


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



