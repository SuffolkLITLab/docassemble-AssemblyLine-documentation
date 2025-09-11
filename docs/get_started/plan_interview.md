---
id: plan_interview
title: Planning your interview
sidebar_label: Planning your interview
slug: planning
---

## Planning and automating your first interview with the Assembly Line Framework

To automate a form using the Assembly Line framework, you must:

1. research and understand the context of your form
1. identify the template that you will use: either a PDF or DOCX template
1. add digital **field labels** where the information the user provides will go
1. run the labeled template through the Assembly Line Weaver
1. download the "weaved" form and refine in your Docassemble playground
1. test, respond to feedback, and iterate
1. deploy to a production server and add links on your public website

For more information about the process of researching and planning your completed
interview, refer to [Planning and building your first expert system](https://suffolklitlab.org/legal-tech-class/docs/interview-structure/building-an-app-outline).

## Selecting your template file

In many cases, you will be provided a template that you need to automate.
Ultimately, your form should be either a PDF document or a Word DOCX file.

If your document is a PDF already, consider whether to switch to a DOCX template
file.

Reasons to use PDF files:

* PDF files may be the best choice if you are automating an approved court form
  that already exists as a PDF
* PDF files are good for heavily formatted content that includes columns and multiple
  fields on a single line

Reasons to avoid PDF files:

* PDF files are rigid, and may not contain enough room for real-world
  information
* conditional logic must be appplied field by field
* lists and repeated data must be labeled one at a time for each field

Reasons to use DOCX files:

* DOCX files will grow or shrink to accomodate as much or as little information
  as the user has to provide
* DOCX files allow you to use lists and repeated groups naturally and with
  little extra effort after labeling the first item
* DOCX files allow you to easily make whole sections of a document contingent
* DOCX files work well with linear content that is read by scanning down the
  page, not across.

Reasons to avoid DOCX files:

* DOCX files work less well for content formatted into columns or that require
  precise layout
* DOCX files can be formatted, but content may flow unexpectedly if it is longer
  than expected

## Plan your interview flow and structure before you build

:::tip
Taking time to plan your interview flow before building can save you hours of rework later. A clear plan helps you identify complex branching logic early and ensures a smooth user experience.
:::

The automation process will go much better if you have planned out the basic structure for your interview, as well as thought through the information that you need to gather. Focus on creating a rough sketch of the process that your form enables as well as the questions that you will ask to fill it in.

### Why plan first?

Planning your interview flow before diving into coding helps you:

- **Identify complex logic early**: Spot conditional sections, branching paths, and dependencies before they become problems
- **Create a logical question order**: Ensure users aren't asked to provide information they don't have yet
- **Avoid major rework**: Changes to flow are much easier to make in planning than after coding
- **Ensure completeness**: Make sure you gather all required information without redundancy
- **Design for user experience**: Think through the user's journey and mental model

### Tools for planning your interview flow

You have many options for mapping out your interview, from simple to sophisticated:

#### Paper and pencil
- **Best for**: Quick brainstorming and initial sketches
- **Pros**: Fast, flexible, no learning curve
- **Cons**: Hard to share and iterate with teams

#### Digital flowchart tools
- **[draw.io](https://draw.io)** (now Diagrams.net): Free, web-based, integrates with Google Drive/GitHub
- **[Lucidchart](https://www.lucidchart.com/)**: Professional diagramming with collaboration features
- **[Miro](https://miro.com/)** or **[Mural](https://www.mural.co/)**: Digital whiteboarding for collaborative planning
- **[Whimsical](https://whimsical.com/)**: Simple, clean interface for flowcharts and wireframes

#### Specialized planning methods
- **User journey mapping**: Map the user's path from start to finish, including their goals and pain points
- **Story mapping**: Break down the interview into user stories and organize them by priority
- **Paper prototyping**: Create mockups of key screens to test the flow with real users

### What to include in your interview plan

Your planning should cover these key elements:

#### 1. User journey and entry points
- How do users find your interview?
- What brings them to this point?
- What's their mental state and level of legal knowledge?

#### 2. Information gathering sequence
- What information do you need to collect?
- What order makes sense to the user?
- Which questions depend on previous answers?

#### 3. Conditional logic and branching
- When should users skip certain sections?
- What different paths might users take?
- How do different user types experience the interview?

#### 4. Review and completion
- How will users review their answers?
- What documents will be generated?
- What happens after completion?

### Sample planning workflow

1. **Start with the end**: What documents need to be produced? What information is required?

2. **Map the user journey**: Walk through the user's perspective from start to finish

3. **Create a rough flowchart**: Use any of the tools mentioned above to sketch the basic flow

4. **Identify decision points**: Mark where the interview branches based on user input

5. **Group related questions**: Organize questions into logical sections or pages

6. **Plan the review screen**: Decide how users will review and edit their answers

7. **Test with stakeholders**: Share your plan with colleagues or potential users for feedback

### Example: Planning a simple motion interview

Here's how you might plan a basic court motion interview:

```
Start → Court information → User type (attorney/self-rep) 
   ↓
Party information → Case details → Motion type
   ↓
Motion-specific questions → Supporting facts → Relief requested
   ↓
Review screen → Document generation → Next steps/filing information
```

Even this simple flow reveals important questions:
- Should court information come first, or party information?
- How does the user type affect what questions we ask?
- What motion-specific questions are needed for each type?

### Integration with project management

Your interview planning should connect with your broader [project management approach](project_management.md). Share your flowcharts and planning documents with your team, and use them to:

- Estimate development time more accurately
- Identify potential technical challenges early
- Create test cases for different user paths
- Brief developers on the intended user experience

## Preparing your template for automation

Once you have decided on the template file that you will use, you need to add
labels to each empty space on the form that will be filled in to match the
user's specific situation.