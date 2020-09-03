# Context Template Repository _(context-template)_

<!-- [![NPM Version](https://img.shields.io/npm/v/context-template.svg?style=flat-square)](https://npm.im/context-template) -->

> A GitHub template repository for JSON-LD contexts.


## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

*

## Install

Requires Node.js 10+

To install via NPM:

```
npm install context-template
```

## Usage

```js
const exampleContext = require('context-template');

// use URL in a JSON-LD context
const obj = {
  "@context": [
    exampleContext.constants.EXAMPLE_CONTEXT_URL,
    // ...
  ],
  // ...
};

// get context data for a specific context
const data = exampleContext.contexts.get('https://w3id.org/example/v1');
// ...
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports two properties:
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `EXAMPLE_CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.
