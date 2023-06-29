#!/usr/bin/env node
/*!
 * Copyright (c) 2021-2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const ctx = require('..');

// Serialize the context as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', ctx.constants.CONTEXT_FILENAME),
  JSON.stringify(ctx.CONTEXT, null, 2) + '\n'
);
