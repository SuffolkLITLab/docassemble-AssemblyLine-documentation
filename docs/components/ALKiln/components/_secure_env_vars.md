Since [workflow environment variables](writing#env-vars) might hold sensitive information, ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables, even when the test has an error on that page. ALKiln avoids printing the value of an environment variable anywhere in the [report](writing#reports) or in the [console log](writing#console).

<!--
TODO: ALKiln:
- A Step that pauses pictures
- A Step that resumes pictures
-->
