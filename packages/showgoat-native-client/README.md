# showgoat native client

A music events aggregator and discovery web app augmented with Spotify API data.

## Tech Stack

### App

* [react](https://facebook.github.io/react/) - View layer
* [react-native](https://facebook.github.io/react-native/) - Native app framework

### Dev Tooling

* [eslint](https://eslint.org/) - JS linter

### Build Tooling

* [babel](https://babeljs.io/) - ESNext/JSX/TS compiler

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

Install Expo CLI: https://docs.expo.io/versions/v31.0.0/introduction/installation#local-development-tool-expo-cli

Start the development server with:

```sh
$ npm start
```

Use [this](https://docs.expo.io/versions/latest/guides/up-and-running.html#open-the-app-on-your-phone-or) to see how to view the app on Android on iOS.

## Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-), with a few overrides. See [package.json](./package.json) for overrides.

### Windows Development

If you are developing on Windows, update the `core.autocrlf` setting prior to cloning the repository to preserve project line endings:

```sh
$ git config --local core.autocrlf false
```
