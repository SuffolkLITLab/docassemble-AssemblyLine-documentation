---
id: efiling_monitoring
title: |
  Monitoring your e-filing operations
sidebar_label: Monitoring
---

## Monitoring

Once you have developed and deployed your e-filing application, you will
have to monitor it to ensure it is functioning properly. This page has some
tips and tools that you can use to help you monitor your application.

### Accessing E-filing Proxy Logs

While you can add logs to your docassemble interview, you also might need
to access logs from the e-filing proxy to have a better idea of what is
happening during the e-filing process. If you are a server administrator, you can access these e-filing logs by using the E-filing logs interview, which you can access at `https://yourservername.com/start/EFSPIntegration/logs_interview`. This
will use the e-filing proxy credentials stored on your docassemble server to download all the logs from traffic from your server.

This interview also includes a filter for filing review comments, which is useful during a pilot launch and in making sure that your application isn't generating filings incorrectly.

### Keeping track of Court Codes

When making your interview, the court codes used might change. You should
continually run [automated testing](../ALKiln/automated_testing.mdx) against your
interview to ensure that the codes still exist as your program expects them to.
