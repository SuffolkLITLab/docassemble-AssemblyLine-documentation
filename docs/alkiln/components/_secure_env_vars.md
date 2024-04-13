Since [workflow environment variables](writing_tests.mdx#env-vars) might hold sensitive information, ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables, even when the test has an error on that page. ALKiln avoids printing the value of an environment variable anywhere in the [report](writing_tests.mdx#reports) or in the [console log](writing_tests.mdx#console).

<!--
TODO:
- Add link to env vars
- Add to security/setup docs/interview - making a test account also helps make sure you don't expose an actual developer's sensitive information
- A Step that pauses pictures
- A Step that resumes pictures
-->
