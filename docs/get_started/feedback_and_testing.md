---
id: feedback_and_testing
title: Feedback and user testing
sidebar_label: Feedback and testing
slug: feedback_and_testing
---

Getting feedback is essential for building effective legal interviews. This page covers different types of feedback processes and user testing methodologies to help you create interviews that truly serve your users' needs.

## Types of feedback

### Internal feedback (preliminary feedback)

Before you show the interview to decision-makers and stakeholders, get someone with Document Assembly Line experience to test it with you. This preliminary feedback helps you identify issues you may have missed and questions you still need to ask the decision-maker.

:::tip Finding reviewers
If you aren't sure where to find someone to give you preliminary feedback, try asking [the community](intro.md#join-the-community)! Come to one of the Monday community meetings or ask in the Microsoft Teams forum.
:::

#### How to conduct internal feedback sessions

**Preparation:**
* Schedule a video meeting with an experienced tester
* Have your interview ready with test data or scenarios
* Prepare to record the session (with permission) so you can focus on the feedback

**During the session:**
* Remind the tester that they are testing the interview, not being tested
* Encourage them to comment on all aspects: content, flow, design, functionality
* Ask them to follow different branches of the interview logic
* Listen carefully and ask follow-up questions to clarify feedback

**Sample questions to ask:**
* "What's your first impression of this screen?"
* "Is anything confusing or unclear?"
* "What would you expect to happen next?"
* "Does this match how you would naturally think about this process?"
* "Are there any legal or procedural issues I should consider?"

### External feedback

External feedback comes from decision-makers, stakeholders, and subject matter experts who understand the legal problem your interview addresses.

**Best practices for external feedback:**
* Provide clear instructions on what kind of feedback you need
* Ask for feedback in writing as a list of specific requested changes
* Request that decision-makers consolidate and clarify conflicting stakeholder feedback
* Ask for specific text suggestions, not just general comments

**Sample feedback request email:**
```
Subject: Review Request - [Interview Name] Draft

Hi [Name],

The draft of the [Interview Name] is ready for your review. Please test it using realistic scenarios and provide feedback by [date].

When reviewing, please:
1. Go through the entire interview as if you were a real user
2. Test different scenarios (e.g., different family situations, income levels)
3. Provide feedback as a specific list of requested changes
4. Include suggested text for any wording changes
5. Note the page ID (shown at the top) for specific pages

Access the interview here: [URL]

Thanks!
[Your name]
```

## User testing methodologies

User testing involves observing real users interact with your interview to identify usability issues and areas for improvement.

### Planning user tests

**Before you begin:**
* Define your testing goals (e.g., "Can users complete the interview in under 30 minutes?")
* Identify your target user group
* Prepare realistic test scenarios
* Set up a comfortable testing environment
* Plan to record sessions (with permission)

**Recruiting participants:**
* Aim for 3-5 participants per round of testing
* Recruit people who match your actual user demographics
* Consider offering modest compensation for their time
* Be clear about time commitment (typically 45-60 minutes)

### Conducting user tests

**Test environment setup:**
* Use a quiet, private space
* Have a computer or tablet ready with the interview loaded
* Prepare backup devices in case of technical issues
* Have note-taking materials ready

**During the test session:**

1. **Introduction (5-10 minutes)**
   * Welcome the participant and thank them for their time
   * Explain that you're testing the interview, not the participant
   * Get permission to record (if applicable)
   * Explain the think-aloud process

2. **Background questions (5 minutes)**
   * Ask about their experience with similar tools
   * Confirm they fit your target user profile
   * Ask about their comfort level with technology

3. **Main testing session (20-30 minutes)**
   * Give them the scenario and ask them to complete the interview
   * Encourage them to think aloud: "Tell me what you're thinking"
   * Take notes on where they pause, seem confused, or make errors
   * Ask follow-up questions: "What did you expect to see here?"

4. **Post-test interview (10-15 minutes)**
   * Ask about their overall impression
   * Discuss any difficulties they encountered
   * Ask for suggestions for improvement
   * Get their feedback on specific elements you're unsure about

### Sample test scenarios

Here are examples of realistic scenarios you can give to test participants:

**Family law scenario:**
> "You are divorced and your ex-spouse hasn't been paying child support regularly. You have two children, ages 8 and 12. You work part-time and earn about $2,000/month. You want to ask the court to enforce the child support order. Please use this interview to prepare the necessary court forms."

