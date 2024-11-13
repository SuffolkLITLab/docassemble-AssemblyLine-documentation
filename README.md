# AssemblyLine Documentation

[Read the documentation](https://assemblyline.suffolklitlab.org/)

## What this is

This repository contains documentation for the Document Assembly Line Project
run out of [Suffolk LIT Lab](https://suffolklitlab.org).

This project created [CourtFormsOnline.org](https://courtformsonline.org).

The primary repository that this documents is [docassemble-AssemblyLine](https://github.com/SuffolkLITLab/docassemble-assemblyline).

## Contributing to the documentation

This website is built using [Docusaurus](https://docusaurus.io/), a static website generator for documentation. Documentation is contained in a series of markdown files. The menu is contained in a file named `sidebar.js`.

If you want to contribute, please follow the [LIT Lab style guide](https://github.com/SuffolkLITLab/styleguide). When you submit a pull request with your changes, request a review from one or more [LIT Lab staff members](https://github.com/orgs/SuffolkLITLab/teams/lit-lab-staff).

You will need to have a local copy of [node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed to edit the documentation.

### Installing locally

Make a local clone of this repository, navigate to the repository in the terminal, and enter:

```console
npm install
```

### Run locally

```console
npm run start
```

This command runs `npm run build`, then starts a local development server and opens up the documentation website in a browser window. Most changes are reflected live without having to refresh the page or restart the server.

### Build

This command generates static content in the **build** directory that can be served using any static contents hosting service.

```console
npm run build
```

### Deploy

We use GitHub pages for deployment. Use the command below to deploy the repository to the gh-pages branch. It will then go live at [asssemblyline.suffolklitlab.org](https://assemblyline.suffolklitlab.org/).

```console
GIT_USER=<Your GitHub username> USE_SSH=TRUE npm run deploy
```
