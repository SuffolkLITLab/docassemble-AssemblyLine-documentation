# Table of Contents

* [ALDashboard.package\_scanner](#ALDashboard.package_scanner)
  * [URL](#ALDashboard.package_scanner.URL)
  * [PARAMETERS](#ALDashboard.package_scanner.PARAMETERS)
  * [DELAY\_BETWEEN\_QUERYS](#ALDashboard.package_scanner.DELAY_BETWEEN_QUERYS)
  * [getUrl](#ALDashboard.package_scanner.getUrl)
  * [fetch\_github\_repos](#ALDashboard.package_scanner.fetch_github_repos)

---
sidebar_label: package_scanner
title: ALDashboard.package_scanner
---

<a id="ALDashboard.package_scanner.URL"></a>

#### URL

The basic URL to use the GitHub API

<a id="ALDashboard.package_scanner.PARAMETERS"></a>

#### PARAMETERS

Additional parameters for the query (by default 100 items per page)

<a id="ALDashboard.package_scanner.DELAY_BETWEEN_QUERYS"></a>

#### DELAY\_BETWEEN\_QUERYS

The time to wait between different queries to GitHub

<a id="ALDashboard.package_scanner.getUrl"></a>

#### getUrl(url)

```python
def getUrl(url)
```

Given a URL it returns its body

<a id="ALDashboard.package_scanner.fetch_github_repos"></a>

#### fetch\_github\_repos(github\_user, sub\_queries)

```python
def fetch_github_repos(github_user, sub_queries) -> dict
```

Given a github user input, returns soughted info. It doesn&#x27;t contain version number.

