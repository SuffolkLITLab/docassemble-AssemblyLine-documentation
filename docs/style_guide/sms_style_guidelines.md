---
id: sms_style_guidelines
title: SMS notification style guidelines
sidebar_label: SMS notifications
slug: sms_style_guidelines
---

When sending SMS notifications to users, especially for court reminders and legal processes, following consistent style guidelines helps ensure messages are effective, accessible, and professional.

## Core principles

### Keep messages terse

SMS messages should be concise and to the point. Users don't want to scroll through long messages on their phone.

**Why this matters:**
- Long messages can be broken into multiple segments that may arrive out of order on older devices
- Users scan messages quickly and may miss important information in lengthy texts
- Messages should fit on screen without scrolling in most messaging apps

**Best practices:**
- Aim for 160 characters or less when possible
- Use essential information only
- Avoid redundant phrases
- Use abbreviations where appropriate and clear (e.g., "Court Forms Online" → "CFO")

**Examples:**

✅ **Good:**
```
Jane, you may have court tomorrow!

Your court date should be 03/15/2024 at 9:00 AM based on info you provided to Court Forms Online.

This is not from the court. Double-check for changes.

Unsubscribe: [link] or reply STOP
```

❌ **Too long:**
```
Dear Jane,

We hope this message finds you well. We are writing to remind you that according to the information you provided when you completed the eviction answer interview at Court Forms Online, you may have a court appearance scheduled for tomorrow, March 15th, 2024 at 9:00 AM. Please note that this is not an official message from the court system, and you should independently verify your court date as schedules can change. If you no longer wish to receive these helpful reminders, you can unsubscribe by clicking the following link [link] or by replying STOP to this message to stop all messages from Court Forms Online.
```

### Include cancellation information

Every SMS must clearly explain how users can stop receiving messages.

**Required elements:**
- Include unsubscribe link when possible
- Always mention "reply STOP" option
- Be specific about what STOP will do (stop all messages from your organization)

**Template:**
```
[Main message content]

Unsubscribe: [link] or reply STOP to stop all messages from [ORGANIZATION_NAME].
```

### Specify total expected messages

Let users know how many messages to expect in the series when enrolling or in early messages.

**Examples:**
- "You'll get 3 reminders total about your court date"
- "This is reminder 1 of 2"
- "Final reminder"

### Identify the sender

Always clearly state who the message is from, especially important for legal/government-related communications.

**Best practices:**
- Use your organization name consistently
- Include it early in the message
- Distinguish between your organization and official court communications

## Technical considerations

### Message length limits

- **160 characters:** Traditional SMS limit, safest for older devices
- **306 characters:** Extended SMS limit for modern devices
- **Beyond 306 characters:** Message will be split into multiple parts that may arrive out of order

### Device compatibility

- Assume some users have older devices or carriers with limited SMS support
- Test messages on various devices when possible
- Avoid special characters that may not display properly
- Use plain text formatting

## Message templates

### Court reminder template
```yaml
template: court_reminder_sms
content: |
  ${ users }, you may have court tomorrow!
  
  Your court date should be ${ court_date } at ${ court_time } based on info from Court Forms Online.
  
  This is not from the court. Double-check for changes.
  
  Unsubscribe: ${ interview_url_action('al_reminders_unsubscribe_emails') } or reply STOP to stop all messages from ${ AL_ORGANIZATION_TITLE }.
```

### Initial confirmation template
```yaml
template: sms_signup_confirmation
content: |
  Hi ${ users }! You'll get 3 reminders about your court date from Court Forms Online.
  
  Next reminder: ${ next_reminder_date }
  
  Reply STOP anytime to unsubscribe.
```

### Series progress template
```yaml
template: sms_with_progress
content: |
  ${ users }, reminder 2 of 3: Court tomorrow at ${ court_time }!
  
  From Court Forms Online. Not an official court message.
  
  Reply STOP to unsubscribe.
```

## Assembly Line integration

### Including in AL reminders

When using the Assembly Line reminder system, SMS templates should follow these guidelines:

```yaml
template: your_sms_reminder_template
content: |
  ${ users }, [brief main message]
  
  [Essential details from Court Forms Online]
  
  This is not from the court.
  
  Unsubscribe: ${ interview_url_action('al_reminders_unsubscribe_emails') } or reply STOP for all messages from ${ AL_ORGANIZATION_TITLE }.
```

### Required unsubscribe elements

All Assembly Line SMS messages should include:
1. The unsubscribe link: `${ interview_url_action('al_reminders_unsubscribe_emails') }`
2. The STOP keyword instruction
3. Reference to `${ AL_ORGANIZATION_TITLE }` for consistency

## Testing your messages

### Content checklist
- [ ] Message is under 160 characters if possible
- [ ] Sender is clearly identified
- [ ] Unsubscribe options are provided
- [ ] Main action/information is clear
- [ ] User expectations are set appropriately

### Technical testing
- [ ] Test on different devices and carriers
- [ ] Verify message arrives as single SMS
- [ ] Confirm unsubscribe links work
- [ ] Test STOP keyword functionality

## Common mistakes to avoid

- **Don't** use all caps (can appear like shouting)
- **Don't** include excessive punctuation or emoji
- **Don't** assume users remember previous messages
- **Don't** forget to distinguish from official court communications
- **Don't** omit unsubscribe information
- **Don't** make messages too formal or too casual