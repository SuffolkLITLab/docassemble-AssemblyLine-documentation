Since [workflow environment variables](writing#env-vars) might hold sensitive information, ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables. It even [avoids taking pictures when the test has an error on that page](writing#error-pics) and during [the sign-in Step](writing#sign-in). ALKiln avoids printing the value of an environment variable anywhere in the [report](writing#report) or in the [console log](writing#console).

<!--
TODO: (maybe) Add an ALKiln Step that:
- pauses pictures
- resumes pictures
- gets a list of page ids that can contain sensitive info
- disables pictures for a whole test
This might lead to a false sense of security, though. Authors could accidentally forget to update tests when a page id changes, etc., and still feel their tests are secure. The last one might be the most secure. They could even do it in a Background section.
-->
