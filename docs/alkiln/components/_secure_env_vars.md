ALKiln avoids taking pictures or downloading the HTML of pages that use environment variables, even when the test has an error on that page. ALKiln avoids printing the value of an environment variable anywhere in the report or in the console.

<!--
TODO:
- Add link to env vars
- Add to security/setup docs/interview - making a test account also helps make sure you don't expose an actual developer's sensitive information
- A Step that pauses pictures
- A Step that resumes pictures
-->

<!--
This should just be in the security docs

:::caution Security
Avoid [using test Steps to take pictures of pages](writing_tests.mdx#pics) where your interview shows sensitive information about the docassemble developer account that you use for ALKiln. ALKiln cannot know what you are showing on your pages. ALKiln takes special care when you tell it to *use* sensitive information, but take care with that too. It is probably possible to get around anything if you try hard enough.
:::
 -->