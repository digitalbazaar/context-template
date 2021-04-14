/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const context = require('./context');
const constants = require('./constants');
const {CONTEXT_URL, CBORLD_VALUE} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  CONTEXT_URL,
  CONTEXT: context
};
