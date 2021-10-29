# AssemblyLine Documentation

[Read the documentation](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/)

## What this is

This repository contains documentation for the Document Assembly Line Project
run out of [Suffolk LIT Lab](https://suffolklitlab.org).

This project created [CourtFormsOnline.org](https://courtformsonline.org).

The primary repository that this documents is [docassemble-AssemblyLine](https://github.com/SuffolkLITLab/docassemble-assemblyline).

## Contributing to the documentation

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
Documentation is contained in a series of markdown files. The menu is contained in a file named `sidebar.js`.

You should have a local copy of node.js and npm installed to edit the documentation.

### Installing

Make a clone of this repository and then type:

```console
npm install
```

### Build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
npm run build
```

### Run locally

This command runs `npm run build`, then starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server:

```console
npm run start
```

### Deploy

We use GitHub pages for deployment. Use the command below to deploy the repository to the gh-pages branch. It will then [go live](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/).

```console
GIT_USER=<Your GitHub username> USE_SSH=TRUE npm run deploy
```
