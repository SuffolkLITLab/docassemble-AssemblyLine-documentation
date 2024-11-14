Since [workflow environment variables](/docs/components/ALKiln/writing_tests.mdx#env-vars) might hold sensitive information, ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables, even when the test has an error on that page. ALKiln avoids printing the value of an environment variable anywhere in the [report](/docs/components/ALKiln/writing_tests.mdx#reports) or in the [console log](/docs/components/ALKiln/writing_tests.mdx#console).

<!--
TODO: ALKiln:
- A Step that pauses pictures
- A Step that resumes pictures
-->
