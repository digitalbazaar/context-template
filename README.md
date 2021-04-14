# Context Template Repository _(context-template)_

[![Build status](https://img.shields.io/github/workflow/status/digitalbazaar/context-template/Node.js%20CI)](https://github.com/digitalbazaar/context-template/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/context-template)](https://codecov.io/gh/digitalbazaar/context-template)
[![NPM Version](https://img.shields.io/npm/v/context-template.svg)](https://npm.im/context-template)

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

Requires Node.js 12+

To install via NPM:

```
npm install context-template
```

## Usage

```js
import exampleCtx from 'context-template';
// or
const exampleCtx = require('context-template');
const {contexts, constants, appContextMap} = exampleCtx;

exampleCtx.CONTEXT_URL
// 'https://w3id.org/example/v1'

// Codec term map value for CBOR-LD
exampleCtx.constants.CBORLD_CODEC_VALUE
// 0x0..

// get context data for a specific context
exampleCtx.CONTEXT
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`
- `CONTEXT`
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.
- `appContextMap`: For use with `cborld` library.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