**Housing scenario:**
> "You rent an apartment for $1,200/month. Your landlord hasn't fixed a broken heater in three weeks, despite your requests. The apartment is very cold and you're worried about your health. You want to ask the court for help. Please use this interview to see what legal options you have."

**Benefits scenario:**
> "You applied for food assistance (SNAP) two months ago but haven't heard back. You have three children and your family is struggling to afford groceries. Please use this interview to understand your next steps."

### Analyzing feedback and test results

**During testing, watch for:**
* Places where users pause or seem confused
* Errors or misunderstandings
* Questions users ask
* Places where they want to go back or change answers
* Technical difficulties
* Emotional reactions (frustration, relief, confidence)

**After testing:**
* Review notes and recordings promptly while details are fresh
* Look for patterns across multiple users
* Prioritize issues that affect task completion
* Consider both major usability issues and minor polish improvements

**Sample findings and solutions:**

| Finding | Solution |
|---------|----------|
| Users don't understand legal term "respondent" | Change to "the other person in your case" with legal term in parentheses |
| Users confused about income calculation | Add examples and a calculator tool |
| Many users miss important warning text | Make warning text larger and add an icon |
| Users want to review their answers before submitting | Add a review screen before final submission |

## Technical feedback tools

The Document Assembly Line includes several tools to collect feedback automatically:

### Built-in feedback collection

* **Footer feedback links**: Add feedback links to every page using the [GithubFeedbackForm package](../components/GithubFeedbackForm/github_feedback.md)
* **Review widgets**: Add quick thumbs-up/thumbs-down ratings on specific pages
* **Session linking**: Save user sessions so you can debug specific issues

### Analytics and monitoring

* **Interview completion rates**: Track how many users complete vs. abandon the interview
* **Error tracking**: Monitor for technical errors or crashes
* **Performance monitoring**: Ensure interviews load quickly and function smoothly

## Iteration and improvement

### Creating a feedback loop

1. **Collect feedback** from multiple sources: internal testing, external stakeholders, user testing, and built-in feedback tools
2. **Analyze and prioritize** feedback based on impact on user success and frequency of the issue
3. **Make targeted improvements** focusing on the most critical issues first
4. **Test changes** to ensure they actually improve the user experience
5. **Repeat the cycle** regularly to continuously improve your interviews

### Sample improvement roadmap

**Phase 1: Core functionality** (before launch)
* Fix any blocking issues that prevent task completion
* Address major usability problems found in user testing
* Ensure all legal requirements are met

**Phase 2: Usability refinements** (1-2 months after launch)
* Improve unclear language or instructions
* Add helpful features like calculators or examples
* Polish the visual design and flow

**Phase 3: Advanced features** (3-6 months after launch)
* Add integrations with other systems
* Implement advanced branching logic
* Add multi-language support (if needed)

## Resources and templates

### User testing templates

**Consent form for recording:**
> "We'd like to record this session to help us improve the interview. The recording will only be used by our team and will be deleted after we've made improvements. Do you consent to being recorded? You can change your mind at any time."

**Pre-test questionnaire:**
1. How comfortable are you using websites and online forms?
2. Have you ever used online legal tools before?
3. How familiar are you with [specific legal area]?
4. What devices do you typically use to access websites? (computer, phone, tablet)

**Post-test questionnaire:**
1. Overall, how would you rate this interview? (1-10 scale)
2. What was the most helpful part?
3. What was the most confusing or difficult part?
4. Would you recommend this tool to someone in a similar situation?
5. Any other suggestions for improvement?

### Setting up a testing panel

Consider creating a panel of volunteers who can test interviews regularly:

* Recruit a diverse group representing your target users
* Offer modest compensation or recognition for their time
* Maintain a database with their contact information and testing history
* Rotate participants so you get fresh perspectives
* Build relationships so people feel comfortable giving honest feedback

For help setting up user testing panels, contact your local legal aid organization or law school clinic program.

## Getting started with feedback

If you're new to collecting feedback on legal interviews:

1. **Start small**: Begin with internal feedback from colleagues
2. **Test early**: Don't wait until your interview is "perfect" 
3. **Focus on one thing at a time**: Test specific aspects (e.g., just the intake flow) rather than everything at once
4. **Listen more than you talk**: Let users struggle through problems rather than jumping in to help immediately
5. **Thank participants**: People are giving you valuable time and insight

Remember: every piece of feedback is an opportunity to make your interview more effective at helping people access justice.