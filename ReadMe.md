# Stub

[![npm version](https://img.shields.io/npm/v/stub?style=for-the-badge)](https://www.npmjs.com/package/stub)![node version](https://img.shields.io/node/v/stub?style=for-the-badge)[![Build status - Linux/OSX](https://img.shields.io/travis/com/Zekfad/stub?style=for-the-badge&logo=linux&logoColor=white)](https://travis-ci.com/github/Zekfad/stub)[![Build status - Windows](https://img.shields.io/appveyor/build/Zekfad/stub?style=for-the-badge&logo=windows&logoColor=white)](https://ci.appveyor.com/project/Zekfad/stub)[![Codecov](https://img.shields.io/codecov/c/gh/Zekfad/stub?style=for-the-badge)](https://codecov.io/gh/Zekfad/stub)


Stub module.

## Features

Features presented in this stub:

* ESLint.
* Babel.
* Terser.
* TypeScript support.
* ESM and CommonJS output.
* TypeScript declaration generation.
* JSDoc generation.

## Note

Though you can import CommonJS files, it's highly recommended to use ESM
modules with `.js` extension and TypeScript. Otherwise declaration 
generation can produce broken declarations.

## Install

Install via yarn:

```
yarn add stub
```

Install via npm:

```
npm i stub
```

## Docs

[Read the docs on GitHub pages.](https://zekfad.github.io/stub/)

## Example

### Import

#### CommonJS

```js
const { stub, } = require('stub');
```

#### ES6

```js
import { stub, } from 'stub';
```

### Use

```js
console.log(stub(false)); // 'bar'
```
