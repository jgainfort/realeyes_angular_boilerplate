# Realeyes AngularJS Boilerplate

Create a new AngularJS Application using Realeyes style boilerplate.

## Prerequisites

1. Install [Node.js](http://nodejs.org)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org) `choco install nodejs`

2. Install these NPM packages globally

```bash
npm install -g bower gulp nodemon tsd
```

>Refer to these [instruction on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

## QuickStart

1. Within root directory perform the following

```bash
npm install
bower install
tsd install
```

## Project Options

### Linting

- Run code analysis using `gulp vet`. This runs hshint and jscs.

### Running in dev mode

- Run the project with `gulp serve-dev`
- Opens it in a browser and updates the browser with any file changes.

### Building the project

- Build the optimized project using `gulp build`.
- This creates the optimized code for the project and puts it int the build folder.

## Running the optimized code

- Run the optimize project from the build folder with `gulp serve-build`.

## Gulp Tasks

### Task Listing

- `gulp help`

    Displayes all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.
- `gulp vet --verbose`

    Displayes all files affected and extended information about the code analysis.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders
- `gulp clean-images`

    Remove all images from the build folder
- `gulp clean-code`

    Remove all javascript and html from the build folder
- `gulp clean-fonts`

    Remove all fonts from the build folder
- `gulp clean-styles`

    Remove all styles from the build folder

### Fonts and Images

- `gulp fonts`

    Copy all fonts from source to the build folder
- `gulp images`

    Copy all images from the source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Bower Files

- `gulp wiredep`

    Looks up all bower commponents' main files and JavaScript source code, then adds them to the `index.html`.
    The `.bowerrc` fil also runs this as a postinstall task whenever `bower isntall` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTMl templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.
- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.
- `gulp serve-dev --nosync`

    Serves the development code without launching the browser.
- `gulp serve-dev --debug`

    Launch debugger with node-inspector.
- `gulp serve-dev --debug-brk`

    Launch debugger and break on first line with node-inspector.

### Building Production Code

- `gulp html`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html
- `gulp build`

    Copies all fonts and images then runs `gulp html` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.
- `gulp serve-build --nosync`

    Serve the optimized code form the build folder and manually launch the browser.
- `gulp serve-build --debug`

    Launch debugger with node-inspector.
- `gulp serve-build --debug-brk`

    Launch debugger and break on the first line with node-inspector.

### Bumping Versions

- `gulp bump`

    Bump the minor version using semver.
    --type=patch // default
    --type=minor
    --type=major
    --type=pre
    --ver=1.2.3 // specific version
