# Document Assembly Line Documentation

The Document Assembly Line Documentation is a Docusaurus-based documentation website that combines automatic Python API documentation generation with manually authored guides for the Document Assembly Line project by Suffolk LIT Lab.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

Bootstrap, build, and test the repository:
- Install Python dependencies: `pip install docspec_python==2.2.1 git+https://github.com/nonprofittechy/pydoc-markdown@escape-brackets` -- takes 20 seconds
- Clone external documentation sources (required for full build):
  ```bash
  cd .. # go up one directory from repo root
  git clone https://github.com/SuffolkLITLab/docassemble-AssemblyLine.git
  git clone https://github.com/SuffolkLITLab/FormFyxer.git  
  git clone https://github.com/SuffolkLITLab/docassemble-ALToolbox.git
  git clone https://github.com/SuffolkLITLab/docassemble-EFSPIntegration.git
  cd docassemble-AssemblyLine-documentation # return to repo root
  ```
- Generate Python API documentation: `pydoc-markdown` -- takes 2 seconds
- Fix FormFyxer case sensitivity: `rm -rf docs/components/formfyxer` (if the directory exists)
- Install Node.js dependencies: `PUPPETEER_SKIP_DOWNLOAD=true npm install` -- takes 20 seconds
- Build the documentation: `npm run build` -- **WILL FAIL with PDF generation error** - this is expected behavior in CI environments. The HTML build succeeds and creates usable documentation in the `build/` directory.

Run the documentation website:
- ALWAYS run the bootstrapping steps first.
- Development server: `npm run start` -- starts on http://localhost:3000, takes 30 seconds to be ready
- Production server: `npm run serve` -- serves built files on http://localhost:3000

## Critical Build Information

- **NEVER CANCEL** the `npm run build` command - it takes 60 seconds and may appear to hang during webpack compilation
- **ALWAYS** use `PUPPETEER_SKIP_DOWNLOAD=true npm install` due to network restrictions preventing Chrome download
- **PDF generation ALWAYS FAILS** in CI environments due to Puppeteer Chrome download restrictions - this is expected behavior
- FormFyxer case sensitivity: pydoc-markdown creates duplicate `FormFyxer` and `formfyxer` directories, causing build warnings. If the build fails with case sensitivity errors, run: `rm -rf docs/components/formfyxer`
- The build generates warnings about broken anchors - these are expected and do not prevent successful builds
- Complete build workflow: `pydoc-markdown && rm -rf docs/components/formfyxer && npm run build`

## Validation

- ALWAYS manually validate any new code by starting the development server and navigating to affected pages
- Test both development mode (`npm run start`) and production build (`npm run build && npm run serve`)
- The site should load at http://localhost:3000 with a blue-themed homepage featuring "Open-source tools for court forms, guided interviews, and e-filing"
- Navigation should work between homepage, Get started, and Documentation sections
- Always run `npm run clear` before building if you encounter unexpected webpack errors

## Common Tasks

The following are outputs from frequently run commands. Reference them instead of viewing, searching, or running bash commands to save time.

### Repository root structure
```
.
├── .git/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       └── test-deploy.yml
├── .gitignore
├── README.md
├── babel.config.js
├── docs/
├── docusaurus.config.js
├── package-lock.json
├── package.json
├── pydoc-markdown.yml
├── sidebars.js
├── src/
└── static/
```

### Key configuration files
- `docusaurus.config.js`: Main Docusaurus configuration including plugins, themes, and site metadata
- `pydoc-markdown.yml`: Configuration for extracting Python API documentation from external repositories
- `sidebars.js`: Navigation structure for documentation sections
- `package.json`: Node.js dependencies and scripts

### Build process sequence
1. Python dependencies installation (~20 seconds)
2. External repositories cloning (~5 seconds)
3. Python API documentation generation via pydoc-markdown (~2 seconds)
4. Node.js dependencies installation (~20 seconds)
5. Docusaurus build compilation (~60 seconds)

### Known working commands
- `npm run clear` -- clears build cache, takes 1 second
- `npm run start` -- development server, ready in 30 seconds
- `npm run build` -- production build, takes 60 seconds
- `npm run serve` -- serves built files
- `npm run swizzle` -- customize Docusaurus components
- `npm run deploy` -- deploys to GitHub Pages (requires GIT_USER and USE_SSH)

### Development workflow
1. Make changes to markdown files in `docs/` directory
2. Test with `npm run start` for live reload during development
3. Build with `npm run build` to test production build
4. Check for build warnings and broken links
5. Test navigation and content rendering with `npm run serve`

### External dependencies
The site pulls API documentation from these repositories:
- `docassemble-AssemblyLine`: Main Assembly Line framework
- `FormFyxer`: PDF and DOCX manipulation tools
- `docassemble-ALToolbox`: Additional utility functions
- `docassemble-EFSPIntegration`: E-filing integration components

### Troubleshooting
- If npm install fails: use `PUPPETEER_SKIP_DOWNLOAD=true npm install`
- If build fails with FormFyxer case errors: `rm -rf docs/components/formfyxer`
- If webpack compilation appears stuck: wait at least 60 seconds before investigating
- If development server fails to start: run `npm run clear` first
- **PDF generation always fails in CI** due to Chrome/Puppeteer restrictions - this is normal and expected
- For local PDF generation: ensure Chrome is installed and accessible to Puppeteer, or disable `autoBuildPdfs` in `docusaurus.config.js`

### CI/CD Pipeline
GitHub Actions automatically:
1. Installs Python 3.11 and required packages
2. Clones external documentation repositories
3. Runs pydoc-markdown for API documentation
4. Installs Node.js 20 and npm dependencies
5. Builds the site with `npm run build`
6. Deploys to GitHub Pages on main branch pushes

Test deployment runs the same process for pull requests without the final deploy step.