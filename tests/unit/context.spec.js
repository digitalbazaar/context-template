/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.use(require('dirty-chai'));
chai.should();
const {expect} = chai;

const {
  contexts, constants, appContextMap, documentLoader
} = require('../../dist/context.js');

const contextUrl = constants.EXAMPLE_CONTEXT_URL;

describe('Example Context', () => {
  it('constants', async () => {
    expect(constants).to.exist();
    expect(constants).to.have.property('EXAMPLE_CBORLD_VALUE');
  });

  it('contexts', async () => {
    expect(contexts.get(contextUrl)).to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(contextUrl)).to.exist();
  });

  it('documentLoader', async () => {
    const {document} = await documentLoader(contextUrl);
    expect(document).to.have.property('@context');
  });
});
