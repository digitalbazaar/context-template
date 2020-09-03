'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.EXAMPLE_CONTEXT_URL,
  require('../contexts/example-v1.jsonld'));
