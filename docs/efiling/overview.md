---
id: efiling
title: |
    E-filing with Assembly Line
sidebar_label: Overview
slug: /efiling/overview
---

## Overview

Once you have an application that assembles court documents for users, the next logical step is to send those documents to the court directly for the user.
The features on this page assist with communicating to certain court Electronic Filing Managers, or EFMs, so you can send documents to those courts.

Currently, we support [Tyler Technology's implementation](https://www.tylertech.com/products/odyssey/file-serve) of [ECF v4.0](http://docs.oasis-open.org/legalxml-courtfiling/specs/ecf/v4.01/ecf-v4.01-spec/os/ecf-v4.01-spec-os.html), and [Jefferson Parish's JeffNet](https://www.jpclerkofcourt.us/courts/24th-judicial-district-court/e-filing/).

Below is a broad diagram of the entities that the e-filing feature interacts with.

![A diagram of the e-filing proxy server interacting with the EFSP docassemble package, and courts](../assets/efile_broad_arch.svg)

### E-file Proxy Server

The biggest part of the e-filing feature is the [E-file Proxy Server](https://github.com/SuffolkLITLab/EfileProxyServer), a docker packaged Java server that converts docassemble variables into ECF XML types and communicates with courts either over REST or SOAP.

You can host the proxy server on the same machine as a docassemble server, using docker-compose, or set up a separate HTTPS enabled server that servers multiple docassemble servers.

Further documentation on using the Proxy Server can be found [on Github](https://github.com/SuffolkLITLab/EfileProxyServer/tree/main/docs).

### EFSP Docassemble Package

There is also a [companion python package](https://github.com/SuffolkLITLab/docassemble-EFSPIntegration) to the Proxy Server that is intended to simplify the communication from the docassemble interview to the proxy server.
It provides a python API to the Proxy Server, and handles more advanced docassemble features for you.

The EFSP package also contains a generic filing interview that can be used an example of how to work with the python API.

:::caution
The generic filing interview is made for development purposes, and not intended for non-expert (legal or technical) use.
:::
