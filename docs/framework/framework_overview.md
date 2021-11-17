---
id: framework_overview
title: |
    Feature documentation: using Assembly Line modules in your interview
sidebar_label: Feature Documentation
slug: /framework/overview
---

The Assembly Line code is organized into a few different packages and modules:

1. [ALToolbox](https://github.com/SuffolkLITLab/docassemble-ALToolbox), which
   has small utility functions and components that are used in AssemblyLine but
   that can be easily used by Docassemble developers who use other platforms.
1. [ALDashboard](https://github.com/SuffolkLITLab/docassemble-ALDashboard),
   which is a collection of tools to help administer a Docassemble server and debug interviews.   
1. [al_general.py](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/al_general.py),
   which contains Python classes that help developers represent people in Docassemble.
1. [al_document.py](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/al_document.py),
   which helps simplify the use of complex nested and contingent templates in
   Docassemble, including handling PDF overflow text.
1. [language.py](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/language.py),
   which has some small helper functions to make it simpler to author
   multilingual interviews
1. [MACourts](https://github.com/GBLS/docassemble-MACourts) and
   [al_courts.py](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/docassemble/AssemblyLine/language.py),
   which help model court, venue, and jurisdiction information in Docassemble for Massachusetts and as a possible starting point in
   other jurisdictions.