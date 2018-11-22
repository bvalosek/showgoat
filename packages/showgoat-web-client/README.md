# ShowGOAT Web Client

A music events aggregator and discovery web app augmented with Spotify API data.

[![CircleCI](https://circleci.com/gh/bvalosek/showgoat.svg?style=shield&circle-token=7c646acac0c7a518309d325b24597b5d320d496b)](https://circleci.com/gh/bvalosek/showgoat)


## Requirements

+ NodeJS 10.x ([nvm](https://github.com/creationix/nvm) recommended)

## Tech Stack

### App

* [react](https://facebook.github.io/react/) - View layer

### Dev Tooling

* [typescript](https://www.typescriptlang.org/) - Static type checker
* [eslint](https://eslint.org/) - JS linter
* [tslint](https://palantir.github.io/tslint/) - TS linter

### Build Tooling

* [babel](https://babeljs.io/) - ESNext/JSX/TS compiler
* [webpack](https://webpack.github.io/) - Module bundler

### Test Tooling

* [jest](https://facebook.github.io/jest/) - Unit test suite

### Deployment

* [circle](https://circleci.com) - CI platform

## Setup

Clone the repository (if you are using Windows, see the [Windows Development](#windows-development) section):

```sh
$ git clone git@github.com:bvalosek/showgoat.git
```

Install dependencies:

```sh
$ npm install
```

### Editor Config

This project uses an [.editorconfig](https://github.com/wellsmith/phoenix-portal-ui/blob/develop/.editorconfig) file to maintain consistent coding styles between different editors.

There are editorconfig plugins that will read this file and automatically configure your editor to adhere to it:

+ Visual Studio Code: [editorconfig-vscode](https://github.com/editorconfig/editorconfig-vscode)
+ WebStorm: [editorconfig](https://plugins.jetbrains.com/plugin/7294-editorconfig)
+ Atom: [atom-editorconfig](https://github.com/sindresorhus/atom-editorconfig)
+ Sublime: [editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime)
+ Brackets: [brackets-editorconfig](https://github.com/kidwm/brackets-editorconfig)
+ Vim: [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim)

## Start

Start the development server at [http://localhost:3000](http://localhost:3000) (implicitly rebuilds on code changes):

```sh
$ npm start
```

## Test

### Unit Tests

Run unit tests (implicitly re-runs on code changes):

```sh
$ npm test
```

Generate unit test coverage:

```sh
$ npm run coverage
```

## Release

Generate a production release in the `build` directory:

```sh
$ npm run build
```

## Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-), with a few overrides. See [package.json](./package.json) for overrides.

### Windows Development

If you are developing on Windows, update the `core.autocrlf` setting prior to cloning the repository to preserve project line endings:

```sh
$ git config --local core.autocrlf false
```
