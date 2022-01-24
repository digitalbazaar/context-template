/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, appContextMap, CONTEXT_URL_V1, CONTEXT_V1
} = require('..');

const contextUrl = constants.CONTEXT_URL_V1;

describe('Example Context', () => {
  it('constants', async () => {
    expect(appContextMap).to.exist;
    expect(constants).to.exist;
    expect(constants).to.have.property('CBORLD_VALUE');
    expect(CONTEXT_URL_V1).to.exist;
    expect(CONTEXT_V1).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(contextUrl)).to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(contextUrl)).to.exist;
  });
});
