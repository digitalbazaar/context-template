#!/usr/bin/env node
/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const context = require('./context');
const constants = require('./constants');

// Serialize the context as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', constants.CONTEXT_FILENAME),
  JSON.stringify(context, null, 2)
);
