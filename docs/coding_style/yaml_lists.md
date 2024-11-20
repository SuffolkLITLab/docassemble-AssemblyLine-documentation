---
id: yaml_lists
title: Collecting items in lists
sidebar_label: Collecting items in lists
slug: yaml_lists
---

## Guiding Principles

Try to gather items in a list in a way that would be natural to do in a
conversation. For example: if you ask about income, you might naturally ask:
* do you work?
* do you have any other jobs?
* do you have any pension income?  

If you ask about children, it may be more natural to ask:
* do you have any children?
* how many?

And then ask for the information of each child one at at a time. In other
circumstances, it may be simpler to let someone interact with a button to add
additional items, one at a time where they can see the full list they have
entered at the same time that they add new items.


## Ask for total number of items up front

This is the preferred method for gathering items in a list. It requires the
fewest clicks and least explanation for users. It's relatively intuitive
although it does require entering information on multiple screens.

Label the items in the list as the user progresses through the form so that it is
clear which item is being asked about.

For example:

```yaml
question: |
  % if i == 0:
  What is the name of your oldest child?
  % else:
  What is the name of your ordinal(i) child?
  % endif
```

## Ask for items with "is there another" after each item

This is another simple method but very "clicky". After each item, the user needs
to answer "are there any more?" It's also important to reflect back the number
of currently gathered items so someone does not get lost in trying to remember
which items they have already told the system about.

It works well when the number of items is not important to the user. For
example, people usually know the number of children they have. They can count
the number of bank accounts or income sources they have, but it's not a number
they have in their mind already.

Consider adding a table or list of the children at the end as a summary/check
that they did the entry correctly.


### Ask for items with the "list collect" feature

Appropriate when adding multiple items is not likely, the user does not
necessarily know the total number of items in advance or asking for a total
number would be awkward, and there are only a few fields necessary to collect
each item.

The "list collect" feature may benefit from additional custom CSS to polish the
interface.
