# FIXME JSON-LD Context _(@digitalbazaar/FIXME-context)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/FIXME-context/main.yml)](https://github.com/digitalbazaar/FIXME-context/actions/workflow/main.yml)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/FIXME-context.svg)](https://npm.im/@digitalbazaar/FIXME-context)

> A FIXME JSON-LD context for JavaScript.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [FIXME](https://FIXME/FIXME)

## Install

- Requires Node.js 18+.

To install via NPM:

```
npm install @digitalbazaar/FIXME-context
```

## Usage

```js
// ESM
import * as ctx from '@digialbazaar/FIXME-context';
// CommonJS
const ctx = require('@digitalbazaar/FIXME-context');
const {contexts, constants, appContextMap} = ctx;

// Default context URL
ctx.CONTEXT_URL
// -> 'https://w3id.org/example/v1'

// Default context data
ctx.CONTEXT
// -> full context object

// Default codec term map value for CBOR-LD
ctx.constants.CBORLD_VALUE
// ->  0x0..
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`: Default context URL.
- `CONTEXT`: Default context data.
- `CBORLD_VALUE`: Default codec term map value for [CBOR-LD][].
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps all context URLs to full context data.
- `appContextMap`: For use with the [cborld][] library.

## Status

- `https://w3id.org/example/v1`: Under development. Not stable.

## Developing

Source is available at:
- https://github.com/digitalbazaar/FIXME-context

**WARNING**: The `.jsonld` in `contexts/` is auto-generated by the `npm run
build` script, each time you run the test suite.

Do NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[CBOR-LD]: https://digitalbazaar.github.io/cbor-ld-spec/
[cborld]: https://github.com/digitalbazaar/cborld
[webpack]: https://webpack.js.org/
