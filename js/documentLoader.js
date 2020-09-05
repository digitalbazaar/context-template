'use strict';

const {EXAMPLE_CONTEXT_URL} = require('./constants');
const context = require('../contexts/example-v1.jsonld');

module.exports = {
  documentLoader(url) {
    if(url !== EXAMPLE_CONTEXT_URL) {
      throw new Error(`Loading document "${url}" is not allowed.`);
    }

    return {
      contextUrl: null,
      document: context,
      documentUrl: url
    };
  }
};
