---
id: complexity
title: |
    Scoring form complexity with RateMyPDF
sidebar_label: |
  Scoring form complexity with RateMyPDF
slug: /complexity/complexity
---

[RateMyPDF](https://ratemypdf.com) is a tool built by Suffolk LIT Lab to help you
measure and improve the usability of court forms.

RateMyPDF assigns your PDF a score that reflects 14 different dimensions, including:

*	Reading grade level (a consensus score)
*	Percent of difficult words (currently drawn from the Dale-Chall word list)
*	Use of calculations
*	Number of pages
*	Number of legal citations per field
*	Average number of fields per page
*	Normalized answer length per field
*	Sentences per page
*	Percent of passive voice sentences
*	Percent of words written in all capital letters
*	Percent of "slot-in" fields
*	Percent of "gathered" fields
*	Percent of "third-party" fields
*	Percent of "created" fields


RateMyPDF compares your score to a benchmark that was created by gathering
24,000 forms from 46 States and the District of Columbia in the USA. It also includes specific
recommendations to improve several of the measurements.

## Why readability scores aren't good enough

[Readability](style_guide_readability.md) has been one of the only available
tools to measure the ease of use of court forms. Forward thinking courts have
readability targets of 6th grade. But because people don't just read forms--they
answer questions and follow instructions--readability isn't a very good measure
of form complexity, at least not on its own:

1. Forms use lots of short text (like: Address, Name, and so on), while
   readability scores are designed to evaluate long narratives.
1. Litigants **answer questions** and **follow instructions** on forms as well
   as reading words.
1. Answers can require getting information from a third party, finding a
   specific piece of paper (like an ID card), doing math, or making a decision.
1. Answers can be very sensitive, either because they are about private
   information, like a Social Security Number, or because they evoke a traumatic
   response, like details of an assault.   
1. Answers come in different formats, too. The difference between checking a box
   and writing out a long answer is significant.

Complexity and sensitivity can't always be avoided. For example: a complaint
asking for protection from abuse needs to disclose some information about the
abuse. But forms should never impose a burden on the litigant that doesn't have
a matching benefit.

## How we created our score

We built the RateMyPDF score by combining feedback from:

* Form automators
* Form authors
* Legal aid experts
* Court staff
* And our own in-house experience from building the Document Assembly Line.

The tool leverages a custom ML model, GPT-3, and heuristics to do the hard work.

A key feature of our score is that it leverages Caroline Jarrett and Gerry
Gaffney's
[framework](https://www.amazon.com/Forms-that-Work-Interactive-Technologies/dp/1558607102)
that classifies form responses as either:

* Slot-in
* Gathered
* Third-party, or
* Created

You can download our paper, 

<a target="\_blank" href={require('../assets/Beyond Readability with RateMyPDF.pdf').default}> Beyond Readability with RateMyPDF: a combined rule-based and machine learning approach to improving court forms </a> 
which explains our methods in a lot more detail.

## Use and limitations

### The measurement effect

As soon as form authors are aware of the concrete score that our tool provides,
we recognize that its value will decrease. A form specially tuned to score well
on an automated assessment may do so by manipulating features of the form that
were only proxies for the usability of the form itself.

We think our measure will be helpful to provide an initial score for a form. But
use the general principles contained on this website to improve your form
thereafter, and don't focus too much on the specifics of your score after revision.

### Inherent limitations in mechanical scores

Automated scores like the RateMyPDF score have limitations in accuracy. Our score
takes only attributes that are easily measurable and combines them into an overall
score, but it misses nuance and specifics to the form and its context.

The gold standard for improving forms is an individual usability test. You can run
a usability test for as little as a few hundred dollars and half a dozen hours of
time, and we think you should! We have written up a [short guide to usability testing here](https://suffolklitlab.org/legal-tech-class/docs/testing/testing/#usability-tests).

But usability testing:

* Can still be expensive or difficult to do at scale
* Requires applying judgment to disaggregate the causes of poorly performing forms.

We think mechanical scores can be very helpful to sort and classify large numbers of
forms at once and to provide a basic direction for improving even individual forms
when not applied dogmatically.

## Who built this

* Bryce Willey
* Quinten Steenhuis
* David Colarusso

And we worked closely with:

* Caroline Robinson
* Lily Yang
* Michelle B.

to identify and validate the features the RateMyPDF score measures.


## Our reading list

1. Barbara Bezdek. 1991. Silence in the Court: Participation and Subordination of Poor Tenants’ Voices in Legal Process. Hofstra L. Rev. 20, 3 (1992 1991), 533–608.
1. G. Bradski. 2000. The OpenCV Library. Dr. Dobb’s Journal of Software Tools (2000).
1. Kylie Brosnan, Bettina Grün, and Sara Dolnicar. Cognitive load reduction strategies in questionnaire design. International Journal of Market Research, 9.
1. Kevyn Collins-Thompson and Jamie Callan. 2004. A Language Modeling Approach to Predicting Reading Difficulty. (2004), 8.
1. Alice Davison and Robert N. Kantor. 1982. On the Failure of Readability Formulas to Define Readable Texts: A Case Study from Adaptations. Reading Research Quarterly 17, 2 (1982), 187–209. DOI:https://doi.org/10.2307/747483
1. Anne Fernald, Virginia A. Marchman, and Adriana Weisleder. 2013. SES differences in language processing skill and vocabulary are evident at 18 months. Developmental Science 16, 2 (2013), 234–248. DOI:https://doi.org/10.1111/desc.12019
1. Thomas François, Adeline Müller, Eva Rolin, and Magali Norré. 2020. AMesure: A Web Platform to Assist the Clear Writing of Administrative Texts. In Proceedings of the 1st Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics and the 10th International Joint Conference on Natural Language Processing: System Demonstrations, Association for Computational Linguistics, Suzhou, China, 1–7. Retrieved November 9, 2022 from https://aclanthology.org/2020.aacl-demo.1
1. Dr Jörg Fuchs, Tina Heyer, and Diana Langenhan. 2008. Influence of Font Sizes on the Readability and Comprehensibility of Package Inserts. Pharm. Ind. (2008).
1. Pamela Herd and Donald P. Moynihan. 2018. Administrative burden: policymaking by other means. Russell Sage Foundation, New York.
1. Matthew Honnibal and Ines Montani. 2017. spaCy 2: Natural language understanding with Bloom embeddings, convolutional neural networks and incremental parsing. Retrieved February 2, 2023 from https://spacy.io/
1. Caroline Jarrett, Gerry Gaffney, and Steve Krug. 2008. Forms that Work: Designing Web Forms for Usability (1st edition ed.). Morgan Kaufmann, Amsterdam ; Boston.
1. Lukas Lamm and Christian Wolff. 2021. GCS: A Quick and Dirty Guideline Compliance Scale. Journal of Usability Studies 16, 3 (2021), 24.
1. Shelley Miller-Shaul. 2005. The characteristics of young and adult dyslexics readers on reading and reading related cognitive tasks as compared to normal readers. Dyslexia 11, 2 (2005), 132–151. DOI:https://doi.org/10.1002/dys.290
1. Hein Pieterse. Towards Guidelines for Error Message Design in Digital Systems. 
1. Janice Redish. 2000. Readability formulas have even more limitations than Klare discusses. ACM J. Comput. Doc. 24, 3 (August 2000), 132–137. DOI:https://doi.org/10.1145/344599.344637
1. Luz Rello, Martin Pielot, and Mari-Carmen Marcos. 2016. Make It Big! The Effect of Font Size and Line Spacing on Online Readability. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (CHI ’16), Association for Computing Machinery, New York, NY, USA, 3637–3648. DOI:https://doi.org/10.1145/2858036.2858204
1. John P Sabatini. 2002. Efficiency in Word Reading of Adults: Ability Group Comparisons. Scientific Studies of Reading 6, 3 (July 2002), 267–298. DOI:https://doi.org/10.1207/S1532799XSSR0603_4
1. Mirjam Seckler, Silvia Heinz, Javier A Bargas-Avila, Klaus Opwis, and Alexandre N Tuch. 2014. Designing Usable Web Forms – Empirical Evaluation of Web Form Improvement Guidelines. (2014), 10.
1. Quinten Steenhuis and David Colarusso. 2021. Digital Curb Cuts: Towards an Open Forms Ecosystem. Akron Law Review 54, 4 (2021), 2.
1. Survey Monkey. 2008. Smart Survey Design. Survey Monkey. Retrieved December 7, 2021 from https://s3.amazonaws.com/SurveyMonkeyFiles/SmartSurvey.pdf
1. Susanne Trauzettel-Klosinski, Klaus Dietz, and the IReST Study Group. 2012. Standardized Assessment of Reading Performance: The New International Reading Speed Texts IReST. Investigative Ophthalmology & Visual Science 53, 9 (August 2012), 5452–5461. DOI:https://doi.org/10.1167/iovs.11-8284
1. Washington Law Help. 2022. How to File Petition for Order of Protection. Retrieved February 6, 2023 from https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/9100D6C9-D107-4B15-87B3-A898F12B6FD8/3701en_how-to-file-petition-for-order-of-protection.pdf
1. Antoinette Welsh. 2013. Effects of Trauma Induced Stress on Attention, Executive Functioning, Processing Speed, and Resilience in Urban Children. Seton Hall University Dissertations and Theses (ETDs) (December 2013). Retrieved from https://scholarship.shu.edu/dissertations/1907
1. Jenny Ziviani and John Elkins. 1984. An Evaluation of Handwriting Performance. Educational Review 36, 3 (November 1984), 249–261. DOI:https://doi.org/10.1080/0013191840360304
1. (2015). Paperwork Reduction Act (44 U.S.C. 3501 et seq.). Digital.gov. Retrieved February 2, 2023 from https://digital.gov/resources/paperwork-reduction-act-44-u-s-c-3501-et-seq/
1. (2023). Textstat. Retrieved February 7, 2023 from https://github.com/textstat/textstat
1. Field labels to use in template files | The Document Assembly Line Project. Retrieved February 3, 2023 from https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/label_variables
1. How to estimate burden | A Guide to the Paperwork Reduction Act. Retrieved November 9, 2022 from https://pra.digital.gov/burden/estimation/
1. How to write good questions for forms - NHS digital service manual. nhs.uk. Retrieved February 6, 2023 from https://service-manual.nhs.uk
1. Restraining order/abuse prevention order court forms | Mass.gov. Retrieved February 6, 2023 from https://www.mass.gov/lists/restraining-orderabuse-prevention-order-court-forms

And:

1. Our own page on [readability](style_guide_readability.md)
1. [Readability Scores: Reference guide](https://brycewilley.xyz/2022/01/readability-scores-reference), by team member Bryce Willey
1. [Benchmarking everyday documents](https://uploads-ssl.webflow.com/5c06fb475dbf1265069aba1e/5c2bb2a81110ecda570573fe_SC5Benchmarkingv4.pdf), Martin Evans, April 2011
1. [What makes a good document?](https://www.reading.ac.uk/web/files/simplification/SC2CriteriaGoodDoc-7.pdf), Rob Waller, April 2011
1. [How to estimate burden](https://pra.digital.gov/burden/estimation/), digital.gov
1. [The power of white space](https://www.interaction-design.org/literature/article/the-power-of-white-space)
1. [Clearmark awards criteria](https://centerforplainlanguage.org/awards/clearmark/criteria/)